# 编写 Shell 脚本

操作系统的人机交互接口可以分为 cli 和 gui。shell 是 cli 交互接口中的一个重要入口。shell 可以理解为一个解释器，
执行用户输入的指令，然后调用操作系统的功能调用外部的程序，或者直接执行内置指令。

bash 是 linux 里非常非常流行的一个 POSIX sh 实现。大部分 linux 发行版中都可以找到 bash 的身影。

linux/\*bsd 中有非常多的 shell 软件。bash 是其中 linux 发行版中比较常见。其他有 csh、ksh、zsh、fish 等。
一般情况下这些 sh 都兼容 POSIX sh 规范，并且实现了自己的特色功能。

windows 上通过 git-for-windows 可以得到一个可用 bash。原味的 bash 只能 linux 中体验，因为有一些命令并没有包含 在
git-for-windows 的安装包中。

这篇文章主要是记录编写 shell 脚本的点点滴滴。

[TOC]

## 执行脚本

最直接的启动方式是 `bash script.sh` 或者 `sh script.sh`。

> 有部分 Linux 发行版 bash 和 sh 是同一个软件。也有一些情况下 sh 是指 POSIX 的 sh 实现，这时就不能使用 bash
> 的一些拓展功能。一般情况项目的部署环境是比较固定，使用环境上对应的 shell 实现就可以了。

在脚本首行中加入 SharpBang（#!）配置，并设置为 `+x` 权限。shell 脚本也可以直接执行，如同一般的命令：

```sh
$ cat demo
#!/bin/bash

echo Hello

$ chmod +x demo
$ ./demo
Hello
```

## 导入其他脚本

需要导入其他脚本，可以在文件中写上 `. script.inc`。`.` 是 `source` 命令的简写，前面的命令也可以写作
`source script.inc`。

## 编辑器

正经写 shell 脚本，就用 vscode 吧，插件可以使用 [shell-format][shell-format] +
[shellcheck][shellcheck]。

shell-format 提供格式化功能，shellcheck 则提供 lint 功能。

[shell-format]: https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format
[shellcheck]: https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck

如果在服务器上修改 shell 脚本。vim 是最常见的编辑器。下面是我使用的最基本的 `.vimrc`：

```vim
set nu
set ai # 自动换行
set si # 智能缩进
set ts=4 # tab
set sw=4 # tab 的宽度为 4
set et # 使用空格代替 tab 符
```

或者使用 vim modeline，在文件第一行：

```sh
# vim: set ai sw=4 et:
```

shell 脚本是自带混淆的语言。想实现某些功能时，多问 google 吧。

### 声明变量

```sh
VAR_NAME="something"
VAR_NAME2="${VAR_NAME}"
```

sh 中的变量可以认为只能字符串一种类型。sh 支持字符串变量替换（也有变量展开）。下面这三种写法新创建的变量 VAR_NAME3 的值都是一样的：

- `VAR_NAME3="${name}"`
- `VAR_NAME3="$name"`
- `VAR_NAME3=$name`

变量替换只有在 `"..."` 或不使用引用的情况下生效，如果使用了 `'...'` 则不会进行变量替换。

如果使用了函数。声明变量，优先使用本地变量。通过 `local VAR_NAME_X="something"` 来声明一个本地变量。

对于声明变量，有一点需要注意：**在 `=` 两边不能有空白**

### 特殊变量

shell 的函数或脚本中，有一组预定义变量来获取参数：

- `$1`、`$2` ... `$1000` 表示第一个、第二个、...第 1000 个参数
- `$0` 脚本的名字
- `$@` 所有参数
- `$#` 参数的数量
- `$?` 最后一个命令的返回值（0 表示正常退出，其他整数表示异常）
- `$$` 当前进程的 PID
- `$(command)` 执行 command 命令，并获取命令的输出结果

### 创建工作目录

```sh
mkdir -p dir1/dir2/dir3 # -p 在创建目录，会尝试创建路径中所有目录，如果已存在则忽略
```

### 条件判断（test 命令）

写 shell 时，经常遇到的一类任务是判断某个文件或目录是否存在，然后执行某些命令。有两种实现方式：

1. 调用 test 命令，通过 `&&` 或 `||` 串联命令

```sh
test -f file_name && echo 1
```

`&&` 是命令结果逻辑与关系。如果第一个命令的执行结果是返回 `0`，则继续执行第二个命令。在 unix 中，约定命令执行成功返回 0 给操作系统。
shell 通过操作系统可以获取上一个命令的返回值。

`||` 是命令结果的逻辑或关系。当左则的命令结果不等于 `0` 时，则继续执行右则的命令。

2. if ... else ... fi 语句

```sh
if [ -f file_name ]; then # `[ ]` 里的其实也是通过 test 命令判断的
  echo 1
else
  echo 0
fi

# 多个条件
if [ expr1 ] && [ expr2 ]; then
  #...
else
  #...
fi
```

**在 bash 中，有一些情况空白是有意义的！**

test 命令的其他参数：

| 选项                     | 功能                       |
| ------------------------ | -------------------------- |
| `-s <file>`              | 文件存还且大小大于零       |
| `-x <file>`              | 文件存在且是可执行文件     |
| `-d <dir>`               | 文件存在并且是一个目录     |
| `-e <file>`              | 文件是否存在               |
| `-f <file>`              | 文件存在并且是一个普通文件 |
| `-z <string>`            | 字符串的长度是零           |
| `-n <string>`            | 字符串的长度大于零         |
| `<string1> == <string2>` | 字符串是否相同             |
| `<string1> != <string2>` | 字符串不相等（相同）       |
| `<num1> -eq <num2>`      | 数值比较，等于             |
| `<num1> -gt <num2>`      | 数值比较，大于             |
| `<num1> -lt <num2>`      | 数值比较，小于             |
| `<num1> -ge <num2>`      | 数值比较，大于等于         |
| `<num1> -le <num2>`      | 数值比较，小于等于         |

### 查找 find

使用 `find` 可以查找文件或目录，并对搜索结果执行某些命令。

```sh
# 递归查找 ws 目录下，名为 file 的文件，并设置其文件权限
find ws -type f -name file -exec chmod a+r {} +;
```

find 命令常用参数：

| 选项          | 功能                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| `-type`       | 指定文件类型，常用 `f` 表示文件，`d` 表示目录                                                 |
| `-name`       | 搜索的文件名（支持 glob 匹配，如 `*.md`）                                                     |
| `-empty`      | 搜索空文件或空目录                                                                            |
| `-exec CMD +` | 对搜索结果执行某些操作。`-exec` 需要使用 `;` 或 `+` 结尾，表示命令结束。具体可以参见 [SC2067] |

[SC2067]: https://github.com/koalaman/shellcheck/wiki/SC2067

### 异常处理

通过 set 命令，可以指令 shell 程序在出错时的处理方式。打开开关用 `set -<flag>`，关闭开关用 `set +<flag>`

```sh
set -e # 若指令传回值不等于 0，则立即退出 shell
set -o pipfail # 检查管道中的错误
set -u # 当执行时使用到未定义过的变量，则显示错误信息
```

打开 `set -x`，shell 会在执行命令时，先打印出命令，然后再执行。

---

2021.11.21
