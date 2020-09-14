import { Proxmox } from ".";


const promox = {} as Proxmox;

async function test() {
    const nodes = await promox.nodes.$get();
    for (const node of nodes) {
        const qemus = await promox.nodes.$(node.node).qemu.$get({full:true});
        for (const qemu of qemus) {
            const config = await promox.nodes.$(node.node).qemu.$(qemu.vmid).config.$get();
        }
    }
    
}
