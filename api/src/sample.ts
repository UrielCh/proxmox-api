import { proxyProxmox } from "./contructor";
import ProxmoxEngine from "./ProxmoxEngine";

async function test() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const auth = await import('../../../auth') as any;
    const password = auth.default.pass;
    // console.log(process.env)
    const promox = proxyProxmox(new ProxmoxEngine({host: '10.0.0.95', password}));
    const nodes = await promox.nodes.$get();
    console.log(nodes);
    for (const node of nodes) {
        const qemus = await promox.nodes.$(node.node).qemu.$get({full:true});
        for (const qemu of qemus) {
            const config = await promox.nodes.$(node.node).qemu.$(qemu.vmid).config.$get();
        }
    }    
}

test().catch(console.error);
// console.log(process.env)
