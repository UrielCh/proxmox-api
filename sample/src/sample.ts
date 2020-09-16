import { proxyProxmox, ProxmoxEngine } from "../../api/src";

async function test() {
    // authorize self signed cert
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // load sample authentification info
    const auth = await import('../../../auth');
    const { host, password }  = auth.default;
    // connect to proxmox
    const promox = proxyProxmox(new ProxmoxEngine({host, password}));
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
