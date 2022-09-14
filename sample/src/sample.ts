import proxmoxApi from "proxmox-api";

// authorize self signed cert
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function test() {
    // load sample authentification info
    const auth = (await import('../../auth'));
    // const { host, password }
    const opt = auth.default;
    // connect to proxmox
    const promox = proxmoxApi(opt);
    // liste nodes
    const nodes = await promox.nodes.$get();
    // iterate cluster nodes
    for (const node of nodes) {
        const theNode = promox.nodes.$(node.node);
        const storages = await theNode.storage.$get();
        console.log(storages);
        for (const storage of storages) {
            console.log(storage);
            // await theNode.storage.$(storage.storage)["file-restore"].download.$get()
            // console.log(nodesStorageDiridx);
        }

        // list Qemu VMS
        const qemus = await theNode.qemu.$get({ full: true });
        // iterate Qemu VMS
        for (const qemu of qemus) {
            // do some suff.
            // const agents = await theNode.qemu.$(qemu.vmid).agent.$get();
            //const info = await theNode.qemu.$(qemu.vmid).agent.info.$get()
            //console.log(info);
            //await theNode.qemu.$(qemu.vmid).agent["exec-status"].$get()
            const users = await theNode.qemu.$(qemu.vmid).agent["get-users"].$get()
            console.log('users:', users);
            // const osinfo = await theNode.qemu.$(qemu.vmid).agent["get-host-name"].$get()
            // console.log(osinfo);
            const inets = await theNode.qemu.$(qemu.vmid).agent["network-get-interfaces"].$get()
            console.log('inets:', inets);

            // const execStatus = theNode.qemu.$(qemu.vmid).agent["exec-status"];
            // const info = await execStatus.$get({ pid: 1 })

            const config = await theNode.qemu.$(qemu.vmid).config.$get();
            const name = `(${(config.name || '')})`;
            console.log(`vm: ${String(qemu.vmid).padStart(5, ' ')} ${name.padEnd(18, ' ')}, memory: ${config.memory}`);
            // const vnc = await theNode.qemu.$(qemu.vmid).vncproxy.$post();
            // console.log('vnc:', vnc);
            // const spice = await theNode.qemu.$(qemu.vmid).spiceproxy.$post();
            // console.log('spice:', spice);
        }
    }
}

test().catch(console.error);
