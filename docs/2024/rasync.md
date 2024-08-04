# rsync 简明使用教程

rsync 是一个文件同步软件，支持本地计算机和远程计算机之间进行文件同步。rsync 可以理解为 cp、mv 命令的威力加强版。

## 基本使用

```sh
rsync -r src dest
```

表示将 src 目录复制到 dest 目录。注意是 src 目录本身及其子目录。

**如果只想同步 src 目录下的文件，需要改为 src/**：`rsync -r src/ dest`

## -a 同步元数据

```sh
rsync -a src/ dest
```

-a 和 -r 基本一致。但会复制文件的元数据

## -n 试运行

```sh
rsync -anv src/ dest
```

增加 -n 表示 --dry-run。不会实际操作文件，用于测试一下执行的效果。

## --delete 同步删除文件

```sh
$ rsync -av --delete src/ dest
```

增加 --delete 会删除 dest 目录下存在但 src 目录没有的文件。执行后 dest 就成了 src 的镜像。

## 真实示例

我使用 rsync 主要冷备份。我自组的 NAS 有四个硬盘：

```
/dev/sda1 4t
/dev/sdc1 apl1t
/dev/sdd1 wd1t
/dev/sde1 st500g
```

一般情况下，我先将数据从其他设备（主要是手机）通过 syncthing 上传到 NAS 的一个硬盘，比如上面的 apl1t。然后再通过 rsync 同步到其他硬盘。

1. 使用手机端的 syncthing 同步文件到 /mnt/sdc1/sync 目录下
2. 执行 `rsync -av --delete /mnt/sdc1/ /mnt/sdd1`
3. 执行 `rsync -av /mnt/sdc1/ /mnt/sda1`

---

- 2024 年 8 月 4 日 初稿
