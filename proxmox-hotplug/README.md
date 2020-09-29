# proxmox-hotplug

This script monitor and plug any new USB device to running KVM hosted by a proxmox server.

```bash
proxmox-hotplug --help

Usage: proxmox-hotplug [options] [command]

Hotplug any new Usb device to your proxmox

Options:
  -V, --version      output the version number
  --vmid             vmid will receved USB Devices, by default the first runing VM having an hostpci0
  --user <user>      host to connect if not root@pam (default: "root@pam")
  --port <port>      port to connect if not 8006 (default: "8006")
  --host <host>      host to connect if not 127.0.0.1 (default: "127.0.0.1")
  -p, --pass [pass]  host password, prefed stdin, nodejs script can not hide password from command line
  -h, --help         display help for command

Commands:
  byVendor           connect USB by vendorId/productId faster, do not support multiple identical Device
  byBus              connect USB by position slower, support multiple identical Device
  help [command]     display help for command

```
