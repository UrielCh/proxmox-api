import { proxmoxApi, Proxmox } from "proxmox-api";
import * as fs from "fs";
// import { ReadableStream } from "stream/web";
import { ReadableStream } from 'stream/web'


async function test() {
    // authorize self signed cert
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // load sample authentification info
    const auth = await import('../../auth');
    const { host, password } = auth.default;
    // connect to proxmox
    const promox = proxmoxApi({ host, password });
    // liste nodes
    const nodes = await promox.nodes.$get();
    // iterate cluster nodes
    const memory = 1536;

    for (const node of nodes) {
        const theNode = promox.nodes.$(node.node);
        let storages = await theNode.storage.$get();
        // keep only Proxmox Backup Server
        storages = storages.filter(s => s.type === "pbs")
        if (!storages.length) {
            console.log('No Proxmox Backup Server available');
            continue;
        }
        console.log("storage:", storages[0]);
        const storageApi = theNode.storage.$(storages[0].storage);
        const contents = await storageApi.content.$get();
        console.log("content:", contents);
        if (!contents.length) {
            console.log(`No Backup available in ${storages[0].storage}`);
            continue;
        }
        // const status = await storageApi.status.$get();
        // console.log("status:", status);
        // const status = await storageApi["download-url"].$post({})
        // console.log("status:", status);

        const list = await storageApi["file-restore"].list.$get({ volume: contents[0].volid, filepath: "/" });
        // console.log("list:", list);
        if (!list.length) {
            console.log(`No File available in volunme ${contents[0].volid}`);
            continue;
        }
        const download = storageApi["file-restore"].download.$get;
        const stream = await download({ volume: contents[0].volid, filepath: list[0].filepath }) as ReadableStream;
        console.log(stream);

        // try {
        //     const reader = stream.getReader();
        //     const blk = await reader.read();
        //     console.log(blk);
        //     // for await (const value of stream) {
        //     //     console.log(value);
        //     // }
        // } catch (e) {
        //     console.log("reading stream failed:", e);
        // }
        console.log("Done");

        //        var savePixels = require("save-pixels");
        // const myFile = fs.createWriteStream("myOutput.tgz");
        // stream.pipeTo(myFile);
        // console.log(Object.keys(stream));
        // stream.on("data", d => console.log("rcv", d));
        // stream.on("end", d => console.log("end"));

    }
}

test().catch(console.error);
