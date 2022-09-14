import proxmoxApi from "proxmox-api";

// authorize self signed cert
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const delay = (t: number) => new Promise(r => setTimeout(r, t));

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
        // console.log(storages);
        for (const storage of storages) {
            console.log('storage:', storage);
            // await theNode.storage.$(storage.storage)["file-restore"].download.$get()
            // console.log(nodesStorageDiridx);
        }

        // list Qemu VMS
        const qemus = await theNode.qemu.$get({ full: true });
        // iterate Qemu VMS
        for (const qemu of qemus) {
            try {
                const vminfo = await theNode.qemu.$(qemu.vmid).config.$get()
                if (vminfo.template) {
                    console.log(`vm: ${String(qemu.vmid).padStart(5, ' ')} is a template`);
                    continue
                }
            } catch (e) { }
            // do some suff.
            // const agents = await theNode.qemu.$(qemu.vmid).agent.$get();
            // const info = await theNode.qemu.$(qemu.vmid).agent.info.$get()
            // console.log(info);
            // await theNode.qemu.$(qemu.vmid).agent["exec-status"].$get()
            try {
                const mtd1 = theNode.qemu.$(qemu.vmid).agent.exec.$post;
                // const process = await exec.$post({ command: "powershell.exe ping 127.0.0.1" })
                const process = await mtd1({ command: "C:/Windows/System32/ping.exe 127.0.0.1" })
                console.log('pid:', process.pid)
                const getter = theNode.qemu.$(qemu.vmid).agent["exec-status"].$get;
                let exited = false;
                let waitcnd = 0;
                while (!exited) {
                    const status = await getter({ pid: process.pid })
                    console.log(++waitcnd + ' status:', status)
                    exited = !!status.exited;
                    await delay(500);
                }
                // { exited: 0 }
                // { exitcode: 0, exited: 1, out-data: 'stdout'}
            } catch (e) {
                console.log(e);
            }
            // const users = await theNode.qemu.$(qemu.vmid).agent["get-users"].$get()
            // console.log('users:', users);
            // // const osinfo = await theNode.qemu.$(qemu.vmid).agent["get-host-name"].$get()
            // // console.log(osinfo);
            // const inets = await theNode.qemu.$(qemu.vmid).agent["network-get-interfaces"].$get()
            // console.log('inets:', inets);
            // const execStatus = theNode.qemu.$(qemu.vmid).agent["exec-status"];
            // const info = await execStatus.$get({ pid: 1 })
            try {
                const config = await theNode.qemu.$(qemu.vmid).config.$get();
                const name = `(${(config.name || '')})`;
                console.log(`vm: ${String(qemu.vmid).padStart(5, ' ')} ${name.padEnd(18, ' ')}, memory: ${config.memory}`);
            } catch (e) { }
            // const vnc = await theNode.qemu.$(qemu.vmid).vncproxy.$post();
            // console.log('vnc:', vnc);
            // const spice = await theNode.qemu.$(qemu.vmid).spiceproxy.$post();
            // console.log('spice:', spice);
        }
    }
}

test().catch(console.error);
