# Memo

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

