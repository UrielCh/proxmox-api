# proxmox-usb-hotplug

This script monitor and plug any new USB device to running KVM hosted by a proxmox server.

```bash
proxmox-usb-hotplug --help

Usage: proxmox-usb-hotplug [options] [command]

Hotplug any new Usb device to your proxmox

Options:
  -V, --version              output the version number
  --vmid <vmid>              vmid will receive USB Devices, by default the first running VM having an hostpci0
  --user <user>              host to connect if not root@pam (default: "root@pam")
  --port <port>              port to connect if not 8006 (default: "8006")
  --host <host>              host to connect if not 127.0.0.1 (default: "127.0.0.1")
  -p, --pass [pass]          host password, prefed stdin, nodejs script can not hide password from command line
  -c, --config <configFile>  provide a configuration file (default: "")
  -h, --help                 display help for command

Commands:
  byVendor                   connect USB by vendorId/productId faster, do not support multiple identical Device
  byBus                      connect USB by position slower, support multiple identical Device
  help [command]             display help for command

```

## sample

```bash
# on the dom0
echo password = myPassword > conf.txt
proxmox-usb-hotplug -c conf.txt
```

## TODO

- Currently proxmox-usb-hotplug detects the main VMID once at start, It will update the VMid, after this VM shutdown.
- Add option to hotplug existing already connected USB devices on a recently started VM.
- Add a parameter to choose the cluser node, or detect it from the hostname, currently It takes the first node.
- Deal with USB 3.x.
