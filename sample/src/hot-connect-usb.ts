import { proxmoxApi, QmMonitor } from "proxmox-api";

const usbDetect = require('usb-detection');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program
  .option('--id', 'mvid');

program.parse(process.argv);

//if (!program.id) {
//  console.log('please provide a vmid');
//  process.exit(1)
//}

export interface DeviceDesc {
  locationId: number;
  vendorId: number;
  productId: number;
  deviceName: string;
  manufacturer: string;
}
program.id = 2000;
(async () => {
  const vmid = Number(program.id);
  // authorize self signed cert
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  // load sample authentification info
  const auth = await import('../../../auth');
  const { host, password } = auth.default;
  // connect to proxmox
  const proxmox = proxmoxApi({ host, password });
  // liste nodes
  const nodes = await proxmox.nodes.$get();
  // iterate cluster nodes
  const theNode = proxmox.nodes.$(nodes[0].node);
  // list Qemu VMS
  const qmMonitor = new QmMonitor(proxmox, nodes[0].node, vmid);
  usbDetect.startMonitoring();
  // Detect add/insert
  usbDetect.on('add', async function (device: DeviceDesc) {
    //console.log('add0', device);
    const vendorId = device.vendorId.toString(16).padStart(4, '0');
    const productId = device.productId.toString(16).padStart(4, '0');
    console.log('adding: ' + vendorId  + ':' + productId);
    // const key = `bus${device.}post${}`
    const key = `V${vendorId}P${productId}`;
    await qmMonitor.deviceAddById(key, {vendorId, productId});
  });
  // Detect remove
  usbDetect.on('remove', async function (device: DeviceDesc) {
    console.log('remove0', device);
    console.log('remove0: ' + device.vendorId.toString(16).padStart(4, '0') + ':' + device.productId.toString(16).padStart(4, '0'));
  });
})()


