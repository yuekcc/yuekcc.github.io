# OpenWrt 安装流水账

> 2025-05-04，升级 OpenWrt 24.10，同步更新内容。

**回忆版**

OpenWrt 是一个用于路由器的 Linux 发行版，官方已经适配相当多的路由器硬件，也支持 x86 平台。OpenWrt 是一个资源占用少，功能很明确的操作系统。自带一个不错的 Web 管理界面。对于我的 矿渣 NAS 机来说应该正好适合。

## 冷备份需求

我并不需要 NAS 24 小时在线，主要是偶尔开机保存一下手机中的数据，主要就是照片、视频这些。数码时代，备份数据硬需求。

## NAS 方案

冷备份最省成本的应该是使用外置硬盘。一个硬盘盒子 100rmb 就能到手。只是四个硬盘的硬盘盒就是好几倍的价钱了。再就是原厂 NAS 机器，最省事，功能最好，投入也最高。我最初的想法是自组机器，在海鲜市场翻一下，应该几百 rmb 能到手。后来找到就是矿渣机器。估计是 IFS 磞盘之后，流出来的机器。

回顾一下矿渣机器的硬件情况：赛杨 4 核 CPU、4G 内存、4 个 3.5 寸的硬盘位，内置一块 16GB SSD 用于系统。系统也可以安装在其他 4 个硬盘中。比较良心的是支持 EFI 引导（说明不是十分旧的方案）。x86 的 cpu 性能比树莓派上 a53 强太多了。传数据、网上也占 cpu。机器可以是旧的，但硬盘推荐使用新的。

之前我直接在机器上安装 [PuppyLinux][puppylinux-home]。PuppyLinux 属于 Live cd 性质的 Linux 裁减版本。安装比较容易。当时的考虑是系统安装在内置的 SSD 中，尽可能找一个小巧不需要配置的发行版。不过 PuppyLinux 是以桌面系统为目标的裁减版本，对于我的场景来说并不是太适合。关键一点就是 PuppyLinux 不能“摸黑”操作。所以才有了这篇文章。

虽然有 4 个硬盘位置，我只用两个 1TB 的硬盘作为核心存储，有一个 500G 放杂物。没有组 RAID，因为 RAID 挂了的话，恢复绝对是一个技术活。用 rsync 实现两个 1TB 硬盘数据同步。共享数据通过 Samba 完成，理论上可以支持 Windows、macOS。

**冷备份数据，多硬盘独立储存，选择自己熟悉技术，减少风险**。

[puppylinux-home]: https://puppylinux.com/

## 下载

推荐在官网 [https://openwrt.org/][openwrt-home] 下载镜像。国内可以在[清华的镜像][openwrt-mirror]下载。我使用的是当前的最新版本 [OpenWrt 21.02.1 的 EFI 镜像][openwrt-efi-img]

[openwrt-home]: https://openwrt.org/
[openwrt-mirror]: https://mirrors.tuna.tsinghua.edu.cn/openwrt/
[openwrt-efi-img]: https://mirrors.tuna.tsinghua.edu.cn/openwrt/releases/21.02.1/targets/x86/64/openwrt-21.02.1-x86-64-generic-ext4-combined-efi.img.gz

另准备一个 U 盘，下载 Puppy Linux 用于刷机。OpenWrt 是面向嵌入式的环境，需要上位机来安装、更新系统。Puppy Linux 选择最近的版本。

[puppy-linux-download]: https://puppylinux.com/index.html#download

windows 可以使用 [Refus](https://rufus.ie/zh/) 安装 Puppy Linux 到 U 盘。

## 安装过程

官网上有教程：[https://openwrt.org/docs/guide-user/installation/openwrt_x86](https://openwrt.org/docs/guide-user/installation/openwrt_x86)

将 NAS 从安装有 Puppy Linux 的 U 盘启动，开始安装 OpenWrt。

### 关键步骤

```sh
$ gunzip openwrt-*.img.gz
$ lsblk # 查看已有的块设备，注意不要刷错硬盘
$ dd if=openwrt-21.02.0-x86-64-generic-ext4-combined.img bs=1M of=/dev/sdX # 在我的机器上是 /dev/sdb
```

`dd` 命令结束后，OpenWrt 就可以使用了。

按照官网上的说明，OpenWrt 的镜像默认为两个分区，只使用了 128MB 硬盘空间。如果需要使用硬盘的全部空间，需要手工扩容。

### Root 扩容

GParted 是 Puppy Linux 自带的分区操作软件。图形化操作更省事。

在 GParted 中打开 `/dev/sdb`，可以看到 /dev/sdb1 和 /dev/sdb2。扩容操作如下：

1. 选中 /dev/sdb2，右键选择 unmounted
2. 选中 /dev/sdb2，右键选择 resize
3. 在弹出的窗口中，上部分有一个控制条，拉到最右，使用全部可用的空间。
4. 保存 -> 应用

因为是 Live Linux 中进行操作的，扩容暂时没有发现文件丢失。

**重要** 扩容完成后需要更新 /dev/sdb1/boot/grub/grub.cfg 的中关于 ROOT PARTUUID 设置。

> 使用最新 BookwormPup64 10.0.10，扩容后 UUID 没有变化，不过最好还是检查一下。

1. 查看新的 UUID：`lsblk -n -o PARTUUID /dev/sdb2`
2. 编辑 `/dev/sdb1/boot/grub/grub.cfg` 将启动菜单中的 `root=PARTUUID=xxxx-xx-xxx-xxx-xxx` 替换为新的 PARTUUID。

扩容完成，重启机器进入 OpenWrt 环境。

## 系统设置

### 设置 root 密码

启动后，默认就会使用 root 账号登录系统，无密码。

```sh
$ passwd
```

按提示设置新密码。

### 设置网络

我 OpenWrt 只是用于提供文件共享服务，因此 OpenWrt 是放置到网络的路由器之下。需要设置 WAN 口为 DHCP 模式。我的机器只有一张网卡，因此被默认设置了 LAN 口。需要手工设置 WAN 口。

编辑 `/etc/config/network`，增加下面内容，并删除 `config interface 'lan'` 相关的内容：

```
config interface 'wan'
  option device 'eth0'
  option proto 'dhcp'
```

执行 `service network reload` 重启网络。

### 设置防火墙

从路由器的角度来看，WAN 口属于外部网络，自有防火墙配置大多是 REJECT 外部入口流量。所以需要修改防火墙配置。

编辑 `/etc/config/firewall`，找到 `config zone` 中 `option name wan` 的配置，将 `option input`、`option output`、`option forward` 都设置为 `ACCEPT`。

执行 `service firewall reload` 重启防火墙。

防火墙配置好后，可以使用 SSH 登录机器。可以使用 `ip addr` 查看机器的 IP 地址。

### 设置镜像

按照清华源的[说明][setup-openwrt-mirror]，执行：

```sh
sed -i 's_downloads.openwrt.org_mirrors.tuna.tsinghua.edu.cn/openwrt_' /etc/opkg/distfeeds.conf
```

[setup-openwrt-mirror]: https://mirrors.tuna.tsinghua.edu.cn/help/openwrt/

然后再执行：

```sh
opkg update
```

### 安装软件

1. samba4

```sh
opkg install samba4-server luci-app-samba4
```

2. xfs 工具

```sh
opkg install xfs-admin xfs-fsck xfs-growfs xfs-mkfs kmod-fs-xfs
```

我的数据盘全部使用 XFS 文件格式。如果选择其他文件格式，要安装其他工具。关于 XFS、Btrfs、EXT4 之间对比可以看这篇文章 [https://zhuanlan.zhihu.com/p/348360152][https://zhuanlan.zhihu.com/p/348360152]。

3. USB 工具

需要使用 U 盘，需要先安装相应的工具。

```sh
opkg install block-mount blockd kmod-fs-autofs4 lsblk fdisk kmod-usb-storage kmod-usb-storage-uas
```

4. 其他工具

```sh
opkg install rsync vim-full vim-runtime
```

### 软件设置

软件设置就可以直接在 Luci 中进行。

#### 1. 挂载硬盘

**OpenWrt 24.10 似乎会自动挂载了，不需要手工挂载硬盘**

菜单 -> System -> Mount Points

将相应的硬盘，然后 "Save & Apply"

#### 2. 创建普通用户

Samba 服务需要一个普通用户（需要 UID >= 1000）。先安装 useradd 相关的工具：

```sh
opkg install shadow
```

然后创建一个普通用户 xyz：

```sh
useradd -s /bin/sh xyz # 也可以将 shell 设置为 /bin/false
passwd xyz
```

将用户 xyz 加入到 smb 用户列表：

```sh
smbpasswd -a xyz
# 然后按提示设置一个密码，可以和用户的密码不同的
```

#### 3. 设置 Samba

菜单 -> Services -> Network Shares

在全局配置中。Interface 选择 wan。勾上：Enable extra Tuning。其余为默认。

在 Shared Directories 增加相应的映射：

- `Name` 设置为共享的名称（会展示在 Windows 上）
- `Path` 填写具体的目录，比如 `/mnt/sda1`
- `Allowed users` 填写刚才创建的 `xyz`
- 勾中 `Browseable`
- `Create mask` 为默认的 0666
- `Directory mask` 为默认为 0777

**重要** 最好将 xyz 设置为共享目录的 Owner，否则会经常出现无权限。通过 `chown -R xyz:xyz /mnt/sda1` 修改 owner。如果文件权限不是 777，也可以手工设置一下：`chmod -R 777 /mnt/sda1`。

还需要修改 template 以支持 windows 链接到 Samba 服务：

```ini
# 修改这些项目
map to guest = never
local master = yes
preferred master = yes
```

其他为默认。

最后 Save & Apply。重新启动 Samba 服务。

> 设置完成后，如果 Windows 访问 `\\<ip>` 提示无网络名（实际是无权限），重启 Windows 系统再试试。
> 其他 SMB 客户端也可以通过 `\\<ip>` 访问，需要填写用户名（xyz）和密码。Windows 系统如果在访问 `\\<ip>` 没有弹出登录窗口，可以在 Windows 凭据手工添加认证。

---

- 2025 年 05 月 04 日，增加 Samba 普通用户设置的内容
- 2022 年 02 月 13 日 更新
