# 2024 年如何安装 windows 系统

原文地址：[https://v2ex.com/t/1082106#reply50](https://v2ex.com/t/1082106#reply50)

## 2218675712

_2024-10-21 10:57:22 +08:00_

安装 windows 系统时，使用封装后的镜像，安装时间要比原版速度快很多
但很多镜像不干净，携带流氓软件，或者是 过度精简
想找 能兼顾性能和日常使用的系统，以及好用的 pe
请大家推荐下喜欢使用的 系统

## XuDongJianSama

_2024-10-21 11:00:45 +08:00_

原版的就是最好的，加东西删东西都没必要

## iyiluo

_2024-10-21 11:02:45 +08:00_

原版 ltsc，操作系统用第三方，不怕下毒吗

## darlinghsu

_2024-10-21 11:03:37 +08:00_

原版 +1

## iphoneXr

_2024-10-21 11:04:05 +08:00_

用 ventoy 做启动 U 盘，里面放 win10 ltsc 镜像等

## wheat0r

_2024-10-21 11:04:49 +08:00_

镜像就用原版，我找不到除了装 vm 以外装第三方镜像的理由。

PE 可以用 wepe 或者 FirPE

## myfate

_2024-10-21 11:05:00 +08:00_

2024 年了，可以不用 pe 吧，直接下载原版安装就可以

## 1145148964

_2024-10-21 11:05:22 +08:00_

如果你想安装系统很快。那么台式机：装根 16g 傲腾。

其他设备：高速度 u 盘/移动固态。注意很多硬盘盒不支持 16g 傲腾。

## guanhui07

_2024-10-21 11:09:20 +08:00_

原版

## gearfox

_2024-10-21 11:09:49 +08:00_

我说的办法，在此站会被鄙视哈哈哈 - -"

ventoy 做成启动 U 盘

U 盘下放在 423down.com 下载的优启通 VIP 版 ISO，EasyDrv8 万能驱动 VIP 版。

twm000.top 下载的系统 ISO。

用了很久，也没啥问题

## aminobody

_2024-10-21 11:12:04 +08:00_

https://windsys.win/

一直用这个，个人认为没什么问题，讨厌装完系统后下各种常用软件，尤其是 Windows 下默认没有包管理软件。

## xclimbing

_2024-10-21 11:15:38 +08:00_

我建议安装精简掉更新和 WD 的系统，考虑兼容性，不要安装极度精简的版本，推荐：不忘初心、三蛋（TWM_000）、小修（在无忧启动论坛找）。至于安装方法，要么是 PE（从无忧找 WePE、Kuer、Lightning 做的 PE）+WinntSetup +VHD，要么就是 ventoy + ISO +VHD。

硬盘不要分区，系统安装到 VHD，使用 VHD 差分系统代替克隆。这应该是目前最佳实践方式，前提一定要用固态硬盘。

## SunsetShimmer

_2024-10-21 11:20:31 +08:00_

https://www.microsoft.com/zh-cn/software-download/windows11

## imjiaoyuan

_2024-10-21 11:21:33 +08:00_

@gearfox 我一直用 ventoy 放一个 win 和一个 arch

## Avn

_2024-10-21 11:24:01 +08:00_

微 PE: https://www.wepe.com.cn/download.html

Windows LTSC: https://massgrave.dev/windows_ltsc_links

## laommmm

_2024-10-21 11:25:40 +08:00_

msdn + ultraiso

## lcy630409

_2024-10-21 11:27:43 +08:00_

听说 不忘初心精简的比较出名 可以试试

## ByteCat

_2024-10-21 11:37:29 +08:00_

PE 我用的微 PE，系统就用原版

## suri68

_2024-10-21 12:04:21 +08:00_

现在基本没人用第三方系统里吧 都是原版 安全至少有保障 精简系统也并不比原版流畅

## 0superx0

_2024-10-21 12:16:46 +08:00_

直接 ventoy 制作硬盘版啊，用 vbox 制作一个 windows 虚拟机，再用 ventoy 启动虚拟机镜像，这样整个系统就在一个虚拟硬盘里面，备份系统跟多系统启动非常方便

## liuzimin

_2024-10-21 12:17:02 +08:00_

看没人提，我提一嘴，优捷易 PE。

经测试有些新电脑用 WinPE 装完系统会卡启动，但优捷易 PE 不会。

兼容度高；内置工具也丰富；装完系统很纯净，不会加东西，而优启通 PE 是会加东西的。

## 263

_2024-10-21 12:22:29 +08:00_

官方文档：

https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/install-windows-from-a-usb-flash-drive?view=windows-11

## concernedz

_2024-10-21 12:23:45 +08:00_

PE 用 优启通、微 PE

系统 MSDN 下

ventoy 做启动盘

## jqknono

_2024-10-21 12:59:29 +08:00_

Windows 11 IoT LTSC, Windows Server 2025, 唯二的选择。https://massgrave.dev 上把所有你需要的所有东西都给了。

## lg106

_2024-10-21 13:10:55 +08:00_

Ventoy winpe 微软官方下载原镜像

## dxppp

_2024-10-21 13:38:44 +08:00_

https://next.itellyou.cn/Original/

## BeforeTooLate

_2024-10-21 13:57:02 +08:00_

强迫症的我只用微软官方安装工具安装，之前也用户 itellyou 镜像刻录 u 盘，后来发现官方的制作工作更简单，就只用官方的了。

https://www.microsoft.com/zh-cn/software-download/windows11

## min

_2024-10-21 14:01:10 +08:00_

第三方做的不怕 os 里面被加料吗？

## punish19

_2024-10-21 14:03:58 +08:00_

MSdownload I tell U 可以吧？

## iShao

_2024-10-21 14:05:26 +08:00_

win10 22h2 就行了吧

## caola

_2024-10-21 14:14:33 +08:00_

制作 USB 启动怎么少得了开源的 Rufus 呢，Win11 还能去除 TPM2.0 的要求

## brader

_2024-10-21 14:15:35 +08:00_

我用的这两个：

https://www.wepe.com.cn/

https://www.itsk.com/thread/432589

## lisxour

_2024-10-21 14:16:29 +08:00_

正常原版系统就好了，千万别听上面说的 ltsc

## 2218675712

_2024-10-21 14:24:07 +08:00_

@xclimbing

@iphoneXr

@gearfox

感谢，我回去试试

## jcroot

_2024-10-21 14:43:37 +08:00_

很久不用 PE 了，直接两种方式：

1、官方镜像，直接用官方助手：https://www.microsoft.com/zh-cn/software-download/windows11

2、其他渠道的镜像，用 Rufus。镜像地址：https://massgrave.dev/ 。工具地址：https://rufus.ie/zh/

## JensenQian

_2024-10-21 14:51:53 +08:00_

微软官网不就能下码

l 精简的话 ltsc 就行了啊

## swap123

_2024-10-21 15:44:19 +08:00_

firepe

## JontyChen

_2024-10-21 15:51:53 +08:00_

在用 revios https://revi.cc/ 安装原版镜像之后运行一个 playbook 一键精简优化

## chenbin36255

_2024-10-21 16:11:06 +08:00_

不忘初心

## zidian

_2024-10-21 16:16:01 +08:00_

原版安装慢？我记得要不了半个小时吧

## taipei

_2024-10-21 16:22:22 +08:00_

啥工具都不用，官网下载镜像，解压或者装载后，点文件夹里面的 setup 程序安装

## YGHMXFAL

_2024-10-21 16:42:46 +08:00_

ADK 自制 WinPE 真心简单，试试吧

## opengps

_2024-10-21 16:44:51 +08:00_

其实，很多 PE 干了安装流氓软件的事情，不一定是你下载的镜像有问题

## ljsh093

_2024-10-21 16:57:42 +08:00_

@lisxour #32 ltsc 咋了

## xiaozhang1609

_2024-10-21 18:11:00 +08:00_

三种方法下载 Windows 10 和 Windows 11 原生镜像：https://itxiaozhang.com/three-methods-to-download-windows-10-and-windows-11-iso/

## jinliming2

_2024-10-21 18:22:37 +08:00_

日常正常用官方原版的就好，安装速度这种一次性的时间成本不需要考虑吧？

@lisxour #32 LTSC 也是微软官方的哇，有什么问题吗？

## Falcon1

_2024-10-21 19:19:19 +08:00_

itsky 论坛的

## abc8678

_2024-10-21 19:22:55 +08:00_

闲时自制

## chutsetien

_2024-10-21 19:33:05 +08:00_

PE 用来安装完之后做镜像或者如果有洁癖的话删掉微软那个 600 MB 大的 Recovery 还是有用的。我一直用谢尔盖的那个 PE ( https://sergeistrelec.name/winpe-10-8-sergei-strelec-english/), 功能很全。注意它不支援中文字符，不过对我来说没差。

## nyxsonsleep

_2024-10-21 20:03:07 +08:00_

@lisxour #32 +1

## MYDB

_2024-10-21 20:15:36 +08:00_

精简和原版在大部分情况下 0 区别…除非真的很需要那几个 GB 的存储和几百 MB 的内存，其他情况下都推荐原版，然后安装完把补丁和内置的都先升级，接着用 geek 之类工具把不需要的卸载，最后用 update blocker 之类工具把系统禁用更新即可

## c398425861

_2024-10-21 21:42:29 +08:00_

dism++

## LanhuaMa

_2024-10-21 21:59:21 +08:00_

@ljsh093 #43 装什么什么不好用。有概率卡应用商店或者其他微软家的产品，你想要用 Powershell 装东西加点功能千难万难

## Ally

_2024-10-21 22:08:02 +08:00_

折腾到最后，还是得回到原版镜像

## 20160409

_2024-10-21 22:10:41 +08:00_

刚装完，用 ms 自己的 Windows Media creation，BIOS 设置启动项为 u 盘。

比 PE 还要简单

---

- 2024 年 10 月 21 日，转载
