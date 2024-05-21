# Memo 2024

## 2024-05-21

让 cmake 生成 mingw32-make 构建目标并使用 gcc：

```sh
cd $REPO_ROOT
mkdir build
cd build
cmake -G "MinGW Makefiles" ..
mingw32-make
```
