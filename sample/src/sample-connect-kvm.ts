import { proxmoxApi, QmMonitor } from "proxmox-api";

let vmid = 2000;

async function test() {
    // authorize self signed cert
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // load sample authentification info
    const auth = await import('../../auth');
    const { host, password, tokenSecret } = auth.default;
    // connect to proxmox
    const proxmox = proxmoxApi({ host, password, tokenSecret });
    // liste nodes
    const nodes = await proxmox.nodes.$get();
    // iterate cluster nodes
    const theNode = proxmox.nodes.$(nodes[0].node);
    // list Qemu VMS
    const qmMonitor = new QmMonitor(proxmox, nodes[0].node, vmid);

    if (true) {
        // await qmMonitor.deviceDel('mouse');
        // await qmMonitor.deviceDel('keyboard');
        await qmMonitor.deviceAddMissing('mouse', { name: /mouse/i });
        await qmMonitor.deviceAddMissing('keyboard', { name: /KB/ });
        await qmMonitor.deviceAddMissing('audio', { name: /USB Audio Device/ });
        await qmMonitor.deviceAddMissing('AirMouse', { name: /2\.4G Air Mouse/ });
    }
    // await Bluebird.delay(500);
    // console.log(await qmMonitor.info('memdev'));
    // console.log(await qmMonitor.infoUsb());
    //console.log(await qmMonitor.info('usb'));
    //console.log(await qmMonitor.info('usbhost'));
    // let connected = await qmMonitor.infoUsb();
    // console.log(JSON.stringify(connected, null, 2));
    // for (const type of VALID_QEMU_INFO_SIMPLE) {
    //     await Bluebird.delay(500);
    //     console.log(type, 'calls: ', qmMonitor.calls)
    //     const text = await qmMonitor.info(type);
    //     console.log(text);
    //     console.log()
    //     // 2 calls
    // }
    //const txt = await qmMonitor.info('pci');
    // console.log(txt);
    // usbInfo = usbInfo.filter(e => e.name.toLowerCase().includes('mouse'));
    // if (usbInfo.length) {
    //    qmMonitor.deviceAdd('mouse', usbInfo[0]);
    //}
    // console.log(usbInfo)
    console.log('Done')
}

test().catch(console.error);
