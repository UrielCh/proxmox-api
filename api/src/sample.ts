import { proxyProxmox } from "./contructor";
import ProxmoxEngine from "./ProxmoxEngine";

async function test() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const auth = await import('../../../auth');
    const password = auth.default.pass;
    // connect to proxmox
    const promox = proxyProxmox(new ProxmoxEngine({host: '10.0.0.95', password}));
    // liste nodes
    const nodes = await promox.nodes.$get();
    // iterate cluster nodes
    for (const node of nodes) {
        const theNode = promox.nodes.$(node.node);
        // list Qemu VMS
        const qemus = await theNode.qemu.$get({full:true});
        // iterate Qemu VMS
        for (const qemu of qemus) {
            // do some suff.
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
