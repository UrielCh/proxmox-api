import { proxmoxApi, Proxmox } from "proxmox-api";
import { Command } from 'commander';
import fs from 'fs';
import HotPlugService from './HotPlugService';
let prompt = require('password-prompt')

const program = new Command();

async function initHotPlugService(): Promise<HotPlugService> {
  // console.log(program)
  let password = program.pass;
  if (!password) {
    password = program.p;
  }
  if (!password) {
    password = program.P;
  }
  let host = program.host;
  if (program.config) {
    let data = '';
    try {
      data = await fs.promises.readFile(program.config, { encoding: 'utf-8' })
    } catch (e) {
      console.error(`can not read file ${program.config}.`);
    }
    const lines = data.split(/[\r\n]+/);
    for (const line of lines) {
      const m = line.match(/\s*([a-zA-Z]+)\s*=\s*([^\s]+)/)
      if (!m)
        continue;
      const [, k, v] = m;
      switch (k) {
        case 'password':
        case 'pass':
          if (!password)
            password = v;
          break;
        default:
          console.error(`unknown option ${k} in ${program.config}.`);
      }
    }
  }

  if (!password) {
    password = await prompt('proxmox password: ')
  }
  const proxmox = proxmoxApi({ host, password });
  const hp = new HotPlugService(proxmox, Number(program.vmid));
  return hp;
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let version = '?';
try {
  version = require('../package.json').version;
} catch (e) {
}
program.version(version)
  .description('Hotplug any new Usb device to your proxmox')
  .option('--vmid <vmid>', 'vmid will receive USB Devices, by default the first running VM having an hostpci0', /^[0-9]+$/)
  .option('--user <user>', 'host to connect if not root@pam', 'root@pam')
  .option('--port <port>', 'port to connect if not 8006', '8006')
  .option('--host <host>', 'host to connect if not 127.0.0.1', '127.0.0.1')
  .option('-p, --pass [pass]', 'host password, prefed stdin, nodejs script can not hide password from command line')
  .option('-c, --config <configFile>', 'provide a configuration file', '');

program.command('byVendor')
  .description('connect USB by vendorId/productId faster, do not support multiple identical Device')
  .action(async () => {
    console.log('Adding USB devices by vendorId / ProducId');
    const hp = await initHotPlugService();
    hp.hotPlugByVendor();
  });

program.command('byBus')
  .description('connect USB by position slower, support multiple identical Device')
  .action(async () => {
    console.log('Adding USB devices by bus/port');
    const hp = await initHotPlugService();
    hp.hotPlugByPort();
  });
program.parse(process.argv);
