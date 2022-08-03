# Proxmox Api

[![NPM Version](https://img.shields.io/npm/v/proxmox-api.svg?style=flat)](https://www.npmjs.org/package/proxmox-api) Typescript Api to manage proxmox servers.

* [API Viewer](https://pve.proxmox.com/pve-docs/api-viewer/) 
* [API Docs](https://pve.proxmox.com/wiki/Proxmox_VE_API)

Mapping 100% of available calls, contains all api documentation in typing file.
code size < 10Ko including docs

## Usage

![intellisense](https://github.com/UrielCh/proxmox-api/blob/master/sample/usage.gif?raw=true "preview")

### Overview

to use this API take the Path you want to call, and replace:
- the `/` by `.`
- the `${variable}` by `.(variable)`
- append the http method you want to call with a $ at the end (`.$get()`, `.$post()`, `.$put()` or `.$delete()`)

that it.

### Example

To call `GET /cluster/acme/account/{name}` you will call `promox.cluster.acme.account.$(name).$get()`

To call `GET /api2/json/cluster/backup/{id}/included_volumes` you will call `promox.cluster.backup.{id}.included_volumes.$get()`

To call `GET /api2/json/nodes` you will call `promox.nodes.$get()`

The provided typing will assist you within intelisense, so you do not need to read any external doc.

## Code sample


* [![NPM Version](https://img.shields.io/npm/v/proxmox-usb-hotplug.svg?style=flat)](https://www.npmjs.org/package/proxmox-usb-hotplug) an hotplug usb service based on this API.

```bash
npm install proxmox-api
```

```typescript
import proxmoxApi from "proxmox-api";

// authorize self signed cert if you do not use a valid SSL certificat
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function test() {
    // connect to proxmox
    const promox = proxmoxApi({host: '127.0.0.1', password: 'password', username: 'user1@pam'});
    // list nodes
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
            // const spice = await theNode.qemu.$(qemu.vmid).spiceproxy.$post();
            // console.log('spice:', spice);
        }
    }    
}

test().catch(console.error);
```

### Initialisation alternavives:

- keeping access to ProxmoxEngine object (that can be use to share a ticket, or to access it)

```typescript
import proxmoxApi, { ProxmoxEngine } from "proxmox-api";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function test() {
    // connect to proxmox
    const engine = new ProxmoxEngine({host: '127.0.0.1', password: 'password', username: 'user1@pam'});
    const promox = proxmoxApi(engine);
}
```

- Using Api token


```typescript
import proxmoxApi from "proxmox-api";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function test() {
    // connect to proxmox
    const promox = proxmoxApi({host: '127.0.0.1', tokenID: 'USER@REALM!TOKENID', tokenSecret: '12345678-1234-1234-1234-1234567890ab'});
}
```

## Notes

- if the call path contains a hyphen, you will need to use the `['field']` syntax ex:

```typescript
await theNode.qemu.$(vmid).agent['get-fsinfo'].$get()
```
