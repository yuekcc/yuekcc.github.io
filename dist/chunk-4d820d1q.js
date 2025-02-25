import{e,h as n}from"/dist/chunk-scq2q67j.js";function o(){return n("div",{class:"markdown-body",children:n(e,{children:[n("h1",{children:"OpenWrt 安装流水账"},void 0,!1,void 0,this),`
`,n("p",{children:n("strong",{children:"回忆版"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"OpenWrt 是一个用于路由器的 Linux 发行版，官方已经适配相当多的路由器硬件，也支持 x86 平台。OpenWrt 是一个资源占用少，功能很明确的操作系统。自带一个不错的 Web 管理界面。对于我的 矿渣 NAS 机来说应该正好适合。"},void 0,!1,void 0,this),`
`,n("h2",{children:"冷备份需求"},void 0,!1,void 0,this),`
`,n("p",{children:"我并不需要 NAS 24 小时在线，主要是偶尔开机保存一下手机中的数据，主要就是照片、视频这些。数码时代，备份数据硬需求。"},void 0,!1,void 0,this),`
`,n("h2",{children:"NAS 方案"},void 0,!1,void 0,this),`
`,n("p",{children:"冷备份最省成本的应该是使用外置硬盘。一个硬盘盒子 100rmb 就能到手。只是四个硬盘的硬盘盒就是好几倍的价钱了。再就是原厂 NAS 机器，最省事，功能最好，投入也最高。我最初的想法是自组机器，在海鲜市场翻一下，应该几百 rmb 能到手。后来找到就是矿渣机器。估计是 IFS 磞盘之后，流出来的机器。"},void 0,!1,void 0,this),`
`,n("p",{children:"回顾一下矿渣机器的硬件情况：赛杨 4 核 CPU、4G 内存、4 个 3.5 寸的硬盘位，内置一块 16GB SSD 用于系统。系统也可以安装在其他 4 个硬盘中。比较良心的是支持 EFI 引导（说明不是十分旧的方案）。x86 的 cpu 性能比树莓派上 a53 强太多了。传数据、网上也占 cpu。机器可以是旧的，但硬盘推荐使用新的。"},void 0,!1,void 0,this),`
`,n("p",{children:["之前我直接在机器上安装 ",n("a",{href:"https://puppylinux.com/",children:"PuppyLinux"},void 0,!1,void 0,this),"。PuppyLinux 属于 Live cd 性质的 Linux 裁减版本。安装比较容易。当时的考虑是系统安装在内置的 SSD 中，尽可能找一个小巧不需要配置的发行版。不过 PuppyLinux 是以桌面系统为目标的裁减版本，对于我的场景来说并不是太适合。关键一点就是 PuppyLinux 不能“摸黑”操作。所以才有了这篇文章。"]},void 0,!0,void 0,this),`
`,n("p",{children:"虽然有 4 个硬盘位置，我只用两个 1TB 的硬盘作为核心存储，有一个 500G 放杂物。没有组 RAID，因为 RAID 挂了的话，恢复绝对是一个技术活。用 rsync 实现两个 1TB 硬盘数据同步。共享数据通过 Samba 完成，理论上可以支持 Windows、macOS。"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"冷备份数据，多硬盘独立储存，选择自己熟悉技术，减少风险"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"下载"},void 0,!1,void 0,this),`
`,n("p",{children:["推荐在官网 ",n("a",{href:"https://openwrt.org/",children:"https://openwrt.org/"},void 0,!1,void 0,this)," 下载镜像。国内可以在",n("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/openwrt/",children:"清华的镜像"},void 0,!1,void 0,this),"下载。我使用的是当前的最新版本 ",n("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/openwrt/releases/21.02.1/targets/x86/64/openwrt-21.02.1-x86-64-generic-ext4-combined-efi.img.gz",children:"OpenWrt 21.02.1 的 EFI 镜像"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"另准备一个 U 盘，下载 Puppy Linux 用于刷机。OpenWrt 是面向嵌入式的环境，需要上位机来安装、更新系统。Puppy Linux 选择最近的版本。"},void 0,!1,void 0,this),`
`,n("p",{children:["windows 可以使用 ",n("a",{href:"https://rufus.ie/zh/",children:"Refus"},void 0,!1,void 0,this)," 安装 Puppy Linux 到 U 盘。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"安装过程"},void 0,!1,void 0,this),`
`,n("p",{children:["官网上有教程：",n("a",{href:"https://openwrt.org/docs/guide-user/installation/openwrt_x86",children:"https://openwrt.org/docs/guide-user/installation/openwrt_x86"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"将 NAS 从安装有 Puppy Linux 的 U 盘启动，开始安装 OpenWrt。"},void 0,!1,void 0,this),`
`,n("h3",{children:"关键步骤"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" gunzip"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" openwrt-"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:".img.gz"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" lsblk"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" # 查看已有的块设备，注意不要刷错硬盘"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" dd"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" if=openwrt-21.02.0-x86-64-generic-ext4-combined.img"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" bs=1M"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" of=/dev/sdX"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" # 在我的机器上是 /dev/sdb"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:[n("code",{children:"dd"},void 0,!1,void 0,this)," 命令结束后，OpenWrt 就可以使用了。"]},void 0,!0,void 0,this),`
`,n("p",{children:"按照官网上的说明，OpenWrt 的镜像默认为两个分区，只使用了 128MB 硬盘空间。如果需要使用硬盘的全部空间，需要手工扩容。"},void 0,!1,void 0,this),`
`,n("h3",{children:"Root 扩容"},void 0,!1,void 0,this),`
`,n("p",{children:"GParted 是 Puppy Linux 自带的分区操作软件。图形化操作更省事。"},void 0,!1,void 0,this),`
`,n("p",{children:["在 GParted 中打开 ",n("code",{children:"/dev/sdb"},void 0,!1,void 0,this),"，可以看到 /dev/sdb1 和 /dev/sdb2。扩容操作如下："]},void 0,!0,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"选中 /dev/sdb2，右键选择 unmounted"},void 0,!1,void 0,this),`
`,n("li",{children:"选中 /dev/sdb2，右键选择 resize"},void 0,!1,void 0,this),`
`,n("li",{children:"在弹出的窗口中，上部分有一个控制条，拉到最右，使用全部可用的空间。"},void 0,!1,void 0,this),`
`,n("li",{children:"保存 -> 应用"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"因为是 Live Linux 中进行操作的，扩容暂时没有发现文件丢失。"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"重要"},void 0,!1,void 0,this)," 扩容完成后需要更新 /dev/sdb1/boot/grub/grub.cfg 的中关于 ROOT PARTUUID 设置。"]},void 0,!0,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:["查看新的 UUID：",n("code",{children:"lsblkl -n -o PARTUUID /dev/sdb2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["编辑 ",n("code",{children:"/dev/sdb1/boot/grub/grub.cfg"},void 0,!1,void 0,this)," 将启动菜单中的 ",n("code",{children:"root=PARTUUID=xxxx-xx-xxx-xxx-xxx"},void 0,!1,void 0,this)," 替换为新的 PARTUUID。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"扩容完成，重启机器进入 OpenWrt 环境。"},void 0,!1,void 0,this),`
`,n("h2",{children:"系统设置"},void 0,!1,void 0,this),`
`,n("h3",{children:"设置 root 密码"},void 0,!1,void 0,this),`
`,n("p",{children:"启动后，默认就会使用 root 账号登录系统，无密码。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"$"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" passwd"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"按提示设置新密码"},void 0,!1,void 0,this),`
`,n("h3",{children:"设置网络"},void 0,!1,void 0,this),`
`,n("p",{children:"我 OpenWrt 只是用于提供文件共享服务，因此 OpenWrt 是放置到网络的路由器之下。需要设置 WAN 口为 DHCP 模式。我的机器只有一张网卡，因此被默认设置了 LAN 口。需要手工设置 WAN 口。"},void 0,!1,void 0,this),`
`,n("p",{children:["编辑 ",n("code",{children:"/etc/config/network"},void 0,!1,void 0,this),"，增加下面内容，并删除 ",n("code",{children:"config interface 'lan'"},void 0,!1,void 0,this)," 相关的内容："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-log",children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"config interface "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'wan'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  option device "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'eth0'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  option proto "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'dhcp'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["执行 ",n("code",{children:"service network reload"},void 0,!1,void 0,this)," 重启网络。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"设置防火墙"},void 0,!1,void 0,this),`
`,n("p",{children:"从路由器的角度来看，WAN 口属于外部网络，自有防火墙配置大多是 REJECT 外部入口流量。所以需要修改防火墙配置。"},void 0,!1,void 0,this),`
`,n("p",{children:["编辑 ",n("code",{children:"/etc/config/firewall"},void 0,!1,void 0,this),"，找到 ",n("code",{children:"config zone"},void 0,!1,void 0,this)," 中 ",n("code",{children:"option name wan"},void 0,!1,void 0,this)," 的配置，将 ",n("code",{children:"option input"},void 0,!1,void 0,this),"、",n("code",{children:"option output"},void 0,!1,void 0,this),"、",n("code",{children:"option forward"},void 0,!1,void 0,this)," 都设置为 ",n("code",{children:"ACCEPT"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("p",{children:["执行 ",n("code",{children:"service firewall reload"},void 0,!1,void 0,this)," 重启防火墙。"]},void 0,!0,void 0,this),`
`,n("p",{children:["防火墙配置好后，可以使用 SSH 登录机器。可以使用 ",n("code",{children:"ip addr"},void 0,!1,void 0,this)," 查看机器的 IP 地址。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"设置镜像"},void 0,!1,void 0,this),`
`,n("p",{children:["按照清华源的",n("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/help/openwrt/",children:"说明"},void 0,!1,void 0,this),"，执行："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"sed"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" -i"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" 's_downloads.openwrt.org_mirrors.tuna.tsinghua.edu.cn/openwrt_'"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" /etc/opkg/distfeeds.conf"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"然后再执行："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"opkg"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" update"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"安装软件"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"samba4"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"opkg"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" install"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" samba4-server"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" luci-app-samba4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"2",children:[`
`,n("li",{children:"xfs 工具"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"opkg"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" install"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" xfs-admin"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" xfs-fsck"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" xfs-growfs"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" xfs-mkfs"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" kmod-fs-xfs"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["我的数据盘全部使用 XFS 文件格式。如果选择其他文件格式，要安装其他工具。关于 XFS、Btrfs、EXT4 之间对比可以看这篇文章 [",n("a",{href:"https://zhuanlan.zhihu.com/p/348360152",children:"https://zhuanlan.zhihu.com/p/348360152"},void 0,!1,void 0,this),"][",n("a",{href:"https://zhuanlan.zhihu.com/p/348360152",children:"https://zhuanlan.zhihu.com/p/348360152"},void 0,!1,void 0,this),"]。"]},void 0,!0,void 0,this),`
`,n("ol",{start:"3",children:[`
`,n("li",{children:"USB 工具"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"需要使用 U 盘，需要先安装相应的工具。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"opkg"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" install"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" block-mount"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" blockd"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" kmod-fs-autofs4"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" lsblk"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" fdisk"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" kmod-usb-storage"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" kmod-usb-storage-uas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"4",children:[`
`,n("li",{children:"其他工具"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-sh",children:n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"opkg"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" install"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" rsync"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"软件设置"},void 0,!1,void 0,this),`
`,n("p",{children:"软件设置就可以直接在 Luci 中进行。"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"挂载硬盘"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"菜单 -> System -> Mount Points"},void 0,!1,void 0,this),`
`,n("p",{children:'将相应的硬盘，然后 "Save & Apply"'},void 0,!1,void 0,this),`
`,n("ol",{start:"2",children:[`
`,n("li",{children:"设置 Samba"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"菜单 -> Services -> Network Shares"},void 0,!1,void 0,this),`
`,n("p",{children:["在 Shared Directories 中增加相应的路径。如果有多个目录，Name 会设置为子目录的名称。在 Windows 上写入文件，需要选中 ",n("code",{children:"Force Root"},void 0,!1,void 0,this),"，不然会提示无权限。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("p",{children:"2022 年 02 月 13 日 更新"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{o as default};
