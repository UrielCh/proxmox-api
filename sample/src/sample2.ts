import { proxmoxApi, Proxmox } from "../../api/src";

async function test() {
    // authorize self signed cert
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // load sample authentification info
    const auth = await import('../../../auth');
    const { host, password }  = auth.default;
    // connect to proxmox
    const promox = proxmoxApi({host, password});
    // liste nodes
    const nodes = await promox.nodes.$get();
    // iterate cluster nodes
    const memory = 1536;

    for (const node of nodes) {
        const theNode = promox.nodes.$(node.node);
        // list Qemu VMS
        let qemus = await theNode.qemu.$get();

        const indexed = {} as {[key:number]: Proxmox.nodesQemuVm}; // ret_nodes_node_qemuGET
        for (const qemu of qemus) {
            indexed[qemu.vmid] = qemu;
        }

        qemus = qemus.filter(q => q.vmid >= 100 && q.vmid < 200).sort((a,b) => b.vmid - a.vmid);
        if (!qemus.length)
            throw Error('no VM id 100..200');
        const base = qemus[0]
        console.log(`using VM: ${base.vmid} (${base.name})`);

        // GET /nodes/{node}/qemu/{vmid}/status/current
        const vmExtra = await theNode.qemu.$(base.vmid).status.current.$get();
        if (!vmExtra.template) {``
            // convert to template
            await theNode.qemu.$(base.vmid).template.$post();
        }
        // 
        //console.log(JSON.stringify(vmExtra, undefined, 2));
        for (let id=1; id <= 17; id++) {
            const newid = 1000 + id;
            if (indexed[newid]) {
                console.log(`vmID ${newid} exists`);
            } else {
                // target: node.node,
                await theNode.qemu.$(base.vmid).clone.$post({newid, name: `VM-${node.node}-${id}`, bwlimit: 128});
                await theNode.qemu.$(newid).config.$post({net0: `model=virtio,bridge=vmbr${id}`, onboot: true, memory })
                await theNode.qemu.$(newid).status.start.$post();
            }

        }
        // for ID in $(seq 1 $CNT)
        // do
        //   NEWID=$((1000+ID))
        //   echo creating VM${ID} NEWID = ${NEWID}
        //   qm clone ${SRCID} ${NEWID} --target $HOSTNAME --name VM-${HOSTNAME}-${ID} && \
        //   qm set ${NEWID} -net0 model=virtio,bridge=vmbr${ID} -onboot ${ONBOOT} -memory ${MEMORY} && \
        //   qm start $((1000+ID))
        // done
        
    }    
}

test().catch(console.error);
