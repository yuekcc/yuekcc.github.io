# 实用命令行工具

基本上都是开发用的工具了。

## just

主页：[https://github.com/casey/just](https://github.com/casey/just)

just 是一个类似于 make 工具，用于执行项目开发中的一些组合命令。通过 recipes 可以组成工作流。如果熟悉 node.js 的话，大概也是知道 package.json 中可以增加自定义的脚本，用于启动或执行一些命令，使用最多的情况是构建项目。just 则更为通用。类 Makefile 的语法也更容易上手。

使用：

1. 在项目中创建一个 `justfile`
2. 在 justfile 增加一些 _recipe_，比如我当前项目的 justfile：

```justfile
serve:
  @npm run serve

push:
  @echo "Push to Github"
  @git push origin

  @echo "Push to Gitee"
  @git push gitee

  @echo "Push to Codeberg"
  @git push codeberg

  @echo "DONE"

```

3. 使用：

- 直接执行 `just`。默认会执行第一个 recipe
- 通过 `just <recipe-name>` 执行指定的 `recipe`
- 通过 `just -l` 查看可以用 `recipe`

其他细节这里就不一一说明了。看文档吧：[https://github.com/chinanf-boy/just-zh](https://github.com/chinanf-boy/just-zh)

## watchexec

主页：[https://github.com/watchexec/watchexec](https://github.com/watchexec/watchexec)

基本使用

```sh
$ watchexec -e js,html,css npm run build
```

命令行参数

| 参数          | 功能                                   |
| ------------- | -------------------------------------- |
| `-c`          | 清空 console 输出                      |
| `-r`          | 一旦监听到文件变化就重新启动指定的命令 |
| `-s <SINGLE>` | 发送信号到指定命令                     |
| `-w <DIR>`    | 指定监听的目录                         |

watchexec 会自动忽略 `.gitignore` 中的文件，并且递归处理子目录。

watchexec 可以配合 just 使用。比如下面的 `justfile`：

```justfile
start: build
  pnpm start

build:
  pnpm build

watch:
  watchexec -c -r -w src -e js just start

```

执行 `just watch`，就可以启动开始监听 src 目录下的 js 文件，文件发布变化时，则执行 `just start`。最终效果就是修改了 src 目录下的 js 文件，并自动重启服务。

## sirv

主页：[https://github.com/lukeed/sirv](https://github.com/lukeed/sirv)

sirv 是 node.js 的一个简单开发服务器。sirv 自带 SPA 前端项目支持，也只支持自动查找可用端口。

**sirv 需要 node.js 环境**。

使用 npm 的项目可以直接通过 `npm i -D sirv-cli` 进行安装到项目依赖中。也可以安装到全局：`npm i -g sirv-cli`。

基本使用：

```sh
$ # 如果安装到全局
$ sirv -D <dir>
$
$ # 如果安装到项目
$ npx sirv -D <dir>
```

## mkcert

主页：[https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)

mkcert 是一个创建自签证书的工具。特别适合需要内网部署 https 的场景。

## tokei

主页：[https://github.com/XAMPPRocky/tokei](https://github.com/XAMPPRocky/tokei)

tokei 是一个代码统计工具。对比常见的 sloc，tokei 主要统计内嵌脚本。比如嵌入在 html 文件中的 js 代码。

tokei 使用 rust 实现，支持 linux/macos/windows 操作系统。

类似的工具还有使用 go 实现的 [scc](scc)。scc 甚至会根据 COCOMO 模型计算软件成本。看到自己的代码估算值 xxx USD 还是很舒服的 😁

[scc]: https://github.com/boyter/scc

## WindTerm

主页：[https://github.com/kingToolbox/WindTerm](https://github.com/kingToolbox/WindTerm)

WindTerm 是一个 SSH 客户端，类似于 XShell 和 mobaxterm。支持保存 SSH 自动登陆，历史记录等功能。

## # WinLibs standalone build of GCC and MinGW-w64 for Windows

主页：[https://winlibs.com/](https://winlibs.com/)

winlibs 是 mingw-w64 的一处发行版。mingw-w64 是源自 mingw 项目的一个 Fork，包括一组用于 windows 应用开发的 Headers、库、GNU 工具和 64 位支持。

类似的项目还有： 

- https://www.msys2.org/
- https://github.com/skeeto/w64devkit
- https://github.com/niXman/mingw-builds-binaries
- https://github.com/mstorsjo/llvm-mingw
- https://nuwen.net/mingw.html

---

- 2022 年 01 月 02 日
- 2022 年 02 月 18 日，收录 WindTerm
- 2022 年 05 月 09 日，收录 winlibs build of gcc
