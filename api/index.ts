// {"maxLength":4096,"type":"string"}
export type String0_4096 = string;
// {"type":"boolean"}
export type Tdisable = boolean;
// {"format":"pve-replication-job-id","pattern":"[1-9][0-9]{2,8}-\\d{1,9}","type":"string"}
export type pvereplicationjobid = string;
// {"minimum":1,"type":"number"}
export type Trate = number;
export type Tremove_job = 'local' | 'full';
// {"format":"pve-calendar-event","maxLength":128,"type":"string"}
export type pvecalendarevent = string;
// {"format":"pve-node","type":"string"}
export type pvenode = string;
export type Ttype = 'local';
// {"format":"pve-configid-list","maxLength":4096,"type":"string"}
export type pveconfigidlist = string;
// {"maxLength":40,"type":"string"}
export type String0_40 = string;
// {"format":"pve-node","maxLength":15,"type":"string"}
export type pvenode_1 = string;
// {"format":{"address":{"default_key":1,"description":"Hostname (or IP) of this corosync link address.","format":"address","format_description":"IP","type":"string"},"priority":{"default":0,"description":"The priority for the link when knet is used in 'passive' mode (default). Lower value means higher priority. Only valid for cluster create, ignored on node add.","maximum":255,"minimum":0,"optional":1,"type":"integer"}},"type":"string"}
export type Tlink = string;
// {"minimum":1,"type":"integer"}
export type integer_Min1 = number;
// {"type":"integer"}
export type integer = number;
// {"format":"ip","type":"string"}
export type ip = string;
// {"minimum":0,"type":"integer"}
export type integer_Min0 = number;
// {"pattern":"([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}","type":"string"}
export type Tfingerprint = string;
// {"maxLength":128,"type":"string"}
export type String0_128 = string;
// {"maxLength":18,"minLength":2,"pattern":"[A-Za-z][A-Za-z0-9\\-\\_]+","type":"string"}
export type Tgroup = string;
// {"maxLength":20,"minLength":2,"pattern":"[A-Za-z][A-Za-z0-9\\-\\_]+","type":"string"}
export type Taction = string;
// {"format":"pve-fw-addr-spec","type":"string"}
export type pvefwaddrspec = string;
// {"format":"pve-fw-dport-spec","type":"string"}
export type pvefwdportspec = string;
// {"format":"pve-iface","maxLength":20,"minLength":2,"type":"string"}
export type pveiface = string;
export type Tlog = 'emerg' | 'alert' | 'crit' | 'err' | 'warning' | 'notice' | 'info' | 'debug' | 'nolog';
// {"format":"pve-fw-protocol-spec","type":"string"}
export type pvefwprotocolspec = string;
// {"format":"pve-fw-sport-spec","type":"string"}
export type pvefwsportspec = string;
export type Ttype_1 = 'in' | 'out' | 'group';
// {"format":"pve-configid-list","type":"string"}
export type pveconfigidlist_1 = string;
// {"maxLength":64,"minLength":2,"pattern":"[A-Za-z][A-Za-z0-9\\-\\_]+","type":"string"}
export type Tname = string;
// {"format":"IPorCIDRorAlias","type":"string"}
export type IPorCIDRorAlias = string;
// {"format":"IPorCIDR","type":"string"}
export type IPorCIDR = string;
// {"format":{"burst":{"default":5,"description":"Inital burst of packages which will get logged","minimum":0,"optional":1,"type":"integer"},"enable":{"default":"1","default_key":1,"description":"Enable or disable log rate limiting","type":"boolean"},"rate":{"default":"1/second","description":"Frequency with which the burst bucket gets refilled","format_description":"rate","optional":1,"pattern":"[1-9][0-9]*\\/(second|minute|hour|day)","type":"string"}},"type":"string"}
export type Tlog_ratelimit = string;
export type Tpolicy_in = 'ACCEPT' | 'REJECT' | 'DROP';
export type Ttype_2 = 'alias' | 'ipset';
export type Tcompress = '0' | '1' | 'gzip' | 'lzo' | 'zstd';
// {"format":"pve-day-of-week-list","type":"string"}
export type pvedayofweeklist = string;
// {"format":"pve-vmid-list","type":"string"}
export type pvevmidlist = string;
// {"format":"string-alist","type":"string"}
export type stringalist = string;
// {"maximum":8,"minimum":0,"type":"integer"}
export type integer0_8 = number;
export type Tmailnotification = 'always' | 'failure';
// {"format":"string-list","type":"string"}
export type stringlist = string;
export type Tmode = 'snapshot' | 'suspend' | 'stop';
// {"minimum":500,"type":"integer"}
export type integer_Min500 = number;
// {"pattern":"\\d{1,2}:\\d{1,2}","type":"string"}
export type Tstarttime = string;
// {"format":"pve-storage-id","type":"string"}
export type pvestorageid = string;
// {"maxLength":50,"type":"string"}
export type String0_50 = string;
export type Ttype_3 = 'ct' | 'vm';
// {"format":"pve-configid","type":"string"}
export type pveconfigid = string;
// {"format":"pve-ha-resource-or-vm-id","type":"string"}
export type pveharesourceorvmid = string;
export type Tstate = 'started' | 'stopped' | 'enabled' | 'disabled' | 'ignored';
// {"format":"pve-ha-group-node-list","type":"string","verbose_description":"List of cluster node members, where a priority can be given to each node. A resource bound to a group will run on the available nodes with the highest priority. If there are more nodes in the highest priority class, the services will get distributed to those nodes. The priorities have a relative meaning only."}
export type pvehagroupnodelist = string;
// {"type":"boolean","verbose_description":"Resources bound to restricted groups may only run on nodes defined by the group. The resource will be placed in the stopped state if no group node member is online. Resources on unrestricted groups may run on any cluster node if all group members are offline, but they will migrate back as soon as a group member comes online. One can implement a 'preferred node' behavior using an unrestricted group with only one member."}
export type Trestricted = boolean;
export type Ttype_4 = 'group';
export type Ttype_5 = 'dns' | 'standalone';
export type Tapi = 'acmedns' | 'acmeproxy' | 'active24' | 'ad' | 'ali' | 'autodns' | 'aws' | 'azure' | 'cf' | 'clouddns' | 'cloudns' | 'cn' | 'conoha' | 'constellix' | 'cx' | 'cyon' | 'da' | 'ddnss' | 'desec' | 'df' | 'dgon' | 'dnsimple' | 'do' | 'doapi' | 'domeneshop' | 'dp' | 'dpi' | 'dreamhost' | 'duckdns' | 'durabledns' | 'dyn' | 'dynu' | 'dynv6' | 'easydns' | 'euserv' | 'exoscale' | 'freedns' | 'gandi_livedns' | 'gcloud' | 'gd' | 'gdnsdk' | 'he' | 'hexonet' | 'hostingde' | 'infoblox' | 'internetbs' | 'inwx' | 'ispconfig' | 'jd' | 'kas' | 'kinghost' | 'knot' | 'leaseweb' | 'lexicon' | 'linode' | 'linode_v4' | 'loopia' | 'lua' | 'maradns' | 'me' | 'miab' | 'misaka' | 'myapi' | 'mydevil' | 'mydnsjp' | 'namecheap' | 'namecom' | 'namesilo' | 'nederhost' | 'neodigit' | 'netcup' | 'nic' | 'nsd' | 'nsone' | 'nsupdate' | 'nw' | 'one' | 'online' | 'openprovider' | 'opnsense' | 'ovh' | 'pdns' | 'pleskxml' | 'pointhq' | 'rackspace' | 'rcode0' | 'regru' | 'schlundtech' | 'selectel' | 'servercow' | 'tele3' | 'ultra' | 'unoeuro' | 'variomedia' | 'vscale' | 'vultr' | 'yandex' | 'zilore' | 'zone' | 'zonomi';
// {"format":"pve-node-list","type":"string"}
export type pvenodelist = string;
// {"maximum":172800,"minimum":0,"type":"integer"}
export type integer0_172800 = number;
// {"format":"email-list","type":"string"}
export type emaillist = string;
// {"pattern":"^https?://.*","type":"string"}
export type Tdirectory = string;
export type Tscope = 'all' | 'versions';
export type Tflag = 'nobackfill' | 'nodeep-scrub' | 'nodown' | 'noin' | 'noout' | 'norebalance' | 'norecover' | 'noscrub' | 'notieragent' | 'noup' | 'pause';
// {"format":"CIDRv4","type":"string"}
export type CIDRv4 = string;
// {"format":"CIDRv6","type":"string"}
export type CIDRv6 = string;
// {"format":"mac-addr","type":"string"}
export type macaddr = string;
export type Ttype_6 = 'vnet';
// {"format":"pve-sdn-vnet-id","type":"string"}
export type pvesdnvnetid = string;
export type Ttype_7 = 'evpn' | 'faucet' | 'qinq' | 'simple' | 'vlan' | 'vxlan';
// {"format":"ip-list","type":"string"}
export type iplist = string;
export type pveconfigid_1 = 'evpn' | 'faucet' | 'qinq' | 'simple' | 'vlan' | 'vxlan';
export type Tvlanprotocol = '802.1q' | '802.1ad';
// {"format":"pve-sdn-zone-id","type":"string"}
export type pvesdnzoneid = string;
export type Ttype_8 = 'evpn' | 'faucet';
// {"format":"pve-sdn-controller-id","type":"string"}
export type pvesdncontrollerid = string;
export type pveconfigid_2 = 'evpn' | 'faucet';
export type Ttype_9 = 'vm' | 'storage' | 'node' | 'sdn';
// {"format":{"clone":{"description":"bandwidth limit in KiB/s for cloning disks","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"default":{"description":"default bandwidth limit in KiB/s","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"migration":{"description":"bandwidth limit in KiB/s for migrating guests (including moving local disks)","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"move":{"description":"bandwidth limit in KiB/s for moving disks","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"restore":{"description":"bandwidth limit in KiB/s for restoring guests from backups","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"}},"type":"string"}
export type Tbwlimit = string;
export type Tconsole = 'applet' | 'vv' | 'html5' | 'xtermjs';
// {"format":"email-opt","type":"string"}
export type emailopt = string;
export type Tfencing = 'watchdog' | 'hardware' | 'both';
// {"format":{"shutdown_policy":{"default":"conditional","description":"The policy for HA services on node shutdown. 'freeze' disables auto-recovery, 'failover' ensures recovery, 'conditional' recovers on poweroff and freezes on reboot. 'migrate' will migrate running services to other nodes, if possible. With 'freeze' or 'failover', HA Services will always get stopped first on shutdown.","enum":["freeze","failover","conditional","migrate"],"type":"string","verbose_description":"Describes the policy for handling HA services on poweroff or reboot of a node. Freeze will always freeze services which are still located on the node on shutdown, those services won't be recovered by the HA manager. Failover will not mark the services as frozen and thus the services will get recovered to other nodes, if the shutdown node does not come up again quickly (< 1min). 'conditional' chooses automatically depending on the type of shutdown, i.e., on a reboot the service will be frozen but on a poweroff the service will stay as is, and thus get recovered after about 2 minutes. Migrate will try to move all running services to another node when a reboot or shutdown was triggered. The poweroff process will only continue once no running services are located on the node anymore. If the node comes up again, the service will be moved back to the previously powered-off node, at least if no other migration, reloaction or recovery took place."}},"type":"string"}
export type Tha = string;
// {"pattern":"http://.*","type":"string"}
export type Thttp_proxy = string;
export type Tkeyboard = 'de' | 'de-ch' | 'da' | 'en-gb' | 'en-us' | 'es' | 'fi' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'hu' | 'is' | 'it' | 'ja' | 'lt' | 'mk' | 'nl' | 'no' | 'pl' | 'pt' | 'pt-br' | 'sv' | 'sl' | 'tr';
export type Tlanguage = 'ca' | 'da' | 'de' | 'en' | 'es' | 'eu' | 'fa' | 'fr' | 'he' | 'it' | 'ja' | 'nb' | 'nn' | 'pl' | 'pt_BR' | 'ru' | 'sl' | 'sv' | 'tr' | 'zh_CN' | 'zh_TW';
// {"format":"mac-prefix","type":"string"}
export type macprefix = string;
// {"format":{"network":{"description":"CIDR of the (sub) network that is used for migration.","format":"CIDR","format_description":"CIDR","optional":1,"type":"string"},"type":{"default":"secure","default_key":1,"description":"Migration traffic is encrypted using an SSH tunnel by default. On secure, completely private networks this can be disabled to increase performance.","enum":["secure","insecure"],"type":"string"}},"type":"string"}
export type Tmigration = string;
// {"format":{"appid":{"description":"U2F AppId URL override. Defaults to the origin.","format_description":"APPID","optional":1,"type":"string"},"origin":{"description":"U2F Origin override. Mostly useful for single nodes with a single URL.","format_description":"URL","optional":1,"type":"string"}},"type":"string"}
export type Tu2f = string;
// {"format":"pve-vmid","minimum":1,"type":"integer"}
export type pvevmid = number;
// {"format":{"enabled":{"default":0,"default_key":1,"description":"Enable/disable Qemu GuestAgent.","type":"boolean"},"fstrim_cloned_disks":{"default":0,"description":"Run fstrim after cloning/moving a disk.","optional":1,"type":"boolean"},"type":{"default":"virtio","description":"Select the agent type","enum":["virtio","isa"],"optional":1,"type":"string"}},"type":"string"}
export type Tagent = string;
export type Tarch = 'x86_64' | 'aarch64';
// {"maxLength":255,"type":"string"}
export type String0_255 = string;
// {"type":"string","verbose_description":"Arbitrary arguments passed to kvm, for example:\n\nargs: -no-reboot -no-hpet\n\nNOTE: this option is for experts only.\n"}
export type Targs = string;
// {"format":{"device":{"description":"Configure an audio device.","enum":["ich9-intel-hda","intel-hda","AC97"],"type":"string"},"driver":{"default":"spice","description":"Driver backend for the audio device.","enum":["spice"],"optional":1,"type":"string"}},"type":"string"}
export type Taudio0 = string;
export type Tbios = 'seabios' | 'ovmf';
// {"pattern":"[acdn]{1,4}","type":"string"}
export type Tboot = string;
// {"format":"pve-qm-bootdisk","pattern":"(ide|sata|scsi|virtio)\\d+","type":"string"}
export type pveqmbootdisk = string;
// {"format":"pve-qm-ide","type":"string"}
export type pveqmide = string;
// {"format":"pve-qm-cicustom","type":"string"}
export type pveqmcicustom = string;
export type Tcitype = 'configdrive2' | 'nocloud';
// {"format":"pve-vm-cpu-conf","type":"string"}
export type pvevmcpuconf = string;
// {"maximum":128,"minimum":0,"type":"number","verbose_description":"Limit of CPU usage.\n\nNOTE: If the computer has 2 CPUs, it has total of '2' CPU time. Value '0' indicates no CPU limit."}
export type Tcpulimit = number;
// {"maximum":262144,"minimum":2,"type":"integer","verbose_description":"CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to weights of all the other running VMs."}
export type integer2_262144 = number;
// {"format":{"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"alias":"file"}},"type":"string"}
export type Tefidisk0 = string;
// {"format":"pve-volume-id","type":"string"}
export type pvevolumeid = string;
// {"format":"pve-qm-hostpci","type":"string","verbose_description":"Map host PCI devices into guest.\n\nNOTE: This option allows direct access to host hardware. So it is no longer\npossible to migrate such machines - use with special care.\n\nCAUTION: Experimental! User reported problems with this option.\n"}
export type pveqmhostpci = string;
// {"format":"pve-hotplug-features","type":"string"}
export type pvehotplugfeatures = string;
export type Thugepages = 'any' | '2' | '1024';
// {"format":{"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"model":{"description":"The drive's reported model name, url-encoded, up to 40 bytes long.","format":"urlencoded","format_description":"model","maxLength":120,"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}},"type":"string"}
export type Tide = string;
// {"format":"pve-qm-ipconfig","type":"string"}
export type pveqmipconfig = string;
// {"format":{"name":{"description":"The name of the file. Will be prefixed with 'pve-shm-'. Default is the VMID. Will be deleted when the VM is stopped.","format_description":"string","optional":1,"pattern":"[a-zA-Z0-9\\-]+","type":"string"},"size":{"description":"The size of the file in MB.","minimum":1,"type":"integer"}},"type":"string"}
export type Tivshmem = string;
export type Tlock = 'backup' | 'clone' | 'create' | 'migrate' | 'rollback' | 'snapshot' | 'snapshot-delete' | 'suspending' | 'suspended';
// {"maxLength":40,"pattern":"(pc|pc(-i440fx)?-\\d+(\\.\\d+)+(\\+pve\\d+)?(\\.pxe)?|q35|pc-q35-\\d+(\\.\\d+)+(\\+pve\\d+)?(\\.pxe)?|virt(?:-\\d+(\\.\\d+)+)?(\\+pve\\d+)?)","type":"string"}
export type Tmachine = string;
// {"minimum":16,"type":"integer"}
export type integer_Min16 = number;
// {"minimum":0,"type":"number"}
export type Tmigrate_downtime = number;
// {"format":"dns-name","type":"string"}
export type dnsname = string;
// {"format":"address-list","type":"string"}
export type addresslist = string;
// {"format":{"bridge":{"description":"Bridge to attach the network device to. The Proxmox VE standard bridge\nis called 'vmbr0'.\n\nIf you do not specify a bridge, we create a kvm user (NATed) network\ndevice, which provides DHCP and DNS services. The following addresses\nare used:\n\n 10.0.2.2   Gateway\n 10.0.2.3   DNS Server\n 10.0.2.4   SMB Server\n\nThe DHCP server assign addresses to the guest starting from 10.0.2.15.\n","format_description":"bridge","optional":1,"pattern":"[-_.\\w\\d]+","type":"string"},"e1000":{"alias":"macaddr","keyAlias":"model"},"e1000-82540em":{"alias":"macaddr","keyAlias":"model"},"e1000-82544gc":{"alias":"macaddr","keyAlias":"model"},"e1000-82545em":{"alias":"macaddr","keyAlias":"model"},"firewall":{"description":"Whether this interface should be protected by the firewall.","optional":1,"type":"boolean"},"i82551":{"alias":"macaddr","keyAlias":"model"},"i82557b":{"alias":"macaddr","keyAlias":"model"},"i82559er":{"alias":"macaddr","keyAlias":"model"},"link_down":{"description":"Whether this interface should be disconnected (like pulling the plug).","optional":1,"type":"boolean"},"macaddr":{"description":"MAC address. That address must be unique withing your network. This is automatically generated if not specified.","format":"mac-addr","format_description":"XX:XX:XX:XX:XX:XX","optional":1,"type":"string","verbose_description":"A common MAC address with the I/G (Individual/Group) bit not set."},"model":{"default_key":1,"description":"Network Card Model. The 'virtio' model provides the best performance with very low CPU overhead. If your guest does not support this driver, it is usually best to use 'e1000'.","enum":["rtl8139","ne2k_pci","e1000","pcnet","virtio","ne2k_isa","i82551","i82557b","i82559er","vmxnet3","e1000-82540em","e1000-82544gc","e1000-82545em"],"type":"string"},"mtu":{"description":"Force MTU, for VirtIO only. Set to '1' to use the bridge MTU","maximum":65520,"minimum":1,"optional":1,"type":"integer"},"ne2k_isa":{"alias":"macaddr","keyAlias":"model"},"ne2k_pci":{"alias":"macaddr","keyAlias":"model"},"pcnet":{"alias":"macaddr","keyAlias":"model"},"queues":{"description":"Number of packet queues to be used on the device.","maximum":16,"minimum":0,"optional":1,"type":"integer"},"rate":{"description":"Rate limit in mbps (megabytes per second) as floating point number.","minimum":0,"optional":1,"type":"number"},"rtl8139":{"alias":"macaddr","keyAlias":"model"},"tag":{"description":"VLAN tag to apply to packets on this interface.","maximum":4094,"minimum":1,"optional":1,"type":"integer"},"trunks":{"description":"VLAN trunks to pass through this interface.","format_description":"vlanid[;vlanid...]","optional":1,"pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"virtio":{"alias":"macaddr","keyAlias":"model"},"vmxnet3":{"alias":"macaddr","keyAlias":"model"}},"type":"string"}
export type Tnet = string;
// {"format":{"cpus":{"description":"CPUs accessing this NUMA node.","format_description":"id[-id];...","pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"hostnodes":{"description":"Host NUMA nodes to use.","format_description":"id[-id];...","optional":1,"pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"memory":{"description":"Amount of memory this NUMA node provides.","optional":1,"type":"number"},"policy":{"description":"NUMA allocation policy.","enum":["preferred","bind","interleave"],"optional":1,"type":"string"}},"type":"string"}
export type Tnuma = string;
export type Tostype = 'other' | 'wxp' | 'w2k' | 'w2k3' | 'w2k8' | 'wvista' | 'win7' | 'win8' | 'win10' | 'l24' | 'l26' | 'solaris';
// {"pattern":"/dev/parport\\d+|/dev/usb/lp\\d+","type":"string","verbose_description":"Map host parallel devices (n is 0 to 2).\n\nNOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.\n\nCAUTION: Experimental! User reported problems with this option.\n"}
export type Tparallel = string;
// {"format":"pve-poolid","type":"string"}
export type pvepoolid = string;
// {"format":{"max_bytes":{"default":1024,"description":"Maximum bytes of entropy injected into the guest every 'period' milliseconds. Prefer a lower value when using /dev/random as source. Use 0 to disable limiting (potentially dangerous!).","optional":1,"type":"integer"},"period":{"default":1000,"description":"Every 'period' milliseconds the entropy-injection quota is reset, allowing the guest to retrieve another 'max_bytes' of entropy.","optional":1,"type":"integer"},"source":{"default_key":1,"description":"The file on the host to gather entropy from. In most cases /dev/urandom should be preferred over /dev/random to avoid entropy-starvation issues on the host. Using urandom does *not* decrease security in any meaningful way, as it's still seeded from real entropy, and the bytes provided will most likely be mixed with real entropy on the guest as well. /dev/hwrng can be used to pass through a hardware RNG from the host.","enum":["/dev/urandom","/dev/random","/dev/hwrng"],"type":"string"}},"type":"string"}
export type Trng0 = string;
// {"format":{"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}},"type":"string"}
export type Tsata = string;
// {"format":{"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iothread":{"description":"Whether to use iothreads for this drive","optional":1,"type":"boolean"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"queues":{"description":"Number of queues.","minimum":2,"optional":1,"type":"integer"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"scsiblock":{"default":0,"description":"whether to use scsi-block for full passthrough of host block device\n\nWARNING: can lead to I/O errors in combination with low memory or high memory fragmentation on host","optional":1,"type":"boolean"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}},"type":"string"}
export type Tscsi = string;
export type Tscsihw = 'lsi' | 'lsi53c810' | 'virtio-scsi-pci' | 'virtio-scsi-single' | 'megasas' | 'pvscsi';
// {"pattern":"(/dev/.+|socket)","type":"string","verbose_description":"Create a serial device inside the VM (n is 0 to 3), and pass through a\nhost serial device (i.e. /dev/ttyS0), or create a unix socket on the\nhost side (use 'qm terminal' to open a terminal connection).\n\nNOTE: If you pass through a host serial device, it is no longer possible to migrate such machines - use with special care.\n\nCAUTION: Experimental! User reported problems with this option.\n"}
export type Tserial = string;
// {"maximum":50000,"minimum":0,"type":"integer"}
export type integer0_50000 = number;
// {"format":"pve-qm-smbios1","maxLength":512,"type":"string"}
export type pveqmsmbios1 = string;
// {"format":{"foldersharing":{"default":"0","description":"Enable folder sharing via SPICE. Needs Spice-WebDAV daemon installed in the VM.","optional":1,"type":"boolean"},"videostreaming":{"default":"off","description":"Enable video streaming. Uses compression for detected video streams.","enum":["off","all","filter"],"optional":1,"type":"string"}},"type":"string"}
export type Tspice_enhancements = string;
// {"format":"urlencoded","type":"string"}
export type urlencoded = string;
// {"pattern":"(now|\\d{4}-\\d{1,2}-\\d{1,2}(T\\d{1,2}:\\d{1,2}:\\d{1,2})?)","type":"string"}
export type Tstartdate = string;
// {"format":"pve-startup-order","type":"string"}
export type pvestartuporder = string;
// {"type":"boolean","verbose_description":"Enable/disable the USB tablet device. This device is usually needed to allow absolute mouse positioning with VNC. Else the mouse runs out of sync with normal VNC clients. If you're running lots of console-only guests on one host, you may consider disabling this to save some context switches. This is turned off by default if you use spice (-vga=qxl)."}
export type Ttablet = boolean;
// {"format":"pve-tag-list","type":"string"}
export type pvetaglist = string;
// {"format":{"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id","format_description":"volume","type":"string"},"volume":{"alias":"file"}},"type":"string"}
export type Tunused = string;
// {"format":{"host":{"default_key":1,"description":"The Host USB device or port or the value 'spice'. HOSTUSBDEVICE syntax is:\n\n 'bus-port(.port)*' (decimal numbers) or\n 'vendor_id:product_id' (hexadeciaml numbers) or\n 'spice'\n\nYou can use the 'lsusb -t' command to list existing usb devices.\n\nNOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.\n\nThe value 'spice' can be used to add a usb redirection devices for spice.\n","format":"pve-qm-usb-device","format_description":"HOSTUSBDEVICE|spice","type":"string"},"usb3":{"default":0,"description":"Specifies whether if given host option is a USB3 device or port.","optional":1,"type":"boolean"}},"type":"string"}
export type Tusb = string;
// {"format":{"memory":{"description":"Sets the VGA memory (in MiB). Has no effect with serial display.","maximum":512,"minimum":4,"optional":1,"type":"integer"},"type":{"default":"std","default_key":1,"description":"Select the VGA type.","enum":["cirrus","qxl","qxl2","qxl3","qxl4","none","serial0","serial1","serial2","serial3","std","virtio","vmware"],"optional":1,"type":"string"}},"type":"string","verbose_description":"Configure the VGA Hardware. If you want to use high resolution modes (>= 1280x1024x16) you may need to increase the vga memory option. Since QEMU 2.9 the default VGA display type is 'std' for all OS types besides some Windows versions (XP and older) which use 'cirrus'. The 'qxl' option enables the SPICE display server. For win* OS you can select how many independent displays you want, Linux guests can add displays them self.\nYou can also run without any graphic card, using a serial device as terminal."}
export type Tvga = string;
// {"format":{"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iothread":{"description":"Whether to use iothreads for this drive","optional":1,"type":"boolean"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"}},"type":"string"}
export type Tvirtio = string;
// {"pattern":"(?:[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}|[01])","type":"string","verbose_description":"The VM generation ID (vmgenid) device exposes a 128-bit integer value identifier to the guest OS. This allows to notify the guest operating system when the virtual machine is executed with a different configuration (e.g. snapshot execution or creation from a template). The guest operating system notices the change, and is then able to react as appropriate by marking its copies of distributed databases as dirty, re-initializing its random number generator, etc.\nNote that auto-creation only works when done throug API/CLI create or update methods, but not when manually editing the config file."}
export type Tvmgenid = string;
// {"format":"pve-qm-watchdog","type":"string","verbose_description":"Create a virtual hardware watchdog device. Once enabled (by a guest action), the watchdog must be periodically polled by an agent inside the guest or else the watchdog will reset the guest (or execute the respective action specified)"}
export type pveqmwatchdog = string;
export type Tcommand = 'fsfreeze-freeze' | 'fsfreeze-status' | 'fsfreeze-thaw' | 'fstrim' | 'get-fsinfo' | 'get-host-name' | 'get-memory-block-info' | 'get-memory-blocks' | 'get-osinfo' | 'get-time' | 'get-timezone' | 'get-users' | 'get-vcpus' | 'info' | 'network-get-interfaces' | 'ping' | 'shutdown' | 'suspend-disk' | 'suspend-hybrid' | 'suspend-ram';
// {"maxLength":1024,"minLength":5,"type":"string"}
export type String5_1024 = string;
// {"maxLength":65536,"type":"string"}
export type String0_65536 = string;
// {"maxLength":61440,"type":"string"}
export type String0_61440 = string;
export type Tcf = 'AVERAGE' | 'MAX';
export type Ttimeframe = 'hour' | 'day' | 'week' | 'month' | 'year';
// {"format":"pve-configid","maxLength":40,"type":"string"}
export type pveconfigid_3 = string;
// {"maximum":30,"minimum":1,"type":"integer"}
export type integer1_30 = number;
export type Tserial_1 = 'serial0' | 'serial1' | 'serial2' | 'serial3';
// {"maximum":5999,"minimum":5900,"type":"integer"}
export type integer5900_5999 = number;
// {"maxLength":512,"type":"string"}
export type String0_512 = string;
// {"format":"address","type":"string"}
export type address = string;
// {"format":"CIDR","type":"string"}
export type CIDR = string;
export type Tmigration_type = 'secure' | 'insecure';
// {"format":"storagepair-list","type":"string"}
export type storagepairlist = string;
export type Tfeature = 'snapshot' | 'clone' | 'copy';
export type Tformat = 'raw' | 'qcow2' | 'vmdk';
export type Tdisk = 'ide0' | 'ide1' | 'ide2' | 'ide3' | 'scsi0' | 'scsi1' | 'scsi2' | 'scsi3' | 'scsi4' | 'scsi5' | 'scsi6' | 'scsi7' | 'scsi8' | 'scsi9' | 'scsi10' | 'scsi11' | 'scsi12' | 'scsi13' | 'scsi14' | 'scsi15' | 'scsi16' | 'scsi17' | 'scsi18' | 'scsi19' | 'scsi20' | 'scsi21' | 'scsi22' | 'scsi23' | 'scsi24' | 'scsi25' | 'scsi26' | 'scsi27' | 'scsi28' | 'scsi29' | 'scsi30' | 'virtio0' | 'virtio1' | 'virtio2' | 'virtio3' | 'virtio4' | 'virtio5' | 'virtio6' | 'virtio7' | 'virtio8' | 'virtio9' | 'virtio10' | 'virtio11' | 'virtio12' | 'virtio13' | 'virtio14' | 'virtio15' | 'sata0' | 'sata1' | 'sata2' | 'sata3' | 'sata4' | 'sata5' | 'efidisk0';
// {"pattern":"\\+?\\d+(\\.\\d+)?[KMGT]?","type":"string"}
export type Tsize = string;
export type Ttype_10 = 'user' | 'network' | 'meta';
export type Tarch_1 = 'amd64' | 'i386' | 'arm64' | 'armhf';
export type Tcmode = 'shell' | 'console' | 'tty';
// {"maximum":128,"minimum":1,"type":"integer"}
export type integer1_128 = number;
// {"maximum":128,"minimum":0,"type":"number"}
export type Tcpulimit_1 = number;
// {"maximum":500000,"minimum":0,"type":"integer"}
export type integer0_500000 = number;
// {"format":{"force_rw_sys":{"default":0,"description":"Mount /sys in unprivileged containers as `rw` instead of `mixed`. This can break networking under newer (>= v245) systemd-network use.","optional":1,"type":"boolean"},"fuse":{"default":0,"description":"Allow using 'fuse' file systems in a container. Note that interactions between fuse and the freezer cgroup can potentially cause I/O deadlocks.","optional":1,"type":"boolean"},"keyctl":{"default":0,"description":"For unprivileged containers only: Allow the use of the keyctl() system call. This is required to use docker inside a container. By default unprivileged containers will see this system call as non-existent. This is mostly a workaround for systemd-networkd, as it will treat it as a fatal error when some keyctl() operations are denied by the kernel due to lacking permissions. Essentially, you can choose between running systemd-networkd or docker.","optional":1,"type":"boolean"},"mknod":{"default":0,"description":"Allow unprivileged containers to use mknod() to add certain device nodes. This requires a kernel with seccomp trap to user space support (5.3 or newer). This is experimental.","optional":1,"type":"boolean"},"mount":{"description":"Allow mounting file systems of specific types. This should be a list of file system types as used with the mount command. Note that this can have negative effects on the container's security. With access to a loop device, mounting a file can circumvent the mknod permission of the devices cgroup, mounting an NFS file system can block the host's I/O completely and prevent it from rebooting, etc.","format_description":"fstype;fstype;...","optional":1,"pattern":"(?^:[a-zA-Z0-9_; ]+)","type":"string"},"nesting":{"default":0,"description":"Allow nesting. Best used with unprivileged containers with additional id mapping. Note that this will expose procfs and sysfs contents of the host to the guest.","optional":1,"type":"boolean"}},"type":"string"}
export type Tfeatures = string;
// {"format":"dns-name","maxLength":255,"type":"string"}
export type dnsname_1 = string;
export type Tlock_1 = 'backup' | 'create' | 'destroyed' | 'disk' | 'fstrim' | 'migrate' | 'mounted' | 'rollback' | 'snapshot' | 'snapshot-delete';
// {"format":{"acl":{"description":"Explicitly enable or disable ACL support.","optional":1,"type":"boolean"},"backup":{"description":"Whether to include the mount point in backups.","optional":1,"type":"boolean","verbose_description":"Whether to include the mount point in backups (only used for volume mount points)."},"mountoptions":{"description":"Extra mount options for rootfs/mps.","format_description":"opt[;opt...]","optional":1,"pattern":"(?^:(?^:(noatime|nodev|nosuid|noexec))(;(?^:(noatime|nodev|nosuid|noexec)))*)","type":"string"},"mp":{"description":"Path to the mount point as seen from inside the container (must not contain symlinks).","format":"pve-lxc-mp-string","format_description":"Path","type":"string","verbose_description":"Path to the mount point as seen from inside the container.\n\nNOTE: Must not contain any symlinks for security reasons."},"quota":{"description":"Enable user quotas inside the container (not supported with zfs subvolumes)","optional":1,"type":"boolean"},"replicate":{"default":1,"description":"Will include this volume to a storage replica job.","optional":1,"type":"boolean"},"ro":{"description":"Read-only mount point","optional":1,"type":"boolean"},"shared":{"default":0,"description":"Mark this non-volume mount point as available on multiple nodes (see 'nodes')","optional":1,"type":"boolean","verbose_description":"Mark this non-volume mount point as available on all nodes.\n\nWARNING: This option does not share the mount point automatically, it assumes it is shared already!"},"size":{"description":"Volume size (read only value).","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"default_key":1,"description":"Volume, device or directory to mount into the container.","format":"pve-lxc-mp-string","format_description":"volume","type":"string"}},"type":"string"}
export type Tmp = string;
// {"format":{"bridge":{"description":"Bridge to attach the network device to.","format_description":"bridge","optional":1,"pattern":"[-_.\\w\\d]+","type":"string"},"firewall":{"description":"Controls whether this interface's firewall rules should be used.","optional":1,"type":"boolean"},"gw":{"description":"Default gateway for IPv4 traffic.","format":"ipv4","format_description":"GatewayIPv4","optional":1,"type":"string"},"gw6":{"description":"Default gateway for IPv6 traffic.","format":"ipv6","format_description":"GatewayIPv6","optional":1,"type":"string"},"hwaddr":{"description":"The interface MAC address. This is dynamically allocated by default, but you can set that statically if needed, for example to always have the same link-local IPv6 address. (lxc.network.hwaddr)","format":"mac-addr","format_description":"XX:XX:XX:XX:XX:XX","optional":1,"type":"string","verbose_description":"A common MAC address with the I/G (Individual/Group) bit not set."},"ip":{"description":"IPv4 address in CIDR format.","format":"pve-ipv4-config","format_description":"(IPv4/CIDR|dhcp|manual)","optional":1,"type":"string"},"ip6":{"description":"IPv6 address in CIDR format.","format":"pve-ipv6-config","format_description":"(IPv6/CIDR|auto|dhcp|manual)","optional":1,"type":"string"},"mtu":{"description":"Maximum transfer unit of the interface. (lxc.network.mtu)","minimum":64,"optional":1,"type":"integer"},"name":{"description":"Name of the network device as seen from inside the container. (lxc.network.name)","format_description":"string","pattern":"[-_.\\w\\d]+","type":"string"},"rate":{"description":"Apply rate limiting to the interface","format_description":"mbps","optional":1,"type":"number"},"tag":{"description":"VLAN tag for this interface.","maximum":4094,"minimum":1,"optional":1,"type":"integer"},"trunks":{"description":"VLAN ids to pass through the interface","format_description":"vlanid[;vlanid...]","optional":1,"pattern":"(?^:\\d+(?:;\\d+)*)","type":"string"},"type":{"description":"Network interface type.","enum":["veth"],"optional":1,"type":"string"}},"type":"string"}
export type Tnet_1 = string;
export type Tostype_1 = 'debian' | 'ubuntu' | 'centos' | 'fedora' | 'opensuse' | 'archlinux' | 'alpine' | 'gentoo' | 'unmanaged';
// {"minLength":5,"type":"string"}
export type Tpassword = string;
// {"format":{"acl":{"description":"Explicitly enable or disable ACL support.","optional":1,"type":"boolean"},"mountoptions":{"description":"Extra mount options for rootfs/mps.","format_description":"opt[;opt...]","optional":1,"pattern":"(?^:(?^:(noatime|nodev|nosuid|noexec))(;(?^:(noatime|nodev|nosuid|noexec)))*)","type":"string"},"quota":{"description":"Enable user quotas inside the container (not supported with zfs subvolumes)","optional":1,"type":"boolean"},"replicate":{"default":1,"description":"Will include this volume to a storage replica job.","optional":1,"type":"boolean"},"ro":{"description":"Read-only mount point","optional":1,"type":"boolean"},"shared":{"default":0,"description":"Mark this non-volume mount point as available on multiple nodes (see 'nodes')","optional":1,"type":"boolean","verbose_description":"Mark this non-volume mount point as available on all nodes.\n\nWARNING: This option does not share the mount point automatically, it assumes it is shared already!"},"size":{"description":"Volume size (read only value).","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"default_key":1,"description":"Volume, device or directory to mount into the container.","format":"pve-lxc-mp-string","format_description":"volume","type":"string"}},"type":"string"}
export type Trootfs = string;
// {"format":"dns-name-list","type":"string"}
export type dnsnamelist = string;
// {"format":"pve-ct-timezone","type":"string"}
export type pvecttimezone = string;
// {"maximum":6,"minimum":0,"type":"integer"}
export type integer0_6 = number;
// {"format":{"volume":{"default_key":1,"description":"The volume that is not used currently.","format":"pve-volume-id","format_description":"volume","type":"string"}},"type":"string"}
export type Tunused_1 = string;
// {"maximum":2160,"minimum":16,"type":"integer"}
export type integer16_2160 = number;
// {"maximum":4096,"minimum":16,"type":"integer"}
export type integer16_4096 = number;
export type Tdisk_1 = 'rootfs' | 'mp0' | 'mp1' | 'mp2' | 'mp3' | 'mp4' | 'mp5' | 'mp6' | 'mp7' | 'mp8' | 'mp9' | 'mp10' | 'mp11' | 'mp12' | 'mp13' | 'mp14' | 'mp15' | 'mp16' | 'mp17' | 'mp18' | 'mp19' | 'mp20' | 'mp21' | 'mp22' | 'mp23' | 'mp24' | 'mp25' | 'mp26' | 'mp27' | 'mp28' | 'mp29' | 'mp30' | 'mp31' | 'mp32' | 'mp33' | 'mp34' | 'mp35' | 'mp36' | 'mp37' | 'mp38' | 'mp39' | 'mp40' | 'mp41' | 'mp42' | 'mp43' | 'mp44' | 'mp45' | 'mp46' | 'mp47' | 'mp48' | 'mp49' | 'mp50' | 'mp51' | 'mp52' | 'mp53' | 'mp54' | 'mp55' | 'mp56' | 'mp57' | 'mp58' | 'mp59' | 'mp60' | 'mp61' | 'mp62' | 'mp63' | 'mp64' | 'mp65' | 'mp66' | 'mp67' | 'mp68' | 'mp69' | 'mp70' | 'mp71' | 'mp72' | 'mp73' | 'mp74' | 'mp75' | 'mp76' | 'mp77' | 'mp78' | 'mp79' | 'mp80' | 'mp81' | 'mp82' | 'mp83' | 'mp84' | 'mp85' | 'mp86' | 'mp87' | 'mp88' | 'mp89' | 'mp90' | 'mp91' | 'mp92' | 'mp93' | 'mp94' | 'mp95' | 'mp96' | 'mp97' | 'mp98' | 'mp99' | 'mp100' | 'mp101' | 'mp102' | 'mp103' | 'mp104' | 'mp105' | 'mp106' | 'mp107' | 'mp108' | 'mp109' | 'mp110' | 'mp111' | 'mp112' | 'mp113' | 'mp114' | 'mp115' | 'mp116' | 'mp117' | 'mp118' | 'mp119' | 'mp120' | 'mp121' | 'mp122' | 'mp123' | 'mp124' | 'mp125' | 'mp126' | 'mp127' | 'mp128' | 'mp129' | 'mp130' | 'mp131' | 'mp132' | 'mp133' | 'mp134' | 'mp135' | 'mp136' | 'mp137' | 'mp138' | 'mp139' | 'mp140' | 'mp141' | 'mp142' | 'mp143' | 'mp144' | 'mp145' | 'mp146' | 'mp147' | 'mp148' | 'mp149' | 'mp150' | 'mp151' | 'mp152' | 'mp153' | 'mp154' | 'mp155' | 'mp156' | 'mp157' | 'mp158' | 'mp159' | 'mp160' | 'mp161' | 'mp162' | 'mp163' | 'mp164' | 'mp165' | 'mp166' | 'mp167' | 'mp168' | 'mp169' | 'mp170' | 'mp171' | 'mp172' | 'mp173' | 'mp174' | 'mp175' | 'mp176' | 'mp177' | 'mp178' | 'mp179' | 'mp180' | 'mp181' | 'mp182' | 'mp183' | 'mp184' | 'mp185' | 'mp186' | 'mp187' | 'mp188' | 'mp189' | 'mp190' | 'mp191' | 'mp192' | 'mp193' | 'mp194' | 'mp195' | 'mp196' | 'mp197' | 'mp198' | 'mp199' | 'mp200' | 'mp201' | 'mp202' | 'mp203' | 'mp204' | 'mp205' | 'mp206' | 'mp207' | 'mp208' | 'mp209' | 'mp210' | 'mp211' | 'mp212' | 'mp213' | 'mp214' | 'mp215' | 'mp216' | 'mp217' | 'mp218' | 'mp219' | 'mp220' | 'mp221' | 'mp222' | 'mp223' | 'mp224' | 'mp225' | 'mp226' | 'mp227' | 'mp228' | 'mp229' | 'mp230' | 'mp231' | 'mp232' | 'mp233' | 'mp234' | 'mp235' | 'mp236' | 'mp237' | 'mp238' | 'mp239' | 'mp240' | 'mp241' | 'mp242' | 'mp243' | 'mp244' | 'mp245' | 'mp246' | 'mp247' | 'mp248' | 'mp249' | 'mp250' | 'mp251' | 'mp252' | 'mp253' | 'mp254' | 'mp255';
// {"minimum":1,"type":"number","verbose_description":"If a block.db is requested but the size is not given, will be automatically selected by: bluestore_block_db_size from the ceph database (osd or global section) or config (osd or global section)in that order. If this is not available, it will be sized 10% of the size of the OSD device. Fails if the available size is not enough."}
export type Tdb_size = number;
// {"minimum":0.5,"type":"number","verbose_description":"If a block.wal is requested but the size is not given, will be automatically selected by: bluestore_block_wal_size from the ceph database (osd or global section) or config (osd or global section)in that order. If this is not available, it will be sized 1% of the size of the OSD device. Fails if the available size is not enough."}
export type Twal_size = number;
// {"pattern":"[a-zA-Z0-9]([a-zA-Z0-9\\-]*[a-zA-Z0-9])?","type":"string"}
export type Tname_1 = string;
// {"maxLength":200,"pattern":"[a-zA-Z0-9]([a-zA-Z0-9\\-]*[a-zA-Z0-9])?","type":"string"}
export type Tname_2 = string;
// {"maximum":32768,"minimum":8,"type":"integer"}
export type integer8_32768 = number;
export type Ttype_11 = 'unused' | 'journal_disks';
// {"format":"CIDR","maxLength":128,"type":"string"}
export type CIDR_1 = string;
// {"maximum":7,"minimum":1,"type":"integer"}
export type integer1_7 = number;
// {"maximum":14,"minimum":6,"type":"integer"}
export type integer6_14 = number;
// {"pattern":"(ceph|mon|mds|osd|mgr)(\\.[a-zA-Z0-9]([a-zA-Z0-9\\-]*[a-zA-Z0-9])?)?","type":"string"}
export type Tservice = string;
// {"pattern":"(mon|mds|osd|mgr)(\\.[a-zA-Z0-9]([a-zA-Z0-9\\-]*[a-zA-Z0-9])?)?","type":"string"}
export type Tservice_1 = string;
export type Tapplication = 'rbd' | 'cephfs' | 'rgw';
export type Tservice_2 = 'pveproxy' | 'pvedaemon' | 'spiceproxy' | 'pvestatd' | 'pve-cluster' | 'corosync' | 'pve-firewall' | 'pvefw-logger' | 'pve-ha-crm' | 'pve-ha-lrm' | 'sshd' | 'syslog' | 'cron' | 'postfix' | 'ksmtuned' | 'systemd-timesyncd';
// {"maxLength":32,"pattern":"pve([1248])([cbsp])-[0-9a-f]{10}","type":"string"}
export type Tkey = string;
export type Ttype_12 = 'bridge' | 'bond' | 'eth' | 'alias' | 'vlan' | 'OVSBridge' | 'OVSBond' | 'OVSPort' | 'OVSIntPort' | 'any_bridge';
// {"format":"ipv4","type":"string"}
export type ipv4 = string;
// {"format":"ipv6","type":"string"}
export type ipv6 = string;
// {"format":"pve-iface","type":"string"}
export type pveiface_1 = string;
export type Tbond_mode = 'balance-rr' | 'active-backup' | 'balance-xor' | 'broadcast' | '802.3ad' | 'balance-tlb' | 'balance-alb' | 'balance-slb' | 'lacp-balance-slb' | 'lacp-balance-tcp';
export type Tbond_xmit_hash_policy = 'layer2' | 'layer2+3' | 'layer3+4';
// {"format":"pve-iface-list","type":"string"}
export type pveifacelist = string;
// {"maximum":65520,"minimum":1280,"type":"integer"}
export type integer1280_65520 = number;
// {"format":"ipv4mask","type":"string"}
export type ipv4mask = string;
// {"maximum":128,"minimum":0,"type":"integer"}
export type integer0_128 = number;
// {"maxLength":1024,"type":"string"}
export type String0_1024 = string;
// {"maximum":4094,"minimum":1,"type":"integer"}
export type integer1_4094 = number;
export type Ttype_13 = 'bridge' | 'bond' | 'eth' | 'alias' | 'vlan' | 'OVSBridge' | 'OVSBond' | 'OVSPort' | 'OVSIntPort' | 'unknown';
export type Tsource = 'archive' | 'active' | 'all';
// {"format":"pve-storage-server","type":"string"}
export type pvestorageserver = string;
// {"format":"pve-storage-portal-dns","type":"string"}
export type pvestorageportaldns = string;
// {"maxLength":100,"pattern":"[a-zA-Z0-9\\.\\+\\_][a-zA-Z0-9\\.\\+\\_\\-]+","type":"string"}
export type Tvg = string;
// {"pattern":"(?:[0-9a-fA-F]{4}:)?[0-9a-fA-F]{2}:[0-9a-fA-F]{2}\\.[0-9a-fA-F]","type":"string"}
export type Tpciid = string;
// {"format":"pve-storage-content-list","type":"string"}
export type pvestoragecontentlist = string;
// {"format":"pve-storage-content","type":"string"}
export type pvestoragecontent = string;
export type Tformat_1 = 'raw' | 'qcow2' | 'subvol';
// {"pattern":"\\d+[MG]?","type":"string"}
export type Tsize_1 = string;
export type Tfilesystem = 'ext4' | 'xfs';
// {"maximum":16,"minimum":9,"type":"integer"}
export type integer9_16 = number;
export type Tcompression = 'on' | 'off' | 'gzip' | 'lz4' | 'lzjb' | 'zle';
export type Traidlevel = 'single' | 'mirror' | 'raid10' | 'raidz' | 'raidz2' | 'raidz3';
// {"pattern":"^/dev/[a-zA-Z0-9\\/]+$","type":"string"}
export type Tdisk_2 = string;
// {"maxLength":36,"pattern":"[a-fA-F0-9\\-]+","type":"string"}
export type Tuuid = string;
// {"minimum":32768,"type":"integer"}
export type integer_Min32768 = number;
// {"minimum":7875,"type":"integer"}
export type integer_Min7875 = number;
// {"maximum":60,"minimum":30,"type":"integer"}
export type integer30_60 = number;
// {"format":"pem-certificate-chain","type":"string"}
export type pemcertificatechain = string;
// {"format":"pem-string","type":"string"}
export type pemstring = string;
export type Tproperty = 'acme' | 'acmedomain0' | 'acmedomain1' | 'acmedomain2' | 'acmedomain3' | 'acmedomain4' | 'acmedomain5' | 'description' | 'startall-onboot-delay' | 'wakeonlan';
// {"format":{"account":{"default":"default","description":"ACME account config file name.","format":"pve-configid","format_description":"name","optional":1,"type":"string"},"domains":{"description":"List of domains for this node's ACME certificate","format":"pve-acme-domain-list","format_description":"domain[;domain;...]","optional":1,"type":"string"}},"type":"string"}
export type Tacme = string;
// {"format":{"alias":{"description":"Alias for the Domain to verify ACME Challenge over DNS","format":"pve-acme-alias","format_description":"domain","optional":1,"type":"string"},"domain":{"default_key":1,"description":"domain for this node's ACME certificate","format":"pve-acme-domain","format_description":"domain","type":"string"},"plugin":{"default":"standalone","description":"The ACME plugin ID","format":"pve-configid","format_description":"name of the plugin configuration","optional":1,"type":"string"}},"type":"string"}
export type Tacmedomain = string;
// {"maximum":300,"minimum":0,"type":"integer"}
export type integer0_300 = number;
export type Tcommand_1 = 'reboot' | 'shutdown';
// {"pattern":"^\\d{4}-\\d{2}-\\d{2}( \\d{2}:\\d{2}(:\\d{2})?)?$","type":"string"}
export type Tsince = string;
export type Tcmd = 'login' | 'ceph_install' | 'upgrade';
export type Ttype_14 = 'cephfs' | 'cifs' | 'dir' | 'drbd' | 'glusterfs' | 'iscsi' | 'iscsidirect' | 'lvm' | 'lvmthin' | 'nfs' | 'pbs' | 'rbd' | 'zfs' | 'zfspool';
// {"maxLength":256,"type":"string"}
export type String0_256 = string;
// {"format":"pve-storage-path","type":"string"}
export type pvestoragepath = string;
// {"format":"pve-storage-format","type":"string"}
export type pvestorageformat = string;
// {"format":"pve-storage-portal-dns-list","type":"string"}
export type pvestorageportaldnslist = string;
// {"format":"pve-storage-options","type":"string"}
export type pvestorageoptions = string;
// {"maximum":16,"minimum":1,"type":"integer"}
export type integer1_16 = number;
export type Tsmbversion = '2.0' | '2.1' | '3.0';
// {"format":"pve-storage-vgname","type":"string"}
export type pvestoragevgname = string;
export type Ttransport = 'tcp' | 'rdma' | 'unix';
// {"format":"pve-groupid-list","type":"string"}
export type pvegroupidlist = string;
// {"maxLength":64,"minLength":5,"type":"string"}
export type String5_64 = string;
// {"format":"pve-userid","maxLength":64,"type":"string"}
export type pveuserid = string;
// {"pattern":"(?^:[A-Za-z][A-Za-z0-9\\.\\-_]+)","type":"string"}
export type Ttokenid = string;
// {"format":"pve-groupid","type":"string"}
export type pvegroupid = string;
// {"format":"pve-priv-list","type":"string"}
export type pveprivlist = string;
// {"format":"pve-roleid","type":"string"}
export type pveroleid = string;
// {"format":"pve-roleid-list","type":"string"}
export type pveroleidlist = string;
// {"format":"pve-tokenid-list","type":"string"}
export type pvetokenidlist = string;
// {"format":"pve-userid-list","type":"string"}
export type pveuseridlist = string;
// {"maxLength":256,"pattern":"\\w+=[^,]+(,\\s*\\w+=[^,]+)*","type":"string"}
export type Tbase_dn = string;
// {"maxLength":256,"pattern":"\\S+","type":"string"}
export type Tdomain = string;
// {"maxLength":2048,"type":"string"}
export type String0_2048 = string;
// {"format":"ldap-simple-attr-list","type":"string"}
export type ldapsimpleattrlist = string;
// {"format":"ldap-simple-attr","maxLength":256,"type":"string"}
export type ldapsimpleattr = string;
export type Tmode_1 = 'ldap' | 'ldaps' | 'ldap+starttls';
// {"maximum":65535,"minimum":1,"type":"integer"}
export type integer1_65535 = number;
// {"format":"pve-realm","maxLength":32,"type":"string"}
export type pverealm = string;
// {"format":"address","maxLength":256,"type":"string"}
export type address_1 = string;
export type Tsslversion = 'tlsv1' | 'tlsv1_1' | 'tlsv1_2' | 'tlsv1_3';
// {"format":"realm-sync-options","type":"string"}
export type realmsyncoptions = string;
// {"pattern":"\\w+=[^,]+(,\\s*\\w+=[^,]+)*","type":"string"}
export type Tsync_attributes = string;
// {"format":"pve-tfa-config","maxLength":128,"type":"string"}
export type pvetfaconfig = string;
export type Ttype_15 = 'ad' | 'ldap' | 'pam' | 'pve';
// {"maxLength":256,"pattern":"\\S{2,}","type":"string"}
export type Tuser_attr = string;
export type Tscope_1 = 'users' | 'groups' | 'both';
// {"maxLength":64,"type":"string"}
export type String0_64 = string;
// {"format":"pve-priv-list","maxLength":64,"type":"string"}
export type pveprivlist_1 = string;
export type Taction_1 = 'delete' | 'new' | 'confirm';
// {"format":"pve-tfa-secret","type":"string"}
export type pvetfasecret = string;
// {"pattern":"(?^:^(?^:[^\\s:/]+)\\@(?^:[A-Za-z][A-Za-z0-9\\.\\-_]+)(?:!(?^:[A-Za-z][A-Za-z0-9\\.\\-_]+))?$)","type":"string"}
export type Tuserid = string;
// {"format":"pve-storage-id-list","type":"string"}
export type pvestorageidlist = string;
export interface Proxmox {
    cluster: {
        /**
         * Cluster index.
         * GET /cluster
         */
        $get(): Promise<any[]>;
        replication: {
            /**
             * List replication jobs.
             * GET /cluster/replication
             */
            $get(): Promise<any[]>;
            /**
             * Create a new replication job
             * POST /cluster/replication
             */
            $post(param: { comment?: String0_4096, disable?: Tdisable, id: pvereplicationjobid, rate?: Trate, remove_job?: Tremove_job, schedule?: pvecalendarevent, source?: pvenode, target: pvenode, type: Ttype }): Promise<null>;
            $(id: string): {
                /**
                 * Mark replication job for removal.
                 * DELETE /cluster/replication/{id}
                 */
                $delete(param: { force?: Tdisable, id: pvereplicationjobid, keep?: Tdisable }): Promise<null>;
                /**
                 * Read replication job configuration.
                 * GET /cluster/replication/{id}
                 */
                $get(param: { id: pvereplicationjobid }): Promise<object>;
                /**
                 * Update replication job configuration.
                 * PUT /cluster/replication/{id}
                 */
                $put(param: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, disable?: Tdisable, id: pvereplicationjobid, rate?: Trate, remove_job?: Tremove_job, schedule?: pvecalendarevent, source?: pvenode }): Promise<null>;
            };
        },
        config: {
            /**
             * Directory index.
             * GET /cluster/config
             */
            $get(): Promise<any[]>;
            /**
             * Generate new cluster configuration. If no links given, default to local IP address as link0.
             * POST /cluster/config
             */
            $post(param: { clustername: pvenode_1, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, nodeid?: integer_Min1, votes?: integer_Min1 }): Promise<string>;
            apiversion: {
                /**
                 * Return the version of the cluster join API available on this node.
                 * GET /cluster/config/apiversion
                 */
                $get(): Promise<number>;
            },
            nodes: {
                /**
                 * Corosync node list.
                 * GET /cluster/config/nodes
                 */
                $get(): Promise<any[]>;
                $(node: string): {
                    /**
                     * Removes a node from the cluster configuration.
                     * DELETE /cluster/config/nodes/{node}
                     */
                    $delete(param: { node: pvenode }): Promise<null>;
                    /**
                     * Adds a node to the cluster configuration. This call is for internal use.
                     * POST /cluster/config/nodes/{node}
                     */
                    $post(param: { apiversion?: integer, force?: Tdisable, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, new_node_ip?: ip, node: pvenode, nodeid?: integer_Min1, votes?: integer_Min0 }): Promise<object>;
                };
            },
            join: {
                /**
                 * Get information needed to join this cluster over the connected node.
                 * GET /cluster/config/join
                 */
                $get(param?: { node?: pvenode }): Promise<object>;
                /**
                 * Joins this node into an existing cluster. If no links are given, default to IP resolved by node's hostname on single link (fallback fails for clusters with multiple links).
                 * POST /cluster/config/join
                 */
                $post(param: { fingerprint: Tfingerprint, force?: Tdisable, hostname: string, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, nodeid?: integer_Min1, password: String0_128, votes?: integer_Min0 }): Promise<string>;
            },
            totem: {
                /**
                 * Get corosync totem protocol settings.
                 * GET /cluster/config/totem
                 */
                $get(): Promise<object>;
            },
            qdevice: {
                /**
                 * Get QDevice status
                 * GET /cluster/config/qdevice
                 */
                $get(): Promise<object>;
            },
        },
        firewall: {
            /**
             * Directory index.
             * GET /cluster/firewall
             */
            $get(): Promise<any[]>;
            groups: {
                /**
                 * List security groups.
                 * GET /cluster/firewall/groups
                 */
                $get(): Promise<any[]>;
                /**
                 * Create new security group.
                 * POST /cluster/firewall/groups
                 */
                $post(param: { comment?: string, digest?: String0_40, group: Tgroup, rename?: Tgroup }): Promise<null>;
                $(group: string): {
                    /**
                     * Delete security group.
                     * DELETE /cluster/firewall/groups/{group}
                     */
                    $delete(param: { group: Tgroup }): Promise<null>;
                    /**
                     * List rules.
                     * GET /cluster/firewall/groups/{group}
                     */
                    $get(param: { group: Tgroup }): Promise<any[]>;
                    /**
                     * Create new rule.
                     * POST /cluster/firewall/groups/{group}
                     */
                    $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, group: Tgroup, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                    $(pos: string): {
                        /**
                         * Delete rule.
                         * DELETE /cluster/firewall/groups/{group}/{pos}
                         */
                        $delete(param: { digest?: String0_40, group: Tgroup, pos?: integer_Min0 }): Promise<null>;
                        /**
                         * Get single rule data.
                         * GET /cluster/firewall/groups/{group}/{pos}
                         */
                        $get(param: { group: Tgroup, pos?: integer_Min0 }): Promise<object>;
                        /**
                         * Modify rule data.
                         * PUT /cluster/firewall/groups/{group}/{pos}
                         */
                        $put(param: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, group: Tgroup, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                    };
                };
            },
            rules: {
                /**
                 * List rules.
                 * GET /cluster/firewall/rules
                 */
                $get(): Promise<any[]>;
                /**
                 * Create new rule.
                 * POST /cluster/firewall/rules
                 */
                $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                $(pos: string): {
                    /**
                     * Delete rule.
                     * DELETE /cluster/firewall/rules/{pos}
                     */
                    $delete(param?: { digest?: String0_40, pos?: integer_Min0 }): Promise<null>;
                    /**
                     * Get single rule data.
                     * GET /cluster/firewall/rules/{pos}
                     */
                    $get(param?: { pos?: integer_Min0 }): Promise<object>;
                    /**
                     * Modify rule data.
                     * PUT /cluster/firewall/rules/{pos}
                     */
                    $put(param?: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                };
            },
            ipset: {
                /**
                 * List IPSets
                 * GET /cluster/firewall/ipset
                 */
                $get(): Promise<any[]>;
                /**
                 * Create new IPSet
                 * POST /cluster/firewall/ipset
                 */
                $post(param: { comment?: string, digest?: String0_40, name: Tname, rename?: Tname }): Promise<null>;
                $(name: string): {
                    /**
                     * Delete IPSet
                     * DELETE /cluster/firewall/ipset/{name}
                     */
                    $delete(param: { name: Tname }): Promise<null>;
                    /**
                     * List IPSet content
                     * GET /cluster/firewall/ipset/{name}
                     */
                    $get(param: { name: Tname }): Promise<any[]>;
                    /**
                     * Add IP or Network to IPSet.
                     * POST /cluster/firewall/ipset/{name}
                     */
                    $post(param: { cidr: IPorCIDRorAlias, comment?: string, name: Tname, nomatch?: Tdisable }): Promise<null>;
                    $(cidr: string): {
                        /**
                         * Remove IP or Network from IPSet.
                         * DELETE /cluster/firewall/ipset/{name}/{cidr}
                         */
                        $delete(param: { cidr: IPorCIDRorAlias, digest?: String0_40, name: Tname }): Promise<null>;
                        /**
                         * Read IP or Network settings from IPSet.
                         * GET /cluster/firewall/ipset/{name}/{cidr}
                         */
                        $get(param: { cidr: IPorCIDRorAlias, name: Tname }): Promise<object>;
                        /**
                         * Update IP or Network settings
                         * PUT /cluster/firewall/ipset/{name}/{cidr}
                         */
                        $put(param: { cidr: IPorCIDRorAlias, comment?: string, digest?: String0_40, name: Tname, nomatch?: Tdisable }): Promise<null>;
                    };
                };
            },
            aliases: {
                /**
                 * List aliases
                 * GET /cluster/firewall/aliases
                 */
                $get(): Promise<any[]>;
                /**
                 * Create IP or Network Alias.
                 * POST /cluster/firewall/aliases
                 */
                $post(param: { cidr: IPorCIDR, comment?: string, name: Tname }): Promise<null>;
                $(name: string): {
                    /**
                     * Remove IP or Network alias.
                     * DELETE /cluster/firewall/aliases/{name}
                     */
                    $delete(param: { digest?: String0_40, name: Tname }): Promise<null>;
                    /**
                     * Read alias.
                     * GET /cluster/firewall/aliases/{name}
                     */
                    $get(param: { name: Tname }): Promise<object>;
                    /**
                     * Update IP or Network alias.
                     * PUT /cluster/firewall/aliases/{name}
                     */
                    $put(param: { cidr: IPorCIDR, comment?: string, digest?: String0_40, name: Tname, rename?: Tname }): Promise<null>;
                };
            },
            options: {
                /**
                 * Get Firewall options.
                 * GET /cluster/firewall/options
                 */
                $get(): Promise<object>;
                /**
                 * Set Firewall options.
                 * PUT /cluster/firewall/options
                 */
                $put(param?: { delete?: pveconfigidlist_1, digest?: String0_40, ebtables?: Tdisable, enable?: integer_Min0, log_ratelimit?: Tlog_ratelimit, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in }): Promise<null>;
            },
            macros: {
                /**
                 * List available macros
                 * GET /cluster/firewall/macros
                 */
                $get(): Promise<any[]>;
            },
            refs: {
                /**
                 * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                 * GET /cluster/firewall/refs
                 */
                $get(param?: { type?: Ttype_2 }): Promise<any[]>;
            },
        },
        backup: {
            /**
             * List vzdump backup schedule.
             * GET /cluster/backup
             */
            $get(): Promise<any[]>;
            /**
             * Create new vzdump backup job.
             * POST /cluster/backup
             */
            $post(param: { all?: Tdisable, bwlimit?: integer_Min0, compress?: Tcompress, dow?: pvedayofweeklist, dumpdir?: string, enabled?: Tdisable, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: Tdisable, remove?: Tdisable, script?: string, size?: integer_Min500, starttime: Tstarttime, stdexcludes?: Tdisable, stop?: Tdisable, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<null>;
            $(id: string): {
                /**
                 * Delete vzdump backup job definition.
                 * DELETE /cluster/backup/{id}
                 */
                $delete(param: { id: String0_50 }): Promise<null>;
                /**
                 * Read vzdump backup job definition.
                 * GET /cluster/backup/{id}
                 */
                $get(param: { id: String0_50 }): Promise<object>;
                /**
                 * Update vzdump backup job definition.
                 * PUT /cluster/backup/{id}
                 */
                $put(param: { all?: Tdisable, bwlimit?: integer_Min0, compress?: Tcompress, delete?: pveconfigidlist_1, dow?: pvedayofweeklist, dumpdir?: string, enabled?: Tdisable, exclude?: pvevmidlist, 'exclude-path'?: stringalist, id: String0_50, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: Tdisable, remove?: Tdisable, script?: string, size?: integer_Min500, starttime: Tstarttime, stdexcludes?: Tdisable, stop?: Tdisable, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<null>;
                included_volumes: {
                    /**
                     * Returns included guests and the backup status of their disks. Optimized to be used in ExtJS tree views.
                     * GET /cluster/backup/{id}/included_volumes
                     */
                    $get(param: { id: String0_50 }): Promise<object>;
                },
            };
        },
        backupinfo: {
            /**
             * Stub, waits for future use.
             * GET /cluster/backupinfo
             */
            $get(): Promise<string>;
            not_backed_up: {
                /**
                 * Shows all guests which are not covered by any backup job.
                 * GET /cluster/backupinfo/not_backed_up
                 */
                $get(): Promise<any[]>;
            },
        },
        ha: {
            /**
             * Directory index.
             * GET /cluster/ha
             */
            $get(): Promise<any[]>;
            resources: {
                /**
                 * List HA resources.
                 * GET /cluster/ha/resources
                 */
                $get(param?: { type?: Ttype_3 }): Promise<any[]>;
                /**
                 * Create a new HA resource.
                 * POST /cluster/ha/resources
                 */
                $post(param: { comment?: String0_4096, group?: pveconfigid, max_relocate?: integer_Min0, max_restart?: integer_Min0, sid: pveharesourceorvmid, state?: Tstate, type?: Ttype_3 }): Promise<null>;
                $(sid: string): {
                    /**
                     * Delete resource configuration.
                     * DELETE /cluster/ha/resources/{sid}
                     */
                    $delete(param: { sid: pveharesourceorvmid }): Promise<null>;
                    /**
                     * Read resource configuration.
                     * GET /cluster/ha/resources/{sid}
                     */
                    $get(param: { sid: pveharesourceorvmid }): Promise<object>;
                    /**
                     * Update resource configuration.
                     * PUT /cluster/ha/resources/{sid}
                     */
                    $put(param: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, group?: pveconfigid, max_relocate?: integer_Min0, max_restart?: integer_Min0, sid: pveharesourceorvmid, state?: Tstate }): Promise<null>;
                    migrate: {
                        /**
                         * Request resource migration (online) to another node.
                         * POST /cluster/ha/resources/{sid}/migrate
                         */
                        $post(param: { node: pvenode, sid: pveharesourceorvmid }): Promise<null>;
                    },
                    relocate: {
                        /**
                         * Request resource relocatzion to another node. This stops the service on the old node, and restarts it on the target node.
                         * POST /cluster/ha/resources/{sid}/relocate
                         */
                        $post(param: { node: pvenode, sid: pveharesourceorvmid }): Promise<null>;
                    },
                };
            },
            groups: {
                /**
                 * Get HA groups.
                 * GET /cluster/ha/groups
                 */
                $get(): Promise<any[]>;
                /**
                 * Create a new HA group.
                 * POST /cluster/ha/groups
                 */
                $post(param: { comment?: String0_4096, group: pveconfigid, nodes: pvehagroupnodelist, nofailback?: Tdisable, restricted?: Trestricted, type?: Ttype_4 }): Promise<null>;
                $(group: string): {
                    /**
                     * Delete ha group configuration.
                     * DELETE /cluster/ha/groups/{group}
                     */
                    $delete(param: { group: pveconfigid }): Promise<null>;
                    /**
                     * Read ha group configuration.
                     * GET /cluster/ha/groups/{group}
                     */
                    $get(param: { group: pveconfigid }): Promise<any>;
                    /**
                     * Update ha group configuration.
                     * PUT /cluster/ha/groups/{group}
                     */
                    $put(param: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, group: pveconfigid, nodes?: pvehagroupnodelist, nofailback?: Tdisable, restricted?: Trestricted }): Promise<null>;
                };
            },
            status: {
                /**
                 * Directory index.
                 * GET /cluster/ha/status
                 */
                $get(): Promise<any[]>;
                current: {
                    /**
                     * Get HA manger status.
                     * GET /cluster/ha/status/current
                     */
                    $get(): Promise<any[]>;
                },
                manager_status: {
                    /**
                     * Get full HA manger status, including LRM status.
                     * GET /cluster/ha/status/manager_status
                     */
                    $get(): Promise<object>;
                },
            },
        },
        acme: {
            /**
             * ACMEAccount index.
             * GET /cluster/acme
             */
            $get(): Promise<any[]>;
            plugins: {
                /**
                 * ACME plugin index.
                 * GET /cluster/acme/plugins
                 */
                $get(param?: { type?: Ttype_5 }): Promise<any[]>;
                /**
                 * Add ACME plugin configuration.
                 * POST /cluster/acme/plugins
                 */
                $post(param: { api?: Tapi, data?: string, disable?: Tdisable, id: pveconfigid, nodes?: pvenodelist, type: Ttype_5, 'validation-delay'?: integer0_172800 }): Promise<null>;
                $(id: string): {
                    /**
                     * Delete ACME plugin configuration.
                     * DELETE /cluster/acme/plugins/{id}
                     */
                    $delete(param: { id: pveconfigid }): Promise<null>;
                    /**
                     * Get ACME plugin configuration.
                     * GET /cluster/acme/plugins/{id}
                     */
                    $get(param: { id: pveconfigid }): Promise<object>;
                    /**
                     * Update ACME plugin configuration.
                     * PUT /cluster/acme/plugins/{id}
                     */
                    $put(param: { api?: Tapi, data?: string, delete?: pveconfigidlist, digest?: String0_40, disable?: Tdisable, id: pveconfigid, nodes?: pvenodelist, 'validation-delay'?: integer0_172800 }): Promise<null>;
                };
            },
            account: {
                /**
                 * ACMEAccount index.
                 * GET /cluster/acme/account
                 */
                $get(): Promise<any[]>;
                /**
                 * Register a new ACME account with CA.
                 * POST /cluster/acme/account
                 */
                $post(param: { contact: emaillist, directory?: Tdirectory, name?: pveconfigid, tos_url?: string }): Promise<string>;
                $(name: string): {
                    /**
                     * Deactivate existing ACME account at CA.
                     * DELETE /cluster/acme/account/{name}
                     */
                    $delete(param?: { name?: pveconfigid }): Promise<string>;
                    /**
                     * Return existing ACME account information.
                     * GET /cluster/acme/account/{name}
                     */
                    $get(param?: { name?: pveconfigid }): Promise<object>;
                    /**
                     * Update existing ACME account information with CA. Note: not specifying any new account information triggers a refresh.
                     * PUT /cluster/acme/account/{name}
                     */
                    $put(param?: { contact?: emaillist, name?: pveconfigid }): Promise<string>;
                };
            },
            tos: {
                /**
                 * Retrieve ACME TermsOfService URL from CA.
                 * GET /cluster/acme/tos
                 */
                $get(param?: { directory?: Tdirectory }): Promise<string>;
            },
            directories: {
                /**
                 * Get named known ACME directory endpoints.
                 * GET /cluster/acme/directories
                 */
                $get(): Promise<any[]>;
            },
            'challenge-schema': {
                /**
                 * Get schema of ACME challenge types.
                 * GET /cluster/acme/challenge-schema
                 */
                $get(): Promise<any[]>;
            },
        },
        ceph: {
            /**
             * Cluster ceph index.
             * GET /cluster/ceph
             */
            $get(): Promise<any[]>;
            metadata: {
                /**
                 * Get ceph metadata.
                 * GET /cluster/ceph/metadata
                 */
                $get(param?: { scope?: Tscope }): Promise<object>;
            },
            status: {
                /**
                 * Get ceph status.
                 * GET /cluster/ceph/status
                 */
                $get(): Promise<object>;
            },
            flags: {
                /**
                 * get the status of all ceph flags
                 * GET /cluster/ceph/flags
                 */
                $get(): Promise<any[]>;
                /**
                 * Set/Unset multiple ceph flags at once.
                 * PUT /cluster/ceph/flags
                 */
                $put(param?: { nobackfill?: Tdisable, 'nodeep-scrub'?: Tdisable, nodown?: Tdisable, noin?: Tdisable, noout?: Tdisable, norebalance?: Tdisable, norecover?: Tdisable, noscrub?: Tdisable, notieragent?: Tdisable, noup?: Tdisable, pause?: Tdisable }): Promise<string>;
                $(flag: string): {
                    /**
                     * Get the status of a specific ceph flag.
                     * GET /cluster/ceph/flags/{flag}
                     */
                    $get(param: { flag: Tflag }): Promise<boolean>;
                    /**
                     * Set or clear (unset) a specific ceph flag
                     * PUT /cluster/ceph/flags/{flag}
                     */
                    $put(param: { flag: Tflag, value: Tdisable }): Promise<null>;
                };
            },
        },
        sdn: {
            /**
             * Directory index.
             * GET /cluster/sdn
             */
            $get(): Promise<any[]>;
            /**
             * Apply sdn controller changes && reload.
             * PUT /cluster/sdn
             */
            $put(): Promise<string>;
            vnets: {
                /**
                 * SDN vnets index.
                 * GET /cluster/sdn/vnets
                 */
                $get(): Promise<any[]>;
                /**
                 * Create a new sdn vnet object.
                 * POST /cluster/sdn/vnets
                 */
                $post(param: { alias?: string, ipv4?: CIDRv4, ipv6?: CIDRv6, mac?: macaddr, tag?: integer, type?: Ttype_6, vlanaware?: Tdisable, vnet: pvesdnvnetid, zone: string }): Promise<null>;
                $(vnet: string): {
                    /**
                     * Delete sdn vnet object configuration.
                     * DELETE /cluster/sdn/vnets/{vnet}
                     */
                    $delete(param: { vnet: pvesdnvnetid }): Promise<null>;
                    /**
                     * Read sdn vnet configuration.
                     * GET /cluster/sdn/vnets/{vnet}
                     */
                    $get(param: { vnet: pvesdnvnetid }): Promise<object>;
                    /**
                     * Update sdn vnet object configuration.
                     * PUT /cluster/sdn/vnets/{vnet}
                     */
                    $put(param: { alias?: string, delete?: pveconfigidlist, digest?: String0_40, ipv4?: CIDRv4, ipv6?: CIDRv6, mac?: macaddr, tag?: integer, vlanaware?: Tdisable, vnet: pvesdnvnetid, zone?: string }): Promise<null>;
                };
            },
            zones: {
                /**
                 * SDN zones index.
                 * GET /cluster/sdn/zones
                 */
                $get(param?: { type?: Ttype_7 }): Promise<any[]>;
                /**
                 * Create a new sdn zone object.
                 * POST /cluster/sdn/zones
                 */
                $post(param: { bridge?: string, controller?: string, 'dp-id'?: integer, mtu?: integer, nodes?: pvenodelist, peers?: iplist, tag?: integer_Min0, type: pveconfigid_1, 'vlan-protocol'?: Tvlanprotocol, 'vrf-vxlan'?: integer, zone: pvesdnzoneid }): Promise<null>;
                $(zone: string): {
                    /**
                     * Delete sdn zone object configuration.
                     * DELETE /cluster/sdn/zones/{zone}
                     */
                    $delete(param: { zone: pvesdnzoneid }): Promise<null>;
                    /**
                     * Read sdn zone configuration.
                     * GET /cluster/sdn/zones/{zone}
                     */
                    $get(param: { zone: pvesdnzoneid }): Promise<object>;
                    /**
                     * Update sdn zone object configuration.
                     * PUT /cluster/sdn/zones/{zone}
                     */
                    $put(param: { bridge?: string, controller?: string, delete?: pveconfigidlist, digest?: String0_40, 'dp-id'?: integer, mtu?: integer, nodes?: pvenodelist, peers?: iplist, tag?: integer_Min0, 'vlan-protocol'?: Tvlanprotocol, 'vrf-vxlan'?: integer, zone: pvesdnzoneid }): Promise<null>;
                };
            },
            controllers: {
                /**
                 * SDN controllers index.
                 * GET /cluster/sdn/controllers
                 */
                $get(param?: { type?: Ttype_8 }): Promise<any[]>;
                /**
                 * Create a new sdn controller object.
                 * POST /cluster/sdn/controllers
                 */
                $post(param: { asn?: integer, controller: pvesdncontrollerid, 'gateway-external-peers'?: iplist, 'gateway-nodes'?: pvenodelist, peers?: iplist, type: pveconfigid_2 }): Promise<null>;
                $(controller: string): {
                    /**
                     * Delete sdn controller object configuration.
                     * DELETE /cluster/sdn/controllers/{controller}
                     */
                    $delete(param: { controller: pvesdncontrollerid }): Promise<null>;
                    /**
                     * Read sdn controller configuration.
                     * GET /cluster/sdn/controllers/{controller}
                     */
                    $get(param: { controller: pvesdncontrollerid }): Promise<object>;
                    /**
                     * Update sdn controller object configuration.
                     * PUT /cluster/sdn/controllers/{controller}
                     */
                    $put(param: { asn?: integer, controller: pvesdncontrollerid, delete?: pveconfigidlist, digest?: String0_40, 'gateway-external-peers'?: iplist, 'gateway-nodes'?: pvenodelist, peers?: iplist }): Promise<null>;
                };
            },
        },
        log: {
            /**
             * Read cluster log
             * GET /cluster/log
             */
            $get(param?: { max?: integer_Min1 }): Promise<any[]>;
        },
        resources: {
            /**
             * Resources index (cluster wide).
             * GET /cluster/resources
             */
            $get(param?: { type?: Ttype_9 }): Promise<any[]>;
        },
        tasks: {
            /**
             * List recent tasks (cluster wide).
             * GET /cluster/tasks
             */
            $get(): Promise<any[]>;
        },
        options: {
            /**
             * Get datacenter options.
             * GET /cluster/options
             */
            $get(): Promise<object>;
            /**
             * Set datacenter options.
             * PUT /cluster/options
             */
            $put(param?: { bwlimit?: Tbwlimit, console?: Tconsole, delete?: pveconfigidlist_1, email_from?: emailopt, fencing?: Tfencing, ha?: Tha, http_proxy?: Thttp_proxy, keyboard?: Tkeyboard, language?: Tlanguage, mac_prefix?: macprefix, max_workers?: integer_Min1, migration?: Tmigration, migration_unsecure?: Tdisable, u2f?: Tu2f }): Promise<null>;
        },
        status: {
            /**
             * Get cluster status information.
             * GET /cluster/status
             */
            $get(): Promise<any[]>;
        },
        nextid: {
            /**
             * Get next free VMID. If you pass an VMID it will raise an error if the ID is already used.
             * GET /cluster/nextid
             */
            $get(param?: { vmid?: pvevmid }): Promise<number>;
        },
    },
    nodes: {
        /**
         * Cluster node index.
         * GET /nodes
         */
        $get(): Promise<any[]>;
        $(node: string): {
            /**
             * Node index.
             * GET /nodes/{node}
             */
            $get(param: { node: pvenode }): Promise<any[]>;
            qemu: {
                /**
                 * Virtual machine index (per node).
                 * GET /nodes/{node}/qemu
                 */
                $get(param: { full?: Tdisable, node: pvenode }): Promise<any[]>;
                /**
                 * Create or restore a virtual machine.
                 * POST /nodes/{node}/qemu
                 */
                $post(param: { acpi?: Tdisable, agent?: Tagent, arch?: Tarch, archive?: String0_255, args?: Targs, audio0?: Taudio0, autostart?: Tdisable, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, bwlimit?: integer_Min0, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, description?: string, efidisk0?: Tefidisk0, force?: Tdisable, freeze?: Tdisable, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: Tdisable, localtime?: Tdisable, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, node: pvenode, numa?: Tdisable, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: Tdisable, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, pool?: pvepoolid, protection?: Tdisable, reboot?: Tdisable, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, start?: Tdisable, startdate?: Tstartdate, startup?: pvestartuporder, storage?: pvestorageid, tablet?: Ttablet, tags?: pvetaglist, tdf?: Tdisable, template?: Tdisable, unique?: Tdisable, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmid: pvevmid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<string>;
                $(vmid: string): {
                    /**
                     * Destroy the vm (also delete all used/owned volumes).
                     * DELETE /nodes/{node}/qemu/{vmid}
                     */
                    $delete(param: { node: pvenode, purge?: Tdisable, skiplock?: Tdisable, vmid: pvevmid }): Promise<string>;
                    /**
                     * Directory index
                     * GET /nodes/{node}/qemu/{vmid}
                     */
                    $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                    firewall: {
                        /**
                         * Directory index.
                         * GET /nodes/{node}/qemu/{vmid}/firewall
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        rules: {
                            /**
                             * List rules.
                             * GET /nodes/{node}/qemu/{vmid}/firewall/rules
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                            /**
                             * Create new rule.
                             * POST /nodes/{node}/qemu/{vmid}/firewall/rules
                             */
                            $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, node: pvenode, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1, vmid: pvevmid }): Promise<null>;
                            $(pos: string): {
                                /**
                                 * Delete rule.
                                 * DELETE /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
                                 */
                                $delete(param: { digest?: String0_40, node: pvenode, pos?: integer_Min0, vmid: pvevmid }): Promise<null>;
                                /**
                                 * Get single rule data.
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
                                 */
                                $get(param: { node: pvenode, pos?: integer_Min0, vmid: pvevmid }): Promise<object>;
                                /**
                                 * Modify rule data.
                                 * PUT /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
                                 */
                                $put(param: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, node: pvenode, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1, vmid: pvevmid }): Promise<null>;
                            };
                        },
                        aliases: {
                            /**
                             * List aliases
                             * GET /nodes/{node}/qemu/{vmid}/firewall/aliases
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                            /**
                             * Create IP or Network Alias.
                             * POST /nodes/{node}/qemu/{vmid}/firewall/aliases
                             */
                            $post(param: { cidr: IPorCIDR, comment?: string, name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Remove IP or Network alias.
                                 * DELETE /nodes/{node}/qemu/{vmid}/firewall/aliases/{name}
                                 */
                                $delete(param: { digest?: String0_40, name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                                /**
                                 * Read alias.
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/aliases/{name}
                                 */
                                $get(param: { name: Tname, node: pvenode, vmid: pvevmid }): Promise<object>;
                                /**
                                 * Update IP or Network alias.
                                 * PUT /nodes/{node}/qemu/{vmid}/firewall/aliases/{name}
                                 */
                                $put(param: { cidr: IPorCIDR, comment?: string, digest?: String0_40, name: Tname, node: pvenode, rename?: Tname, vmid: pvevmid }): Promise<null>;
                            };
                        },
                        ipset: {
                            /**
                             * List IPSets
                             * GET /nodes/{node}/qemu/{vmid}/firewall/ipset
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                            /**
                             * Create new IPSet
                             * POST /nodes/{node}/qemu/{vmid}/firewall/ipset
                             */
                            $post(param: { comment?: string, digest?: String0_40, name: Tname, node: pvenode, rename?: Tname, vmid: pvevmid }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Delete IPSet
                                 * DELETE /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                 */
                                $delete(param: { name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                                /**
                                 * List IPSet content
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                 */
                                $get(param: { name: Tname, node: pvenode, vmid: pvevmid }): Promise<any[]>;
                                /**
                                 * Add IP or Network to IPSet.
                                 * POST /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                 */
                                $post(param: { cidr: IPorCIDRorAlias, comment?: string, name: Tname, node: pvenode, nomatch?: Tdisable, vmid: pvevmid }): Promise<null>;
                                $(cidr: string): {
                                    /**
                                     * Remove IP or Network from IPSet.
                                     * DELETE /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}/{cidr}
                                     */
                                    $delete(param: { cidr: IPorCIDRorAlias, digest?: String0_40, name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                                    /**
                                     * Read IP or Network settings from IPSet.
                                     * GET /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}/{cidr}
                                     */
                                    $get(param: { cidr: IPorCIDRorAlias, name: Tname, node: pvenode, vmid: pvevmid }): Promise<object>;
                                    /**
                                     * Update IP or Network settings
                                     * PUT /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}/{cidr}
                                     */
                                    $put(param: { cidr: IPorCIDRorAlias, comment?: string, digest?: String0_40, name: Tname, node: pvenode, nomatch?: Tdisable, vmid: pvevmid }): Promise<null>;
                                };
                            };
                        },
                        options: {
                            /**
                             * Get VM firewall options.
                             * GET /nodes/{node}/qemu/{vmid}/firewall/options
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                            /**
                             * Set Firewall options.
                             * PUT /nodes/{node}/qemu/{vmid}/firewall/options
                             */
                            $put(param: { delete?: pveconfigidlist_1, dhcp?: Tdisable, digest?: String0_40, enable?: Tdisable, ipfilter?: Tdisable, log_level_in?: Tlog, log_level_out?: Tlog, macfilter?: Tdisable, ndp?: Tdisable, node: pvenode, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in, radv?: Tdisable, vmid: pvevmid }): Promise<null>;
                        },
                        log: {
                            /**
                             * Read firewall log
                             * GET /nodes/{node}/qemu/{vmid}/firewall/log
                             */
                            $get(param: { limit?: integer_Min0, node: pvenode, start?: integer_Min0, vmid: pvevmid }): Promise<any[]>;
                        },
                        refs: {
                            /**
                             * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                             * GET /nodes/{node}/qemu/{vmid}/firewall/refs
                             */
                            $get(param: { node: pvenode, type?: Ttype_2, vmid: pvevmid }): Promise<any[]>;
                        },
                    },
                    agent: {
                        /**
                         * Qemu Agent command index.
                         * GET /nodes/{node}/qemu/{vmid}/agent
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        /**
                         * Execute Qemu Guest Agent commands.
                         * POST /nodes/{node}/qemu/{vmid}/agent
                         */
                        $post(param: { command: Tcommand, node: pvenode, vmid: pvevmid }): Promise<object>;
                        'fsfreeze-freeze': {
                            /**
                             * Execute fsfreeze-freeze.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fsfreeze-freeze
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'fsfreeze-status': {
                            /**
                             * Execute fsfreeze-status.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fsfreeze-status
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'fsfreeze-thaw': {
                            /**
                             * Execute fsfreeze-thaw.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fsfreeze-thaw
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        fstrim: {
                            /**
                             * Execute fstrim.
                             * POST /nodes/{node}/qemu/{vmid}/agent/fstrim
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-fsinfo': {
                            /**
                             * Execute get-fsinfo.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-fsinfo
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-host-name': {
                            /**
                             * Execute get-host-name.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-host-name
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-memory-block-info': {
                            /**
                             * Execute get-memory-block-info.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-memory-block-info
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-memory-blocks': {
                            /**
                             * Execute get-memory-blocks.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-memory-blocks
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-osinfo': {
                            /**
                             * Execute get-osinfo.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-osinfo
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-time': {
                            /**
                             * Execute get-time.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-time
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-timezone': {
                            /**
                             * Execute get-timezone.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-timezone
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-users': {
                            /**
                             * Execute get-users.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-users
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'get-vcpus': {
                            /**
                             * Execute get-vcpus.
                             * GET /nodes/{node}/qemu/{vmid}/agent/get-vcpus
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        info: {
                            /**
                             * Execute info.
                             * GET /nodes/{node}/qemu/{vmid}/agent/info
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'network-get-interfaces': {
                            /**
                             * Execute network-get-interfaces.
                             * GET /nodes/{node}/qemu/{vmid}/agent/network-get-interfaces
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        ping: {
                            /**
                             * Execute ping.
                             * POST /nodes/{node}/qemu/{vmid}/agent/ping
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        shutdown: {
                            /**
                             * Execute shutdown.
                             * POST /nodes/{node}/qemu/{vmid}/agent/shutdown
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'suspend-disk': {
                            /**
                             * Execute suspend-disk.
                             * POST /nodes/{node}/qemu/{vmid}/agent/suspend-disk
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'suspend-hybrid': {
                            /**
                             * Execute suspend-hybrid.
                             * POST /nodes/{node}/qemu/{vmid}/agent/suspend-hybrid
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'suspend-ram': {
                            /**
                             * Execute suspend-ram.
                             * POST /nodes/{node}/qemu/{vmid}/agent/suspend-ram
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'set-user-password': {
                            /**
                             * Sets the password for the given user to the given password
                             * POST /nodes/{node}/qemu/{vmid}/agent/set-user-password
                             */
                            $post(param: { crypted?: Tdisable, node: pvenode, password: String5_1024, username: string, vmid: pvevmid }): Promise<object>;
                        },
                        exec: {
                            /**
                             * Executes the given command in the vm via the guest-agent and returns an object with the pid.
                             * POST /nodes/{node}/qemu/{vmid}/agent/exec
                             */
                            $post(param: { command?: stringalist, 'input-data'?: String0_65536, node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'exec-status': {
                            /**
                             * Gets the status of the given pid started by the guest-agent
                             * GET /nodes/{node}/qemu/{vmid}/agent/exec-status
                             */
                            $get(param: { node: pvenode, pid: integer, vmid: pvevmid }): Promise<object>;
                        },
                        'file-read': {
                            /**
                             * Reads the given file via guest agent. Is limited to 16777216 bytes.
                             * GET /nodes/{node}/qemu/{vmid}/agent/file-read
                             */
                            $get(param: { file: string, node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        'file-write': {
                            /**
                             * Writes the given file via guest agent.
                             * POST /nodes/{node}/qemu/{vmid}/agent/file-write
                             */
                            $post(param: { content: String0_61440, file: string, node: pvenode, vmid: pvevmid }): Promise<null>;
                        },
                    },
                    rrd: {
                        /**
                         * Read VM RRD statistics (returns PNG)
                         * GET /nodes/{node}/qemu/{vmid}/rrd
                         */
                        $get(param: { cf?: Tcf, ds: pveconfigidlist_1, node: pvenode, timeframe: Ttimeframe, vmid: pvevmid }): Promise<object>;
                    },
                    rrddata: {
                        /**
                         * Read VM RRD statistics
                         * GET /nodes/{node}/qemu/{vmid}/rrddata
                         */
                        $get(param: { cf?: Tcf, node: pvenode, timeframe: Ttimeframe, vmid: pvevmid }): Promise<any[]>;
                    },
                    config: {
                        /**
                         * Get the virtual machine configuration with pending configuration changes applied. Set the 'current' parameter to get the current configuration instead.
                         * GET /nodes/{node}/qemu/{vmid}/config
                         */
                        $get(param: { current?: Tdisable, node: pvenode, snapshot?: pveconfigid_3, vmid: pvevmid }): Promise<object>;
                        /**
                         * Set virtual machine options (asynchrounous API).
                         * POST /nodes/{node}/qemu/{vmid}/config
                         */
                        $post(param: { acpi?: Tdisable, agent?: Tagent, arch?: Tarch, args?: Targs, audio0?: Taudio0, autostart?: Tdisable, background_delay?: integer1_30, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, efidisk0?: Tefidisk0, force?: Tdisable, freeze?: Tdisable, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: Tdisable, localtime?: Tdisable, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, node: pvenode, numa?: Tdisable, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: Tdisable, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, protection?: Tdisable, reboot?: Tdisable, revert?: pveconfigidlist_1, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, skiplock?: Tdisable, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, startdate?: Tstartdate, startup?: pvestartuporder, tablet?: Ttablet, tags?: pvetaglist, tdf?: Tdisable, template?: Tdisable, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmid: pvevmid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<string>;
                        /**
                         * Set virtual machine options (synchrounous API) - You should consider using the POST method instead for any actions involving hotplug or storage allocation.
                         * PUT /nodes/{node}/qemu/{vmid}/config
                         */
                        $put(param: { acpi?: Tdisable, agent?: Tagent, arch?: Tarch, args?: Targs, audio0?: Taudio0, autostart?: Tdisable, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, efidisk0?: Tefidisk0, force?: Tdisable, freeze?: Tdisable, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: Tdisable, localtime?: Tdisable, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, node: pvenode, numa?: Tdisable, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: Tdisable, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, protection?: Tdisable, reboot?: Tdisable, revert?: pveconfigidlist_1, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, skiplock?: Tdisable, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, startdate?: Tstartdate, startup?: pvestartuporder, tablet?: Ttablet, tags?: pvetaglist, tdf?: Tdisable, template?: Tdisable, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmid: pvevmid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<null>;
                    },
                    pending: {
                        /**
                         * Get the virtual machine configuration with both current and pending values.
                         * GET /nodes/{node}/qemu/{vmid}/pending
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                    },
                    unlink: {
                        /**
                         * Unlink/delete disk images.
                         * PUT /nodes/{node}/qemu/{vmid}/unlink
                         */
                        $put(param: { force?: Tdisable, idlist: pveconfigidlist_1, node: pvenode, vmid: pvevmid }): Promise<null>;
                    },
                    vncproxy: {
                        /**
                         * Creates a TCP VNC proxy connections.
                         * POST /nodes/{node}/qemu/{vmid}/vncproxy
                         */
                        $post(param: { 'generate-password'?: Tdisable, node: pvenode, vmid: pvevmid, websocket?: Tdisable }): Promise<any>;
                    },
                    termproxy: {
                        /**
                         * Creates a TCP proxy connections.
                         * POST /nodes/{node}/qemu/{vmid}/termproxy
                         */
                        $post(param: { node: pvenode, serial?: Tserial_1, vmid: pvevmid }): Promise<any>;
                    },
                    vncwebsocket: {
                        /**
                         * Opens a weksocket for VNC traffic.
                         * GET /nodes/{node}/qemu/{vmid}/vncwebsocket
                         */
                        $get(param: { node: pvenode, port: integer5900_5999, vmid: pvevmid, vncticket: String0_512 }): Promise<object>;
                    },
                    spiceproxy: {
                        /**
                         * Returns a SPICE configuration to connect to the VM.
                         * POST /nodes/{node}/qemu/{vmid}/spiceproxy
                         */
                        $post(param: { node: pvenode, proxy?: address, vmid: pvevmid }): Promise<any>;
                    },
                    status: {
                        /**
                         * Directory index
                         * GET /nodes/{node}/qemu/{vmid}/status
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        current: {
                            /**
                             * Get virtual machine status.
                             * GET /nodes/{node}/qemu/{vmid}/status/current
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        start: {
                            /**
                             * Start virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/start
                             */
                            $post(param: { 'force-cpu'?: string, machine?: Tmachine, migratedfrom?: pvenode, migration_network?: CIDR, migration_type?: Tmigration_type, node: pvenode, skiplock?: Tdisable, stateuri?: String0_128, targetstorage?: storagepairlist, timeout?: integer_Min0, vmid: pvevmid }): Promise<string>;
                        },
                        stop: {
                            /**
                             * Stop virtual machine. The qemu process will exit immediately. Thisis akin to pulling the power plug of a running computer and may damage the VM data
                             * POST /nodes/{node}/qemu/{vmid}/status/stop
                             */
                            $post(param: { keepActive?: Tdisable, migratedfrom?: pvenode, node: pvenode, skiplock?: Tdisable, timeout?: integer_Min0, vmid: pvevmid }): Promise<string>;
                        },
                        reset: {
                            /**
                             * Reset virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/reset
                             */
                            $post(param: { node: pvenode, skiplock?: Tdisable, vmid: pvevmid }): Promise<string>;
                        },
                        shutdown: {
                            /**
                             * Shutdown virtual machine. This is similar to pressing the power button on a physical machine.This will send an ACPI event for the guest OS, which should then proceed to a clean shutdown.
                             * POST /nodes/{node}/qemu/{vmid}/status/shutdown
                             */
                            $post(param: { forceStop?: Tdisable, keepActive?: Tdisable, node: pvenode, skiplock?: Tdisable, timeout?: integer_Min0, vmid: pvevmid }): Promise<string>;
                        },
                        reboot: {
                            /**
                             * Reboot the VM by shutting it down, and starting it again. Applies pending changes.
                             * POST /nodes/{node}/qemu/{vmid}/status/reboot
                             */
                            $post(param: { node: pvenode, timeout?: integer_Min0, vmid: pvevmid }): Promise<string>;
                        },
                        suspend: {
                            /**
                             * Suspend virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/suspend
                             */
                            $post(param: { node: pvenode, skiplock?: Tdisable, statestorage?: pvestorageid, todisk?: Tdisable, vmid: pvevmid }): Promise<string>;
                        },
                        resume: {
                            /**
                             * Resume virtual machine.
                             * POST /nodes/{node}/qemu/{vmid}/status/resume
                             */
                            $post(param: { nocheck?: Tdisable, node: pvenode, skiplock?: Tdisable, vmid: pvevmid }): Promise<string>;
                        },
                    },
                    sendkey: {
                        /**
                         * Send key event to virtual machine.
                         * PUT /nodes/{node}/qemu/{vmid}/sendkey
                         */
                        $put(param: { key: string, node: pvenode, skiplock?: Tdisable, vmid: pvevmid }): Promise<null>;
                    },
                    feature: {
                        /**
                         * Check if feature for virtual machine is available.
                         * GET /nodes/{node}/qemu/{vmid}/feature
                         */
                        $get(param: { feature: Tfeature, node: pvenode, snapname?: pveconfigid_3, vmid: pvevmid }): Promise<object>;
                    },
                    clone: {
                        /**
                         * Create a copy of virtual machine/template.
                         * POST /nodes/{node}/qemu/{vmid}/clone
                         */
                        $post(param: { bwlimit?: integer_Min0, description?: string, format?: Tformat, full?: Tdisable, name?: dnsname, newid: pvevmid, node: pvenode, pool?: pvepoolid, snapname?: pveconfigid_3, storage?: pvestorageid, target?: pvenode, vmid: pvevmid }): Promise<string>;
                    },
                    move_disk: {
                        /**
                         * Move volume to different storage.
                         * POST /nodes/{node}/qemu/{vmid}/move_disk
                         */
                        $post(param: { bwlimit?: integer_Min0, delete?: Tdisable, digest?: String0_40, disk: Tdisk, format?: Tformat, node: pvenode, storage: pvestorageid, vmid: pvevmid }): Promise<string>;
                    },
                    migrate: {
                        /**
                         * Get preconditions for migration.
                         * GET /nodes/{node}/qemu/{vmid}/migrate
                         */
                        $get(param: { node: pvenode, target?: pvenode, vmid: pvevmid }): Promise<object>;
                        /**
                         * Migrate virtual machine. Creates a new migration task.
                         * POST /nodes/{node}/qemu/{vmid}/migrate
                         */
                        $post(param: { bwlimit?: integer_Min0, force?: Tdisable, migration_network?: CIDR, migration_type?: Tmigration_type, node: pvenode, online?: Tdisable, target: pvenode, targetstorage?: storagepairlist, vmid: pvevmid, 'with-local-disks'?: Tdisable }): Promise<string>;
                    },
                    monitor: {
                        /**
                         * Execute Qemu monitor commands.
                         * POST /nodes/{node}/qemu/{vmid}/monitor
                         */
                        $post(param: { command: string, node: pvenode, vmid: pvevmid }): Promise<string>;
                    },
                    resize: {
                        /**
                         * Extend volume size.
                         * PUT /nodes/{node}/qemu/{vmid}/resize
                         */
                        $put(param: { digest?: String0_40, disk: Tdisk, node: pvenode, size: Tsize, skiplock?: Tdisable, vmid: pvevmid }): Promise<null>;
                    },
                    snapshot: {
                        /**
                         * List all snapshots.
                         * GET /nodes/{node}/qemu/{vmid}/snapshot
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        /**
                         * Snapshot a VM.
                         * POST /nodes/{node}/qemu/{vmid}/snapshot
                         */
                        $post(param: { description?: string, node: pvenode, snapname: pveconfigid_3, vmid: pvevmid, vmstate?: Tdisable }): Promise<string>;
                        $(snapname: string): {
                            /**
                             * Delete a VM snapshot.
                             * DELETE /nodes/{node}/qemu/{vmid}/snapshot/{snapname}
                             */
                            $delete(param: { force?: Tdisable, node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<string>;
                            /**
                             * 
                             */
                            $get(param: { node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<any[]>;
                            config: {
                                /**
                                 * Get snapshot configuration
                                 * GET /nodes/{node}/qemu/{vmid}/snapshot/{snapname}/config
                                 */
                                $get(param: { node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<object>;
                                /**
                                 * Update snapshot metadata.
                                 * PUT /nodes/{node}/qemu/{vmid}/snapshot/{snapname}/config
                                 */
                                $put(param: { description?: string, node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<null>;
                            },
                            rollback: {
                                /**
                                 * Rollback VM state to specified snapshot.
                                 * POST /nodes/{node}/qemu/{vmid}/snapshot/{snapname}/rollback
                                 */
                                $post(param: { node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<string>;
                            },
                        };
                    },
                    template: {
                        /**
                         * Create a Template.
                         * POST /nodes/{node}/qemu/{vmid}/template
                         */
                        $post(param: { disk?: Tdisk, node: pvenode, vmid: pvevmid }): Promise<null>;
                    },
                    cloudinit: {
                        dump: {
                            /**
                             * Get automatically generated cloudinit config.
                             * GET /nodes/{node}/qemu/{vmid}/cloudinit/dump
                             */
                            $get(param: { node: pvenode, type: Ttype_10, vmid: pvevmid }): Promise<string>;
                        },
                    },
                };
            },
            cpu: {
                /**
                 * List all custom and default CPU models.
                 * GET /nodes/{node}/cpu
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
            },
            lxc: {
                /**
                 * LXC container index (per node).
                 * GET /nodes/{node}/lxc
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                /**
                 * Create or restore a container.
                 * POST /nodes/{node}/lxc
                 */
                $post(param: { arch?: Tarch_1, bwlimit?: Tmigrate_downtime, cmode?: Tcmode, console?: Tdisable, cores?: integer1_128, cpulimit?: Tcpulimit_1, cpuunits?: integer0_500000, description?: string, features?: Tfeatures, force?: Tdisable, hookscript?: pvevolumeid, hostname?: dnsname_1, 'ignore-unpack-errors'?: Tdisable, lock?: Tlock_1, memory?: integer_Min16, mp0?: Tmp, mp1?: Tmp, mp2?: Tmp, mp3?: Tmp, nameserver?: addresslist, net0?: Tnet_1, net1?: Tnet_1, net2?: Tnet_1, net3?: Tnet_1, node: pvenode, onboot?: Tdisable, ostemplate: String0_255, ostype?: Tostype_1, password?: Tpassword, pool?: pvepoolid, protection?: Tdisable, restore?: Tdisable, rootfs?: Trootfs, searchdomain?: dnsnamelist, 'ssh-public-keys'?: string, start?: Tdisable, startup?: pvestartuporder, storage?: pvestorageid, swap?: integer_Min0, tags?: pvetaglist, template?: Tdisable, timezone?: pvecttimezone, tty?: integer0_6, unique?: Tdisable, unprivileged?: Tdisable, unused0?: Tunused_1, unused1?: Tunused_1, unused2?: Tunused_1, unused3?: Tunused_1, vmid: pvevmid }): Promise<string>;
                $(vmid: string): {
                    /**
                     * Destroy the container (also delete all uses files).
                     * DELETE /nodes/{node}/lxc/{vmid}
                     */
                    $delete(param: { force?: Tdisable, node: pvenode, purge?: Tdisable, vmid: pvevmid }): Promise<string>;
                    /**
                     * Directory index
                     * GET /nodes/{node}/lxc/{vmid}
                     */
                    $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                    config: {
                        /**
                         * Get container configuration.
                         * GET /nodes/{node}/lxc/{vmid}/config
                         */
                        $get(param: { current?: Tdisable, node: pvenode, snapshot?: pveconfigid_3, vmid: pvevmid }): Promise<object>;
                        /**
                         * Set container options.
                         * PUT /nodes/{node}/lxc/{vmid}/config
                         */
                        $put(param: { arch?: Tarch_1, cmode?: Tcmode, console?: Tdisable, cores?: integer1_128, cpulimit?: Tcpulimit_1, cpuunits?: integer0_500000, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, features?: Tfeatures, hookscript?: pvevolumeid, hostname?: dnsname_1, lock?: Tlock_1, memory?: integer_Min16, mp0?: Tmp, mp1?: Tmp, mp2?: Tmp, mp3?: Tmp, nameserver?: addresslist, net0?: Tnet_1, net1?: Tnet_1, net2?: Tnet_1, net3?: Tnet_1, node: pvenode, onboot?: Tdisable, ostype?: Tostype_1, protection?: Tdisable, revert?: pveconfigidlist_1, rootfs?: Trootfs, searchdomain?: dnsnamelist, startup?: pvestartuporder, swap?: integer_Min0, tags?: pvetaglist, template?: Tdisable, timezone?: pvecttimezone, tty?: integer0_6, unprivileged?: Tdisable, unused0?: Tunused_1, unused1?: Tunused_1, unused2?: Tunused_1, unused3?: Tunused_1, vmid: pvevmid }): Promise<null>;
                    },
                    status: {
                        /**
                         * Directory index
                         * GET /nodes/{node}/lxc/{vmid}/status
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        current: {
                            /**
                             * Get virtual machine status.
                             * GET /nodes/{node}/lxc/{vmid}/status/current
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                        },
                        start: {
                            /**
                             * Start the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/start
                             */
                            $post(param: { node: pvenode, skiplock?: Tdisable, vmid: pvevmid }): Promise<string>;
                        },
                        stop: {
                            /**
                             * Stop the container. This will abruptly stop all processes running in the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/stop
                             */
                            $post(param: { node: pvenode, skiplock?: Tdisable, vmid: pvevmid }): Promise<string>;
                        },
                        shutdown: {
                            /**
                             * Shutdown the container. This will trigger a clean shutdown of the container, see lxc-stop(1) for details.
                             * POST /nodes/{node}/lxc/{vmid}/status/shutdown
                             */
                            $post(param: { forceStop?: Tdisable, node: pvenode, timeout?: integer_Min0, vmid: pvevmid }): Promise<string>;
                        },
                        suspend: {
                            /**
                             * Suspend the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/suspend
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<string>;
                        },
                        resume: {
                            /**
                             * Resume the container.
                             * POST /nodes/{node}/lxc/{vmid}/status/resume
                             */
                            $post(param: { node: pvenode, vmid: pvevmid }): Promise<string>;
                        },
                        reboot: {
                            /**
                             * Reboot the container by shutting it down, and starting it again. Applies pending changes.
                             * POST /nodes/{node}/lxc/{vmid}/status/reboot
                             */
                            $post(param: { node: pvenode, timeout?: integer_Min0, vmid: pvevmid }): Promise<string>;
                        },
                    },
                    snapshot: {
                        /**
                         * List all snapshots.
                         * GET /nodes/{node}/lxc/{vmid}/snapshot
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        /**
                         * Snapshot a container.
                         * POST /nodes/{node}/lxc/{vmid}/snapshot
                         */
                        $post(param: { description?: string, node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<string>;
                        $(snapname: string): {
                            /**
                             * Delete a LXC snapshot.
                             * DELETE /nodes/{node}/lxc/{vmid}/snapshot/{snapname}
                             */
                            $delete(param: { force?: Tdisable, node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<string>;
                            /**
                             * 
                             */
                            $get(param: { node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<any[]>;
                            rollback: {
                                /**
                                 * Rollback LXC state to specified snapshot.
                                 * POST /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/rollback
                                 */
                                $post(param: { node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<string>;
                            },
                            config: {
                                /**
                                 * Get snapshot configuration
                                 * GET /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/config
                                 */
                                $get(param: { node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<object>;
                                /**
                                 * Update snapshot metadata.
                                 * PUT /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/config
                                 */
                                $put(param: { description?: string, node: pvenode, snapname: pveconfigid_3, vmid: pvevmid }): Promise<null>;
                            },
                        };
                    },
                    firewall: {
                        /**
                         * Directory index.
                         * GET /nodes/{node}/lxc/{vmid}/firewall
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                        rules: {
                            /**
                             * List rules.
                             * GET /nodes/{node}/lxc/{vmid}/firewall/rules
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                            /**
                             * Create new rule.
                             * POST /nodes/{node}/lxc/{vmid}/firewall/rules
                             */
                            $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, node: pvenode, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1, vmid: pvevmid }): Promise<null>;
                            $(pos: string): {
                                /**
                                 * Delete rule.
                                 * DELETE /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
                                 */
                                $delete(param: { digest?: String0_40, node: pvenode, pos?: integer_Min0, vmid: pvevmid }): Promise<null>;
                                /**
                                 * Get single rule data.
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
                                 */
                                $get(param: { node: pvenode, pos?: integer_Min0, vmid: pvevmid }): Promise<object>;
                                /**
                                 * Modify rule data.
                                 * PUT /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
                                 */
                                $put(param: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, node: pvenode, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1, vmid: pvevmid }): Promise<null>;
                            };
                        },
                        aliases: {
                            /**
                             * List aliases
                             * GET /nodes/{node}/lxc/{vmid}/firewall/aliases
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                            /**
                             * Create IP or Network Alias.
                             * POST /nodes/{node}/lxc/{vmid}/firewall/aliases
                             */
                            $post(param: { cidr: IPorCIDR, comment?: string, name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Remove IP or Network alias.
                                 * DELETE /nodes/{node}/lxc/{vmid}/firewall/aliases/{name}
                                 */
                                $delete(param: { digest?: String0_40, name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                                /**
                                 * Read alias.
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/aliases/{name}
                                 */
                                $get(param: { name: Tname, node: pvenode, vmid: pvevmid }): Promise<object>;
                                /**
                                 * Update IP or Network alias.
                                 * PUT /nodes/{node}/lxc/{vmid}/firewall/aliases/{name}
                                 */
                                $put(param: { cidr: IPorCIDR, comment?: string, digest?: String0_40, name: Tname, node: pvenode, rename?: Tname, vmid: pvevmid }): Promise<null>;
                            };
                        },
                        ipset: {
                            /**
                             * List IPSets
                             * GET /nodes/{node}/lxc/{vmid}/firewall/ipset
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                            /**
                             * Create new IPSet
                             * POST /nodes/{node}/lxc/{vmid}/firewall/ipset
                             */
                            $post(param: { comment?: string, digest?: String0_40, name: Tname, node: pvenode, rename?: Tname, vmid: pvevmid }): Promise<null>;
                            $(name: string): {
                                /**
                                 * Delete IPSet
                                 * DELETE /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                 */
                                $delete(param: { name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                                /**
                                 * List IPSet content
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                 */
                                $get(param: { name: Tname, node: pvenode, vmid: pvevmid }): Promise<any[]>;
                                /**
                                 * Add IP or Network to IPSet.
                                 * POST /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                 */
                                $post(param: { cidr: IPorCIDRorAlias, comment?: string, name: Tname, node: pvenode, nomatch?: Tdisable, vmid: pvevmid }): Promise<null>;
                                $(cidr: string): {
                                    /**
                                     * Remove IP or Network from IPSet.
                                     * DELETE /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}/{cidr}
                                     */
                                    $delete(param: { cidr: IPorCIDRorAlias, digest?: String0_40, name: Tname, node: pvenode, vmid: pvevmid }): Promise<null>;
                                    /**
                                     * Read IP or Network settings from IPSet.
                                     * GET /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}/{cidr}
                                     */
                                    $get(param: { cidr: IPorCIDRorAlias, name: Tname, node: pvenode, vmid: pvevmid }): Promise<object>;
                                    /**
                                     * Update IP or Network settings
                                     * PUT /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}/{cidr}
                                     */
                                    $put(param: { cidr: IPorCIDRorAlias, comment?: string, digest?: String0_40, name: Tname, node: pvenode, nomatch?: Tdisable, vmid: pvevmid }): Promise<null>;
                                };
                            };
                        },
                        options: {
                            /**
                             * Get VM firewall options.
                             * GET /nodes/{node}/lxc/{vmid}/firewall/options
                             */
                            $get(param: { node: pvenode, vmid: pvevmid }): Promise<object>;
                            /**
                             * Set Firewall options.
                             * PUT /nodes/{node}/lxc/{vmid}/firewall/options
                             */
                            $put(param: { delete?: pveconfigidlist_1, dhcp?: Tdisable, digest?: String0_40, enable?: Tdisable, ipfilter?: Tdisable, log_level_in?: Tlog, log_level_out?: Tlog, macfilter?: Tdisable, ndp?: Tdisable, node: pvenode, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in, radv?: Tdisable, vmid: pvevmid }): Promise<null>;
                        },
                        log: {
                            /**
                             * Read firewall log
                             * GET /nodes/{node}/lxc/{vmid}/firewall/log
                             */
                            $get(param: { limit?: integer_Min0, node: pvenode, start?: integer_Min0, vmid: pvevmid }): Promise<any[]>;
                        },
                        refs: {
                            /**
                             * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                             * GET /nodes/{node}/lxc/{vmid}/firewall/refs
                             */
                            $get(param: { node: pvenode, type?: Ttype_2, vmid: pvevmid }): Promise<any[]>;
                        },
                    },
                    rrd: {
                        /**
                         * Read VM RRD statistics (returns PNG)
                         * GET /nodes/{node}/lxc/{vmid}/rrd
                         */
                        $get(param: { cf?: Tcf, ds: pveconfigidlist_1, node: pvenode, timeframe: Ttimeframe, vmid: pvevmid }): Promise<object>;
                    },
                    rrddata: {
                        /**
                         * Read VM RRD statistics
                         * GET /nodes/{node}/lxc/{vmid}/rrddata
                         */
                        $get(param: { cf?: Tcf, node: pvenode, timeframe: Ttimeframe, vmid: pvevmid }): Promise<any[]>;
                    },
                    vncproxy: {
                        /**
                         * Creates a TCP VNC proxy connections.
                         * POST /nodes/{node}/lxc/{vmid}/vncproxy
                         */
                        $post(param: { height?: integer16_2160, node: pvenode, vmid: pvevmid, websocket?: Tdisable, width?: integer16_4096 }): Promise<any>;
                    },
                    termproxy: {
                        /**
                         * Creates a TCP proxy connection.
                         * POST /nodes/{node}/lxc/{vmid}/termproxy
                         */
                        $post(param: { node: pvenode, vmid: pvevmid }): Promise<any>;
                    },
                    vncwebsocket: {
                        /**
                         * Opens a weksocket for VNC traffic.
                         * GET /nodes/{node}/lxc/{vmid}/vncwebsocket
                         */
                        $get(param: { node: pvenode, port: integer5900_5999, vmid: pvevmid, vncticket: String0_512 }): Promise<object>;
                    },
                    spiceproxy: {
                        /**
                         * Returns a SPICE configuration to connect to the CT.
                         * POST /nodes/{node}/lxc/{vmid}/spiceproxy
                         */
                        $post(param: { node: pvenode, proxy?: address, vmid: pvevmid }): Promise<any>;
                    },
                    migrate: {
                        /**
                         * Migrate the container to another node. Creates a new migration task.
                         * POST /nodes/{node}/lxc/{vmid}/migrate
                         */
                        $post(param: { bwlimit?: Tmigrate_downtime, force?: Tdisable, node: pvenode, online?: Tdisable, restart?: Tdisable, target: pvenode, timeout?: integer, vmid: pvevmid }): Promise<string>;
                    },
                    feature: {
                        /**
                         * Check if feature for virtual machine is available.
                         * GET /nodes/{node}/lxc/{vmid}/feature
                         */
                        $get(param: { feature: Tfeature, node: pvenode, snapname?: pveconfigid_3, vmid: pvevmid }): Promise<object>;
                    },
                    template: {
                        /**
                         * Create a Template.
                         * POST /nodes/{node}/lxc/{vmid}/template
                         */
                        $post(param: { node: pvenode, vmid: pvevmid }): Promise<null>;
                    },
                    clone: {
                        /**
                         * Create a container clone/copy
                         * POST /nodes/{node}/lxc/{vmid}/clone
                         */
                        $post(param: { bwlimit?: Tmigrate_downtime, description?: string, full?: Tdisable, hostname?: dnsname, newid: pvevmid, node: pvenode, pool?: pvepoolid, snapname?: pveconfigid_3, storage?: pvestorageid, target?: pvenode, vmid: pvevmid }): Promise<string>;
                    },
                    resize: {
                        /**
                         * Resize a container mount point.
                         * PUT /nodes/{node}/lxc/{vmid}/resize
                         */
                        $put(param: { digest?: String0_40, disk: Tdisk_1, node: pvenode, size: Tsize, vmid: pvevmid }): Promise<string>;
                    },
                    move_volume: {
                        /**
                         * Move a rootfs-/mp-volume to a different storage
                         * POST /nodes/{node}/lxc/{vmid}/move_volume
                         */
                        $post(param: { bwlimit?: Tmigrate_downtime, delete?: Tdisable, digest?: String0_40, node: pvenode, storage: pvestorageid, vmid: pvevmid, volume: Tdisk_1 }): Promise<string>;
                    },
                    pending: {
                        /**
                         * Get container configuration, including pending changes.
                         * GET /nodes/{node}/lxc/{vmid}/pending
                         */
                        $get(param: { node: pvenode, vmid: pvevmid }): Promise<any[]>;
                    },
                };
            },
            ceph: {
                /**
                 * Directory index.
                 * GET /nodes/{node}/ceph
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                osd: {
                    /**
                     * Get Ceph osd list/tree.
                     * GET /nodes/{node}/ceph/osd
                     */
                    $get(param: { node: pvenode }): Promise<object>;
                    /**
                     * Create OSD
                     * POST /nodes/{node}/ceph/osd
                     */
                    $post(param: { db_dev?: string, db_size?: Tdb_size, dev: string, encrypted?: Tdisable, node: pvenode, wal_dev?: string, wal_size?: Twal_size }): Promise<string>;
                    $(osdid: string): {
                        /**
                         * Destroy OSD
                         * DELETE /nodes/{node}/ceph/osd/{osdid}
                         */
                        $delete(param: { cleanup?: Tdisable, node: pvenode, osdid: integer }): Promise<string>;
                        in: {
                            /**
                             * ceph osd in
                             * POST /nodes/{node}/ceph/osd/{osdid}/in
                             */
                            $post(param: { node: pvenode, osdid: integer }): Promise<null>;
                        },
                        out: {
                            /**
                             * ceph osd out
                             * POST /nodes/{node}/ceph/osd/{osdid}/out
                             */
                            $post(param: { node: pvenode, osdid: integer }): Promise<null>;
                        },
                        scrub: {
                            /**
                             * Instruct the OSD to scrub.
                             * POST /nodes/{node}/ceph/osd/{osdid}/scrub
                             */
                            $post(param: { deep?: Tdisable, node: pvenode, osdid: integer }): Promise<null>;
                        },
                    };
                },
                mds: {
                    /**
                     * MDS directory index.
                     * GET /nodes/{node}/ceph/mds
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    $(name: string): {
                        /**
                         * Destroy Ceph Metadata Server
                         * DELETE /nodes/{node}/ceph/mds/{name}
                         */
                        $delete(param: { name: Tname_1, node: pvenode }): Promise<string>;
                        /**
                         * Create Ceph Metadata Server (MDS)
                         * POST /nodes/{node}/ceph/mds/{name}
                         */
                        $post(param: { hotstandby?: Tdisable, name?: Tname_2, node: pvenode }): Promise<string>;
                    };
                },
                mgr: {
                    /**
                     * MGR directory index.
                     * GET /nodes/{node}/ceph/mgr
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    $(id: string): {
                        /**
                         * Destroy Ceph Manager.
                         * DELETE /nodes/{node}/ceph/mgr/{id}
                         */
                        $delete(param: { id: Tname_1, node: pvenode }): Promise<string>;
                        /**
                         * Create Ceph Manager
                         * POST /nodes/{node}/ceph/mgr/{id}
                         */
                        $post(param: { id?: Tname_2, node: pvenode }): Promise<string>;
                    };
                },
                mon: {
                    /**
                     * Get Ceph monitor list.
                     * GET /nodes/{node}/ceph/mon
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    $(monid: string): {
                        /**
                         * Destroy Ceph Monitor and Manager.
                         * DELETE /nodes/{node}/ceph/mon/{monid}
                         */
                        $delete(param: { monid: Tname_1, node: pvenode }): Promise<string>;
                        /**
                         * Create Ceph Monitor and Manager
                         * POST /nodes/{node}/ceph/mon/{monid}
                         */
                        $post(param: { 'mon-address'?: ip, monid?: Tname_2, node: pvenode }): Promise<string>;
                    };
                },
                fs: {
                    /**
                     * Directory index.
                     * GET /nodes/{node}/ceph/fs
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    $(name: string): {
                        /**
                         * Create a Ceph filesystem
                         * POST /nodes/{node}/ceph/fs/{name}
                         */
                        $post(param: { 'add-storage'?: Tdisable, name?: string, node: pvenode, pg_num?: integer8_32768 }): Promise<string>;
                    };
                },
                disks: {
                    /**
                     * List local disks.
                     * GET /nodes/{node}/ceph/disks
                     */
                    $get(param: { node: pvenode, type?: Ttype_11 }): Promise<any[]>;
                },
                config: {
                    /**
                     * Get Ceph configuration.
                     * GET /nodes/{node}/ceph/config
                     */
                    $get(param: { node: pvenode }): Promise<string>;
                },
                configdb: {
                    /**
                     * Get Ceph configuration database.
                     * GET /nodes/{node}/ceph/configdb
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
                init: {
                    /**
                     * Create initial ceph default configuration and setup symlinks.
                     * POST /nodes/{node}/ceph/init
                     */
                    $post(param: { 'cluster-network'?: CIDR_1, disable_cephx?: Tdisable, min_size?: integer1_7, network?: CIDR_1, node: pvenode, pg_bits?: integer6_14, size?: integer1_7 }): Promise<null>;
                },
                stop: {
                    /**
                     * Stop ceph services.
                     * POST /nodes/{node}/ceph/stop
                     */
                    $post(param: { node: pvenode, service?: Tservice }): Promise<string>;
                },
                start: {
                    /**
                     * Start ceph services.
                     * POST /nodes/{node}/ceph/start
                     */
                    $post(param: { node: pvenode, service?: Tservice }): Promise<string>;
                },
                restart: {
                    /**
                     * Restart ceph services.
                     * POST /nodes/{node}/ceph/restart
                     */
                    $post(param: { node: pvenode, service?: Tservice_1 }): Promise<string>;
                },
                status: {
                    /**
                     * Get ceph status.
                     * GET /nodes/{node}/ceph/status
                     */
                    $get(param: { node: pvenode }): Promise<object>;
                },
                pools: {
                    /**
                     * List all pools.
                     * GET /nodes/{node}/ceph/pools
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    /**
                     * Create POOL
                     * POST /nodes/{node}/ceph/pools
                     */
                    $post(param: { add_storages?: Tdisable, application?: Tapplication, crush_rule?: string, min_size?: integer1_7, name: string, node: pvenode, pg_num?: integer8_32768, size?: integer1_7 }): Promise<string>;
                    $(name: string): {
                        /**
                         * Destroy pool
                         * DELETE /nodes/{node}/ceph/pools/{name}
                         */
                        $delete(param: { force?: Tdisable, name: string, node: pvenode, remove_storages?: Tdisable }): Promise<string>;
                    };
                },
                flags: {
                    /**
                     * get all set ceph flags
                     * GET /nodes/{node}/ceph/flags
                     */
                    $get(param: { node: pvenode }): Promise<string>;
                    $(flag: string): {
                        /**
                         * Unset a ceph flag
                         * DELETE /nodes/{node}/ceph/flags/{flag}
                         */
                        $delete(param: { flag: Tflag, node: pvenode }): Promise<null>;
                        /**
                         * Set a specific ceph flag
                         * POST /nodes/{node}/ceph/flags/{flag}
                         */
                        $post(param: { flag: Tflag, node: pvenode }): Promise<null>;
                    };
                },
                crush: {
                    /**
                     * Get OSD crush map
                     * GET /nodes/{node}/ceph/crush
                     */
                    $get(param: { node: pvenode }): Promise<string>;
                },
                log: {
                    /**
                     * Read ceph log
                     * GET /nodes/{node}/ceph/log
                     */
                    $get(param: { limit?: integer_Min0, node: pvenode, start?: integer_Min0 }): Promise<any[]>;
                },
                rules: {
                    /**
                     * List ceph rules.
                     * GET /nodes/{node}/ceph/rules
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
            },
            vzdump: {
                /**
                 * Create backup.
                 * POST /nodes/{node}/vzdump
                 */
                $post(param?: { all?: Tdisable, bwlimit?: integer_Min0, compress?: Tcompress, dumpdir?: string, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: Tdisable, remove?: Tdisable, script?: string, size?: integer_Min500, stdexcludes?: Tdisable, stdout?: Tdisable, stop?: Tdisable, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<string>;
                extractconfig: {
                    /**
                     * Extract configuration from vzdump backup archive.
                     * GET /nodes/{node}/vzdump/extractconfig
                     */
                    $get(param: { node: pvenode, volume: string }): Promise<string>;
                },
            },
            services: {
                /**
                 * Service list.
                 * GET /nodes/{node}/services
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                $(service: string): {
                    /**
                     * Directory index
                     * GET /nodes/{node}/services/{service}
                     */
                    $get(param: { node: pvenode, service: Tservice_2 }): Promise<any[]>;
                    state: {
                        /**
                         * Read service properties
                         * GET /nodes/{node}/services/{service}/state
                         */
                        $get(param: { node: pvenode, service: Tservice_2 }): Promise<object>;
                    },
                    start: {
                        /**
                         * Start service.
                         * POST /nodes/{node}/services/{service}/start
                         */
                        $post(param: { node: pvenode, service: Tservice_2 }): Promise<string>;
                    },
                    stop: {
                        /**
                         * Stop service.
                         * POST /nodes/{node}/services/{service}/stop
                         */
                        $post(param: { node: pvenode, service: Tservice_2 }): Promise<string>;
                    },
                    restart: {
                        /**
                         * Restart service.
                         * POST /nodes/{node}/services/{service}/restart
                         */
                        $post(param: { node: pvenode, service: Tservice_2 }): Promise<string>;
                    },
                    reload: {
                        /**
                         * Reload service.
                         * POST /nodes/{node}/services/{service}/reload
                         */
                        $post(param: { node: pvenode, service: Tservice_2 }): Promise<string>;
                    },
                };
            },
            subscription: {
                /**
                 * Delete subscription key of this node.
                 * DELETE /nodes/{node}/subscription
                 */
                $delete(param: { node: pvenode }): Promise<null>;
                /**
                 * Read subscription info.
                 * GET /nodes/{node}/subscription
                 */
                $get(param: { node: pvenode }): Promise<object>;
                /**
                 * Update subscription info.
                 * POST /nodes/{node}/subscription
                 */
                $post(param: { force?: Tdisable, node: pvenode }): Promise<null>;
                /**
                 * Set subscription key.
                 * PUT /nodes/{node}/subscription
                 */
                $put(param: { key: Tkey, node: pvenode }): Promise<null>;
            },
            network: {
                /**
                 * Revert network configuration changes.
                 * DELETE /nodes/{node}/network
                 */
                $delete(param: { node: pvenode }): Promise<null>;
                /**
                 * List available networks
                 * GET /nodes/{node}/network
                 */
                $get(param: { node: pvenode, type?: Ttype_12 }): Promise<any[]>;
                /**
                 * Create network device configuration
                 * POST /nodes/{node}/network
                 */
                $post(param: { address?: ipv4, address6?: ipv6, autostart?: Tdisable, 'bond-primary'?: pveiface_1, bond_mode?: Tbond_mode, bond_xmit_hash_policy?: Tbond_xmit_hash_policy, bridge_ports?: pveifacelist, bridge_vlan_aware?: Tdisable, cidr?: CIDRv4, cidr6?: CIDRv6, comments?: string, comments6?: string, gateway?: ipv4, gateway6?: ipv6, iface: pveiface, mtu?: integer1280_65520, netmask?: ipv4mask, netmask6?: integer0_128, node: pvenode, ovs_bonds?: pveifacelist, ovs_bridge?: pveiface_1, ovs_options?: String0_1024, ovs_ports?: pveifacelist, ovs_tag?: integer1_4094, slaves?: pveifacelist, type: Ttype_13, 'vlan-id'?: integer1_4094, 'vlan-raw-device'?: pveiface_1 }): Promise<null>;
                /**
                 * Reload network configuration
                 * PUT /nodes/{node}/network
                 */
                $put(param: { node: pvenode }): Promise<string>;
                $(iface: string): {
                    /**
                     * Delete network device configuration
                     * DELETE /nodes/{node}/network/{iface}
                     */
                    $delete(param: { iface: pveiface, node: pvenode }): Promise<null>;
                    /**
                     * Read network device configuration
                     * GET /nodes/{node}/network/{iface}
                     */
                    $get(param: { iface: pveiface, node: pvenode }): Promise<object>;
                    /**
                     * Update network device configuration
                     * PUT /nodes/{node}/network/{iface}
                     */
                    $put(param: { address?: ipv4, address6?: ipv6, autostart?: Tdisable, 'bond-primary'?: pveiface_1, bond_mode?: Tbond_mode, bond_xmit_hash_policy?: Tbond_xmit_hash_policy, bridge_ports?: pveifacelist, bridge_vlan_aware?: Tdisable, cidr?: CIDRv4, cidr6?: CIDRv6, comments?: string, comments6?: string, delete?: pveconfigidlist_1, gateway?: ipv4, gateway6?: ipv6, iface: pveiface, mtu?: integer1280_65520, netmask?: ipv4mask, netmask6?: integer0_128, node: pvenode, ovs_bonds?: pveifacelist, ovs_bridge?: pveiface_1, ovs_options?: String0_1024, ovs_ports?: pveifacelist, ovs_tag?: integer1_4094, slaves?: pveifacelist, type: Ttype_13, 'vlan-id'?: integer1_4094, 'vlan-raw-device'?: pveiface_1 }): Promise<null>;
                };
            },
            tasks: {
                /**
                 * Read task list for one node (finished tasks).
                 * GET /nodes/{node}/tasks
                 */
                $get(param: { errors?: Tdisable, limit?: integer_Min0, node: pvenode, source?: Tsource, start?: integer_Min0, typefilter?: string, userfilter?: string, vmid?: pvevmid }): Promise<any[]>;
                $(upid: string): {
                    /**
                     * Stop a task.
                     * DELETE /nodes/{node}/tasks/{upid}
                     */
                    $delete(param: { node: pvenode, upid: string }): Promise<null>;
                    /**
                     * 
                     */
                    $get(param: { node: pvenode, upid: string }): Promise<any[]>;
                    log: {
                        /**
                         * Read task log.
                         * GET /nodes/{node}/tasks/{upid}/log
                         */
                        $get(param: { limit?: integer_Min0, node: pvenode, start?: integer_Min0, upid: string }): Promise<any[]>;
                    },
                    status: {
                        /**
                         * Read task status.
                         * GET /nodes/{node}/tasks/{upid}/status
                         */
                        $get(param: { node: pvenode, upid: string }): Promise<object>;
                    },
                };
            },
            scan: {
                /**
                 * Index of available scan methods
                 * GET /nodes/{node}/scan
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                zfs: {
                    /**
                     * Scan zfs pool list on local node.
                     * GET /nodes/{node}/scan/zfs
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
                nfs: {
                    /**
                     * Scan remote NFS server.
                     * GET /nodes/{node}/scan/nfs
                     */
                    $get(param: { node: pvenode, server: pvestorageserver }): Promise<any[]>;
                },
                cifs: {
                    /**
                     * Scan remote CIFS server.
                     * GET /nodes/{node}/scan/cifs
                     */
                    $get(param: { domain?: string, node: pvenode, password?: string, server: pvestorageserver, username?: string }): Promise<any[]>;
                },
                glusterfs: {
                    /**
                     * Scan remote GlusterFS server.
                     * GET /nodes/{node}/scan/glusterfs
                     */
                    $get(param: { node: pvenode, server: pvestorageserver }): Promise<any[]>;
                },
                iscsi: {
                    /**
                     * Scan remote iSCSI server.
                     * GET /nodes/{node}/scan/iscsi
                     */
                    $get(param: { node: pvenode, portal: pvestorageportaldns }): Promise<any[]>;
                },
                lvm: {
                    /**
                     * List local LVM volume groups.
                     * GET /nodes/{node}/scan/lvm
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
                lvmthin: {
                    /**
                     * List local LVM Thin Pools.
                     * GET /nodes/{node}/scan/lvmthin
                     */
                    $get(param: { node: pvenode, vg: Tvg }): Promise<any[]>;
                },
                usb: {
                    /**
                     * List local USB devices.
                     * GET /nodes/{node}/scan/usb
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
            },
            hardware: {
                /**
                 * Index of hardware types
                 * GET /nodes/{node}/hardware
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                pci: {
                    /**
                     * List local PCI devices.
                     * GET /nodes/{node}/hardware/pci
                     */
                    $get(param: { node: pvenode, 'pci-class-blacklist'?: stringlist, verbose?: Tdisable }): Promise<any[]>;
                    $(pciid: string): {
                        /**
                         * Index of available pci methods
                         * GET /nodes/{node}/hardware/pci/{pciid}
                         */
                        $get(param: { node: pvenode, pciid: Tpciid }): Promise<any[]>;
                        mdev: {
                            /**
                             * List mediated device types for given PCI device.
                             * GET /nodes/{node}/hardware/pci/{pciid}/mdev
                             */
                            $get(param: { node: pvenode, pciid: Tpciid }): Promise<any[]>;
                        },
                    };
                },
            },
            storage: {
                /**
                 * Get status for all datastores.
                 * GET /nodes/{node}/storage
                 */
                $get(param: { content?: pvestoragecontentlist, enabled?: Tdisable, format?: Tdisable, node: pvenode, storage?: pvestorageid, target?: pvenode }): Promise<any[]>;
                $(storage: string): {
                    /**
                     * 
                     */
                    $get(param: { node: pvenode, storage: pvestorageid }): Promise<any[]>;
                    content: {
                        /**
                         * List storage content.
                         * GET /nodes/{node}/storage/{storage}/content
                         */
                        $get(param: { content?: pvestoragecontent, node: pvenode, storage: pvestorageid, vmid?: pvevmid }): Promise<any[]>;
                        /**
                         * Allocate disk images.
                         * POST /nodes/{node}/storage/{storage}/content
                         */
                        $post(param: { filename: string, format?: Tformat_1, node: pvenode, size: Tsize_1, storage: pvestorageid, vmid: pvevmid }): Promise<string>;
                        $(volume: string): {
                            /**
                             * Delete volume
                             * DELETE /nodes/{node}/storage/{storage}/content/{volume}
                             */
                            $delete(param: { delay?: integer1_30, node: pvenode, storage?: pvestorageid, volume: string }): Promise<string>;
                            /**
                             * Get volume attributes
                             * GET /nodes/{node}/storage/{storage}/content/{volume}
                             */
                            $get(param: { node: pvenode, storage?: pvestorageid, volume: string }): Promise<object>;
                            /**
                             * Copy a volume. This is experimental code - do not use.
                             * POST /nodes/{node}/storage/{storage}/content/{volume}
                             */
                            $post(param: { node: pvenode, storage?: pvestorageid, target: string, target_node?: pvenode, volume: string }): Promise<string>;
                        };
                    },
                    status: {
                        /**
                         * Read storage status.
                         * GET /nodes/{node}/storage/{storage}/status
                         */
                        $get(param: { node: pvenode, storage: pvestorageid }): Promise<object>;
                    },
                    rrd: {
                        /**
                         * Read storage RRD statistics (returns PNG).
                         * GET /nodes/{node}/storage/{storage}/rrd
                         */
                        $get(param: { cf?: Tcf, ds: pveconfigidlist_1, node: pvenode, storage: pvestorageid, timeframe: Ttimeframe }): Promise<object>;
                    },
                    rrddata: {
                        /**
                         * Read storage RRD statistics.
                         * GET /nodes/{node}/storage/{storage}/rrddata
                         */
                        $get(param: { cf?: Tcf, node: pvenode, storage: pvestorageid, timeframe: Ttimeframe }): Promise<any[]>;
                    },
                    upload: {
                        /**
                         * Upload templates and ISO images.
                         * POST /nodes/{node}/storage/{storage}/upload
                         */
                        $post(param: { content: pvestoragecontent, filename: string, node: pvenode, storage: pvestorageid, tmpfilename?: string }): Promise<string>;
                    },
                };
            },
            disks: {
                /**
                 * Node index.
                 * GET /nodes/{node}/disks
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                lvm: {
                    /**
                     * List LVM Volume Groups
                     * GET /nodes/{node}/disks/lvm
                     */
                    $get(param: { node: pvenode }): Promise<object>;
                    /**
                     * Create an LVM Volume Group
                     * POST /nodes/{node}/disks/lvm
                     */
                    $post(param: { add_storage?: Tdisable, device: string, name: pvestorageid, node: pvenode }): Promise<string>;
                },
                lvmthin: {
                    /**
                     * List LVM thinpools
                     * GET /nodes/{node}/disks/lvmthin
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    /**
                     * Create an LVM thinpool
                     * POST /nodes/{node}/disks/lvmthin
                     */
                    $post(param: { add_storage?: Tdisable, device: string, name: pvestorageid, node: pvenode }): Promise<string>;
                },
                directory: {
                    /**
                     * PVE Managed Directory storages.
                     * GET /nodes/{node}/disks/directory
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    /**
                     * Create a Filesystem on an unused disk. Will be mounted under '/mnt/pve/NAME'.
                     * POST /nodes/{node}/disks/directory
                     */
                    $post(param: { add_storage?: Tdisable, device: string, filesystem?: Tfilesystem, name: pvestorageid, node: pvenode }): Promise<string>;
                },
                zfs: {
                    /**
                     * List Zpools.
                     * GET /nodes/{node}/disks/zfs
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    /**
                     * Create a ZFS pool.
                     * POST /nodes/{node}/disks/zfs
                     */
                    $post(param: { add_storage?: Tdisable, ashift?: integer9_16, compression?: Tcompression, devices: stringlist, name: pvestorageid, node: pvenode, raidlevel: Traidlevel }): Promise<string>;
                    $(name: string): {
                        /**
                         * Get details about a zpool.
                         * GET /nodes/{node}/disks/zfs/{name}
                         */
                        $get(param: { name: pvestorageid, node: pvenode }): Promise<object>;
                    };
                },
                list: {
                    /**
                     * List local disks.
                     * GET /nodes/{node}/disks/list
                     */
                    $get(param: { node: pvenode, skipsmart?: Tdisable, type?: Ttype_11 }): Promise<any[]>;
                },
                smart: {
                    /**
                     * Get SMART Health of a disk.
                     * GET /nodes/{node}/disks/smart
                     */
                    $get(param: { disk: Tdisk_2, healthonly?: Tdisable, node: pvenode }): Promise<object>;
                },
                initgpt: {
                    /**
                     * Initialize Disk with GPT
                     * POST /nodes/{node}/disks/initgpt
                     */
                    $post(param: { disk: Tdisk_2, node: pvenode, uuid?: Tuuid }): Promise<string>;
                },
            },
            apt: {
                /**
                 * Directory index for apt (Advanced Package Tool).
                 * GET /nodes/{node}/apt
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                update: {
                    /**
                     * List available updates.
                     * GET /nodes/{node}/apt/update
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    /**
                     * This is used to resynchronize the package index files from their sources (apt-get update).
                     * POST /nodes/{node}/apt/update
                     */
                    $post(param: { node: pvenode, notify?: Tdisable, quiet?: Tdisable }): Promise<string>;
                },
                changelog: {
                    /**
                     * Get package changelogs.
                     * GET /nodes/{node}/apt/changelog
                     */
                    $get(param: { name: string, node: pvenode, version?: string }): Promise<string>;
                },
                versions: {
                    /**
                     * Get package information for important Proxmox packages.
                     * GET /nodes/{node}/apt/versions
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
            },
            firewall: {
                /**
                 * Directory index.
                 * GET /nodes/{node}/firewall
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                rules: {
                    /**
                     * List rules.
                     * GET /nodes/{node}/firewall/rules
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    /**
                     * Create new rule.
                     * POST /nodes/{node}/firewall/rules
                     */
                    $post(param: { action: Taction, comment?: string, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, node: pvenode, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type: Ttype_1 }): Promise<null>;
                    $(pos: string): {
                        /**
                         * Delete rule.
                         * DELETE /nodes/{node}/firewall/rules/{pos}
                         */
                        $delete(param: { digest?: String0_40, node: pvenode, pos?: integer_Min0 }): Promise<null>;
                        /**
                         * Get single rule data.
                         * GET /nodes/{node}/firewall/rules/{pos}
                         */
                        $get(param: { node: pvenode, pos?: integer_Min0 }): Promise<object>;
                        /**
                         * Modify rule data.
                         * PUT /nodes/{node}/firewall/rules/{pos}
                         */
                        $put(param: { action?: Taction, comment?: string, delete?: pveconfigidlist_1, dest?: pvefwaddrspec, digest?: String0_40, dport?: pvefwdportspec, enable?: integer_Min0, iface?: pveiface, log?: Tlog, macro?: String0_128, moveto?: integer_Min0, node: pvenode, pos?: integer_Min0, proto?: pvefwprotocolspec, source?: pvefwaddrspec, sport?: pvefwsportspec, type?: Ttype_1 }): Promise<null>;
                    };
                },
                options: {
                    /**
                     * Get host firewall options.
                     * GET /nodes/{node}/firewall/options
                     */
                    $get(param: { node: pvenode }): Promise<object>;
                    /**
                     * Set Firewall options.
                     * PUT /nodes/{node}/firewall/options
                     */
                    $put(param: { delete?: pveconfigidlist_1, digest?: String0_40, enable?: Tdisable, log_level_in?: Tlog, log_level_out?: Tlog, log_nf_conntrack?: Tdisable, ndp?: Tdisable, nf_conntrack_allow_invalid?: Tdisable, nf_conntrack_max?: integer_Min32768, nf_conntrack_tcp_timeout_established?: integer_Min7875, nf_conntrack_tcp_timeout_syn_recv?: integer30_60, node: pvenode, nosmurfs?: Tdisable, protection_synflood?: Tdisable, protection_synflood_burst?: integer, protection_synflood_rate?: integer, smurf_log_level?: Tlog, tcp_flags_log_level?: Tlog, tcpflags?: Tdisable }): Promise<null>;
                },
                log: {
                    /**
                     * Read firewall log
                     * GET /nodes/{node}/firewall/log
                     */
                    $get(param: { limit?: integer_Min0, node: pvenode, start?: integer_Min0 }): Promise<any[]>;
                },
            },
            replication: {
                /**
                 * List status of all replication jobs on this node.
                 * GET /nodes/{node}/replication
                 */
                $get(param: { guest?: pvevmid, node: pvenode }): Promise<any[]>;
                $(id: string): {
                    /**
                     * Directory index.
                     * GET /nodes/{node}/replication/{id}
                     */
                    $get(param: { id: pvereplicationjobid, node: pvenode }): Promise<any[]>;
                    status: {
                        /**
                         * Get replication job status.
                         * GET /nodes/{node}/replication/{id}/status
                         */
                        $get(param: { id: pvereplicationjobid, node: pvenode }): Promise<object>;
                    },
                    log: {
                        /**
                         * Read replication job log.
                         * GET /nodes/{node}/replication/{id}/log
                         */
                        $get(param: { id: pvereplicationjobid, limit?: integer_Min0, node: pvenode, start?: integer_Min0 }): Promise<any[]>;
                    },
                    schedule_now: {
                        /**
                         * Schedule replication job to start as soon as possible.
                         * POST /nodes/{node}/replication/{id}/schedule_now
                         */
                        $post(param: { id: pvereplicationjobid, node: pvenode }): Promise<string>;
                    },
                };
            },
            certificates: {
                /**
                 * Node index.
                 * GET /nodes/{node}/certificates
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                acme: {
                    /**
                     * ACME index.
                     * GET /nodes/{node}/certificates/acme
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    certificate: {
                        /**
                         * Revoke existing certificate from CA.
                         * DELETE /nodes/{node}/certificates/acme/certificate
                         */
                        $delete(param: { node: pvenode }): Promise<string>;
                        /**
                         * Order a new certificate from ACME-compatible CA.
                         * POST /nodes/{node}/certificates/acme/certificate
                         */
                        $post(param: { force?: Tdisable, node: pvenode }): Promise<string>;
                        /**
                         * Renew existing certificate from CA.
                         * PUT /nodes/{node}/certificates/acme/certificate
                         */
                        $put(param: { force?: Tdisable, node: pvenode }): Promise<string>;
                    },
                },
                info: {
                    /**
                     * Get information about node's certificates.
                     * GET /nodes/{node}/certificates/info
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                },
                custom: {
                    /**
                     * DELETE custom certificate chain and key.
                     * DELETE /nodes/{node}/certificates/custom
                     */
                    $delete(param: { node: pvenode, restart?: Tdisable }): Promise<null>;
                    /**
                     * Upload or update custom certificate chain and key.
                     * POST /nodes/{node}/certificates/custom
                     */
                    $post(param: { certificates: pemcertificatechain, force?: Tdisable, key?: pemstring, node: pvenode, restart?: Tdisable }): Promise<object>;
                },
            },
            config: {
                /**
                 * Get node configuration options.
                 * GET /nodes/{node}/config
                 */
                $get(param: { node: pvenode, property?: Tproperty }): Promise<object>;
                /**
                 * Set node configuration options.
                 * PUT /nodes/{node}/config
                 */
                $put(param: { acme?: Tacme, acmedomain0?: Tacmedomain, acmedomain1?: Tacmedomain, acmedomain2?: Tacmedomain, acmedomain3?: Tacmedomain, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, node: pvenode, 'startall-onboot-delay'?: integer0_300, wakeonlan?: macaddr }): Promise<null>;
            },
            sdn: {
                /**
                 * SDN index.
                 * GET /nodes/{node}/sdn
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                zones: {
                    /**
                     * Get status for all zones.
                     * GET /nodes/{node}/sdn/zones
                     */
                    $get(param: { node: pvenode }): Promise<any[]>;
                    $(zone: string): {
                        /**
                         * 
                         */
                        $get(param: { node: pvenode, zone: pvesdnzoneid }): Promise<any[]>;
                        content: {
                            /**
                             * List zone content.
                             * GET /nodes/{node}/sdn/zones/{zone}/content
                             */
                            $get(param: { node: pvenode, zone: pvesdnzoneid }): Promise<any[]>;
                        },
                    };
                },
            },
            version: {
                /**
                 * API version details
                 * GET /nodes/{node}/version
                 */
                $get(param: { node: pvenode }): Promise<object>;
            },
            status: {
                /**
                 * Read node status
                 * GET /nodes/{node}/status
                 */
                $get(param: { node: pvenode }): Promise<object>;
                /**
                 * Reboot or shutdown a node.
                 * POST /nodes/{node}/status
                 */
                $post(param: { command: Tcommand_1, node: pvenode }): Promise<null>;
            },
            netstat: {
                /**
                 * Read tap/vm network device interface counters
                 * GET /nodes/{node}/netstat
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
            },
            execute: {
                /**
                 * Execute multiple commands in order.
                 * POST /nodes/{node}/execute
                 */
                $post(param: { commands: string, node: pvenode }): Promise<any[]>;
            },
            wakeonlan: {
                /**
                 * Try to wake a node via 'wake on LAN' network packet.
                 * POST /nodes/{node}/wakeonlan
                 */
                $post(param: { node: pvenode }): Promise<string>;
            },
            rrd: {
                /**
                 * Read node RRD statistics (returns PNG)
                 * GET /nodes/{node}/rrd
                 */
                $get(param: { cf?: Tcf, ds: pveconfigidlist_1, node: pvenode, timeframe: Ttimeframe }): Promise<object>;
            },
            rrddata: {
                /**
                 * Read node RRD statistics
                 * GET /nodes/{node}/rrddata
                 */
                $get(param: { cf?: Tcf, node: pvenode, timeframe: Ttimeframe }): Promise<any[]>;
            },
            syslog: {
                /**
                 * Read system log
                 * GET /nodes/{node}/syslog
                 */
                $get(param: { limit?: integer_Min0, node: pvenode, service?: String0_128, since?: Tsince, start?: integer_Min0, until?: Tsince }): Promise<any[]>;
            },
            journal: {
                /**
                 * Read Journal
                 * GET /nodes/{node}/journal
                 */
                $get(param: { endcursor?: string, lastentries?: integer_Min0, node: pvenode, since?: integer_Min0, startcursor?: string, until?: integer_Min0 }): Promise<any[]>;
            },
            vncshell: {
                /**
                 * Creates a VNC Shell proxy.
                 * POST /nodes/{node}/vncshell
                 */
                $post(param: { cmd?: Tcmd, height?: integer16_2160, node: pvenode, upgrade?: Tdisable, websocket?: Tdisable, width?: integer16_4096 }): Promise<any>;
            },
            termproxy: {
                /**
                 * Creates a VNC Shell proxy.
                 * POST /nodes/{node}/termproxy
                 */
                $post(param: { cmd?: Tcmd, node: pvenode, upgrade?: Tdisable }): Promise<any>;
            },
            vncwebsocket: {
                /**
                 * Opens a weksocket for VNC traffic.
                 * GET /nodes/{node}/vncwebsocket
                 */
                $get(param: { node: pvenode, port: integer5900_5999, vncticket: String0_512 }): Promise<object>;
            },
            spiceshell: {
                /**
                 * Creates a SPICE shell.
                 * POST /nodes/{node}/spiceshell
                 */
                $post(param: { cmd?: Tcmd, node: pvenode, proxy?: address, upgrade?: Tdisable }): Promise<any>;
            },
            dns: {
                /**
                 * Read DNS settings.
                 * GET /nodes/{node}/dns
                 */
                $get(param: { node: pvenode }): Promise<object>;
                /**
                 * Write DNS settings.
                 * PUT /nodes/{node}/dns
                 */
                $put(param: { dns1?: ip, dns2?: ip, dns3?: ip, node: pvenode, search: string }): Promise<null>;
            },
            time: {
                /**
                 * Read server time and time zone settings.
                 * GET /nodes/{node}/time
                 */
                $get(param: { node: pvenode }): Promise<object>;
                /**
                 * Set time zone.
                 * PUT /nodes/{node}/time
                 */
                $put(param: { node: pvenode, timezone: string }): Promise<null>;
            },
            aplinfo: {
                /**
                 * Get list of appliances.
                 * GET /nodes/{node}/aplinfo
                 */
                $get(param: { node: pvenode }): Promise<any[]>;
                /**
                 * Download appliance templates.
                 * POST /nodes/{node}/aplinfo
                 */
                $post(param: { node: pvenode, storage: pvestorageid, template: String0_255 }): Promise<string>;
            },
            report: {
                /**
                 * Gather various systems information about a node
                 * GET /nodes/{node}/report
                 */
                $get(param: { node: pvenode }): Promise<string>;
            },
            startall: {
                /**
                 * Start all VMs and containers located on this node (by default only those with onboot=1).
                 * POST /nodes/{node}/startall
                 */
                $post(param: { force?: Tdisable, node: pvenode, vms?: pvevmidlist }): Promise<string>;
            },
            stopall: {
                /**
                 * Stop all VMs and Containers.
                 * POST /nodes/{node}/stopall
                 */
                $post(param: { node: pvenode, vms?: pvevmidlist }): Promise<string>;
            },
            migrateall: {
                /**
                 * Migrate all VMs and Containers.
                 * POST /nodes/{node}/migrateall
                 */
                $post(param: { maxworkers?: integer_Min1, node: pvenode, target: pvenode, vms?: pvevmidlist, 'with-local-disks'?: Tdisable }): Promise<string>;
            },
            hosts: {
                /**
                 * Get the content of /etc/hosts.
                 * GET /nodes/{node}/hosts
                 */
                $get(param: { node: pvenode }): Promise<object>;
                /**
                 * Write /etc/hosts.
                 * POST /nodes/{node}/hosts
                 */
                $post(param: { data: string, digest?: String0_40, node: pvenode }): Promise<null>;
            },
        };
    },
    storage: {
        /**
         * Storage index.
         * GET /storage
         */
        $get(param?: { type?: Ttype_14 }): Promise<any[]>;
        /**
         * Create a new storage.
         * POST /storage
         */
        $post(param: { authsupported?: string, base?: pvevolumeid, blocksize?: string, bwlimit?: Tbwlimit, comstar_hg?: string, comstar_tg?: string, content?: pvestoragecontentlist, datastore?: string, disable?: Tdisable, domain?: String0_256, 'encryption-key'?: string, export?: pvestoragepath, fingerprint?: Tfingerprint, format?: pvestorageformat, fuse?: Tdisable, is_mountpoint?: string, iscsiprovider?: string, krbd?: Tdisable, lio_tpg?: string, maxfiles?: integer_Min0, mkdir?: Tdisable, monhost?: pvestorageportaldnslist, mountpoint?: pvestoragepath, nodes?: pvenodelist, nowritecache?: Tdisable, options?: pvestorageoptions, password?: String0_256, path?: pvestoragepath, pool?: string, portal?: pvestorageportaldns, redundancy?: integer1_16, saferemove?: Tdisable, saferemove_throughput?: string, server?: pvestorageserver, server2?: pvestorageserver, share?: string, shared?: Tdisable, smbversion?: Tsmbversion, sparse?: Tdisable, storage: pvestorageid, subdir?: pvestoragepath, tagged_only?: Tdisable, target?: string, thinpool?: pvestoragevgname, transport?: Ttransport, type: Ttype_14, username?: string, vgname?: pvestoragevgname, volume?: string }): Promise<null>;
        $(storage: string): {
            /**
             * Delete storage configuration.
             * DELETE /storage/{storage}
             */
            $delete(param: { storage: pvestorageid }): Promise<null>;
            /**
             * Read storage configuration.
             * GET /storage/{storage}
             */
            $get(param: { storage: pvestorageid }): Promise<object>;
            /**
             * Update storage configuration.
             * PUT /storage/{storage}
             */
            $put(param: { blocksize?: string, bwlimit?: Tbwlimit, comstar_hg?: string, comstar_tg?: string, content?: pvestoragecontentlist, delete?: pveconfigidlist, digest?: String0_40, disable?: Tdisable, domain?: String0_256, 'encryption-key'?: string, fingerprint?: Tfingerprint, format?: pvestorageformat, fuse?: Tdisable, is_mountpoint?: string, krbd?: Tdisable, lio_tpg?: string, maxfiles?: integer_Min0, mkdir?: Tdisable, monhost?: pvestorageportaldnslist, mountpoint?: pvestoragepath, nodes?: pvenodelist, nowritecache?: Tdisable, options?: pvestorageoptions, password?: String0_256, pool?: string, redundancy?: integer1_16, saferemove?: Tdisable, saferemove_throughput?: string, server?: pvestorageserver, server2?: pvestorageserver, shared?: Tdisable, smbversion?: Tsmbversion, sparse?: Tdisable, storage: pvestorageid, subdir?: pvestoragepath, tagged_only?: Tdisable, transport?: Ttransport, username?: string }): Promise<null>;
        };
    },
    access: {
        /**
         * Directory index.
         * GET /access
         */
        $get(): Promise<any[]>;
        users: {
            /**
             * User index.
             * GET /access/users
             */
            $get(param?: { enabled?: Tdisable, full?: Tdisable }): Promise<any[]>;
            /**
             * Create new user.
             * POST /access/users
             */
            $post(param: { comment?: string, email?: emailopt, enable?: Tdisable, expire?: integer_Min0, firstname?: string, groups?: pvegroupidlist, keys?: string, lastname?: string, password?: String5_64, userid: pveuserid }): Promise<null>;
            $(userid: string): {
                /**
                 * Delete user.
                 * DELETE /access/users/{userid}
                 */
                $delete(param: { userid: pveuserid }): Promise<null>;
                /**
                 * Get user configuration.
                 * GET /access/users/{userid}
                 */
                $get(param: { userid: pveuserid }): Promise<object>;
                /**
                 * Update user configuration.
                 * PUT /access/users/{userid}
                 */
                $put(param: { append?: Tdisable, comment?: string, email?: emailopt, enable?: Tdisable, expire?: integer_Min0, firstname?: string, groups?: pvegroupidlist, keys?: string, lastname?: string, userid: pveuserid }): Promise<null>;
                tfa: {
                    /**
                     * Get user TFA types (Personal and Realm).
                     * GET /access/users/{userid}/tfa
                     */
                    $get(param: { userid: pveuserid }): Promise<object>;
                },
                token: {
                    /**
                     * Get user API tokens.
                     * GET /access/users/{userid}/token
                     */
                    $get(param: { userid: pveuserid }): Promise<any[]>;
                    $(tokenid: string): {
                        /**
                         * Remove API token for a specific user.
                         * DELETE /access/users/{userid}/token/{tokenid}
                         */
                        $delete(param: { tokenid: Ttokenid, userid: pveuserid }): Promise<null>;
                        /**
                         * Get specific API token information.
                         * GET /access/users/{userid}/token/{tokenid}
                         */
                        $get(param: { tokenid: Ttokenid, userid: pveuserid }): Promise<object>;
                        /**
                         * Generate a new API token for a specific user. NOTE: returns API token value, which needs to be stored as it cannot be retrieved afterwards!
                         * POST /access/users/{userid}/token/{tokenid}
                         */
                        $post(param: { comment?: string, expire?: integer_Min0, privsep?: Tdisable, tokenid: Ttokenid, userid: pveuserid }): Promise<object>;
                        /**
                         * Update API token for a specific user.
                         * PUT /access/users/{userid}/token/{tokenid}
                         */
                        $put(param: { comment?: string, expire?: integer_Min0, privsep?: Tdisable, tokenid: Ttokenid, userid: pveuserid }): Promise<object>;
                    };
                },
            };
        },
        groups: {
            /**
             * Group index.
             * GET /access/groups
             */
            $get(): Promise<any[]>;
            /**
             * Create new group.
             * POST /access/groups
             */
            $post(param: { comment?: string, groupid: pvegroupid }): Promise<null>;
            $(groupid: string): {
                /**
                 * Delete group.
                 * DELETE /access/groups/{groupid}
                 */
                $delete(param: { groupid: pvegroupid }): Promise<null>;
                /**
                 * Get group configuration.
                 * GET /access/groups/{groupid}
                 */
                $get(param: { groupid: pvegroupid }): Promise<object>;
                /**
                 * Update group data.
                 * PUT /access/groups/{groupid}
                 */
                $put(param: { comment?: string, groupid: pvegroupid }): Promise<null>;
            };
        },
        roles: {
            /**
             * Role index.
             * GET /access/roles
             */
            $get(): Promise<any[]>;
            /**
             * Create new role.
             * POST /access/roles
             */
            $post(param: { privs?: pveprivlist, roleid: pveroleid }): Promise<null>;
            $(roleid: string): {
                /**
                 * Delete role.
                 * DELETE /access/roles/{roleid}
                 */
                $delete(param: { roleid: pveroleid }): Promise<null>;
                /**
                 * Get role configuration.
                 * GET /access/roles/{roleid}
                 */
                $get(param: { roleid: pveroleid }): Promise<object>;
                /**
                 * Update an existing role.
                 * PUT /access/roles/{roleid}
                 */
                $put(param: { append?: Tdisable, privs?: pveprivlist, roleid: pveroleid }): Promise<null>;
            };
        },
        acl: {
            /**
             * Get Access Control List (ACLs).
             * GET /access/acl
             */
            $get(): Promise<any[]>;
            /**
             * Update Access Control List (add or remove permissions).
             * PUT /access/acl
             */
            $put(param: { delete?: Tdisable, groups?: pvegroupidlist, path: string, propagate?: Tdisable, roles: pveroleidlist, tokens?: pvetokenidlist, users?: pveuseridlist }): Promise<null>;
        },
        domains: {
            /**
             * Authentication domain index.
             * GET /access/domains
             */
            $get(): Promise<any[]>;
            /**
             * Add an authentication server.
             * POST /access/domains
             */
            $post(param: { base_dn?: Tbase_dn, bind_dn?: Tbase_dn, capath?: string, cert?: string, certkey?: string, comment?: String0_4096, default?: Tdisable, domain?: Tdomain, filter?: String0_2048, group_classes?: ldapsimpleattrlist, group_dn?: Tbase_dn, group_filter?: String0_2048, group_name_attr?: ldapsimpleattr, mode?: Tmode_1, password?: string, port?: integer1_65535, realm: pverealm, secure?: Tdisable, server1?: address_1, server2?: address_1, sslversion?: Tsslversion, 'sync-defaults-options'?: realmsyncoptions, sync_attributes?: Tsync_attributes, tfa?: pvetfaconfig, type: Ttype_15, user_attr?: Tuser_attr, user_classes?: ldapsimpleattrlist, verify?: Tdisable }): Promise<null>;
            $(realm: string): {
                /**
                 * Delete an authentication server.
                 * DELETE /access/domains/{realm}
                 */
                $delete(param: { realm: pverealm }): Promise<null>;
                /**
                 * Get auth server configuration.
                 * GET /access/domains/{realm}
                 */
                $get(param: { realm: pverealm }): Promise<any>;
                /**
                 * Update authentication server settings.
                 * PUT /access/domains/{realm}
                 */
                $put(param: { base_dn?: Tbase_dn, bind_dn?: Tbase_dn, capath?: string, cert?: string, certkey?: string, comment?: String0_4096, default?: Tdisable, delete?: pveconfigidlist, digest?: String0_40, domain?: Tdomain, filter?: String0_2048, group_classes?: ldapsimpleattrlist, group_dn?: Tbase_dn, group_filter?: String0_2048, group_name_attr?: ldapsimpleattr, mode?: Tmode_1, password?: string, port?: integer1_65535, realm: pverealm, secure?: Tdisable, server1?: address_1, server2?: address_1, sslversion?: Tsslversion, 'sync-defaults-options'?: realmsyncoptions, sync_attributes?: Tsync_attributes, tfa?: pvetfaconfig, user_attr?: Tuser_attr, user_classes?: ldapsimpleattrlist, verify?: Tdisable }): Promise<null>;
                sync: {
                    /**
                     * Syncs users and/or groups from the configured LDAP to user.cfg. NOTE: Synced groups will have the name 'name-$realm', so make sure those groups do not exist to prevent overwriting.
                     * POST /access/domains/{realm}/sync
                     */
                    $post(param: { 'dry-run'?: Tdisable, 'enable-new'?: Tdisable, full?: Tdisable, purge?: Tdisable, realm: pverealm, scope?: Tscope_1 }): Promise<string>;
                },
            };
        },
        ticket: {
            /**
             * Dummy. Useful for formatters which want to provide a login page.
             * GET /access/ticket
             */
            $get(): Promise<null>;
            /**
             * Create or verify authentication ticket.
             * POST /access/ticket
             */
            $post(param: { otp?: string, password: string, path?: String0_64, privs?: pveprivlist_1, realm?: pverealm, username: String0_64 }): Promise<object>;
        },
        password: {
            /**
             * Change user password.
             * PUT /access/password
             */
            $put(param: { password: String5_64, userid: pveuserid }): Promise<null>;
        },
        tfa: {
            /**
             * Finish a u2f challenge.
             * POST /access/tfa
             */
            $post(param: { response: string }): Promise<object>;
            /**
             * Change user u2f authentication.
             * PUT /access/tfa
             */
            $put(param: { action: Taction_1, config?: pvetfaconfig, key?: pvetfasecret, password?: String5_64, response?: string, userid: pveuserid }): Promise<object>;
        },
        permissions: {
            /**
             * Retrieve effective permissions of given user/token.
             * GET /access/permissions
             */
            $get(param?: { path?: string, userid?: Tuserid }): Promise<object>;
        },
    },
    pools: {
        /**
         * Pool index.
         * GET /pools
         */
        $get(): Promise<any[]>;
        /**
         * Create new pool.
         * POST /pools
         */
        $post(param: { comment?: string, poolid: pvepoolid }): Promise<null>;
        $(poolid: string): {
            /**
             * Delete pool.
             * DELETE /pools/{poolid}
             */
            $delete(param: { poolid: pvepoolid }): Promise<null>;
            /**
             * Get pool configuration.
             * GET /pools/{poolid}
             */
            $get(param: { poolid: pvepoolid }): Promise<object>;
            /**
             * Update pool data.
             * PUT /pools/{poolid}
             */
            $put(param: { comment?: string, delete?: Tdisable, poolid: pvepoolid, storage?: pvestorageidlist, vms?: pvevmidlist }): Promise<null>;
        };
    },
    version: {
        /**
         * API version details. The result also includes the global datacenter confguration.
         * GET /version
         */
        $get(): Promise<object>;
    },
}
