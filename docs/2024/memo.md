# Memo

## 2026-10-11

Windows 备份数据：

1. 添加 SMB 映射：`net use Z: \\192.168.1.16\folder_name /user:用户名`
2. 通过 robocopy 复制文件：`robocopy "D:\xxx" "Z:" /E /COPY:DAT /DCOPY:DAT /R:2 /W:2 /XJ /NP /NFL /NDL /LOG:"D:\copy_photos19.log"`

  - `/E` 复制所有子目录，包括空目录
  - 如果你不要子目录，只复制 `D:\xxx` 当前层文件，去掉 `/E`
  - 如果你要子目录但不要空目录，把 `/E` 换成 `/S`
  - 不要用 `/MIR`，除非你确定要镜像并删除目标里多余的文件

## 2025-11-06

VIM 常用操作：

- 选择全部: normal 下按 `ggVG`，gg 回到首行，V 进入可视化模式，G 跳到最后
- 删除全部：normal 下 `:%d`，也可以直接使用 `ggdG`

## 2025-10-08

清理 github 幽灵通知。在通知页面的 F12 中执行下面的代码：

```js
(function(){var f=document.querySelector('.js-notifications-mark-all-actions form[action="/notifications/beta/mark"]');if(f){fetch(f.action,{method:f.method,body:new FormData(f),credentials:"include"}).then(r=>{if(r.ok)setTimeout(()=>location.reload(),500);});}})();
```

出处：[https://linux.do/t/topic/999652](https://linux.do/t/topic/999652)

## 2025-06-06

```sh
# 搜索包
xbps-query -Rs libffi

# 安装包
xbps-install libffi

# 删除包
xbps-remove libffi
```

## 2024-11-06

通过镜像下载 zig。可用的镜像：

```json
[
  ["https://pkg.machengine.org/zig", "slimsag <stephen@hexops.com>"],
  ["https://zigmirror.hryx.net/zig", "hryx <codroid@gmail.com>"],
  ["https://zig.linus.dev/zig", "linusg <mail@linusgroh.de>"],
  ["https://fs.liujiacai.net/zigbuilds", "jiacai2050 <hello@liujiacai.net>"]
]
```

## 2024-05-21

让 cmake 生成 mingw32-make 构建目标并使用 gcc：

```sh
cd $REPO_ROOT
mkdir build
cd build
cmake -G "MinGW Makefiles" ..
mingw32-make
```

