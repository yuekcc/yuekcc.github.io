# 实用代理设置

不付费上网，有些网站真的打不开。

## github

github 不能访问时，可以设置 hosts 直连。github 服务器地址可以通过 [github520][github520] 项目找到对应的列表。

如果无法打开该项目，可以尝试使用 cdn 服务，直接访问其文件。比如使用 `staticaly` 的 [服务][github520_cdn]。除了 staticaly 的服务，也有其他类似的服务，可以搜索引擎中找找。

[github520]: https://github.com/qinyihao/GitHub520
[github520_cdn]: https://cdn.staticaly.com/gh/qinyihao/GitHub520@main/hosts

windows 系统下，可以编辑 `C:\Windows\System32\drivers\etc\hosts`，增加 github520 项目提供的 hosts 列表，然后刷新一下 dns 一般就可以直接访问 github 了。

刷新 dns 可以用 `ipconfig /flushdns` 命令。

可以使用我的自制工具，自动更新 hosts 文件，在这个仓库可以找下载：[https://codeberg.org/yuekcc/add-github-hosts](https://codeberg.org/yuekcc/add-github-hosts)。

## 常用软件的镜像

国内一些高校都有对外提供开源软件的镜像，可以在搜索引擎中找找。像 git for windows、常见的 linux 发生版都有。我常用的是清华大学提供的 [镜像服务][tuna_mirror]。

也有一些大的互联网公司也搞这种公共的镜像服务，比如阿里的 [npmmirror][npmmirror]，华为云的 [mirrors][hw_mirror]。

[tuna_mirror]: https://mirrors.tuna.tsinghua.edu.cn/
[npmmirror]: https://npmmirror.com/
[hw_mirror]: https://mirrors.huaweicloud.com/home

## 开发语言的专用的镜像

一些开发语言提供了三方包的集中式管理，在国内也有相应的镜像。比如前面说的阿里的 [npmmirror][npmmirror] 就是给 npm 提供镜像服务的。类似的还有 go 语言用的 [goproxy][goproxy_io]，cargo 用的 [rsproxy][rsproxy_cn]。具体如何配置，参见包管理软件的文档了，这里不再一一说明。

[goproxy_io]: https://goproxy.io/zh/
[rsproxy_cn]: https://rsproxy.cn/

---

- 2022 年 06 月 04 日 初稿
