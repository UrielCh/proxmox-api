import proxmoxApi, { ProxmoxEngineOptions } from "../../api/dist";

// authorize self signed cert
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function test() {
    // load sample authentification info
    const auth = (await import('../../../auth')) as any;
    // const { host, password }
    const opt  = auth.default as ProxmoxEngineOptions;
    // connect to proxmox
    const promox = proxmoxApi(opt);
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
            const name = `(${(config.name||'')})`;
            console.log(`vm: ${String(qemu.vmid).padStart(5, ' ')} ${name.padEnd(18, ' ')}, memory: ${config.memory}`);
            // const vnc = await theNode.qemu.$(qemu.vmid).vncproxy.$post();
            // console.log('vnc:', vnc);
            // const spice = await theNode.qemu.$(qemu.vmid).spiceproxy.$post();
            // console.log('spice:', spice);
        }
    }    
}

test().catch(console.error);
