# 安装 wsl

windows——最好的 linux 发行版。

wsl，windows subsystem for linux，是 windows 上用于运行 linux 技术。wsl 有两个版本，wsl1 是模拟 linux 内核调用，wsl2 则是一种轻量化的虚拟机技术。现在主流是 wsl2，毕竟兼容性更好。至于性能，开发环境就不要首先考虑这个问题了。

下文中出现的 wsl，如果没有特别说明都是指 wsl2。

> 【2023-04-14】我已经迁移到 [Rocky9](https://github.com/mishamosher/RL-WSL)。Rocky 是 CentOS 联合创始人新建的 Linux 发行版，兼容 RHEL。使用 Rocky9 主要是兼容我项目的生产环境，对于 WSL，使用什么发行版基本上只是包管理器的区别。下面安装 Debian 的内容可以作为参考。

## 安装

在 windows 10 的某个版本开始提供了 wsl 支持。一直开启 windows 更新的 windows 10 系统应该可以正常开启 wsl 功能。

使用管理员方式打开的 powershell（按 win+x 也可以看入口），执行 `wsl -l -v` 命令，查看当前已经安装 linux 发行版。如果正确启用了 wsl 功能，这个命令应该可以正常使用。

windows app store 可以直接安装 debian、ubuntu 最近的版本。如果你的网络好用的话，应该可以直接打开 windows app store。可惜，我这边不行。只能使用其他安装方式。另外就是，通过官方手段安装的 wsl 系统，全部安装的 C:/。

github 可以找到两个工具，wsldl、LxRunOffline，属于增强 wsl 的工具。两个工具我都试用了。最后选择了 wsldl。首先是 wsldl 提供了更方式的安装命令，二是有不少发行版直接使用 wsldl 来创建 wsl 的分支，可以直接下载使用。

LxRunOffline 默认安装的是 wsl 1，需要手工转换为 wsl2（有用户提了 issue，但 LxRunOffine 似乎有段时间没有发版本）；LxRunOffline 可以使用 lxc-images 安装。lxc-images 是 linuxcontainer.org 构建的发行版镜像，而且默认集成了更多功能。

lxc-images 可以在 https://mirrors.tuna.tsinghua.edu.cn/lxc-images/ 找到。

我安装的 wsl 是使用 wsldl 安装的 Debian。

### 使用 wsldl 安装 Debian

1. 在 https://github.com/yuk7/wsldl 下载 wsldl.exe
2. 将下载回来的 wsldl.exe 命名为 Debian.exe。
3. 从 https://docker.debian.net/ 下载 debian 的 rootfs，我下载的 sid 分支。

rootfs.tar.xz 下载地址：

https://raw.githubusercontent.com/debuerreotype/docker-debian-artifacts/6251ccd8060ae10b12bd881975cf37eee84ffbb0/sid/rootfs.tar.xz

如果 raw.githubusercontent.com 不能访问。可以尝试一下 github 的代理。

rootfs 只包含了基本工具。连 ip、vi 命令都没有，需要在后面自行安装。

4. 使用 7-zip 解压 rootfs.tar.xz，只需要解开 xz 压缩，得到 rootfs.tar。（wsldl 只支持 .tar 或 .tar.gz 的 rootfs）
5. 将 rootfs.tar 和 Debian.exe 放置到同一目录下。比如：

```
D:/wsl/debian
	/-- Deiban.exe
	/-- rootfs.tar

```

6. 执行 Debian.exe install 或双击 Debian.exe 便会进行安装。

待安装完成后，便得到一个非常轻量的 Debian 系统。

这里一个列表，https://wsldl-pg.github.io/docs/Using-wsldl/#distros 罗列了使用 wsldl 包装的 linux 发行版。上面的列表包含了民间人士准备的各种 wsl 发布版。Linux 发行版选择一个自己习惯的就可以了。推荐 Ubuntu、Debian、Fedora 这些大众化的选择，其他小众一点的发行版也可以的。在 wsl 中主要就是包管理工具的区别了。我使用的是 Debian，因为习惯了 apt 工具，自家的服务器也使用 Debian。另一个原因是 Debian 在国内有比较好的源，安装软件比较快。

## WSL 基本使用

wsl2 本质是一台虚拟机（VM）。在启用 wsl 支持后，可以得到 wsl 命令。

```sh
# 列出系统中安装 linux 发布版
wsl -l -v

# 使用指定的用户进入 wsl 系统
# -d 是发行版名称，系统中可以安装多个 wsl 发行版
wsl -d Debian -u feng
wsl -d Debian -u root

# wsl 系统关机
# 会关闭所有 wsl 虚拟机
wsl --shutdown
```

## 配置

双击上面的 Debian.exe 就可以进行 Debain wsl。默认使用 root 用户登录系统。配置系统期间，可以直接使用 root 用户。

我在电脑上安装好 wsl 系统后，DNS 配置是有问题的。所以首先是修复 DNS 问题。

> 【2023-04-14】迁移到 Rocky 之后，原来 Debian 版本的上遇到的问题减少了很多，比如没有 DNS 问题、没有无法访问网络的问题。

### 设置 DNS nameserver

上面的方式安装的 Debian 发行版是一个基本系统，没有编辑器。

```sh
rm /etc/resolv.conf
echo nameserver 223.5.5.5 > /etc/resolv.conf
```

### 设置软件源

```sh
echo deb http://mirrors.tuna.tsinghua.edu.cn/debian/ sid main contrib non-free > /etc/apt/sources.list

# 更新
apt-get update
apt-get dist-upgrade # 安装好系统后，先是一波全局更新。sid 是开发版，更新速度还是很快的。
```

### 实用工具

```sh
apt-get install iproute2 iputils-ping locales net-tools openssh-client procps sudo xz-utils unzip
```



### locale-gen

```sh
# 开启 en_US.UTF-8
nano /etc/locale.gen
locale-gen
```

### 创建普通用户

```sh
# 创建普通用户 feng
useradd -m -G adm,sudo -s /bin/bash feng
passwd feng
```

将普通用户设置为默认用户：`Debian config --default-user feng`

### .env 文件

.env 是我自定义一个环境文件。将常用的一些环境配置集中在一起。

```sh
export COLORTERM=truecolor

PATH=$PATH:~/.local/bin
PATH=$PATH:/opt/helix

export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
export FNM_NODE_DIST_MIRROR=https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/

eval "$(starship init bash)"
eval "$(fnm env --shell bash)"
```

在 `~/.bashrc` 增加一行：

```
. ~/.env
```

重启 wsl 生效。

### 设置文件系统 mask

设置文件系统 mask 可以让 ls 命令显示正常的颜色。在 /etc/wsl.conf 增加这些内容：

```ini
[automount]
enabled = true
root = /mnt/
options = "metadata,umask=22,fmask=111"
mountFsTab = true
```

### 不加载 windows 系统 $PATH 路径

在 /etc/wsl.conf 增加：

```ini
[interop]
enabled = false
appendWindowsPath = false
```

## 设置静态 ip

> 【2023-04-14】如无必须，不应该设置静态 ip。

首先关闭 wsl 自动生成 resolv.conf 功能。在 /etc/wsl.conf 中增加：

```ini
[network]
generateResolvConf = false
```

在系统中，增加一个脚本，用于配置 wsl 网络。比如叫 wsl_static_ip.cmd，内容如下：

```bat
wsl -d Debian -u root ip addr del $(ip addr show eth0 ^| grep 'inet\b' ^| awk '{print $2}' ^| head -n 1) dev eth0
wsl -d Debian -u root ip addr add 192.168.50.2/24 broadcast 192.168.50.255 dev eth0
wsl -d Debian -u root ip route add 0.0.0.0/0 via 192.168.50.1 dev eth0
wsl -d Debian -u root echo nameserver 223.5.5.5 ^> /etc/resolv.conf

powershell -c "Get-NetAdapter 'vEthernet (WSL)' | Get-NetIPAddress | Remove-NetIPAddress -Confirm:$False; New-NetIPAddress -IPAddress 192.168.50.1 -PrefixLength 24 -InterfaceAlias 'vEthernet (WSL)'; Get-NetNat | ? Name -Eq WSLNat | Remove-NetNat -Confirm:$False; New-NetNat -Name WSLNat -InternalIPInterfaceAddressPrefix 192.168.50.0/24;"
```

---

- 2022-07-31 初稿
- 2023-04-14 增加「不加载 windows 系统 $PATH 路径」说明；更新 Rocky Linux 相关内容。
