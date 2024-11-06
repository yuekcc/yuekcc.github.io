# Memo 2024

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
