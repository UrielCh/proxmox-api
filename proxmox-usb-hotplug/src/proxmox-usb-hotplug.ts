import { proxmoxApi } from 'proxmox-api';
import { Command } from 'commander';
import HotPlugService from './HotPlugService';
import { loadConfig } from './config';

const program = new Command();

async function initHotPlugService(): Promise<HotPlugService> {
  const {proxmoxOption, usbOption} = await loadConfig(program);

  const proxmox = proxmoxApi(proxmoxOption);
  /**
   * stress test
   */
  // const engine = new ProxmoxEngine(proxmoxOption)
  // const proxmox = buildApiProxy(engine, '/api2/json');
  // setInterval(() => {
  //  console.log('break Ticket');
  //  engine.ticket='0000000000'
  // }, 20000);
  
  const hp = new HotPlugService(proxmox, usbOption);
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
  .option('--user <user>', 'host to connect if not root@pam (default: "root@pam")')
  .option('--port <port>', 'port to connect if not 8006')
  .option('--host <host>', 'host to connect if not 127.0.0.1', '127.0.0.1')
  .option('-p, --pass [pass]', 'host password, prefed stdin, nodejs script can not hide password from command line')
  .option('-c, --config <configFile>', 'provide a configuration file');

program.parse(process.argv);
console.log('Adding USB devices by bus/port');
initHotPlugService().then(hp => hp.hotPlugByPort())
