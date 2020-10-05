import DevInputReader from "dev-input-reader";
import { Proxmox, proxmoxApi } from 'proxmox-api';
import { Command } from 'commander';
import { loadConfig } from './config';
import { stat } from "fs";

const program = new Command();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

class ProxmoxHotkey {
  api!: Proxmox.Api;
  node!: string;
  init: Promise<void> | null;
  constructor() {
    this.init = this._init();
  }

  async _init(): Promise<void> {
    const { proxmoxOption } = await loadConfig(program);
    this.api = proxmoxApi(proxmoxOption);
    const nodes = await this.api.nodes.$get();
    const node = nodes[0].node;
    this.node = node;

    const trigerAction = (type: 'simple' | 'long', keyCode: string) => {
      const key = `${type}${keyCode}`;
      const data = this.actionMap[key];
      if (data) {
        if (data.action === 'start') {
          this.startVM(data.vmid);
        } else if (data.action === 'stop') {
          this.stopVM(data.vmid);
        } else if (data.action === 'forcestop') {
          this.stopVM(data.vmid, true);
        }
      } else {
        console.log(`No Action for ${key}`);
      }
    }

    const reader = new DevInputReader('usb-Antecer_AmusingKeyPadK6-event-kbd', { longPress: 3000, retryInterval: 5000 })
    reader.on('long', (ev) => {
      // console.log('long', ev);
      trigerAction('long', ev.keyName);
    })

    reader.on('simple', (ev) => {
      // console.log('simple', ev);
      trigerAction('simple', ev.keyName);
    })
  }
  actionMap: { [key: string]: { action: 'start' | 'stop' | 'forcestop', vmid: number } } = {};

  public registerKey(type: 'simple' | 'long', keyCode: string, action: 'start' | 'stop' | 'forcestop', vmid: number) {
    this.actionMap[`${type}${keyCode}`] = { action, vmid };
  }

  private pciFromHostpci(txt?: string | null) {
    if (!txt)
      return '';
    let pci = txt.split(',', 1)
    return pci[0];
  }

  async getVmDep(vmid: number): Promise<string[]> {
    await this.init;
    let vminfo = await this.api.nodes.$(this.node).qemu.$(vmid).config.$get();
    const deps: string[] = [];
    for (const hostpci of [vminfo.hostpci0, vminfo.hostpci1, vminfo.hostpci2, vminfo.hostpci3, vminfo.hostpci4]) {
      let ressource = this.pciFromHostpci(hostpci);
      if (ressource)
        deps.push(ressource);
    }
    return deps;
  }

  /**
   * Build depencences to pci devices
   * @param proxmox 
   */
  async getVmDeps(): Promise<{ [pci: string]: number[] }> {
    await this.init;
    const allDeps = {} as { [pci: string]: number[] };
    const vms = await this.api.nodes.$(this.node).qemu.$get();
    for (const vm of vms) {
      const resources = await this.getVmDep(vm.vmid);
      for (const resource of resources) {
        let rVms = allDeps[resource];
        if (!rVms) {
          rVms = [];
          allDeps[resource] = rVms;
        }
        rVms.push(vm.vmid);
      }
    }
    return allDeps;
  }

  async startVM(vmid: number): Promise<void> {
    await this.init;
    const status = await this.api.nodes.$(this.node).qemu.$(vmid).status.current.$get();
    if (status.qmpstatus === 'running') {
      console.log(`vm ${vmid} already running`);
      return;
    }
    console.log(`vm ${vmid} is not running: ${status.qmpstatus}`);
    if (status.qmpstatus === 'stopped') {
      const resource = await this.getVmDep(vmid);
      if (resource.length) {
        console.log(`SOULD release ${resource.join(', ')}`);
        const depsTree = await this.getVmDeps();
        const toStop = new Set<number>();
        for (const r of resource) {
          if (depsTree[r]) {
            depsTree[r].forEach(v => toStop.add(v));
          }
        }
        const toStopList = [...toStop].filter(id => id != vmid);
        console.log(`SOULD stop vms: ${toStopList.join(', ')}`);
        for (const vmid of toStopList) {
          await this.stopVM(vmid);
        }
      }
      const code = await this.api.nodes.$(this.node).qemu.$(vmid).status.start.$post();
      console.log(`start VM ${vmid} return ${code}`);
    }
  }

  async stopVM(vmid: number, forceStop?: boolean): Promise<void> {
    await this.init;
    let pass = 0;
    while (true) {
      pass++;
      const status = await this.api.nodes.$(this.node).qemu.$(vmid).status.current.$get();
      if (status.qmpstatus === 'stopped') {
        console.log(`vm ${vmid} not running status: ${status.qmpstatus}`);
        return;
      }
      console.log(`${pass}-STOP vm ${vmid} PID: ${status.pid}`);
      const code = await this.api.nodes.$(this.node).qemu.$(vmid).status.shutdown.$post({ forceStop: forceStop ? true : false }); // , skiplock: true
      console.log(`${pass}-STOP vm ${vmid} return ${code}`);
    }
  }
}

let version = '?';
try {
  version = require('../package.json').version;
} catch (e) {
}
program.version(version)
  .description('Hotkey keybord for proxmox')
  //.option('--vmid <vmid>', 'vmid will receive USB Devices, by default the first running VM having an hostpci0', /^[0-9]+$/)
  //.option('--user <user>', 'host to connect if not root@pam (default: "root@pam")')
  //.option('--port <port>', 'port to connect if not 8006')
  //.option('--host <host>', 'host to connect if not 127.0.0.1', '127.0.0.1')
  //.option('-p, --pass [pass]', 'host password, prefed stdin, nodejs script can not hide password from command line')
  .option('-c, --config <configFile>', 'provide a configuration file');

program.parse(process.argv);
console.log('Adding USB devices by bus/port');



(async () => {
  const hp = new ProxmoxHotkey()
  await hp.init;
  console.log('sss');
  hp.registerKey('simple', 'KEY_1', 'start', 2000);
  hp.registerKey('simple', 'KEY_2', 'start', 2001);
  hp.registerKey('simple', 'KEY_3', 'start', 2003); //2003

  hp.registerKey('simple', 'KEY_4', 'stop', 2000);
  hp.registerKey('simple', 'KEY_5', 'stop', 2001);
  hp.registerKey('simple', 'KEY_6', 'stop', 2003); //2003

  hp.registerKey('long', 'KEY_4', 'stop', 2000);
  hp.registerKey('long', 'KEY_5', 'stop', 2001);
  hp.registerKey('long', 'KEY_6', 'stop', 2003); //2003
})()
