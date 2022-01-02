# 实用命令行工具

## just

主页: https://github.com/casey/just

just 是一个类似于 make 工具，用于执行项目开发中的一些组合命令。如果熟悉 node.js 的话，大概也是知道 package.json 中可以增加自定义的脚本，用于启动或执行一些命令，使用最多的情况是构建项目。just 则更为通用。类 Makefile 的语法也更容易上手。

使用：

1. 在项目中创建一个 `justfile`
2. 在 justfile 增加一些 *recipe*，比如我当前项目的 justfile：

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

3. 使用:

  - 直接执行 `just`。默认会执行第一个 recipe
  - 通过 `just <recipe-name>` 执行指定的 `recipe`
  - 通过 `just -l` 查看可以用 `recipe`

其他还是看文档吧：https://github.com/chinanf-boy/just-zh

## watchexec

主页：https://github.com/watchexec/watchexec

基本使用

```shell
$ watchexec -e js,html,css npm run build
```

命令行参数

| 参数 | 功能 |
|-----|------|
| -c  | 清空 console 输出 |
| -r  | 一旦监听到文件变化就重新启动指定的命令 |
| -s <SINGLE> | 发送信号到指定命令 |
| -w <DIR> | 指定监听的目录 |

watchexec 会自动忽略 .gitignore 中的文件，并且会自己处理子目录。

watchexec 可以配合 just 使用。比如下面的 justfile：

```justfile
start: build
  pnpm start

build:
  pnpm build

watch:
  watchexec -c -r -w src -e js just start

```

执行 `just watch`，就可以启动开始监听 srv 目录下的 js 文件，文件发布变化时，则执行 just start。最终效果就是修改了 src 目录下的 js 文件，会自动重启服务。

## sirv

主页：https://github.com/lukeed/sirv

sirv 是 node.js 的一个简单开发服务器。sirv 自带 SPA 前端项目支持，也只支持自动查找可用端口。

sirv 需要 node.js 环境。

使用 npm 的项目可以直接通过 `npm i -D sirv-cli` 进行安装到项目依赖中。也可以安装到全局：`npm i -g sirv-cli`。

基本使用：

```shell
$ # 如果安装到全局
$ sirv -D <dir>
$
$ # 如果安装到项目
$ npx sirv -D <dir>
```

---

2022年01月02日