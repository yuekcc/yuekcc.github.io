# rust 快速体验

## 安装

使用 rustup 工具，crates 镜像设置为 rsproxy.io，工具链则选择 stable-x86_64-pc-windows-gnu。

### 问题

rust 有部分包使用了 ffi 得用现有的工具/库。比如 cargo-edit。使用这些包机器上需要安装 [mingw32-w64](https://www.mingw-w64.org/)。

mingw32-w64 官方分发的 gcc 还是 gcc8，而且还是 2018 更新。可以从 [winlibs](https://winlibs.com/) 下载较新的版本：gcc11。

所以 **windows 上还是推荐 msvc** 吧。除了体积大点，其他问题大概是没有的。

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

rust 的实现在 https://github.com/yuekcc/picar-rs 。目前已经实现部分功能。

就我写的这些代码来，rust 有强烈的 functional 风格。有些功能用到了，但还没有弄明白。比如 `String`、`&str` 分不清应用的场景，同样的
还有 `Path`、`PathBuf` 分不清。借用、移动算是有了一定的理解。毕竟工作语言是 js。

js 也有一股 functional 味道。想起前几天和一个 java 开发讨论函数式编程的事。虽然只是聊了下，可能感受到这位有 5年+ 经历的 java 开发是
多么不适应 functional 风格。

简单对比下 go、rust 的语法。rust 因为支持泛型，对于 iterator 有一套通用的抽象，这一点让我感到非常熟悉。我最喜欢的 f# 具有
这样的抽象，而且语法干扰更少。go 方面，则只能通过 for 循环实现。

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

### 题外

- go 1.18 开始也加入了泛型的支持，估计很快就会出现通用的序列操作函数库。
- 我所理解的函数式风格：面向表达式、编写纯函数，关注副作用。

rust 工具链目前已经比较完善了。lsp 服务器、lint 之类的也有相应的工具。ide 方面有 idea 的 rust 插件和 vscode 的插件。

rust 异步、并发安全也是卖点。这次是体验了一个 rust 的异步任务。rust 内置了 async、await。当然需要更多功能的话还是需要三方库。

rust 的代码，整体就是符号比较多。一是泛型参数多，二是生命周期的符号也多。

类型指导方式，变量声明的时候还是比较好使的。但不支持推导函数的类型。比起 f# 还是有点距离。但也已经减少了不少代码。

另外 rust 的编译的速度是真的慢。

## 后续

后面也是会花更多时间学习 rust。rust 最吸引我的地方就是可以协同 js。无论是 napi-rs 或者 wasm，rust 也是 js 最有力的补充。

---

2021年12月20日
