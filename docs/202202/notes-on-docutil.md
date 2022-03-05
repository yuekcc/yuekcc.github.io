# docutil 开发笔记

docutil 是一个纯前端博客应用。通过 docutil 可以高效地部署一个网站，而且无需后台服务支持。

传统的静态网站生成工具，比如 hugo、hexo，用户需要先在本地生成 html 文件，然后才能部署。docutil 是完全运行在浏览器侧，仅需要一个 HTTP 服务。

用户按约定的目录编写 markdown 文件，导入 index.html 及 dist 目录下的三个文件即完成网站部署。文章从编写到最终上线，完全可以在浏览器上完成。

## 核心

docutil 源于一次“小作业”——使用 vanilla js 实现一个 docuify 的 clone 版。那次“小作业”的成果便是 [marknote][marknote-project]。演进到后面，想法慢慢就变成为使用 wasm 实现一个相同功能的应用。

[marknote-project]: https://github.com/yuekcc/marknote

docutil 核心是使用 rust + sycamore 实现的 markdown 渲染，页面路由处理引擎。样式使用了 unocss 的 css-in-js 版本。

sycamore 是一个纯 rust 实现的前端框架，具有 vdomless、响应式的特点。rust 是一门没有 gc 的编程语言，以安全、高性能、学习曲线徒著称。rust 着非常优秀的 wasm 工具链。通过 wasm-bindgen，rust 代码可以很方便地调用 DOM API、JS API。

## 代码量 pk：rust vs js

marknote

```sh
===============================================================================
 Language            Files        Lines         Code     Comments       Blanks
===============================================================================
 CSS                     4          269          221            2           46
 JavaScript              3          333          259           11           63
 SVG                     3            3            3            0            0
===============================================================================
 Total                  10          605          483           13          109
===============================================================================

```

docutil

```sh
===============================================================================
 Language            Files        Lines         Code     Comments       Blanks
===============================================================================
 Rust                    8          580          498            3           79
===============================================================================
 Total                   8          580          498            3           79
===============================================================================
```

docutil 比 marknote 多实现一个搜索的弹窗，大概 100 行代码，另外 rust 版本也写了一个配置 struct。在 js 中直接使用 `{}` 代替。毕竟 rust 是一种强类型的语言，先声明再使用。

虽然 docutil 本身复杂度不高，但是可以看出 rust 的表达能力并不比 js 低多少。

## 默认 unmutable，默认 move

rust 中默认是 move 语义。我理解是一个值会绑定到一个变量。变量可以声明为是否有权限修改这个值的数据。

比如声明一个 `String` 类型变量：`let s = String::from("hello, world")`。这时会将 `String::from("hello, world")` 这个函数的返回值绑定到变量 `s`，并且 `s` 对数据有只读的权限。如果需要修改数据的内容，则需要显式地使用 `let mut` 声明：`let mut s = String::from("hello, world")`。

move 又是如何理解。比如下面一段代码：

```rust
fn get_something() -> String {
	let result = String::from("something");
	result
}

fn main() {
	let a = get_something();
	let b = a;
	let c = b;
	
	println!("{} {} {}", a, b, c);
}
```

`get_somthing` 函数返回一个 `somthing` 字符串，先是绑定到 `a`，然后将 `a` 绑定到 `b`，再将 `b` 绑定到 `c`，最后在打印 `a`、`b`、`c` 的值。而事实上无法通过编译！

为什么是这样？这一点就是 rust 与其他编程语言最大的区别。特别现在流行的 java、js 这些语言。

将上面的代码改为 js，代码可以正常执行。

```js
function get_something() {
	let result = "something";
	return result
}

function main() {
	let a = get_something();
	let b = a;
	let c = b;
	
	console.log(a, b, c);
}

main(); // => something something something
```

从内存分配的角度就可以简单的理解这个问题。

首先 `get_something` 函数，返回了一个字符串对象，在 v8 的角度其实是返回了一个指针。这个指针指向堆内存中的一个地址，这个地址保存了 `something` 字符串。当函数赋值给 `a` 时，只是将这个指针复制了一次。当 `b` 赋值时，将 `a` 复制了一次；当 `c` 赋值时，又将 `b` 复制了一次。所以这些指针都指向了同一个内存地址。这就是 **copy 语义** 。

copy 语义会造成 **“一鱼多食”** 的局面。js 是单线程的系统，一般不会出现问题。在多线程系统中，比如 java，可能会造成数据竞争。

move 语义则是另一个处理方式，每次数据绑定是移动，将绑定到 a 的数据移动到 b，然后将绑定到 b 的数据移动到 c。这样可以保证数据事实上只是被一个变量持有。

move 语义的代码写起来也会比较啰嗦。在需要保持相同的多份数据时，唯有使用 `clone` 方法。所以原始类型，rust 也提供了 copy 语义支持，减少 `clone` 方法。原始类型主要就是数值、boolean 这些。

## debug

唯有 `console.log` 大法。

TBD
