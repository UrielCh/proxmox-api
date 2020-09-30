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
    constructor(private proxmox: Proxmox.Api, private vmid?: number,) {
    }

    async findPassthroughVmid(): Promise<number> {
        const nodes = await this.proxmox.nodes.$get();
        const node = nodes[0].node;
        const vms = await this.proxmox.nodes.$(node).qemu.$get();
        for (const vm of vms) {
            if (vm.status != 'running') {
                continue;
            }
            const config = await this.proxmox.nodes.$(node).qemu.$(vm.vmid).config.$get();
            if (config.hostpci0) {
                console.log(`Using ${vm.vmid} as Passthrough vmid`)
                return vm.vmid;
            }
        }
        return 0;
    }

    private async getQmMonitor(): Promise<QmMonitor | null> {
        if (!this.vmid) {
            // MODE AUTODETECT
            if (this.qmMonitor) {
                const info = await this.qmMonitor.info('status');
                // the VM is off
                if (!~info.includes('running'))
                    this.qmMonitor = undefined;
            }
        }

        if (!this.qmMonitor) {
            const nodes = await this.proxmox.nodes.$get();
            this.node = nodes[0].node;
            let vmid = this.vmid;
            if (!vmid) {
                vmid = await this.findPassthroughVmid();
            }
            if (!vmid) {
                console.log('NO Passthrough currently running');
                return null;
            }
            this.qmMonitor = new QmMonitor(this.proxmox, nodes[0].node, vmid);
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
        usbDetect.on('add', async (device: DeviceDesc) => {
            const { vendorId, productId } = vendorFromDevice(device);

            const qmMonitor = await this.getQmMonitor();
            if (qmMonitor) {
                const key = `V${vendorId}P${productId}`;
                console.log(`Add USB: ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}] with Key:${key}`);
                await qmMonitor.deviceAddById(key, { vendorId, productId });
            } else {
                console.log(`new USB Device, but no Passthrough detected: ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}]`);
            }

        });

        usbDetect.on('remove', async (device: DeviceDesc) => {
            const { vendorId, productId } = vendorFromDevice(device);
            console.log(`remove USB: ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}]`);
        });
    }

    /**
     * slower, but support multiple identical USB devices
     */
    public async hotPlugByPort(): Promise<any> {
        usbDetect.startMonitoring();
        {
            const qmMonitor = await this.getQmMonitor();
            if (qmMonitor)
                this.indexUsb(await qmMonitor.infoUsbhost())
        }
        usbDetect.on('add', async (device: DeviceDesc) => {
            const vendorId = device.vendorId.toString(16).padStart(4, '0');
            const productId = device.productId.toString(16).padStart(4, '0');
            const qmMonitor = await this.getQmMonitor();
            if (!qmMonitor) {
                console.log(`new USB Device, but no Passthrough detected: ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}]`);
                return;
            }
            const allUsb = await qmMonitor.infoUsbhost();
            // filter by vendorId:productId
            let newUsb = allUsb.filter(usb => usb.vendorId.endsWith(vendorId) && usb.productId.endsWith(productId));
            newUsb = newUsb.filter((usb) => !this.usbIndex.has(this.key(usb)));
            this.indexUsb(allUsb);
            for (const usb of newUsb) {
                const key = `bus${usb.addr}port${usb.port}`;
                console.log(`Add USB: ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}] with Key:${key}`);
                await qmMonitor.deviceAddByPort(key, { bus: usb.bus, port: usb.port });
            }
        });

        usbDetect.on('remove', async (device: DeviceDesc) => {
            const { vendorId, productId } = vendorFromDevice(device);
            console.log(`remove USB: ${device.manufacturer}(${device.deviceName})[${vendorId}:${productId}]`);
            const qmMonitor = await this.getQmMonitor();
            if (qmMonitor)
                this.indexUsb(await qmMonitor.infoUsbhost())
        });
    }
}
