export namespace Proxmox {
    /**
     * Description.
     * @maxLength 4096
     */
    export type String0_4096 = string;
    /**
     * Replication Job ID. The ID is composed of a Guest ID and a job number, separated by a hyphen, i.e. '<GUEST>-<JOBNUM>'.
     * @pattern [1-9][0-9]{2,8}-\d{1,9}
     * @format pve-replication-job-id
     */
    export type pvereplicationjobid = string;
    /**
     * Rate limit in mbps (megabytes per second) as floating point number.
     * @minimum 1
     * @type number
     */
    export type Trate = number;
    /**
     * Mark the replication job for removal. The job will remove all local replication snapshots. When set to 'full', it also tries to remove replicated volumes on the target. The job then removes itself from the configuration file.
     */
    export type Tremove_job = 'local' | 'full';
    /**
     * Storage replication schedule. The format is a subset of `systemd` calendar events.
     * @format pve-calendar-event
     * @maxLength 128
     */
    export type pvecalendarevent = string;
    /**
     * Source of the replication.
     * @format pve-node
     */
    export type pvenode = string;
    /**
     * Section type.
     */
    export type Ttype = 'local';
    /**
     * A list of settings you want to delete.
     * @format pve-configid-list
     * @maxLength 4096
     */
    export type pveconfigidlist = string;
    /**
     * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
     * @maxLength 40
     */
    export type String0_40 = string;
    /**
     * The name of the cluster.
     * @format pve-node
     * @maxLength 15
     */
    export type pvenode_1 = string;
    /**
     * Address and priority information of a single corosync link. (up to 8 links supported; link0..link7)
     * @format {"address":{"default_key":1,"description":"Hostname (or IP) of this corosync link address.","format":"address","format_description":"IP","type":"string"},"priority":{"default":0,"description":"The priority for the link when knet is used in 'passive' mode (default). Lower value means higher priority. Only valid for cluster create, ignored on node add.","maximum":255,"minimum":0,"optional":1,"type":"integer"}}
     */
    export type Tlink = string;
    /**
     * Node id for this node.
     * @minimum 1
     * @type integer
     */
    export type integer_Min1 = number;
    /**
     * The JOIN_API_VERSION of the new node.
     * @type integer
     */
    export type integer = number;
    /**
     * IP Address of node to add. Used as fallback if no links are given.
     * @format ip
     */
    export type ip = string;
    /**
     * Number of votes for this node
     * @minimum 0
     * @type integer
     */
    export type integer_Min0 = number;
    /**
     * Certificate SHA 256 fingerprint.
     * @pattern ([A-Fa-f0-9]{2}:){31}[A-Fa-f0-9]{2}
     */
    export type Tfingerprint = string;
    /**
     * Superuser (root) password of peer node.
     * @maxLength 128
     */
    export type String0_128 = string;
    /**
     * Security Group name.
     * @pattern [A-Za-z][A-Za-z0-9\-\_]+
     * @minLength 2
     * @maxLength 18
     */
    export type Tgroup = string;
    /**
     * Rule action ('ACCEPT', 'DROP', 'REJECT') or security group name.
     * @pattern [A-Za-z][A-Za-z0-9\-\_]+
     * @minLength 2
     * @maxLength 20
     */
    export type Taction = string;
    /**
     * Restrict packet destination address. This can refer to a single IP address, an IP set ('+ipsetname') or an IP alias definition. You can also specify an address range like '20.34.101.207-201.3.9.99', or a list of IP addresses and networks (entries are separated by comma). Please do not mix IPv4 and IPv6 addresses inside such lists.
     * @format pve-fw-addr-spec
     */
    export type pvefwaddrspec = string;
    /**
     * Restrict TCP/UDP destination port. You can use service names or simple numbers (0-65535), as defined in '/etc/services'. Port ranges can be specified with '\d+:\d+', for example '80:85', and you can use comma separated list to match several ports or ranges.
     * @format pve-fw-dport-spec
     */
    export type pvefwdportspec = string;
    /**
     * Network interface name. You have to use network configuration key names for VMs and containers ('net\d+'). Host related rules can use arbitrary strings.
     * @format pve-iface
     * @minLength 2
     * @maxLength 20
     */
    export type pveiface = string;
    /**
     * Log level for firewall rule.
     */
    export type Tlog = 'emerg' | 'alert' | 'crit' | 'err' | 'warning' | 'notice' | 'info' | 'debug' | 'nolog';
    /**
     * IP protocol. You can use protocol names ('tcp'/'udp') or simple numbers, as defined in '/etc/protocols'.
     * @format pve-fw-protocol-spec
     */
    export type pvefwprotocolspec = string;
    /**
     * Restrict TCP/UDP source port. You can use service names or simple numbers (0-65535), as defined in '/etc/services'. Port ranges can be specified with '\d+:\d+', for example '80:85', and you can use comma separated list to match several ports or ranges.
     * @format pve-fw-sport-spec
     */
    export type pvefwsportspec = string;
    /**
     * Rule type.
     */
    export type Ttype_1 = 'in' | 'out' | 'group';
    /**
     * A list of settings you want to delete.
     * @format pve-configid-list
     */
    export type pveconfigidlist_1 = string;
    /**
     * IP set name.
     * @pattern [A-Za-z][A-Za-z0-9\-\_]+
     * @minLength 2
     * @maxLength 64
     */
    export type Tname = string;
    /**
     * Network/IP specification in CIDR format.
     * @format IPorCIDRorAlias
     */
    export type IPorCIDRorAlias = string;
    /**
     * Network/IP specification in CIDR format.
     * @format IPorCIDR
     */
    export type IPorCIDR = string;
    /**
     * Log ratelimiting settings
     * @format {"burst":{"default":5,"description":"Inital burst of packages which will get logged","minimum":0,"optional":1,"type":"integer"},"enable":{"default":"1","default_key":1,"description":"Enable or disable log rate limiting","type":"boolean"},"rate":{"default":"1/second","description":"Frequency with which the burst bucket gets refilled","format_description":"rate","optional":1,"pattern":"[1-9][0-9]*\\/(second|minute|hour|day)","type":"string"}}
     */
    export type Tlog_ratelimit = string;
    /**
     * Input policy.
     */
    export type Tpolicy_in = 'ACCEPT' | 'REJECT' | 'DROP';
    /**
     * Only list references of specified type.
     */
    export type Ttype_2 = 'alias' | 'ipset';
    /**
     * Compress dump file.
     */
    export type Tcompress = '0' | '1' | 'gzip' | 'lzo' | 'zstd';
    /**
     * Day of week selection.
     * @format pve-day-of-week-list
     */
    export type pvedayofweeklist = string;
    /**
     * Exclude specified guest systems (assumes --all)
     * @format pve-vmid-list
     */
    export type pvevmidlist = string;
    /**
     * Exclude certain files/directories (shell globs).
     * @format string-alist
     */
    export type stringalist = string;
    /**
     * Set CFQ ionice priority.
     * @minimum 0
     * @maximum 8
     * @type integer
     */
    export type integer0_8 = number;
    /**
     * Specify when to send an email
     */
    export type Tmailnotification = 'always' | 'failure';
    /**
     * Comma-separated list of email addresses that should receive email notifications.
     * @format string-list
     */
    export type stringlist = string;
    /**
     * Backup mode.
     */
    export type Tmode = 'snapshot' | 'suspend' | 'stop';
    /**
     * Unused, will be removed in a future release.
     * @minimum 500
     * @type integer
     */
    export type integer_Min500 = number;
    /**
     * Job Start time.
     * @pattern \d{1,2}:\d{1,2}
     */
    export type Tstarttime = string;
    /**
     * Store resulting file to this storage.
     * @format pve-storage-id
     */
    export type pvestorageid = string;
    /**
     * Only list resources of specific type
     */
    export type Ttype_3 = 'ct' | 'vm';
    /**
     * The HA group identifier.
     * @format pve-configid
     */
    export type pveconfigid = string;
    /**
     * HA resource ID. This consists of a resource type followed by a resource specific name, separated with colon (example: vm:100 / ct:100). For virtual machines and containers, you can simply use the VM or CT id as a shortcut (example: 100).
     * @format pve-ha-resource-or-vm-id
     */
    export type pveharesourceorvmid = string;
    /**
     * Requested resource state. The CRM reads this state and acts accordingly.
     * Please note that `enabled` is just an alias for `started`.
     * `started`;;
     * The CRM tries to start the resource. Service state is
     * set to `started` after successful start. On node failures, or when start
     * fails, it tries to recover the resource.  If everything fails, service
     * state it set to `error`.
     * `stopped`;;
     * The CRM tries to keep the resource in `stopped` state, but it
     * still tries to relocate the resources on node failures.
     * `disabled`;;
     * The CRM tries to put the resource in `stopped` state, but does not try
     * to relocate the resources on node failures. The main purpose of this
     * state is error recovery, because it is the only way to move a resource out
     * of the `error` state.
     * `ignored`;;
     * The resource gets removed from the manager status and so the CRM and the LRM do
     * not touch the resource anymore. All {pve} API calls affecting this resource
     * will be executed, directly bypassing the HA stack. CRM commands will be thrown
     * away while there source is in this state. The resource will not get relocated
     * on node failures.
     * 
     */
    export type Tstate = 'started' | 'stopped' | 'enabled' | 'disabled' | 'ignored';
    /**
     * List of cluster node members, where a priority can be given to each node. A resource bound to a group will run on the available nodes with the highest priority. If there are more nodes in the highest priority class, the services will get distributed to those nodes. The priorities have a relative meaning only.
     * @format pve-ha-group-node-list
     */
    export type pvehagroupnodelist = string;
    /**
     * Group type.
     */
    export type Ttype_4 = 'group';
    /**
     * Only list ACME plugins of a specific type
     */
    export type Ttype_5 = 'dns' | 'standalone';
    /**
     * API plugin name
     */
    export type Tapi = 'acmedns' | 'acmeproxy' | 'active24' | 'ad' | 'ali' | 'autodns' | 'aws' | 'azure' | 'cf' | 'clouddns' | 'cloudns' | 'cn' | 'conoha' | 'constellix' | 'cx' | 'cyon' | 'da' | 'ddnss' | 'desec' | 'df' | 'dgon' | 'dnsimple' | 'do' | 'doapi' | 'domeneshop' | 'dp' | 'dpi' | 'dreamhost' | 'duckdns' | 'durabledns' | 'dyn' | 'dynu' | 'dynv6' | 'easydns' | 'euserv' | 'exoscale' | 'freedns' | 'gandi_livedns' | 'gcloud' | 'gd' | 'gdnsdk' | 'he' | 'hexonet' | 'hostingde' | 'infoblox' | 'internetbs' | 'inwx' | 'ispconfig' | 'jd' | 'kas' | 'kinghost' | 'knot' | 'leaseweb' | 'lexicon' | 'linode' | 'linode_v4' | 'loopia' | 'lua' | 'maradns' | 'me' | 'miab' | 'misaka' | 'myapi' | 'mydevil' | 'mydnsjp' | 'namecheap' | 'namecom' | 'namesilo' | 'nederhost' | 'neodigit' | 'netcup' | 'nic' | 'nsd' | 'nsone' | 'nsupdate' | 'nw' | 'one' | 'online' | 'openprovider' | 'opnsense' | 'ovh' | 'pdns' | 'pleskxml' | 'pointhq' | 'rackspace' | 'rcode0' | 'regru' | 'schlundtech' | 'selectel' | 'servercow' | 'tele3' | 'ultra' | 'unoeuro' | 'variomedia' | 'vscale' | 'vultr' | 'yandex' | 'zilore' | 'zone' | 'zonomi';
    /**
     * List of cluster node names.
     * @format pve-node-list
     */
    export type pvenodelist = string;
    /**
     * Extra delay in seconds to wait before requesting validation. Allows to cope with a long TTL of DNS records.
     * @minimum 0
     * @maximum 172800
     * @type integer
     */
    export type integer0_172800 = number;
    /**
     * Contact email addresses.
     * @format email-list
     */
    export type emaillist = string;
    /**
     * URL of ACME CA directory endpoint.
     * @pattern ^https?://.*
     */
    export type Tdirectory = string;
    export type Tscope = 'all' | 'versions';
    /**
     * Anycast router ipv4 address.
     * @format CIDRv4
     */
    export type CIDRv4 = string;
    /**
     * Anycast router ipv6 address.
     * @format CIDRv6
     */
    export type CIDRv6 = string;
    /**
     * Anycast router mac address
     * @format mac-addr
     */
    export type macaddr = string;
    /**
     * Type
     */
    export type Ttype_6 = 'vnet';
    /**
     * The SDN vnet object identifier.
     * @format pve-sdn-vnet-id
     */
    export type pvesdnvnetid = string;
    /**
     * Only list sdn zones of specific type
     */
    export type Ttype_7 = 'evpn' | 'faucet' | 'qinq' | 'simple' | 'vlan' | 'vxlan';
    /**
     * peers address list.
     * @format ip-list
     */
    export type iplist = string;
    /**
     * Plugin type.
     * @format pve-configid
     */
    export type pveconfigid_1 = 'evpn' | 'faucet' | 'qinq' | 'simple' | 'vlan' | 'vxlan';
    export type Tvlanprotocol = '802.1q' | '802.1ad';
    /**
     * The SDN zone object identifier.
     * @format pve-sdn-zone-id
     */
    export type pvesdnzoneid = string;
    /**
     * Only list sdn controllers of specific type
     */
    export type Ttype_8 = 'evpn' | 'faucet';
    /**
     * The SDN controller object identifier.
     * @format pve-sdn-controller-id
     */
    export type pvesdncontrollerid = string;
    /**
     * Plugin type.
     * @format pve-configid
     */
    export type pveconfigid_2 = 'evpn' | 'faucet';
    export type Ttype_9 = 'vm' | 'storage' | 'node' | 'sdn';
    /**
     * Set bandwidth/io limits various operations.
     * @format {"clone":{"description":"bandwidth limit in KiB/s for cloning disks","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"default":{"description":"default bandwidth limit in KiB/s","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"migration":{"description":"bandwidth limit in KiB/s for migrating guests (including moving local disks)","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"move":{"description":"bandwidth limit in KiB/s for moving disks","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"},"restore":{"description":"bandwidth limit in KiB/s for restoring guests from backups","format_description":"LIMIT","minimum":0,"optional":1,"type":"number"}}
     */
    export type Tbwlimit = string;
    /**
     * Select the default Console viewer. You can either use the builtin java applet (VNC; deprecated and maps to html5), an external virt-viewer comtatible application (SPICE), an HTML5 based vnc viewer (noVNC), or an HTML5 based console client (xtermjs). If the selected viewer is not available (e.g. SPICE not activated for the VM), the fallback is noVNC.
     */
    export type Tconsole = 'applet' | 'vv' | 'html5' | 'xtermjs';
    /**
     * Specify email address to send notification from (default is root@$hostname)
     * @format email-opt
     */
    export type emailopt = string;
    /**
     * Set the fencing mode of the HA cluster. Hardware mode needs a valid configuration of fence devices in /etc/pve/ha/fence.cfg. With both all two modes are used.
     * WARNING: 'hardware' and 'both' are EXPERIMENTAL & WIP
     */
    export type Tfencing = 'watchdog' | 'hardware' | 'both';
    /**
     * Cluster wide HA settings.
     * @format {"shutdown_policy":{"default":"conditional","description":"The policy for HA services on node shutdown. 'freeze' disables auto-recovery, 'failover' ensures recovery, 'conditional' recovers on poweroff and freezes on reboot. 'migrate' will migrate running services to other nodes, if possible. With 'freeze' or 'failover', HA Services will always get stopped first on shutdown.","enum":["freeze","failover","conditional","migrate"],"type":"string","verbose_description":"Describes the policy for handling HA services on poweroff or reboot of a node. Freeze will always freeze services which are still located on the node on shutdown, those services won't be recovered by the HA manager. Failover will not mark the services as frozen and thus the services will get recovered to other nodes, if the shutdown node does not come up again quickly (< 1min). 'conditional' chooses automatically depending on the type of shutdown, i.e., on a reboot the service will be frozen but on a poweroff the service will stay as is, and thus get recovered after about 2 minutes. Migrate will try to move all running services to another node when a reboot or shutdown was triggered. The poweroff process will only continue once no running services are located on the node anymore. If the node comes up again, the service will be moved back to the previously powered-off node, at least if no other migration, reloaction or recovery took place."}}
     */
    export type Tha = string;
    /**
     * Specify external http proxy which is used for downloads (example: 'http://username:password@host:port/')
     * @pattern http://.*
     */
    export type Thttp_proxy = string;
    /**
     * Default keybord layout for vnc server.
     */
    export type Tkeyboard = 'de' | 'de-ch' | 'da' | 'en-gb' | 'en-us' | 'es' | 'fi' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'hu' | 'is' | 'it' | 'ja' | 'lt' | 'mk' | 'nl' | 'no' | 'pl' | 'pt' | 'pt-br' | 'sv' | 'sl' | 'tr';
    /**
     * Default GUI language.
     */
    export type Tlanguage = 'ca' | 'da' | 'de' | 'en' | 'es' | 'eu' | 'fa' | 'fr' | 'he' | 'it' | 'ja' | 'nb' | 'nn' | 'pl' | 'pt_BR' | 'ru' | 'sl' | 'sv' | 'tr' | 'zh_CN' | 'zh_TW';
    /**
     * Prefix for autogenerated MAC addresses.
     * @format mac-prefix
     */
    export type macprefix = string;
    /**
     * For cluster wide migration settings.
     * @format {"network":{"description":"CIDR of the (sub) network that is used for migration.","format":"CIDR","format_description":"CIDR","optional":1,"type":"string"},"type":{"default":"secure","default_key":1,"description":"Migration traffic is encrypted using an SSH tunnel by default. On secure, completely private networks this can be disabled to increase performance.","enum":["secure","insecure"],"type":"string"}}
     */
    export type Tmigration = string;
    /**
     * u2f
     * @format {"appid":{"description":"U2F AppId URL override. Defaults to the origin.","format_description":"APPID","optional":1,"type":"string"},"origin":{"description":"U2F Origin override. Mostly useful for single nodes with a single URL.","format_description":"URL","optional":1,"type":"string"}}
     */
    export type Tu2f = string;
    /**
     * The (unique) ID of the VM.
     * @format pve-vmid
     * @minimum 1
     * @type integer
     */
    export type pvevmid = number;
    /**
     * Enable/disable Qemu GuestAgent and its properties.
     * @format {"enabled":{"default":0,"default_key":1,"description":"Enable/disable Qemu GuestAgent.","type":"boolean"},"fstrim_cloned_disks":{"default":0,"description":"Run fstrim after cloning/moving a disk.","optional":1,"type":"boolean"},"type":{"default":"virtio","description":"Select the agent type","enum":["virtio","isa"],"optional":1,"type":"string"}}
     */
    export type Tagent = string;
    /**
     * Virtual processor architecture. Defaults to the host.
     */
    export type Tarch = 'x86_64' | 'aarch64';
    /**
     * The backup archive. Either the file system path to a .tar or .vma file (use '-' to pipe data from stdin) or a proxmox storage backup volume identifier.
     * @maxLength 255
     */
    export type String0_255 = string;
    /**
     * Configure a audio device, useful in combination with QXL/Spice.
     * @format {"device":{"description":"Configure an audio device.","enum":["ich9-intel-hda","intel-hda","AC97"],"type":"string"},"driver":{"default":"spice","description":"Driver backend for the audio device.","enum":["spice"],"optional":1,"type":"string"}}
     */
    export type Taudio0 = string;
    /**
     * Select BIOS implementation.
     */
    export type Tbios = 'seabios' | 'ovmf';
    /**
     * Boot on floppy (a), hard disk (c), CD-ROM (d), or network (n).
     * @pattern [acdn]{1,4}
     */
    export type Tboot = string;
    /**
     * Enable booting from specified disk.
     * @pattern (ide|sata|scsi|virtio)\d+
     * @format pve-qm-bootdisk
     */
    export type pveqmbootdisk = string;
    /**
     * This is an alias for option -ide2
     * @format pve-qm-ide
     */
    export type pveqmide = string;
    /**
     * cloud-init: Specify custom files to replace the automatically generated ones at start.
     * @format pve-qm-cicustom
     */
    export type pveqmcicustom = string;
    /**
     * Specifies the cloud-init configuration format. The default depends on the configured operating system type (`ostype`. We use the `nocloud` format for Linux, and `configdrive2` for windows.
     */
    export type Tcitype = 'configdrive2' | 'nocloud';
    /**
     * Emulated CPU type.
     * @format pve-vm-cpu-conf
     */
    export type pvevmcpuconf = string;
    /**
     * Limit of CPU usage.
     * NOTE: If the computer has 2 CPUs, it has total of '2' CPU time. Value '0' indicates no CPU limit.
     * @minimum 0
     * @maximum 128
     * @type number
     */
    export type Tcpulimit = number;
    /**
     * CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to weights of all the other running VMs.
     * @minimum 2
     * @maximum 262144
     * @type integer
     */
    export type integer2_262144 = number;
    /**
     * Configure a Disk for storing EFI vars
     * @format {"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"alias":"file"}}
     */
    export type Tefidisk0 = string;
    /**
     * Script that will be executed during various steps in the vms lifetime.
     * @format pve-volume-id
     */
    export type pvevolumeid = string;
    /**
     * Map host PCI devices into guest.
     * NOTE: This option allows direct access to host hardware. So it is no longer
     * possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     * 
     * @format pve-qm-hostpci
     */
    export type pveqmhostpci = string;
    /**
     * Selectively enable hotplug features. This is a comma separated list of hotplug features: 'network', 'disk', 'cpu', 'memory' and 'usb'. Use '0' to disable hotplug completely. Value '1' is an alias for the default 'network,disk,usb'.
     * @format pve-hotplug-features
     */
    export type pvehotplugfeatures = string;
    /**
     * Enable/disable hugepages memory.
     */
    export type Thugepages = 'any' | '2' | '1024';
    /**
     * Use volume as IDE hard disk or CD-ROM (n is 0 to 3).
     * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"model":{"description":"The drive's reported model name, url-encoded, up to 40 bytes long.","format":"urlencoded","format_description":"model","maxLength":120,"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}}
     */
    export type Tide = string;
    /**
     * cloud-init: Specify IP addresses and gateways for the corresponding interface.
     * IP addresses use CIDR notation, gateways are optional but need an IP of the same type specified.
     * The special string 'dhcp' can be used for IP addresses to use DHCP, in which case no explicit gateway should be provided.
     * For IPv6 the special string 'auto' can be used to use stateless autoconfiguration.
     * If cloud-init is enabled and neither an IPv4 nor an IPv6 address is specified, it defaults to using dhcp on IPv4.
     * 
     * @format pve-qm-ipconfig
     */
    export type pveqmipconfig = string;
    /**
     * Inter-VM shared memory. Useful for direct communication between VMs, or to the host.
     * @format {"name":{"description":"The name of the file. Will be prefixed with 'pve-shm-'. Default is the VMID. Will be deleted when the VM is stopped.","format_description":"string","optional":1,"pattern":"[a-zA-Z0-9\\-]+","type":"string"},"size":{"description":"The size of the file in MB.","minimum":1,"type":"integer"}}
     */
    export type Tivshmem = string;
    /**
     * Lock/unlock the VM.
     */
    export type Tlock = 'backup' | 'clone' | 'create' | 'migrate' | 'rollback' | 'snapshot' | 'snapshot-delete' | 'suspending' | 'suspended';
    /**
     * Specifies the Qemu machine type.
     * @pattern (pc|pc(-i440fx)?-\d+(\.\d+)+(\+pve\d+)?(\.pxe)?|q35|pc-q35-\d+(\.\d+)+(\+pve\d+)?(\.pxe)?|virt(?:-\d+(\.\d+)+)?(\+pve\d+)?)
     * @maxLength 40
     */
    export type Tmachine = string;
    /**
     * Amount of RAM for the VM in MB. This is the maximum available memory when you use the balloon device.
     * @minimum 16
     * @type integer
     */
    export type integer_Min16 = number;
    /**
     * Set maximum tolerated downtime (in seconds) for migrations.
     * @minimum 0
     * @type number
     */
    export type Tmigrate_downtime = number;
    /**
     * Set a name for the VM. Only used on the configuration web interface.
     * @format dns-name
     */
    export type dnsname = string;
    /**
     * cloud-init: Sets DNS server IP address for a container. Create will automatically use the setting from the host if neither searchdomain nor nameserver are set.
     * @format address-list
     */
    export type addresslist = string;
    /**
     * Specify network devices.
     * @format {"bridge":{"description":"Bridge to attach the network device to. The Proxmox VE standard bridge\nis called 'vmbr0'.\n\nIf you do not specify a bridge, we create a kvm user (NATed) network\ndevice, which provides DHCP and DNS services. The following addresses\nare used:\n\n 10.0.2.2   Gateway\n 10.0.2.3   DNS Server\n 10.0.2.4   SMB Server\n\nThe DHCP server assign addresses to the guest starting from 10.0.2.15.\n","format_description":"bridge","optional":1,"pattern":"[-_.\\w\\d]+","type":"string"},"e1000":{"alias":"macaddr","keyAlias":"model"},"e1000-82540em":{"alias":"macaddr","keyAlias":"model"},"e1000-82544gc":{"alias":"macaddr","keyAlias":"model"},"e1000-82545em":{"alias":"macaddr","keyAlias":"model"},"firewall":{"description":"Whether this interface should be protected by the firewall.","optional":1,"type":"boolean"},"i82551":{"alias":"macaddr","keyAlias":"model"},"i82557b":{"alias":"macaddr","keyAlias":"model"},"i82559er":{"alias":"macaddr","keyAlias":"model"},"link_down":{"description":"Whether this interface should be disconnected (like pulling the plug).","optional":1,"type":"boolean"},"macaddr":{"description":"MAC address. That address must be unique withing your network. This is automatically generated if not specified.","format":"mac-addr","format_description":"XX:XX:XX:XX:XX:XX","optional":1,"type":"string","verbose_description":"A common MAC address with the I/G (Individual/Group) bit not set."},"model":{"default_key":1,"description":"Network Card Model. The 'virtio' model provides the best performance with very low CPU overhead. If your guest does not support this driver, it is usually best to use 'e1000'.","enum":["rtl8139","ne2k_pci","e1000","pcnet","virtio","ne2k_isa","i82551","i82557b","i82559er","vmxnet3","e1000-82540em","e1000-82544gc","e1000-82545em"],"type":"string"},"mtu":{"description":"Force MTU, for VirtIO only. Set to '1' to use the bridge MTU","maximum":65520,"minimum":1,"optional":1,"type":"integer"},"ne2k_isa":{"alias":"macaddr","keyAlias":"model"},"ne2k_pci":{"alias":"macaddr","keyAlias":"model"},"pcnet":{"alias":"macaddr","keyAlias":"model"},"queues":{"description":"Number of packet queues to be used on the device.","maximum":16,"minimum":0,"optional":1,"type":"integer"},"rate":{"description":"Rate limit in mbps (megabytes per second) as floating point number.","minimum":0,"optional":1,"type":"number"},"rtl8139":{"alias":"macaddr","keyAlias":"model"},"tag":{"description":"VLAN tag to apply to packets on this interface.","maximum":4094,"minimum":1,"optional":1,"type":"integer"},"trunks":{"description":"VLAN trunks to pass through this interface.","format_description":"vlanid[;vlanid...]","optional":1,"pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"virtio":{"alias":"macaddr","keyAlias":"model"},"vmxnet3":{"alias":"macaddr","keyAlias":"model"}}
     */
    export type Tnet = string;
    /**
     * NUMA topology.
     * @format {"cpus":{"description":"CPUs accessing this NUMA node.","format_description":"id[-id];...","pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"hostnodes":{"description":"Host NUMA nodes to use.","format_description":"id[-id];...","optional":1,"pattern":"(?^:\\d+(?:-\\d+)?(?:;\\d+(?:-\\d+)?)*)","type":"string"},"memory":{"description":"Amount of memory this NUMA node provides.","optional":1,"type":"number"},"policy":{"description":"NUMA allocation policy.","enum":["preferred","bind","interleave"],"optional":1,"type":"string"}}
     */
    export type Tnuma = string;
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
     * 
     */
    export type Tostype = 'other' | 'wxp' | 'w2k' | 'w2k3' | 'w2k8' | 'wvista' | 'win7' | 'win8' | 'win10' | 'l24' | 'l26' | 'solaris';
    /**
     * Map host parallel devices (n is 0 to 2).
     * NOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     * 
     * @pattern /dev/parport\d+|/dev/usb/lp\d+
     */
    export type Tparallel = string;
    /**
     * Add the VM to the specified pool.
     * @format pve-poolid
     */
    export type pvepoolid = string;
    /**
     * Configure a VirtIO-based Random Number Generator.
     * @format {"max_bytes":{"default":1024,"description":"Maximum bytes of entropy injected into the guest every 'period' milliseconds. Prefer a lower value when using /dev/random as source. Use 0 to disable limiting (potentially dangerous!).","optional":1,"type":"integer"},"period":{"default":1000,"description":"Every 'period' milliseconds the entropy-injection quota is reset, allowing the guest to retrieve another 'max_bytes' of entropy.","optional":1,"type":"integer"},"source":{"default_key":1,"description":"The file on the host to gather entropy from. In most cases /dev/urandom should be preferred over /dev/random to avoid entropy-starvation issues on the host. Using urandom does *not* decrease security in any meaningful way, as it's still seeded from real entropy, and the bytes provided will most likely be mixed with real entropy on the guest as well. /dev/hwrng can be used to pass through a hardware RNG from the host.","enum":["/dev/urandom","/dev/random","/dev/hwrng"],"type":"string"}}
     */
    export type Trng0 = string;
    /**
     * Use volume as SATA hard disk or CD-ROM (n is 0 to 5).
     * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}}
     */
    export type Tsata = string;
    /**
     * Use volume as SCSI hard disk or CD-ROM (n is 0 to 30).
     * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iothread":{"description":"Whether to use iothreads for this drive","optional":1,"type":"boolean"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"queues":{"description":"Number of queues.","minimum":2,"optional":1,"type":"integer"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"scsiblock":{"default":0,"description":"whether to use scsi-block for full passthrough of host block device\n\nWARNING: can lead to I/O errors in combination with low memory or high memory fragmentation on host","optional":1,"type":"boolean"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"ssd":{"description":"Whether to expose this drive as an SSD, rather than a rotational hard disk.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"},"wwn":{"description":"The drive's worldwide name, encoded as 16 bytes hex string, prefixed by '0x'.","format_description":"wwn","optional":1,"pattern":"(?^:^(0x)[0-9a-fA-F]{16})","type":"string"}}
     */
    export type Tscsi = string;
    /**
     * SCSI controller model
     */
    export type Tscsihw = 'lsi' | 'lsi53c810' | 'virtio-scsi-pci' | 'virtio-scsi-single' | 'megasas' | 'pvscsi';
    /**
     * Create a serial device inside the VM (n is 0 to 3), and pass through a
     * host serial device (i.e. /dev/ttyS0), or create a unix socket on the
     * host side (use 'qm terminal' to open a terminal connection).
     * NOTE: If you pass through a host serial device, it is no longer possible to migrate such machines - use with special care.
     * CAUTION: Experimental! User reported problems with this option.
     * 
     * @pattern (/dev/.+|socket)
     */
    export type Tserial = string;
    /**
     * Amount of memory shares for auto-ballooning. The larger the number is, the more memory this VM gets. Number is relative to weights of all other running VMs. Using zero disables auto-ballooning. Auto-ballooning is done by pvestatd.
     * @minimum 0
     * @maximum 50000
     * @type integer
     */
    export type integer0_50000 = number;
    /**
     * Specify SMBIOS type 1 fields.
     * @format pve-qm-smbios1
     * @maxLength 512
     */
    export type pveqmsmbios1 = string;
    /**
     * Configure additional enhancements for SPICE.
     * @format {"foldersharing":{"default":"0","description":"Enable folder sharing via SPICE. Needs Spice-WebDAV daemon installed in the VM.","optional":1,"type":"boolean"},"videostreaming":{"default":"off","description":"Enable video streaming. Uses compression for detected video streams.","enum":["off","all","filter"],"optional":1,"type":"string"}}
     */
    export type Tspice_enhancements = string;
    /**
     * cloud-init: Setup public SSH keys (one key per line, OpenSSH format).
     * @format urlencoded
     */
    export type urlencoded = string;
    /**
     * Set the initial date of the real time clock. Valid format for date are: 'now' or '2006-06-17T16:01:21' or '2006-06-17'.
     * @pattern (now|\d{4}-\d{1,2}-\d{1,2}(T\d{1,2}:\d{1,2}:\d{1,2})?)
     */
    export type Tstartdate = string;
    /**
     * Startup and shutdown behavior. Order is a non-negative number defining the general startup order. Shutdown in done with reverse ordering. Additionally you can set the 'up' or 'down' delay in seconds, which specifies a delay to wait before the next VM is started or stopped.
     * @format pve-startup-order
     */
    export type pvestartuporder = string;
    /**
     * Tags of the VM. This is only meta information.
     * @format pve-tag-list
     */
    export type pvetaglist = string;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     * @format {"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id","format_description":"volume","type":"string"},"volume":{"alias":"file"}}
     */
    export type Tunused = string;
    /**
     * Configure an USB device (n is 0 to 4).
     * @format {"host":{"default_key":1,"description":"The Host USB device or port or the value 'spice'. HOSTUSBDEVICE syntax is:\n\n 'bus-port(.port)*' (decimal numbers) or\n 'vendor_id:product_id' (hexadeciaml numbers) or\n 'spice'\n\nYou can use the 'lsusb -t' command to list existing usb devices.\n\nNOTE: This option allows direct access to host hardware. So it is no longer possible to migrate such machines - use with special care.\n\nThe value 'spice' can be used to add a usb redirection devices for spice.\n","format":"pve-qm-usb-device","format_description":"HOSTUSBDEVICE|spice","type":"string"},"usb3":{"default":0,"description":"Specifies whether if given host option is a USB3 device or port.","optional":1,"type":"boolean"}}
     */
    export type Tusb = string;
    /**
     * Configure the VGA Hardware. If you want to use high resolution modes (>= 1280x1024x16) you may need to increase the vga memory option. Since QEMU 2.9 the default VGA display type is 'std' for all OS types besides some Windows versions (XP and older) which use 'cirrus'. The 'qxl' option enables the SPICE display server. For win* OS you can select how many independent displays you want, Linux guests can add displays them self.
     * You can also run without any graphic card, using a serial device as terminal.
     * @format {"memory":{"description":"Sets the VGA memory (in MiB). Has no effect with serial display.","maximum":512,"minimum":4,"optional":1,"type":"integer"},"type":{"default":"std","default_key":1,"description":"Select the VGA type.","enum":["cirrus","qxl","qxl2","qxl3","qxl4","none","serial0","serial1","serial2","serial3","std","virtio","vmware"],"optional":1,"type":"string"}}
     */
    export type Tvga = string;
    /**
     * Use volume as VIRTIO hard disk (n is 0 to 15).
     * @format {"aio":{"description":"AIO type to use.","enum":["native","threads"],"optional":1,"type":"string"},"backup":{"description":"Whether the drive should be included when making backups.","optional":1,"type":"boolean"},"bps":{"description":"Maximum r/w speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_rd":{"description":"Maximum read speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_rd_length":{"alias":"bps_rd_max_length"},"bps_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"bps_wr":{"description":"Maximum write speed in bytes per second.","format_description":"bps","optional":1,"type":"integer"},"bps_wr_length":{"alias":"bps_wr_max_length"},"bps_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"cache":{"description":"The drive's cache mode","enum":["none","writethrough","writeback","unsafe","directsync"],"optional":1,"type":"string"},"cyls":{"description":"Force the drive's physical geometry to have a specific cylinder count.","optional":1,"type":"integer"},"detect_zeroes":{"description":"Controls whether to detect and try to optimize writes of zeroes.","optional":1,"type":"boolean"},"discard":{"description":"Controls whether to pass discard/trim requests to the underlying storage.","enum":["ignore","on"],"optional":1,"type":"string"},"file":{"default_key":1,"description":"The drive's backing volume.","format":"pve-volume-id-or-qm-path","format_description":"volume","type":"string"},"format":{"description":"The drive's backing file's data format.","enum":["raw","cow","qcow","qed","qcow2","vmdk","cloop"],"optional":1,"type":"string"},"heads":{"description":"Force the drive's physical geometry to have a specific head count.","optional":1,"type":"integer"},"iops":{"description":"Maximum r/w I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max":{"description":"Maximum unthrottled r/w I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_max_length":{"description":"Maximum length of I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_rd":{"description":"Maximum read I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_length":{"alias":"iops_rd_max_length"},"iops_rd_max":{"description":"Maximum unthrottled read I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_rd_max_length":{"description":"Maximum length of read I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iops_wr":{"description":"Maximum write I/O in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_length":{"alias":"iops_wr_max_length"},"iops_wr_max":{"description":"Maximum unthrottled write I/O pool in operations per second.","format_description":"iops","optional":1,"type":"integer"},"iops_wr_max_length":{"description":"Maximum length of write I/O bursts in seconds.","format_description":"seconds","minimum":1,"optional":1,"type":"integer"},"iothread":{"description":"Whether to use iothreads for this drive","optional":1,"type":"boolean"},"mbps":{"description":"Maximum r/w speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_max":{"description":"Maximum unthrottled r/w pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd":{"description":"Maximum read speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_rd_max":{"description":"Maximum unthrottled read pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr":{"description":"Maximum write speed in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"mbps_wr_max":{"description":"Maximum unthrottled write pool in megabytes per second.","format_description":"mbps","optional":1,"type":"number"},"media":{"default":"disk","description":"The drive's media type.","enum":["cdrom","disk"],"optional":1,"type":"string"},"replicate":{"default":1,"description":"Whether the drive should considered for replication jobs.","optional":1,"type":"boolean"},"rerror":{"description":"Read error action.","enum":["ignore","report","stop"],"optional":1,"type":"string"},"secs":{"description":"Force the drive's physical geometry to have a specific sector count.","optional":1,"type":"integer"},"serial":{"description":"The drive's reported serial number, url-encoded, up to 20 bytes long.","format":"urlencoded","format_description":"serial","maxLength":60,"optional":1,"type":"string"},"shared":{"default":0,"description":"Mark this locally-managed volume as available on all nodes","optional":1,"type":"boolean","verbose_description":"Mark this locally-managed volume as available on all nodes.\n\nWARNING: This option does not share the volume automatically, it assumes it is shared already!"},"size":{"description":"Disk size. This is purely informational and has no effect.","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"snapshot":{"description":"Controls qemu's snapshot mode feature. If activated, changes made to the disk are temporary and will be discarded when the VM is shutdown.","optional":1,"type":"boolean"},"trans":{"description":"Force disk geometry bios translation mode.","enum":["none","lba","auto"],"optional":1,"type":"string"},"volume":{"alias":"file"},"werror":{"description":"Write error action.","enum":["enospc","ignore","report","stop"],"optional":1,"type":"string"}}
     */
    export type Tvirtio = string;
    /**
     * The VM generation ID (vmgenid) device exposes a 128-bit integer value identifier to the guest OS. This allows to notify the guest operating system when the virtual machine is executed with a different configuration (e.g. snapshot execution or creation from a template). The guest operating system notices the change, and is then able to react as appropriate by marking its copies of distributed databases as dirty, re-initializing its random number generator, etc.
     * Note that auto-creation only works when done throug API/CLI create or update methods, but not when manually editing the config file.
     * @pattern (?:[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}|[01])
     */
    export type Tvmgenid = string;
    /**
     * Create a virtual hardware watchdog device. Once enabled (by a guest action), the watchdog must be periodically polled by an agent inside the guest or else the watchdog will reset the guest (or execute the respective action specified)
     * @format pve-qm-watchdog
     */
    export type pveqmwatchdog = string;
    /**
     * The QGA command.
     */
    export type Tcommand = 'fsfreeze-freeze' | 'fsfreeze-status' | 'fsfreeze-thaw' | 'fstrim' | 'get-fsinfo' | 'get-host-name' | 'get-memory-block-info' | 'get-memory-blocks' | 'get-osinfo' | 'get-time' | 'get-timezone' | 'get-users' | 'get-vcpus' | 'info' | 'network-get-interfaces' | 'ping' | 'shutdown' | 'suspend-disk' | 'suspend-hybrid' | 'suspend-ram';
    /**
     * The new password.
     * @minLength 5
     * @maxLength 1024
     */
    export type String5_1024 = string;
    /**
     * Data to pass as 'input-data' to the guest. Usually treated as STDIN to 'command'.
     * @maxLength 65536
     */
    export type String0_65536 = string;
    /**
     * The content to write into the file.
     * @maxLength 61440
     */
    export type String0_61440 = string;
    /**
     * The RRD consolidation function
     */
    export type Tcf = 'AVERAGE' | 'MAX';
    /**
     * Specify the time frame you are interested in.
     */
    export type Ttimeframe = 'hour' | 'day' | 'week' | 'month' | 'year';
    /**
     * Fetch config values from given snapshot.
     * @format pve-configid
     * @maxLength 40
     */
    export type pveconfigid_3 = string;
    /**
     * Time to wait for the task to finish. We return 'null' if the task finish within that time.
     * @minimum 1
     * @maximum 30
     * @type integer
     */
    export type integer1_30 = number;
    /**
     * opens a serial terminal (defaults to display)
     */
    export type Tserial_1 = 'serial0' | 'serial1' | 'serial2' | 'serial3';
    /**
     * Port number returned by previous vncproxy call.
     * @minimum 5900
     * @maximum 5999
     * @type integer
     */
    export type integer5900_5999 = number;
    /**
     * Ticket from previous call to vncproxy.
     * @maxLength 512
     */
    export type String0_512 = string;
    /**
     * SPICE proxy server. This can be used by the client to specify the proxy server. All nodes in a cluster runs 'spiceproxy', so it is up to the client to choose one. By default, we return the node where the VM is currently running. As reasonable setting is to use same node you use to connect to the API (This is window.location.hostname for the JS GUI).
     * @format address
     */
    export type address = string;
    /**
     * CIDR of the (sub) network that is used for migration.
     * @format CIDR
     */
    export type CIDR = string;
    /**
     * Migration traffic is encrypted using an SSH tunnel by default. On secure, completely private networks this can be disabled to increase performance.
     */
    export type Tmigration_type = 'secure' | 'insecure';
    /**
     * Mapping from source to target storages. Providing only a single storage ID maps all source storages to that storage. Providing the special value '1' will map each source storage to itself.
     * @format storagepair-list
     */
    export type storagepairlist = string;
    /**
     * Feature to check.
     */
    export type Tfeature = 'snapshot' | 'clone' | 'copy';
    /**
     * Target format for file storage. Only valid for full clone.
     */
    export type Tformat = 'raw' | 'qcow2' | 'vmdk';
    /**
     * The disk you want to move.
     */
    export type Tdisk = 'ide0' | 'ide1' | 'ide2' | 'ide3' | 'scsi0' | 'scsi1' | 'scsi2' | 'scsi3' | 'scsi4' | 'scsi5' | 'scsi6' | 'scsi7' | 'scsi8' | 'scsi9' | 'scsi10' | 'scsi11' | 'scsi12' | 'scsi13' | 'scsi14' | 'scsi15' | 'scsi16' | 'scsi17' | 'scsi18' | 'scsi19' | 'scsi20' | 'scsi21' | 'scsi22' | 'scsi23' | 'scsi24' | 'scsi25' | 'scsi26' | 'scsi27' | 'scsi28' | 'scsi29' | 'scsi30' | 'virtio0' | 'virtio1' | 'virtio2' | 'virtio3' | 'virtio4' | 'virtio5' | 'virtio6' | 'virtio7' | 'virtio8' | 'virtio9' | 'virtio10' | 'virtio11' | 'virtio12' | 'virtio13' | 'virtio14' | 'virtio15' | 'sata0' | 'sata1' | 'sata2' | 'sata3' | 'sata4' | 'sata5' | 'efidisk0';
    /**
     * The new size. With the `+` sign the value is added to the actual size of the volume and without it, the value is taken as an absolute one. Shrinking disk size is not supported.
     * @pattern \+?\d+(\.\d+)?[KMGT]?
     */
    export type Tsize = string;
    /**
     * Config type.
     */
    export type Ttype_10 = 'user' | 'network' | 'meta';
    /**
     * OS architecture type.
     */
    export type Tarch_1 = 'amd64' | 'i386' | 'arm64' | 'armhf';
    /**
     * Console mode. By default, the console command tries to open a connection to one of the available tty devices. By setting cmode to 'console' it tries to attach to /dev/console instead. If you set cmode to 'shell', it simply invokes a shell inside the container (no login).
     */
    export type Tcmode = 'shell' | 'console' | 'tty';
    /**
     * The number of cores assigned to the container. A container can use all available cores by default.
     * @minimum 1
     * @maximum 128
     * @type integer
     */
    export type integer1_128 = number;
    /**
     * CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to the weights of all the other running VMs.
     * NOTE: You can disable fair-scheduler configuration by setting this to 0.
     * @minimum 0
     * @maximum 500000
     * @type integer
     */
    export type integer0_500000 = number;
    /**
     * Allow containers access to advanced features.
     * @format {"force_rw_sys":{"default":0,"description":"Mount /sys in unprivileged containers as `rw` instead of `mixed`. This can break networking under newer (>= v245) systemd-network use.","optional":1,"type":"boolean"},"fuse":{"default":0,"description":"Allow using 'fuse' file systems in a container. Note that interactions between fuse and the freezer cgroup can potentially cause I/O deadlocks.","optional":1,"type":"boolean"},"keyctl":{"default":0,"description":"For unprivileged containers only: Allow the use of the keyctl() system call. This is required to use docker inside a container. By default unprivileged containers will see this system call as non-existent. This is mostly a workaround for systemd-networkd, as it will treat it as a fatal error when some keyctl() operations are denied by the kernel due to lacking permissions. Essentially, you can choose between running systemd-networkd or docker.","optional":1,"type":"boolean"},"mknod":{"default":0,"description":"Allow unprivileged containers to use mknod() to add certain device nodes. This requires a kernel with seccomp trap to user space support (5.3 or newer). This is experimental.","optional":1,"type":"boolean"},"mount":{"description":"Allow mounting file systems of specific types. This should be a list of file system types as used with the mount command. Note that this can have negative effects on the container's security. With access to a loop device, mounting a file can circumvent the mknod permission of the devices cgroup, mounting an NFS file system can block the host's I/O completely and prevent it from rebooting, etc.","format_description":"fstype;fstype;...","optional":1,"pattern":"(?^:[a-zA-Z0-9_; ]+)","type":"string"},"nesting":{"default":0,"description":"Allow nesting. Best used with unprivileged containers with additional id mapping. Note that this will expose procfs and sysfs contents of the host to the guest.","optional":1,"type":"boolean"}}
     */
    export type Tfeatures = string;
    /**
     * Set a host name for the container.
     * @format dns-name
     * @maxLength 255
     */
    export type dnsname_1 = string;
    /**
     * Lock/unlock the VM.
     */
    export type Tlock_1 = 'backup' | 'create' | 'destroyed' | 'disk' | 'fstrim' | 'migrate' | 'mounted' | 'rollback' | 'snapshot' | 'snapshot-delete';
    /**
     * Use volume as container mount point.
     * @format {"acl":{"description":"Explicitly enable or disable ACL support.","optional":1,"type":"boolean"},"backup":{"description":"Whether to include the mount point in backups.","optional":1,"type":"boolean","verbose_description":"Whether to include the mount point in backups (only used for volume mount points)."},"mountoptions":{"description":"Extra mount options for rootfs/mps.","format_description":"opt[;opt...]","optional":1,"pattern":"(?^:(?^:(noatime|nodev|nosuid|noexec))(;(?^:(noatime|nodev|nosuid|noexec)))*)","type":"string"},"mp":{"description":"Path to the mount point as seen from inside the container (must not contain symlinks).","format":"pve-lxc-mp-string","format_description":"Path","type":"string","verbose_description":"Path to the mount point as seen from inside the container.\n\nNOTE: Must not contain any symlinks for security reasons."},"quota":{"description":"Enable user quotas inside the container (not supported with zfs subvolumes)","optional":1,"type":"boolean"},"replicate":{"default":1,"description":"Will include this volume to a storage replica job.","optional":1,"type":"boolean"},"ro":{"description":"Read-only mount point","optional":1,"type":"boolean"},"shared":{"default":0,"description":"Mark this non-volume mount point as available on multiple nodes (see 'nodes')","optional":1,"type":"boolean","verbose_description":"Mark this non-volume mount point as available on all nodes.\n\nWARNING: This option does not share the mount point automatically, it assumes it is shared already!"},"size":{"description":"Volume size (read only value).","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"default_key":1,"description":"Volume, device or directory to mount into the container.","format":"pve-lxc-mp-string","format_description":"volume","type":"string"}}
     */
    export type Tmp = string;
    /**
     * Specifies network interfaces for the container.
     * @format {"bridge":{"description":"Bridge to attach the network device to.","format_description":"bridge","optional":1,"pattern":"[-_.\\w\\d]+","type":"string"},"firewall":{"description":"Controls whether this interface's firewall rules should be used.","optional":1,"type":"boolean"},"gw":{"description":"Default gateway for IPv4 traffic.","format":"ipv4","format_description":"GatewayIPv4","optional":1,"type":"string"},"gw6":{"description":"Default gateway for IPv6 traffic.","format":"ipv6","format_description":"GatewayIPv6","optional":1,"type":"string"},"hwaddr":{"description":"The interface MAC address. This is dynamically allocated by default, but you can set that statically if needed, for example to always have the same link-local IPv6 address. (lxc.network.hwaddr)","format":"mac-addr","format_description":"XX:XX:XX:XX:XX:XX","optional":1,"type":"string","verbose_description":"A common MAC address with the I/G (Individual/Group) bit not set."},"ip":{"description":"IPv4 address in CIDR format.","format":"pve-ipv4-config","format_description":"(IPv4/CIDR|dhcp|manual)","optional":1,"type":"string"},"ip6":{"description":"IPv6 address in CIDR format.","format":"pve-ipv6-config","format_description":"(IPv6/CIDR|auto|dhcp|manual)","optional":1,"type":"string"},"mtu":{"description":"Maximum transfer unit of the interface. (lxc.network.mtu)","minimum":64,"optional":1,"type":"integer"},"name":{"description":"Name of the network device as seen from inside the container. (lxc.network.name)","format_description":"string","pattern":"[-_.\\w\\d]+","type":"string"},"rate":{"description":"Apply rate limiting to the interface","format_description":"mbps","optional":1,"type":"number"},"tag":{"description":"VLAN tag for this interface.","maximum":4094,"minimum":1,"optional":1,"type":"integer"},"trunks":{"description":"VLAN ids to pass through the interface","format_description":"vlanid[;vlanid...]","optional":1,"pattern":"(?^:\\d+(?:;\\d+)*)","type":"string"},"type":{"description":"Network interface type.","enum":["veth"],"optional":1,"type":"string"}}
     */
    export type Tnet_1 = string;
    /**
     * OS type. This is used to setup configuration inside the container, and corresponds to lxc setup scripts in /usr/share/lxc/config/<ostype>.common.conf. Value 'unmanaged' can be used to skip and OS specific setup.
     */
    export type Tostype_1 = 'debian' | 'ubuntu' | 'centos' | 'fedora' | 'opensuse' | 'archlinux' | 'alpine' | 'gentoo' | 'unmanaged';
    /**
     * Sets root password inside container.
     * @minLength 5
     */
    export type Tpassword = string;
    /**
     * Use volume as container root.
     * @format {"acl":{"description":"Explicitly enable or disable ACL support.","optional":1,"type":"boolean"},"mountoptions":{"description":"Extra mount options for rootfs/mps.","format_description":"opt[;opt...]","optional":1,"pattern":"(?^:(?^:(noatime|nodev|nosuid|noexec))(;(?^:(noatime|nodev|nosuid|noexec)))*)","type":"string"},"quota":{"description":"Enable user quotas inside the container (not supported with zfs subvolumes)","optional":1,"type":"boolean"},"replicate":{"default":1,"description":"Will include this volume to a storage replica job.","optional":1,"type":"boolean"},"ro":{"description":"Read-only mount point","optional":1,"type":"boolean"},"shared":{"default":0,"description":"Mark this non-volume mount point as available on multiple nodes (see 'nodes')","optional":1,"type":"boolean","verbose_description":"Mark this non-volume mount point as available on all nodes.\n\nWARNING: This option does not share the mount point automatically, it assumes it is shared already!"},"size":{"description":"Volume size (read only value).","format":"disk-size","format_description":"DiskSize","optional":1,"type":"string"},"volume":{"default_key":1,"description":"Volume, device or directory to mount into the container.","format":"pve-lxc-mp-string","format_description":"volume","type":"string"}}
     */
    export type Trootfs = string;
    /**
     * Sets DNS search domains for a container. Create will automatically use the setting from the host if you neither set searchdomain nor nameserver.
     * @format dns-name-list
     */
    export type dnsnamelist = string;
    /**
     * Time zone to use in the container. If option isn't set, then nothing will be done. Can be set to 'host' to match the host time zone, or an arbitrary time zone option from /usr/share/zoneinfo/zone.tab
     * @format pve-ct-timezone
     */
    export type pvecttimezone = string;
    /**
     * Specify the number of tty available to the container
     * @minimum 0
     * @maximum 6
     * @type integer
     */
    export type integer0_6 = number;
    /**
     * Reference to unused volumes. This is used internally, and should not be modified manually.
     * @format {"volume":{"default_key":1,"description":"The volume that is not used currently.","format":"pve-volume-id","format_description":"volume","type":"string"}}
     */
    export type Tunused_1 = string;
    /**
     * sets the height of the console in pixels.
     * @minimum 16
     * @maximum 2160
     * @type integer
     */
    export type integer16_2160 = number;
    /**
     * sets the width of the console in pixels.
     * @minimum 16
     * @maximum 4096
     * @type integer
     */
    export type integer16_4096 = number;
    /**
     * The disk you want to resize.
     */
    export type Tdisk_1 = 'rootfs' | 'mp0' | 'mp1' | 'mp2' | 'mp3' | 'mp4' | 'mp5' | 'mp6' | 'mp7' | 'mp8' | 'mp9' | 'mp10' | 'mp11' | 'mp12' | 'mp13' | 'mp14' | 'mp15' | 'mp16' | 'mp17' | 'mp18' | 'mp19' | 'mp20' | 'mp21' | 'mp22' | 'mp23' | 'mp24' | 'mp25' | 'mp26' | 'mp27' | 'mp28' | 'mp29' | 'mp30' | 'mp31' | 'mp32' | 'mp33' | 'mp34' | 'mp35' | 'mp36' | 'mp37' | 'mp38' | 'mp39' | 'mp40' | 'mp41' | 'mp42' | 'mp43' | 'mp44' | 'mp45' | 'mp46' | 'mp47' | 'mp48' | 'mp49' | 'mp50' | 'mp51' | 'mp52' | 'mp53' | 'mp54' | 'mp55' | 'mp56' | 'mp57' | 'mp58' | 'mp59' | 'mp60' | 'mp61' | 'mp62' | 'mp63' | 'mp64' | 'mp65' | 'mp66' | 'mp67' | 'mp68' | 'mp69' | 'mp70' | 'mp71' | 'mp72' | 'mp73' | 'mp74' | 'mp75' | 'mp76' | 'mp77' | 'mp78' | 'mp79' | 'mp80' | 'mp81' | 'mp82' | 'mp83' | 'mp84' | 'mp85' | 'mp86' | 'mp87' | 'mp88' | 'mp89' | 'mp90' | 'mp91' | 'mp92' | 'mp93' | 'mp94' | 'mp95' | 'mp96' | 'mp97' | 'mp98' | 'mp99' | 'mp100' | 'mp101' | 'mp102' | 'mp103' | 'mp104' | 'mp105' | 'mp106' | 'mp107' | 'mp108' | 'mp109' | 'mp110' | 'mp111' | 'mp112' | 'mp113' | 'mp114' | 'mp115' | 'mp116' | 'mp117' | 'mp118' | 'mp119' | 'mp120' | 'mp121' | 'mp122' | 'mp123' | 'mp124' | 'mp125' | 'mp126' | 'mp127' | 'mp128' | 'mp129' | 'mp130' | 'mp131' | 'mp132' | 'mp133' | 'mp134' | 'mp135' | 'mp136' | 'mp137' | 'mp138' | 'mp139' | 'mp140' | 'mp141' | 'mp142' | 'mp143' | 'mp144' | 'mp145' | 'mp146' | 'mp147' | 'mp148' | 'mp149' | 'mp150' | 'mp151' | 'mp152' | 'mp153' | 'mp154' | 'mp155' | 'mp156' | 'mp157' | 'mp158' | 'mp159' | 'mp160' | 'mp161' | 'mp162' | 'mp163' | 'mp164' | 'mp165' | 'mp166' | 'mp167' | 'mp168' | 'mp169' | 'mp170' | 'mp171' | 'mp172' | 'mp173' | 'mp174' | 'mp175' | 'mp176' | 'mp177' | 'mp178' | 'mp179' | 'mp180' | 'mp181' | 'mp182' | 'mp183' | 'mp184' | 'mp185' | 'mp186' | 'mp187' | 'mp188' | 'mp189' | 'mp190' | 'mp191' | 'mp192' | 'mp193' | 'mp194' | 'mp195' | 'mp196' | 'mp197' | 'mp198' | 'mp199' | 'mp200' | 'mp201' | 'mp202' | 'mp203' | 'mp204' | 'mp205' | 'mp206' | 'mp207' | 'mp208' | 'mp209' | 'mp210' | 'mp211' | 'mp212' | 'mp213' | 'mp214' | 'mp215' | 'mp216' | 'mp217' | 'mp218' | 'mp219' | 'mp220' | 'mp221' | 'mp222' | 'mp223' | 'mp224' | 'mp225' | 'mp226' | 'mp227' | 'mp228' | 'mp229' | 'mp230' | 'mp231' | 'mp232' | 'mp233' | 'mp234' | 'mp235' | 'mp236' | 'mp237' | 'mp238' | 'mp239' | 'mp240' | 'mp241' | 'mp242' | 'mp243' | 'mp244' | 'mp245' | 'mp246' | 'mp247' | 'mp248' | 'mp249' | 'mp250' | 'mp251' | 'mp252' | 'mp253' | 'mp254' | 'mp255';
    /**
     * If a block.wal is requested but the size is not given, will be automatically selected by: bluestore_block_wal_size from the ceph database (osd or global section) or config (osd or global section)in that order. If this is not available, it will be sized 1% of the size of the OSD device. Fails if the available size is not enough.
     * @minimum 0.5
     * @type number
     */
    export type Twal_size = number;
    /**
     * Number of placement groups for the backing data pool. The metadata pool will use a quarter of this.
     * @minimum 8
     * @maximum 32768
     * @type integer
     */
    export type integer8_32768 = number;
    /**
     * Only list specific types of disks.
     */
    export type Ttype_11 = 'unused' | 'journal_disks';
    /**
     * Declare a separate cluster network, OSDs will routeheartbeat, object replication and recovery traffic over it
     * @format CIDR
     * @maxLength 128
     */
    export type CIDR_1 = string;
    /**
     * Minimum number of available replicas per object to allow I/O
     * @minimum 1
     * @maximum 7
     * @type integer
     */
    export type integer1_7 = number;
    /**
     * Placement group bits, used to specify the default number of placement groups.
     * NOTE: 'osd pool default pg num' does not work for default pools.
     * @minimum 6
     * @maximum 14
     * @type integer
     */
    export type integer6_14 = number;
    /**
     * Ceph service name.
     * @pattern (ceph|mon|mds|osd|mgr)(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)?
     */
    export type Tservice = string;
    /**
     * Ceph service name.
     * @pattern (mon|mds|osd|mgr)(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)?
     */
    export type Tservice_1 = string;
    /**
     * The application of the pool, 'rbd' by default.
     */
    export type Tapplication = 'rbd' | 'cephfs' | 'rgw';
    /**
     * Proxmox VE subscription key
     * @pattern pve([1248])([cbsp])-[0-9a-f]{10}
     * @maxLength 32
     */
    export type Tkey = string;
    /**
     * Only list specific interface types.
     */
    export type Ttype_12 = 'bridge' | 'bond' | 'eth' | 'alias' | 'vlan' | 'OVSBridge' | 'OVSBond' | 'OVSPort' | 'OVSIntPort' | 'any_bridge';
    /**
     * IP address.
     * @format ipv4
     */
    export type ipv4 = string;
    /**
     * IP address.
     * @format ipv6
     */
    export type ipv6 = string;
    /**
     * Specify the primary interface for active-backup bond.
     * @format pve-iface
     */
    export type pveiface_1 = string;
    /**
     * Bonding mode.
     */
    export type Tbond_mode = 'balance-rr' | 'active-backup' | 'balance-xor' | 'broadcast' | '802.3ad' | 'balance-tlb' | 'balance-alb' | 'balance-slb' | 'lacp-balance-slb' | 'lacp-balance-tcp';
    /**
     * Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes.
     */
    export type Tbond_xmit_hash_policy = 'layer2' | 'layer2+3' | 'layer3+4';
    /**
     * Specify the interfaces you want to add to your bridge.
     * @format pve-iface-list
     */
    export type pveifacelist = string;
    /**
     * MTU.
     * @minimum 1280
     * @maximum 65520
     * @type integer
     */
    export type integer1280_65520 = number;
    /**
     * Network mask.
     * @format ipv4mask
     */
    export type ipv4mask = string;
    /**
     * Network mask.
     * @minimum 0
     * @maximum 128
     * @type integer
     */
    export type integer0_128 = number;
    /**
     * OVS interface options.
     * @maxLength 1024
     */
    export type String0_1024 = string;
    /**
     * Specify a VLan tag (used by OVSPort, OVSIntPort, OVSBond)
     * @minimum 1
     * @maximum 4094
     * @type integer
     */
    export type integer1_4094 = number;
    /**
     * Network interface type
     */
    export type Ttype_13 = 'bridge' | 'bond' | 'eth' | 'alias' | 'vlan' | 'OVSBridge' | 'OVSBond' | 'OVSPort' | 'OVSIntPort' | 'unknown';
    /**
     * List archived, active or all tasks.
     */
    export type Tsource = 'archive' | 'active' | 'all';
    /**
     * The server address (name or IP).
     * @format pve-storage-server
     */
    export type pvestorageserver = string;
    /**
     * The iSCSI portal (IP or DNS name with optional port).
     * @format pve-storage-portal-dns
     */
    export type pvestorageportaldns = string;
    /**
     * @pattern [a-zA-Z0-9\.\+\_][a-zA-Z0-9\.\+\_\-]+
     * @maxLength 100
     */
    export type Tvg = string;
    /**
     * Only list stores which support this content type.
     * @format pve-storage-content-list
     */
    export type pvestoragecontentlist = string;
    /**
     * Only list content of this type.
     * @format pve-storage-content
     */
    export type pvestoragecontent = string;
    export type Tformat_1 = 'raw' | 'qcow2' | 'subvol';
    /**
     * Size in kilobyte (1024 bytes). Optional suffixes 'M' (megabyte, 1024K) and 'G' (gigabyte, 1024M)
     * @pattern \d+[MG]?
     */
    export type Tsize_1 = string;
    /**
     * The desired filesystem.
     */
    export type Tfilesystem = 'ext4' | 'xfs';
    /**
     * Pool sector size exponent.
     * @minimum 9
     * @maximum 16
     * @type integer
     */
    export type integer9_16 = number;
    /**
     * The compression algorithm to use.
     */
    export type Tcompression = 'on' | 'off' | 'gzip' | 'lz4' | 'lzjb' | 'zle';
    /**
     * The RAID level to use.
     */
    export type Traidlevel = 'single' | 'mirror' | 'raid10' | 'raidz' | 'raidz2' | 'raidz3';
    /**
     * Block device name
     * @pattern ^/dev/[a-zA-Z0-9\/]+$
     */
    export type Tdisk_2 = string;
    /**
     * UUID for the GPT table
     * @pattern [a-fA-F0-9\-]+
     * @maxLength 36
     */
    export type Tuuid = string;
    /**
     * Maximum number of tracked connections.
     * @minimum 32768
     * @type integer
     */
    export type integer_Min32768 = number;
    /**
     * Conntrack established timeout.
     * @minimum 7875
     * @type integer
     */
    export type integer_Min7875 = number;
    /**
     * Conntrack syn recv timeout.
     * @minimum 30
     * @maximum 60
     * @type integer
     */
    export type integer30_60 = number;
    /**
     * PEM encoded certificate (chain).
     * @format pem-certificate-chain
     */
    export type pemcertificatechain = string;
    /**
     * PEM encoded private key.
     * @format pem-string
     */
    export type pemstring = string;
    /**
     * Return only a specific property from the node configuration.
     */
    export type Tproperty = 'acme' | 'acmedomain0' | 'acmedomain1' | 'acmedomain2' | 'acmedomain3' | 'acmedomain4' | 'acmedomain5' | 'description' | 'startall-onboot-delay' | 'wakeonlan';
    /**
     * Node specific ACME settings.
     * @format {"account":{"default":"default","description":"ACME account config file name.","format":"pve-configid","format_description":"name","optional":1,"type":"string"},"domains":{"description":"List of domains for this node's ACME certificate","format":"pve-acme-domain-list","format_description":"domain[;domain;...]","optional":1,"type":"string"}}
     */
    export type Tacme = string;
    /**
     * ACME domain and validation plugin
     * @format {"alias":{"description":"Alias for the Domain to verify ACME Challenge over DNS","format":"pve-acme-alias","format_description":"domain","optional":1,"type":"string"},"domain":{"default_key":1,"description":"domain for this node's ACME certificate","format":"pve-acme-domain","format_description":"domain","type":"string"},"plugin":{"default":"standalone","description":"The ACME plugin ID","format":"pve-configid","format_description":"name of the plugin configuration","optional":1,"type":"string"}}
     */
    export type Tacmedomain = string;
    /**
     * Initial delay in seconds, before starting all the Virtual Guests with on-boot enabled.
     * @minimum 0
     * @maximum 300
     * @type integer
     */
    export type integer0_300 = number;
    /**
     * Specify the command.
     */
    export type Tcommand_1 = 'reboot' | 'shutdown';
    /**
     * Display all log since this date-time string.
     * @pattern ^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}(:\d{2})?)?$
     */
    export type Tsince = string;
    /**
     * Run specific command or default to login.
     */
    export type Tcmd = 'login' | 'ceph_install' | 'upgrade';
    /**
     * Only list storage of specific type
     */
    export type Ttype_14 = 'cephfs' | 'cifs' | 'dir' | 'drbd' | 'glusterfs' | 'iscsi' | 'iscsidirect' | 'lvm' | 'lvmthin' | 'nfs' | 'pbs' | 'rbd' | 'zfs' | 'zfspool';
    /**
     * CIFS domain.
     * @maxLength 256
     */
    export type String0_256 = string;
    /**
     * NFS export path.
     * @format pve-storage-path
     */
    export type pvestoragepath = string;
    /**
     * Default image format.
     * @format pve-storage-format
     */
    export type pvestorageformat = string;
    /**
     * IP addresses of monitors (for external clusters).
     * @format pve-storage-portal-dns-list
     */
    export type pvestorageportaldnslist = string;
    /**
     * NFS mount options (see 'man nfs')
     * @format pve-storage-options
     */
    export type pvestorageoptions = string;
    /**
     * The redundancy count specifies the number of nodes to which the resource should be deployed. It must be at least 1 and at most the number of nodes in the cluster.
     * @minimum 1
     * @maximum 16
     * @type integer
     */
    export type integer1_16 = number;
    /**
     * SMB protocol version
     */
    export type Tsmbversion = '2.0' | '2.1' | '3.0';
    /**
     * LVM thin pool LV name.
     * @format pve-storage-vgname
     */
    export type pvestoragevgname = string;
    /**
     * Gluster transport: tcp or rdma
     */
    export type Ttransport = 'tcp' | 'rdma' | 'unix';
    /**
     * @format pve-groupid-list
     */
    export type pvegroupidlist = string;
    /**
     * Initial password.
     * @minLength 5
     * @maxLength 64
     */
    export type String5_64 = string;
    /**
     * User ID
     * @format pve-userid
     * @maxLength 64
     */
    export type pveuserid = string;
    /**
     * @format pve-groupid
     */
    export type pvegroupid = string;
    /**
     * @format pve-priv-list
     */
    export type pveprivlist = string;
    /**
     * @format pve-roleid
     */
    export type pveroleid = string;
    /**
     * List of roles.
     * @format pve-roleid-list
     */
    export type pveroleidlist = string;
    /**
     * List of API tokens.
     * @format pve-tokenid-list
     */
    export type pvetokenidlist = string;
    /**
     * List of users.
     * @format pve-userid-list
     */
    export type pveuseridlist = string;
    /**
     * LDAP base domain name
     * @pattern \w+=[^,]+(,\s*\w+=[^,]+)*
     * @maxLength 256
     */
    export type Tbase_dn = string;
    /**
     * AD domain name
     * @pattern \S+
     * @maxLength 256
     */
    export type Tdomain = string;
    /**
     * LDAP filter for user sync.
     * @maxLength 2048
     */
    export type String0_2048 = string;
    /**
     * The objectclasses for groups.
     * @format ldap-simple-attr-list
     */
    export type ldapsimpleattrlist = string;
    /**
     * LDAP attribute representing a groups name. If not set or found, the first value of the DN will be used as name.
     * @format ldap-simple-attr
     * @maxLength 256
     */
    export type ldapsimpleattr = string;
    /**
     * LDAP protocol mode.
     */
    export type Tmode_1 = 'ldap' | 'ldaps' | 'ldap+starttls';
    /**
     * Server port.
     * @minimum 1
     * @maximum 65535
     * @type integer
     */
    export type integer1_65535 = number;
    /**
     * Authentication domain ID
     * @format pve-realm
     * @maxLength 32
     */
    export type pverealm = string;
    /**
     * Server IP address (or DNS name)
     * @format address
     * @maxLength 256
     */
    export type address_1 = string;
    /**
     * LDAPS TLS/SSL version. It's not recommended to use version older than 1.2!
     */
    export type Tsslversion = 'tlsv1' | 'tlsv1_1' | 'tlsv1_2' | 'tlsv1_3';
    /**
     * The default options for behavior of synchronizations.
     * @format realm-sync-options
     */
    export type realmsyncoptions = string;
    /**
     * Comma separated list of key=value pairs for specifying which LDAP attributes map to which PVE user field. For example, to map the LDAP attribute 'mail' to PVEs 'email', write  'email=mail'. By default, each PVE user field is represented  by an LDAP attribute of the same name.
     * @pattern \w+=[^,]+(,\s*\w+=[^,]+)*
     */
    export type Tsync_attributes = string;
    /**
     * Use Two-factor authentication.
     * @format pve-tfa-config
     * @maxLength 128
     */
    export type pvetfaconfig = string;
    /**
     * Realm type.
     */
    export type Ttype_15 = 'ad' | 'ldap' | 'pam' | 'pve';
    /**
     * LDAP user attribute name
     * @pattern \S{2,}
     * @maxLength 256
     */
    export type Tuser_attr = string;
    /**
     * Select what to sync.
     */
    export type Tscope_1 = 'users' | 'groups' | 'both';
    /**
     * Verify ticket, and check if user have access 'privs' on 'path'
     * @maxLength 64
     */
    export type String0_64 = string;
    /**
     * Verify ticket, and check if user have access 'privs' on 'path'
     * @format pve-priv-list
     * @maxLength 64
     */
    export type pveprivlist_1 = string;
    /**
     * The action to perform
     */
    export type Taction_1 = 'delete' | 'new' | 'confirm';
    /**
     * When adding TOTP, the shared secret value.
     * @format pve-tfa-secret
     */
    export type pvetfasecret = string;
    /**
     * User ID or full API token ID
     * @pattern (?^:^(?^:[^\s:/]+)\@(?^:[A-Za-z][A-Za-z0-9\.\-_]+)(?:!(?^:[A-Za-z][A-Za-z0-9\.\-_]+))?$)
     */
    export type Tuserid = string;
    /**
     * List of storage IDs.
     * @format pve-storage-id-list
     */
    export type pvestorageidlist = string;
    /**
     * Returned by GET /cluster
     */
    export interface clusterIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/replication
     */
    export interface clusterReplicationIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/config
     */
    export interface clusterConfigIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/config/nodes
     */
    export interface clusterConfigNodesNodes {
        node: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /cluster/config/nodes/{node}
     */
    export interface clusterConfigNodesAddnode {
        corosync_authkey: string;
        corosync_conf: string;
        warnings: string[];
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/config/join
     */
    export interface clusterConfigJoinJoinInfo {
        config_digest: string;
        nodelist: {
                /**
                 * The cluster node name.
                 */
                name: string;
                /**
                 * Node id for this node.
                 */
                nodeid?: number;
                pve_addr: string;
                /**
                 * Certificate SHA 256 fingerprint.
                 */
                pve_fp: string;
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
        totem: any;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall
     */
    export interface clusterFirewallIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/groups
     */
    export interface clusterFirewallGroupsListSecurityGroups {
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        /**
         * Security Group name.
         */
        group: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/groups/{group}
     */
    export interface clusterFirewallGroupsGetRules {
        pos: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/groups/{group}/{pos}
     */
    export interface clusterFirewallGroupsGetRule {
        action: string;
        comment?: string;
        dest?: string;
        dport?: string;
        enable?: number;
        iface?: string;
        ipversion?: number;
        /**
         * Log level for firewall rule
         */
        log?: string;
        macro?: string;
        pos: number;
        proto?: string;
        source?: string;
        sport?: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/rules
     */
    export interface clusterFirewallRulesGetRules {
        pos: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/rules/{pos}
     */
    export interface clusterFirewallRulesGetRule {
        action: string;
        comment?: string;
        dest?: string;
        dport?: string;
        enable?: number;
        iface?: string;
        ipversion?: number;
        /**
         * Log level for firewall rule
         */
        log?: string;
        macro?: string;
        pos: number;
        proto?: string;
        source?: string;
        sport?: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/ipset
     */
    export interface clusterFirewallIpsetIpsetIndex {
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        /**
         * IP set name.
         */
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/ipset/{name}
     */
    export interface clusterFirewallIpsetGetIpset {
        cidr: string;
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        nomatch?: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/aliases
     */
    export interface clusterFirewallAliasesGetAliases {
        cidr: string;
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/options
     */
    export interface clusterFirewallOptionsGetOptions {
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
    }
    /**
     * Returned by GET /cluster/firewall/macros
     */
    export interface clusterFirewallMacrosGetMacros {
        /**
         * More verbose description (if available).
         */
        descr: string;
        /**
         * Macro name.
         */
        macro: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/firewall/refs
     */
    export interface clusterFirewallRefsRefs {
        comment?: string;
        name: string;
        ref: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/backup
     */
    export interface clusterBackupIndex {
        /**
         * The job ID.
         */
        id: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/backup/{id}/included_volumes
     */
    export interface clusterBackupIncludedVolumesGetVolumeBackupIncluded {
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
    }
    /**
     * Returned by GET /cluster/backupinfo/not_backed_up
     */
    export interface clusterBackupinfoNotBackedUpGetGuestsNotInBackup {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/ha
     */
    export interface clusterHaIndex {
        id: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/ha/resources
     */
    export interface clusterHaResourcesIndex {
        sid: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/ha/resources/{sid}
     */
    export interface clusterHaResourcesRead {
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
    }
    /**
     * Returned by GET /cluster/ha/groups
     */
    export interface clusterHaGroupsIndex {
        group: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/ha/status
     */
    export interface clusterHaStatusIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/acme
     */
    export interface clusterAcmeIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/acme/plugins
     */
    export interface clusterAcmePluginsIndex {
        /**
         * Unique identifier for ACME plugin instance.
         */
        plugin: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/acme/account
     */
    export interface clusterAcmeAccountAccountIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/acme/account/{name}
     */
    export interface clusterAcmeAccountGetAccount {
        account?: any;
        /**
         * URL of ACME CA directory endpoint.
         */
        directory?: string;
        location?: string;
        tos?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/acme/directories
     */
    export interface clusterAcmeDirectoriesGetDirectories {
        name: string;
        /**
         * URL of ACME CA directory endpoint.
         */
        url: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/acme/challenge-schema
     */
    export interface clusterAcmeChallengeSchemaChallengeschema {
        id: string;
        /**
         * Human readable name, falls back to id
         */
        name: string;
        schema: any;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/ceph
     */
    export interface clusterCephCephindex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/ceph/flags
     */
    export interface clusterCephFlagsGetAllFlags {
        /**
         * Flag name.
         */
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/sdn
     */
    export interface clusterSdnIndex {
        id: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/sdn/vnets
     */
    export interface clusterSdnVnetsIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/sdn/zones
     */
    export interface clusterSdnZonesIndex {
        type: string;
        zone: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/sdn/controllers
     */
    export interface clusterSdnControllersIndex {
        controller: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/log
     */
    export interface clusterLogLog {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/resources
     */
    export interface clusterResourcesResources {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/tasks
     */
    export interface clusterTasksTasks {
        upid: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /cluster/status
     */
    export interface clusterStatusGetStatus {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes
     */
    export interface nodesIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}
     */
    export interface nodesIndex2 {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu
     */
    export interface nodesQemuVm {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}
     */
    export interface nodesQemuVmdiridx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall
     */
    export interface nodesQemuFirewallIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/rules
     */
    export interface nodesQemuFirewallRulesGetRules {
        pos: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/rules/{pos}
     */
    export interface nodesQemuFirewallRulesGetRule {
        action: string;
        comment?: string;
        dest?: string;
        dport?: string;
        enable?: number;
        iface?: string;
        ipversion?: number;
        /**
         * Log level for firewall rule
         */
        log?: string;
        macro?: string;
        pos: number;
        proto?: string;
        source?: string;
        sport?: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/aliases
     */
    export interface nodesQemuFirewallAliasesGetAliases {
        cidr: string;
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/ipset
     */
    export interface nodesQemuFirewallIpsetIpsetIndex {
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        /**
         * IP set name.
         */
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
     */
    export interface nodesQemuFirewallIpsetGetIpset {
        cidr: string;
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        nomatch?: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/options
     */
    export interface nodesQemuFirewallOptionsGetOptions {
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
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/log
     */
    export interface nodesQemuFirewallLogLog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/firewall/refs
     */
    export interface nodesQemuFirewallRefsRefs {
        comment?: string;
        name: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/agent
     */
    export interface nodesQemuAgentIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/qemu/{vmid}/agent/exec
     */
    export interface nodesQemuAgentExecExec {
        /**
         * The PID of the process started by the guest-agent.
         */
        pid: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/agent/exec-status
     */
    export interface nodesQemuAgentExecStatusExecStatus {
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
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/agent/file-read
     */
    export interface nodesQemuAgentFileReadFileRead {
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
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/rrd
     */
    export interface nodesQemuRrdRrd {
        filename: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/rrddata
     */
    export interface nodesQemuRrddataRrddata {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/config
     */
    export interface nodesQemuConfigVmConfig {
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
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/pending
     */
    export interface nodesQemuPendingVmPending {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/qemu/{vmid}/vncproxy
     */
    export interface nodesQemuVncproxyVncproxy {
        cert: string;
        /**
         * Returned if requested with 'generate-password' param. Consists of printable ASCII characters ('!' .. '~').
         */
        password?: string;
        port: string;
        ticket: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/qemu/{vmid}/termproxy
     */
    export interface nodesQemuTermproxyTermproxy {
        port: number;
        ticket: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/vncwebsocket
     */
    export interface nodesQemuVncwebsocketVncwebsocket {
        port: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/qemu/{vmid}/spiceproxy
     */
    export interface nodesQemuSpiceproxySpiceproxy {
        host: string;
        password: string;
        proxy: string;
        'tls-port': number;
        type: string;
        'toggle-fullscreen'?: string;
        ca?: string;
        title?: string;
        'delete-this-file'?: number;
        'host-subject'?: string;
        'release-cursor'?: string;
        'secure-attention'?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/status
     */
    export interface nodesQemuStatusVmcmdidx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/status/current
     */
    export interface nodesQemuStatusCurrentVmStatus {
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
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/feature
     */
    export interface nodesQemuFeatureVmFeature {
        hasFeature: boolean;
        nodes: string[];
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/migrate
     */
    export interface nodesQemuMigrateMigrateVmPrecondition {
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
        running: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/snapshot
     */
    export interface nodesQemuSnapshotSnapshotList {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/qemu/{vmid}/snapshot/{snapname}
     */
    export interface nodesQemuSnapshotSnapshotCmdIdx {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/cpu
     */
    export interface nodesCpuIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc
     */
    export interface nodesLxcVm {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}
     */
    export interface nodesLxcVmdiridx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/config
     */
    export interface nodesLxcConfigVmConfig {
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
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/status
     */
    export interface nodesLxcStatusVmcmdidx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/status/current
     */
    export interface nodesLxcStatusCurrentVmStatus {
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
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/snapshot
     */
    export interface nodesLxcSnapshotList {
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
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/snapshot/{snapname}
     */
    export interface nodesLxcSnapshotSnapshotCmdIdx {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall
     */
    export interface nodesLxcFirewallIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/rules
     */
    export interface nodesLxcFirewallRulesGetRules {
        pos: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/rules/{pos}
     */
    export interface nodesLxcFirewallRulesGetRule {
        action: string;
        comment?: string;
        dest?: string;
        dport?: string;
        enable?: number;
        iface?: string;
        ipversion?: number;
        /**
         * Log level for firewall rule
         */
        log?: string;
        macro?: string;
        pos: number;
        proto?: string;
        source?: string;
        sport?: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/aliases
     */
    export interface nodesLxcFirewallAliasesGetAliases {
        cidr: string;
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/ipset
     */
    export interface nodesLxcFirewallIpsetIpsetIndex {
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        /**
         * IP set name.
         */
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
     */
    export interface nodesLxcFirewallIpsetGetIpset {
        cidr: string;
        comment?: string;
        /**
         * Prevent changes if current configuration file has different SHA1 digest. This can be used to prevent concurrent modifications.
         */
        digest: string;
        nomatch?: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/options
     */
    export interface nodesLxcFirewallOptionsGetOptions {
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
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/log
     */
    export interface nodesLxcFirewallLogLog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/firewall/refs
     */
    export interface nodesLxcFirewallRefsRefs {
        comment?: string;
        name: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/rrd
     */
    export interface nodesLxcRrdRrd {
        filename: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/rrddata
     */
    export interface nodesLxcRrddataRrddata {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/lxc/{vmid}/vncproxy
     */
    export interface nodesLxcVncproxyVncproxy {
        cert: string;
        port: number;
        ticket: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/lxc/{vmid}/termproxy
     */
    export interface nodesLxcTermproxyTermproxy {
        port: number;
        ticket: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/vncwebsocket
     */
    export interface nodesLxcVncwebsocketVncwebsocket {
        port: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/lxc/{vmid}/spiceproxy
     */
    export interface nodesLxcSpiceproxySpiceproxy {
        host: string;
        password: string;
        proxy: string;
        'tls-port': number;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/feature
     */
    export interface nodesLxcFeatureVmFeature {
        hasFeature: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/lxc/{vmid}/pending
     */
    export interface nodesLxcPendingVmPending {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph
     */
    export interface nodesCephIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/mds
     */
    export interface nodesCephMdsIndex {
        addr?: string;
        host?: string;
        /**
         * The name (ID) for the MDS
         */
        name: string;
        rank?: number;
        /**
         * If true, the standby MDS is polling the active MDS for faster recovery (hot standby).
         */
        standby_replay?: boolean;
        /**
         * State of the MDS
         */
        state: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/mgr
     */
    export interface nodesCephMgrIndex {
        addr?: string;
        host?: string;
        /**
         * The name (ID) for the MGR
         */
        name: string;
        /**
         * State of the MGR
         */
        state: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/mon
     */
    export interface nodesCephMonListmon {
        addr?: string;
        host?: string;
        name: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/fs
     */
    export interface nodesCephFsIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/disks
     */
    export interface nodesCephDisksDisks {
        dev: string;
        gpt: boolean;
        model?: string;
        osdid: number;
        serial?: string;
        size: number;
        used?: string;
        vendor?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/configdb
     */
    export interface nodesCephConfigdbConfigdb {
        can_update_at_runtime: boolean;
        level: string;
        mask: string;
        name: string;
        section: string;
        value: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/pools
     */
    export interface nodesCephPoolsLspools {
        bytes_used: number;
        crush_rule: number;
        crush_rule_name: string;
        min_size: number;
        percent_used: number;
        pg_autoscale_mode?: string;
        pg_num: number;
        pool: number;
        pool_name: string;
        size: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/log
     */
    export interface nodesCephLogLog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/ceph/rules
     */
    export interface nodesCephRulesRules {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/services
     */
    export interface nodesServicesIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/services/{service}
     */
    export interface nodesServicesSrvcmdidx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/network
     */
    export interface nodesNetworkIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/network/{iface}
     */
    export interface nodesNetworkNetworkConfig {
        method: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/tasks
     */
    export interface nodesTasksNodeTasks {
        endtime?: number;
        id: string;
        node: string;
        pid: number;
        pstart: number;
        starttime: number;
        status?: string;
        type: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/tasks/{upid}
     */
    export interface nodesTasksUpidIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/tasks/{upid}/log
     */
    export interface nodesTasksLogReadTaskLog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/tasks/{upid}/status
     */
    export interface nodesTasksStatusReadTaskStatus {
        pid: number;
        status: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan
     */
    export interface nodesScanIndex {
        method: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/zfs
     */
    export interface nodesScanZfsZfsscan {
        /**
         * ZFS pool name.
         */
        pool: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/nfs
     */
    export interface nodesScanNfsNfsscan {
        /**
         * NFS export options.
         */
        options: string;
        /**
         * The exported path.
         */
        path: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/cifs
     */
    export interface nodesScanCifsCifsscan {
        /**
         * Descriptive text from server.
         */
        description: string;
        /**
         * The cifs share name.
         */
        share: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/glusterfs
     */
    export interface nodesScanGlusterfsGlusterfsscan {
        /**
         * The volume name.
         */
        volname: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/iscsi
     */
    export interface nodesScanIscsiIscsiscan {
        /**
         * The iSCSI portal name.
         */
        portal: string;
        /**
         * The iSCSI target name.
         */
        target: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/lvm
     */
    export interface nodesScanLvmLvmscan {
        /**
         * The LVM logical volume group name.
         */
        vg: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/lvmthin
     */
    export interface nodesScanLvmthinLvmthinscan {
        /**
         * The LVM Thin Pool name (LVM logical volume).
         */
        lv: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/scan/usb
     */
    export interface nodesScanUsbUsbscan {
        busnum: number;
        class: number;
        devnum: number;
        level: number;
        manufacturer?: string;
        port: number;
        prodid: string;
        product?: string;
        serial?: string;
        speed: string;
        usbpath?: string;
        vendid: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/hardware
     */
    export interface nodesHardwareIndex {
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/hardware/pci
     */
    export interface nodesHardwarePciPciscan {
        /**
         * The PCI Class of the device.
         */
        class: string;
        /**
         * The Device ID.
         */
        device: string;
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
        subsystem_device_name?: string;
        /**
         * The Subsystem Vendor ID.
         */
        subsystem_vendor?: string;
        subsystem_vendor_name?: string;
        /**
         * The Vendor ID.
         */
        vendor: string;
        vendor_name?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/hardware/pci/{pciid}
     */
    export interface nodesHardwarePciPciindex {
        method: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/hardware/pci/{pciid}/mdev
     */
    export interface nodesHardwarePciMdevMdevscan {
        /**
         * The number of still available instances of this type.
         */
        available: number;
        description: string;
        /**
         * The name of the mdev type.
         */
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/storage
     */
    export interface nodesStorageIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/storage/{storage}
     */
    export interface nodesStorageDiridx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/storage/{storage}/content
     */
    export interface nodesStorageContentIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/storage/{storage}/rrd
     */
    export interface nodesStorageRrdRrd {
        filename: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/storage/{storage}/rrddata
     */
    export interface nodesStorageRrddataRrddata {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks
     */
    export interface nodesDisksIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks/lvm
     */
    export interface nodesDisksLvmIndex {
        children: {
                /**
                 * The underlying physical volumes
                 */
                children?: {
                        /**
                         * The free bytes in the physical volume
                         */
                        free: number;
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
        leaf: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks/lvmthin
     */
    export interface nodesDisksLvmthinIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks/directory
     */
    export interface nodesDisksDirectoryIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks/zfs
     */
    export interface nodesDisksZfsIndex {
        alloc: number;
        dedup: number;
        frag: number;
        free: number;
        health: string;
        name: string;
        size: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks/zfs/{name}
     */
    export interface nodesDisksZfsDetail {
        /**
         * Information about the recommended action to fix the state.
         */
        action?: string;
        /**
         * The pool configuration information, including the vdevs for each section (e.g. spares, cache), may be nested.
         */
        children: {
                cksum?: number;
                /**
                 * An optional message about the vdev.
                 */
                msg: string;
                /**
                 * The name of the vdev or section.
                 */
                name: string;
                read?: number;
                /**
                 * The state of the vdev.
                 */
                state?: string;
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
    }
    /**
     * Returned by GET /nodes/{node}/disks/list
     */
    export interface nodesDisksListList {
        /**
         * The device path
         */
        devpath: string;
        gpt: boolean;
        health?: string;
        model?: string;
        osdid: number;
        serial?: string;
        size: number;
        used?: string;
        vendor?: string;
        wwn?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/disks/smart
     */
    export interface nodesDisksSmartSmart {
        attributes?: string[];
        health: string;
        text?: string;
        type?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/apt
     */
    export interface nodesAptIndex {
        id: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/apt/update
     */
    export interface nodesAptUpdateListUpdates {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/apt/versions
     */
    export interface nodesAptVersionsVersions {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/firewall
     */
    export interface nodesFirewallIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/firewall/rules
     */
    export interface nodesFirewallRulesGetRules {
        pos: number;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/firewall/rules/{pos}
     */
    export interface nodesFirewallRulesGetRule {
        action: string;
        comment?: string;
        dest?: string;
        dport?: string;
        enable?: number;
        iface?: string;
        ipversion?: number;
        /**
         * Log level for firewall rule
         */
        log?: string;
        macro?: string;
        pos: number;
        proto?: string;
        source?: string;
        sport?: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/firewall/options
     */
    export interface nodesFirewallOptionsGetOptions {
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
    }
    /**
     * Returned by GET /nodes/{node}/firewall/log
     */
    export interface nodesFirewallLogLog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/replication
     */
    export interface nodesReplicationStatus {
        id: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/replication/{id}
     */
    export interface nodesReplicationIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/replication/{id}/log
     */
    export interface nodesReplicationLogReadJobLog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/certificates
     */
    export interface nodesCertificatesIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/certificates/acme
     */
    export interface nodesCertificatesAcmeIndex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/certificates/info
     */
    export interface nodesCertificatesInfoInfo {
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
    }
    /**
     * Returned by POST /nodes/{node}/certificates/custom
     */
    export interface nodesCertificatesCustomUploadCustomCert {
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
    }
    /**
     * Returned by GET /nodes/{node}/sdn
     */
    export interface nodesSdnSdnindex {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/sdn/zones
     */
    export interface nodesSdnZonesIndex {
        /**
         * Status of zone
         */
        status: string;
        /**
         * The SDN zone object identifier.
         */
        zone: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/sdn/zones/{zone}
     */
    export interface nodesSdnZonesDiridx {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/sdn/zones/{zone}/content
     */
    export interface nodesSdnZonesContentIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/version
     */
    export interface nodesVersionVersion {
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
    }
    /**
     * Returned by GET /nodes/{node}/netstat
     */
    export interface nodesNetstatNetstat {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/rrd
     */
    export interface nodesRrdRrd {
        filename: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/rrddata
     */
    export interface nodesRrddataRrddata {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/syslog
     */
    export interface nodesSyslogSyslog {
        /**
         * Line number
         */
        n: number;
        /**
         * Line text
         */
        t: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/vncshell
     */
    export interface nodesVncshellVncshell {
        cert: string;
        port: number;
        ticket: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/termproxy
     */
    export interface nodesTermproxyTermproxy {
        port: number;
        ticket: string;
        upid: string;
        user: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/vncwebsocket
     */
    export interface nodesVncwebsocketVncwebsocket {
        port: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /nodes/{node}/spiceshell
     */
    export interface nodesSpiceshellSpiceshell {
        host: string;
        password: string;
        proxy: string;
        'tls-port': number;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/dns
     */
    export interface nodesDnsDns {
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
    }
    /**
     * Returned by GET /nodes/{node}/time
     */
    export interface nodesTimeTime {
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
    }
    /**
     * Returned by GET /nodes/{node}/aplinfo
     */
    export interface nodesAplinfoAplinfo {
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /nodes/{node}/hosts
     */
    export interface nodesHostsGetEtcHosts {
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
    }
    /**
     * Returned by GET /storage
     */
    export interface storageIndex {
        storage: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access
     */
    export interface accessIndex {
        subdir: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/users
     */
    export interface accessUsersIndex {
        comment?: string;
        email?: string;
        /**
         * Enable the account (default). You can set this to '0' to disable the account
         */
        enable?: boolean;
        /**
         * Account expiration date (seconds since epoch). '0' means no expiration date.
         */
        expire?: number;
        firstname?: string;
        groups?: string;
        /**
         * Keys for two factor auth (yubico).
         */
        keys?: string;
        lastname?: string;
        tokens?: {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/users/{userid}
     */
    export interface accessUsersReadUser {
        comment?: string;
        email?: string;
        /**
         * Enable the account (default). You can set this to '0' to disable the account
         */
        enable?: boolean;
        /**
         * Account expiration date (seconds since epoch). '0' means no expiration date.
         */
        expire?: number;
        firstname?: string;
        groups?: string[];
        /**
         * Keys for two factor auth (yubico).
         */
        keys?: string;
        lastname?: string;
        tokens?: any;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/users/{userid}/tfa
     */
    export interface accessUsersTfaReadUserTfaType {
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
    }
    /**
     * Returned by GET /access/users/{userid}/token
     */
    export interface accessUsersTokenTokenIndex {
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
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/users/{userid}/token/{tokenid}
     */
    export interface accessUsersTokenReadToken {
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
    }
    /**
     * Returned by POST /access/users/{userid}/token/{tokenid}
     */
    export interface accessUsersTokenGenerateToken {
        /**
         * The full token id.
         */
        'full-tokenid': string;
        info: {
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
    }
    /**
     * Returned by PUT /access/users/{userid}/token/{tokenid}
     */
    export interface accessUsersTokenUpdateTokenInfo {
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
    }
    /**
     * Returned by GET /access/groups
     */
    export interface accessGroupsIndex {
        comment?: string;
        groupid: string;
        /**
         * list of users which form this group
         */
        users?: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/groups/{groupid}
     */
    export interface accessGroupsReadGroup {
        comment?: string;
        members: string[];
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/roles
     */
    export interface accessRolesIndex {
        privs?: string;
        roleid: string;
        special?: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/roles/{roleid}
     */
    export interface accessRolesReadRole {
        'Datastore.Allocate'?: boolean;
        'Datastore.AllocateSpace'?: boolean;
        'Datastore.AllocateTemplate'?: boolean;
        'Datastore.Audit'?: boolean;
        'Group.Allocate'?: boolean;
        'Permissions.Modify'?: boolean;
        'Pool.Allocate'?: boolean;
        'Realm.Allocate'?: boolean;
        'Realm.AllocateUser'?: boolean;
        'SDN.Allocate'?: boolean;
        'SDN.Audit'?: boolean;
        'Sys.Audit'?: boolean;
        'Sys.Console'?: boolean;
        'Sys.Modify'?: boolean;
        'Sys.PowerMgmt'?: boolean;
        'Sys.Syslog'?: boolean;
        'User.Modify'?: boolean;
        'VM.Allocate'?: boolean;
        'VM.Audit'?: boolean;
        'VM.Backup'?: boolean;
        'VM.Clone'?: boolean;
        'VM.Config.CDROM'?: boolean;
        'VM.Config.CPU'?: boolean;
        'VM.Config.Cloudinit'?: boolean;
        'VM.Config.Disk'?: boolean;
        'VM.Config.HWType'?: boolean;
        'VM.Config.Memory'?: boolean;
        'VM.Config.Network'?: boolean;
        'VM.Config.Options'?: boolean;
        'VM.Console'?: boolean;
        'VM.Migrate'?: boolean;
        'VM.Monitor'?: boolean;
        'VM.PowerMgmt'?: boolean;
        'VM.Snapshot'?: boolean;
        'VM.Snapshot.Rollback'?: boolean;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/acl
     */
    export interface accessAclReadAcl {
        /**
         * Access control path
         */
        path: string;
        /**
         * Allow to propagate (inherit) permissions.
         */
        propagate?: boolean;
        roleid: string;
        type: string;
        ugid: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /access/domains
     */
    export interface accessDomainsIndex {
        /**
         * A comment. The GUI use this text when you select a domain (Realm) on the login window.
         */
        comment?: string;
        realm: string;
        /**
         * Two-factor authentication provider.
         */
        tfa?: string;
        type: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /access/ticket
     */
    export interface accessTicketCreateTicket {
        CSRFPreventionToken?: string;
        clustername?: string;
        ticket?: string;
        username: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by POST /access/tfa
     */
    export interface accessTfaVerifyTfa {
        ticket: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /pools
     */
    export interface poolsIndex {
        poolid: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /pools/{poolid}
     */
    export interface poolsReadPool {
        comment?: string;
        members: {
                id: string;
                node: string;
                storage?: string;
                type: string;
                vmid?: number;
            }[];
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    /**
     * Returned by GET /version
     */
    export interface versionVersion {
        release: string;
        repoid: string;
        version: string;
        /**
         * additionalProperties
         */
        [additionalProperties: string]: any;
    }
    export interface Api {
        cluster: {
            /**
             * Cluster index.
             * GET /cluster
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<clusterIndex[]>;
            replication: {
                /**
                 * List replication jobs.
                 * GET /cluster/replication
                 * @allowtoken 1
                 * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>.","user":"all"}
                 */
                $get(): Promise<clusterReplicationIndex[]>;
                /**
                 * Create a new replication job
                 * POST /cluster/replication
                 * @allowtoken 1
                 * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                 */
                $post(param: { comment?: String0_4096, disable?: boolean, id: pvereplicationjobid, rate?: Trate, remove_job?: Tremove_job, schedule?: pvecalendarevent, source?: pvenode, target: pvenode, type: Ttype }): Promise<null>;
                $(id: string): {
                    /**
                     * Mark replication job for removal.
                     * DELETE /cluster/replication/{id}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                     */
                    $delete(param?: { force?: boolean, keep?: boolean }): Promise<null>;
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
                    $put(param?: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, disable?: boolean, rate?: Trate, remove_job?: Tremove_job, schedule?: pvecalendarevent, source?: pvenode }): Promise<null>;
                };
            },
            config: {
                /**
                 * Directory index.
                 * GET /cluster/config
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<clusterConfigIndex[]>;
                /**
                 * Generate new cluster configuration. If no links given, default to local IP address as link0.
                 * POST /cluster/config
                 * @allowtoken 1
                 */
                $post(param: { clustername: pvenode_1, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, nodeid?: integer_Min1, votes?: integer_Min1 }): Promise<string>;
                apiversion: {
                    /**
                     * Return the version of the cluster join API available on this node.
                     * GET /cluster/config/apiversion
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<number>;
                },
                nodes: {
                    /**
                     * Corosync node list.
                     * GET /cluster/config/nodes
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<clusterConfigNodesNodes[]>;
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
                        $post(param?: { apiversion?: integer, force?: boolean, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, new_node_ip?: ip, nodeid?: integer_Min1, votes?: integer_Min0 }): Promise<clusterConfigNodesAddnode>;
                    };
                },
                join: {
                    /**
                     * Get information needed to join this cluster over the connected node.
                     * GET /cluster/config/join
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(param?: { node?: pvenode }): Promise<clusterConfigJoinJoinInfo>;
                    /**
                     * Joins this node into an existing cluster. If no links are given, default to IP resolved by node's hostname on single link (fallback fails for clusters with multiple links).
                     * POST /cluster/config/join
                     * @allowtoken 1
                     */
                    $post(param: { fingerprint: Tfingerprint, force?: boolean, hostname: string, link0?: Tlink, link1?: Tlink, link2?: Tlink, link3?: Tlink, link4?: Tlink, link5?: Tlink, link6?: Tlink, link7?: Tlink, nodeid?: integer_Min1, password: String0_128, votes?: integer_Min0 }): Promise<string>;
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
                $get(): Promise<clusterFirewallIndex[]>;
                groups: {
                    /**
                     * List security groups.
                     * GET /cluster/firewall/groups
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<clusterFirewallGroupsListSecurityGroups[]>;
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
                        $get(): Promise<clusterFirewallGroupsGetRules[]>;
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
                            $get(): Promise<clusterFirewallGroupsGetRule>;
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
                    $get(): Promise<clusterFirewallRulesGetRules[]>;
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
                        $get(): Promise<clusterFirewallRulesGetRule>;
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
                    $get(): Promise<clusterFirewallIpsetIpsetIndex[]>;
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
                        $get(): Promise<clusterFirewallIpsetGetIpset[]>;
                        /**
                         * Add IP or Network to IPSet.
                         * POST /cluster/firewall/ipset/{name}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param: { cidr: IPorCIDRorAlias, comment?: string, nomatch?: boolean }): Promise<null>;
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
                            $put(param?: { comment?: string, digest?: String0_40, nomatch?: boolean }): Promise<null>;
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
                    $get(): Promise<clusterFirewallAliasesGetAliases[]>;
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
                    $get(): Promise<clusterFirewallOptionsGetOptions>;
                    /**
                     * Set Firewall options.
                     * PUT /cluster/firewall/options
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $put(param?: { delete?: pveconfigidlist_1, digest?: String0_40, ebtables?: boolean, enable?: integer_Min0, log_ratelimit?: Tlog_ratelimit, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in }): Promise<null>;
                },
                macros: {
                    /**
                     * List available macros
                     * GET /cluster/firewall/macros
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<clusterFirewallMacrosGetMacros[]>;
                },
                refs: {
                    /**
                     * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                     * GET /cluster/firewall/refs
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(param?: { type?: Ttype_2 }): Promise<clusterFirewallRefsRefs[]>;
                },
            },
            backup: {
                /**
                 * List vzdump backup schedule.
                 * GET /cluster/backup
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<clusterBackupIndex[]>;
                /**
                 * Create new vzdump backup job.
                 * POST /cluster/backup
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Modify"]],"description":"The 'tmpdir', 'dumpdir' and 'script' parameters are additionally restricted to the 'root@pam' user."}
                 */
                $post(param: { all?: boolean, bwlimit?: integer_Min0, compress?: Tcompress, dow?: pvedayofweeklist, dumpdir?: string, enabled?: boolean, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: boolean, remove?: boolean, script?: string, size?: integer_Min500, starttime: Tstarttime, stdexcludes?: boolean, stop?: boolean, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<null>;
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
                    $put(param: { all?: boolean, bwlimit?: integer_Min0, compress?: Tcompress, delete?: pveconfigidlist_1, dow?: pvedayofweeklist, dumpdir?: string, enabled?: boolean, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, node?: pvenode, pigz?: integer, pool?: string, quiet?: boolean, remove?: boolean, script?: string, size?: integer_Min500, starttime: Tstarttime, stdexcludes?: boolean, stop?: boolean, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<null>;
                    included_volumes: {
                        /**
                         * Returns included guests and the backup status of their disks. Optimized to be used in ExtJS tree views.
                         * GET /cluster/backup/{id}/included_volumes
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit"]]}
                         */
                        $get(): Promise<clusterBackupIncludedVolumesGetVolumeBackupIncluded>;
                    },
                };
            },
            backupinfo: {
                /**
                 * Stub, waits for future use.
                 * GET /cluster/backupinfo
                 * @allowtoken 1
                 */
                $get(): Promise<string>;
                not_backed_up: {
                    /**
                     * Shows all guests which are not covered by any backup job.
                     * GET /cluster/backupinfo/not_backed_up
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<clusterBackupinfoNotBackedUpGetGuestsNotInBackup[]>;
                },
            },
            ha: {
                /**
                 * Directory index.
                 * GET /cluster/ha
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<clusterHaIndex[]>;
                resources: {
                    /**
                     * List HA resources.
                     * GET /cluster/ha/resources
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(param?: { type?: Ttype_3 }): Promise<clusterHaResourcesIndex[]>;
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
                        $get(): Promise<clusterHaResourcesRead>;
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
                    $get(): Promise<clusterHaGroupsIndex[]>;
                    /**
                     * Create a new HA group.
                     * POST /cluster/ha/groups
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Console"]]}
                     */
                    $post(param: { comment?: String0_4096, group: pveconfigid, nodes: pvehagroupnodelist, nofailback?: boolean, restricted?: boolean, type?: Ttype_4 }): Promise<null>;
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
                        $put(param?: { comment?: String0_4096, delete?: pveconfigidlist, digest?: String0_40, nodes?: pvehagroupnodelist, nofailback?: boolean, restricted?: boolean }): Promise<null>;
                    };
                },
                status: {
                    /**
                     * Directory index.
                     * GET /cluster/ha/status
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<clusterHaStatusIndex[]>;
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
                $get(): Promise<clusterAcmeIndex[]>;
                plugins: {
                    /**
                     * ACME plugin index.
                     * GET /cluster/acme/plugins
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $get(param?: { type?: Ttype_5 }): Promise<clusterAcmePluginsIndex[]>;
                    /**
                     * Add ACME plugin configuration.
                     * POST /cluster/acme/plugins
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $post(param: { api?: Tapi, data?: string, disable?: boolean, id: pveconfigid, nodes?: pvenodelist, type: Ttype_5, 'validation-delay'?: integer0_172800 }): Promise<null>;
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
                        $put(param?: { api?: Tapi, data?: string, delete?: pveconfigidlist, digest?: String0_40, disable?: boolean, nodes?: pvenodelist, 'validation-delay'?: integer0_172800 }): Promise<null>;
                    };
                },
                account: {
                    /**
                     * ACMEAccount index.
                     * GET /cluster/acme/account
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<clusterAcmeAccountAccountIndex[]>;
                    /**
                     * Register a new ACME account with CA.
                     * POST /cluster/acme/account
                     * @allowtoken 1
                     */
                    $post(param: { contact: emaillist, directory?: Tdirectory, name?: pveconfigid, tos_url?: string }): Promise<string>;
                    $(name: string): {
                        /**
                         * Deactivate existing ACME account at CA.
                         * DELETE /cluster/acme/account/{name}
                         * @allowtoken 1
                         */
                        $delete(): Promise<string>;
                        /**
                         * Return existing ACME account information.
                         * GET /cluster/acme/account/{name}
                         * @allowtoken 1
                         */
                        $get(): Promise<clusterAcmeAccountGetAccount>;
                        /**
                         * Update existing ACME account information with CA. Note: not specifying any new account information triggers a refresh.
                         * PUT /cluster/acme/account/{name}
                         * @allowtoken 1
                         */
                        $put(param?: { contact?: emaillist }): Promise<string>;
                    };
                },
                tos: {
                    /**
                     * Retrieve ACME TermsOfService URL from CA.
                     * GET /cluster/acme/tos
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(param?: { directory?: Tdirectory }): Promise<string>;
                },
                directories: {
                    /**
                     * Get named known ACME directory endpoints.
                     * GET /cluster/acme/directories
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<clusterAcmeDirectoriesGetDirectories[]>;
                },
                'challenge-schema': {
                    /**
                     * Get schema of ACME challenge types.
                     * GET /cluster/acme/challenge-schema
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<clusterAcmeChallengeSchemaChallengeschema[]>;
                },
            },
            ceph: {
                /**
                 * Cluster ceph index.
                 * GET /cluster/ceph
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<clusterCephCephindex[]>;
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
                    $get(): Promise<clusterCephFlagsGetAllFlags[]>;
                    /**
                     * Set/Unset multiple ceph flags at once.
                     * PUT /cluster/ceph/flags
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Modify"]]}
                     */
                    $put(param?: { nobackfill?: boolean, 'nodeep-scrub'?: boolean, nodown?: boolean, noin?: boolean, noout?: boolean, norebalance?: boolean, norecover?: boolean, noscrub?: boolean, notieragent?: boolean, noup?: boolean, pause?: boolean }): Promise<string>;
                    $(flag: string): {
                        /**
                         * Get the status of a specific ceph flag.
                         * GET /cluster/ceph/flags/{flag}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit"]]}
                         */
                        $get(): Promise<boolean>;
                        /**
                         * Set or clear (unset) a specific ceph flag
                         * PUT /cluster/ceph/flags/{flag}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $put(param: { value: boolean }): Promise<null>;
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
                $get(): Promise<clusterSdnIndex[]>;
                /**
                 * Apply sdn controller changes && reload.
                 * PUT /cluster/sdn
                 * @allowtoken 1
                 * @permissions {"check":["perm","/sdn",["SDN.Allocate"]]}
                 */
                $put(): Promise<string>;
                vnets: {
                    /**
                     * SDN vnets index.
                     * GET /cluster/sdn/vnets
                     * @allowtoken 1
                     * @permissions {"description":"Only list entries where you have 'SDN.Audit' or 'SDN.Allocate' permissions on '/sdn/vnets/<vnet>'","user":"all"}
                     */
                    $get(): Promise<clusterSdnVnetsIndex[]>;
                    /**
                     * Create a new sdn vnet object.
                     * POST /cluster/sdn/vnets
                     * @allowtoken 1
                     * @permissions {"check":["perm","/sdn/vnets",["SDN.Allocate"]]}
                     */
                    $post(param: { alias?: string, ipv4?: CIDRv4, ipv6?: CIDRv6, mac?: macaddr, tag?: integer, type?: Ttype_6, vlanaware?: boolean, vnet: pvesdnvnetid, zone: string }): Promise<null>;
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
                        $put(param?: { alias?: string, delete?: pveconfigidlist, digest?: String0_40, ipv4?: CIDRv4, ipv6?: CIDRv6, mac?: macaddr, tag?: integer, vlanaware?: boolean, zone?: string }): Promise<null>;
                    };
                },
                zones: {
                    /**
                     * SDN zones index.
                     * GET /cluster/sdn/zones
                     * @allowtoken 1
                     * @permissions {"description":"Only list entries where you have 'SDN.Audit' or 'SDN.Allocate' permissions on '/sdn/zones/<zone>'","user":"all"}
                     */
                    $get(param?: { type?: Ttype_7 }): Promise<clusterSdnZonesIndex[]>;
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
                    $get(param?: { type?: Ttype_8 }): Promise<clusterSdnControllersIndex[]>;
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
                $get(param?: { max?: integer_Min1 }): Promise<clusterLogLog[]>;
            },
            resources: {
                /**
                 * Resources index (cluster wide).
                 * GET /cluster/resources
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(param?: { type?: Ttype_9 }): Promise<clusterResourcesResources[]>;
            },
            tasks: {
                /**
                 * List recent tasks (cluster wide).
                 * GET /cluster/tasks
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<clusterTasksTasks[]>;
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
                $put(param?: { bwlimit?: Tbwlimit, console?: Tconsole, delete?: pveconfigidlist_1, email_from?: emailopt, fencing?: Tfencing, ha?: Tha, http_proxy?: Thttp_proxy, keyboard?: Tkeyboard, language?: Tlanguage, mac_prefix?: macprefix, max_workers?: integer_Min1, migration?: Tmigration, migration_unsecure?: boolean, u2f?: Tu2f }): Promise<null>;
            },
            status: {
                /**
                 * Get cluster status information.
                 * GET /cluster/status
                 * @allowtoken 1
                 * @permissions {"check":["perm","/",["Sys.Audit"]]}
                 */
                $get(): Promise<clusterStatusGetStatus[]>;
            },
            nextid: {
                /**
                 * Get next free VMID. If you pass an VMID it will raise an error if the ID is already used.
                 * GET /cluster/nextid
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(param?: { vmid?: pvevmid }): Promise<number>;
            },
        },
        nodes: {
            /**
             * Cluster node index.
             * GET /nodes
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<nodesIndex[]>;
            $(node: string): {
                /**
                 * Node index.
                 * GET /nodes/{node}
                 * @allowtoken 1
                 * @permissions {"user":"all"}
                 */
                $get(): Promise<nodesIndex2[]>;
                qemu: {
                    /**
                     * Virtual machine index (per node).
                     * GET /nodes/{node}/qemu
                     * @allowtoken 1
                     * @permissions {"description":"Only list VMs where you have VM.Audit permissons on /vms/<vmid>.","user":"all"}
                     */
                    $get(param?: { full?: boolean }): Promise<nodesQemuVm[]>;
                    /**
                     * Create or restore a virtual machine.
                     * POST /nodes/{node}/qemu
                     * @allowtoken 1
                     * @permissions {"description":"You need 'VM.Allocate' permissions on /vms/{vmid} or on the VM pool /pool/{pool}. For restore (option 'archive'), it is enough if the user has 'VM.Backup' permission and the VM already exists. If you create disks you need 'Datastore.AllocateSpace' on any used storage.","user":"all"}
                     */
                    $post(param: { acpi?: boolean, agent?: Tagent, arch?: Tarch, archive?: String0_255, args?: string, audio0?: Taudio0, autostart?: boolean, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, bwlimit?: integer_Min0, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, description?: string, efidisk0?: Tefidisk0, force?: boolean, freeze?: boolean, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: boolean, localtime?: boolean, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, numa?: boolean, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: boolean, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, pool?: pvepoolid, protection?: boolean, reboot?: boolean, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, start?: boolean, startdate?: Tstartdate, startup?: pvestartuporder, storage?: pvestorageid, tablet?: boolean, tags?: pvetaglist, tdf?: boolean, template?: boolean, unique?: boolean, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmid: pvevmid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<string>;
                    $(vmid: number): {
                        /**
                         * Destroy the vm (also delete all used/owned volumes).
                         * DELETE /nodes/{node}/qemu/{vmid}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Allocate"]]}
                         */
                        $delete(param?: { purge?: boolean, skiplock?: boolean }): Promise<string>;
                        /**
                         * Directory index
                         * GET /nodes/{node}/qemu/{vmid}
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<nodesQemuVmdiridx[]>;
                        firewall: {
                            /**
                             * Directory index.
                             * GET /nodes/{node}/qemu/{vmid}/firewall
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<nodesQemuFirewallIndex[]>;
                            rules: {
                                /**
                                 * List rules.
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/rules
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<nodesQemuFirewallRulesGetRules[]>;
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
                                    $get(): Promise<nodesQemuFirewallRulesGetRule>;
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
                                $get(): Promise<nodesQemuFirewallAliasesGetAliases[]>;
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
                                $get(): Promise<nodesQemuFirewallIpsetIpsetIndex[]>;
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
                                    $get(): Promise<nodesQemuFirewallIpsetGetIpset[]>;
                                    /**
                                     * Add IP or Network to IPSet.
                                     * POST /nodes/{node}/qemu/{vmid}/firewall/ipset/{name}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                     */
                                    $post(param: { cidr: IPorCIDRorAlias, comment?: string, nomatch?: boolean }): Promise<null>;
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
                                        $put(param?: { comment?: string, digest?: String0_40, nomatch?: boolean }): Promise<null>;
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
                                $get(): Promise<nodesQemuFirewallOptionsGetOptions>;
                                /**
                                 * Set Firewall options.
                                 * PUT /nodes/{node}/qemu/{vmid}/firewall/options
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $put(param?: { delete?: pveconfigidlist_1, dhcp?: boolean, digest?: String0_40, enable?: boolean, ipfilter?: boolean, log_level_in?: Tlog, log_level_out?: Tlog, macfilter?: boolean, ndp?: boolean, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in, radv?: boolean }): Promise<null>;
                            },
                            log: {
                                /**
                                 * Read firewall log
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/log
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                                 */
                                $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<nodesQemuFirewallLogLog[]>;
                            },
                            refs: {
                                /**
                                 * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                                 * GET /nodes/{node}/qemu/{vmid}/firewall/refs
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(param?: { type?: Ttype_2 }): Promise<nodesQemuFirewallRefsRefs[]>;
                            },
                        },
                        agent: {
                            /**
                             * Qemu Agent command index.
                             * GET /nodes/{node}/qemu/{vmid}/agent
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<nodesQemuAgentIndex[]>;
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
                                $post(param: { crypted?: boolean, password: String5_1024, username: string }): Promise<any>;
                            },
                            exec: {
                                /**
                                 * Executes the given command in the vm via the guest-agent and returns an object with the pid.
                                 * POST /nodes/{node}/qemu/{vmid}/agent/exec
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                                 */
                                $post(param?: { command?: stringalist, 'input-data'?: String0_65536 }): Promise<nodesQemuAgentExecExec>;
                            },
                            'exec-status': {
                                /**
                                 * Gets the status of the given pid started by the guest-agent
                                 * GET /nodes/{node}/qemu/{vmid}/agent/exec-status
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                                 */
                                $get(param: { pid: integer }): Promise<nodesQemuAgentExecStatusExecStatus>;
                            },
                            'file-read': {
                                /**
                                 * Reads the given file via guest agent. Is limited to 16777216 bytes.
                                 * GET /nodes/{node}/qemu/{vmid}/agent/file-read
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]]}
                                 */
                                $get(param: { file: string }): Promise<nodesQemuAgentFileReadFileRead>;
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
                            $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<nodesQemuRrdRrd>;
                        },
                        rrddata: {
                            /**
                             * Read VM RRD statistics
                             * GET /nodes/{node}/qemu/{vmid}/rrddata
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<nodesQemuRrddataRrddata[]>;
                        },
                        config: {
                            /**
                             * Get the virtual machine configuration with pending configuration changes applied. Set the 'current' parameter to get the current configuration instead.
                             * GET /nodes/{node}/qemu/{vmid}/config
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param?: { current?: boolean, snapshot?: pveconfigid_3 }): Promise<nodesQemuConfigVmConfig>;
                            /**
                             * Set virtual machine options (asynchrounous API).
                             * POST /nodes/{node}/qemu/{vmid}/config
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk","VM.Config.CDROM","VM.Config.CPU","VM.Config.Memory","VM.Config.Network","VM.Config.HWType","VM.Config.Options","VM.Config.Cloudinit"],"any",1]}
                             */
                            $post(param?: { acpi?: boolean, agent?: Tagent, arch?: Tarch, args?: string, audio0?: Taudio0, autostart?: boolean, background_delay?: integer1_30, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, efidisk0?: Tefidisk0, force?: boolean, freeze?: boolean, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: boolean, localtime?: boolean, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, numa?: boolean, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: boolean, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, protection?: boolean, reboot?: boolean, revert?: pveconfigidlist_1, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, skiplock?: boolean, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, startdate?: Tstartdate, startup?: pvestartuporder, tablet?: boolean, tags?: pvetaglist, tdf?: boolean, template?: boolean, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<string>;
                            /**
                             * Set virtual machine options (synchrounous API) - You should consider using the POST method instead for any actions involving hotplug or storage allocation.
                             * PUT /nodes/{node}/qemu/{vmid}/config
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk","VM.Config.CDROM","VM.Config.CPU","VM.Config.Memory","VM.Config.Network","VM.Config.HWType","VM.Config.Options","VM.Config.Cloudinit"],"any",1]}
                             */
                            $put(param?: { acpi?: boolean, agent?: Tagent, arch?: Tarch, args?: string, audio0?: Taudio0, autostart?: boolean, balloon?: integer_Min0, bios?: Tbios, boot?: Tboot, bootdisk?: pveqmbootdisk, cdrom?: pveqmide, cicustom?: pveqmcicustom, cipassword?: string, citype?: Tcitype, ciuser?: string, cores?: integer_Min1, cpu?: pvevmcpuconf, cpulimit?: Tcpulimit, cpuunits?: integer2_262144, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, efidisk0?: Tefidisk0, force?: boolean, freeze?: boolean, hookscript?: pvevolumeid, hostpci0?: pveqmhostpci, hostpci1?: pveqmhostpci, hostpci2?: pveqmhostpci, hostpci3?: pveqmhostpci, hostpci4?: pveqmhostpci, hostpci5?: pveqmhostpci, hostpci6?: pveqmhostpci, hostpci7?: pveqmhostpci, hotplug?: pvehotplugfeatures, hugepages?: Thugepages, ide0?: Tide, ide1?: Tide, ide2?: Tide, ide3?: Tide, ipconfig0?: pveqmipconfig, ipconfig1?: pveqmipconfig, ipconfig2?: pveqmipconfig, ipconfig3?: pveqmipconfig, ipconfig4?: pveqmipconfig, ipconfig5?: pveqmipconfig, ipconfig6?: pveqmipconfig, ipconfig7?: pveqmipconfig, ivshmem?: Tivshmem, keyboard?: Tkeyboard, kvm?: boolean, localtime?: boolean, lock?: Tlock, machine?: Tmachine, memory?: integer_Min16, migrate_downtime?: Tmigrate_downtime, migrate_speed?: integer_Min0, name?: dnsname, nameserver?: addresslist, net0?: Tnet, net1?: Tnet, net2?: Tnet, net3?: Tnet, numa?: boolean, numa0?: Tnuma, numa1?: Tnuma, numa2?: Tnuma, numa3?: Tnuma, onboot?: boolean, ostype?: Tostype, parallel0?: Tparallel, parallel1?: Tparallel, parallel2?: Tparallel, parallel3?: Tparallel, protection?: boolean, reboot?: boolean, revert?: pveconfigidlist_1, rng0?: Trng0, sata0?: Tsata, sata1?: Tsata, sata2?: Tsata, sata3?: Tsata, scsi0?: Tscsi, scsi1?: Tscsi, scsi2?: Tscsi, scsi3?: Tscsi, scsihw?: Tscsihw, searchdomain?: string, serial0?: Tserial, serial1?: Tserial, serial2?: Tserial, serial3?: Tserial, shares?: integer0_50000, skiplock?: boolean, smbios1?: pveqmsmbios1, smp?: integer_Min1, sockets?: integer_Min1, spice_enhancements?: Tspice_enhancements, sshkeys?: urlencoded, startdate?: Tstartdate, startup?: pvestartuporder, tablet?: boolean, tags?: pvetaglist, tdf?: boolean, template?: boolean, unused0?: Tunused, unused1?: Tunused, unused2?: Tunused, unused3?: Tunused, usb0?: Tusb, usb1?: Tusb, usb2?: Tusb, usb3?: Tusb, vcpus?: integer_Min1, vga?: Tvga, virtio0?: Tvirtio, virtio1?: Tvirtio, virtio2?: Tvirtio, virtio3?: Tvirtio, vmgenid?: Tvmgenid, vmstatestorage?: pvestorageid, watchdog?: pveqmwatchdog }): Promise<null>;
                        },
                        pending: {
                            /**
                             * Get the virtual machine configuration with both current and pending values.
                             * GET /nodes/{node}/qemu/{vmid}/pending
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<nodesQemuPendingVmPending[]>;
                        },
                        unlink: {
                            /**
                             * Unlink/delete disk images.
                             * PUT /nodes/{node}/qemu/{vmid}/unlink
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk"]]}
                             */
                            $put(param: { force?: boolean, idlist: pveconfigidlist_1 }): Promise<null>;
                        },
                        vncproxy: {
                            /**
                             * Creates a TCP VNC proxy connections.
                             * POST /nodes/{node}/qemu/{vmid}/vncproxy
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $post(param?: { 'generate-password'?: boolean, websocket?: boolean }): Promise<nodesQemuVncproxyVncproxy>;
                        },
                        termproxy: {
                            /**
                             * Creates a TCP proxy connections.
                             * POST /nodes/{node}/qemu/{vmid}/termproxy
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $post(param?: { serial?: Tserial_1 }): Promise<nodesQemuTermproxyTermproxy>;
                        },
                        vncwebsocket: {
                            /**
                             * Opens a weksocket for VNC traffic.
                             * GET /nodes/{node}/qemu/{vmid}/vncwebsocket
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]],"description":"You also need to pass a valid ticket (vncticket)."}
                             */
                            $get(param: { port: integer5900_5999, vncticket: String0_512 }): Promise<nodesQemuVncwebsocketVncwebsocket>;
                        },
                        spiceproxy: {
                            /**
                             * Returns a SPICE configuration to connect to the VM.
                             * POST /nodes/{node}/qemu/{vmid}/spiceproxy
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $post(param?: { proxy?: address }): Promise<nodesQemuSpiceproxySpiceproxy>;
                        },
                        status: {
                            /**
                             * Directory index
                             * GET /nodes/{node}/qemu/{vmid}/status
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<nodesQemuStatusVmcmdidx[]>;
                            current: {
                                /**
                                 * Get virtual machine status.
                                 * GET /nodes/{node}/qemu/{vmid}/status/current
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<nodesQemuStatusCurrentVmStatus>;
                            },
                            start: {
                                /**
                                 * Start virtual machine.
                                 * POST /nodes/{node}/qemu/{vmid}/status/start
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { 'force-cpu'?: string, machine?: Tmachine, migratedfrom?: pvenode, migration_network?: CIDR, migration_type?: Tmigration_type, skiplock?: boolean, stateuri?: String0_128, targetstorage?: storagepairlist, timeout?: integer_Min0 }): Promise<string>;
                            },
                            stop: {
                                /**
                                 * Stop virtual machine. The qemu process will exit immediately. Thisis akin to pulling the power plug of a running computer and may damage the VM data
                                 * POST /nodes/{node}/qemu/{vmid}/status/stop
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { keepActive?: boolean, migratedfrom?: pvenode, skiplock?: boolean, timeout?: integer_Min0 }): Promise<string>;
                            },
                            reset: {
                                /**
                                 * Reset virtual machine.
                                 * POST /nodes/{node}/qemu/{vmid}/status/reset
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { skiplock?: boolean }): Promise<string>;
                            },
                            shutdown: {
                                /**
                                 * Shutdown virtual machine. This is similar to pressing the power button on a physical machine.This will send an ACPI event for the guest OS, which should then proceed to a clean shutdown.
                                 * POST /nodes/{node}/qemu/{vmid}/status/shutdown
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { forceStop?: boolean, keepActive?: boolean, skiplock?: boolean, timeout?: integer_Min0 }): Promise<string>;
                            },
                            reboot: {
                                /**
                                 * Reboot the VM by shutting it down, and starting it again. Applies pending changes.
                                 * POST /nodes/{node}/qemu/{vmid}/status/reboot
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { timeout?: integer_Min0 }): Promise<string>;
                            },
                            suspend: {
                                /**
                                 * Suspend virtual machine.
                                 * POST /nodes/{node}/qemu/{vmid}/status/suspend
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]],"description":"You need 'VM.PowerMgmt' on /vms/{vmid}, and if you have set 'todisk', you need also 'VM.Config.Disk' on /vms/{vmid} and 'Datastore.AllocateSpace' on the storage for the vmstate."}
                                 */
                                $post(param?: { skiplock?: boolean, statestorage?: pvestorageid, todisk?: boolean }): Promise<string>;
                            },
                            resume: {
                                /**
                                 * Resume virtual machine.
                                 * POST /nodes/{node}/qemu/{vmid}/status/resume
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { nocheck?: boolean, skiplock?: boolean }): Promise<string>;
                            },
                        },
                        sendkey: {
                            /**
                             * Send key event to virtual machine.
                             * PUT /nodes/{node}/qemu/{vmid}/sendkey
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $put(param: { key: string, skiplock?: boolean }): Promise<null>;
                        },
                        feature: {
                            /**
                             * Check if feature for virtual machine is available.
                             * GET /nodes/{node}/qemu/{vmid}/feature
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param: { feature: Tfeature, snapname?: pveconfigid_3 }): Promise<nodesQemuFeatureVmFeature>;
                        },
                        clone: {
                            /**
                             * Create a copy of virtual machine/template.
                             * POST /nodes/{node}/qemu/{vmid}/clone
                             * @allowtoken 1
                             * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Clone"]],["or",["perm","/vms/{newid}",["VM.Allocate"]],["perm","/pool/{pool}",["VM.Allocate"],"require_param","pool"]]],"description":"You need 'VM.Clone' permissions on /vms/{vmid}, and 'VM.Allocate' permissions on /vms/{newid} (or on the VM pool /pool/{pool}). You also need 'Datastore.AllocateSpace' on any used storage."}
                             */
                            $post(param: { bwlimit?: integer_Min0, description?: string, format?: Tformat, full?: boolean, name?: dnsname, newid: pvevmid, pool?: pvepoolid, snapname?: pveconfigid_3, storage?: pvestorageid, target?: pvenode }): Promise<string>;
                        },
                        move_disk: {
                            /**
                             * Move volume to different storage.
                             * POST /nodes/{node}/qemu/{vmid}/move_disk
                             * @allowtoken 1
                             * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Config.Disk"]],["perm","/storage/{storage}",["Datastore.AllocateSpace"]]],"description":"You need 'VM.Config.Disk' permissions on /vms/{vmid}, and 'Datastore.AllocateSpace' permissions on the storage."}
                             */
                            $post(param: { bwlimit?: integer_Min0, delete?: boolean, digest?: String0_40, disk: Tdisk, format?: Tformat, storage: pvestorageid }): Promise<string>;
                        },
                        migrate: {
                            /**
                             * Get preconditions for migration.
                             * GET /nodes/{node}/qemu/{vmid}/migrate
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Migrate"]]}
                             */
                            $get(param?: { target?: pvenode }): Promise<nodesQemuMigrateMigrateVmPrecondition>;
                            /**
                             * Migrate virtual machine. Creates a new migration task.
                             * POST /nodes/{node}/qemu/{vmid}/migrate
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Migrate"]]}
                             */
                            $post(param: { bwlimit?: integer_Min0, force?: boolean, migration_network?: CIDR, migration_type?: Tmigration_type, online?: boolean, target: pvenode, targetstorage?: storagepairlist, 'with-local-disks'?: boolean }): Promise<string>;
                        },
                        monitor: {
                            /**
                             * Execute Qemu monitor commands.
                             * POST /nodes/{node}/qemu/{vmid}/monitor
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Monitor"]],"description":"Sys.Modify is required for (sub)commands which are not read-only ('info *' and 'help')"}
                             */
                            $post(param: { command: string }): Promise<string>;
                        },
                        resize: {
                            /**
                             * Extend volume size.
                             * PUT /nodes/{node}/qemu/{vmid}/resize
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk"]]}
                             */
                            $put(param: { digest?: String0_40, disk: Tdisk, size: Tsize, skiplock?: boolean }): Promise<null>;
                        },
                        snapshot: {
                            /**
                             * List all snapshots.
                             * GET /nodes/{node}/qemu/{vmid}/snapshot
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<nodesQemuSnapshotSnapshotList[]>;
                            /**
                             * Snapshot a VM.
                             * POST /nodes/{node}/qemu/{vmid}/snapshot
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                             */
                            $post(param: { description?: string, snapname: pveconfigid_3, vmstate?: boolean }): Promise<string>;
                            $(snapname: string): {
                                /**
                                 * Delete a VM snapshot.
                                 * DELETE /nodes/{node}/qemu/{vmid}/snapshot/{snapname}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                                 */
                                $delete(param?: { force?: boolean }): Promise<string>;
                                /**
                                 * 
                                 * @allowtoken 1
                                 * @permissions {"user":"all"}
                                 */
                                $get(): Promise<nodesQemuSnapshotSnapshotCmdIdx[]>;
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
                                    $post(): Promise<string>;
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
                                $get(param: { type: Ttype_10 }): Promise<string>;
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
                    $get(): Promise<nodesCpuIndex[]>;
                },
                lxc: {
                    /**
                     * LXC container index (per node).
                     * GET /nodes/{node}/lxc
                     * @allowtoken 1
                     * @permissions {"description":"Only list CTs where you have VM.Audit permissons on /vms/<vmid>.","user":"all"}
                     */
                    $get(): Promise<nodesLxcVm[]>;
                    /**
                     * Create or restore a container.
                     * POST /nodes/{node}/lxc
                     * @allowtoken 1
                     * @permissions {"description":"You need 'VM.Allocate' permissions on /vms/{vmid} or on the VM pool /pool/{pool}. For restore, it is enough if the user has 'VM.Backup' permission and the VM already exists. You also need 'Datastore.AllocateSpace' permissions on the storage.","user":"all"}
                     */
                    $post(param: { arch?: Tarch_1, bwlimit?: Tmigrate_downtime, cmode?: Tcmode, console?: boolean, cores?: integer1_128, cpulimit?: Tcpulimit, cpuunits?: integer0_500000, description?: string, features?: Tfeatures, force?: boolean, hookscript?: pvevolumeid, hostname?: dnsname_1, 'ignore-unpack-errors'?: boolean, lock?: Tlock_1, memory?: integer_Min16, mp0?: Tmp, mp1?: Tmp, mp2?: Tmp, mp3?: Tmp, nameserver?: addresslist, net0?: Tnet_1, net1?: Tnet_1, net2?: Tnet_1, net3?: Tnet_1, onboot?: boolean, ostemplate: String0_255, ostype?: Tostype_1, password?: Tpassword, pool?: pvepoolid, protection?: boolean, restore?: boolean, rootfs?: Trootfs, searchdomain?: dnsnamelist, 'ssh-public-keys'?: string, start?: boolean, startup?: pvestartuporder, storage?: pvestorageid, swap?: integer_Min0, tags?: pvetaglist, template?: boolean, timezone?: pvecttimezone, tty?: integer0_6, unique?: boolean, unprivileged?: boolean, unused0?: Tunused_1, unused1?: Tunused_1, unused2?: Tunused_1, unused3?: Tunused_1, vmid: pvevmid }): Promise<string>;
                    $(vmid: number): {
                        /**
                         * Destroy the container (also delete all uses files).
                         * DELETE /nodes/{node}/lxc/{vmid}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/vms/{vmid}",["VM.Allocate"]]}
                         */
                        $delete(param?: { force?: boolean, purge?: boolean }): Promise<string>;
                        /**
                         * Directory index
                         * GET /nodes/{node}/lxc/{vmid}
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<nodesLxcVmdiridx[]>;
                        config: {
                            /**
                             * Get container configuration.
                             * GET /nodes/{node}/lxc/{vmid}/config
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param?: { current?: boolean, snapshot?: pveconfigid_3 }): Promise<nodesLxcConfigVmConfig>;
                            /**
                             * Set container options.
                             * PUT /nodes/{node}/lxc/{vmid}/config
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk","VM.Config.CPU","VM.Config.Memory","VM.Config.Network","VM.Config.Options"],"any",1],"description":"non-volume mount points in rootfs and mp[n] are restricted to root@pam"}
                             */
                            $put(param?: { arch?: Tarch_1, cmode?: Tcmode, console?: boolean, cores?: integer1_128, cpulimit?: Tcpulimit, cpuunits?: integer0_500000, delete?: pveconfigidlist_1, description?: string, digest?: String0_40, features?: Tfeatures, hookscript?: pvevolumeid, hostname?: dnsname_1, lock?: Tlock_1, memory?: integer_Min16, mp0?: Tmp, mp1?: Tmp, mp2?: Tmp, mp3?: Tmp, nameserver?: addresslist, net0?: Tnet_1, net1?: Tnet_1, net2?: Tnet_1, net3?: Tnet_1, onboot?: boolean, ostype?: Tostype_1, protection?: boolean, revert?: pveconfigidlist_1, rootfs?: Trootfs, searchdomain?: dnsnamelist, startup?: pvestartuporder, swap?: integer_Min0, tags?: pvetaglist, template?: boolean, timezone?: pvecttimezone, tty?: integer0_6, unprivileged?: boolean, unused0?: Tunused_1, unused1?: Tunused_1, unused2?: Tunused_1, unused3?: Tunused_1 }): Promise<null>;
                        },
                        status: {
                            /**
                             * Directory index
                             * GET /nodes/{node}/lxc/{vmid}/status
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<nodesLxcStatusVmcmdidx[]>;
                            current: {
                                /**
                                 * Get virtual machine status.
                                 * GET /nodes/{node}/lxc/{vmid}/status/current
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<nodesLxcStatusCurrentVmStatus>;
                            },
                            start: {
                                /**
                                 * Start the container.
                                 * POST /nodes/{node}/lxc/{vmid}/status/start
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { skiplock?: boolean }): Promise<string>;
                            },
                            stop: {
                                /**
                                 * Stop the container. This will abruptly stop all processes running in the container.
                                 * POST /nodes/{node}/lxc/{vmid}/status/stop
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { skiplock?: boolean }): Promise<string>;
                            },
                            shutdown: {
                                /**
                                 * Shutdown the container. This will trigger a clean shutdown of the container, see lxc-stop(1) for details.
                                 * POST /nodes/{node}/lxc/{vmid}/status/shutdown
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { forceStop?: boolean, timeout?: integer_Min0 }): Promise<string>;
                            },
                            suspend: {
                                /**
                                 * Suspend the container.
                                 * POST /nodes/{node}/lxc/{vmid}/status/suspend
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(): Promise<string>;
                            },
                            resume: {
                                /**
                                 * Resume the container.
                                 * POST /nodes/{node}/lxc/{vmid}/status/resume
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(): Promise<string>;
                            },
                            reboot: {
                                /**
                                 * Reboot the container by shutting it down, and starting it again. Applies pending changes.
                                 * POST /nodes/{node}/lxc/{vmid}/status/reboot
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.PowerMgmt"]]}
                                 */
                                $post(param?: { timeout?: integer_Min0 }): Promise<string>;
                            },
                        },
                        snapshot: {
                            /**
                             * List all snapshots.
                             * GET /nodes/{node}/lxc/{vmid}/snapshot
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<nodesLxcSnapshotList[]>;
                            /**
                             * Snapshot a container.
                             * POST /nodes/{node}/lxc/{vmid}/snapshot
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                             */
                            $post(param: { description?: string, snapname: pveconfigid_3 }): Promise<string>;
                            $(snapname: string): {
                                /**
                                 * Delete a LXC snapshot.
                                 * DELETE /nodes/{node}/lxc/{vmid}/snapshot/{snapname}
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot"]]}
                                 */
                                $delete(param?: { force?: boolean }): Promise<string>;
                                /**
                                 * 
                                 * @allowtoken 1
                                 * @permissions {"user":"all"}
                                 */
                                $get(): Promise<nodesLxcSnapshotSnapshotCmdIdx[]>;
                                rollback: {
                                    /**
                                     * Rollback LXC state to specified snapshot.
                                     * POST /nodes/{node}/lxc/{vmid}/snapshot/{snapname}/rollback
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Snapshot","VM.Snapshot.Rollback"],"any",1]}
                                     */
                                    $post(): Promise<string>;
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
                            $get(): Promise<nodesLxcFirewallIndex[]>;
                            rules: {
                                /**
                                 * List rules.
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/rules
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(): Promise<nodesLxcFirewallRulesGetRules[]>;
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
                                    $get(): Promise<nodesLxcFirewallRulesGetRule>;
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
                                $get(): Promise<nodesLxcFirewallAliasesGetAliases[]>;
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
                                $get(): Promise<nodesLxcFirewallIpsetIpsetIndex[]>;
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
                                    $get(): Promise<nodesLxcFirewallIpsetGetIpset[]>;
                                    /**
                                     * Add IP or Network to IPSet.
                                     * POST /nodes/{node}/lxc/{vmid}/firewall/ipset/{name}
                                     * @allowtoken 1
                                     * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                     */
                                    $post(param: { cidr: IPorCIDRorAlias, comment?: string, nomatch?: boolean }): Promise<null>;
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
                                        $put(param?: { comment?: string, digest?: String0_40, nomatch?: boolean }): Promise<null>;
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
                                $get(): Promise<nodesLxcFirewallOptionsGetOptions>;
                                /**
                                 * Set Firewall options.
                                 * PUT /nodes/{node}/lxc/{vmid}/firewall/options
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Network"]]}
                                 */
                                $put(param?: { delete?: pveconfigidlist_1, dhcp?: boolean, digest?: String0_40, enable?: boolean, ipfilter?: boolean, log_level_in?: Tlog, log_level_out?: Tlog, macfilter?: boolean, ndp?: boolean, policy_in?: Tpolicy_in, policy_out?: Tpolicy_in, radv?: boolean }): Promise<null>;
                            },
                            log: {
                                /**
                                 * Read firewall log
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/log
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                                 */
                                $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<nodesLxcFirewallLogLog[]>;
                            },
                            refs: {
                                /**
                                 * Lists possible IPSet/Alias reference which are allowed in source/dest properties.
                                 * GET /nodes/{node}/lxc/{vmid}/firewall/refs
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                                 */
                                $get(param?: { type?: Ttype_2 }): Promise<nodesLxcFirewallRefsRefs[]>;
                            },
                        },
                        rrd: {
                            /**
                             * Read VM RRD statistics (returns PNG)
                             * GET /nodes/{node}/lxc/{vmid}/rrd
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<nodesLxcRrdRrd>;
                        },
                        rrddata: {
                            /**
                             * Read VM RRD statistics
                             * GET /nodes/{node}/lxc/{vmid}/rrddata
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<nodesLxcRrddataRrddata[]>;
                        },
                        vncproxy: {
                            /**
                             * Creates a TCP VNC proxy connections.
                             * POST /nodes/{node}/lxc/{vmid}/vncproxy
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $post(param?: { height?: integer16_2160, websocket?: boolean, width?: integer16_4096 }): Promise<nodesLxcVncproxyVncproxy>;
                        },
                        termproxy: {
                            /**
                             * Creates a TCP proxy connection.
                             * POST /nodes/{node}/lxc/{vmid}/termproxy
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $post(): Promise<nodesLxcTermproxyTermproxy>;
                        },
                        vncwebsocket: {
                            /**
                             * Opens a weksocket for VNC traffic.
                             * GET /nodes/{node}/lxc/{vmid}/vncwebsocket
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]],"description":"You also need to pass a valid ticket (vncticket)."}
                             */
                            $get(param: { port: integer5900_5999, vncticket: String0_512 }): Promise<nodesLxcVncwebsocketVncwebsocket>;
                        },
                        spiceproxy: {
                            /**
                             * Returns a SPICE configuration to connect to the CT.
                             * POST /nodes/{node}/lxc/{vmid}/spiceproxy
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Console"]]}
                             */
                            $post(param?: { proxy?: address }): Promise<nodesLxcSpiceproxySpiceproxy>;
                        },
                        migrate: {
                            /**
                             * Migrate the container to another node. Creates a new migration task.
                             * POST /nodes/{node}/lxc/{vmid}/migrate
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Migrate"]]}
                             */
                            $post(param: { bwlimit?: Tmigrate_downtime, force?: boolean, online?: boolean, restart?: boolean, target: pvenode, timeout?: integer }): Promise<string>;
                        },
                        feature: {
                            /**
                             * Check if feature for virtual machine is available.
                             * GET /nodes/{node}/lxc/{vmid}/feature
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(param: { feature: Tfeature, snapname?: pveconfigid_3 }): Promise<nodesLxcFeatureVmFeature>;
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
                            $post(param: { bwlimit?: Tmigrate_downtime, description?: string, full?: boolean, hostname?: dnsname, newid: pvevmid, pool?: pvepoolid, snapname?: pveconfigid_3, storage?: pvestorageid, target?: pvenode }): Promise<string>;
                        },
                        resize: {
                            /**
                             * Resize a container mount point.
                             * PUT /nodes/{node}/lxc/{vmid}/resize
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Config.Disk"],"any",1]}
                             */
                            $put(param: { digest?: String0_40, disk: Tdisk_1, size: Tsize }): Promise<string>;
                        },
                        move_volume: {
                            /**
                             * Move a rootfs-/mp-volume to a different storage
                             * POST /nodes/{node}/lxc/{vmid}/move_volume
                             * @allowtoken 1
                             * @permissions {"check":["and",["perm","/vms/{vmid}",["VM.Config.Disk"]],["perm","/storage/{storage}",["Datastore.AllocateSpace"]]],"description":"You need 'VM.Config.Disk' permissions on /vms/{vmid}, and 'Datastore.AllocateSpace' permissions on the storage."}
                             */
                            $post(param: { bwlimit?: Tmigrate_downtime, delete?: boolean, digest?: String0_40, storage: pvestorageid, volume: Tdisk_1 }): Promise<string>;
                        },
                        pending: {
                            /**
                             * Get container configuration, including pending changes.
                             * GET /nodes/{node}/lxc/{vmid}/pending
                             * @allowtoken 1
                             * @permissions {"check":["perm","/vms/{vmid}",["VM.Audit"]]}
                             */
                            $get(): Promise<nodesLxcPendingVmPending[]>;
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
                    $get(): Promise<nodesCephIndex[]>;
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
                        $post(param: { db_dev?: string, db_size?: Trate, dev: string, encrypted?: boolean, wal_dev?: string, wal_size?: Twal_size }): Promise<string>;
                        $(osdid: string): {
                            /**
                             * Destroy OSD
                             * DELETE /nodes/{node}/ceph/osd/{osdid}
                             * @allowtoken 1
                             */
                            $delete(param?: { cleanup?: boolean }): Promise<string>;
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
                                $post(param?: { deep?: boolean }): Promise<null>;
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
                        $get(): Promise<nodesCephMdsIndex[]>;
                        $(name: string): {
                            /**
                             * Destroy Ceph Metadata Server
                             * DELETE /nodes/{node}/ceph/mds/{name}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Create Ceph Metadata Server (MDS)
                             * POST /nodes/{node}/ceph/mds/{name}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(param?: { hotstandby?: boolean }): Promise<string>;
                        };
                    },
                    mgr: {
                        /**
                         * MGR directory index.
                         * GET /nodes/{node}/ceph/mgr
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesCephMgrIndex[]>;
                        $(id: string): {
                            /**
                             * Destroy Ceph Manager.
                             * DELETE /nodes/{node}/ceph/mgr/{id}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Create Ceph Manager
                             * POST /nodes/{node}/ceph/mgr/{id}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(): Promise<string>;
                        };
                    },
                    mon: {
                        /**
                         * Get Ceph monitor list.
                         * GET /nodes/{node}/ceph/mon
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesCephMonListmon[]>;
                        $(monid: string): {
                            /**
                             * Destroy Ceph Monitor and Manager.
                             * DELETE /nodes/{node}/ceph/mon/{monid}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Create Ceph Monitor and Manager
                             * POST /nodes/{node}/ceph/mon/{monid}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(param?: { 'mon-address'?: ip }): Promise<string>;
                        };
                    },
                    fs: {
                        /**
                         * Directory index.
                         * GET /nodes/{node}/ceph/fs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesCephFsIndex[]>;
                        $(name: string): {
                            /**
                             * Create a Ceph filesystem
                             * POST /nodes/{node}/ceph/fs/{name}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $post(param?: { 'add-storage'?: boolean, pg_num?: integer8_32768 }): Promise<string>;
                        };
                    },
                    disks: {
                        /**
                         * List local disks.
                         * GET /nodes/{node}/ceph/disks
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(param?: { type?: Ttype_11 }): Promise<nodesCephDisksDisks[]>;
                    },
                    config: {
                        /**
                         * Get Ceph configuration.
                         * GET /nodes/{node}/ceph/config
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<string>;
                    },
                    configdb: {
                        /**
                         * Get Ceph configuration database.
                         * GET /nodes/{node}/ceph/configdb
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesCephConfigdbConfigdb[]>;
                    },
                    init: {
                        /**
                         * Create initial ceph default configuration and setup symlinks.
                         * POST /nodes/{node}/ceph/init
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { 'cluster-network'?: CIDR_1, disable_cephx?: boolean, min_size?: integer1_7, network?: CIDR_1, pg_bits?: integer6_14, size?: integer1_7 }): Promise<null>;
                    },
                    stop: {
                        /**
                         * Stop ceph services.
                         * POST /nodes/{node}/ceph/stop
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { service?: Tservice }): Promise<string>;
                    },
                    start: {
                        /**
                         * Start ceph services.
                         * POST /nodes/{node}/ceph/start
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { service?: Tservice }): Promise<string>;
                    },
                    restart: {
                        /**
                         * Restart ceph services.
                         * POST /nodes/{node}/ceph/restart
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param?: { service?: Tservice_1 }): Promise<string>;
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
                        $get(): Promise<nodesCephPoolsLspools[]>;
                        /**
                         * Create POOL
                         * POST /nodes/{node}/ceph/pools
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param: { add_storages?: boolean, application?: Tapplication, crush_rule?: string, min_size?: integer1_7, name: string, pg_num?: integer8_32768, size?: integer1_7 }): Promise<string>;
                        $(name: string): {
                            /**
                             * Destroy pool
                             * DELETE /nodes/{node}/ceph/pools/{name}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Modify"]]}
                             */
                            $delete(param?: { force?: boolean, remove_storages?: boolean }): Promise<string>;
                        };
                    },
                    flags: {
                        /**
                         * get all set ceph flags
                         * GET /nodes/{node}/ceph/flags
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit"]]}
                         */
                        $get(): Promise<string>;
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
                        $get(): Promise<string>;
                    },
                    log: {
                        /**
                         * Read ceph log
                         * GET /nodes/{node}/ceph/log
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                         */
                        $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<nodesCephLogLog[]>;
                    },
                    rules: {
                        /**
                         * List ceph rules.
                         * GET /nodes/{node}/ceph/rules
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesCephRulesRules[]>;
                    },
                },
                vzdump: {
                    /**
                     * Create backup.
                     * POST /nodes/{node}/vzdump
                     * @allowtoken 1
                     * @permissions {"description":"The user needs 'VM.Backup' permissions on any VM, and 'Datastore.AllocateSpace' on the backup storage. The 'maxfiles', 'tmpdir', 'dumpdir', 'script', 'bwlimit' and 'ionice' parameters are restricted to the 'root@pam' user.","user":"all"}
                     */
                    $post(param?: { all?: boolean, bwlimit?: integer_Min0, compress?: Tcompress, dumpdir?: string, exclude?: pvevmidlist, 'exclude-path'?: stringalist, ionice?: integer0_8, lockwait?: integer_Min0, mailnotification?: Tmailnotification, mailto?: stringlist, maxfiles?: integer_Min1, mode?: Tmode, pigz?: integer, pool?: string, quiet?: boolean, remove?: boolean, script?: string, size?: integer_Min500, stdexcludes?: boolean, stdout?: boolean, stop?: boolean, stopwait?: integer_Min0, storage?: pvestorageid, tmpdir?: string, vmid?: pvevmidlist, zstd?: integer }): Promise<string>;
                    extractconfig: {
                        /**
                         * Extract configuration from vzdump backup archive.
                         * GET /nodes/{node}/vzdump/extractconfig
                         * @allowtoken 1
                         * @permissions {"description":"The user needs 'VM.Backup' permissions on the backed up guest ID, and 'Datastore.AllocateSpace' on the backup storage.","user":"all"}
                         */
                        $get(param: { volume: string }): Promise<string>;
                    },
                },
                services: {
                    /**
                     * Service list.
                     * GET /nodes/{node}/services
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<nodesServicesIndex[]>;
                    $(service: string): {
                        /**
                         * Directory index
                         * GET /nodes/{node}/services/{service}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                         */
                        $get(): Promise<nodesServicesSrvcmdidx[]>;
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
                            $post(): Promise<string>;
                        },
                        stop: {
                            /**
                             * Stop service.
                             * POST /nodes/{node}/services/{service}/stop
                             * @allowtoken 1
                             * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                             */
                            $post(): Promise<string>;
                        },
                        restart: {
                            /**
                             * Restart service.
                             * POST /nodes/{node}/services/{service}/restart
                             * @allowtoken 1
                             * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                             */
                            $post(): Promise<string>;
                        },
                        reload: {
                            /**
                             * Reload service.
                             * POST /nodes/{node}/services/{service}/reload
                             * @allowtoken 1
                             * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                             */
                            $post(): Promise<string>;
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
                    $post(param?: { force?: boolean }): Promise<null>;
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
                    $get(param?: { type?: Ttype_12 }): Promise<nodesNetworkIndex[]>;
                    /**
                     * Create network device configuration
                     * POST /nodes/{node}/network
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $post(param: { address?: ipv4, address6?: ipv6, autostart?: boolean, 'bond-primary'?: pveiface_1, bond_mode?: Tbond_mode, bond_xmit_hash_policy?: Tbond_xmit_hash_policy, bridge_ports?: pveifacelist, bridge_vlan_aware?: boolean, cidr?: CIDRv4, cidr6?: CIDRv6, comments?: string, comments6?: string, gateway?: ipv4, gateway6?: ipv6, iface: pveiface, mtu?: integer1280_65520, netmask?: ipv4mask, netmask6?: integer0_128, ovs_bonds?: pveifacelist, ovs_bridge?: pveiface_1, ovs_options?: String0_1024, ovs_ports?: pveifacelist, ovs_tag?: integer1_4094, slaves?: pveifacelist, type: Ttype_13, 'vlan-id'?: integer1_4094, 'vlan-raw-device'?: pveiface_1 }): Promise<null>;
                    /**
                     * Reload network configuration
                     * PUT /nodes/{node}/network
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                     */
                    $put(): Promise<string>;
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
                        $get(): Promise<nodesNetworkNetworkConfig>;
                        /**
                         * Update network device configuration
                         * PUT /nodes/{node}/network/{iface}
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $put(param: { address?: ipv4, address6?: ipv6, autostart?: boolean, 'bond-primary'?: pveiface_1, bond_mode?: Tbond_mode, bond_xmit_hash_policy?: Tbond_xmit_hash_policy, bridge_ports?: pveifacelist, bridge_vlan_aware?: boolean, cidr?: CIDRv4, cidr6?: CIDRv6, comments?: string, comments6?: string, delete?: pveconfigidlist_1, gateway?: ipv4, gateway6?: ipv6, mtu?: integer1280_65520, netmask?: ipv4mask, netmask6?: integer0_128, ovs_bonds?: pveifacelist, ovs_bridge?: pveiface_1, ovs_options?: String0_1024, ovs_ports?: pveifacelist, ovs_tag?: integer1_4094, slaves?: pveifacelist, type: Ttype_13, 'vlan-id'?: integer1_4094, 'vlan-raw-device'?: pveiface_1 }): Promise<null>;
                    };
                },
                tasks: {
                    /**
                     * Read task list for one node (finished tasks).
                     * GET /nodes/{node}/tasks
                     * @allowtoken 1
                     * @permissions {"description":"List task associated with the current user, or all task the user has 'Sys.Audit' permissions on /nodes/<node> (the <node> the task runs on).","user":"all"}
                     */
                    $get(param?: { errors?: boolean, limit?: integer_Min0, source?: Tsource, start?: integer_Min0, typefilter?: string, userfilter?: string, vmid?: pvevmid }): Promise<nodesTasksNodeTasks[]>;
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
                        $get(): Promise<nodesTasksUpidIndex[]>;
                        log: {
                            /**
                             * Read task log.
                             * GET /nodes/{node}/tasks/{upid}/log
                             * @allowtoken 1
                             * @permissions {"description":"The user needs 'Sys.Audit' permissions on '/nodes/<node>' if the task does not belong to him.","user":"all"}
                             */
                            $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<nodesTasksLogReadTaskLog[]>;
                        },
                        status: {
                            /**
                             * Read task status.
                             * GET /nodes/{node}/tasks/{upid}/status
                             * @allowtoken 1
                             * @permissions {"description":"The user needs 'Sys.Audit' permissions on '/nodes/<node>' if the task does not belong to him.","user":"all"}
                             */
                            $get(): Promise<nodesTasksStatusReadTaskStatus>;
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
                    $get(): Promise<nodesScanIndex[]>;
                    zfs: {
                        /**
                         * Scan zfs pool list on local node.
                         * GET /nodes/{node}/scan/zfs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(): Promise<nodesScanZfsZfsscan[]>;
                    },
                    nfs: {
                        /**
                         * Scan remote NFS server.
                         * GET /nodes/{node}/scan/nfs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(param: { server: pvestorageserver }): Promise<nodesScanNfsNfsscan[]>;
                    },
                    cifs: {
                        /**
                         * Scan remote CIFS server.
                         * GET /nodes/{node}/scan/cifs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(param: { domain?: string, password?: string, server: pvestorageserver, username?: string }): Promise<nodesScanCifsCifsscan[]>;
                    },
                    glusterfs: {
                        /**
                         * Scan remote GlusterFS server.
                         * GET /nodes/{node}/scan/glusterfs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(param: { server: pvestorageserver }): Promise<nodesScanGlusterfsGlusterfsscan[]>;
                    },
                    iscsi: {
                        /**
                         * Scan remote iSCSI server.
                         * GET /nodes/{node}/scan/iscsi
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(param: { portal: pvestorageportaldns }): Promise<nodesScanIscsiIscsiscan[]>;
                    },
                    lvm: {
                        /**
                         * List local LVM volume groups.
                         * GET /nodes/{node}/scan/lvm
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(): Promise<nodesScanLvmLvmscan[]>;
                    },
                    lvmthin: {
                        /**
                         * List local LVM Thin Pools.
                         * GET /nodes/{node}/scan/lvmthin
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                         */
                        $get(param: { vg: Tvg }): Promise<nodesScanLvmthinLvmthinscan[]>;
                    },
                    usb: {
                        /**
                         * List local USB devices.
                         * GET /nodes/{node}/scan/usb
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $get(): Promise<nodesScanUsbUsbscan[]>;
                    },
                },
                hardware: {
                    /**
                     * Index of hardware types
                     * GET /nodes/{node}/hardware
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<nodesHardwareIndex[]>;
                    pci: {
                        /**
                         * List local PCI devices.
                         * GET /nodes/{node}/hardware/pci
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $get(param?: { 'pci-class-blacklist'?: stringlist, verbose?: boolean }): Promise<nodesHardwarePciPciscan[]>;
                        $(pciid: string): {
                            /**
                             * Index of available pci methods
                             * GET /nodes/{node}/hardware/pci/{pciid}
                             * @allowtoken 1
                             * @permissions {"user":"all"}
                             */
                            $get(): Promise<nodesHardwarePciPciindex[]>;
                            mdev: {
                                /**
                                 * List mediated device types for given PCI device.
                                 * GET /nodes/{node}/hardware/pci/{pciid}/mdev
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/",["Sys.Modify"]]}
                                 */
                                $get(): Promise<nodesHardwarePciMdevMdevscan[]>;
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
                    $get(param?: { content?: pvestoragecontentlist, enabled?: boolean, format?: boolean, storage?: pvestorageid, target?: pvenode }): Promise<nodesStorageIndex[]>;
                    $(storage: string): {
                        /**
                         * 
                         * @allowtoken 1
                         * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                         */
                        $get(): Promise<nodesStorageDiridx[]>;
                        content: {
                            /**
                             * List storage content.
                             * GET /nodes/{node}/storage/{storage}/content
                             * @allowtoken 1
                             * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                             */
                            $get(param?: { content?: pvestoragecontent, vmid?: pvevmid }): Promise<nodesStorageContentIndex[]>;
                            /**
                             * Allocate disk images.
                             * POST /nodes/{node}/storage/{storage}/content
                             * @allowtoken 1
                             * @permissions {"check":["perm","/storage/{storage}",["Datastore.AllocateSpace"]]}
                             */
                            $post(param: { filename: string, format?: Tformat_1, size: Tsize_1, vmid: pvevmid }): Promise<string>;
                            $(volume: string): {
                                /**
                                 * Delete volume
                                 * DELETE /nodes/{node}/storage/{storage}/content/{volume}
                                 * @allowtoken 1
                                 * @permissions {"description":"You need 'Datastore.Allocate' privilege on the storage (or 'Datastore.AllocateSpace' for backup volumes if you have VM.Backup privilege on the VM).","user":"all"}
                                 */
                                $delete(param?: { delay?: integer1_30 }): Promise<string>;
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
                                $post(param: { target: string, target_node?: pvenode }): Promise<string>;
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
                            $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<nodesStorageRrdRrd>;
                        },
                        rrddata: {
                            /**
                             * Read storage RRD statistics.
                             * GET /nodes/{node}/storage/{storage}/rrddata
                             * @allowtoken 1
                             * @permissions {"check":["perm","/storage/{storage}",["Datastore.Audit","Datastore.AllocateSpace"],"any",1]}
                             */
                            $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<nodesStorageRrddataRrddata[]>;
                        },
                        upload: {
                            /**
                             * Upload templates and ISO images.
                             * POST /nodes/{node}/storage/{storage}/upload
                             * @allowtoken 1
                             * @permissions {"check":["perm","/storage/{storage}",["Datastore.AllocateTemplate"]]}
                             */
                            $post(param: { content: pvestoragecontent, filename: string, tmpfilename?: string }): Promise<string>;
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
                    $get(): Promise<nodesDisksIndex[]>;
                    lvm: {
                        /**
                         * List LVM Volume Groups
                         * GET /nodes/{node}/disks/lvm
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesDisksLvmIndex>;
                        /**
                         * Create an LVM Volume Group
                         * POST /nodes/{node}/disks/lvm
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                         */
                        $post(param: { add_storage?: boolean, device: string, name: pvestorageid }): Promise<string>;
                    },
                    lvmthin: {
                        /**
                         * List LVM thinpools
                         * GET /nodes/{node}/disks/lvmthin
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesDisksLvmthinIndex[]>;
                        /**
                         * Create an LVM thinpool
                         * POST /nodes/{node}/disks/lvmthin
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                         */
                        $post(param: { add_storage?: boolean, device: string, name: pvestorageid }): Promise<string>;
                    },
                    directory: {
                        /**
                         * PVE Managed Directory storages.
                         * GET /nodes/{node}/disks/directory
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesDisksDirectoryIndex[]>;
                        /**
                         * Create a Filesystem on an unused disk. Will be mounted under '/mnt/pve/NAME'.
                         * POST /nodes/{node}/disks/directory
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                         */
                        $post(param: { add_storage?: boolean, device: string, filesystem?: Tfilesystem, name: pvestorageid }): Promise<string>;
                    },
                    zfs: {
                        /**
                         * List Zpools.
                         * GET /nodes/{node}/disks/zfs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(): Promise<nodesDisksZfsIndex[]>;
                        /**
                         * Create a ZFS pool.
                         * POST /nodes/{node}/disks/zfs
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify","Datastore.Allocate"]]}
                         */
                        $post(param: { add_storage?: boolean, ashift?: integer9_16, compression?: Tcompression, devices: stringlist, name: pvestorageid, raidlevel: Traidlevel }): Promise<string>;
                        $(name: string): {
                            /**
                             * Get details about a zpool.
                             * GET /nodes/{node}/disks/zfs/{name}
                             * @allowtoken 1
                             * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                             */
                            $get(): Promise<nodesDisksZfsDetail>;
                        };
                    },
                    list: {
                        /**
                         * List local disks.
                         * GET /nodes/{node}/disks/list
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(param?: { skipsmart?: boolean, type?: Ttype_11 }): Promise<nodesDisksListList[]>;
                    },
                    smart: {
                        /**
                         * Get SMART Health of a disk.
                         * GET /nodes/{node}/disks/smart
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Audit","Datastore.Audit"],"any",1]}
                         */
                        $get(param: { disk: Tdisk_2, healthonly?: boolean }): Promise<nodesDisksSmartSmart>;
                    },
                    initgpt: {
                        /**
                         * Initialize Disk with GPT
                         * POST /nodes/{node}/disks/initgpt
                         * @allowtoken 1
                         * @permissions {"check":["perm","/",["Sys.Modify"]]}
                         */
                        $post(param: { disk: Tdisk_2, uuid?: Tuuid }): Promise<string>;
                    },
                },
                apt: {
                    /**
                     * Directory index for apt (Advanced Package Tool).
                     * GET /nodes/{node}/apt
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<nodesAptIndex[]>;
                    update: {
                        /**
                         * List available updates.
                         * GET /nodes/{node}/apt/update
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $get(): Promise<nodesAptUpdateListUpdates[]>;
                        /**
                         * This is used to resynchronize the package index files from their sources (apt-get update).
                         * POST /nodes/{node}/apt/update
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(param?: { notify?: boolean, quiet?: boolean }): Promise<string>;
                    },
                    changelog: {
                        /**
                         * Get package changelogs.
                         * GET /nodes/{node}/apt/changelog
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $get(param: { name: string, version?: string }): Promise<string>;
                    },
                    versions: {
                        /**
                         * Get package information for important Proxmox packages.
                         * GET /nodes/{node}/apt/versions
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                         */
                        $get(): Promise<nodesAptVersionsVersions[]>;
                    },
                },
                firewall: {
                    /**
                     * Directory index.
                     * GET /nodes/{node}/firewall
                     * @allowtoken 1
                     * @permissions {"user":"all"}
                     */
                    $get(): Promise<nodesFirewallIndex[]>;
                    rules: {
                        /**
                         * List rules.
                         * GET /nodes/{node}/firewall/rules
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                         */
                        $get(): Promise<nodesFirewallRulesGetRules[]>;
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
                            $get(): Promise<nodesFirewallRulesGetRule>;
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
                        $get(): Promise<nodesFirewallOptionsGetOptions>;
                        /**
                         * Set Firewall options.
                         * PUT /nodes/{node}/firewall/options
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $put(param?: { delete?: pveconfigidlist_1, digest?: String0_40, enable?: boolean, log_level_in?: Tlog, log_level_out?: Tlog, log_nf_conntrack?: boolean, ndp?: boolean, nf_conntrack_allow_invalid?: boolean, nf_conntrack_max?: integer_Min32768, nf_conntrack_tcp_timeout_established?: integer_Min7875, nf_conntrack_tcp_timeout_syn_recv?: integer30_60, nosmurfs?: boolean, protection_synflood?: boolean, protection_synflood_burst?: integer, protection_synflood_rate?: integer, smurf_log_level?: Tlog, tcp_flags_log_level?: Tlog, tcpflags?: boolean }): Promise<null>;
                    },
                    log: {
                        /**
                         * Read firewall log
                         * GET /nodes/{node}/firewall/log
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                         */
                        $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<nodesFirewallLogLog[]>;
                    },
                },
                replication: {
                    /**
                     * List status of all replication jobs on this node.
                     * GET /nodes/{node}/replication
                     * @allowtoken 1
                     * @permissions {"description":"Requires the VM.Audit permission on /vms/<vmid>.","user":"all"}
                     */
                    $get(param?: { guest?: pvevmid }): Promise<nodesReplicationStatus[]>;
                    $(id: string): {
                        /**
                         * Directory index.
                         * GET /nodes/{node}/replication/{id}
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<nodesReplicationIndex[]>;
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
                            $get(param?: { limit?: integer_Min0, start?: integer_Min0 }): Promise<nodesReplicationLogReadJobLog[]>;
                        },
                        schedule_now: {
                            /**
                             * Schedule replication job to start as soon as possible.
                             * POST /nodes/{node}/replication/{id}/schedule_now
                             * @allowtoken 1
                             * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
                             */
                            $post(): Promise<string>;
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
                    $get(): Promise<nodesCertificatesIndex[]>;
                    acme: {
                        /**
                         * ACME index.
                         * GET /nodes/{node}/certificates/acme
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<nodesCertificatesAcmeIndex[]>;
                        certificate: {
                            /**
                             * Revoke existing certificate from CA.
                             * DELETE /nodes/{node}/certificates/acme/certificate
                             * @allowtoken 1
                             * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                             */
                            $delete(): Promise<string>;
                            /**
                             * Order a new certificate from ACME-compatible CA.
                             * POST /nodes/{node}/certificates/acme/certificate
                             * @allowtoken 1
                             * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                             */
                            $post(param?: { force?: boolean }): Promise<string>;
                            /**
                             * Renew existing certificate from CA.
                             * PUT /nodes/{node}/certificates/acme/certificate
                             * @allowtoken 1
                             * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                             */
                            $put(param?: { force?: boolean }): Promise<string>;
                        },
                    },
                    info: {
                        /**
                         * Get information about node's certificates.
                         * GET /nodes/{node}/certificates/info
                         * @allowtoken 1
                         * @permissions {"user":"all"}
                         */
                        $get(): Promise<nodesCertificatesInfoInfo[]>;
                    },
                    custom: {
                        /**
                         * DELETE custom certificate chain and key.
                         * DELETE /nodes/{node}/certificates/custom
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $delete(param?: { restart?: boolean }): Promise<null>;
                        /**
                         * Upload or update custom certificate chain and key.
                         * POST /nodes/{node}/certificates/custom
                         * @allowtoken 1
                         * @permissions {"check":["perm","/nodes/{node}",["Sys.Modify"]]}
                         */
                        $post(param: { certificates: pemcertificatechain, force?: boolean, key?: pemstring, restart?: boolean }): Promise<nodesCertificatesCustomUploadCustomCert>;
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
                    $get(): Promise<nodesSdnSdnindex[]>;
                    zones: {
                        /**
                         * Get status for all zones.
                         * GET /nodes/{node}/sdn/zones
                         * @allowtoken 1
                         * @permissions {"description":"Only list entries where you have 'SDN.Audit'","user":"all"}
                         */
                        $get(): Promise<nodesSdnZonesIndex[]>;
                        $(zone: string): {
                            /**
                             * 
                             * @allowtoken 1
                             * @permissions {"check":["perm","/sdn/zones/{zone}",["SDN.Audit"],"any",1]}
                             */
                            $get(): Promise<nodesSdnZonesDiridx[]>;
                            content: {
                                /**
                                 * List zone content.
                                 * GET /nodes/{node}/sdn/zones/{zone}/content
                                 * @allowtoken 1
                                 * @permissions {"check":["perm","/sdn/zones/{zone}",["SDN.Audit"],"any",1]}
                                 */
                                $get(): Promise<nodesSdnZonesContentIndex[]>;
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
                    $get(): Promise<nodesVersionVersion>;
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
                    $get(): Promise<nodesNetstatNetstat[]>;
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
                    $post(): Promise<string>;
                },
                rrd: {
                    /**
                     * Read node RRD statistics (returns PNG)
                     * GET /nodes/{node}/rrd
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(param: { cf?: Tcf, ds: pveconfigidlist_1, timeframe: Ttimeframe }): Promise<nodesRrdRrd>;
                },
                rrddata: {
                    /**
                     * Read node RRD statistics
                     * GET /nodes/{node}/rrddata
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(param: { cf?: Tcf, timeframe: Ttimeframe }): Promise<nodesRrddataRrddata[]>;
                },
                syslog: {
                    /**
                     * Read system log
                     * GET /nodes/{node}/syslog
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Syslog"]]}
                     */
                    $get(param?: { limit?: integer_Min0, service?: String0_128, since?: Tsince, start?: integer_Min0, until?: Tsince }): Promise<nodesSyslogSyslog[]>;
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
                    $post(param?: { cmd?: Tcmd, height?: integer16_2160, upgrade?: boolean, websocket?: boolean, width?: integer16_4096 }): Promise<nodesVncshellVncshell>;
                },
                termproxy: {
                    /**
                     * Creates a VNC Shell proxy.
                     * POST /nodes/{node}/termproxy
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'"}
                     */
                    $post(param?: { cmd?: Tcmd, upgrade?: boolean }): Promise<nodesTermproxyTermproxy>;
                },
                vncwebsocket: {
                    /**
                     * Opens a weksocket for VNC traffic.
                     * GET /nodes/{node}/vncwebsocket
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'. You also need to pass a valid ticket (vncticket)."}
                     */
                    $get(param: { port: integer5900_5999, vncticket: String0_512 }): Promise<nodesVncwebsocketVncwebsocket>;
                },
                spiceshell: {
                    /**
                     * Creates a SPICE shell.
                     * POST /nodes/{node}/spiceshell
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Console"]],"description":"Restricted to users on realm 'pam'"}
                     */
                    $post(param?: { cmd?: Tcmd, proxy?: address, upgrade?: boolean }): Promise<nodesSpiceshellSpiceshell>;
                },
                dns: {
                    /**
                     * Read DNS settings.
                     * GET /nodes/{node}/dns
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<nodesDnsDns>;
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
                    $get(): Promise<nodesTimeTime>;
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
                    $get(): Promise<nodesAplinfoAplinfo[]>;
                    /**
                     * Download appliance templates.
                     * POST /nodes/{node}/aplinfo
                     * @allowtoken 1
                     * @permissions {"check":["perm","/storage/{storage}",["Datastore.AllocateTemplate"]]}
                     */
                    $post(param: { storage: pvestorageid, template: String0_255 }): Promise<string>;
                },
                report: {
                    /**
                     * Gather various systems information about a node
                     * GET /nodes/{node}/report
                     * @allowtoken 1
                     * @permissions {"check":["perm","/nodes/{node}",["Sys.Audit"]]}
                     */
                    $get(): Promise<string>;
                },
                startall: {
                    /**
                     * Start all VMs and containers located on this node (by default only those with onboot=1).
                     * POST /nodes/{node}/startall
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["VM.PowerMgmt"]]}
                     */
                    $post(param?: { force?: boolean, vms?: pvevmidlist }): Promise<string>;
                },
                stopall: {
                    /**
                     * Stop all VMs and Containers.
                     * POST /nodes/{node}/stopall
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["VM.PowerMgmt"]]}
                     */
                    $post(param?: { vms?: pvevmidlist }): Promise<string>;
                },
                migrateall: {
                    /**
                     * Migrate all VMs and Containers.
                     * POST /nodes/{node}/migrateall
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["VM.Migrate"]]}
                     */
                    $post(param: { maxworkers?: integer_Min1, target: pvenode, vms?: pvevmidlist, 'with-local-disks'?: boolean }): Promise<string>;
                },
                hosts: {
                    /**
                     * Get the content of /etc/hosts.
                     * GET /nodes/{node}/hosts
                     * @allowtoken 1
                     * @permissions {"check":["perm","/",["Sys.Audit"]]}
                     */
                    $get(): Promise<nodesHostsGetEtcHosts>;
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
            $get(param?: { type?: Ttype_14 }): Promise<storageIndex[]>;
            /**
             * Create a new storage.
             * POST /storage
             * @allowtoken 1
             * @permissions {"check":["perm","/storage",["Datastore.Allocate"]]}
             */
            $post(param: { authsupported?: string, base?: pvevolumeid, blocksize?: string, bwlimit?: Tbwlimit, comstar_hg?: string, comstar_tg?: string, content?: pvestoragecontentlist, datastore?: string, disable?: boolean, domain?: String0_256, 'encryption-key'?: string, export?: pvestoragepath, fingerprint?: Tfingerprint, format?: pvestorageformat, fuse?: boolean, is_mountpoint?: string, iscsiprovider?: string, krbd?: boolean, lio_tpg?: string, maxfiles?: integer_Min0, mkdir?: boolean, monhost?: pvestorageportaldnslist, mountpoint?: pvestoragepath, nodes?: pvenodelist, nowritecache?: boolean, options?: pvestorageoptions, password?: String0_256, path?: pvestoragepath, pool?: string, portal?: pvestorageportaldns, redundancy?: integer1_16, saferemove?: boolean, saferemove_throughput?: string, server?: pvestorageserver, server2?: pvestorageserver, share?: string, shared?: boolean, smbversion?: Tsmbversion, sparse?: boolean, storage: pvestorageid, subdir?: pvestoragepath, tagged_only?: boolean, target?: string, thinpool?: pvestoragevgname, transport?: Ttransport, type: Ttype_14, username?: string, vgname?: pvestoragevgname, volume?: string }): Promise<null>;
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
                $put(param?: { blocksize?: string, bwlimit?: Tbwlimit, comstar_hg?: string, comstar_tg?: string, content?: pvestoragecontentlist, delete?: pveconfigidlist, digest?: String0_40, disable?: boolean, domain?: String0_256, 'encryption-key'?: string, fingerprint?: Tfingerprint, format?: pvestorageformat, fuse?: boolean, is_mountpoint?: string, krbd?: boolean, lio_tpg?: string, maxfiles?: integer_Min0, mkdir?: boolean, monhost?: pvestorageportaldnslist, mountpoint?: pvestoragepath, nodes?: pvenodelist, nowritecache?: boolean, options?: pvestorageoptions, password?: String0_256, pool?: string, redundancy?: integer1_16, saferemove?: boolean, saferemove_throughput?: string, server?: pvestorageserver, server2?: pvestorageserver, shared?: boolean, smbversion?: Tsmbversion, sparse?: boolean, subdir?: pvestoragepath, tagged_only?: boolean, transport?: Ttransport, username?: string }): Promise<null>;
            };
        },
        access: {
            /**
             * Directory index.
             * GET /access
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<accessIndex[]>;
            users: {
                /**
                 * User index.
                 * GET /access/users
                 * @allowtoken 1
                 * @permissions {"description":"The returned list is restricted to users where you have 'User.Modify' or 'Sys.Audit' permissions on '/access/groups' or on a group the user belongs too. But it always includes the current (authenticated) user.","user":"all"}
                 */
                $get(param?: { enabled?: boolean, full?: boolean }): Promise<accessUsersIndex[]>;
                /**
                 * Create new user.
                 * POST /access/users
                 * @allowtoken 1
                 * @permissions {"check":["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"],"groups_param",1]],"description":"You need 'Realm.AllocateUser' on '/access/realm/<realm>' on the realm of user <userid>, and 'User.Modify' permissions to '/access/groups/<group>' for any group specified (or 'User.Modify' on '/access/groups' if you pass no groups."}
                 */
                $post(param: { comment?: string, email?: emailopt, enable?: boolean, expire?: integer_Min0, firstname?: string, groups?: pvegroupidlist, keys?: string, lastname?: string, password?: String5_64, userid: pveuserid }): Promise<null>;
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
                    $get(): Promise<accessUsersReadUser>;
                    /**
                     * Update user configuration.
                     * PUT /access/users/{userid}
                     * @allowtoken 1
                     * @permissions {"check":["userid-group",["User.Modify"],"groups_param",1]}
                     */
                    $put(param?: { append?: boolean, comment?: string, email?: emailopt, enable?: boolean, expire?: integer_Min0, firstname?: string, groups?: pvegroupidlist, keys?: string, lastname?: string }): Promise<null>;
                    tfa: {
                        /**
                         * Get user TFA types (Personal and Realm).
                         * GET /access/users/{userid}/tfa
                         * @allowtoken 1
                         * @permissions {"check":["or",["userid-param","self"],["userid-group",["User.Modify","Sys.Audit"]]]}
                         */
                        $get(): Promise<accessUsersTfaReadUserTfaType>;
                    },
                    token: {
                        /**
                         * Get user API tokens.
                         * GET /access/users/{userid}/token
                         * @allowtoken 1
                         * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                         */
                        $get(): Promise<accessUsersTokenTokenIndex[]>;
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
                            $get(): Promise<accessUsersTokenReadToken>;
                            /**
                             * Generate a new API token for a specific user. NOTE: returns API token value, which needs to be stored as it cannot be retrieved afterwards!
                             * POST /access/users/{userid}/token/{tokenid}
                             * @allowtoken 1
                             * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                             */
                            $post(param?: { comment?: string, expire?: integer_Min0, privsep?: boolean }): Promise<accessUsersTokenGenerateToken>;
                            /**
                             * Update API token for a specific user.
                             * PUT /access/users/{userid}/token/{tokenid}
                             * @allowtoken 1
                             * @permissions {"check":["or",["userid-param","self"],["perm","/access/users/{userid}",["User.Modify"]]]}
                             */
                            $put(param?: { comment?: string, expire?: integer_Min0, privsep?: boolean }): Promise<accessUsersTokenUpdateTokenInfo>;
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
                $get(): Promise<accessGroupsIndex[]>;
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
                    $get(): Promise<accessGroupsReadGroup>;
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
                $get(): Promise<accessRolesIndex[]>;
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
                    $get(): Promise<accessRolesReadRole>;
                    /**
                     * Update an existing role.
                     * PUT /access/roles/{roleid}
                     * @allowtoken 1
                     * @permissions {"check":["perm","/access",["Sys.Modify"]]}
                     */
                    $put(param?: { append?: boolean, privs?: pveprivlist }): Promise<null>;
                };
            },
            acl: {
                /**
                 * Get Access Control List (ACLs).
                 * GET /access/acl
                 * @allowtoken 1
                 * @permissions {"description":"The returned list is restricted to objects where you have rights to modify permissions.","user":"all"}
                 */
                $get(): Promise<accessAclReadAcl[]>;
                /**
                 * Update Access Control List (add or remove permissions).
                 * PUT /access/acl
                 * @allowtoken 1
                 * @permissions {"check":["perm-modify","{path}"]}
                 */
                $put(param: { delete?: boolean, groups?: pvegroupidlist, path: string, propagate?: boolean, roles: pveroleidlist, tokens?: pvetokenidlist, users?: pveuseridlist }): Promise<null>;
            },
            domains: {
                /**
                 * Authentication domain index.
                 * GET /access/domains
                 * @allowtoken 1
                 * @permissions {"description":"Anyone can access that, because we need that list for the login box (before the user is authenticated).","user":"world"}
                 */
                $get(): Promise<accessDomainsIndex[]>;
                /**
                 * Add an authentication server.
                 * POST /access/domains
                 * @allowtoken 1
                 * @permissions {"check":["perm","/access/realm",["Realm.Allocate"]]}
                 */
                $post(param: { base_dn?: Tbase_dn, bind_dn?: Tbase_dn, capath?: string, cert?: string, certkey?: string, comment?: String0_4096, default?: boolean, domain?: Tdomain, filter?: String0_2048, group_classes?: ldapsimpleattrlist, group_dn?: Tbase_dn, group_filter?: String0_2048, group_name_attr?: ldapsimpleattr, mode?: Tmode_1, password?: string, port?: integer1_65535, realm: pverealm, secure?: boolean, server1?: address_1, server2?: address_1, sslversion?: Tsslversion, 'sync-defaults-options'?: realmsyncoptions, sync_attributes?: Tsync_attributes, tfa?: pvetfaconfig, type: Ttype_15, user_attr?: Tuser_attr, user_classes?: ldapsimpleattrlist, verify?: boolean }): Promise<null>;
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
                    $put(param?: { base_dn?: Tbase_dn, bind_dn?: Tbase_dn, capath?: string, cert?: string, certkey?: string, comment?: String0_4096, default?: boolean, delete?: pveconfigidlist, digest?: String0_40, domain?: Tdomain, filter?: String0_2048, group_classes?: ldapsimpleattrlist, group_dn?: Tbase_dn, group_filter?: String0_2048, group_name_attr?: ldapsimpleattr, mode?: Tmode_1, password?: string, port?: integer1_65535, secure?: boolean, server1?: address_1, server2?: address_1, sslversion?: Tsslversion, 'sync-defaults-options'?: realmsyncoptions, sync_attributes?: Tsync_attributes, tfa?: pvetfaconfig, user_attr?: Tuser_attr, user_classes?: ldapsimpleattrlist, verify?: boolean }): Promise<null>;
                    sync: {
                        /**
                         * Syncs users and/or groups from the configured LDAP to user.cfg. NOTE: Synced groups will have the name 'name-$realm', so make sure those groups do not exist to prevent overwriting.
                         * POST /access/domains/{realm}/sync
                         * @allowtoken 1
                         * @permissions {"check":["and",["userid-param","Realm.AllocateUser"],["userid-group",["User.Modify"]]],"description":"'Realm.AllocateUser' on '/access/realm/<realm>' and  'User.Modify' permissions to '/access/groups/'."}
                         */
                        $post(param?: { 'dry-run'?: boolean, 'enable-new'?: boolean, full?: boolean, purge?: boolean, scope?: Tscope_1 }): Promise<string>;
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
                $post(param: { otp?: string, password: string, path?: String0_64, privs?: pveprivlist_1, realm?: pverealm, username: String0_64 }): Promise<accessTicketCreateTicket>;
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
                $post(param: { response: string }): Promise<accessTfaVerifyTfa>;
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
            $get(): Promise<poolsIndex[]>;
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
                $get(): Promise<poolsReadPool>;
                /**
                 * Update pool data.
                 * PUT /pools/{poolid}
                 * @allowtoken 1
                 * @permissions {"check":["perm","/pool/{poolid}",["Pool.Allocate"]],"description":"You also need the right to modify permissions on any object you add/delete."}
                 */
                $put(param?: { comment?: string, delete?: boolean, storage?: pvestorageidlist, vms?: pvevmidlist }): Promise<null>;
            };
        },
        version: {
            /**
             * API version details. The result also includes the global datacenter confguration.
             * GET /version
             * @allowtoken 1
             * @permissions {"user":"all"}
             */
            $get(): Promise<versionVersion>;
        },
    }
}
export default Proxmox;
