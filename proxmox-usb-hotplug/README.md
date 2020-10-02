# proxmox-usb-hotplug

* [![NPM Version](https://img.shields.io/npm/v/proxmox-usb-hotplug.svg?style=flat)](https://www.npmjs.org/package/proxmox-usb-hotplug)

This script monitor and plug any new USB device to running KVM hosted by a proxmox server.

```bash
Usage: proxmox-usb-hotplug [options]

Hotplug any new Usb device to your proxmox

Options:
  -V, --version              output the version number
  --vmid <vmid>              vmid will receive USB Devices, by default the first running VM having an hostpci0
  --user <user>              host to connect if not root@pam (default: "root@pam")
  --port <port>              port to connect if not 8006 (default: "8006")
  --host <host>              host to connect if not 127.0.0.1 (default: "127.0.0.1")
  -p, --pass [pass]          host password, prefed stdin, nodejs script can not hide password from command line
  -c, --config <configFile>  provide a configuration file
  -h, --help                 display help for command

```

## configuration file

```
# username used to connect to proxmox API
username = root@pam
# password used to connect to proxmox API
password = prOxmOxp@sswOd
# host used to connect to proxmox API should always be localhost
host = 127.0.0.1

# the node name to used
# by default use the first node, if you are using a cluster you should give the cluster name
;node=proxmox

# deny an usb device
deny-usb=001c:100d
# deny an usb hub 
# you should always deny USB hub to avoid a dual passthrough 
deny-usb=1a40:0101


# Connect some device at startup recommanded for keyboard and mouse
# a keyboard
force-usb=258a:1006
# a mouse
force-usb=18f8:0f97

# not implemented yet.
; watch = 60

# unplug all existing device on script startup
# then reconnect all force-usb devices
flush = 1

# try to autodetect USB Hub to avoid dual passthrough
no-hub=1
```

## sample

```bash
# on the dom0
echo password = myPassword > conf.txt
echo flush = 1 >> conf.txt
proxmox-usb-hotplug -c conf.txt
```

## use as a service

*/etc/usb-hotplug.conf*
```
password = prOxmOxp@sswOd
deny-usb=001c:100d
deny-usb=1a40:0101
force-usb=258a:1006
force-usb=18f8:0f97
flush = 1
no-hub=1
```

*proxmox-usb-hotplug.config.js*
```javascript
module.exports = {
    apps: [{
        name: "proxmoxUsbHotplug",
        script: "proxmox-usb-hotplug",
        args: ["--config", "/etc/hotplug-usb.conf"],
        watch: [ "/etc/hotplug-usb.conf" ],
    }]
}
```

```bash
chmod 600 /etc/usb-hotplug.conf
npm install -g proxmox-usb-hotplug
npm install -g pm2
pm2 install pm2-logrotate
pm2 startup
# read the instruction
pm2 status proxmox-usb-hotplug.config.js
pm2 save
```

## TODO

- Deal with USB 3.x.
- auto detect current cluster name.
