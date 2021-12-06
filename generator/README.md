# api client generator

to submit change to the main proxmox:

##  api-viewer present here:

git clone https://git.proxmox.com/git/pve-docs.git
in api-viewer/apidata.js

git clone https://git.proxmox.com/git/pve-manager.git
pve-manager/PVE/API2/ReplicationConfig.pm
pve-manager/PVE/API2/Ceph/MDS.pm

for https://git.proxmox.com/

```javascript
T=$$('a.list').map(A=>A.text).filter(A => A.endsWith('.git'))
T.map(A=>`git clone https://git.proxmox.com/git/${A}`).join('\n')
```
grep -r 'Mark replication job for removal' pve*

## API doc fixs:

replace "minimum": "0" by  "minimum": 0
replace "optional": "1" by  "optional": 1
add missing "type": "string" in parameter without "type" field

## project
git clone https://git.proxmox.com/git/aab.git
git clone https://git.proxmox.com/git/arch-pacman.git
git clone https://git.proxmox.com/git/ceph.git
git clone https://git.proxmox.com/git/corosync-pve.git
git clone https://git.proxmox.com/git/corosync-qdevice.git
git clone https://git.proxmox.com/git/criu.git
git clone https://git.proxmox.com/git/dab-pve-appliances.git
git clone https://git.proxmox.com/git/dab.git
git clone https://git.proxmox.com/git/extjs.git
git clone https://git.proxmox.com/git/fence-agents-pve.git
git clone https://git.proxmox.com/git/framework7.git
git clone https://git.proxmox.com/git/frr.git
git clone https://git.proxmox.com/git/ifupdown2.git
git clone https://git.proxmox.com/git/iproute2.git
git clone https://git.proxmox.com/git/kronosnet.git
git clone https://git.proxmox.com/git/ksm-control-daemon.git
git clone https://git.proxmox.com/git/libanyevent-http-perl.git
git clone https://git.proxmox.com/git/libarchive-perl.git
git clone https://git.proxmox.com/git/libgtk3-webkit-perl.git
git clone https://git.proxmox.com/git/libhttp-daemon-perl.git
git clone https://git.proxmox.com/git/libiscsi.git
git clone https://git.proxmox.com/git/libpve-u2f-server-perl.git
git clone https://git.proxmox.com/git/libqb.git
git clone https://git.proxmox.com/git/librados2-perl.git
git clone https://git.proxmox.com/git/libxdgmime-perl.git
git clone https://git.proxmox.com/git/lvm.git
git clone https://git.proxmox.com/git/lxc.git
git clone https://git.proxmox.com/git/lxcfs.git
git clone https://git.proxmox.com/git/novnc-pve.git
git clone https://git.proxmox.com/git/openvswitch.git
git clone https://git.proxmox.com/git/pmg-api.git
git clone https://git.proxmox.com/git/pmg-docs.git
git clone https://git.proxmox.com/git/pmg-gui.git
git clone https://git.proxmox.com/git/pmg-log-tracker.git
git clone https://git.proxmox.com/git/proxmox-acme.git
git clone https://git.proxmox.com/git/proxmox-archive-keyring.git
git clone https://git.proxmox.com/git/proxmox-i18n.git
git clone https://git.proxmox.com/git/proxmox-mailgateway.git
git clone https://git.proxmox.com/git/proxmox-mini-journalreader.git
git clone https://git.proxmox.com/git/proxmox-spamassassin.git
git clone https://git.proxmox.com/git/proxmox-ve.git
git clone https://git.proxmox.com/git/proxmox-widget-toolkit.git
git clone https://git.proxmox.com/git/pve-access-control.git
git clone https://git.proxmox.com/git/pve-apiclient.git
git clone https://git.proxmox.com/git/pve-client.git
git clone https://git.proxmox.com/git/pve-cluster.git
git clone https://git.proxmox.com/git/pve-common.git
git clone https://git.proxmox.com/git/pve-container.git
git clone https://git.proxmox.com/git/pve-docs.git
git clone https://git.proxmox.com/git/pve-edk2-firmware.git
git clone https://git.proxmox.com/git/pve-eslint.git
git clone https://git.proxmox.com/git/pve-firewall.git
git clone https://git.proxmox.com/git/pve-firmware.git
git clone https://git.proxmox.com/git/pve-guest-common.git
git clone https://git.proxmox.com/git/pve-ha-manager.git
git clone https://git.proxmox.com/git/pve-http-server.git
git clone https://git.proxmox.com/git/pve-installer.git
git clone https://git.proxmox.com/git/pve-jslint.git
git clone https://git.proxmox.com/git/pve-kernel-meta.git
git clone https://git.proxmox.com/git/pve-kernel.git
git clone https://git.proxmox.com/git/pve-libseccomp2.4-dev.git
git clone https://git.proxmox.com/git/pve-libspice-server.git
git clone https://git.proxmox.com/git/pve-lxc-syscalld.git
git clone https://git.proxmox.com/git/pve-manager.git
git clone https://git.proxmox.com/git/pve-network.git
git clone https://git.proxmox.com/git/pve-omping.git
git clone https://git.proxmox.com/git/pve-qemu.git
git clone https://git.proxmox.com/git/pve-spice-protocol.git
git clone https://git.proxmox.com/git/pve-storage.git
git clone https://git.proxmox.com/git/pve-xtermjs.git
git clone https://git.proxmox.com/git/pve-zsync.git
git clone https://git.proxmox.com/git/qemu-defaults.git
git clone https://git.proxmox.com/git/qemu-server.git
git clone https://git.proxmox.com/git/qemu.git
git clone https://git.proxmox.com/git/smartmontools.git
git clone https://git.proxmox.com/git/spiceterm.git
git clone https://git.proxmox.com/git/tar.git
git clone https://git.proxmox.com/git/vncterm.git
git clone https://git.proxmox.com/git/zfs-grub.git
git clone https://git.proxmox.com/git/zfsonlinux.git

## rust
git clone https://git.proxmox.com/git/cargo.git
git clone https://git.proxmox.com/git/debcargo-conf.git
git clone https://git.proxmox.com/git/dh-cargo.git
git clone https://git.proxmox.com/git/llvm-toolchain.git
git clone https://git.proxmox.com/git/pathpatterns.git
git clone https://git.proxmox.com/git/perlmod.git
git clone https://git.proxmox.com/git/proxmox-backup-meta.git
git clone https://git.proxmox.com/git/proxmox-backup-qemu.git
git clone https://git.proxmox.com/git/proxmox-backup.git
git clone https://git.proxmox.com/git/proxmox-fuse.git
git clone https://git.proxmox.com/git/proxmox.git
git clone https://git.proxmox.com/git/pxar.git
git clone https://git.proxmox.com/git/rustc.git
git clone https://git.proxmox.com/git/wasi-libc.git

## mirror
git clone https://git.proxmox.com/git/mirror_acme.sh.git
git clone https://git.proxmox.com/git/mirror_corosync-qdevice.git
git clone https://git.proxmox.com/git/mirror_corosync.git
git clone https://git.proxmox.com/git/mirror_dvb-firmware.git
git clone https://git.proxmox.com/git/mirror_edk2.git
git clone https://git.proxmox.com/git/mirror_frr.git
git clone https://git.proxmox.com/git/mirror_ifupdown2.git
git clone https://git.proxmox.com/git/mirror_iproute2.git
git clone https://git.proxmox.com/git/mirror_kronosnet.git
git clone https://git.proxmox.com/git/mirror_libseccomp.git
git clone https://git.proxmox.com/git/mirror_linux-firmware.git
git clone https://git.proxmox.com/git/mirror_lxc.git
git clone https://git.proxmox.com/git/mirror_lxcfs.git
git clone https://git.proxmox.com/git/mirror_novnc.git
git clone https://git.proxmox.com/git/mirror_qemu.git
git clone https://git.proxmox.com/git/mirror_smartmontools-debian.git
git clone https://git.proxmox.com/git/mirror_spl-debian.git
git clone https://git.proxmox.com/git/mirror_spl.git
git clone https://git.proxmox.com/git/mirror_ubuntu-artful-kernel.git
git clone https://git.proxmox.com/git/mirror_ubuntu-bionic-kernel.git
git clone https://git.proxmox.com/git/mirror_ubuntu-disco-kernel.git
git clone https://git.proxmox.com/git/mirror_ubuntu-eoan-kernel.git
git clone https://git.proxmox.com/git/mirror_ubuntu-focal-kernel.git
git clone https://git.proxmox.com/git/mirror_ubuntu-zesty-kernel.git
git clone https://git.proxmox.com/git/mirror_xterm.js.git
git clone https://git.proxmox.com/git/mirror_zfs-debian.git
git clone https://git.proxmox.com/git/mirror_zfs.git

## legacy
git clone https://git.proxmox.com/git/apt.git
git clone https://git.proxmox.com/git/cgmanager.git
git clone https://git.proxmox.com/git/dlm.git
git clone https://git.proxmox.com/git/drbd-utils.git
git clone https://git.proxmox.com/git/gfs2-utils.git
git clone https://git.proxmox.com/git/glusterfs.git
git clone https://git.proxmox.com/git/libnet-http-perl.git
git clone https://git.proxmox.com/git/libusb.git
git clone https://git.proxmox.com/git/openais-pve.git
git clone https://git.proxmox.com/git/parted.git
git clone https://git.proxmox.com/git/pve-kernel-2.6.32.git
git clone https://git.proxmox.com/git/pve-kernel-3.10.0.git
git clone https://git.proxmox.com/git/pve-kernel-jessie.git
git clone https://git.proxmox.com/git/pve-qemu-kvm.git
git clone https://git.proxmox.com/git/pve-sheepdog.git
git clone https://git.proxmox.com/git/pve2-api-doc.git
git clone https://git.proxmox.com/git/redhat-cluster-pve.git
git clone https://git.proxmox.com/git/resource-agents-pve.git
git clone https://git.proxmox.com/git/usb-redir.git
git clone https://git.proxmox.com/git/vzctl.git
git clone https://git.proxmox.com/git/vzquota.git"