import { proxyProxmox } from "./contructor";
import ProxmoxEngine from "./ProxmoxEngine";

async function test() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const auth = await import('../../../auth') as any;
    const password = auth.default.pass;
    // console.log(process.env)
    const promox = proxyProxmox(new ProxmoxEngine({host: '10.0.0.95', password}));
    const nodes = await promox.nodes.$get();
    for (const node of nodes) {
        const theNode = promox.nodes.$(node.node);
        const qemus = await theNode.qemu.$get({full:true});
        for (const qemu of qemus) {
            const config = await theNode.qemu.$(qemu.vmid).config.$get();
            console.log(`vm: ${config.name}, memory: ${config.memory}`);
            // const vnc = await theNode.qemu.$(qemu.vmid).vncproxy.$post();
            // console.log('vnc:', vnc);
            const spice = await theNode.qemu.$(qemu.vmid).spiceproxy.$post();
            console.log('spice:', spice);
        }
    }    
}

test().catch(console.error);
// console.log(process.env)
