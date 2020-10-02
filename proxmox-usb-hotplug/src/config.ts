import commander from 'commander';
import { HotPlugServiceOption } from "./HotPlugService";
import fs from 'fs';
import { ProxmoxEngineOptions } from 'proxmox-api';
const prompt = require('password-prompt')

export async function loadConfig(program: commander.Command): Promise<{proxmoxOption: ProxmoxEngineOptions, usbOption: HotPlugServiceOption}> {
    let password = program.pass;
    let denyUsb = new Set<String>();
    let forceUsb = new Set<String>();
    let usbOption: HotPlugServiceOption = { denyUsb, forceUsb };
    if (!password) {
        password = program.p;
    }
    if (!password) {
        password = program.P;
    }
    let host = '127.0.0.1';
    let username = 'root@pam';
    let port = 8006;
    if (program.config) {
        let data = '';
        try {
            data = await fs.promises.readFile(program.config, { encoding: 'utf-8' })
        } catch (e) {
            console.error(`can not read file ${program.config}.`);
            process.exit(-1);
        }
        const lines = data.split(/[\r\n]+/);
        for (let line of lines) {
            line = line.trim();
            if (line.startsWith('#') || line.startsWith(';') || line.startsWith('//'))
                continue;
            const m = line.match(/([a-zA-Z-]+)\s*=\s*([^\s]+)/)
            if (!m)
                continue;
            const [, k, v] = m;
            switch (k) {
                case 'password':
                case 'pass':
                    if (!password)
                        password = v;
                    break;
                case 'node':
                    usbOption.node = v;
                    break
                case 'watch':
                    usbOption.watch = Number(v);
                    break
                case 'port':
                    port = Number(port);
                    break
                case 'flush':
                    usbOption.flush = 1;
                    break
                case 'host':
                    host = v;
                    break
                case 'username':
                    username = v;
                    break
                case 'deny-usb':
                    for (const ref of [...v.matchAll(/[0-9a-fA-F]{4}:[0-9a-fA-F]{4}/g)])
                        denyUsb.add(ref[0].toLowerCase())
                    break;
                case 'force-usb':
                    for (const ref of [...v.matchAll(/[0-9a-fA-F]{4}:[0-9a-fA-F]{4}/g)])
                        forceUsb.add(ref[0].toLowerCase())
                    break;
                case 'no-hub':
                    usbOption.blockHub = true;
                    break;
                default:
                    console.error(`unknown option ${k} in ${program.config}.`);
            }
        }
    }
    if (program.host) {
        host = program.host;
    }
    if (program.port) {
        port = Number(program.port);
    }
    if (!password) {
        password = await prompt('proxmox password: ')
    }
    usbOption.vmid = Number(program.vmid);

    const proxmoxOption: ProxmoxEngineOptions = { host, port, password, username };
    return {proxmoxOption, usbOption};
}