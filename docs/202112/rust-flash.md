# rust 快速体验

![Rust 程序开发语言](/docs/202112/images/3ed4a443f105e3102e28b44eb3855c87de738796.png)

## 安装

使用 rustup 工具，crates 镜像设置为 rsproxy.io，工具链则选择 stable-x86_64-pc-windows-gnu。

### 问题

rust 有部分包使用了 ffi 得用现有的工具/库。比如 cargo-edit。使用这些包机器上需要安装 [mingw32-w64](https://www.mingw-w64.org/)。

mingw32-w64 官方分发的 gcc 还是 gcc8。可以从 [winlibs](https://winlibs.com/) 下载较新的版本：gcc11。

**windows 上还是推荐 msvc**。除了体积大点，大概没有其他问题。

## 写点小工具

我用 rust 重做了之前写用 go 写的一个工具：https://github.com/yuekcc/picar。picar 是一个整理照片的工具，主要功能就是遍历目录中所有
照片文件，然后读出其 exif 数据，安装 exif 记录的时间日期进行整理。比如一个照片（.jpg 文件）拍摄于 2021年12月30日 12:30:45，则整理
到 <pwd>/202121/prefix_20212130_123045.jpg。

功能非常简单，可以分为几个部分：

1. **处理命令行**
2. **遍历指定的目录**，没有指定就使用当前目录
3. **遍历目录所有文件**，如果是照片文件，尝试**获取 exif 数据**，然后按上面的需求，**重新（移动）命名文件**

为了提高效率。go 实现的版本使用了 `gorutinue`。

## 上手感受

picar-rs，代码可以在 [yuekcc/picar-rs](https://github.com/yuekcc/picar-rs) 找到。目前已经实现基本功能。

就我写的这点代码来看，感受最强烈的就是 rust 一阵 functional 味道。我的工作语言是 js，对于 .forEach、.map 这种 api 就有一种相当熟悉的感觉。
另一点则是视觉上的感受，全屏看下来，非常多的 `< ... >`。rust 有一些设计就不容易想明白，比如 `String` 和 `&str` ，`Path` 和`PathBuf` 分不清。
我相信这些都有他们存在的理解。编程语言的设计，应该说软件的设计从来都是一个演进的过程，其中的一些设计必然有它的历史背景。

rust 的工具算是比较成绩，毕竟是一门新近出现的编程语言，没有历史包袱。配合 rust-analyser、clippy 可以直接上手写代码了。我也是在了解一些基本语法后，就
直接上手写 picar-rs。先写一个能工作的 demo，再重写一个设计更合理的实现。

一些场景 rust 的代码其实更简洁。比如下面的代码。

```rust
// rust
// 获取目录下所有文件
//
fn read_dir(dir: &Path) -> Vec<PathBuf> {
    let entries = dir.read_dir().expect("not a directory");
    entries
        .flatten()
        .filter(|it| it.path().is_file())
        .map(|entry| entry.path())
        .collect()
}
```

相应的功能，使用 go 实现： 

```go
// go
// 取得文件列表
//
func (t *Task) getFileList() ([]string, error) {
    log.Println("读取目录：", t.dir)

    items, err := os.ReadDir(t.dir)
    if err != nil {
        return nil, err
    }

    itemsLen := len(items)
    result := make([]string, itemsLen)
    for i := 0; i < itemsLen; i++ {
        item := items[i]

        // 忽略子目录
        if item.IsDir() {
            continue
        }

        result[i] = filepath.Join(t.dir, item.Name())
    }

    return result, nil
}
```

如果熟悉 java stream api 的朋友，看到 rust 的实现也会比较熟悉。“这就是函数式编程嘛”。go 的代码则更普通，而且非常普通，
基本没有用到什么 go 独有的特性。这也是 go 这门语言的特点，语法比较平淡原始。

### 我认识的函数式编程

js 是一种多范式的编程语言，有 oo，有函数式风格，也有命令式风格。 我所理解的函数式风格：面向表达式、编写纯函数，关注副作用。

主流的编程语言或多或少都可以实现面向表达式编程，编写纯函数更像是一种代码实践。而关注副作用这点，很多语言就不好实现。

比如 js 中，object 是一种复杂类型，js 引擎本身并不保证一个 object 对象的内部的不可变性。对象内部的可变性，在多线程背景下，会引
数据竞争问题，所以需要用户额外的处理。通常是使用锁实现。

js 是单线程执行引擎，在 js 中并没有特别强烈的对于锁的处理需求。但在 java、c++ 这类语言中，只能依赖用户自己实现多线程背景下的数据安全。
可是多线程编程也是会引入一系列难题。这些都是难点。

rust 则是通过生命周期、借用、引用、移动来解决多线程并发难题。这也是 rust 在没有 gc 参与的情况实现内存管理的方法。代价就是 rust 的编译的速度是真的慢。

## 小结

rust 应该比 c++ 要简单一些的。语法有点不太适应，生态也慢慢做起来了。性能、静态编译支持也是卖点。后面我也会花更多时间学习 rust。

rust 有目前最好的 wasm 工具链。至于为什么？**always bet on js and wasm**。

---

2021年12月20日
