/**
 * @maxLength 4096
 * @type string
 */
export type String0_4096 = string;
/**
 * @type boolean
 */
export type Tdisable = boolean;
/**
 * @pattern [1-9][0-9]{2,8}-\d{1,9}
 * @format pve-replication-job-id
 * @type string
 */
export type pvereplicationjobid = string;
/**
 * @minimum 1
 * @type number
 */
export type Trate = number;
export type Tremove_job = 'local' | 'full';
/**
 * @format pve-calendar-event
 * @maxLength 128
 * @type string
 */
export type pvecalendarevent = string;
/**
 * @format pve-node
 * @type string
 */
export type pvenode = string;
export type Ttype = 'local';
/**
 * @format pve-configid-list
 * @maxLength 4096
 * @type string
 */
export type pveconfigidlist = string;
/**
 * @maxLength 40
 * @type string
 */
export type String0_40 = string;
/**
 * @format pve-node
 * @maxLength 15
 * @type string
 */
export type pvenode_1 = string;
/**
 * @format {"address":{"default_key":1,"description":"Hostname (or IP) of this corosync link address.","format":"address","format_description":"IP","type":"string"},"priority":{"default":0,"description":"The priority for the link when knet is used in 'passive' mode (default). Lower value means higher priority. Only valid for cluster create, ignored on node add.","maximum":255,"minimum":0,"optional":1,"type":"integer"}}
 * @type string
 */
export type Tlink = string;
/**
 * @minimum 1
 * @type integer
 */
export type integer_Min1 = number;
/**
 * @type integer
 */
export type integer = number;
/**
 * @format ip
 * @type string
 */
export type ip = string;
/**
 * @minimum 0
 * @type integer
 */
export type integer_Min0 = number;
/**
 * @pattern ([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}
 * @type string
 */
export type Tfingerprint = string;
/**
 * @maxLength 128
 * @type string
 */
export type String0_128 = string;
/**
 * @pattern [A-Za-z][A-Za-z0-9\-\_]+
 * @minLength 2
 * @maxLength 18
 * @type string
 */
export type Tgroup = string;
/**
 * @pattern [A-Za-z][A-Za-z0-9\-\_]+
 * @minLength 2
 * @maxLength 20
 * @type string
 */
export type Taction = string;
/**
 * @format pve-fw-addr-spec
 * @type string
 */
export type pvefwaddrspec = string;
/**
 * @format pve-fw-dport-spec
 * @type string
 */
export type pvefwdportspec = string;
/**
 * @format pve-iface
 * @minLength 2
 * @maxLength 20
 * @type string
 */
export type pveiface = string;
export type Tlog = 'emerg' | 'alert' | 'crit' | 'err' | 'warning' | 'notice' | 'info' | 'debug' | 'nolog';
/**
 * @format pve-fw-protocol-spec
 * @type string
 */
export type pvefwprotocolspec = string;
/**
 * @format pve-fw-sport-spec
 * @type string
 */
export type pvefwsportspec = string;
export type Ttype_1 = 'in' | 'out' | 'group';
/**
 * @format pve-configid-list
 * @type string
 */
export type pveconfigidlist_1 = string;
/**
 * @pattern [A-Za-z][A-Za-z0-9\-\_]+
 * @minLength 2
 * @maxLength 64
 * @type string
 */
export type Tname = string;
/**
 * @format IPorCIDRorAlias
 * @type string
 */
export type IPorCIDRorAlias = string;
/**
 * @format IPorCIDR
 * @type string
 */
export type IPorCIDR = string;
/**
 * @format {"burst":{"default":5,"description":"Inital burst of packages which will get logged","minimum":0,"optional":1,"type":"integer"},"enable":{"default":"1","default_key":1,"description":"Enable or disable log rate limiting","type":"boolean"},"rate":{"default":"1/second","description":"Frequency with which the burst bucket gets refilled","format_description":"rate","optional":1,"pattern":"[1-9][0-9]*\\/(second|minute|hour|day)","type":"string"}}
 * @type string
 */
export type Tlog_ratelimit = string;
export type Tpolicy_in = 'ACCEPT' | 'REJECT' | 'DROP';
export type Ttype_2 = 'alias' | 'ipset';
export type Tcompress = '0' | '1' | 'gzip' | 'lzo' | 'zstd';
/**
 * @format pve-day-of-week-list
 * @type string
 */
export type pvedayofweeklist = string;
/**
 * @format pve-vmid-list
 * @type string
 */
export type pvevmidlist = string;
/**
 * @format string-alist
 * @type string
 */
export type stringalist = string;
/**
 * @minimum 0
 * @maximum 8
 * @type integer
 */
export type integer0_8 = number;
export type Tmailnotification = 'always' | 'failure';
/**
 * @format string-list
 * @type string
 */
export type stringlist = string;
export type Tmode = 'snapshot' | 'suspend' | 'stop';
/**
 * @minimum 500
 * @type integer
 */
export type integer_Min500 = number;
/**
 * @pattern \d{1,2}:\d{1,2}
 * @type string
 */
export type Tstarttime = string;
/**
 * @format pve-storage-id
 * @type string
 */
export type pvestorageid = string;
export type Ttype_3 = 'ct' | 'vm';
/**
 * @format pve-configid
 * @type string
 */
export type pveconfigid = string;
/**
 * @format pve-ha-resource-or-vm-id
 * @type string
 */
export type pveharesourceorvmid = string;
export type Tstate = 'started' | 'stopped' | 'enabled' | 'disabled' | 'ignored';
/**
 * @format pve-ha-group-node-list
 * @type string
 */
export type pvehagroupnodelist = string;
export type Ttype_4 = 'group';
export type Ttype_5 = 'dns' | 'standalone';
export type Tapi = 'acmedns' | 'acmeproxy' | 'active24' | 'ad' | 'ali' | 'autodns' | 'aws' | 'azure' | 'cf' | 'clouddns' | 'cloudns' | 'cn' | 'conoha' | 'constellix' | 'cx' | 'cyon' | 'da' | 'ddnss' | 'desec' | 'df' | 'dgon' | 'dnsimple' | 'do' | 'doapi' | 'domeneshop' | 'dp' | 'dpi' | 'dreamhost' | 'duckdns' | 'durabledns' | 'dyn' | 'dynu' | 'dynv6' | 'easydns' | 'euserv' | 'exoscale' | 'freedns' | 'gandi_livedns' | 'gcloud' | 'gd' | 'gdnsdk' | 'he' | 'hexonet' | 'hostingde' | 'infoblox' | 'internetbs' | 'inwx' | 'ispconfig' | 'jd' | 'kas' | 'kinghost' | 'knot' | 'leaseweb' | 'lexicon' | 'linode' | 'linode_v4' | 'loopia' | 'lua' | 'maradns' | 'me' | 'miab' | 'misaka' | 'myapi' | 'mydevil' | 'mydnsjp' | 'namecheap' | 'namecom' | 'namesilo' | 'nederhost' | 'neodigit' | 'netcup' | 'nic' | 'nsd' | 'nsone' | 'nsupdate' | 'nw' | 'one' | 'online' | 'openprovider' | 'opnsense' | 'ovh' | 'pdns' | 'pleskxml' | 'pointhq' | 'rackspace' | 'rcode0' | 'regru' | 'schlundtech' | 'selectel' | 'servercow' | 'tele3' | 'ultra' | 'unoeuro' | 'variomedia' | 'vscale' | 'vultr' | 'yandex' | 'zilore' | 'zone' | 'zonomi';
/**
 * @format pve-node-list
 * @type string
 */
export type pvenodelist = string;
/**
 * @minimum 0
 * @maximum 172800
 * @type integer
 */
export type integer0_172800 = number;
/**
 * @format email-list
 * @type string
 */
export type emaillist = string;
/**
 * @pattern ^https?://.*
 * @type string
 */
export type Tdirectory = string;
export type Tscope = 'all' | 'versions';
/**
 * @format CIDRv4
 * @type string
 */
export type CIDRv4 = string;
/**
 * @format CIDRv6
 * @type string
 */
export type CIDRv6 = string;
/**
 * @format mac-addr
 * @type string
 */
export type macaddr = string;
export type Ttype_6 = 'vnet';
/**
 * @format pve-sdn-vnet-id
 * @type string
 */
export type pvesdnvnetid = string;
export type Ttype_7 = 'evpn' | 'faucet' | 'qinq' | 'simple' | 'vlan' | 'vxlan';
/**
 * @format ip-list
 * @type string
 */
export type iplist = string;
export type pveconfigid_1 = 'evpn' | 'faucet' | 'qinq' | 'simple' | 'vlan' | 'vxlan';
export type Tvlanprotocol = '802.1q' | '802.1ad';
/**
 * @format pve-sdn-zone-id
 * @type string
 */
export type pvesdnzoneid = string;
export type Ttype_8 = 'evpn' | 'faucet';
/**
 * @format pve-sdn-controller-id
 * @type string
 */
export type pvesdncontrollerid = string;
export type pveconfigid_2 = 'evpn' | 'faucet';
export type Ttype_9 = 'vm' | 'storage' | 'node' | 'sdn';
/**
 * @format {"clone":{"description":"bandwidth limit in KiB/s for cloning disks","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"default":{"description":"default bandwidth limit in KiB/s","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"migration":{"description":"bandwidth limit in KiB/s for migrating guests (including moving local disks)","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"move":{"description":"bandwidth limit in KiB/s for moving disks","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"restore":{"description":"bandwidth limit in KiB/s for restoring guests from backups","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"}}
 * @type string
 */
export type Tbwlimit = string;
export type Tconsole = 'applet' | 'vv' | 'html5' | 'xtermjs';
/**
 * @format email-opt
 * @type string
 */
export type emailopt = string;
export type Tfencing = 'watchdog' | 'hardware' | 'both';
/**
 * @format {"shutdown_policy":{"default":"conditional","description":"The policy for HA services on node shutdown. 'freeze' disables auto-recovery, 'failover' ensures recovery, 'conditional' recovers on poweroff and freezes on reboot. 'migrate' will migrate running services to other nodes, if possible. With 'freeze' or 'failover', HA Services will always get stopped first on shutdown.","enum":["freeze","failover","conditional","migrate"],"type":"string","verbose_description":"Describes the policy for handling HA services on poweroff or reboot of a node. Freeze will always freeze services which are still located on the node on shutdown, those services won't be recovered by the HA manager. Failover will not mark the services as frozen and thus the services will get recovered to other nodes, if the shutdown node does not come up again quickly (< 1min). 'conditional' chooses automatically depending on the type of shutdown, i.e., on a reboot the service will be frozen but on a poweroff the service will stay as is, and thus get recovered after about 2 minutes. Migrate will try to move all running services to another node when a reboot or shutdown was triggered. The poweroff process will only continue once no running services are located on the node anymore. If the node comes up again, the service will be moved back to the previously powered-off node, at least if no other migration, reloaction or recovery took place."}}
 * @type string
 */
export type Tha = string;
/**
 * @pattern http://.*
 * @type string
 */
export type Thttp_proxy = string;
export type Tkeyboard = 'de' | 'de-ch' | 'da' | 'en-gb' | 'en-us' | 'es' | 'fi' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'hu' | 'is' | 'it' | 'ja' | 'lt' | 'mk' | 'nl' | 'no' | 'pl' | 'pt' | 'pt-br' | 'sv' | 'sl' | 'tr';
export type Tlanguage = 'ca' | 'da' | 'de' | 'en' | 'es' | 'eu' | 'fa' | 'fr' | 'he' | 'it' | 'ja' | 'nb' | 'nn' | 'pl' | 'pt_BR' | 'ru' | 'sl' | 'sv' | 'tr' | 'zh_CN' | 'zh_TW';
/**
 * @format mac-prefix
 * @type string
 */
export type macprefix = string;
/**
 * @format {"network":{"description":"CIDR of the (sub) network that is used for migration.","format":"CIDR","format_description":"CIDR","optional":1,"type":"string"},"type":{"default":"secure","default_key":1,"description":"Migration traffic is encrypted using an SSH tunnel by default. On secure, completely private networks this can be disabled to increase performance.","enum":["secure","insecure"],"type":"string"}}
 * @type string
 */
export type Tmigration = string;
/**
 * @format {"appid":{"description":"U2F AppId URL override. Defaults to the origin.","format_description":"APPID","optional":1,"type":"string"},"origin":{"description":"U2F Origin override. Mostly useful for single nodes with a single URL.","format_description":"URL","optional":1,"type":"string"}}
 * @type string
 */
export type Tu2f = string;
/**
 * @format pve-vmid
 * @minimum 1
 * @type integer
 */
export type pvevmid = number;
/**
 * @format {"enabled":{"default":0,"default_key":1,"description":"Enable/disable Qemu GuestAgent.","type":"boolean"},"fstrim_cloned_disks":{"default":0,"description":"Run fstrim after cloning/moving a disk.","optional":1,"type":"boolean"},"type":{"default":"virtio","description":"Select the agent type","enum":["virtio","isa"],"optional":1,"type":"string"}}
 * @type string
 */
export type Tagent = string;
export type Tarch = 'x86_64' | 'aarch64';
/**
 * @maxLength 255
 * @type string
 */
export type String0_255 = string;
/**
 * @format {"device":{"description":"Configure an audio device.","enum":["ich9-intel-hda","intel-hda","AC97"],"type":"string"},"driver":{"default":"spice","description":"Driver backend for the audio device.","enum":["spice"],"optional":1,"type":"string"}}
 * @type string
 */
export type Taudio0 = string;
export type Tbios = 'seabios' | 'ovmf';
/**
 * @pattern [acdn]{1,4}
 * @type string
 */
export type Tboot = string;
/**
 * @pattern (ide|sata|scsi|virtio)\d+
 * @format pve-qm-bootdisk
 * @type string
 */
export type pveqmbootdisk = string;
/**
 * @format pve-qm-ide
 * @type string
 */
export type pveqmide = string;
/**
 * @format pve-qm-cicustom
 * @type string
 */
export type pveqmcicustom = string;
export type Tcitype = 'configdrive2' | 'nocloud';
/**
 * @format pve-vm-cpu-conf
 * @type string
 */
export type pvevmcpuconf = string;
/**
 * @minimum 0
 * @maximum 128
 * @type number
 */
export type Tcpulimit = number;
/**
 * @minimum 2
 * @maximum 262144
 * @type integer
 */
export type integer2_262144 = number;
/**
 * @format {"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"alias":"file"}}
 * @type string
 */
export type Tefidisk0 = string;
/**
 * @format pve-volume-id
 * @type string
 */
export type pvevolumeid = string;
/**
 * @format pve-qm-hostpci
 * @type string
 */
export type pveqmhostpci = string;
/**
 * @format pve-hotplug-features
 * @type string
 */
export type pvehotplugfeatures = string;
export type Thugepages = 'any' | '2' | '1024';
/**
 * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"model":{"description":"The drive's reported model name, url-encoded, up to 40 bytes long.","format":"urlencoded","format_description":"model","maxLength":120,"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}}
 * @type string
 */
export type Tide = string;
/**
 * @format pve-qm-ipconfig
 * @type string
 */
export type pveqmipconfig = string;
/**
 * @format {"name":{"description":"The name of the file. Will be prefixed with 'pve-shm-'. Default is the VMID. Will be deleted when the VM is stopped.","format_description":"string","optional":1,"pattern":"[a-zA-Z0-9\\-]+","type":"string"},"size":{"description":"The size of the file in MB.","minimum":1,"type":"integer"}}
 * @type string
 */
export type Tivshmem = string;
export type Tlock = 'backup' | 'clone' | 'create' | 'migrate' | 'rollback' | 'snapshot' | 'snapshot-delete' | 'suspending' | 'suspended';
/**
 * @pattern (pc|pc(-i440fx)?-\d+(\.\d+)+(\+pve\d+)?(\.pxe)?|q35|pc-q35-\d+(\.\d+)+(\+pve\d+)?(\.pxe)?|virt(?:-\d+(\.\d+)+)?(\+pve\d+)?)
 * @maxLength 40
 * @type string
 */
export type Tmachine = string;
/**
 * @minimum 16
 * @type integer
 */
export type integer_Min16 = number;
/**
 * @minimum 0
 * @type number
 */
export type Tmigrate_downtime = number;
/**
 * @format dns-name
 * @type string
 */
export type dnsname = string;
/**
 * @format address-list
 * @type string
 */
export type addresslist = string;
/**
 * @format {"bridge":{"description":"Bridge to attach the network device to. The Proxmox VE standard bridge\nis called 'vmbr0'.\n\nIf you do not specify a bridge, we create a kvm user (NATed) network\ndevice, which provides DHCP and DNS services. The following addresses\nare used:\n\n 10.0.2.2   Gateway\n 10.0.2.3   DNS Server\n 10.0.2.4   SMB Server\n\nThe DHCP server assign addresses to the guest starting from 10.0.2.15.\n","format_description":"bridge","optional":1,"pattern":"[-_.\\w\\d]+","type":"string"},"e1000":{"alias":"macaddr","keyAlias":"model"},"e1000-82540em":{"alias":"macaddr","keyAlias":"model"},"e1000-82544gc":{"alias":"macaddr","keyAlias":"model"},"e1000-82545em":{"alias":"macaddr","keyAlias":"model"},"firewall":{"description":"Whether this interface should be protected by the firewall.","optional":1,"type":"boolean"},"i82551":{"alias":"macaddr","keyAlias":"model"},"i82557b":{"alias":"macaddr","keyAlias":"model"},"i82559er":{"alias":"macaddr","keyAlias":"model"},"link_down":{"description":"Whether this interface should be disconnected (like pulling the plug).","optional":1,"type":"boolean"},"macaddr":{"description":"MAC address. That address must be unique withing your network. This is automatically generated if not specified.","format":"mac-addr","format_description":"XX:XX:XX:XX:XX:XX","optional":1,"type":"string","verbose_description":"A common MAC address with the I/G (Individual/Group) bit not set."},"model":{"default_key":1,"description":"Network Card Model. The 'virtio' model provides the best performance with very low CPU overhead. If your guest does not support this driver, it is usually best to use 'e1000'.","enum":["rtl8139","ne2k_pci","e1000","pcnet","virtio","ne2k_isa","i82551","i82557b","i82559er","vmxnet3","e1000-82540em","e1000-82544gc","e1000-82545em"],"type":"string"},"mtu":{"description":"Force MTU, for VirtIO only. Set to '1' to use the bridge MTU","maximum":65520,"minimum":1,"optional":1,"type":"integer"},"ne2k_isa":{"alias":"macaddr","keyAlias":"model"},"ne2k_pci":{"alias":"macaddr","keyAlias":"model"},"pcnet":{"alias":"macaddr","keyAlias":"model"},"queues":{"description":"Number of packet queues to be used on the device.","maximum":16,"minimum":0,"optional":1,"type":"integer"},"rate":{"description":"Rate limit in mbps (megabytes per second) as floating point number.","minimum":0,"optional":1,"type":"number"},"rtl8139":{"alias":"macaddr","keyAlias":"model"},"tag":{"description":"VLAN tag to apply to packets on this interface.","maximum":4094,"minimum":1,"optional":1,"type":"integer"},"trunks":{"description":"VLAN trunks to pass through this interface.","format_description":"vlanid[;vlanid...]","optional":1,"pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"virtio":{"alias":"macaddr","keyAlias":"model"},"vmxnet3":{"alias":"macaddr","keyAlias":"model"}}
 * @type string
 */
export type Tnet = string;
/**
 * @format {"cpus":{"description":"CPUs accessing this NUMA node.","format_description":"id[-id];...","pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"hostnodes":{"description":"Host NUMA nodes to use.","format_description":"id[-id];...","optional":1,"pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"memory":{"description":"Amount of memory this NUMA node provides.","optional":1,"type":"number"},"policy":{"description":"NUMA allocation policy.","enum":["preferred","bind","interleave"],"optional":1,"type":"string"}}
 * @type string
 */
export type Tnuma = string;
export type Tostype = 'other' | 'wxp' | 'w2k' | 'w2k3' | 'w2k8' | 'wvista' | 'win7' | 'win8' | 'win10' | 'l24' | 'l26' | 'solaris';
/**
 * @pattern /dev/parport\d+|/dev/usb/lp\d+
 * @type string
 */
export type Tparallel = string;
/**
 * @format pve-poolid
 * @type string
 */
export type pvepoolid = string;
/**
 * @format {"max_bytes":{"default":1024,"description":"Maximum bytes of entropy injected into the guest every 'period' milliseconds. Prefer a lower value when using /dev/random as source. Use 0 to disable limiting (potentially dangerous!).","optional":1,"type":"integer"},"period":{"default":1000,"description":"Every 'period' milliseconds the entropy-injection quota is reset, allowing the guest to retrieve another 'max_bytes' of entropy.","optional":1,"type":"integer"},"source":{"default_key":1,"description":"The file on the host to gather entropy from. In most cases /dev/urandom should be preferred over /dev/random to avoid entropy-starvation issues on the host. Using urandom does *not* decrease security in any meaningful way, as it's still seeded from real entropy, and the bytes provided will most likely be mixed with real entropy on the guest as well. /dev/hwrng can be used to pass through a hardware RNG from the host.","enum":["/dev/urandom","/dev/random","/dev/hwrng"],"type":"string"}}
 * @type string
 */
export type Trng0 = string;
/**
 * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}}
 * @type string
 */
export type Tsata = string;
/**
 * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iothread":{"description":"Whether to use iothreads for this drive","optional":1,"type":"boolean"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"queues":{"description":"Number of queues.","minimum":2,"optional":1,"type":"integer"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"scsiblock":{"default":0,"description":"whether to use scsi-block for full passthrough of host block device\n\nWARNING: can lead to I/O errors in combination with low memory or high memory fragmentation on host","optional":1,"type":"boolean"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}}
 * @type string
 */
export type Tscsi = string;
export type Tscsihw = 'lsi' | 'lsi53c810' | 'virtio-scsi-pci' | 'virtio-scsi-single' | 'megasas' | 'pvscsi';
/**
 * @pattern (/dev/.+|socket)
 * @type string
 */
export type Tserial = string;
/**
 * @minimum 0
 * @maximum 50000
 * @type integer
 */
export type integer0_50000 = number;
/**
 * @format pve-qm-smbios1
 * @maxLength 512
 * @type string
 */
export type pveqmsmbios1 = string;
/**
 * @format {"foldersharing":{"default":"0","description":"Enable folder sharing via SPICE. Needs Spice-WebDAV daemon installed in the VM.","optional":1,"type":"boolean"},"videostreaming":{"default":"off","description":"Enable video streaming. Uses compression for detected video streams.","enum":["off","all","filter"],"optional":1,"type":"string"}}
 * @type string
 */
export type Tspice_enhancements = string;
/**
 * @format urlencoded
 * @type string
 */
export type urlencoded = string;
/**
 * @pattern (now|\d{4}-\d{1,2}-\d{1,2}(T\d{1,2}:\d{1,2}:\d{1,2})?)
 * @type string
 */
export type Tstartdate = string;
/**
 * @format pve-startup-order
 * @type string
 */
export type pvestartuporder = string;
/**
 * @format pve-tag-list
 * @type string
 */
export type pvetaglist = string;
/**
 * @format {"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id","format_description":"volume","type":"string"},"volume":{"alias":"file"}}
 * @type string
 */
export type Tunused = string;
/**
 * @format {"host":{"default_key":1,"description":"The Host USB device or port or the value 'spice'. HOSTUSBDEVICE syntax is:\n\n 'bus-port(.port)*' (decimal numbers) or\n 'vendor_id:product_id' (hexadeciaml numbers) or\n 'spice'\n\nYou can use the 'lsusb -t' command to list existing usb devices.\n\nNOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.\n\nThe value 'spice' can be used to add a usb redirection devices for spice.\n","format":"pve-qm-usb-device","format_description":"HOSTUSBDEVICE|spice","type":"string"},"usb3":{"default":0,"description":"Specifies whether if given host option is a USB3 device or port.","optional":1,"type":"boolean"}}
 * @type string
 */
export type Tusb = string;
/**
 * @format {"memory":{"description":"Sets the VGA memory (in MiB). Has no effect with serial display.","maximum":512,"minimum":4,"optional":1,"type":"integer"},"type":{"default":"std","default_key":1,"description":"Select the VGA type.","enum":["cirrus","qxl","qxl2","qxl3","qxl4","none","serial0","serial1","serial2","serial3","std","virtio","vmware"],"optional":1,"type":"string"}}
 * @type string
 */
export type Tvga = string;
/**
 * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iothread":{"description":"Whether to use iothreads for this drive","optional":1,"type":"boolean"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"}}
 * @type string
 */
export type Tvirtio = string;
/**
 * @pattern (?:[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}|[01])
 * @type string
 */
export type Tvmgenid = string;
/**
 * @format pve-qm-watchdog
 * @type string
 */
export type pveqmwatchdog = string;
export type Tcommand = 'fsfreeze-freeze' | 'fsfreeze-status' | 'fsfreeze-thaw' | 'fstrim' | 'get-fsinfo' | 'get-host-name' | 'get-memory-block-info' | 'get-memory-blocks' | 'get-osinfo' | 'get-time' | 'get-timezone' | 'get-users' | 'get-vcpus' | 'info' | 'network-get-interfaces' | 'ping' | 'shutdown' | 'suspend-disk' | 'suspend-hybrid' | 'suspend-ram';
/**
 * @minLength 5
 * @maxLength 1024
 * @type string
 */
export type String5_1024 = string;
/**
 * @maxLength 65536
 * @type string
 */
export type String0_65536 = string;
/**
 * @maxLength 61440
 * @type string
 */
export type String0_61440 = string;
export type Tcf = 'AVERAGE' | 'MAX';
export type Ttimeframe = 'hour' | 'day' | 'week' | 'month' | 'year';
/**
 * @format pve-configid
 * @maxLength 40
 * @type string
 */
export type pveconfigid_3 = string;
/**
 * @minimum 1
 * @maximum 30
 * @type integer
 */
export type integer1_30 = number;
export type Tserial_1 = 'serial0' | 'serial1' | 'serial2' | 'serial3';
/**
 * @minimum 5900
 * @maximum 5999
 * @type integer
 */
export type integer5900_5999 = number;
/**
 * @maxLength 512
 * @type string
 */
export type String0_512 = string;
/**
 * @format address
 * @type string
 */
export type address = string;
/**
 * @format CIDR
 * @type string
 */
export type CIDR = string;
export type Tmigration_type = 'secure' | 'insecure';
/**
 * @format storagepair-list
 * @type string
 */
export type storagepairlist = string;
export type Tfeature = 'snapshot' | 'clone' | 'copy';
export type Tformat = 'raw' | 'qcow2' | 'vmdk';
export type Tdisk = 'ide0' | 'ide1' | 'ide2' | 'ide3' | 'scsi0' | 'scsi1' | 'scsi2' | 'scsi3' | 'scsi4' | 'scsi5' | 'scsi6' | 'scsi7' | 'scsi8' | 'scsi9' | 'scsi10' | 'scsi11' | 'scsi12' | 'scsi13' | 'scsi14' | 'scsi15' | 'scsi16' | 'scsi17' | 'scsi18' | 'scsi19' | 'scsi20' | 'scsi21' | 'scsi22' | 'scsi23' | 'scsi24' | 'scsi25' | 'scsi26' | 'scsi27' | 'scsi28' | 'scsi29' | 'scsi30' | 'virtio0' | 'virtio1' | 'virtio2' | 'virtio3' | 'virtio4' | 'virtio5' | 'virtio6' | 'virtio7' | 'virtio8' | 'virtio9' | 'virtio10' | 'virtio11' | 'virtio12' | 'virtio13' | 'virtio14' | 'virtio15' | 'sata0' | 'sata1' | 'sata2' | 'sata3' | 'sata4' | 'sata5' | 'efidisk0';
/**
 * @pattern \+?\d+(\.\d+)?[KMGT]?
 * @type string
 */
export type Tsize = string;
export type Ttype_10 = 'user' | 'network' | 'meta';
export type Tarch_1 = 'amd64' | 'i386' | 'arm64' | 'armhf';
export type Tcmode = 'shell' | 'console' | 'tty';
/**
 * @minimum 1
 * @maximum 128
 * @type integer
 */
export type integer1_128 = number;
/**
 * @minimum 0
 * @maximum 500000
 * @type integer
 */
export type integer0_500000 = number;
/**
 * @format {"force_rw_sys":{"default":0,"description":"Mount /sys in unprivileged containers as `rw` instead of `mixed`. This can break networking under newer (>= v245) systemd-network use.","optional":1,"type":"boolean"},"fuse":{"default":0,"description":"Allow using 'fuse' file systems in a container. Note that interactions between fuse and the freezer cgroup can potentially cause I/O deadlocks.","optional":1,"type":"boolean"},"keyctl":{"default":0,"description":"For unprivileged containers only: Allow the use of the keyctl() system call. This is required to use docker inside a container. By default unprivileged containers will see this system call as non-existent. This is mostly a workaround for systemd-networkd, as it will treat it as a fatal error when some keyctl() operations are denied by the kernel due to lacking permissions. Essentially, you can choose between running systemd-networkd or docker.","optional":1,"type":"boolean"},"mknod":{"default":0,"description":"Allow unprivileged containers to use mknod() to add certain device nodes. This requires a kernel with seccomp trap to user space support (5.3 or newer). This is experimental.","optional":1,"type":"boolean"},"mount":{"description":"Allow mounting file systems of specific types. This should be a list of file system types as used with the mount command. Note that this can have negative effects on the container's security. With access to a loop device, mounting a file can circumvent the mknod permission of the devices cgroup, mounting an NFS file system can block the host's I/O completely and prevent it from rebooting, etc.","format_description":"fstype;fstype;...","optional":1,"pattern":"(?^:[a-zA-Z0-9_; ]+)","type":"string"},"nesting":{"default":0,"description":"Allow nesting. Best used with unprivileged containers with additional id mapping. Note that this will expose procfs and sysfs contents of the host to the guest.","optional":1,"type":"boolean"}}
 * @type string
 */
export type Tfeatures = string;
/**
 * @format dns-name
 * @maxLength 255
 * @type string
 */
export type dnsname_1 = string;
export type Tlock_1 = 'backup' | 'create' | 'destroyed' | 'disk' | 'fstrim' | 'migrate' | 'mounted' | 'rollback' | 'snapshot' | 'snapshot-delete';
/**
 * @format {"acl":{"description":"Explicitly enable or disable ACL support.","optional":1,"type":"boolean"},"backup":{"description":"Whether to include the mount point in backups.","optional":1,"type":"boolean","verbose_description":"Whether to include the mount point in backups (only used for volume mount points)."},"mountoptions":{"description":"Extra mount options for rootfs/mps.","format_description":"opt[;opt...]","optional":1,"pattern":"(?^:(?^:(noatime|nodev|nosuid|noexec))(;(?^:(noatime|nodev|nosuid|noexec)))*)","type":"string"},"mp":{"description":"Path to the mount point as seen from inside the container (must not contain symlinks).","format":"pve-lxc-mp-string","format_description":"Path","type":"string","verbose_description":"Path to the mount point as seen from inside the container.\n\nNOTE: Must not contain any symlinks for security reasons."},"quota":{"description":"Enable user quotas inside the container (not supported with zfs subvolumes)","optional":1,"type":"boolean"},"replicate":{"default":1,"description":"Will include this volume to a storage replica job.","optional":1,"type":"boolean"},"ro":{"description":"Read-only mount point","optional":1,"type":"boolean"},"shared":{"default":0,"description":"Mark this non-volume mount point as available on multiple nodes (see 'nodes')","optional":1,"type":"boolean","verbose_description":"Mark this non-volume mount point as available on all nodes.\n\nWARNING: This option does not share the mount point automatically, it assumes it is shared already!"},"size":{"description":"Volume size (read only value).","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"default_key":1,"description":"Volume, device or directory to mount into the container.","format":"pve-lxc-mp-string","format_description":"volume","type":"string"}}
 * @type string
 */
export type Tmp = string;
/**
 * @format {"bridge":{"description":"Bridge to attach the network device to.","format_description":"bridge","optional":1,"pattern":"[-_.\\w\\d]+","type":"string"},"firewall":{"description":"Controls whether this interface's firewall rules should be used.","optional":1,"type":"boolean"},"gw":{"description":"Default gateway for IPv4 traffic.","format":"ipv4","format_description":"GatewayIPv4","optional":1,"type":"string"},"gw6":{"description":"Default gateway for IPv6 traffic.","format":"ipv6","format_description":"GatewayIPv6","optional":1,"type":"string"},"hwaddr":{"description":"The interface MAC address. This is dynamically allocated by default, but you can set that statically if needed, for example to always have the same link-local IPv6 address. (lxc.network.hwaddr)","format":"mac-addr","format_description":"XX:XX:XX:XX:XX:XX","optional":1,"type":"string","verbose_description":"A common MAC address with the I/G (Individual/Group) bit not set."},"ip":{"description":"IPv4 address in CIDR format.","format":"pve-ipv4-config","format_description":"(IPv4/CIDR|dhcp|manual)","optional":1,"type":"string"},"ip6":{"description":"IPv6 address in CIDR format.","format":"pve-ipv6-config","format_description":"(IPv6/CIDR|auto|dhcp|manual)","optional":1,"type":"string"},"mtu":{"description":"Maximum transfer unit of the interface. (lxc.network.mtu)","minimum":64,"optional":1,"type":"integer"},"name":{"description":"Name of the network device as seen from inside the container. (lxc.network.name)","format_description":"string","pattern":"[-_.\\w\\d]+","type":"string"},"rate":{"description":"Apply rate limiting to the interface","format_description":"mbps","optional":1,"type":"number"},"tag":{"description":"VLAN tag for this interface.","maximum":4094,"minimum":1,"optional":1,"type":"integer"},"trunks":{"description":"VLAN ids to pass through the interface","format_description":"vlanid[;vlanid...]","optional":1,"pattern":"(?^:\\d+(?:;\\d+)*)","type":"string"},"type":{"description":"Network interface type.","enum":["veth"],"optional":1,"type":"string"}}
 * @type string
 */
export type Tnet_1 = string;
export type Tostype_1 = 'debian' | 'ubuntu' | 'centos' | 'fedora' | 'opensuse' | 'archlinux' | 'alpine' | 'gentoo' | 'unmanaged';
/**
 * @minLength 5
 * @type string
 */
export type Tpassword = string;
/**
 * @format {"acl":{"description":"Explicitly enable or disable ACL support.","optional":1,"type":"boolean"},"mountoptions":{"description":"Extra mount options for rootfs/mps.","format_description":"opt[;opt...]","optional":1,"pattern":"(?^:(?^:(noatime|nodev|nosuid|noexec))(;(?^:(noatime|nodev|nosuid|noexec)))*)","type":"string"},"quota":{"description":"Enable user quotas inside the container (not supported with zfs subvolumes)","optional":1,"type":"boolean"},"replicate":{"default":1,"description":"Will include this volume to a storage replica job.","optional":1,"type":"boolean"},"ro":{"description":"Read-only mount point","optional":1,"type":"boolean"},"shared":{"default":0,"description":"Mark this non-volume mount point as available on multiple nodes (see 'nodes')","optional":1,"type":"boolean","verbose_description":"Mark this non-volume mount point as available on all nodes.\n\nWARNING: This option does not share the mount point automatically, it assumes it is shared already!"},"size":{"description":"Volume size (read only value).","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"default_key":1,"description":"Volume, device or directory to mount into the container.","format":"pve-lxc-mp-string","format_description":"volume","type":"string"}}
 * @type string
 */
export type Trootfs = string;
/**
 * @format dns-name-list
 * @type string
 */
export type dnsnamelist = string;
/**
 * @format pve-ct-timezone
 * @type string
 */
export type pvecttimezone = string;
/**
 * @minimum 0
 * @maximum 6
 * @type integer
 */
export type integer0_6 = number;
/**
 * @format {"volume":{"default_key":1,"description":"The volume that is not used currently.","format":"pve-volume-id","format_description":"volume","type":"string"}}
 * @type string
 */
export type Tunused_1 = string;
/**
 * @minimum 16
 * @maximum 2160
 * @type integer
 */
export type integer16_2160 = number;
/**
 * @minimum 16
 * @maximum 4096
 * @type integer
 */
export type integer16_4096 = number;
export type Tdisk_1 = 'rootfs' | 'mp0' | 'mp1' | 'mp2' | 'mp3' | 'mp4' | 'mp5' | 'mp6' | 'mp7' | 'mp8' | 'mp9' | 'mp10' | 'mp11' | 'mp12' | 'mp13' | 'mp14' | 'mp15' | 'mp16' | 'mp17' | 'mp18' | 'mp19' | 'mp20' | 'mp21' | 'mp22' | 'mp23' | 'mp24' | 'mp25' | 'mp26' | 'mp27' | 'mp28' | 'mp29' | 'mp30' | 'mp31' | 'mp32' | 'mp33' | 'mp34' | 'mp35' | 'mp36' | 'mp37' | 'mp38' | 'mp39' | 'mp40' | 'mp41' | 'mp42' | 'mp43' | 'mp44' | 'mp45' | 'mp46' | 'mp47' | 'mp48' | 'mp49' | 'mp50' | 'mp51' | 'mp52' | 'mp53' | 'mp54' | 'mp55' | 'mp56' | 'mp57' | 'mp58' | 'mp59' | 'mp60' | 'mp61' | 'mp62' | 'mp63' | 'mp64' | 'mp65' | 'mp66' | 'mp67' | 'mp68' | 'mp69' | 'mp70' | 'mp71' | 'mp72' | 'mp73' | 'mp74' | 'mp75' | 'mp76' | 'mp77' | 'mp78' | 'mp79' | 'mp80' | 'mp81' | 'mp82' | 'mp83' | 'mp84' | 'mp85' | 'mp86' | 'mp87' | 'mp88' | 'mp89' | 'mp90' | 'mp91' | 'mp92' | 'mp93' | 'mp94' | 'mp95' | 'mp96' | 'mp97' | 'mp98' | 'mp99' | 'mp100' | 'mp101' | 'mp102' | 'mp103' | 'mp104' | 'mp105' | 'mp106' | 'mp107' | 'mp108' | 'mp109' | 'mp110' | 'mp111' | 'mp112' | 'mp113' | 'mp114' | 'mp115' | 'mp116' | 'mp117' | 'mp118' | 'mp119' | 'mp120' | 'mp121' | 'mp122' | 'mp123' | 'mp124' | 'mp125' | 'mp126' | 'mp127' | 'mp128' | 'mp129' | 'mp130' | 'mp131' | 'mp132' | 'mp133' | 'mp134' | 'mp135' | 'mp136' | 'mp137' | 'mp138' | 'mp139' | 'mp140' | 'mp141' | 'mp142' | 'mp143' | 'mp144' | 'mp145' | 'mp146' | 'mp147' | 'mp148' | 'mp149' | 'mp150' | 'mp151' | 'mp152' | 'mp153' | 'mp154' | 'mp155' | 'mp156' | 'mp157' | 'mp158' | 'mp159' | 'mp160' | 'mp161' | 'mp162' | 'mp163' | 'mp164' | 'mp165' | 'mp166' | 'mp167' | 'mp168' | 'mp169' | 'mp170' | 'mp171' | 'mp172' | 'mp173' | 'mp174' | 'mp175' | 'mp176' | 'mp177' | 'mp178' | 'mp179' | 'mp180' | 'mp181' | 'mp182' | 'mp183' | 'mp184' | 'mp185' | 'mp186' | 'mp187' | 'mp188' | 'mp189' | 'mp190' | 'mp191' | 'mp192' | 'mp193' | 'mp194' | 'mp195' | 'mp196' | 'mp197' | 'mp198' | 'mp199' | 'mp200' | 'mp201' | 'mp202' | 'mp203' | 'mp204' | 'mp205' | 'mp206' | 'mp207' | 'mp208' | 'mp209' | 'mp210' | 'mp211' | 'mp212' | 'mp213' | 'mp214' | 'mp215' | 'mp216' | 'mp217' | 'mp218' | 'mp219' | 'mp220' | 'mp221' | 'mp222' | 'mp223' | 'mp224' | 'mp225' | 'mp226' | 'mp227' | 'mp228' | 'mp229' | 'mp230' | 'mp231' | 'mp232' | 'mp233' | 'mp234' | 'mp235' | 'mp236' | 'mp237' | 'mp238' | 'mp239' | 'mp240' | 'mp241' | 'mp242' | 'mp243' | 'mp244' | 'mp245' | 'mp246' | 'mp247' | 'mp248' | 'mp249' | 'mp250' | 'mp251' | 'mp252' | 'mp253' | 'mp254' | 'mp255';
/**
 * @minimum 0.5
 * @type number
 */
export type Twal_size = number;
/**
 * @minimum 8
 * @maximum 32768
 * @type integer
 */
export type integer8_32768 = number;
export type Ttype_11 = 'unused' | 'journal_disks';
/**
 * @format CIDR
 * @maxLength 128
 * @type string
 */
export type CIDR_1 = string;
/**
 * @minimum 1
 * @maximum 7
 * @type integer
 */
export type integer1_7 = number;
/**
 * @minimum 6
 * @maximum 14
 * @type integer
 */
export type integer6_14 = number;
/**
 * @pattern (ceph|mon|mds|osd|mgr)(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)?
 * @type string
 */
export type Tservice = string;
/**
 * @pattern (mon|mds|osd|mgr)(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)?
 * @type string
 */
export type Tservice_1 = string;
export type Tapplication = 'rbd' | 'cephfs' | 'rgw';
/**
 * @pattern pve([1248])([cbsp])-[0-9a-f]{10}
 * @maxLength 32
 * @type string
 */
export type Tkey = string;
export type Ttype_12 = 'bridge' | 'bond' | 'eth' | 'alias' | 'vlan' | 'OVSBridge' | 'OVSBond' | 'OVSPort' | 'OVSIntPort' | 'any_bridge';
/**
 * @format ipv4
 * @type string
 */
export type ipv4 = string;
/**
 * @format ipv6
 * @type string
 */
export type ipv6 = string;
/**
 * @format pve-iface
 * @type string
 */
export type pveiface_1 = string;
export type Tbond_mode = 'balance-rr' | 'active-backup' | 'balance-xor' | 'broadcast' | '802.3ad' | 'balance-tlb' | 'balance-alb' | 'balance-slb' | 'lacp-balance-slb' | 'lacp-balance-tcp';
export type Tbond_xmit_hash_policy = 'layer2' | 'layer2+3' | 'layer3+4';
/**
 * @format pve-iface-list
 * @type string
 */
export type pveifacelist = string;
/**
 * @minimum 1280
 * @maximum 65520
 * @type integer
 */
export type integer1280_65520 = number;
/**
 * @format ipv4mask
 * @type string
 */
export type ipv4mask = string;
/**
 * @minimum 0
 * @maximum 128
 * @type integer
 */
export type integer0_128 = number;
/**
 * @maxLength 1024
 * @type string
 */
export type String0_1024 = string;
/**
 * @minimum 1
 * @maximum 4094
 * @type integer
 */
export type integer1_4094 = number;
export type Ttype_13 = 'bridge' | 'bond' | 'eth' | 'alias' | 'vlan' | 'OVSBridge' | 'OVSBond' | 'OVSPort' | 'OVSIntPort' | 'unknown';
export type Tsource = 'archive' | 'active' | 'all';
/**
 * @format pve-storage-server
 * @type string
 */
export type pvestorageserver = string;
/**
 * @format pve-storage-portal-dns
 * @type string
 */
export type pvestorageportaldns = string;
/**
 * @pattern [a-zA-Z0-9\.\+\_][a-zA-Z0-9\.\+\_\-]+
 * @maxLength 100
 * @type string
 */
export type Tvg = string;
/**
 * @format pve-storage-content-list
 * @type string
 */
export type pvestoragecontentlist = string;
/**
 * @format pve-storage-content
 * @type string
 */
export type pvestoragecontent = string;
export type Tformat_1 = 'raw' | 'qcow2' | 'subvol';
/**
 * @pattern \d+[MG]?
 * @type string
 */
export type Tsize_1 = string;
export type Tfilesystem = 'ext4' | 'xfs';
/**
 * @minimum 9
 * @maximum 16
 * @type integer
 */
export type integer9_16 = number;
export type Tcompression = 'on' | 'off' | 'gzip' | 'lz4' | 'lzjb' | 'zle';
export type Traidlevel = 'single' | 'mirror' | 'raid10' | 'raidz' | 'raidz2' | 'raidz3';
/**
 * @pattern ^/dev/[a-zA-Z0-9\/]+$
 * @type string
 */
export type Tdisk_2 = string;
/**
 * @pattern [a-fA-F0-9\-]+
 * @maxLength 36
 * @type string
 */
export type Tuuid = string;
/**
 * @minimum 32768
 * @type integer
 */
export type integer_Min32768 = number;
/**
 * @minimum 7875
 * @type integer
 */
export type integer_Min7875 = number;
/**
 * @minimum 30
 * @maximum 60
 * @type integer
 */
export type integer30_60 = number;
/**
 * @format pem-certificate-chain
 * @type string
 */
export type pemcertificatechain = string;
/**
 * @format pem-string
 * @type string
 */
export type pemstring = string;
export type Tproperty = 'acme' | 'acmedomain0' | 'acmedomain1' | 'acmedomain2' | 'acmedomain3' | 'acmedomain4' | 'acmedomain5' | 'description' | 'startall-onboot-delay' | 'wakeonlan';
/**
 * @format {"account":{"default":"default","description":"ACME account config file name.","format":"pve-configid","format_description":"name","optional":1,"type":"string"},"domains":{"description":"List of domains for this node's ACME certificate","format":"pve-acme-domain-list","format_description":"domain[;domain;...]","optional":1,"type":"string"}}
 * @type string
 */
export type Tacme = string;
/**
 * @format {"alias":{"description":"Alias for the Domain to verify ACME Challenge over DNS","format":"pve-acme-alias","format_description":"domain","optional":1,"type":"string"},"domain":{"default_key":1,"description":"domain for this node's ACME certificate","format":"pve-acme-domain","format_description":"domain","type":"string"},"plugin":{"default":"standalone","description":"The ACME plugin ID","format":"pve-configid","format_description":"name of the plugin configuration","optional":1,"type":"string"}}
 * @type string
 */
export type Tacmedomain = string;
/**
 * @minimum 0
 * @maximum 300
 * @type integer
 */
export type integer0_300 = number;
export type Tcommand_1 = 'reboot' | 'shutdown';
/**
 * @pattern ^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}(:\d{2})?)?$
 * @type string
 */
export type Tsince = string;
export type Tcmd = 'login' | 'ceph_install' | 'upgrade';
export type Ttype_14 = 'cephfs' | 'cifs' | 'dir' | 'drbd' | 'glusterfs' | 'iscsi' | 'iscsidirect' | 'lvm' | 'lvmthin' | 'nfs' | 'pbs' | 'rbd' | 'zfs' | 'zfspool';
/**
 * @maxLength 256
 * @type string
 */
export type String0_256 = string;
/**
 * @format pve-storage-path
 * @type string
 */
export type pvestoragepath = string;
/**
 * @format pve-storage-format
 * @type string
 */
export type pvestorageformat = string;
/**
 * @format pve-storage-portal-dns-list
 * @type string
 */
export type pvestorageportaldnslist = string;
/**
 * @format pve-storage-options
 * @type string
 */
export type pvestorageoptions = string;
/**
 * @minimum 1
 * @maximum 16
 * @type integer
 */
export type integer1_16 = number;
export type Tsmbversion = '2.0' | '2.1' | '3.0';
/**
 * @format pve-storage-vgname
 * @type string
 */
export type pvestoragevgname = string;
export type Ttransport = 'tcp' | 'rdma' | 'unix';
/**
 * @format pve-groupid-list
 * @type string
 */
export type pvegroupidlist = string;
/**
 * @minLength 5
 * @maxLength 64
 * @type string
 */
export type String5_64 = string;
/**
 * @format pve-userid
 * @maxLength 64
 * @type string
 */
export type pveuserid = string;
/**
 * @format pve-groupid
 * @type string
 */
export type pvegroupid = string;
/**
 * @format pve-priv-list
 * @type string
 */
export type pveprivlist = string;
/**
 * @format pve-roleid
 * @type string
 */
export type pveroleid = string;
/**
 * @format pve-roleid-list
 * @type string
 */
export type pveroleidlist = string;
/**
 * @format pve-tokenid-list
 * @type string
 */
export type pvetokenidlist = string;
/**
 * @format pve-userid-list
 * @type string
 */
export type pveuseridlist = string;
/**
 * @pattern \w+=[^,]+(,\s*\w+=[^,]+)*
 * @maxLength 256
 * @type string
 */
export type Tbase_dn = string;
/**
 * @pattern \S+
 * @maxLength 256
 * @type string
 */
export type Tdomain = string;
/**
 * @maxLength 2048
 * @type string
 */
export type String0_2048 = string;
/**
 * @format ldap-simple-attr-list
 * @type string
 */
export type ldapsimpleattrlist = string;
/**
 * @format ldap-simple-attr
 * @maxLength 256
 * @type string
 */
export type ldapsimpleattr = string;
export type Tmode_1 = 'ldap' | 'ldaps' | 'ldap+starttls';
/**
 * @minimum 1
 * @maximum 65535
 * @type integer
 */
export type integer1_65535 = number;
/**
 * @format pve-realm
 * @maxLength 32
 * @type string
 */
export type pverealm = string;
/**
 * @format address
 * @maxLength 256
 * @type string
 */
export type address_1 = string;
export type Tsslversion = 'tlsv1' | 'tlsv1_1' | 'tlsv1_2' | 'tlsv1_3';
/**
 * @format realm-sync-options
 * @type string
 */
export type realmsyncoptions = string;
/**
 * @pattern \w+=[^,]+(,\s*\w+=[^,]+)*
 * @type string
 */
export type Tsync_attributes = string;
/**
 * @format pve-tfa-config
 * @maxLength 128
 * @type string
 */
export type pvetfaconfig = string;
export type Ttype_15 = 'ad' | 'ldap' | 'pam' | 'pve';
/**
 * @pattern \S{2,}
 * @maxLength 256
 * @type string
 */
export type Tuser_attr = string;
export type Tscope_1 = 'users' | 'groups' | 'both';
/**
 * @maxLength 64
 * @type string
 */
export type String0_64 = string;
/**
 * @format pve-priv-list
 * @maxLength 64
 * @type string
 */
export type pveprivlist_1 = string;
export type Taction_1 = 'delete' | 'new' | 'confirm';
/**
 * @format pve-tfa-secret
 * @type string
 */
export type pvetfasecret = string;
/**
 * @pattern (?^:^(?^:[^\s:/]+)\@(?^:[A-Za-z][A-Za-z0-9\.\-_]+)(?:!(?^:[A-Za-z][A-Za-z0-9\.\-_]+))?$)
 * @type string
 */
export type Tuserid = string;
/**
 * @format pve-storage-id-list
 * @type string
 */
export type pvestorageidlist = string;
export interface ret_clusterGET {
};
export interface ret_cluster_replicationGET {
};
export interface ret_cluster_configGET {
};
export interface ret_cluster_config_nodesGET {
    /**
     */
    node: string;
};
export interface ret_cluster_config_nodes_nodePOST {
    /**
     */
    corosync_authkey: string;
    /**
     */
    corosync_conf: string;
    /**
     */
    warnings: string[];
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_config_joinGET {
    /**
     */
    config_digest: string;
    /**
     */
    nodelist: {
    /**
     * The cluster node name.
     */
    name: string;
    /**
     * Node id for this node.
     */
    nodeid?: number;
    /**
     */
    pve_addr: string;
    /**
     * Certificate SHA 256 fingerprint.
     */
    pve_fp: string;
    /**
     */
    quorum_votes: number;
    /**
     * Address and priority information of a single corosync link. (up to 8 links supported; link0..link7)
     */
    ring0_addr?: string;
}[];
    /**
     * The cluster node name.
     */
    preferred_node: string;
    /**
     */
    totem: any;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_firewallGET {
};
export interface ret_cluster_firewall_groupsGET {
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * Security Group name.
     */
    group: string;
};
export interface ret_cluster_firewall_groups_groupGET {
    /**
     */
    pos: number;
};
export interface ret_cluster_firewall_groups_group_posGET {
    /**
     */
    action: string;
    /**
     */
    comment?: string;
    /**
     */
    dest?: string;
    /**
     */
    dport?: string;
    /**
     */
    enable?: number;
    /**
     */
    iface?: string;
    /**
     */
    ipversion?: number;
    /**
     * Log level for firewall rule
     */
    log?: string;
    /**
     */
    macro?: string;
    /**
     */
    pos: number;
    /**
     */
    proto?: string;
    /**
     */
    source?: string;
    /**
     */
    sport?: string;
    /**
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_firewall_rulesGET {
    /**
     */
    pos: number;
};
export interface ret_cluster_firewall_rules_posGET {
    /**
     */
    action: string;
    /**
     */
    comment?: string;
    /**
     */
    dest?: string;
    /**
     */
    dport?: string;
    /**
     */
    enable?: number;
    /**
     */
    iface?: string;
    /**
     */
    ipversion?: number;
    /**
     * Log level for firewall rule
     */
    log?: string;
    /**
     */
    macro?: string;
    /**
     */
    pos: number;
    /**
     */
    proto?: string;
    /**
     */
    source?: string;
    /**
     */
    sport?: string;
    /**
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_firewall_ipsetGET {
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * IP set name.
     */
    name: string;
};
export interface ret_cluster_firewall_ipset_nameGET {
    /**
     */
    cidr: string;
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     */
    nomatch?: boolean;
};
export interface ret_cluster_firewall_aliasesGET {
    /**
     */
    cidr: string;
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     */
    name: string;
};
export interface ret_cluster_firewall_optionsGET {
    /**
     * Enable ebtables rules cluster wide.
     */
    ebtables?: boolean;
    /**
     * Enable or disable the firewall cluster wide.
     */
    enable?: number;
    /**
     * Log ratelimiting settings
     */
    log_ratelimit?: string;
    /**
     * Input policy.
     */
    policy_in?: string;
    /**
     * Output policy.
     */
    policy_out?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_firewall_macrosGET {
    /**
     * More verbose description (if available).
     */
    descr: string;
    /**
     * Macro name.
     */
    macro: string;
};
export interface ret_cluster_firewall_refsGET {
    /**
     */
    comment?: string;
    /**
     */
    name: string;
    /**
     */
    ref: string;
    /**
     */
    type: string;
};
export interface ret_cluster_backupGET {
    /**
     * The job ID.
     */
    id: string;
};
export interface ret_cluster_backup_id_included_volumesGET {
    /**
     */
    children: {
    /**
     * The volumes of the guest with the information if they will be included in backups.
     */
    children?: {
    /**
     * Configuration key of the volume.
     */
    id: string;
    /**
     * Whether the volume is included in the backup or not.
     */
    included: boolean;
    /**
     * Name of the volume.
     */
    name: string;
    /**
     * The reason why the volume is included (or excluded).
     */
    reason: string;
}[];
    /**
     * VMID of the guest.
     */
    id: number;
    /**
     * Name of the guest
     */
    name?: string;
    /**
     * Type of the guest, VM, CT or unknown for removed but not purged guests.
     */
    type: string;
}[];
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_backupinfo_not_backed_upGET {
    /**
     * Name of the guest
     */
    name?: string;
    /**
     * Type of the guest.
     */
    type: string;
    /**
     * VMID of the guest.
     */
    vmid: number;
};
export interface ret_cluster_haGET {
    /**
     */
    id: string;
};
export interface ret_cluster_ha_resourcesGET {
    /**
     */
    sid: string;
};
export interface ret_cluster_ha_resources_sidGET {
    /**
     * Description.
     */
    comment?: string;
    /**
     * Can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * The HA group identifier.
     */
    group?: string;
    /**
     * Maximal number of service relocate tries when a service failes to start.
     */
    max_relocate?: number;
    /**
     * Maximal number of tries to restart the service on a node after its start failed.
     */
    max_restart?: number;
    /**
     * HA resource ID. This consists of a resource type followed by a resource specific name, separated with colon (example: vm:100 / ct:100). For virtual machines and containers, you can simply use the VM or CT id as a shortcut (example: 100).
     */
    sid: string;
    /**
     * Requested resource state.
     */
    state?: string;
    /**
     * The type of the resources.
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_ha_groupsGET {
    /**
     */
    group: string;
};
export interface ret_cluster_ha_statusGET {
};
export interface ret_cluster_acmeGET {
};
export interface ret_cluster_acme_pluginsGET {
    /**
     * Unique identifier for ACME plugin instance.
     */
    plugin: string;
};
export interface ret_cluster_acme_accountGET {
};
export interface ret_cluster_acme_account_nameGET {
    /**
     */
    account?: any;
    /**
     * URL of ACME CA directory endpoint.
     */
    directory?: string;
    /**
     */
    location?: string;
    /**
     */
    tos?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_cluster_acme_directoriesGET {
    /**
     */
    name: string;
    /**
     * URL of ACME CA directory endpoint.
     */
    url: string;
};
export interface ret_cluster_acme_challenge_schemaGET {
    /**
     */
    id: string;
    /**
     * Human readable name, falls back to id
     */
    name: string;
    /**
     */
    schema: any;
    /**
     */
    type: string;
};
export interface ret_cluster_cephGET {
};
export interface ret_cluster_ceph_flagsGET {
    /**
     * Flag name.
     */
    name: string;
};
export interface ret_cluster_sdnGET {
    /**
     */
    id: string;
};
export interface ret_cluster_sdn_vnetsGET {
};
export interface ret_cluster_sdn_zonesGET {
    /**
     */
    type: string;
    /**
     */
    zone: string;
};
export interface ret_cluster_sdn_controllersGET {
    /**
     */
    controller: string;
    /**
     */
    type: string;
};
export interface ret_cluster_logGET {
};
export interface ret_cluster_resourcesGET {
    /**
     * CPU utilization (when type in node,qemu,lxc).
     */
    cpu?: number;
    /**
     * Used disk space in bytes (when type in storage), used root image spave for VMs (type in qemu,lxc).
     */
    disk?: string;
    /**
     * HA service status (for HA managed VMs).
     */
    hastate?: string;
    /**
     */
    id: string;
    /**
     * Support level (when type == node).
     */
    level?: string;
    /**
     * Number of available CPUs (when type in node,qemu,lxc).
     */
    maxcpu?: number;
    /**
     * Storage size in bytes (when type in storage), root image size for VMs (type in qemu,lxc).
     */
    maxdisk?: number;
    /**
     * Number of available memory in bytes (when type in node,qemu,lxc).
     */
    maxmem?: number;
    /**
     * Used memory in bytes (when type in node,qemu,lxc).
     */
    mem?: string;
    /**
     * The cluster node name (when type in node,storage,qemu,lxc).
     */
    node?: string;
    /**
     * The pool name (when type in pool,qemu,lxc).
     */
    pool?: string;
    /**
     * Resource type dependent status.
     */
    status?: string;
    /**
     * The storage identifier (when type == storage).
     */
    storage?: string;
    /**
     * Resource type.
     */
    type: string;
    /**
     * Node uptime in seconds (when type in node,qemu,lxc).
     */
    uptime?: number;
};
export interface ret_cluster_tasksGET {
    /**
     */
    upid: string;
};
export interface ret_cluster_statusGET {
    /**
     */
    id: string;
    /**
     * [node] IP of the resolved nodename.
     */
    ip?: string;
    /**
     * [node] Proxmox VE Subscription level, indicates if eligible for enterprise support as well as access to the stable Proxmox VE Enterprise Repository.
     */
    level?: string;
    /**
     * [node] Indicates if this is the responding node.
     */
    local?: boolean;
    /**
     */
    name: string;
    /**
     * [node] ID of the node from the corosync configuration.
     */
    nodeid?: number;
    /**
     * [cluster] Nodes count, including offline nodes.
     */
    nodes?: number;
    /**
     * [node] Indicates if the node is online or offline.
     */
    online?: boolean;
    /**
     * [cluster] Indicates if there is a majority of nodes online to make decisions
     */
    quorate?: boolean;
    /**
     * Indicates the type, either cluster or node. The type defines the object properties e.g. quorate available for type cluster.
     */
    type: string;
    /**
     * [cluster] Current version of the corosync configuration file.
     */
    version?: number;
};
export interface ret_nodesGET {
    /**
     * CPU utilization.
     */
    cpu?: number;
    /**
     * Support level.
     */
    level?: string;
    /**
     * Number of available CPUs.
     */
    maxcpu?: number;
    /**
     * Number of available memory in bytes.
     */
    maxmem?: number;
    /**
     * Used memory in bytes.
     */
    mem?: number;
    /**
     * The cluster node name.
     */
    node: string;
    /**
     * The SSL fingerprint for the node certificate.
     */
    ssl_fingerprint?: string;
    /**
     * Node status.
     */
    status: string;
    /**
     * Node uptime in seconds.
     */
    uptime?: number;
};
export interface ret_nodes_nodeGET {
};
export interface ret_nodes_node_qemuGET {
    /**
     * Maximum usable CPUs.
     */
    cpus?: number;
    /**
     * The current config lock, if any.
     */
    lock?: string;
    /**
     * Root disk size in bytes.
     */
    maxdisk?: number;
    /**
     * Maximum memory in bytes.
     */
    maxmem?: number;
    /**
     * VM name.
     */
    name?: string;
    /**
     * PID of running qemu process.
     */
    pid?: number;
    /**
     * Qemu QMP agent status.
     */
    qmpstatus?: string;
    /**
     * Qemu process status.
     */
    status: string;
    /**
     * The current configured tags, if any
     */
    tags?: string;
    /**
     * Uptime.
     */
    uptime?: number;
    /**
     * The (unique) ID of the VM.
     */
    vmid: number;
};
export interface ret_nodes_node_qemu_vmidGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_qemu_vmid_firewallGET {
};
export interface ret_nodes_node_qemu_vmid_firewall_rulesGET {
    /**
     */
    pos: number;
};
export interface ret_nodes_node_qemu_vmid_firewall_rules_posGET {
    /**
     */
    action: string;
    /**
     */
    comment?: string;
    /**
     */
    dest?: string;
    /**
     */
    dport?: string;
    /**
     */
    enable?: number;
    /**
     */
    iface?: string;
    /**
     */
    ipversion?: number;
    /**
     * Log level for firewall rule
     */
    log?: string;
    /**
     */
    macro?: string;
    /**
     */
    pos: number;
    /**
     */
    proto?: string;
    /**
     */
    source?: string;
    /**
     */
    sport?: string;
    /**
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_firewall_aliasesGET {
    /**
     */
    cidr: string;
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     */
    name: string;
};
export interface ret_nodes_node_qemu_vmid_firewall_ipsetGET {
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * IP set name.
     */
    name: string;
};
export interface ret_nodes_node_qemu_vmid_firewall_ipset_nameGET {
    /**
     */
    cidr: string;
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     */
    nomatch?: boolean;
};
export interface ret_nodes_node_qemu_vmid_firewall_optionsGET {
    /**
     * Enable DHCP.
     */
    dhcp?: boolean;
    /**
     * Enable/disable firewall rules.
     */
    enable?: boolean;
    /**
     * Enable default IP filters. This is equivalent to adding an empty ipfilter-net<id> ipset for every interface. Such ipsets implicitly contain sane default restrictions such as restricting IPv6 link local addresses to the one derived from the interface's MAC address. For containers the configured IP addresses will be implicitly added.
     */
    ipfilter?: boolean;
    /**
     * Log level for incoming traffic.
     */
    log_level_in?: string;
    /**
     * Log level for outgoing traffic.
     */
    log_level_out?: string;
    /**
     * Enable/disable MAC address filter.
     */
    macfilter?: boolean;
    /**
     * Enable NDP (Neighbor Discovery Protocol).
     */
    ndp?: boolean;
    /**
     * Input policy.
     */
    policy_in?: string;
    /**
     * Output policy.
     */
    policy_out?: string;
    /**
     * Allow sending Router Advertisement.
     */
    radv?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_firewall_logGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_qemu_vmid_firewall_refsGET {
    /**
     */
    comment?: string;
    /**
     */
    name: string;
    /**
     */
    type: string;
};
export interface ret_nodes_node_qemu_vmid_agentGET {
};
export interface ret_nodes_node_qemu_vmid_agent_execPOST {
    /**
     * The PID of the process started by the guest-agent.
     */
    pid: number;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_agent_exec_statusGET {
    /**
     * stderr of the process
     */
    'err-data'?: string;
    /**
     * true if stderr was not fully captured
     */
    'err-truncated'?: boolean;
    /**
     * process exit code if it was normally terminated.
     */
    exitcode?: number;
    /**
     * Tells if the given command has exited yet.
     */
    exited: boolean;
    /**
     * stdout of the process
     */
    'out-data'?: string;
    /**
     * true if stdout was not fully captured
     */
    'out-truncated'?: boolean;
    /**
     * signal number or exception code if the process was abnormally terminated.
     */
    signal?: number;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_agent_file_readGET {
    /**
     * The content of the file, maximum 16777216
     */
    content: string;
    /**
     * If set to 1, the output is truncated and not complete
     */
    truncated?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_rrdGET {
    /**
     */
    filename: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_rrddataGET {
};
export interface ret_nodes_node_qemu_vmid_configGET {
    /**
     * Enable/disable ACPI.
     */
    acpi?: boolean;
    /**
     * Enable/disable Qemu GuestAgent and its properties.
     */
    agent?: string;
    /**
     * Virtual processor architecture. Defaults to the host.
     */
    arch?: string;
    /**
     * Arbitrary arguments passed to kvm, for example:
     * args: -no-reboot -no-hpet
     * NOTE: this option is for experts only.
     */
    args?: string;
    /**
     * Configure a audio device, useful in combination with QXL/Spice.
     */
    audio0?: string;
    /**
     * Automatic restart after crash (currently ignored).
     */
    autostart?: boolean;
    /**
     * Amount of target RAM for the VM in MB. Using zero disables the ballon driver.
     */
    balloon?: number;
    /**
     * Select BIOS implementation.
     */
    bios?: string;
    /**
     * Boot on floppy (a), hard disk (c), CD-ROM (d), or network (n).
     */
    boot?: string;
    /**
     * Enable booting from specified disk.
     */
    bootdisk?: string;
    /**
     * This is an alias for option -ide2
     */
    cdrom?: string;
    /**
     * cloud-init: Specify custom files to replace the automatically generated ones at start.
     */
    cicustom?: string;
    /**
     * cloud-init: Password to assign the user. Using this is generally not recommended. Use ssh keys instead. Also note that older cloud-init versions do not support hashed passwords.
     */
    cipassword?: string;
    /**
     * Specifies the cloud-init configuration format. The default depends on the configured operating system type (`ostype`. We use the `nocloud` format for Linux, and `configdrive2` for windows.
     */
    citype?: string;
    /**
     * cloud-init: User name to change ssh keys and password for instead of the image's configured default user.
     */
    ciuser?: string;
    /**
     * The number of cores per socket.
     */
    cores?: number;
    /**
     * Emulated CPU type.
     */
    cpu?: string;
    /**
     * Limit of CPU usage.
     * NOTE: If the computer has 2 CPUs, it has total of '2' CPU time. Value '0' indicates no CPU limit.
     */
    cpulimit?: number;
    /**
     * CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to weights of all the other running VMs.
     */
    cpuunits?: number;
    /**
     * Description for the VM. Only used on the configuration web interface. This is saved as comment inside the configuration file.
     */
    description?: string;
    /**
     * SHA1 digest of configuration file. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * Configure a Disk for storing EFI vars
     */
    efidisk0?: string;
    /**
     * Freeze CPU at startup (use 'c' monitor command to start execution).
     */
    freeze?: boolean;
    /**
     * Script that will be executed during various steps in the vms lifetime.
     */
    hookscript?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci0?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci1?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci2?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci3?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci4?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci5?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci6?: string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    hostpci7?: string;
    /**
     * Selectively enable hotplug features. This is a comma separated list of hotplug features: 'network', 'disk', 'cpu', 'memory' and 'usb'. Use '0' to disable hotplug completely. Value '1' is an alias for the default 'network,disk,usb'.
     */
    hotplug?: string;
    /**
     * Enable/disable hugepages memory.
     */
    hugepages?: string;
    /**
     * Use volume as IDE hard disk or CD-ROM (n is 0 to 3).
     */
    ide0?: string;
    /**
     * Use volume as IDE hard disk or CD-ROM (n is 0 to 3).
     */
    ide1?: string;
    /**
     * Use volume as IDE hard disk or CD-ROM (n is 0 to 3).
     */
    ide2?: string;
    /**
     * Use volume as IDE hard disk or CD-ROM (n is 0 to 3).
     */
    ide3?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig0?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig1?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig2?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig3?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig4?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig5?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig6?: string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     */
    ipconfig7?: string;
    /**
     * Inter-VM shared memory. Useful for direct communication between VMs, or to the host.
     */
    ivshmem?: string;
    /**
     * Keybord layout for vnc server. Default is read from the '/etc/pve/datacenter.cfg' configuration file.It should not be necessary to set it.
     */
    keyboard?: string;
    /**
     * Enable/disable KVM hardware virtualization.
     */
    kvm?: boolean;
    /**
     * Set the real time clock to local time. This is enabled by default if ostype indicates a Microsoft OS.
     */
    localtime?: boolean;
    /**
     * Lock/unlock the VM.
     */
    lock?: string;
    /**
     * Specifies the Qemu machine type.
     */
    machine?: string;
    /**
     * Amount of RAM for the VM in MB. This is the maximum available memory when you use the balloon device.
     */
    memory?: number;
    /**
     * Set maximum tolerated downtime (in seconds) for migrations.
     */
    migrate_downtime?: number;
    /**
     * Set maximum speed (in MB/s) for migrations. Value 0 is no limit.
     */
    migrate_speed?: number;
    /**
     * Set a name for the VM. Only used on the configuration web interface.
     */
    name?: string;
    /**
     * cloud-init: Sets DNS server IP address for a container. Create will automatically use the setting from the host if neither searchdomain nor nameserver are set.
     */
    nameserver?: string;
    /**
     * Specify network devices.
     */
    net0?: string;
    /**
     * Specify network devices.
     */
    net1?: string;
    /**
     * Specify network devices.
     */
    net2?: string;
    /**
     * Specify network devices.
     */
    net3?: string;
    /**
     * Enable/disable NUMA.
     */
    numa?: boolean;
    /**
     * NUMA topology.
     */
    numa0?: string;
    /**
     * NUMA topology.
     */
    numa1?: string;
    /**
     * NUMA topology.
     */
    numa2?: string;
    /**
     * NUMA topology.
     */
    numa3?: string;
    /**
     * Specifies whether a VM will be started during system bootup.
     */
    onboot?: boolean;
    /**
     * Specify guest operating system. This is used to enable special
     * optimization/features for specific operating systems:
     * [horizontal]
     * other;; unspecified OS
     * wxp;; Microsoft Windows XP
     * w2k;; Microsoft Windows 2000
     * w2k3;; Microsoft Windows 2003
     * w2k8;; Microsoft Windows 2008
     * wvista;; Microsoft Windows Vista
     * win7;; Microsoft Windows 7
     * win8;; Microsoft Windows 8/2012/2012r2
     * win10;; Microsoft Windows 10/2016
     * l24;; Linux 2.4 Kernel
     * l26;; Linux 2.6 - 5.X Kernel
     * solaris;; Solaris/OpenSolaris/OpenIndiania kernel
     */
    ostype?: string;
    /**
     * Map host parallel devices (n is 0 to 2).
     * NOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    parallel0?: string;
    /**
     * Map host parallel devices (n is 0 to 2).
     * NOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    parallel1?: string;
    /**
     * Map host parallel devices (n is 0 to 2).
     * NOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    parallel2?: string;
    /**
     * Map host parallel devices (n is 0 to 2).
     * NOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    parallel3?: string;
    /**
     * Sets the protection flag of the VM. This will disable the remove VM and remove disk operations.
     */
    protection?: boolean;
    /**
     * Allow reboot. If set to '0' the VM exit on reboot.
     */
    reboot?: boolean;
    /**
     * Configure a VirtIO-based Random Number Generator.
     */
    rng0?: string;
    /**
     * Use volume as SATA hard disk or CD-ROM (n is 0 to 5).
     */
    sata0?: string;
    /**
     * Use volume as SATA hard disk or CD-ROM (n is 0 to 5).
     */
    sata1?: string;
    /**
     * Use volume as SATA hard disk or CD-ROM (n is 0 to 5).
     */
    sata2?: string;
    /**
     * Use volume as SATA hard disk or CD-ROM (n is 0 to 5).
     */
    sata3?: string;
    /**
     * Use volume as SCSI hard disk or CD-ROM (n is 0 to 30).
     */
    scsi0?: string;
    /**
     * Use volume as SCSI hard disk or CD-ROM (n is 0 to 30).
     */
    scsi1?: string;
    /**
     * Use volume as SCSI hard disk or CD-ROM (n is 0 to 30).
     */
    scsi2?: string;
    /**
     * Use volume as SCSI hard disk or CD-ROM (n is 0 to 30).
     */
    scsi3?: string;
    /**
     * SCSI controller model
     */
    scsihw?: string;
    /**
     * cloud-init: Sets DNS search domains for a container. Create will automatically use the setting from the host if neither searchdomain nor nameserver are set.
     */
    searchdomain?: string;
    /**
     * Create a serial device inside the VM (n is 0 to 3), and pass through a
     * host serial device (i.e. /dev/ttyS0), or create a unix socket on the
     * host side (use 'qm terminal' to open a terminal connection).
     * NOTE: If you pass through a host serial device, it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    serial0?: string;
    /**
     * Create a serial device inside the VM (n is 0 to 3), and pass through a
     * host serial device (i.e. /dev/ttyS0), or create a unix socket on the
     * host side (use 'qm terminal' to open a terminal connection).
     * NOTE: If you pass through a host serial device, it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    serial1?: string;
    /**
     * Create a serial device inside the VM (n is 0 to 3), and pass through a
     * host serial device (i.e. /dev/ttyS0), or create a unix socket on the
     * host side (use 'qm terminal' to open a terminal connection).
     * NOTE: If you pass through a host serial device, it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    serial2?: string;
    /**
     * Create a serial device inside the VM (n is 0 to 3), and pass through a
     * host serial device (i.e. /dev/ttyS0), or create a unix socket on the
     * host side (use 'qm terminal' to open a terminal connection).
     * NOTE: If you pass through a host serial device, it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     */
    serial3?: string;
    /**
     * Amount of memory shares for auto-ballooning. The larger the number is, the more memory this VM gets. Number is relative to weights of all other running VMs. Using zero disables auto-ballooning. Auto-ballooning is done by pvestatd.
     */
    shares?: number;
    /**
     * Specify SMBIOS type 1 fields.
     */
    smbios1?: string;
    /**
     * The number of CPUs. Please use option -sockets instead.
     */
    smp?: number;
    /**
     * The number of CPU sockets.
     */
    sockets?: number;
    /**
     * Configure additional enhancements for SPICE.
     */
    spice_enhancements?: string;
    /**
     * cloud-init: Setup public SSH keys (one key per line, OpenSSH format).
     */
    sshkeys?: string;
    /**
     * Set the initial date of the real time clock. Valid format for date are: 'now' or '2006-06-17T16:01:21' or '2006-06-17'.
     */
    startdate?: string;
    /**
     * Startup and shutdown behavior. Order is a non-negative number defining the general startup order. Shutdown in done with reverse ordering. Additionally you can set the 'up' or 'down' delay in seconds, which specifies a delay to wait before the next VM is started or stopped.
     */
    startup?: string;
    /**
     * Enable/disable the USB tablet device. This device is usually needed to allow absolute mouse positioning with VNC. Else the mouse runs out of sync with normal VNC clients. If you're running lots of console-only guests on one host, you may consider disabling this to save some context switches. This is turned off by default if you use spice (-vga=qxl).
     */
    tablet?: boolean;
    /**
     * Tags of the VM. This is only meta information.
     */
    tags?: string;
    /**
     * Enable/disable time drift fix.
     */
    tdf?: boolean;
    /**
     * Enable/disable Template.
     */
    template?: boolean;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused0?: string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused1?: string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused2?: string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused3?: string;
    /**
     * Configure an USB device (n is 0 to 4).
     */
    usb0?: string;
    /**
     * Configure an USB device (n is 0 to 4).
     */
    usb1?: string;
    /**
     * Configure an USB device (n is 0 to 4).
     */
    usb2?: string;
    /**
     * Configure an USB device (n is 0 to 4).
     */
    usb3?: string;
    /**
     * Number of hotplugged vcpus.
     */
    vcpus?: number;
    /**
     * Configure the VGA Hardware. If you want to use high resolution modes (>= 1280x1024x16) you may need to increase the vga memory option. Since QEMU 2.9 the default VGA display type is 'std' for all OS types besides some Windows versions (XP and older) which use 'cirrus'. The 'qxl' option enables the SPICE display server. For win* OS you can select how many independent displays you want, Linux guests can add displays them self.
     * You can also run without any graphic card, using a serial device as terminal.
     */
    vga?: string;
    /**
     * Use volume as VIRTIO hard disk (n is 0 to 15).
     */
    virtio0?: string;
    /**
     * Use volume as VIRTIO hard disk (n is 0 to 15).
     */
    virtio1?: string;
    /**
     * Use volume as VIRTIO hard disk (n is 0 to 15).
     */
    virtio2?: string;
    /**
     * Use volume as VIRTIO hard disk (n is 0 to 15).
     */
    virtio3?: string;
    /**
     * The VM generation ID (vmgenid) device exposes a 128-bit integer value identifier to the guest OS. This allows to notify the guest operating system when the virtual machine is executed with a different configuration (e.g. snapshot execution or creation from a template). The guest operating system notices the change, and is then able to react as appropriate by marking its copies of distributed databases as dirty, re-initializing its random number generator, etc.
     * Note that auto-creation only works when done throug API/CLI create or update methods, but not when manually editing the config file.
     */
    vmgenid?: string;
    /**
     * Default storage for VM state volumes/files.
     */
    vmstatestorage?: string;
    /**
     * Create a virtual hardware watchdog device. Once enabled (by a guest action), the watchdog must be periodically polled by an agent inside the guest or else the watchdog will reset the guest (or execute the respective action specified)
     */
    watchdog?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_pendingGET {
    /**
     * Indicates a pending delete request if present and not 0. The value 2 indicates a force-delete request.
     */
    delete?: number;
    /**
     * Configuration option name.
     */
    key: string;
    /**
     * Pending value.
     */
    pending?: string;
    /**
     * Current value.
     */
    value?: string;
};
export interface ret_nodes_node_qemu_vmid_vncwebsocketGET {
    /**
     */
    port: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_statusGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_qemu_vmid_status_currentGET {
    /**
     * Qemu GuestAgent enabled in config.
     */
    agent?: boolean;
    /**
     * Maximum usable CPUs.
     */
    cpus?: number;
    /**
     * HA manager service status.
     */
    ha: any;
    /**
     * The current config lock, if any.
     */
    lock?: string;
    /**
     * Root disk size in bytes.
     */
    maxdisk?: number;
    /**
     * Maximum memory in bytes.
     */
    maxmem?: number;
    /**
     * VM name.
     */
    name?: string;
    /**
     * PID of running qemu process.
     */
    pid?: number;
    /**
     * Qemu QMP agent status.
     */
    qmpstatus?: string;
    /**
     * Qemu VGA configuration supports spice.
     */
    spice?: boolean;
    /**
     * Qemu process status.
     */
    status: string;
    /**
     * The current configured tags, if any
     */
    tags?: string;
    /**
     * is this VM a teplate
     */
    template?: number;
    /**
     * Uptime.
     */
    uptime?: number;
    /**
     * The (unique) ID of the VM.
     */
    vmid: number;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_featureGET {
    /**
     */
    hasFeature: boolean;
    /**
     */
    nodes: string[];
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_migrateGET {
    /**
     * List nodes allowed for offline migration, only passed if VM is offline
     */
    allowed_nodes?: string[];
    /**
     * List local disks including CD-Rom, unsused and not referenced disks
     */
    local_disks: string[];
    /**
     * List local resources e.g. pci, usb
     */
    local_resources: string[];
    /**
     * List not allowed nodes with additional informations, only passed if VM is offline
     */
    not_allowed_nodes?: any;
    /**
     */
    running: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_qemu_vmid_snapshotGET {
    /**
     * Snapshot description.
     */
    description: string;
    /**
     * Snapshot identifier. Value 'current' identifies the current VM.
     */
    name: string;
    /**
     * Parent snapshot identifier.
     */
    parent?: string;
    /**
     * Snapshot creation time
     */
    snaptime?: number;
    /**
     * Snapshot includes RAM.
     */
    vmstate?: boolean;
};
export interface ret_nodes_node_qemu_vmid_snapshot_snapnameGET {
};
export interface ret_nodes_node_cpuGET {
    /**
     * True if this is a custom CPU model.
     */
    custom: boolean;
    /**
     * Name of the CPU model. Identifies it for subsequent API calls. Prefixed with 'custom-' for custom models.
     */
    name: string;
    /**
     * CPU vendor visible to the guest when this model is selected. Vendor of 'reported-model' in case of custom models.
     */
    vendor: string;
};
export interface ret_nodes_node_lxcGET {
    /**
     * Maximum usable CPUs.
     */
    cpus?: number;
    /**
     * The current config lock, if any.
     */
    lock?: string;
    /**
     * Root disk size in bytes.
     */
    maxdisk?: number;
    /**
     * Maximum memory in bytes.
     */
    maxmem?: number;
    /**
     * Maximum SWAP memory in bytes.
     */
    maxswap?: number;
    /**
     * Container name.
     */
    name?: string;
    /**
     * LXC Container status.
     */
    status: string;
    /**
     * The current configured tags, if any.
     */
    tags?: string;
    /**
     * Uptime.
     */
    uptime?: number;
    /**
     * The (unique) ID of the VM.
     */
    vmid: number;
};
export interface ret_nodes_node_lxc_vmidGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_lxc_vmid_configGET {
    /**
     * OS architecture type.
     */
    arch?: string;
    /**
     * Console mode. By default, the console command tries to open a connection to one of the available tty devices. By setting cmode to 'console' it tries to attach to /dev/console instead. If you set cmode to 'shell', it simply invokes a shell inside the container (no login).
     */
    cmode?: string;
    /**
     * Attach a console device (/dev/console) to the container.
     */
    console?: boolean;
    /**
     * The number of cores assigned to the container. A container can use all available cores by default.
     */
    cores?: number;
    /**
     * Limit of CPU usage.
     * NOTE: If the computer has 2 CPUs, it has a total of '2' CPU time. Value '0' indicates no CPU limit.
     */
    cpulimit?: number;
    /**
     * CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to the weights of all the other running VMs.
     * NOTE: You can disable fair-scheduler configuration by setting this to 0.
     */
    cpuunits?: number;
    /**
     * Container description. Only used on the configuration web interface.
     */
    description?: string;
    /**
     * SHA1 digest of configuration file. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * Allow containers access to advanced features.
     */
    features?: string;
    /**
     * Script that will be exectued during various steps in the containers lifetime.
     */
    hookscript?: string;
    /**
     * Set a host name for the container.
     */
    hostname?: string;
    /**
     * Lock/unlock the VM.
     */
    lock?: string;
    /**
     * Array of lxc low-level configurations ([[key1, value1], [key2, value2] ...]).
     */
    lxc?: string[][];
    /**
     * Amount of RAM for the VM in MB.
     */
    memory?: number;
    /**
     * Use volume as container mount point.
     */
    mp0?: string;
    /**
     * Use volume as container mount point.
     */
    mp1?: string;
    /**
     * Use volume as container mount point.
     */
    mp2?: string;
    /**
     * Use volume as container mount point.
     */
    mp3?: string;
    /**
     * Sets DNS server IP address for a container. Create will automatically use the setting from the host if you neither set searchdomain nor nameserver.
     */
    nameserver?: string;
    /**
     * Specifies network interfaces for the container.
     */
    net0?: string;
    /**
     * Specifies network interfaces for the container.
     */
    net1?: string;
    /**
     * Specifies network interfaces for the container.
     */
    net2?: string;
    /**
     * Specifies network interfaces for the container.
     */
    net3?: string;
    /**
     * Specifies whether a VM will be started during system bootup.
     */
    onboot?: boolean;
    /**
     * OS type. This is used to setup configuration inside the container, and corresponds to lxc setup scripts in /usr/share/lxc/config/<ostype>.common.conf. Value 'unmanaged' can be used to skip and OS specific setup.
     */
    ostype?: string;
    /**
     * Sets the protection flag of the container. This will prevent the CT or CT's disk remove/update operation.
     */
    protection?: boolean;
    /**
     * Use volume as container root.
     */
    rootfs?: string;
    /**
     * Sets DNS search domains for a container. Create will automatically use the setting from the host if you neither set searchdomain nor nameserver.
     */
    searchdomain?: string;
    /**
     * Startup and shutdown behavior. Order is a non-negative number defining the general startup order. Shutdown in done with reverse ordering. Additionally you can set the 'up' or 'down' delay in seconds, which specifies a delay to wait before the next VM is started or stopped.
     */
    startup?: string;
    /**
     * Amount of SWAP for the VM in MB.
     */
    swap?: number;
    /**
     * Tags of the Container. This is only meta information.
     */
    tags?: string;
    /**
     * Enable/disable Template.
     */
    template?: boolean;
    /**
     * Time zone to use in the container. If option isn't set, then nothing will be done. Can be set to 'host' to match the host time zone, or an arbitrary time zone option from /usr/share/zoneinfo/zone.tab
     */
    timezone?: string;
    /**
     * Specify the number of tty available to the container
     */
    tty?: number;
    /**
     * Makes the container run as unprivileged user. (Should not be modified manually.)
     */
    unprivileged?: boolean;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused0?: string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused1?: string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused2?: string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     */
    unused3?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_statusGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_lxc_vmid_status_currentGET {
    /**
     * Maximum usable CPUs.
     */
    cpus?: number;
    /**
     * HA manager service status.
     */
    ha: any;
    /**
     * The current config lock, if any.
     */
    lock?: string;
    /**
     * Root disk size in bytes.
     */
    maxdisk?: number;
    /**
     * Maximum memory in bytes.
     */
    maxmem?: number;
    /**
     * Maximum SWAP memory in bytes.
     */
    maxswap?: number;
    /**
     * Container name.
     */
    name?: string;
    /**
     * LXC Container status.
     */
    status: string;
    /**
     * The current configured tags, if any.
     */
    tags?: string;
    /**
     * Uptime.
     */
    uptime?: number;
    /**
     * The (unique) ID of the VM.
     */
    vmid: number;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_snapshotGET {
    /**
     * Snapshot description.
     */
    description: string;
    /**
     * Snapshot identifier. Value 'current' identifies the current VM.
     */
    name: string;
    /**
     * Parent snapshot identifier.
     */
    parent?: string;
    /**
     * Snapshot creation time
     */
    snaptime?: number;
};
export interface ret_nodes_node_lxc_vmid_snapshot_snapnameGET {
};
export interface ret_nodes_node_lxc_vmid_firewallGET {
};
export interface ret_nodes_node_lxc_vmid_firewall_rulesGET {
    /**
     */
    pos: number;
};
export interface ret_nodes_node_lxc_vmid_firewall_rules_posGET {
    /**
     */
    action: string;
    /**
     */
    comment?: string;
    /**
     */
    dest?: string;
    /**
     */
    dport?: string;
    /**
     */
    enable?: number;
    /**
     */
    iface?: string;
    /**
     */
    ipversion?: number;
    /**
     * Log level for firewall rule
     */
    log?: string;
    /**
     */
    macro?: string;
    /**
     */
    pos: number;
    /**
     */
    proto?: string;
    /**
     */
    source?: string;
    /**
     */
    sport?: string;
    /**
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_firewall_aliasesGET {
    /**
     */
    cidr: string;
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     */
    name: string;
};
export interface ret_nodes_node_lxc_vmid_firewall_ipsetGET {
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     * IP set name.
     */
    name: string;
};
export interface ret_nodes_node_lxc_vmid_firewall_ipset_nameGET {
    /**
     */
    cidr: string;
    /**
     */
    comment?: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest: string;
    /**
     */
    nomatch?: boolean;
};
export interface ret_nodes_node_lxc_vmid_firewall_optionsGET {
    /**
     * Enable DHCP.
     */
    dhcp?: boolean;
    /**
     * Enable/disable firewall rules.
     */
    enable?: boolean;
    /**
     * Enable default IP filters. This is equivalent to adding an empty ipfilter-net<id> ipset for every interface. Such ipsets implicitly contain sane default restrictions such as restricting IPv6 link local addresses to the one derived from the interface's MAC address. For containers the configured IP addresses will be implicitly added.
     */
    ipfilter?: boolean;
    /**
     * Log level for incoming traffic.
     */
    log_level_in?: string;
    /**
     * Log level for outgoing traffic.
     */
    log_level_out?: string;
    /**
     * Enable/disable MAC address filter.
     */
    macfilter?: boolean;
    /**
     * Enable NDP (Neighbor Discovery Protocol).
     */
    ndp?: boolean;
    /**
     * Input policy.
     */
    policy_in?: string;
    /**
     * Output policy.
     */
    policy_out?: string;
    /**
     * Allow sending Router Advertisement.
     */
    radv?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_firewall_logGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_lxc_vmid_firewall_refsGET {
    /**
     */
    comment?: string;
    /**
     */
    name: string;
    /**
     */
    type: string;
};
export interface ret_nodes_node_lxc_vmid_rrdGET {
    /**
     */
    filename: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_rrddataGET {
};
export interface ret_nodes_node_lxc_vmid_vncwebsocketGET {
    /**
     */
    port: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_featureGET {
    /**
     */
    hasFeature: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_lxc_vmid_pendingGET {
    /**
     * Indicates a pending delete request if present and not 0.
     */
    delete?: number;
    /**
     * Configuration option name.
     */
    key: string;
    /**
     * Pending value.
     */
    pending?: string;
    /**
     * Current value.
     */
    value?: string;
};
export interface ret_nodes_node_cephGET {
};
export interface ret_nodes_node_ceph_mdsGET {
    /**
     */
    addr?: string;
    /**
     */
    host?: string;
    /**
     * The name (ID) for the MDS
     */
    name: string;
    /**
     */
    rank?: number;
    /**
     * If true, the standby MDS is polling the active MDS for faster recovery (hot standby).
     */
    standby_replay?: boolean;
    /**
     * State of the MDS
     */
    state: string;
};
export interface ret_nodes_node_ceph_mgrGET {
    /**
     */
    addr?: string;
    /**
     */
    host?: string;
    /**
     * The name (ID) for the MGR
     */
    name: string;
    /**
     * State of the MGR
     */
    state: string;
};
export interface ret_nodes_node_ceph_monGET {
    /**
     */
    addr?: string;
    /**
     */
    host?: string;
    /**
     */
    name: string;
};
export interface ret_nodes_node_ceph_fsGET {
    /**
     * The name of the data pool.
     */
    data_pool: string;
    /**
     * The name of the metadata pool.
     */
    metadata_pool: string;
    /**
     * The ceph filesystem name.
     */
    name: string;
};
export interface ret_nodes_node_ceph_disksGET {
    /**
     */
    dev: string;
    /**
     */
    gpt: boolean;
    /**
     */
    model?: string;
    /**
     */
    osdid: number;
    /**
     */
    serial?: string;
    /**
     */
    size: number;
    /**
     */
    used?: string;
    /**
     */
    vendor?: string;
};
export interface ret_nodes_node_ceph_configdbGET {
    /**
     */
    can_update_at_runtime: boolean;
    /**
     */
    level: string;
    /**
     */
    mask: string;
    /**
     */
    name: string;
    /**
     */
    section: string;
    /**
     */
    value: string;
};
export interface ret_nodes_node_ceph_poolsGET {
    /**
     */
    bytes_used: number;
    /**
     */
    crush_rule: number;
    /**
     */
    crush_rule_name: string;
    /**
     */
    min_size: number;
    /**
     */
    percent_used: number;
    /**
     */
    pg_autoscale_mode?: string;
    /**
     */
    pg_num: number;
    /**
     */
    pool: number;
    /**
     */
    pool_name: string;
    /**
     */
    size: number;
};
export interface ret_nodes_node_ceph_logGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_ceph_rulesGET {
};
export interface ret_nodes_node_servicesGET {
};
export interface ret_nodes_node_services_serviceGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_networkGET {
};
export interface ret_nodes_node_network_ifaceGET {
    /**
     */
    method: string;
    /**
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_tasksGET {
    /**
     */
    endtime?: number;
    /**
     */
    id: string;
    /**
     */
    node: string;
    /**
     */
    pid: number;
    /**
     */
    pstart: number;
    /**
     */
    starttime: number;
    /**
     */
    status?: string;
    /**
     */
    type: string;
    /**
     */
    upid: string;
    /**
     */
    user: string;
};
export interface ret_nodes_node_tasks_upidGET {
};
export interface ret_nodes_node_tasks_upid_logGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_tasks_upid_statusGET {
    /**
     */
    pid: number;
    /**
     */
    status: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_scanGET {
    /**
     */
    method: string;
};
export interface ret_nodes_node_scan_zfsGET {
    /**
     * ZFS pool name.
     */
    pool: string;
};
export interface ret_nodes_node_scan_nfsGET {
    /**
     * NFS export options.
     */
    options: string;
    /**
     * The exported path.
     */
    path: string;
};
export interface ret_nodes_node_scan_cifsGET {
    /**
     * Descriptive text from server.
     */
    description: string;
    /**
     * The cifs share name.
     */
    share: string;
};
export interface ret_nodes_node_scan_glusterfsGET {
    /**
     * The volume name.
     */
    volname: string;
};
export interface ret_nodes_node_scan_iscsiGET {
    /**
     * The iSCSI portal name.
     */
    portal: string;
    /**
     * The iSCSI target name.
     */
    target: string;
};
export interface ret_nodes_node_scan_lvmGET {
    /**
     * The LVM logical volume group name.
     */
    vg: string;
};
export interface ret_nodes_node_scan_lvmthinGET {
    /**
     * The LVM Thin Pool name (LVM logical volume).
     */
    lv: string;
};
export interface ret_nodes_node_scan_usbGET {
    /**
     */
    busnum: number;
    /**
     */
    class: number;
    /**
     */
    devnum: number;
    /**
     */
    level: number;
    /**
     */
    manufacturer?: string;
    /**
     */
    port: number;
    /**
     */
    prodid: string;
    /**
     */
    product?: string;
    /**
     */
    serial?: string;
    /**
     */
    speed: string;
    /**
     */
    usbpath?: string;
    /**
     */
    vendid: string;
};
export interface ret_nodes_node_hardwareGET {
    /**
     */
    type: string;
};
export interface ret_nodes_node_hardware_pciGET {
    /**
     * The PCI Class of the device.
     */
    class: string;
    /**
     * The Device ID.
     */
    device: string;
    /**
     */
    device_name?: string;
    /**
     * The PCI ID.
     */
    id: string;
    /**
     * The IOMMU group in which the device is in. If no IOMMU group is detected, it is set to -1.
     */
    iommugroup: number;
    /**
     * If set, marks that the device is capable of creating mediated devices.
     */
    mdev?: boolean;
    /**
     * The Subsystem Device ID.
     */
    subsystem_device?: string;
    /**
     */
    subsystem_device_name?: string;
    /**
     * The Subsystem Vendor ID.
     */
    subsystem_vendor?: string;
    /**
     */
    subsystem_vendor_name?: string;
    /**
     * The Vendor ID.
     */
    vendor: string;
    /**
     */
    vendor_name?: string;
};
export interface ret_nodes_node_hardware_pci_pciidGET {
    /**
     */
    method: string;
};
export interface ret_nodes_node_hardware_pci_pciid_mdevGET {
    /**
     * The number of still available instances of this type.
     */
    available: number;
    /**
     */
    description: string;
    /**
     * The name of the mdev type.
     */
    type: string;
};
export interface ret_nodes_node_storageGET {
    /**
     * Set when storage is accessible.
     */
    active?: boolean;
    /**
     * Available storage space in bytes.
     */
    avail?: number;
    /**
     * Allowed storage content types.
     */
    content: string;
    /**
     * Set when storage is enabled (not disabled).
     */
    enabled?: boolean;
    /**
     * Shared flag from storage configuration.
     */
    shared?: boolean;
    /**
     * The storage identifier.
     */
    storage: string;
    /**
     * Total storage space in bytes.
     */
    total?: number;
    /**
     * Storage type.
     */
    type: string;
    /**
     * Used storage space in bytes.
     */
    used?: number;
    /**
     * Used fraction (used/total).
     */
    used_fraction?: number;
};
export interface ret_nodes_node_storage_storageGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_storage_storage_contentGET {
    /**
     * Creation time (seconds since the UNIX Epoch).
     */
    ctime?: number;
    /**
     * Format identifier ('raw', 'qcow2', 'subvol', 'iso', 'tgz' ...)
     */
    format: string;
    /**
     * Volume identifier of parent (for linked cloned).
     */
    parent?: string;
    /**
     * Volume size in bytes.
     */
    size: number;
    /**
     * Used space. Please note that most storage plugins do not report anything useful here.
     */
    used?: number;
    /**
     * Associated Owner VMID.
     */
    vmid?: number;
    /**
     * Volume identifier.
     */
    volid: string;
};
export interface ret_nodes_node_storage_storage_rrdGET {
    /**
     */
    filename: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_storage_storage_rrddataGET {
};
export interface ret_nodes_node_disksGET {
};
export interface ret_nodes_node_disks_lvmGET {
    /**
     */
    children: {
    /**
     * The underlying physical volumes
     */
    children?: {
    /**
     * The free bytes in the physical volume
     */
    free: number;
    /**
     */
    leaf: boolean;
    /**
     * The name of the physical volume
     */
    name: string;
    /**
     * The size of the physical volume in bytes
     */
    size: number;
}[];
    /**
     * The free bytes in the volume group
     */
    free: number;
    /**
     */
    leaf: boolean;
    /**
     * The name of the volume group
     */
    name: string;
    /**
     * The size of the volume group in bytes
     */
    size: number;
}[];
    /**
     */
    leaf: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_disks_lvmthinGET {
    /**
     * The name of the thinpool.
     */
    lv: string;
    /**
     * The size of the thinpool in bytes.
     */
    lv_size: number;
    /**
     * The size of the metadata lv in bytes.
     */
    metadata_size: number;
    /**
     * The used bytes of the metadata lv.
     */
    metadata_used: number;
    /**
     * The used bytes of the thinpool.
     */
    used: number;
};
export interface ret_nodes_node_disks_directoryGET {
    /**
     * The mounted device.
     */
    device: string;
    /**
     * The mount options.
     */
    options: string;
    /**
     * The mount path.
     */
    path: string;
    /**
     * The filesystem type.
     */
    type: string;
    /**
     * The path of the mount unit.
     */
    unitfile: string;
};
export interface ret_nodes_node_disks_zfsGET {
    /**
     */
    alloc: number;
    /**
     */
    dedup: number;
    /**
     */
    frag: number;
    /**
     */
    free: number;
    /**
     */
    health: string;
    /**
     */
    name: string;
    /**
     */
    size: number;
};
export interface ret_nodes_node_disks_zfs_nameGET {
    /**
     * Information about the recommended action to fix the state.
     */
    action?: string;
    /**
     * The pool configuration information, including the vdevs for each section (e.g. spares, cache), may be nested.
     */
    children: {
    /**
     */
    cksum?: number;
    /**
     * An optional message about the vdev.
     */
    msg: string;
    /**
     * The name of the vdev or section.
     */
    name: string;
    /**
     */
    read?: number;
    /**
     * The state of the vdev.
     */
    state?: string;
    /**
     */
    write?: number;
}[];
    /**
     * Information about the errors on the zpool.
     */
    errors: string;
    /**
     * The name of the zpool.
     */
    name: string;
    /**
     * Information about the last/current scrub.
     */
    scan: string;
    /**
     * The state of the zpool.
     */
    state: string;
    /**
     * Information about the state of the zpool.
     */
    status?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_disks_listGET {
    /**
     * The device path
     */
    devpath: string;
    /**
     */
    gpt: boolean;
    /**
     */
    health?: string;
    /**
     */
    model?: string;
    /**
     */
    osdid: number;
    /**
     */
    serial?: string;
    /**
     */
    size: number;
    /**
     */
    used?: string;
    /**
     */
    vendor?: string;
    /**
     */
    wwn?: string;
};
export interface ret_nodes_node_disks_smartGET {
    /**
     */
    attributes?: string[];
    /**
     */
    health: string;
    /**
     */
    text?: string;
    /**
     */
    type?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_aptGET {
    /**
     */
    id: string;
};
export interface ret_nodes_node_apt_updateGET {
};
export interface ret_nodes_node_apt_versionsGET {
};
export interface ret_nodes_node_firewallGET {
};
export interface ret_nodes_node_firewall_rulesGET {
    /**
     */
    pos: number;
};
export interface ret_nodes_node_firewall_rules_posGET {
    /**
     */
    action: string;
    /**
     */
    comment?: string;
    /**
     */
    dest?: string;
    /**
     */
    dport?: string;
    /**
     */
    enable?: number;
    /**
     */
    iface?: string;
    /**
     */
    ipversion?: number;
    /**
     * Log level for firewall rule
     */
    log?: string;
    /**
     */
    macro?: string;
    /**
     */
    pos: number;
    /**
     */
    proto?: string;
    /**
     */
    source?: string;
    /**
     */
    sport?: string;
    /**
     */
    type: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_firewall_optionsGET {
    /**
     * Enable host firewall rules.
     */
    enable?: boolean;
    /**
     * Log level for incoming traffic.
     */
    log_level_in?: string;
    /**
     * Log level for outgoing traffic.
     */
    log_level_out?: string;
    /**
     * Enable logging of conntrack information.
     */
    log_nf_conntrack?: boolean;
    /**
     * Enable NDP (Neighbor Discovery Protocol).
     */
    ndp?: boolean;
    /**
     * Allow invalid packets on connection tracking.
     */
    nf_conntrack_allow_invalid?: boolean;
    /**
     * Maximum number of tracked connections.
     */
    nf_conntrack_max?: number;
    /**
     * Conntrack established timeout.
     */
    nf_conntrack_tcp_timeout_established?: number;
    /**
     * Conntrack syn recv timeout.
     */
    nf_conntrack_tcp_timeout_syn_recv?: number;
    /**
     * Enable SMURFS filter.
     */
    nosmurfs?: boolean;
    /**
     * Enable synflood protection
     */
    protection_synflood?: boolean;
    /**
     * Synflood protection rate burst by ip src.
     */
    protection_synflood_burst?: number;
    /**
     * Synflood protection rate syn/sec by ip src.
     */
    protection_synflood_rate?: number;
    /**
     * Log level for SMURFS filter.
     */
    smurf_log_level?: string;
    /**
     * Log level for illegal tcp flags filter.
     */
    tcp_flags_log_level?: string;
    /**
     * Filter illegal combinations of TCP flags.
     */
    tcpflags?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_firewall_logGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_replicationGET {
    /**
     */
    id: string;
};
export interface ret_nodes_node_replication_idGET {
};
export interface ret_nodes_node_replication_id_logGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_certificatesGET {
};
export interface ret_nodes_node_certificates_acmeGET {
};
export interface ret_nodes_node_certificates_infoGET {
    /**
     */
    filename?: string;
    /**
     * Certificate SHA 256 fingerprint.
     */
    fingerprint?: string;
    /**
     * Certificate issuer name.
     */
    issuer?: string;
    /**
     * Certificate's notAfter timestamp (UNIX epoch).
     */
    notafter?: number;
    /**
     * Certificate's notBefore timestamp (UNIX epoch).
     */
    notbefore?: number;
    /**
     * Certificate in PEM format
     */
    pem?: string;
    /**
     * Certificate's public key size
     */
    'public-key-bits'?: number;
    /**
     * Certificate's public key algorithm
     */
    'public-key-type'?: string;
    /**
     * List of Certificate's SubjectAlternativeName entries.
     */
    san?: string[];
    /**
     * Certificate subject name.
     */
    subject?: string;
};
export interface ret_nodes_node_certificates_customPOST {
    /**
     */
    filename?: string;
    /**
     * Certificate SHA 256 fingerprint.
     */
    fingerprint?: string;
    /**
     * Certificate issuer name.
     */
    issuer?: string;
    /**
     * Certificate's notAfter timestamp (UNIX epoch).
     */
    notafter?: number;
    /**
     * Certificate's notBefore timestamp (UNIX epoch).
     */
    notbefore?: number;
    /**
     * Certificate in PEM format
     */
    pem?: string;
    /**
     * Certificate's public key size
     */
    'public-key-bits'?: number;
    /**
     * Certificate's public key algorithm
     */
    'public-key-type'?: string;
    /**
     * List of Certificate's SubjectAlternativeName entries.
     */
    san?: string[];
    /**
     * Certificate subject name.
     */
    subject?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_sdnGET {
};
export interface ret_nodes_node_sdn_zonesGET {
    /**
     * Status of zone
     */
    status: string;
    /**
     * The SDN zone object identifier.
     */
    zone: string;
};
export interface ret_nodes_node_sdn_zones_zoneGET {
    /**
     */
    subdir: string;
};
export interface ret_nodes_node_sdn_zones_zone_contentGET {
    /**
     * Status.
     */
    status?: string;
    /**
     * Status details
     */
    statusmsg?: string;
    /**
     * Vnet identifier.
     */
    vnet: string;
};
export interface ret_nodes_node_versionGET {
    /**
     * The current installed Proxmox VE Release
     */
    release: string;
    /**
     * The short git commit hash ID from which this version was build
     */
    repoid: string;
    /**
     * The current installed pve-manager package version
     */
    version: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_netstatGET {
};
export interface ret_nodes_node_rrdGET {
    /**
     */
    filename: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_rrddataGET {
};
export interface ret_nodes_node_syslogGET {
    /**
     * Line number
     */
    n: number;
    /**
     * Line text
     */
    t: string;
};
export interface ret_nodes_node_vncwebsocketGET {
    /**
     */
    port: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_dnsGET {
    /**
     * First name server IP address.
     */
    dns1?: string;
    /**
     * Second name server IP address.
     */
    dns2?: string;
    /**
     * Third name server IP address.
     */
    dns3?: string;
    /**
     * Search domain for host-name lookup.
     */
    search?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_timeGET {
    /**
     * Seconds since 1970-01-01 00:00:00 (local time)
     */
    localtime: number;
    /**
     * Seconds since 1970-01-01 00:00:00 UTC.
     */
    time: number;
    /**
     * Time zone
     */
    timezone: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_nodes_node_aplinfoGET {
};
export interface ret_nodes_node_hostsGET {
    /**
     * The content of /etc/hosts.
     */
    data: string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     */
    digest?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_storageGET {
    /**
     */
    storage: string;
};
export interface ret_accessGET {
    /**
     */
    subdir: string;
};
export interface ret_access_usersGET {
    /**
     */
    comment?: string;
    /**
     */
    email?: string;
    /**
     * Enable the account (default). You can set this to '0' to disable the account
     */
    enable?: boolean;
    /**
     * Account expiration date (seconds since epoch). '0' means no expiration date.
     */
    expire?: number;
    /**
     */
    firstname?: string;
    /**
     */
    groups?: string;
    /**
     * Keys for two factor auth (yubico).
     */
    keys?: string;
    /**
     */
    lastname?: string;
    /**
     */
    tokens?: {
    /**
     */
    comment?: string;
    /**
     * API token expiration date (seconds since epoch). '0' means no expiration date.
     */
    expire?: number;
    /**
     * Restrict API token privileges with separate ACLs (default), or give full privileges of corresponding user.
     */
    privsep?: boolean;
    /**
     * User-specific token identifier.
     */
    tokenid: string;
}[];
    /**
     * User ID
     */
    userid: string;
};
export interface ret_access_users_useridGET {
    /**
     */
    comment?: string;
    /**
     */
    email?: string;
    /**
     * Enable the account (default). You can set this to '0' to disable the account
     */
    enable?: boolean;
    /**
     * Account expiration date (seconds since epoch). '0' means no expiration date.
     */
    expire?: number;
    /**
     */
    firstname?: string;
    /**
     */
    groups?: string[];
    /**
     * Keys for two factor auth (yubico).
     */
    keys?: string;
    /**
     */
    lastname?: string;
    /**
     */
    tokens?: any;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_users_userid_tfaGET {
    /**
     * The type of TFA the users realm has set, if any.
     */
    realm?: string;
    /**
     * The type of TFA the user has set, if any.
     */
    user?: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_users_userid_tokenGET {
    /**
     */
    comment?: string;
    /**
     * API token expiration date (seconds since epoch). '0' means no expiration date.
     */
    expire?: number;
    /**
     * Restrict API token privileges with separate ACLs (default), or give full privileges of corresponding user.
     */
    privsep?: boolean;
    /**
     * User-specific token identifier.
     */
    tokenid: string;
};
export interface ret_access_users_userid_token_tokenidGET {
    /**
     */
    comment?: string;
    /**
     * API token expiration date (seconds since epoch). '0' means no expiration date.
     */
    expire?: number;
    /**
     * Restrict API token privileges with separate ACLs (default), or give full privileges of corresponding user.
     */
    privsep?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_users_userid_token_tokenidPOST {
    /**
     * The full token id.
     */
    'full-tokenid': string;
    /**
     */
    info: {
            /**
             */
            comment?: string;
            /**
             * API token expiration date (seconds since epoch). '0' means no expiration date.
             */
            expire?: number;
            /**
             * Restrict API token privileges with separate ACLs (default), or give full privileges of corresponding user.
             */
            privsep?: boolean;
};
    /**
     * API token value used for authentication.
     */
    value: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_users_userid_token_tokenidPUT {
    /**
     */
    comment?: string;
    /**
     * API token expiration date (seconds since epoch). '0' means no expiration date.
     */
    expire?: number;
    /**
     * Restrict API token privileges with separate ACLs (default), or give full privileges of corresponding user.
     */
    privsep?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_groupsGET {
    /**
     */
    comment?: string;
    /**
     */
    groupid: string;
    /**
     * list of users which form this group
     */
    users?: string;
};
export interface ret_access_groups_groupidGET {
    /**
     */
    comment?: string;
    /**
     */
    members: string[];
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_rolesGET {
    /**
     */
    privs?: string;
    /**
     */
    roleid: string;
    /**
     */
    special?: boolean;
};
export interface ret_access_roles_roleidGET {
    /**
     */
    'Datastore.Allocate'?: boolean;
    /**
     */
    'Datastore.AllocateSpace'?: boolean;
    /**
     */
    'Datastore.AllocateTemplate'?: boolean;
    /**
     */
    'Datastore.Audit'?: boolean;
    /**
     */
    'Group.Allocate'?: boolean;
    /**
     */
    'Permissions.Modify'?: boolean;
    /**
     */
    'Pool.Allocate'?: boolean;
    /**
     */
    'Realm.Allocate'?: boolean;
    /**
     */
    'Realm.AllocateUser'?: boolean;
    /**
     */
    'SDN.Allocate'?: boolean;
    /**
     */
    'SDN.Audit'?: boolean;
    /**
     */
    'Sys.Audit'?: boolean;
    /**
     */
    'Sys.Console'?: boolean;
    /**
     */
    'Sys.Modify'?: boolean;
    /**
     */
    'Sys.PowerMgmt'?: boolean;
    /**
     */
    'Sys.Syslog'?: boolean;
    /**
     */
    'User.Modify'?: boolean;
    /**
     */
    'VM.Allocate'?: boolean;
    /**
     */
    'VM.Audit'?: boolean;
    /**
     */
    'VM.Backup'?: boolean;
    /**
     */
    'VM.Clone'?: boolean;
    /**
     */
    'VM.Config.CDROM'?: boolean;
    /**
     */
    'VM.Config.CPU'?: boolean;
    /**
     */
    'VM.Config.Cloudinit'?: boolean;
    /**
     */
    'VM.Config.Disk'?: boolean;
    /**
     */
    'VM.Config.HWType'?: boolean;
    /**
     */
    'VM.Config.Memory'?: boolean;
    /**
     */
    'VM.Config.Network'?: boolean;
    /**
     */
    'VM.Config.Options'?: boolean;
    /**
     */
    'VM.Console'?: boolean;
    /**
     */
    'VM.Migrate'?: boolean;
    /**
     */
    'VM.Monitor'?: boolean;
    /**
     */
    'VM.PowerMgmt'?: boolean;
    /**
     */
    'VM.Snapshot'?: boolean;
    /**
     */
    'VM.Snapshot.Rollback'?: boolean;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_aclGET {
    /**
     * Access control path
     */
    path: string;
    /**
     * Allow to propagate (inherit) permissions.
     */
    propagate?: boolean;
    /**
     */
    roleid: string;
    /**
     */
    type: string;
    /**
     */
    ugid: string;
};
export interface ret_access_domainsGET {
    /**
     * A comment. The GUI use this text when you select a domain (Realm) on the login window.
     */
    comment?: string;
    /**
     */
    realm: string;
    /**
     * Two-factor authentication provider.
     */
    tfa?: string;
    /**
     */
    type: string;
};
export interface ret_access_ticketPOST {
    /**
     */
    CSRFPreventionToken?: string;
    /**
     */
    clustername?: string;
    /**
     */
    ticket?: string;
    /**
     */
    username: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_access_tfaPOST {
    /**
     */
    ticket: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_poolsGET {
    /**
     */
    poolid: string;
};
export interface ret_pools_poolidGET {
    /**
     */
    comment?: string;
    /**
     */
    members: {
    /**
     */
    id: string;
    /**
     */
    node: string;
    /**
     */
    storage?: string;
    /**
     */
    type: string;
    /**
     */
    vmid?: number;
}[];
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface ret_versionGET {
    /**
     */
    release: string;
    /**
     */
    repoid: string;
    /**
     */
    version: string;
    /**
     * additionalProperties
     */
    [additionalProperties: string]: any;
};
export interface Proxmox {
    cluster: {
        /**
         * Cluster index.
         * GET /cluster
         * @allowtoken 1
         * @permissions {"user":"all"}
         */
        $get(): Promise<ret_clusterGET[]>;
        replication: {
            /**
             * List replication jobs.
             * GET /cluster/replication
             * @allowtoken 1
             * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>.","user":"all"}
             */
            $get(): Promise<ret_cluster_replicationGET[]>;
            /**
             * Create a new replication job
             * POST /cluster/replication
             * @allowtoken 1
             * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
             */
            $post(param: { comment?: String0_4096, disable?: Tdisable, id: pvereplicationjobid, rate?: Trate, remove_job?: Tremove_job, schedule?: pvecalendarevent, source?: pvenode, target: pvenode, type: Ttype }): Promise<null>;
            $(id: string): {
                /**
                 * Mark replication job for removal.
                 * DELETE /cluster/replication/{id}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                 */
                $delete(param?: { force?: Tdisable, keep?: Tdisable }): Promise<null>;
                /**
                 * Read replication job configuration.
                 * GET /cluster/replication/{id}
                 * @allowtoken 1
                 * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>.","user":"all"}
                 */
                $get(): Promise<any>;
                /**
                 * Update replication job configuration.
                 * PUT /cluster/replication/{id}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                 */
                $put(param?: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, disable?: Tdisable, rate?: Trate, remove_job?: Tremove_job, schedule?: pvecalendarevent, source?: pvenode }): Promise<null>;
            };
        },
        config: {
            /**
             * Directory index.
             * GET /cluster/config
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Audit"]]}
             */
            $get(): Promise<ret_cluster_configGET[]>;
            /**
             * Generate new cluster configuration. If no links given, default to local IP address as link0.
             * POST /cluster/config
             * @allowtoken 1
             */
            $post(param: { clustername: pvenode_1, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, nodeid?: integer_Min1, votes?: integer_Min1 }): Promise<any>;
            apiversion: {
                /**
                 * Return the version of the cluster join API available on this node.
                 * GET /cluster/config/apiversion
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<any>;
            },
            nodes: {
                /**
                 * Corosync node list.
                 * GET /cluster/config/nodes
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_config_nodesGET[]>;
                $(node: string): {
                    /**
                     * Removes a node from the cluster configuration.
                     * DELETE /cluster/config/nodes/{node}
                     * @allowtoken 1
                     */
                    $delete(): Promise<null>;
                    /**
                     * Adds a node to the cluster configuration. This call is for internal use.
                     * POST /cluster/config/nodes/{node}
                     * @allowtoken 1
                     */
                    $post(param?: { apiversion?: integer, force?: Tdisable, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, new_node_ip?: ip, nodeid?: integer_Min1, votes?: integer_Min0 }): Promise<ret_cluster_config_nodes_nodePOST>;
                };
            },
            join: {
                /**
                 * Get information needed to join this cluster over the connected node.
                 * GET /cluster/config/join
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(param?: { node?: pvenode }): Promise<ret_cluster_config_joinGET>;
                /**
                 * Joins this node into an existing cluster. If no links are given, default to IP resolved by node's hostname on single link (fallback fails for clusters with multiple links).
                 * POST /cluster/config/join
                 * @allowtoken 1
                 */
                $post(param: { fingerprint: Tfingerprint, force?: Tdisable, hostname: string, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, nodeid?: integer_Min1, password: String0_128, votes?: integer_Min0 }): Promise<any>;
            },
            totem: {
                /**
                 * Get corosync totem protocol settings.
                 * GET /cluster/config/totem
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<any>;
            },
            qdevice: {
                /**
                 * Get QDevice status
                 * GET /cluster/config/qdevice
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<any>;
            },
        },
        firewall: {
            /**
             * Directory index.
             * GET /cluster/firewall
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<ret_cluster_firewallGET[]>;
            groups: {
                /**
                 * List security groups.
                 * GET /cluster/firewall/groups
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_cluster_firewall_groupsGET[]>;
                /**
                 * Create new security group.
                 * POST /cluster/firewall/groups
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $post(param: { comment?: string, digest?: String0_40, group: Tgroup, rename?: Tgroup }): Promise<null>;
                $(group: string): {
                    /**
                     * Delete security group.
                     * DELETE /cluster/firewall/groups/{group}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * List rules.
                     * GET /cluster/firewall/groups/{group}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_cluster_firewall_groups_groupGET[]>;
                    /**
                     * Create new rule.
                     * POST /cluster/firewall/groups/{group}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                    $(pos: string): {
                        /**
                         * Delete rule.
                         * DELETE /cluster/firewall/groups/{group}/{pos}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(param?: { digest?: String0_40 }): Promise<null>;
                        /**
                         * Get single rule data.
                         * GET /cluster/firewall/groups/{group}/{pos}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit"]]}
                         */
                        $get(): Promise<ret_cluster_firewall_groups_group_posGET>;
                        /**
                         * Modify rule data.
                         * PUT /cluster/firewall/groups/{group}/{pos}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $put(param?: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                    };
                };
            },
            rules: {
                /**
                 * List rules.
                 * GET /cluster/firewall/rules
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_firewall_rulesGET[]>;
                /**
                 * Create new rule.
                 * POST /cluster/firewall/rules
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                $(pos: string): {
                    /**
                     * Delete rule.
                     * DELETE /cluster/firewall/rules/{pos}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $delete(param?: { digest?: String0_40 }): Promise<null>;
                    /**
                     * Get single rule data.
                     * GET /cluster/firewall/rules/{pos}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_cluster_firewall_rules_posGET>;
                    /**
                     * Modify rule data.
                     * PUT /cluster/firewall/rules/{pos}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $put(param?: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                };
            },
            ipset: {
                /**
                 * List IPSets
                 * GET /cluster/firewall/ipset
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_firewall_ipsetGET[]>;
                /**
                 * Create new IPSet
                 * POST /cluster/firewall/ipset
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $post(param: { comment?: string, digest?: String0_40, name: Tname, rename?: Tname }): Promise<null>;
                $(name: string): {
                    /**
                     * Delete IPSet
                     * DELETE /cluster/firewall/ipset/{name}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * List IPSet content
                     * GET /cluster/firewall/ipset/{name}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_cluster_firewall_ipset_nameGET[]>;
                    /**
                     * Add IP or Network to IPSet.
                     * POST /cluster/firewall/ipset/{name}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param: { cidr: IPorCIDRorAlias, comment?: string, nomatch?: Tdisable }): Promise<null>;
                    $(cidr: string): {
                        /**
                         * Remove IP or Network from IPSet.
                         * DELETE /cluster/firewall/ipset/{name}/{cidr}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(param?: { digest?: String0_40 }): Promise<null>;
                        /**
                         * Read IP or Network settings from IPSet.
                         * GET /cluster/firewall/ipset/{name}/{cidr}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit"]]}
                         */
                        $get(): Promise<any>;
                        /**
                         * Update IP or Network settings
                         * PUT /cluster/firewall/ipset/{name}/{cidr}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $put(param?: { comment?: string, digest?: String0_40, nomatch?: Tdisable }): Promise<null>;
                    };
                };
            },
            aliases: {
                /**
                 * List aliases
                 * GET /cluster/firewall/aliases
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_firewall_aliasesGET[]>;
                /**
                 * Create IP or Network Alias.
                 * POST /cluster/firewall/aliases
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $post(param: { cidr: IPorCIDR, comment?: string, name: Tname }): Promise<null>;
                $(name: string): {
                    /**
                     * Remove IP or Network alias.
                     * DELETE /cluster/firewall/aliases/{name}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $delete(param?: { digest?: String0_40 }): Promise<null>;
                    /**
                     * Read alias.
                     * GET /cluster/firewall/aliases/{name}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Update IP or Network alias.
                     * PUT /cluster/firewall/aliases/{name}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $put(param: { cidr: IPorCIDR, comment?: string, digest?: String0_40, rename?: Tname }): Promise<null>;
                };
            },
            options: {
                /**
                 * Get Firewall options.
                 * GET /cluster/firewall/options
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_firewall_optionsGET>;
                /**
                 * Set Firewall options.
                 * PUT /cluster/firewall/options
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $put(param?: { delete?: pveconfigidlist_1, digest?: String0_40, ebtables?: Tdisable, enable?: integer_Min0, log_ratelimit?: Tlog_ratelimit, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in }): Promise<null>;
            },
            macros: {
                /**
                 * List available macros
                 * GET /cluster/firewall/macros
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_cluster_firewall_macrosGET[]>;
            },
            refs: {
                /**
                 * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                 * GET /cluster/firewall/refs
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(param?: { type?: Ttype_2 }): Promise<ret_cluster_firewall_refsGET[]>;
            },
        },
        backup: {
            /**
             * List vzdump backup schedule.
             * GET /cluster/backup
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Audit"]]}
             */
            $get(): Promise<ret_cluster_backupGET[]>;
            /**
             * Create new vzdump backup job.
             * POST /cluster/backup
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Modify"]],"description":"The 'tmpdir', 'dumpdir' and 'script' parameters are additionally restricted to the 'root@pam' user."}
             */
            $post(param: { all?: Tdisable, bwlimit?: integer_Min0, compress?: Tcompress, dow?: pvedayofweeklist, dumpdir?: string, enabled?: Tdisable, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: Tdisable, remove?: Tdisable, script?: string, size?: integer_Min500, starttime: Tstarttime, stdexcludes?: Tdisable, stop?: Tdisable, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<null>;
            $(id: string): {
                /**
                 * Delete vzdump backup job definition.
                 * DELETE /cluster/backup/{id}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $delete(): Promise<null>;
                /**
                 * Read vzdump backup job definition.
                 * GET /cluster/backup/{id}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<any>;
                /**
                 * Update vzdump backup job definition.
                 * PUT /cluster/backup/{id}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]],"description":"The 'tmpdir', 'dumpdir' and 'script' parameters are additionally restricted to the 'root@pam' user."}
                 */
                $put(param: { all?: Tdisable, bwlimit?: integer_Min0, compress?: Tcompress, delete?: pveconfigidlist_1, dow?: pvedayofweeklist, dumpdir?: string, enabled?: Tdisable, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: Tdisable, remove?: Tdisable, script?: string, size?: integer_Min500, starttime: Tstarttime, stdexcludes?: Tdisable, stop?: Tdisable, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<null>;
                included_volumes: {
                    /**
                     * Returns included guests and the backup status of their disks. Optimized to be used in ExtJS tree views.
                     * GET /cluster/backup/{id}/included_volumes
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_cluster_backup_id_included_volumesGET>;
                },
            };
        },
        backupinfo: {
            /**
             * Stub, waits for future use.
             * GET /cluster/backupinfo
             * @allowtoken 1
             */
            $get(): Promise<any>;
            not_backed_up: {
                /**
                 * Shows all guests which are not covered by any backup job.
                 * GET /cluster/backupinfo/not_backed_up
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_backupinfo_not_backed_upGET[]>;
            },
        },
        ha: {
            /**
             * Directory index.
             * GET /cluster/ha
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Audit"]]}
             */
            $get(): Promise<ret_cluster_haGET[]>;
            resources: {
                /**
                 * List HA resources.
                 * GET /cluster/ha/resources
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(param?: { type?: Ttype_3 }): Promise<ret_cluster_ha_resourcesGET[]>;
                /**
                 * Create a new HA resource.
                 * POST /cluster/ha/resources
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Console"]]}
                 */
                $post(param: { comment?: String0_4096, group?: pveconfigid, max_relocate?: integer_Min0, max_restart?: integer_Min0, sid: pveharesourceorvmid, state?: Tstate, type?: Ttype_3 }): Promise<null>;
                $(sid: string): {
                    /**
                     * Delete resource configuration.
                     * DELETE /cluster/ha/resources/{sid}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Console"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Read resource configuration.
                     * GET /cluster/ha/resources/{sid}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_cluster_ha_resources_sidGET>;
                    /**
                     * Update resource configuration.
                     * PUT /cluster/ha/resources/{sid}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Console"]]}
                     */
                    $put(param?: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, group?: pveconfigid, max_relocate?: integer_Min0, max_restart?: integer_Min0, state?: Tstate }): Promise<null>;
                    migrate: {
                        /**
                         * Request resource migration (online) to another node.
                         * POST /cluster/ha/resources/{sid}/migrate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Console"]]}
                         */
                        $post(param: { node: pvenode }): Promise<null>;
                    },
                    relocate: {
                        /**
                         * Request resource relocatzion to another node. This stops the service on the old node, and restarts it on the target node.
                         * POST /cluster/ha/resources/{sid}/relocate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Console"]]}
                         */
                        $post(param: { node: pvenode }): Promise<null>;
                    },
                };
            },
            groups: {
                /**
                 * Get HA groups.
                 * GET /cluster/ha/groups
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_ha_groupsGET[]>;
                /**
                 * Create a new HA group.
                 * POST /cluster/ha/groups
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Console"]]}
                 */
                $post(param: { comment?: String0_4096, group: pveconfigid, nodes: pvehagroupnodelist, nofailback?: Tdisable, restricted?: Tdisable, type?: Ttype_4 }): Promise<null>;
                $(group: string): {
                    /**
                     * Delete ha group configuration.
                     * DELETE /cluster/ha/groups/{group}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Console"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Read ha group configuration.
                     * GET /cluster/ha/groups/{group}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Update ha group configuration.
                     * PUT /cluster/ha/groups/{group}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Console"]]}
                     */
                    $put(param?: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, nodes?: pvehagroupnodelist, nofailback?: Tdisable, restricted?: Tdisable }): Promise<null>;
                };
            },
            status: {
                /**
                 * Directory index.
                 * GET /cluster/ha/status
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_cluster_ha_statusGET[]>;
                current: {
                    /**
                     * Get HA manger status.
                     * GET /cluster/ha/status/current
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<string[]>;
                },
                manager_status: {
                    /**
                     * Get full HA manger status, including LRM status.
                     * GET /cluster/ha/status/manager_status
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<any>;
                },
            },
        },
        acme: {
            /**
             * ACMEAccount index.
             * GET /cluster/acme
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<ret_cluster_acmeGET[]>;
            plugins: {
                /**
                 * ACME plugin index.
                 * GET /cluster/acme/plugins
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $get(param?: { type?: Ttype_5 }): Promise<ret_cluster_acme_pluginsGET[]>;
                /**
                 * Add ACME plugin configuration.
                 * POST /cluster/acme/plugins
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $post(param: { api?: Tapi, data?: string, disable?: Tdisable, id: pveconfigid, nodes?: pvenodelist, type: Ttype_5, 'validation-delay'?: integer0_172800 }): Promise<null>;
                $(id: string): {
                    /**
                     * Delete ACME plugin configuration.
                     * DELETE /cluster/acme/plugins/{id}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Get ACME plugin configuration.
                     * GET /cluster/acme/plugins/{id}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Update ACME plugin configuration.
                     * PUT /cluster/acme/plugins/{id}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $put(param?: { api?: Tapi, data?: string, delete?: pveconfigidlist, digest?: String0_40, disable?: Tdisable, nodes?: pvenodelist, 'validation-delay'?: integer0_172800 }): Promise<null>;
                };
            },
            account: {
                /**
                 * ACMEAccount index.
                 * GET /cluster/acme/account
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_cluster_acme_accountGET[]>;
                /**
                 * Register a new ACME account with CA.
                 * POST /cluster/acme/account
                 * @allowtoken 1
                 */
                $post(param: { contact: emaillist, directory?: Tdirectory, name?: pveconfigid, tos_url?: string }): Promise<any>;
                $(name: string): {
                    /**
                     * Deactivate existing ACME account at CA.
                     * DELETE /cluster/acme/account/{name}
                     * @allowtoken 1
                     */
                    $delete(): Promise<any>;
                    /**
                     * Return existing ACME account information.
                     * GET /cluster/acme/account/{name}
                     * @allowtoken 1
                     */
                    $get(): Promise<ret_cluster_acme_account_nameGET>;
                    /**
                     * Update existing ACME account information with CA. Note: not specifying any new account information triggers a refresh.
                     * PUT /cluster/acme/account/{name}
                     * @allowtoken 1
                     */
                    $put(param?: { contact?: emaillist }): Promise<any>;
                };
            },
            tos: {
                /**
                 * Retrieve ACME TermsOfService URL from CA.
                 * GET /cluster/acme/tos
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(param?: { directory?: Tdirectory }): Promise<any>;
            },
            directories: {
                /**
                 * Get named known ACME directory endpoints.
                 * GET /cluster/acme/directories
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_cluster_acme_directoriesGET[]>;
            },
            'challenge-schema': {
                /**
                 * Get schema of ACME challenge types.
                 * GET /cluster/acme/challenge-schema
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_cluster_acme_challenge_schemaGET[]>;
            },
        },
        ceph: {
            /**
             * Cluster ceph index.
             * GET /cluster/ceph
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<ret_cluster_cephGET[]>;
            metadata: {
                /**
                 * Get ceph metadata.
                 * GET /cluster/ceph/metadata
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                 */
                $get(param?: { scope?: Tscope }): Promise<any>;
            },
            status: {
                /**
                 * Get ceph status.
                 * GET /cluster/ceph/status
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                 */
                $get(): Promise<any>;
            },
            flags: {
                /**
                 * get the status of all ceph flags
                 * GET /cluster/ceph/flags
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_cluster_ceph_flagsGET[]>;
                /**
                 * Set/Unset multiple ceph flags at once.
                 * PUT /cluster/ceph/flags
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $put(param?: { nobackfill?: Tdisable, 'nodeep-scrub'?: Tdisable, nodown?: Tdisable, noin?: Tdisable, noout?: Tdisable, norebalance?: Tdisable, norecover?: Tdisable, noscrub?: Tdisable, notieragent?: Tdisable, noup?: Tdisable, pause?: Tdisable }): Promise<any>;
                $(flag: string): {
                    /**
                     * Get the status of a specific ceph flag.
                     * GET /cluster/ceph/flags/{flag}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Set or clear (unset) a specific ceph flag
                     * PUT /cluster/ceph/flags/{flag}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $put(param: { value: Tdisable }): Promise<null>;
                };
            },
        },
        sdn: {
            /**
             * Directory index.
             * GET /cluster/sdn
             * @allowtoken 1
             * @permissions {"check":["perm","/",["SDN.Audit"]]}
             */
            $get(): Promise<ret_cluster_sdnGET[]>;
            /**
             * Apply sdn controller changes && reload.
             * PUT /cluster/sdn
             * @allowtoken 1
             * @permissions {"check":["perm","/sdn",["SDN.Allocate"]]}
             */
            $put(): Promise<any>;
            vnets: {
                /**
                 * SDN vnets index.
                 * GET /cluster/sdn/vnets
                 * @allowtoken 1
                 * @permissions {"description":"Only list entries where you have 'SDN.Audit' or 'SDN.Allocate' permissions on '/sdn/vnets/<vnet>'","user":"all"}
                 */
                $get(): Promise<ret_cluster_sdn_vnetsGET[]>;
                /**
                 * Create a new sdn vnet object.
                 * POST /cluster/sdn/vnets
                 * @allowtoken 1
                 * @permissions {"check":["perm","/sdn/vnets",["SDN.Allocate"]]}
                 */
                $post(param: { alias?: string, ipv4?: CIDRv4, ipv6?: CIDRv6, mac?: macaddr, tag?: integer, type?: Ttype_6, vlanaware?: Tdisable, vnet: pvesdnvnetid, zone: string }): Promise<null>;
                $(vnet: string): {
                    /**
                     * Delete sdn vnet object configuration.
                     * DELETE /cluster/sdn/vnets/{vnet}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/vnets",["SDN.Allocate"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Read sdn vnet configuration.
                     * GET /cluster/sdn/vnets/{vnet}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/vnets/{vnet}",["SDN.Allocate"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Update sdn vnet object configuration.
                     * PUT /cluster/sdn/vnets/{vnet}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/vnets",["SDN.Allocate"]]}
                     */
                    $put(param?: { alias?: string, delete?: pveconfigidlist, digest?: String0_40, ipv4?: CIDRv4, ipv6?: CIDRv6, mac?: macaddr, tag?: integer, vlanaware?: Tdisable, zone?: string }): Promise<null>;
                };
            },
            zones: {
                /**
                 * SDN zones index.
                 * GET /cluster/sdn/zones
                 * @allowtoken 1
                 * @permissions {"description":"Only list entries where you have 'SDN.Audit' or 'SDN.Allocate' permissions on '/sdn/zones/<zone>'","user":"all"}
                 */
                $get(param?: { type?: Ttype_7 }): Promise<ret_cluster_sdn_zonesGET[]>;
                /**
                 * Create a new sdn zone object.
                 * POST /cluster/sdn/zones
                 * @allowtoken 1
                 * @permissions {"check":["perm","/sdn/zones",["SDN.Allocate"]]}
                 */
                $post(param: { bridge?: string, controller?: string, 'dp-id'?: integer, mtu?: integer, nodes?: pvenodelist, peers?: iplist, tag?: integer_Min0, type: pveconfigid_1, 'vlan-protocol'?: Tvlanprotocol, 'vrf-vxlan'?: integer, zone: pvesdnzoneid }): Promise<null>;
                $(zone: string): {
                    /**
                     * Delete sdn zone object configuration.
                     * DELETE /cluster/sdn/zones/{zone}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/zones",["SDN.Allocate"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Read sdn zone configuration.
                     * GET /cluster/sdn/zones/{zone}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/zones/{zone}",["SDN.Allocate"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Update sdn zone object configuration.
                     * PUT /cluster/sdn/zones/{zone}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/zones",["SDN.Allocate"]]}
                     */
                    $put(param?: { bridge?: string, controller?: string, delete?: pveconfigidlist, digest?: String0_40, 'dp-id'?: integer, mtu?: integer, nodes?: pvenodelist, peers?: iplist, tag?: integer_Min0, 'vlan-protocol'?: Tvlanprotocol, 'vrf-vxlan'?: integer }): Promise<null>;
                };
            },
            controllers: {
                /**
                 * SDN controllers index.
                 * GET /cluster/sdn/controllers
                 * @allowtoken 1
                 * @permissions {"description":"Only list entries where you have 'SDN.Audit' or 'SDN.Allocate' permissions on '/sdn/controllers/<controller>'","user":"all"}
                 */
                $get(param?: { type?: Ttype_8 }): Promise<ret_cluster_sdn_controllersGET[]>;
                /**
                 * Create a new sdn controller object.
                 * POST /cluster/sdn/controllers
                 * @allowtoken 1
                 * @permissions {"check":["perm","/sdn/controllers",["SDN.Allocate"]]}
                 */
                $post(param: { asn?: integer, controller: pvesdncontrollerid, 'gateway-external-peers'?: iplist, 'gateway-nodes'?: pvenodelist, peers?: iplist, type: pveconfigid_2 }): Promise<null>;
                $(controller: string): {
                    /**
                     * Delete sdn controller object configuration.
                     * DELETE /cluster/sdn/controllers/{controller}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/controllers",["SDN.Allocate"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Read sdn controller configuration.
                     * GET /cluster/sdn/controllers/{controller}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/controllers/{controller}",["SDN.Allocate"]]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Update sdn controller object configuration.
                     * PUT /cluster/sdn/controllers/{controller}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/controllers",["SDN.Allocate"]]}
                     */
                    $put(param?: { asn?: integer, delete?: pveconfigidlist, digest?: String0_40, 'gateway-external-peers'?: iplist, 'gateway-nodes'?: pvenodelist, peers?: iplist }): Promise<null>;
                };
            },
        },
        log: {
            /**
             * Read cluster log
             * GET /cluster/log
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(param?: { max?: integer_Min1 }): Promise<ret_cluster_logGET[]>;
        },
        resources: {
            /**
             * Resources index (cluster wide).
             * GET /cluster/resources
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(param?: { type?: Ttype_9 }): Promise<ret_cluster_resourcesGET[]>;
        },
        tasks: {
            /**
             * List recent tasks (cluster wide).
             * GET /cluster/tasks
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<ret_cluster_tasksGET[]>;
        },
        options: {
            /**
             * Get datacenter options.
             * GET /cluster/options
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Audit"]]}
             */
            $get(): Promise<any>;
            /**
             * Set datacenter options.
             * PUT /cluster/options
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Modify"]]}
             */
            $put(param?: { bwlimit?: Tbwlimit, console?: Tconsole, delete?: pveconfigidlist_1, email_from?: emailopt, fencing?: Tfencing, ha?: Tha, http_proxy?: Thttp_proxy, keyboard?: Tkeyboard, language?: Tlanguage, mac_prefix?: macprefix, max_workers?: integer_Min1, migration?: Tmigration, migration_unsecure?: Tdisable, u2f?: Tu2f }): Promise<null>;
        },
        status: {
            /**
             * Get cluster status information.
             * GET /cluster/status
             * @allowtoken 1
             * @permissions {"check":["perm","/",["Sys.Audit"]]}
             */
            $get(): Promise<ret_cluster_statusGET[]>;
        },
        nextid: {
            /**
             * Get next free VMID. If you pass an VMID it will raise an error if the ID is already used.
             * GET /cluster/nextid
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(param?: { vmid?: pvevmid }): Promise<any>;
        },
    },
    nodes: {
        /**
         * Cluster node index.
         * GET /nodes
         * @allowtoken 1
         * @permissions {"user":"all"}
         */
        $get(): Promise<ret_nodesGET[]>;
        $(node: string): {
            /**
             * Node index.
             * GET /nodes/{node}
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<ret_nodes_nodeGET[]>;
            qemu: {
                /**
                 * Virtual machine index (per node).
                 * GET /nodes/{node}/qemu
                 * @allowtoken 1
                 * @permissions {"description":"Only list VMs where you have VM.Audit permissons on /vms/<vmid>.","user":"all"}
                 */
                $get(param?: { full?: Tdisable }): Promise<ret_nodes_node_qemuGET[]>;
                /**
                 * Create or restore a virtual machine.
                 * POST /nodes/{node}/qemu
                 * @allowtoken 1
                 * @permissions {"description":"You need 'VM.Allocate' permissions on /vms/{vmid} or on the VM pool /pool/{pool}. For restore (option 'archive'), it is enough if the user has 'VM.Backup' permission and the VM already exists. If you create disks you need 'Datastore.AllocateSpace' on any used storage.","user":"all"}
                 */
                $post(param: { acpi?: Tdisable, agent?: Tagent, arch?: Tarch, archive?: String0_255, args?: string, audio0?: Taudio0, autostart?: Tdisable, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, bwlimit?: integer_Min0, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, description?: string, efidisk0?: Tefidisk0, force?: Tdisable, freeze?: Tdisable, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: Tdisable, localtime?: Tdisable, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, numa?: Tdisable, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: Tdisable, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, pool?: pvepoolid, protection?: Tdisable, reboot?: Tdisable, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, start?: Tdisable, startdate?: Tstartdate, startup?: pvestartuporder, storage?: pvestorageid, tablet?: Tdisable, tags?: pvetaglist, tdf?: Tdisable, template?: Tdisable, unique?: Tdisable, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmid: pvevmid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<any>;
                $(vmid: number): {
                    /**
                     * Destroy the vm (also delete all used/owned volumes).
                     * DELETE /nodes/{node}/qemu/{vmid}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Allocate"]]}
                     */
                    $delete(param?: { purge?: Tdisable, skiplock?: Tdisable }): Promise<any>;
                    /**
                     * Directory index
                     * GET /nodes/{node}/qemu/{vmid}
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_qemu_vmidGET[]>;
                    firewall: {
                        /**
                         * Directory index.
                         * GET /nodes/{node}/qemu/{vmid}/firewall
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_qemu_vmid_firewallGET[]>;
                        rules: {
                            /**
                             * List rules.
                             * GET /nodes/{node}/qemu/{vmid}/firewall/rules
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_qemu_vmid_firewall_rulesGET[]>;
                            /**
                             * Create new rule.
                             * POST /nodes/{node}/qemu/{vmid}/firewall/rules
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                            $(pos: string): {
                                /**
                                 * Delete rule.
                                 * DELETE /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $delete(param?: { digest?: String0_40 }): Promise<null>;
                                /**
                                 * Get single rule data.
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<ret_nodes_node_qemu_vmid_firewall_rules_posGET>;
                                /**
                                 * Modify rule data.
                                 * PUT /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $put(param?: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                            };
                        },
                        aliases: {
                            /**
                             * List aliases
                             * GET /nodes/{node}/qemu/{vmid}/firewall/aliases
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_qemu_vmid_firewall_aliasesGET[]>;
                            /**
                             * Create IP or Network Alias.
                             * POST /nodes/{node}/qemu/{vmid}/firewall/aliases
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $post(param: { cidr: IPorCIDR, comment?: string, name: Tname }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Remove IP or Network alias.
                                 * DELETE /nodes/{node}/qemu/{vmid}/firewall/aliases/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $delete(param?: { digest?: String0_40 }): Promise<null>;
                                /**
                                 * Read alias.
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/aliases/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<any>;
                                /**
                                 * Update IP or Network alias.
                                 * PUT /nodes/{node}/qemu/{vmid}/firewall/aliases/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $put(param: { cidr: IPorCIDR, comment?: string, digest?: String0_40, rename?: Tname }): Promise<null>;
                            };
                        },
                        ipset: {
                            /**
                             * List IPSets
                             * GET /nodes/{node}/qemu/{vmid}/firewall/ipset
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_qemu_vmid_firewall_ipsetGET[]>;
                            /**
                             * Create new IPSet
                             * POST /nodes/{node}/qemu/{vmid}/firewall/ipset
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $post(param: { comment?: string, digest?: String0_40, name: Tname, rename?: Tname }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Delete IPSet
                                 * DELETE /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $delete(): Promise<null>;
                                /**
                                 * List IPSet content
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<ret_nodes_node_qemu_vmid_firewall_ipset_nameGET[]>;
                                /**
                                 * Add IP or Network to IPSet.
                                 * POST /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $post(param: { cidr: IPorCIDRorAlias, comment?: string, nomatch?: Tdisable }): Promise<null>;
                                $(cidr: string): {
                                    /**
                                     * Remove IP or Network from IPSet.
                                     * DELETE /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}/{cidr}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                     */
                                    $delete(param?: { digest?: String0_40 }): Promise<null>;
                                    /**
                                     * Read IP or Network settings from IPSet.
                                     * GET /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}/{cidr}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                     */
                                    $get(): Promise<any>;
                                    /**
                                     * Update IP or Network settings
                                     * PUT /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}/{cidr}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                     */
                                    $put(param?: { comment?: string, digest?: String0_40, nomatch?: Tdisable }): Promise<null>;
                                };
                            };
                        },
                        options: {
                            /**
                             * Get VM firewall options.
                             * GET /nodes/{node}/qemu/{vmid}/firewall/options
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_qemu_vmid_firewall_optionsGET>;
                            /**
                             * Set Firewall options.
                             * PUT /nodes/{node}/qemu/{vmid}/firewall/options
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $put(param?: { delete?: pveconfigidlist_1, dhcp?: Tdisable, digest?: String0_40, enable?: Tdisable, ipfilter?: Tdisable, log_level_in?: Tlog, log_level_out?: Tlog, macfilter?: Tdisable, ndp?: Tdisable, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in, radv?: Tdisable }): Promise<null>;
                        },
                        log: {
                            /**
                             * Read firewall log
                             * GET /nodes/{node}/qemu/{vmid}/firewall/log
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<ret_nodes_node_qemu_vmid_firewall_logGET[]>;
                        },
                        refs: {
                            /**
                             * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                             * GET /nodes/{node}/qemu/{vmid}/firewall/refs
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param?: { type?: Ttype_2 }): Promise<ret_nodes_node_qemu_vmid_firewall_refsGET[]>;
                        },
                    },
                    agent: {
                        /**
                         * Qemu Agent command index.
                         * GET /nodes/{node}/qemu/{vmid}/agent
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_qemu_vmid_agentGET[]>;
                        /**
                         * Execute Qemu Guest Agent commands.
                         * POST /nodes/{node}/qemu/{vmid}/agent
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                         */
                        $post(param: { command: Tcommand }): Promise<any>;
                        'fsfreeze-freeze': {
                            /**
                             * Execute fsfreeze-freeze.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fsfreeze-freeze
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'fsfreeze-status': {
                            /**
                             * Execute fsfreeze-status.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fsfreeze-status
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'fsfreeze-thaw': {
                            /**
                             * Execute fsfreeze-thaw.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fsfreeze-thaw
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        fstrim: {
                            /**
                             * Execute fstrim.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fstrim
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'get-fsinfo': {
                            /**
                             * Execute get-fsinfo.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-fsinfo
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-host-name': {
                            /**
                             * Execute get-host-name.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-host-name
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-memory-block-info': {
                            /**
                             * Execute get-memory-block-info.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-memory-block-info
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-memory-blocks': {
                            /**
                             * Execute get-memory-blocks.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-memory-blocks
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-osinfo': {
                            /**
                             * Execute get-osinfo.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-osinfo
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-time': {
                            /**
                             * Execute get-time.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-time
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-timezone': {
                            /**
                             * Execute get-timezone.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-timezone
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-users': {
                            /**
                             * Execute get-users.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-users
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'get-vcpus': {
                            /**
                             * Execute get-vcpus.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-vcpus
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        info: {
                            /**
                             * Execute info.
                             * GET /nodes/{node}/qemu/{vmid}/agent/info
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        'network-get-interfaces': {
                            /**
                             * Execute network-get-interfaces.
                             * GET /nodes/{node}/qemu/{vmid}/agent/network-get-interfaces
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(): Promise<any>;
                        },
                        ping: {
                            /**
                             * Execute ping.
                             * POST /nodes/{node}/qemu/{vmid}/agent/ping
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        shutdown: {
                            /**
                             * Execute shutdown.
                             * POST /nodes/{node}/qemu/{vmid}/agent/shutdown
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'suspend-disk': {
                            /**
                             * Execute suspend-disk.
                             * POST /nodes/{node}/qemu/{vmid}/agent/suspend-disk
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'suspend-hybrid': {
                            /**
                             * Execute suspend-hybrid.
                             * POST /nodes/{node}/qemu/{vmid}/agent/suspend-hybrid
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'suspend-ram': {
                            /**
                             * Execute suspend-ram.
                             * POST /nodes/{node}/qemu/{vmid}/agent/suspend-ram
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(): Promise<any>;
                        },
                        'set-user-password': {
                            /**
                             * Sets the password for the given user to the given password
                             * POST /nodes/{node}/qemu/{vmid}/agent/set-user-password
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(param: { crypted?: Tdisable, password: String5_1024, username: string }): Promise<any>;
                        },
                        exec: {
                            /**
                             * Executes the given command in the vm via the guest-agent and returns an object with the pid.
                             * POST /nodes/{node}/qemu/{vmid}/agent/exec
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(param?: { command?: stringalist, 'input-data'?: String0_65536 }): Promise<ret_nodes_node_qemu_vmid_agent_execPOST>;
                        },
                        'exec-status': {
                            /**
                             * Gets the status of the given pid started by the guest-agent
                             * GET /nodes/{node}/qemu/{vmid}/agent/exec-status
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(param: { pid: integer }): Promise<ret_nodes_node_qemu_vmid_agent_exec_statusGET>;
                        },
                        'file-read': {
                            /**
                             * Reads the given file via guest agent. Is limited to 16777216 bytes.
                             * GET /nodes/{node}/qemu/{vmid}/agent/file-read
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $get(param: { file: string }): Promise<ret_nodes_node_qemu_vmid_agent_file_readGET>;
                        },
                        'file-write': {
                            /**
                             * Writes the given file via guest agent.
                             * POST /nodes/{node}/qemu/{vmid}/agent/file-write
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                             */
                            $post(param: { content: String0_61440, file: string }): Promise<null>;
                        },
                    },
                    rrd: {
                        /**
                         * Read VM RRD statistics (returns PNG)
                         * GET /nodes/{node}/qemu/{vmid}/rrd
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<ret_nodes_node_qemu_vmid_rrdGET>;
                    },
                    rrddata: {
                        /**
                         * Read VM RRD statistics
                         * GET /nodes/{node}/qemu/{vmid}/rrddata
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<ret_nodes_node_qemu_vmid_rrddataGET[]>;
                    },
                    config: {
                        /**
                         * Get the virtual machine configuration with pending configuration changes applied. Set the 'current' parameter to get the current configuration instead.
                         * GET /nodes/{node}/qemu/{vmid}/config
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param?: { current?: Tdisable, snapshot?: pveconfigid_3 }): Promise<ret_nodes_node_qemu_vmid_configGET>;
                        /**
                         * Set virtual machine options (asynchrounous API).
                         * POST /nodes/{node}/qemu/{vmid}/config
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk","VM.Config.CDROM","VM.Config.CPU","VM.Config.Memory","VM.Config.Network","VM.Config.HWType","VM.Config.Options","VM.Config.Cloudinit"],"any",1]}
                         */
                        $post(param?: { acpi?: Tdisable, agent?: Tagent, arch?: Tarch, args?: string, audio0?: Taudio0, autostart?: Tdisable, background_delay?: integer1_30, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, efidisk0?: Tefidisk0, force?: Tdisable, freeze?: Tdisable, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: Tdisable, localtime?: Tdisable, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, numa?: Tdisable, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: Tdisable, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, protection?: Tdisable, reboot?: Tdisable, revert?: pveconfigidlist_1, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, skiplock?: Tdisable, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, startdate?: Tstartdate, startup?: pvestartuporder, tablet?: Tdisable, tags?: pvetaglist, tdf?: Tdisable, template?: Tdisable, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<any>;
                        /**
                         * Set virtual machine options (synchrounous API) - You should consider using the POST method instead for any actions involving hotplug or storage allocation.
                         * PUT /nodes/{node}/qemu/{vmid}/config
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk","VM.Config.CDROM","VM.Config.CPU","VM.Config.Memory","VM.Config.Network","VM.Config.HWType","VM.Config.Options","VM.Config.Cloudinit"],"any",1]}
                         */
                        $put(param?: { acpi?: Tdisable, agent?: Tagent, arch?: Tarch, args?: string, audio0?: Taudio0, autostart?: Tdisable, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, efidisk0?: Tefidisk0, force?: Tdisable, freeze?: Tdisable, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: Tdisable, localtime?: Tdisable, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, numa?: Tdisable, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: Tdisable, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, protection?: Tdisable, reboot?: Tdisable, revert?: pveconfigidlist_1, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, skiplock?: Tdisable, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, startdate?: Tstartdate, startup?: pvestartuporder, tablet?: Tdisable, tags?: pvetaglist, tdf?: Tdisable, template?: Tdisable, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<null>;
                    },
                    pending: {
                        /**
                         * Get the virtual machine configuration with both current and pending values.
                         * GET /nodes/{node}/qemu/{vmid}/pending
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(): Promise<ret_nodes_node_qemu_vmid_pendingGET[]>;
                    },
                    unlink: {
                        /**
                         * Unlink/delete disk images.
                         * PUT /nodes/{node}/qemu/{vmid}/unlink
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk"]]}
                         */
                        $put(param: { force?: Tdisable, idlist: pveconfigidlist_1 }): Promise<null>;
                    },
                    vncproxy: {
                        /**
                         * Creates a TCP VNC proxy connections.
                         * POST /nodes/{node}/qemu/{vmid}/vncproxy
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $post(param?: { 'generate-password'?: Tdisable, websocket?: Tdisable }): Promise<any>;
                    },
                    termproxy: {
                        /**
                         * Creates a TCP proxy connections.
                         * POST /nodes/{node}/qemu/{vmid}/termproxy
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $post(param?: { serial?: Tserial_1 }): Promise<any>;
                    },
                    vncwebsocket: {
                        /**
                         * Opens a weksocket for VNC traffic.
                         * GET /nodes/{node}/qemu/{vmid}/vncwebsocket
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]],"description":"You also need to pass a valid ticket (vncticket)."}
                         */
                        $get(param: { port: integer5900_5999, vncticket: String0_512 }): Promise<ret_nodes_node_qemu_vmid_vncwebsocketGET>;
                    },
                    spiceproxy: {
                        /**
                         * Returns a SPICE configuration to connect to the VM.
                         * POST /nodes/{node}/qemu/{vmid}/spiceproxy
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $post(param?: { proxy?: address }): Promise<any>;
                    },
                    status: {
                        /**
                         * Directory index
                         * GET /nodes/{node}/qemu/{vmid}/status
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_qemu_vmid_statusGET[]>;
                        current: {
                            /**
                             * Get virtual machine status.
                             * GET /nodes/{node}/qemu/{vmid}/status/current
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_qemu_vmid_status_currentGET>;
                        },
                        start: {
                            /**
                             * Start virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/start
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { 'force-cpu'?: string, machine?: Tmachine, migratedfrom?: pvenode, migration_network?: CIDR, migration_type?: Tmigration_type, skiplock?: Tdisable, stateuri?: String0_128, targetstorage?: storagepairlist, timeout?: integer_Min0 }): Promise<any>;
                        },
                        stop: {
                            /**
                             * Stop virtual machine. The qemu process will exit immediately. Thisis akin to pulling the power plug of a running computer and may damage the VM data
                             * POST /nodes/{node}/qemu/{vmid}/status/stop
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { keepActive?: Tdisable, migratedfrom?: pvenode, skiplock?: Tdisable, timeout?: integer_Min0 }): Promise<any>;
                        },
                        reset: {
                            /**
                             * Reset virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/reset
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { skiplock?: Tdisable }): Promise<any>;
                        },
                        shutdown: {
                            /**
                             * Shutdown virtual machine. This is similar to pressing the power button on a physical machine.This will send an ACPI event for the guest OS, which should then proceed to a clean shutdown.
                             * POST /nodes/{node}/qemu/{vmid}/status/shutdown
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { forceStop?: Tdisable, keepActive?: Tdisable, skiplock?: Tdisable, timeout?: integer_Min0 }): Promise<any>;
                        },
                        reboot: {
                            /**
                             * Reboot the VM by shutting it down, and starting it again. Applies pending changes.
                             * POST /nodes/{node}/qemu/{vmid}/status/reboot
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { timeout?: integer_Min0 }): Promise<any>;
                        },
                        suspend: {
                            /**
                             * Suspend virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/suspend
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]],"description":"You need 'VM.PowerMgmt' on /vms/{vmid}, and if you have set 'todisk', you need also 'VM.Config.Disk' on /vms/{vmid} and 'Datastore.AllocateSpace' on the storage for the vmstate."}
                             */
                            $post(param?: { skiplock?: Tdisable, statestorage?: pvestorageid, todisk?: Tdisable }): Promise<any>;
                        },
                        resume: {
                            /**
                             * Resume virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/resume
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { nocheck?: Tdisable, skiplock?: Tdisable }): Promise<any>;
                        },
                    },
                    sendkey: {
                        /**
                         * Send key event to virtual machine.
                         * PUT /nodes/{node}/qemu/{vmid}/sendkey
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $put(param: { key: string, skiplock?: Tdisable }): Promise<null>;
                    },
                    feature: {
                        /**
                         * Check if feature for virtual machine is available.
                         * GET /nodes/{node}/qemu/{vmid}/feature
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param: { feature: Tfeature, snapname?: pveconfigid_3 }): Promise<ret_nodes_node_qemu_vmid_featureGET>;
                    },
                    clone: {
                        /**
                         * Create a copy of virtual machine/template.
                         * POST /nodes/{node}/qemu/{vmid}/clone
                         * @allowtoken 1
                         * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Clone"]],["or",["perm","/vms/{newid}",["VM.Allocate"]],["perm","/pool/{pool}",["VM.Allocate"],"require_param","pool"]]],"description":"You need 'VM.Clone' permissions on /vms/{vmid}, and 'VM.Allocate' permissions on /vms/{newid} (or on the VM pool /pool/{pool}). You also need 'Datastore.AllocateSpace' on any used storage."}
                         */
                        $post(param: { bwlimit?: integer_Min0, description?: string, format?: Tformat, full?: Tdisable, name?: dnsname, newid: pvevmid, pool?: pvepoolid, snapname?: pveconfigid_3, storage?: pvestorageid, target?: pvenode }): Promise<any>;
                    },
                    move_disk: {
                        /**
                         * Move volume to different storage.
                         * POST /nodes/{node}/qemu/{vmid}/move_disk
                         * @allowtoken 1
                         * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Config.Disk"]],["perm","/storage/{storage}",["Datastore.AllocateSpace"]]],"description":"You need 'VM.Config.Disk' permissions on /vms/{vmid}, and 'Datastore.AllocateSpace' permissions on the storage."}
                         */
                        $post(param: { bwlimit?: integer_Min0, delete?: Tdisable, digest?: String0_40, disk: Tdisk, format?: Tformat, storage: pvestorageid }): Promise<any>;
                    },
                    migrate: {
                        /**
                         * Get preconditions for migration.
                         * GET /nodes/{node}/qemu/{vmid}/migrate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Migrate"]]}
                         */
                        $get(param?: { target?: pvenode }): Promise<ret_nodes_node_qemu_vmid_migrateGET>;
                        /**
                         * Migrate virtual machine. Creates a new migration task.
                         * POST /nodes/{node}/qemu/{vmid}/migrate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Migrate"]]}
                         */
                        $post(param: { bwlimit?: integer_Min0, force?: Tdisable, migration_network?: CIDR, migration_type?: Tmigration_type, online?: Tdisable, target: pvenode, targetstorage?: storagepairlist, 'with-local-disks'?: Tdisable }): Promise<any>;
                    },
                    monitor: {
                        /**
                         * Execute Qemu monitor commands.
                         * POST /nodes/{node}/qemu/{vmid}/monitor
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]],"description":"Sys.Modify is required for (sub)commands which are not read-only ('info *' and 'help')"}
                         */
                        $post(param: { command: string }): Promise<any>;
                    },
                    resize: {
                        /**
                         * Extend volume size.
                         * PUT /nodes/{node}/qemu/{vmid}/resize
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk"]]}
                         */
                        $put(param: { digest?: String0_40, disk: Tdisk, size: Tsize, skiplock?: Tdisable }): Promise<null>;
                    },
                    snapshot: {
                        /**
                         * List all snapshots.
                         * GET /nodes/{node}/qemu/{vmid}/snapshot
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(): Promise<ret_nodes_node_qemu_vmid_snapshotGET[]>;
                        /**
                         * Snapshot a VM.
                         * POST /nodes/{node}/qemu/{vmid}/snapshot
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                         */
                        $post(param: { description?: string, snapname: pveconfigid_3, vmstate?: Tdisable }): Promise<any>;
                        $(snapname: string): {
                            /**
                             * Delete a VM snapshot.
                             * DELETE /nodes/{node}/qemu/{vmid}/snapshot/{snapname}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                             */
                            $delete(param?: { force?: Tdisable }): Promise<any>;
                            /**
                             * 
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<ret_nodes_node_qemu_vmid_snapshot_snapnameGET[]>;
                            config: {
                                /**
                                 * Get snapshot configuration
                                 * GET /nodes/{node}/qemu/{vmid}/snapshot/{snapname}/config
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot","VM.Snapshot.Rollback","VM.Audit"],"any",1]}
                                 */
                                $get(): Promise<any>;
                                /**
                                 * Update snapshot metadata.
                                 * PUT /nodes/{node}/qemu/{vmid}/snapshot/{snapname}/config
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                                 */
                                $put(param?: { description?: string }): Promise<null>;
                            },
                            rollback: {
                                /**
                                 * Rollback VM state to specified snapshot.
                                 * POST /nodes/{node}/qemu/{vmid}/snapshot/{snapname}/rollback
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot","VM.Snapshot.Rollback"],"any",1]}
                                 */
                                $post(): Promise<any>;
                            },
                        };
                    },
                    template: {
                        /**
                         * Create a Template.
                         * POST /nodes/{node}/qemu/{vmid}/template
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Allocate"]],"description":"You need 'VM.Allocate' permissions on /vms/{vmid}"}
                         */
                        $post(param?: { disk?: Tdisk }): Promise<null>;
                    },
                    cloudinit: {
                        dump: {
                            /**
                             * Get automatically generated cloudinit config.
                             * GET /nodes/{node}/qemu/{vmid}/cloudinit/dump
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param: { type: Ttype_10 }): Promise<any>;
                        },
                    },
                };
            },
            cpu: {
                /**
                 * List all custom and default CPU models.
                 * GET /nodes/{node}/cpu
                 * @allowtoken 1
                 * @permissions {"description":"Only returns custom models when the current user has Sys.Audit on /nodes.","user":"all"}
                 */
                $get(): Promise<ret_nodes_node_cpuGET[]>;
            },
            lxc: {
                /**
                 * LXC container index (per node).
                 * GET /nodes/{node}/lxc
                 * @allowtoken 1
                 * @permissions {"description":"Only list CTs where you have VM.Audit permissons on /vms/<vmid>.","user":"all"}
                 */
                $get(): Promise<ret_nodes_node_lxcGET[]>;
                /**
                 * Create or restore a container.
                 * POST /nodes/{node}/lxc
                 * @allowtoken 1
                 * @permissions {"description":"You need 'VM.Allocate' permissions on /vms/{vmid} or on the VM pool /pool/{pool}. For restore, it is enough if the user has 'VM.Backup' permission and the VM already exists. You also need 'Datastore.AllocateSpace' permissions on the storage.","user":"all"}
                 */
                $post(param: { arch?: Tarch_1, bwlimit?: Tmigrate_downtime, cmode?: Tcmode, console?: Tdisable, cores?: integer1_128, cpulimit?: Tcpulimit, cpuunits?: integer0_500000, description?: string, features?: Tfeatures, force?: Tdisable, hookscript?: pvevolumeid, hostname?: dnsname_1, 'ignore-unpack-errors'?: Tdisable, lock?: Tlock_1, memory?: integer_Min16, mp0?: Tmp, mp1?: Tmp, mp2?: Tmp, mp3?: Tmp, nameserver?: addresslist, net0?: Tnet_1, net1?: Tnet_1, net2?: Tnet_1, net3?: Tnet_1, onboot?: Tdisable, ostemplate: String0_255, ostype?: Tostype_1, password?: Tpassword, pool?: pvepoolid, protection?: Tdisable, restore?: Tdisable, rootfs?: Trootfs, searchdomain?: dnsnamelist, 'ssh-public-keys'?: string, start?: Tdisable, startup?: pvestartuporder, storage?: pvestorageid, swap?: integer_Min0, tags?: pvetaglist, template?: Tdisable, timezone?: pvecttimezone, tty?: integer0_6, unique?: Tdisable, unprivileged?: Tdisable, unused0?: Tunused_1, unused1?: Tunused_1, unused2?: Tunused_1, unused3?: Tunused_1, vmid: pvevmid }): Promise<any>;
                $(vmid: number): {
                    /**
                     * Destroy the container (also delete all uses files).
                     * DELETE /nodes/{node}/lxc/{vmid}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Allocate"]]}
                     */
                    $delete(param?: { force?: Tdisable, purge?: Tdisable }): Promise<any>;
                    /**
                     * Directory index
                     * GET /nodes/{node}/lxc/{vmid}
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_lxc_vmidGET[]>;
                    config: {
                        /**
                         * Get container configuration.
                         * GET /nodes/{node}/lxc/{vmid}/config
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param?: { current?: Tdisable, snapshot?: pveconfigid_3 }): Promise<ret_nodes_node_lxc_vmid_configGET>;
                        /**
                         * Set container options.
                         * PUT /nodes/{node}/lxc/{vmid}/config
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk","VM.Config.CPU","VM.Config.Memory","VM.Config.Network","VM.Config.Options"],"any",1],"description":"non-volume mount points in rootfs and mp[n] are restricted to root@pam"}
                         */
                        $put(param?: { arch?: Tarch_1, cmode?: Tcmode, console?: Tdisable, cores?: integer1_128, cpulimit?: Tcpulimit, cpuunits?: integer0_500000, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, features?: Tfeatures, hookscript?: pvevolumeid, hostname?: dnsname_1, lock?: Tlock_1, memory?: integer_Min16, mp0?: Tmp, mp1?: Tmp, mp2?: Tmp, mp3?: Tmp, nameserver?: addresslist, net0?: Tnet_1, net1?: Tnet_1, net2?: Tnet_1, net3?: Tnet_1, onboot?: Tdisable, ostype?: Tostype_1, protection?: Tdisable, revert?: pveconfigidlist_1, rootfs?: Trootfs, searchdomain?: dnsnamelist, startup?: pvestartuporder, swap?: integer_Min0, tags?: pvetaglist, template?: Tdisable, timezone?: pvecttimezone, tty?: integer0_6, unprivileged?: Tdisable, unused0?: Tunused_1, unused1?: Tunused_1, unused2?: Tunused_1, unused3?: Tunused_1 }): Promise<null>;
                    },
                    status: {
                        /**
                         * Directory index
                         * GET /nodes/{node}/lxc/{vmid}/status
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_lxc_vmid_statusGET[]>;
                        current: {
                            /**
                             * Get virtual machine status.
                             * GET /nodes/{node}/lxc/{vmid}/status/current
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_lxc_vmid_status_currentGET>;
                        },
                        start: {
                            /**
                             * Start the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/start
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { skiplock?: Tdisable }): Promise<any>;
                        },
                        stop: {
                            /**
                             * Stop the container. This will abruptly stop all processes running in the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/stop
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { skiplock?: Tdisable }): Promise<any>;
                        },
                        shutdown: {
                            /**
                             * Shutdown the container. This will trigger a clean shutdown of the container, see lxc-stop(1) for details.
                             * POST /nodes/{node}/lxc/{vmid}/status/shutdown
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { forceStop?: Tdisable, timeout?: integer_Min0 }): Promise<any>;
                        },
                        suspend: {
                            /**
                             * Suspend the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/suspend
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(): Promise<any>;
                        },
                        resume: {
                            /**
                             * Resume the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/resume
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(): Promise<any>;
                        },
                        reboot: {
                            /**
                             * Reboot the container by shutting it down, and starting it again. Applies pending changes.
                             * POST /nodes/{node}/lxc/{vmid}/status/reboot
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                             */
                            $post(param?: { timeout?: integer_Min0 }): Promise<any>;
                        },
                    },
                    snapshot: {
                        /**
                         * List all snapshots.
                         * GET /nodes/{node}/lxc/{vmid}/snapshot
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(): Promise<ret_nodes_node_lxc_vmid_snapshotGET[]>;
                        /**
                         * Snapshot a container.
                         * POST /nodes/{node}/lxc/{vmid}/snapshot
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                         */
                        $post(param: { description?: string, snapname: pveconfigid_3 }): Promise<any>;
                        $(snapname: string): {
                            /**
                             * Delete a LXC snapshot.
                             * DELETE /nodes/{node}/lxc/{vmid}/snapshot/{snapname}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                             */
                            $delete(param?: { force?: Tdisable }): Promise<any>;
                            /**
                             * 
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<ret_nodes_node_lxc_vmid_snapshot_snapnameGET[]>;
                            rollback: {
                                /**
                                 * Rollback LXC state to specified snapshot.
                                 * POST /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/rollback
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot","VM.Snapshot.Rollback"],"any",1]}
                                 */
                                $post(): Promise<any>;
                            },
                            config: {
                                /**
                                 * Get snapshot configuration
                                 * GET /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/config
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot","VM.Snapshot.Rollback","VM.Audit"],"any",1]}
                                 */
                                $get(): Promise<any>;
                                /**
                                 * Update snapshot metadata.
                                 * PUT /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/config
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                                 */
                                $put(param?: { description?: string }): Promise<null>;
                            },
                        };
                    },
                    firewall: {
                        /**
                         * Directory index.
                         * GET /nodes/{node}/lxc/{vmid}/firewall
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_lxc_vmid_firewallGET[]>;
                        rules: {
                            /**
                             * List rules.
                             * GET /nodes/{node}/lxc/{vmid}/firewall/rules
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_lxc_vmid_firewall_rulesGET[]>;
                            /**
                             * Create new rule.
                             * POST /nodes/{node}/lxc/{vmid}/firewall/rules
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                            $(pos: string): {
                                /**
                                 * Delete rule.
                                 * DELETE /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $delete(param?: { digest?: String0_40 }): Promise<null>;
                                /**
                                 * Get single rule data.
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<ret_nodes_node_lxc_vmid_firewall_rules_posGET>;
                                /**
                                 * Modify rule data.
                                 * PUT /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $put(param?: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                            };
                        },
                        aliases: {
                            /**
                             * List aliases
                             * GET /nodes/{node}/lxc/{vmid}/firewall/aliases
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_lxc_vmid_firewall_aliasesGET[]>;
                            /**
                             * Create IP or Network Alias.
                             * POST /nodes/{node}/lxc/{vmid}/firewall/aliases
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $post(param: { cidr: IPorCIDR, comment?: string, name: Tname }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Remove IP or Network alias.
                                 * DELETE /nodes/{node}/lxc/{vmid}/firewall/aliases/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $delete(param?: { digest?: String0_40 }): Promise<null>;
                                /**
                                 * Read alias.
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/aliases/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<any>;
                                /**
                                 * Update IP or Network alias.
                                 * PUT /nodes/{node}/lxc/{vmid}/firewall/aliases/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $put(param: { cidr: IPorCIDR, comment?: string, digest?: String0_40, rename?: Tname }): Promise<null>;
                            };
                        },
                        ipset: {
                            /**
                             * List IPSets
                             * GET /nodes/{node}/lxc/{vmid}/firewall/ipset
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_lxc_vmid_firewall_ipsetGET[]>;
                            /**
                             * Create new IPSet
                             * POST /nodes/{node}/lxc/{vmid}/firewall/ipset
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $post(param: { comment?: string, digest?: String0_40, name: Tname, rename?: Tname }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Delete IPSet
                                 * DELETE /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $delete(): Promise<null>;
                                /**
                                 * List IPSet content
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<ret_nodes_node_lxc_vmid_firewall_ipset_nameGET[]>;
                                /**
                                 * Add IP or Network to IPSet.
                                 * POST /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $post(param: { cidr: IPorCIDRorAlias, comment?: string, nomatch?: Tdisable }): Promise<null>;
                                $(cidr: string): {
                                    /**
                                     * Remove IP or Network from IPSet.
                                     * DELETE /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}/{cidr}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                     */
                                    $delete(param?: { digest?: String0_40 }): Promise<null>;
                                    /**
                                     * Read IP or Network settings from IPSet.
                                     * GET /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}/{cidr}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                     */
                                    $get(): Promise<any>;
                                    /**
                                     * Update IP or Network settings
                                     * PUT /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}/{cidr}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                     */
                                    $put(param?: { comment?: string, digest?: String0_40, nomatch?: Tdisable }): Promise<null>;
                                };
                            };
                        },
                        options: {
                            /**
                             * Get VM firewall options.
                             * GET /nodes/{node}/lxc/{vmid}/firewall/options
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<ret_nodes_node_lxc_vmid_firewall_optionsGET>;
                            /**
                             * Set Firewall options.
                             * PUT /nodes/{node}/lxc/{vmid}/firewall/options
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                             */
                            $put(param?: { delete?: pveconfigidlist_1, dhcp?: Tdisable, digest?: String0_40, enable?: Tdisable, ipfilter?: Tdisable, log_level_in?: Tlog, log_level_out?: Tlog, macfilter?: Tdisable, ndp?: Tdisable, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in, radv?: Tdisable }): Promise<null>;
                        },
                        log: {
                            /**
                             * Read firewall log
                             * GET /nodes/{node}/lxc/{vmid}/firewall/log
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<ret_nodes_node_lxc_vmid_firewall_logGET[]>;
                        },
                        refs: {
                            /**
                             * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                             * GET /nodes/{node}/lxc/{vmid}/firewall/refs
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param?: { type?: Ttype_2 }): Promise<ret_nodes_node_lxc_vmid_firewall_refsGET[]>;
                        },
                    },
                    rrd: {
                        /**
                         * Read VM RRD statistics (returns PNG)
                         * GET /nodes/{node}/lxc/{vmid}/rrd
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<ret_nodes_node_lxc_vmid_rrdGET>;
                    },
                    rrddata: {
                        /**
                         * Read VM RRD statistics
                         * GET /nodes/{node}/lxc/{vmid}/rrddata
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<ret_nodes_node_lxc_vmid_rrddataGET[]>;
                    },
                    vncproxy: {
                        /**
                         * Creates a TCP VNC proxy connections.
                         * POST /nodes/{node}/lxc/{vmid}/vncproxy
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $post(param?: { height?: integer16_2160, websocket?: Tdisable, width?: integer16_4096 }): Promise<any>;
                    },
                    termproxy: {
                        /**
                         * Creates a TCP proxy connection.
                         * POST /nodes/{node}/lxc/{vmid}/termproxy
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $post(): Promise<any>;
                    },
                    vncwebsocket: {
                        /**
                         * Opens a weksocket for VNC traffic.
                         * GET /nodes/{node}/lxc/{vmid}/vncwebsocket
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]],"description":"You also need to pass a valid ticket (vncticket)."}
                         */
                        $get(param: { port: integer5900_5999, vncticket: String0_512 }): Promise<ret_nodes_node_lxc_vmid_vncwebsocketGET>;
                    },
                    spiceproxy: {
                        /**
                         * Returns a SPICE configuration to connect to the CT.
                         * POST /nodes/{node}/lxc/{vmid}/spiceproxy
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                         */
                        $post(param?: { proxy?: address }): Promise<any>;
                    },
                    migrate: {
                        /**
                         * Migrate the container to another node. Creates a new migration task.
                         * POST /nodes/{node}/lxc/{vmid}/migrate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Migrate"]]}
                         */
                        $post(param: { bwlimit?: Tmigrate_downtime, force?: Tdisable, online?: Tdisable, restart?: Tdisable, target: pvenode, timeout?: integer }): Promise<any>;
                    },
                    feature: {
                        /**
                         * Check if feature for virtual machine is available.
                         * GET /nodes/{node}/lxc/{vmid}/feature
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(param: { feature: Tfeature, snapname?: pveconfigid_3 }): Promise<ret_nodes_node_lxc_vmid_featureGET>;
                    },
                    template: {
                        /**
                         * Create a Template.
                         * POST /nodes/{node}/lxc/{vmid}/template
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Allocate"]],"description":"You need 'VM.Allocate' permissions on /vms/{vmid}"}
                         */
                        $post(): Promise<null>;
                    },
                    clone: {
                        /**
                         * Create a container clone/copy
                         * POST /nodes/{node}/lxc/{vmid}/clone
                         * @allowtoken 1
                         * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Clone"]],["or",["perm","/vms/{newid}",["VM.Allocate"]],["perm","/pool/{pool}",["VM.Allocate"],"require_param","pool"]]],"description":"You need 'VM.Clone' permissions on /vms/{vmid}, and 'VM.Allocate' permissions on /vms/{newid} (or on the VM pool /pool/{pool}). You also need 'Datastore.AllocateSpace' on any used storage."}
                         */
                        $post(param: { bwlimit?: Tmigrate_downtime, description?: string, full?: Tdisable, hostname?: dnsname, newid: pvevmid, pool?: pvepoolid, snapname?: pveconfigid_3, storage?: pvestorageid, target?: pvenode }): Promise<any>;
                    },
                    resize: {
                        /**
                         * Resize a container mount point.
                         * PUT /nodes/{node}/lxc/{vmid}/resize
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk"],"any",1]}
                         */
                        $put(param: { digest?: String0_40, disk: Tdisk_1, size: Tsize }): Promise<any>;
                    },
                    move_volume: {
                        /**
                         * Move a rootfs-/mp-volume to a different storage
                         * POST /nodes/{node}/lxc/{vmid}/move_volume
                         * @allowtoken 1
                         * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Config.Disk"]],["perm","/storage/{storage}",["Datastore.AllocateSpace"]]],"description":"You need 'VM.Config.Disk' permissions on /vms/{vmid}, and 'Datastore.AllocateSpace' permissions on the storage."}
                         */
                        $post(param: { bwlimit?: Tmigrate_downtime, delete?: Tdisable, digest?: String0_40, storage: pvestorageid, volume: Tdisk_1 }): Promise<any>;
                    },
                    pending: {
                        /**
                         * Get container configuration, including pending changes.
                         * GET /nodes/{node}/lxc/{vmid}/pending
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                         */
                        $get(): Promise<ret_nodes_node_lxc_vmid_pendingGET[]>;
                    },
                };
            },
            ceph: {
                /**
                 * Directory index.
                 * GET /nodes/{node}/ceph
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                 */
                $get(): Promise<ret_nodes_node_cephGET[]>;
                osd: {
                    /**
                     * Get Ceph osd list/tree.
                     * GET /nodes/{node}/ceph/osd
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<any>;
                    /**
                     * Create OSD
                     * POST /nodes/{node}/ceph/osd
                     * @allowtoken 1
                     */
                    $post(param: { db_dev?: string, db_size?: Trate, dev: string, encrypted?: Tdisable, wal_dev?: string, wal_size?: Twal_size }): Promise<any>;
                    $(osdid: string): {
                        /**
                         * Destroy OSD
                         * DELETE /nodes/{node}/ceph/osd/{osdid}
                         * @allowtoken 1
                         */
                        $delete(param?: { cleanup?: Tdisable }): Promise<any>;
                        in: {
                            /**
                             * ceph osd in
                             * POST /nodes/{node}/ceph/osd/{osdid}/in
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(): Promise<null>;
                        },
                        out: {
                            /**
                             * ceph osd out
                             * POST /nodes/{node}/ceph/osd/{osdid}/out
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(): Promise<null>;
                        },
                        scrub: {
                            /**
                             * Instruct the OSD to scrub.
                             * POST /nodes/{node}/ceph/osd/{osdid}/scrub
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(param?: { deep?: Tdisable }): Promise<null>;
                        },
                    };
                },
                mds: {
                    /**
                     * MDS directory index.
                     * GET /nodes/{node}/ceph/mds
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_mdsGET[]>;
                    $(name: string): {
                        /**
                         * Destroy Ceph Metadata Server
                         * DELETE /nodes/{node}/ceph/mds/{name}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(): Promise<any>;
                        /**
                         * Create Ceph Metadata Server (MDS)
                         * POST /nodes/{node}/ceph/mds/{name}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { hotstandby?: Tdisable }): Promise<any>;
                    };
                },
                mgr: {
                    /**
                     * MGR directory index.
                     * GET /nodes/{node}/ceph/mgr
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_mgrGET[]>;
                    $(id: string): {
                        /**
                         * Destroy Ceph Manager.
                         * DELETE /nodes/{node}/ceph/mgr/{id}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(): Promise<any>;
                        /**
                         * Create Ceph Manager
                         * POST /nodes/{node}/ceph/mgr/{id}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(): Promise<any>;
                    };
                },
                mon: {
                    /**
                     * Get Ceph monitor list.
                     * GET /nodes/{node}/ceph/mon
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_monGET[]>;
                    $(monid: string): {
                        /**
                         * Destroy Ceph Monitor and Manager.
                         * DELETE /nodes/{node}/ceph/mon/{monid}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(): Promise<any>;
                        /**
                         * Create Ceph Monitor and Manager
                         * POST /nodes/{node}/ceph/mon/{monid}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { 'mon-address'?: ip }): Promise<any>;
                    };
                },
                fs: {
                    /**
                     * Directory index.
                     * GET /nodes/{node}/ceph/fs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_fsGET[]>;
                    $(name: string): {
                        /**
                         * Create a Ceph filesystem
                         * POST /nodes/{node}/ceph/fs/{name}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { 'add-storage'?: Tdisable, pg_num?: integer8_32768 }): Promise<any>;
                    };
                },
                disks: {
                    /**
                     * List local disks.
                     * GET /nodes/{node}/ceph/disks
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(param?: { type?: Ttype_11 }): Promise<ret_nodes_node_ceph_disksGET[]>;
                },
                config: {
                    /**
                     * Get Ceph configuration.
                     * GET /nodes/{node}/ceph/config
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<any>;
                },
                configdb: {
                    /**
                     * Get Ceph configuration database.
                     * GET /nodes/{node}/ceph/configdb
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_configdbGET[]>;
                },
                init: {
                    /**
                     * Create initial ceph default configuration and setup symlinks.
                     * POST /nodes/{node}/ceph/init
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param?: { 'cluster-network'?: CIDR_1, disable_cephx?: Tdisable, min_size?: integer1_7, network?: CIDR_1, pg_bits?: integer6_14, size?: integer1_7 }): Promise<null>;
                },
                stop: {
                    /**
                     * Stop ceph services.
                     * POST /nodes/{node}/ceph/stop
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param?: { service?: Tservice }): Promise<any>;
                },
                start: {
                    /**
                     * Start ceph services.
                     * POST /nodes/{node}/ceph/start
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param?: { service?: Tservice }): Promise<any>;
                },
                restart: {
                    /**
                     * Restart ceph services.
                     * POST /nodes/{node}/ceph/restart
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param?: { service?: Tservice_1 }): Promise<any>;
                },
                status: {
                    /**
                     * Get ceph status.
                     * GET /nodes/{node}/ceph/status
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<any>;
                },
                pools: {
                    /**
                     * List all pools.
                     * GET /nodes/{node}/ceph/pools
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_poolsGET[]>;
                    /**
                     * Create POOL
                     * POST /nodes/{node}/ceph/pools
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param: { add_storages?: Tdisable, application?: Tapplication, crush_rule?: string, min_size?: integer1_7, name: string, pg_num?: integer8_32768, size?: integer1_7 }): Promise<any>;
                    $(name: string): {
                        /**
                         * Destroy pool
                         * DELETE /nodes/{node}/ceph/pools/{name}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(param?: { force?: Tdisable, remove_storages?: Tdisable }): Promise<any>;
                    };
                },
                flags: {
                    /**
                     * get all set ceph flags
                     * GET /nodes/{node}/ceph/flags
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<any>;
                    $(flag: string): {
                        /**
                         * Unset a ceph flag
                         * DELETE /nodes/{node}/ceph/flags/{flag}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $delete(): Promise<null>;
                        /**
                         * Set a specific ceph flag
                         * POST /nodes/{node}/ceph/flags/{flag}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(): Promise<null>;
                    };
                },
                crush: {
                    /**
                     * Get OSD crush map
                     * GET /nodes/{node}/ceph/crush
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<any>;
                },
                log: {
                    /**
                     * Read ceph log
                     * GET /nodes/{node}/ceph/log
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                     */
                    $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<ret_nodes_node_ceph_logGET[]>;
                },
                rules: {
                    /**
                     * List ceph rules.
                     * GET /nodes/{node}/ceph/rules
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_ceph_rulesGET[]>;
                },
            },
            vzdump: {
                /**
                 * Create backup.
                 * POST /nodes/{node}/vzdump
                 * @allowtoken 1
                 * @permissions {"description":"The user needs 'VM.Backup' permissions on any VM, and 'Datastore.AllocateSpace' on the backup storage. The 'maxfiles', 'tmpdir', 'dumpdir', 'script', 'bwlimit' and 'ionice' parameters are restricted to the 'root@pam' user.","user":"all"}
                 */
                $post(param?: { all?: Tdisable, bwlimit?: integer_Min0, compress?: Tcompress, dumpdir?: string, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, pigz?: integer, pool?: string, quiet?: Tdisable, remove?: Tdisable, script?: string, size?: integer_Min500, stdexcludes?: Tdisable, stdout?: Tdisable, stop?: Tdisable, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<any>;
                extractconfig: {
                    /**
                     * Extract configuration from vzdump backup archive.
                     * GET /nodes/{node}/vzdump/extractconfig
                     * @allowtoken 1
                     * @permissions {"description":"The user needs 'VM.Backup' permissions on the backed up guest ID, and 'Datastore.AllocateSpace' on the backup storage.","user":"all"}
                     */
                    $get(param: { volume: string }): Promise<any>;
                },
            },
            services: {
                /**
                 * Service list.
                 * GET /nodes/{node}/services
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_nodes_node_servicesGET[]>;
                $(service: string): {
                    /**
                     * Directory index
                     * GET /nodes/{node}/services/{service}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_nodes_node_services_serviceGET[]>;
                    state: {
                        /**
                         * Read service properties
                         * GET /nodes/{node}/services/{service}/state
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                         */
                        $get(): Promise<any>;
                    },
                    start: {
                        /**
                         * Start service.
                         * POST /nodes/{node}/services/{service}/start
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(): Promise<any>;
                    },
                    stop: {
                        /**
                         * Stop service.
                         * POST /nodes/{node}/services/{service}/stop
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(): Promise<any>;
                    },
                    restart: {
                        /**
                         * Restart service.
                         * POST /nodes/{node}/services/{service}/restart
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(): Promise<any>;
                    },
                    reload: {
                        /**
                         * Reload service.
                         * POST /nodes/{node}/services/{service}/reload
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(): Promise<any>;
                    },
                };
            },
            subscription: {
                /**
                 * Delete subscription key of this node.
                 * DELETE /nodes/{node}/subscription
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $delete(): Promise<null>;
                /**
                 * Read subscription info.
                 * GET /nodes/{node}/subscription
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<any>;
                /**
                 * Update subscription info.
                 * POST /nodes/{node}/subscription
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $post(param?: { force?: Tdisable }): Promise<null>;
                /**
                 * Set subscription key.
                 * PUT /nodes/{node}/subscription
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $put(param: { key: Tkey }): Promise<null>;
            },
            network: {
                /**
                 * Revert network configuration changes.
                 * DELETE /nodes/{node}/network
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $delete(): Promise<null>;
                /**
                 * List available networks
                 * GET /nodes/{node}/network
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(param?: { type?: Ttype_12 }): Promise<ret_nodes_node_networkGET[]>;
                /**
                 * Create network device configuration
                 * POST /nodes/{node}/network
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $post(param: { address?: ipv4, address6?: ipv6, autostart?: Tdisable, 'bond-primary'?: pveiface_1, bond_mode?: Tbond_mode, bond_xmit_hash_policy?: Tbond_xmit_hash_policy, bridge_ports?: pveifacelist, bridge_vlan_aware?: Tdisable, cidr?: CIDRv4, cidr6?: CIDRv6, comments?: string, comments6?: string, gateway?: ipv4, gateway6?: ipv6, iface: pveiface, mtu?: integer1280_65520, netmask?: ipv4mask, netmask6?: integer0_128, ovs_bonds?: pveifacelist, ovs_bridge?: pveiface_1, ovs_options?: String0_1024, ovs_ports?: pveifacelist, ovs_tag?: integer1_4094, slaves?: pveifacelist, type: Ttype_13, 'vlan-id'?: integer1_4094, 'vlan-raw-device'?: pveiface_1 }): Promise<null>;
                /**
                 * Reload network configuration
                 * PUT /nodes/{node}/network
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $put(): Promise<any>;
                $(iface: string): {
                    /**
                     * Delete network device configuration
                     * DELETE /nodes/{node}/network/{iface}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $delete(): Promise<null>;
                    /**
                     * Read network device configuration
                     * GET /nodes/{node}/network/{iface}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_nodes_node_network_ifaceGET>;
                    /**
                     * Update network device configuration
                     * PUT /nodes/{node}/network/{iface}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $put(param: { address?: ipv4, address6?: ipv6, autostart?: Tdisable, 'bond-primary'?: pveiface_1, bond_mode?: Tbond_mode, bond_xmit_hash_policy?: Tbond_xmit_hash_policy, bridge_ports?: pveifacelist, bridge_vlan_aware?: Tdisable, cidr?: CIDRv4, cidr6?: CIDRv6, comments?: string, comments6?: string, delete?: pveconfigidlist_1, gateway?: ipv4, gateway6?: ipv6, mtu?: integer1280_65520, netmask?: ipv4mask, netmask6?: integer0_128, ovs_bonds?: pveifacelist, ovs_bridge?: pveiface_1, ovs_options?: String0_1024, ovs_ports?: pveifacelist, ovs_tag?: integer1_4094, slaves?: pveifacelist, type: Ttype_13, 'vlan-id'?: integer1_4094, 'vlan-raw-device'?: pveiface_1 }): Promise<null>;
                };
            },
            tasks: {
                /**
                 * Read task list for one node (finished tasks).
                 * GET /nodes/{node}/tasks
                 * @allowtoken 1
                 * @permissions {"description":"List task associated with the current user, or all task the user has 'Sys.Audit' permissions on /nodes/<node> (the <node> the task runs on).","user":"all"}
                 */
                $get(param?: { errors?: Tdisable, limit?: integer_Min0, source?: Tsource, start?: integer_Min0, typefilter?: string, userfilter?: string, vmid?: pvevmid }): Promise<ret_nodes_node_tasksGET[]>;
                $(upid: string): {
                    /**
                     * Stop a task.
                     * DELETE /nodes/{node}/tasks/{upid}
                     * @allowtoken 1
                     * @permissions {"description":"The user needs 'Sys.Modify' permissions on '/nodes/<node>' if the task does not belong to him.","user":"all"}
                     */
                    $delete(): Promise<null>;
                    /**
                     * 
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_tasks_upidGET[]>;
                    log: {
                        /**
                         * Read task log.
                         * GET /nodes/{node}/tasks/{upid}/log
                         * @allowtoken 1
                         * @permissions {"description":"The user needs 'Sys.Audit' permissions on '/nodes/<node>' if the task does not belong to him.","user":"all"}
                         */
                        $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<ret_nodes_node_tasks_upid_logGET[]>;
                    },
                    status: {
                        /**
                         * Read task status.
                         * GET /nodes/{node}/tasks/{upid}/status
                         * @allowtoken 1
                         * @permissions {"description":"The user needs 'Sys.Audit' permissions on '/nodes/<node>' if the task does not belong to him.","user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_tasks_upid_statusGET>;
                    },
                };
            },
            scan: {
                /**
                 * Index of available scan methods
                 * GET /nodes/{node}/scan
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_scanGET[]>;
                zfs: {
                    /**
                     * Scan zfs pool list on local node.
                     * GET /nodes/{node}/scan/zfs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(): Promise<ret_nodes_node_scan_zfsGET[]>;
                },
                nfs: {
                    /**
                     * Scan remote NFS server.
                     * GET /nodes/{node}/scan/nfs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(param: { server: pvestorageserver }): Promise<ret_nodes_node_scan_nfsGET[]>;
                },
                cifs: {
                    /**
                     * Scan remote CIFS server.
                     * GET /nodes/{node}/scan/cifs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(param: { domain?: string, password?: string, server: pvestorageserver, username?: string }): Promise<ret_nodes_node_scan_cifsGET[]>;
                },
                glusterfs: {
                    /**
                     * Scan remote GlusterFS server.
                     * GET /nodes/{node}/scan/glusterfs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(param: { server: pvestorageserver }): Promise<ret_nodes_node_scan_glusterfsGET[]>;
                },
                iscsi: {
                    /**
                     * Scan remote iSCSI server.
                     * GET /nodes/{node}/scan/iscsi
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(param: { portal: pvestorageportaldns }): Promise<ret_nodes_node_scan_iscsiGET[]>;
                },
                lvm: {
                    /**
                     * List local LVM volume groups.
                     * GET /nodes/{node}/scan/lvm
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(): Promise<ret_nodes_node_scan_lvmGET[]>;
                },
                lvmthin: {
                    /**
                     * List local LVM Thin Pools.
                     * GET /nodes/{node}/scan/lvmthin
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $get(param: { vg: Tvg }): Promise<ret_nodes_node_scan_lvmthinGET[]>;
                },
                usb: {
                    /**
                     * List local USB devices.
                     * GET /nodes/{node}/scan/usb
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $get(): Promise<ret_nodes_node_scan_usbGET[]>;
                },
            },
            hardware: {
                /**
                 * Index of hardware types
                 * GET /nodes/{node}/hardware
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_hardwareGET[]>;
                pci: {
                    /**
                     * List local PCI devices.
                     * GET /nodes/{node}/hardware/pci
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $get(param?: { 'pci-class-blacklist'?: stringlist, verbose?: Tdisable }): Promise<ret_nodes_node_hardware_pciGET[]>;
                    $(pciid: string): {
                        /**
                         * Index of available pci methods
                         * GET /nodes/{node}/hardware/pci/{pciid}
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<ret_nodes_node_hardware_pci_pciidGET[]>;
                        mdev: {
                            /**
                             * List mediated device types for given PCI device.
                             * GET /nodes/{node}/hardware/pci/{pciid}/mdev
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $get(): Promise<ret_nodes_node_hardware_pci_pciid_mdevGET[]>;
                        },
                    };
                },
            },
            storage: {
                /**
                 * Get status for all datastores.
                 * GET /nodes/{node}/storage
                 * @allowtoken 1
                 * @permissions {"description":"Only list entries where you have 'Datastore.Audit' or 'Datastore.AllocateSpace' permissions on '/storage/<storage>'","user":"all"}
                 */
                $get(param?: { content?: pvestoragecontentlist, enabled?: Tdisable, format?: Tdisable, storage?: pvestorageid, target?: pvenode }): Promise<ret_nodes_node_storageGET[]>;
                $(storage: string): {
                    /**
                     * 
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_storage_storageGET[]>;
                    content: {
                        /**
                         * List storage content.
                         * GET /nodes/{node}/storage/{storage}/content
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                         */
                        $get(param?: { content?: pvestoragecontent, vmid?: pvevmid }): Promise<ret_nodes_node_storage_storage_contentGET[]>;
                        /**
                         * Allocate disk images.
                         * POST /nodes/{node}/storage/{storage}/content
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.AllocateSpace"]]}
                         */
                        $post(param: { filename: string, format?: Tformat_1, size: Tsize_1, vmid: pvevmid }): Promise<any>;
                        $(volume: string): {
                            /**
                             * Delete volume
                             * DELETE /nodes/{node}/storage/{storage}/content/{volume}
                             * @allowtoken 1
                             * @permissions {"description":"You need 'Datastore.Allocate' privilege on the storage (or 'Datastore.AllocateSpace' for backup volumes if you have VM.Backup privilege on the VM).","user":"all"}
                             */
                            $delete(param?: { delay?: integer1_30 }): Promise<any>;
                            /**
                             * Get volume attributes
                             * GET /nodes/{node}/storage/{storage}/content/{volume}
                             * @allowtoken 1
                             * @permissions {"description":"You need read access for the volume.","user":"all"}
                             */
                            $get(): Promise<any>;
                            /**
                             * Copy a volume. This is experimental code - do not use.
                             * POST /nodes/{node}/storage/{storage}/content/{volume}
                             * @allowtoken 1
                             */
                            $post(param: { target: string, target_node?: pvenode }): Promise<any>;
                        };
                    },
                    status: {
                        /**
                         * Read storage status.
                         * GET /nodes/{node}/storage/{storage}/status
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                         */
                        $get(): Promise<any>;
                    },
                    rrd: {
                        /**
                         * Read storage RRD statistics (returns PNG).
                         * GET /nodes/{node}/storage/{storage}/rrd
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                         */
                        $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<ret_nodes_node_storage_storage_rrdGET>;
                    },
                    rrddata: {
                        /**
                         * Read storage RRD statistics.
                         * GET /nodes/{node}/storage/{storage}/rrddata
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                         */
                        $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<ret_nodes_node_storage_storage_rrddataGET[]>;
                    },
                    upload: {
                        /**
                         * Upload templates and ISO images.
                         * POST /nodes/{node}/storage/{storage}/upload
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.AllocateTemplate"]]}
                         */
                        $post(param: { content: pvestoragecontent, filename: string, tmpfilename?: string }): Promise<any>;
                    },
                };
            },
            disks: {
                /**
                 * Node index.
                 * GET /nodes/{node}/disks
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_disksGET[]>;
                lvm: {
                    /**
                     * List LVM Volume Groups
                     * GET /nodes/{node}/disks/lvm
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_disks_lvmGET>;
                    /**
                     * Create an LVM Volume Group
                     * POST /nodes/{node}/disks/lvm
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                     */
                    $post(param: { add_storage?: Tdisable, device: string, name: pvestorageid }): Promise<any>;
                },
                lvmthin: {
                    /**
                     * List LVM thinpools
                     * GET /nodes/{node}/disks/lvmthin
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_disks_lvmthinGET[]>;
                    /**
                     * Create an LVM thinpool
                     * POST /nodes/{node}/disks/lvmthin
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                     */
                    $post(param: { add_storage?: Tdisable, device: string, name: pvestorageid }): Promise<any>;
                },
                directory: {
                    /**
                     * PVE Managed Directory storages.
                     * GET /nodes/{node}/disks/directory
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_disks_directoryGET[]>;
                    /**
                     * Create a Filesystem on an unused disk. Will be mounted under '/mnt/pve/NAME'.
                     * POST /nodes/{node}/disks/directory
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                     */
                    $post(param: { add_storage?: Tdisable, device: string, filesystem?: Tfilesystem, name: pvestorageid }): Promise<any>;
                },
                zfs: {
                    /**
                     * List Zpools.
                     * GET /nodes/{node}/disks/zfs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(): Promise<ret_nodes_node_disks_zfsGET[]>;
                    /**
                     * Create a ZFS pool.
                     * POST /nodes/{node}/disks/zfs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                     */
                    $post(param: { add_storage?: Tdisable, ashift?: integer9_16, compression?: Tcompression, devices: stringlist, name: pvestorageid, raidlevel: Traidlevel }): Promise<any>;
                    $(name: string): {
                        /**
                         * Get details about a zpool.
                         * GET /nodes/{node}/disks/zfs/{name}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<ret_nodes_node_disks_zfs_nameGET>;
                    };
                },
                list: {
                    /**
                     * List local disks.
                     * GET /nodes/{node}/disks/list
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(param?: { skipsmart?: Tdisable, type?: Ttype_11 }): Promise<ret_nodes_node_disks_listGET[]>;
                },
                smart: {
                    /**
                     * Get SMART Health of a disk.
                     * GET /nodes/{node}/disks/smart
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                     */
                    $get(param: { disk: Tdisk_2, healthonly?: Tdisable }): Promise<ret_nodes_node_disks_smartGET>;
                },
                initgpt: {
                    /**
                     * Initialize Disk with GPT
                     * POST /nodes/{node}/disks/initgpt
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param: { disk: Tdisk_2, uuid?: Tuuid }): Promise<any>;
                },
            },
            apt: {
                /**
                 * Directory index for apt (Advanced Package Tool).
                 * GET /nodes/{node}/apt
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_aptGET[]>;
                update: {
                    /**
                     * List available updates.
                     * GET /nodes/{node}/apt/update
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $get(): Promise<ret_nodes_node_apt_updateGET[]>;
                    /**
                     * This is used to resynchronize the package index files from their sources (apt-get update).
                     * POST /nodes/{node}/apt/update
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $post(param?: { notify?: Tdisable, quiet?: Tdisable }): Promise<any>;
                },
                changelog: {
                    /**
                     * Get package changelogs.
                     * GET /nodes/{node}/apt/changelog
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $get(param: { name: string, version?: string }): Promise<any>;
                },
                versions: {
                    /**
                     * Get package information for important Proxmox packages.
                     * GET /nodes/{node}/apt/versions
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_nodes_node_apt_versionsGET[]>;
                },
            },
            firewall: {
                /**
                 * Directory index.
                 * GET /nodes/{node}/firewall
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_firewallGET[]>;
                rules: {
                    /**
                     * List rules.
                     * GET /nodes/{node}/firewall/rules
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_nodes_node_firewall_rulesGET[]>;
                    /**
                     * Create new rule.
                     * POST /nodes/{node}/firewall/rules
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                    $(pos: string): {
                        /**
                         * Delete rule.
                         * DELETE /nodes/{node}/firewall/rules/{pos}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $delete(param?: { digest?: String0_40 }): Promise<null>;
                        /**
                         * Get single rule data.
                         * GET /nodes/{node}/firewall/rules/{pos}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                         */
                        $get(): Promise<ret_nodes_node_firewall_rules_posGET>;
                        /**
                         * Modify rule data.
                         * PUT /nodes/{node}/firewall/rules/{pos}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $put(param?: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                    };
                },
                options: {
                    /**
                     * Get host firewall options.
                     * GET /nodes/{node}/firewall/options
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<ret_nodes_node_firewall_optionsGET>;
                    /**
                     * Set Firewall options.
                     * PUT /nodes/{node}/firewall/options
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $put(param?: { delete?: pveconfigidlist_1, digest?: String0_40, enable?: Tdisable, log_level_in?: Tlog, log_level_out?: Tlog, log_nf_conntrack?: Tdisable, ndp?: Tdisable, nf_conntrack_allow_invalid?: Tdisable, nf_conntrack_max?: integer_Min32768, nf_conntrack_tcp_timeout_established?: integer_Min7875, nf_conntrack_tcp_timeout_syn_recv?: integer30_60, nosmurfs?: Tdisable, protection_synflood?: Tdisable, protection_synflood_burst?: integer, protection_synflood_rate?: integer, smurf_log_level?: Tlog, tcp_flags_log_level?: Tlog, tcpflags?: Tdisable }): Promise<null>;
                },
                log: {
                    /**
                     * Read firewall log
                     * GET /nodes/{node}/firewall/log
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                     */
                    $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<ret_nodes_node_firewall_logGET[]>;
                },
            },
            replication: {
                /**
                 * List status of all replication jobs on this node.
                 * GET /nodes/{node}/replication
                 * @allowtoken 1
                 * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>.","user":"all"}
                 */
                $get(param?: { guest?: pvevmid }): Promise<ret_nodes_node_replicationGET[]>;
                $(id: string): {
                    /**
                     * Directory index.
                     * GET /nodes/{node}/replication/{id}
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_replication_idGET[]>;
                    status: {
                        /**
                         * Get replication job status.
                         * GET /nodes/{node}/replication/{id}/status
                         * @allowtoken 1
                         * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>.","user":"all"}
                         */
                        $get(): Promise<any>;
                    },
                    log: {
                        /**
                         * Read replication job log.
                         * GET /nodes/{node}/replication/{id}/log
                         * @allowtoken 1
                         * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>, or 'Sys.Audit' on '/nodes/<node>'","user":"all"}
                         */
                        $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<ret_nodes_node_replication_id_logGET[]>;
                    },
                    schedule_now: {
                        /**
                         * Schedule replication job to start as soon as possible.
                         * POST /nodes/{node}/replication/{id}/schedule_now
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $post(): Promise<any>;
                    },
                };
            },
            certificates: {
                /**
                 * Node index.
                 * GET /nodes/{node}/certificates
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_certificatesGET[]>;
                acme: {
                    /**
                     * ACME index.
                     * GET /nodes/{node}/certificates/acme
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_certificates_acmeGET[]>;
                    certificate: {
                        /**
                         * Revoke existing certificate from CA.
                         * DELETE /nodes/{node}/certificates/acme/certificate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $delete(): Promise<any>;
                        /**
                         * Order a new certificate from ACME-compatible CA.
                         * POST /nodes/{node}/certificates/acme/certificate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(param?: { force?: Tdisable }): Promise<any>;
                        /**
                         * Renew existing certificate from CA.
                         * PUT /nodes/{node}/certificates/acme/certificate
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $put(param?: { force?: Tdisable }): Promise<any>;
                    },
                },
                info: {
                    /**
                     * Get information about node's certificates.
                     * GET /nodes/{node}/certificates/info
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_certificates_infoGET[]>;
                },
                custom: {
                    /**
                     * DELETE custom certificate chain and key.
                     * DELETE /nodes/{node}/certificates/custom
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $delete(param?: { restart?: Tdisable }): Promise<null>;
                    /**
                     * Upload or update custom certificate chain and key.
                     * POST /nodes/{node}/certificates/custom
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $post(param: { certificates: pemcertificatechain, force?: Tdisable, key?: pemstring, restart?: Tdisable }): Promise<ret_nodes_node_certificates_customPOST>;
                },
            },
            config: {
                /**
                 * Get node configuration options.
                 * GET /nodes/{node}/config
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(param?: { property?: Tproperty }): Promise<any>;
                /**
                 * Set node configuration options.
                 * PUT /nodes/{node}/config
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                 */
                $put(param?: { acme?: Tacme, acmedomain0?: Tacmedomain, acmedomain1?: Tacmedomain, acmedomain2?: Tacmedomain, acmedomain3?: Tacmedomain, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, 'startall-onboot-delay'?: integer0_300, wakeonlan?: macaddr }): Promise<null>;
            },
            sdn: {
                /**
                 * SDN index.
                 * GET /nodes/{node}/sdn
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_sdnGET[]>;
                zones: {
                    /**
                     * Get status for all zones.
                     * GET /nodes/{node}/sdn/zones
                     * @allowtoken 1
                     * @permissions {"description":"Only list entries where you have 'SDN.Audit'","user":"all"}
                     */
                    $get(): Promise<ret_nodes_node_sdn_zonesGET[]>;
                    $(zone: string): {
                        /**
                         * 
                         * @allowtoken 1
                         * @permissions {"check":["perm","/sdn/zones/{zone}",["SDN.Audit"],"any",1]}
                         */
                        $get(): Promise<ret_nodes_node_sdn_zones_zoneGET[]>;
                        content: {
                            /**
                             * List zone content.
                             * GET /nodes/{node}/sdn/zones/{zone}/content
                             * @allowtoken 1
                             * @permissions {"check":["perm","/sdn/zones/{zone}",["SDN.Audit"],"any",1]}
                             */
                            $get(): Promise<ret_nodes_node_sdn_zones_zone_contentGET[]>;
                        },
                    };
                },
            },
            version: {
                /**
                 * API version details
                 * GET /nodes/{node}/version
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_versionGET>;
            },
            status: {
                /**
                 * Read node status
                 * GET /nodes/{node}/status
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(): Promise<any>;
                /**
                 * Reboot or shutdown a node.
                 * POST /nodes/{node}/status
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.PowerMgmt"]]}
                 */
                $post(param: { command: Tcommand_1 }): Promise<null>;
            },
            netstat: {
                /**
                 * Read tap/vm network device interface counters
                 * GET /nodes/{node}/netstat
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_nodes_node_netstatGET[]>;
            },
            execute: {
                /**
                 * Execute multiple commands in order.
                 * POST /nodes/{node}/execute
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $post(param: { commands: string }): Promise<string[]>;
            },
            wakeonlan: {
                /**
                 * Try to wake a node via 'wake on LAN' network packet.
                 * POST /nodes/{node}/wakeonlan
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.PowerMgmt"]]}
                 */
                $post(): Promise<any>;
            },
            rrd: {
                /**
                 * Read node RRD statistics (returns PNG)
                 * GET /nodes/{node}/rrd
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<ret_nodes_node_rrdGET>;
            },
            rrddata: {
                /**
                 * Read node RRD statistics
                 * GET /nodes/{node}/rrddata
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<ret_nodes_node_rrddataGET[]>;
            },
            syslog: {
                /**
                 * Read system log
                 * GET /nodes/{node}/syslog
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                 */
                $get(param?: { limit?: integer_Min0, service?: String0_128, since?: Tsince, start?: integer_Min0, until?: Tsince }): Promise<ret_nodes_node_syslogGET[]>;
            },
            journal: {
                /**
                 * Read Journal
                 * GET /nodes/{node}/journal
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                 */
                $get(param?: { endcursor?: string, lastentries?: integer_Min0, since?: integer_Min0, startcursor?: string, until?: integer_Min0 }): Promise<string[]>;
            },
            vncshell: {
                /**
                 * Creates a VNC Shell proxy.
                 * POST /nodes/{node}/vncshell
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'"}
                 */
                $post(param?: { cmd?: Tcmd, height?: integer16_2160, upgrade?: Tdisable, websocket?: Tdisable, width?: integer16_4096 }): Promise<any>;
            },
            termproxy: {
                /**
                 * Creates a VNC Shell proxy.
                 * POST /nodes/{node}/termproxy
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'"}
                 */
                $post(param?: { cmd?: Tcmd, upgrade?: Tdisable }): Promise<any>;
            },
            vncwebsocket: {
                /**
                 * Opens a weksocket for VNC traffic.
                 * GET /nodes/{node}/vncwebsocket
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'. You also need to pass a valid ticket (vncticket)."}
                 */
                $get(param: { port: integer5900_5999, vncticket: String0_512 }): Promise<ret_nodes_node_vncwebsocketGET>;
            },
            spiceshell: {
                /**
                 * Creates a SPICE shell.
                 * POST /nodes/{node}/spiceshell
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'"}
                 */
                $post(param?: { cmd?: Tcmd, proxy?: address, upgrade?: Tdisable }): Promise<any>;
            },
            dns: {
                /**
                 * Read DNS settings.
                 * GET /nodes/{node}/dns
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_nodes_node_dnsGET>;
                /**
                 * Write DNS settings.
                 * PUT /nodes/{node}/dns
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $put(param: { dns1?: ip, dns2?: ip, dns3?: ip, search: string }): Promise<null>;
            },
            time: {
                /**
                 * Read server time and time zone settings.
                 * GET /nodes/{node}/time
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_nodes_node_timeGET>;
                /**
                 * Set time zone.
                 * PUT /nodes/{node}/time
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $put(param: { timezone: string }): Promise<null>;
            },
            aplinfo: {
                /**
                 * Get list of appliances.
                 * GET /nodes/{node}/aplinfo
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_nodes_node_aplinfoGET[]>;
                /**
                 * Download appliance templates.
                 * POST /nodes/{node}/aplinfo
                 * @allowtoken 1
                 * @permissions {"check":["perm","/storage/{storage}",["Datastore.AllocateTemplate"]]}
                 */
                $post(param: { storage: pvestorageid, template: String0_255 }): Promise<any>;
            },
            report: {
                /**
                 * Gather various systems information about a node
                 * GET /nodes/{node}/report
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                 */
                $get(): Promise<any>;
            },
            startall: {
                /**
                 * Start all VMs and containers located on this node (by default only those with onboot=1).
                 * POST /nodes/{node}/startall
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["VM.PowerMgmt"]]}
                 */
                $post(param?: { force?: Tdisable, vms?: pvevmidlist }): Promise<any>;
            },
            stopall: {
                /**
                 * Stop all VMs and Containers.
                 * POST /nodes/{node}/stopall
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["VM.PowerMgmt"]]}
                 */
                $post(param?: { vms?: pvevmidlist }): Promise<any>;
            },
            migrateall: {
                /**
                 * Migrate all VMs and Containers.
                 * POST /nodes/{node}/migrateall
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["VM.Migrate"]]}
                 */
                $post(param: { maxworkers?: integer_Min1, target: pvenode, vms?: pvevmidlist, 'with-local-disks'?: Tdisable }): Promise<any>;
            },
            hosts: {
                /**
                 * Get the content of /etc/hosts.
                 * GET /nodes/{node}/hosts
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<ret_nodes_node_hostsGET>;
                /**
                 * Write /etc/hosts.
                 * POST /nodes/{node}/hosts
                 * @allowtoken 1
                 * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                 */
                $post(param: { data: string, digest?: String0_40 }): Promise<null>;
            },
        };
    },
    storage: {
        /**
         * Storage index.
         * GET /storage
         * @allowtoken 1
         * @permissions {"description":"Only list entries where you have 'Datastore.Audit' or 'Datastore.AllocateSpace' permissions on '/storage/<storage>'","user":"all"}
         */
        $get(param?: { type?: Ttype_14 }): Promise<ret_storageGET[]>;
        /**
         * Create a new storage.
         * POST /storage
         * @allowtoken 1
         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
         */
        $post(param: { authsupported?: string, base?: pvevolumeid, blocksize?: string, bwlimit?: Tbwlimit, comstar_hg?: string, comstar_tg?: string, content?: pvestoragecontentlist, datastore?: string, disable?: Tdisable, domain?: String0_256, 'encryption-key'?: string, export?: pvestoragepath, fingerprint?: Tfingerprint, format?: pvestorageformat, fuse?: Tdisable, is_mountpoint?: string, iscsiprovider?: string, krbd?: Tdisable, lio_tpg?: string, maxfiles?: integer_Min0, mkdir?: Tdisable, monhost?: pvestorageportaldnslist, mountpoint?: pvestoragepath, nodes?: pvenodelist, nowritecache?: Tdisable, options?: pvestorageoptions, password?: String0_256, path?: pvestoragepath, pool?: string, portal?: pvestorageportaldns, redundancy?: integer1_16, saferemove?: Tdisable, saferemove_throughput?: string, server?: pvestorageserver, server2?: pvestorageserver, share?: string, shared?: Tdisable, smbversion?: Tsmbversion, sparse?: Tdisable, storage: pvestorageid, subdir?: pvestoragepath, tagged_only?: Tdisable, target?: string, thinpool?: pvestoragevgname, transport?: Ttransport, type: Ttype_14, username?: string, vgname?: pvestoragevgname, volume?: string }): Promise<null>;
        $(storage: string): {
            /**
             * Delete storage configuration.
             * DELETE /storage/{storage}
             * @allowtoken 1
             * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
             */
            $delete(): Promise<null>;
            /**
             * Read storage configuration.
             * GET /storage/{storage}
             * @allowtoken 1
             * @permissions {"check":["perm","/storage/{storage}",["Datastore.Allocate"]]}
             */
            $get(): Promise<any>;
            /**
             * Update storage configuration.
             * PUT /storage/{storage}
             * @allowtoken 1
             * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
             */
            $put(param?: { blocksize?: string, bwlimit?: Tbwlimit, comstar_hg?: string, comstar_tg?: string, content?: pvestoragecontentlist, delete?: pveconfigidlist, digest?: String0_40, disable?: Tdisable, domain?: String0_256, 'encryption-key'?: string, fingerprint?: Tfingerprint, format?: pvestorageformat, fuse?: Tdisable, is_mountpoint?: string, krbd?: Tdisable, lio_tpg?: string, maxfiles?: integer_Min0, mkdir?: Tdisable, monhost?: pvestorageportaldnslist, mountpoint?: pvestoragepath, nodes?: pvenodelist, nowritecache?: Tdisable, options?: pvestorageoptions, password?: String0_256, pool?: string, redundancy?: integer1_16, saferemove?: Tdisable, saferemove_throughput?: string, server?: pvestorageserver, server2?: pvestorageserver, shared?: Tdisable, smbversion?: Tsmbversion, sparse?: Tdisable, subdir?: pvestoragepath, tagged_only?: Tdisable, transport?: Ttransport, username?: string }): Promise<null>;
        };
    },
    access: {
        /**
         * Directory index.
         * GET /access
         * @allowtoken 1
         * @permissions {"user":"all"}
         */
        $get(): Promise<ret_accessGET[]>;
        users: {
            /**
             * User index.
             * GET /access/users
             * @allowtoken 1
             * @permissions {"description":"The returned list is restricted to users where you have 'User.Modify' or 'Sys.Audit' permissions on '/access/groups' or on a group the user belongs too. But it always includes the current (authenticated) user.","user":"all"}
             */
            $get(param?: { enabled?: Tdisable, full?: Tdisable }): Promise<ret_access_usersGET[]>;
            /**
             * Create new user.
             * POST /access/users
             * @allowtoken 1
             * @permissions {"check":["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"],"groups_param",1]],"description":"You need 'Realm.AllocateUser' on '/access/realm/<realm>' on the realm of user <userid>, and 'User.Modify' permissions to '/access/groups/<group>' for any group specified (or 'User.Modify' on '/access/groups' if you pass no groups."}
             */
            $post(param: { comment?: string, email?: emailopt, enable?: Tdisable, expire?: integer_Min0, firstname?: string, groups?: pvegroupidlist, keys?: string, lastname?: string, password?: String5_64, userid: pveuserid }): Promise<null>;
            $(userid: string): {
                /**
                 * Delete user.
                 * DELETE /access/users/{userid}
                 * @allowtoken 1
                 * @permissions {"check":["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"]]]}
                 */
                $delete(): Promise<null>;
                /**
                 * Get user configuration.
                 * GET /access/users/{userid}
                 * @allowtoken 1
                 * @permissions {"check":["userid-group",["User.Modify","Sys.Audit"]]}
                 */
                $get(): Promise<ret_access_users_useridGET>;
                /**
                 * Update user configuration.
                 * PUT /access/users/{userid}
                 * @allowtoken 1
                 * @permissions {"check":["userid-group",["User.Modify"],"groups_param",1]}
                 */
                $put(param?: { append?: Tdisable, comment?: string, email?: emailopt, enable?: Tdisable, expire?: integer_Min0, firstname?: string, groups?: pvegroupidlist, keys?: string, lastname?: string }): Promise<null>;
                tfa: {
                    /**
                     * Get user TFA types (Personal and Realm).
                     * GET /access/users/{userid}/tfa
                     * @allowtoken 1
                     * @permissions {"check":["or",["userid-param","self"],["userid-group",["User.Modify","Sys.Audit"]]]}
                     */
                    $get(): Promise<ret_access_users_userid_tfaGET>;
                },
                token: {
                    /**
                     * Get user API tokens.
                     * GET /access/users/{userid}/token
                     * @allowtoken 1
                     * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                     */
                    $get(): Promise<ret_access_users_userid_tokenGET[]>;
                    $(tokenid: string): {
                        /**
                         * Remove API token for a specific user.
                         * DELETE /access/users/{userid}/token/{tokenid}
                         * @allowtoken 1
                         * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                         */
                        $delete(): Promise<null>;
                        /**
                         * Get specific API token information.
                         * GET /access/users/{userid}/token/{tokenid}
                         * @allowtoken 1
                         * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                         */
                        $get(): Promise<ret_access_users_userid_token_tokenidGET>;
                        /**
                         * Generate a new API token for a specific user. NOTE: returns API token value, which needs to be stored as it cannot be retrieved afterwards!
                         * POST /access/users/{userid}/token/{tokenid}
                         * @allowtoken 1
                         * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                         */
                        $post(param?: { comment?: string, expire?: integer_Min0, privsep?: Tdisable }): Promise<ret_access_users_userid_token_tokenidPOST>;
                        /**
                         * Update API token for a specific user.
                         * PUT /access/users/{userid}/token/{tokenid}
                         * @allowtoken 1
                         * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                         */
                        $put(param?: { comment?: string, expire?: integer_Min0, privsep?: Tdisable }): Promise<ret_access_users_userid_token_tokenidPUT>;
                    };
                },
            };
        },
        groups: {
            /**
             * Group index.
             * GET /access/groups
             * @allowtoken 1
             * @permissions {"description":"The returned list is restricted to groups where you have 'User.Modify', 'Sys.Audit'  or 'Group.Allocate' permissions on /access/groups/<group>.","user":"all"}
             */
            $get(): Promise<ret_access_groupsGET[]>;
            /**
             * Create new group.
             * POST /access/groups
             * @allowtoken 1
             * @permissions {"check":["perm","/access/groups",["Group.Allocate"]]}
             */
            $post(param: { comment?: string, groupid: pvegroupid }): Promise<null>;
            $(groupid: string): {
                /**
                 * Delete group.
                 * DELETE /access/groups/{groupid}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/groups",["Group.Allocate"]]}
                 */
                $delete(): Promise<null>;
                /**
                 * Get group configuration.
                 * GET /access/groups/{groupid}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/groups",["Sys.Audit","Group.Allocate"],"any",1]}
                 */
                $get(): Promise<ret_access_groups_groupidGET>;
                /**
                 * Update group data.
                 * PUT /access/groups/{groupid}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/groups",["Group.Allocate"]]}
                 */
                $put(param?: { comment?: string }): Promise<null>;
            };
        },
        roles: {
            /**
             * Role index.
             * GET /access/roles
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<ret_access_rolesGET[]>;
            /**
             * Create new role.
             * POST /access/roles
             * @allowtoken 1
             * @permissions {"check":["perm","/access",["Sys.Modify"]]}
             */
            $post(param: { privs?: pveprivlist, roleid: pveroleid }): Promise<null>;
            $(roleid: string): {
                /**
                 * Delete role.
                 * DELETE /access/roles/{roleid}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access",["Sys.Modify"]]}
                 */
                $delete(): Promise<null>;
                /**
                 * Get role configuration.
                 * GET /access/roles/{roleid}
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<ret_access_roles_roleidGET>;
                /**
                 * Update an existing role.
                 * PUT /access/roles/{roleid}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access",["Sys.Modify"]]}
                 */
                $put(param?: { append?: Tdisable, privs?: pveprivlist }): Promise<null>;
            };
        },
        acl: {
            /**
             * Get Access Control List (ACLs).
             * GET /access/acl
             * @allowtoken 1
             * @permissions {"description":"The returned list is restricted to objects where you have rights to modify permissions.","user":"all"}
             */
            $get(): Promise<ret_access_aclGET[]>;
            /**
             * Update Access Control List (add or remove permissions).
             * PUT /access/acl
             * @allowtoken 1
             * @permissions {"check":["perm-modify","{path}"]}
             */
            $put(param: { delete?: Tdisable, groups?: pvegroupidlist, path: string, propagate?: Tdisable, roles: pveroleidlist, tokens?: pvetokenidlist, users?: pveuseridlist }): Promise<null>;
        },
        domains: {
            /**
             * Authentication domain index.
             * GET /access/domains
             * @allowtoken 1
             * @permissions {"description":"Anyone can access that, because we need that list for the login box (before the user is authenticated).","user":"world"}
             */
            $get(): Promise<ret_access_domainsGET[]>;
            /**
             * Add an authentication server.
             * POST /access/domains
             * @allowtoken 1
             * @permissions {"check":["perm","/access/realm",["Realm.Allocate"]]}
             */
            $post(param: { base_dn?: Tbase_dn, bind_dn?: Tbase_dn, capath?: string, cert?: string, certkey?: string, comment?: String0_4096, default?: Tdisable, domain?: Tdomain, filter?: String0_2048, group_classes?: ldapsimpleattrlist, group_dn?: Tbase_dn, group_filter?: String0_2048, group_name_attr?: ldapsimpleattr, mode?: Tmode_1, password?: string, port?: integer1_65535, realm: pverealm, secure?: Tdisable, server1?: address_1, server2?: address_1, sslversion?: Tsslversion, 'sync-defaults-options'?: realmsyncoptions, sync_attributes?: Tsync_attributes, tfa?: pvetfaconfig, type: Ttype_15, user_attr?: Tuser_attr, user_classes?: ldapsimpleattrlist, verify?: Tdisable }): Promise<null>;
            $(realm: string): {
                /**
                 * Delete an authentication server.
                 * DELETE /access/domains/{realm}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/realm",["Realm.Allocate"]]}
                 */
                $delete(): Promise<null>;
                /**
                 * Get auth server configuration.
                 * GET /access/domains/{realm}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/realm",["Realm.Allocate","Sys.Audit"],"any",1]}
                 */
                $get(): Promise<any>;
                /**
                 * Update authentication server settings.
                 * PUT /access/domains/{realm}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/realm",["Realm.Allocate"]]}
                 */
                $put(param?: { base_dn?: Tbase_dn, bind_dn?: Tbase_dn, capath?: string, cert?: string, certkey?: string, comment?: String0_4096, default?: Tdisable, delete?: pveconfigidlist, digest?: String0_40, domain?: Tdomain, filter?: String0_2048, group_classes?: ldapsimpleattrlist, group_dn?: Tbase_dn, group_filter?: String0_2048, group_name_attr?: ldapsimpleattr, mode?: Tmode_1, password?: string, port?: integer1_65535, secure?: Tdisable, server1?: address_1, server2?: address_1, sslversion?: Tsslversion, 'sync-defaults-options'?: realmsyncoptions, sync_attributes?: Tsync_attributes, tfa?: pvetfaconfig, user_attr?: Tuser_attr, user_classes?: ldapsimpleattrlist, verify?: Tdisable }): Promise<null>;
                sync: {
                    /**
                     * Syncs users and/or groups from the configured LDAP to user.cfg. NOTE: Synced groups will have the name 'name-$realm', so make sure those groups do not exist to prevent overwriting.
                     * POST /access/domains/{realm}/sync
                     * @allowtoken 1
                     * @permissions {"check":["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"]]],"description":"'Realm.AllocateUser' on '/access/realm/<realm>' and  'User.Modify' permissions to '/access/groups/'."}
                     */
                    $post(param?: { 'dry-run'?: Tdisable, 'enable-new'?: Tdisable, full?: Tdisable, purge?: Tdisable, scope?: Tscope_1 }): Promise<any>;
                },
            };
        },
        ticket: {
            /**
             * Dummy. Useful for formatters which want to provide a login page.
             * GET /access/ticket
             * @allowtoken 1
             * @permissions {"user":"world"}
             */
            $get(): Promise<null>;
            /**
             * Create or verify authentication ticket.
             * POST /access/ticket
             * @allowtoken 0
             * @permissions {"description":"You need to pass valid credientials.","user":"world"}
             */
            $post(param: { otp?: string, password: string, path?: String0_64, privs?: pveprivlist_1, realm?: pverealm, username: String0_64 }): Promise<ret_access_ticketPOST>;
        },
        password: {
            /**
             * Change user password.
             * PUT /access/password
             * @allowtoken 0
             * @permissions {"check":["or",["userid-param","self"],["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"]]]],"description":"Each user is allowed to change his own password. A user can change the password of another user if he has 'Realm.AllocateUser' (on the realm of user <userid>) and 'User.Modify' permission on /access/groups/<group> on a group where user <userid> is member of."}
             */
            $put(param: { password: String5_64, userid: pveuserid }): Promise<null>;
        },
        tfa: {
            /**
             * Finish a u2f challenge.
             * POST /access/tfa
             * @allowtoken 0
             * @permissions {"user":"all"}
             */
            $post(param: { response: string }): Promise<ret_access_tfaPOST>;
            /**
             * Change user u2f authentication.
             * PUT /access/tfa
             * @allowtoken 0
             * @permissions {"check":["or",["userid-param","self"],["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"]]]],"description":"A user can change their own u2f or totp token."}
             */
            $put(param: { action: Taction_1, config?: pvetfaconfig, key?: pvetfasecret, password?: String5_64, response?: string, userid: pveuserid }): Promise<any>;
        },
        permissions: {
            /**
             * Retrieve effective permissions of given user/token.
             * GET /access/permissions
             * @allowtoken 1
             * @permissions {"description":"Each user/token is allowed to dump their own permissions. A user can dump the permissions of another user if they have 'Sys.Audit' permission on /access.","user":"all"}
             */
            $get(param?: { path?: string, userid?: Tuserid }): Promise<any>;
        },
    },
    pools: {
        /**
         * Pool index.
         * GET /pools
         * @allowtoken 1
         * @permissions {"description":"List all pools where you have Pool.Allocate or VM.Allocate permissions on /pool/<pool>.","user":"all"}
         */
        $get(): Promise<ret_poolsGET[]>;
        /**
         * Create new pool.
         * POST /pools
         * @allowtoken 1
         * @permissions {"check":["perm","/pool/{poolid}",["Pool.Allocate"]]}
         */
        $post(param: { comment?: string, poolid: pvepoolid }): Promise<null>;
        $(poolid: string): {
            /**
             * Delete pool.
             * DELETE /pools/{poolid}
             * @allowtoken 1
             * @permissions {"check":["perm","/pool/{poolid}",["Pool.Allocate"]],"description":"You can only delete empty pools (no members)."}
             */
            $delete(): Promise<null>;
            /**
             * Get pool configuration.
             * GET /pools/{poolid}
             * @allowtoken 1
             * @permissions {"check":["perm","/pool/{poolid}",["Pool.Allocate"]]}
             */
            $get(): Promise<ret_pools_poolidGET>;
            /**
             * Update pool data.
             * PUT /pools/{poolid}
             * @allowtoken 1
             * @permissions {"check":["perm","/pool/{poolid}",["Pool.Allocate"]],"description":"You also need the right to modify permissions on any object you add/delete."}
             */
            $put(param?: { comment?: string, delete?: Tdisable, storage?: pvestorageidlist, vms?: pvevmidlist }): Promise<null>;
        };
    },
    version: {
        /**
         * API version details. The result also includes the global datacenter confguration.
         * GET /version
         * @allowtoken 1
         * @permissions {"user":"all"}
         */
        $get(): Promise<ret_versionGET>;
    },
}
