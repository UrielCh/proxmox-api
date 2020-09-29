import { QmMonitor, Proxmox, USBHostInfo } from "proxmox-api";
const usbDetect = require('usb-detection');

export interface DeviceDesc {
    locationId: number;
    vendorId: number;
    productId: number;
    deviceName: string;
    manufacturer: string;
}

const vendorFromDevice = (device: DeviceDesc): { vendorId: string, productId: string } => {
    const vendorId = device.vendorId.toString(16).padStart(4, '0');
    const productId = device.productId.toString(16).padStart(4, '0');
    return { vendorId, productId };
}

export default class HotPlugService {
    private node?: string;
    private qmMonitor?: QmMonitor;
    // private oldUsb: USBHostInfo[] = [];
    private usbIndex: Set<string> = new Set();
    constructor(private vmid: number, private proxmox: Proxmox.Api) {
    }

    private async getQmMonitor(): Promise<QmMonitor> {
        if (!this.qmMonitor) {
            const nodes = await this.proxmox.nodes.$get();
            this.node = nodes[0].node;
            this.qmMonitor = new QmMonitor(this.proxmox, nodes[0].node, this.vmid);
        }
        return this.qmMonitor;
    }

    private key(usb: USBHostInfo): string {
        return `${usb.class},${usb.addr},${usb.bus},${usb.port},${usb.vendorId}:${usb.productId}`
    }

    private indexUsb(usbs: USBHostInfo[]) {
        this.usbIndex.clear()
        for (const usb of usbs) {
            this.usbIndex.add(this.key(usb));
        }
    }

    /**
     * faster but do not support multiple identical USB devices
     */
    public async hotPlugByVendor(): Promise<any> {
        usbDetect.startMonitoring();
        const qmMonitor = await this.getQmMonitor();
        usbDetect.on('add', async (device: DeviceDesc) => {
            const { vendorId, productId } = vendorFromDevice(device);
            const key = `V${vendorId}P${productId}`;
            console.log(`VM Hot Pluging ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}] with Key:${key}`);
            await qmMonitor.deviceAddById(key, { vendorId, productId });
        });

        usbDetect.on('remove', async (device: DeviceDesc) => {
            const { vendorId, productId } = vendorFromDevice(device);
            console.log(`remove ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}]`);
        });
    }

    /**
     * slower, but support multiple identical USB devices
     */
    public async hotPlugByPort(): Promise<any> {
        usbDetect.startMonitoring();
        const qmMonitor = await this.getQmMonitor();
        this.indexUsb(await qmMonitor.infoUsbhost())
        usbDetect.on('add', async (device: DeviceDesc) => {
            const vendorId = device.vendorId.toString(16).padStart(4, '0');
            const productId = device.productId.toString(16).padStart(4, '0');
            const allUsb = await qmMonitor.infoUsbhost();
            // filter by vendorId:productId
            let newUsb = allUsb.filter(usb => usb.vendorId.endsWith(vendorId) && usb.productId.endsWith(productId));
            newUsb = newUsb.filter((usb) => !this.usbIndex.has(this.key(usb)));
            this.indexUsb(allUsb);
            for (const usb of newUsb) {
                const key = `bus${usb.addr}port${usb.port}`;
                console.log(`VM Hot Pluging ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}] with Key:${key}`);
                await qmMonitor.deviceAddByPort(key, { bus: usb.bus, port: usb.port });
            }
        });

        usbDetect.on('remove', async (device: DeviceDesc) => {
            const { vendorId, productId } = vendorFromDevice(device);
            console.log(`remove ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}]`);
            this.indexUsb(await qmMonitor.infoUsbhost())
        });
    }
}
