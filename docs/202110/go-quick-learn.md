# go 快速笔记

**下文中的内容不一定全部正确，学习 go 语言请参考官方文档**

golang 官网：http://go.dev

## 安装

windows 下直接到 https://golang.google.cn 下载安装就可以了，推荐直接下载
最新版本。

然后配置 goproxy。可以查看这里：https://goproxy.io/zh/ 或 https://goproxy.cn/

最新版本 go 工具链，已经默认启用 go module。

## 开始新工程

1. 在硬盘上找个地
2. `mkdir 工程目录`，目录一般取一些比较简单又体现核心功能的小写名称，如 `somepackage`
3. `cd 工程目录`
4. `go mod init 包名`，包名一般是域名+工程目录名，比如 `github.com/somepackage`

## 第一个工程

新建一个 main.go 文件，写入：

```go
package main

import "fmt"

func main() {
	fmt.Println("hello, world")
}
```

在 shell 中执行：`go run main.go` 就可以看到输出：

```sh
$ go run main.go
hello, world

$
```

执行 `go build` 就可以编译出执行文件。

go 是一种强类型，具有自动内存管理、高并发支持的编程语言。golang 实现的软件
可以编译为独立的执行文件。目前 golang 大量应用于云服务、微服务、中间件的场景下。

> 私货评价：
>
> golang 的语法算是比较简洁，容易上手。特别是有 c/c++ 学习经验，会感觉
> 特别熟悉。golang 初始团队就有 c 语言的创始人。性能虽然比不上 java，但总体
> 没有落后太多。而且在真实项目中，高性能的代码往往会使用 c++ 实现一遍又一遍。
>
> 目前来看，go 和 java 大部分应用场景是重合的。java 最大优势是几乎覆盖了所有应用场景，而且有成熟的解决方案。而 go
> 因为是编译到二进制文件直接执行，在内存使用、启动、软件体积方面就比 java 有优势。在容器化逐渐盛行的今天就变得更有吸引力。
>
> go 1.18 将会启用泛型支持，部分场景下性能也会有所提升。相信这对于 golang 进入云以外的场景有帮助。
>
> golang 另一个对手是 rust。rust 自诞生就面向更低级别的系统层应用开发，比如操作系统、编程语言、浏览器等。go 侧重于低层之上
> 的应用开发。

## 语言元素

```go
// package 关键字声明这一个 main 包
// golang 项目中，应该只有一个 main 包
package main

// import 语句用于导入外部包。这些包可能是内置在标准库中，也可以是第三方提供的
import "fmt"

// main 函数，传统的程序入口
// go 实现的软件，入口总是 main.main（main 包中的 main 函数）
// func 是声明函数的关键字，无返回值时，不用声明类型
// go 中的函数可以是包级别，也有对象级别（习惯叫对象的方法）
func main() {
  // 调用外部包中的函数
  // 外部包在习惯上，包名总是小写字母
  // 包中函数的外部可见性是通过大写字母开头来约定的，除函数，也可以 struct、变量、常量等
  // go 编译器会自动插入分号，所以大部分情况下是不需要写分号的
	fmt.Println("hello, world")
}
```

## 类型

- 空值 nil
- 整形数值：int（取决于操作系统）、int8、int16、int32、int6、uint8、uint16、uint32、...
- 浮点数值：float32、float64
- 字节：byte (等价于 uint8)
- 字符串：string
- 布尔值：boolean
- 指针： *int 之类
- 数组 array
- 切片 slice
- 字典 map
- 结构体 struct
- 函数
- 接口（interface）
- 通道 (channel)

~~引用类型是指，如果一个将一个引用类型赋值给一个变量，这个变量实际拿到的一个内存地址，数据本身并在变量上。~~

>关于 go 中的值类型及引用类型，我的理解：
>
>go 中的数据类型，大概可以分为引用类型和值类型。引用类型是指变量本身并不持有该数据，
>而是指向内存中的一个地址，最经典的就是 slice、map。处理器要取得这个变量的数据，起码需要两次或以上的内存操作。
>值类型是针变量持有数据本身，处理器只需要读取一次内存地址。
>
>在传入函数时，值类型是 clone 传入的，即传入函数内部时，复制了一次数据。而引用类型在传入函数时，是移动进去，
>由于 go 是没有不可变数据类型的，在函数内部对于该数据的修改会影响原有的数据。这也是带 gc 语言的常用处理方法，可以减少 gc 压力。


## 变量声明

go 中声明一个变量有两种写法：

- 声明一个变量，指定类型，不指定初始值：`var i int`
- 声明一个变量，并指定初始𠉊：`i := 32`

第二种写法算是一种语法糖。首先 go 具体有一定程度的类型推断能力，可以从 `:=` 右侧的语句推断出类型。

```go
var i int = 32
// 可以写为
i := 32
```

> 题外：**变量尽快初始化**本身也是一种比较好的实践。golang 中采用的后置类型的变量声明，官方说是可以解决一些 c 语言中奇怪问题，二是结合类型推导增加手感。

golang ，如果不在声明变量设置初始值，将会自动使用“零”值进行初始化：

- 整形数值：`0`
- 浮点数值：`0.0`
- 字节：`0`
- 字符串：`""`
- 布尔值：`false`

golang 中声明引用的类型就有几种不同的写法：

```go
// 数组
arr := [5]int{}

// 切片
slice1 := []int{}
slice2 := make([]int, 0) // 长度为 0 的切片
slice3 := make([]int, 5, 10) // 长度为 5，容量为 10 的切片

// map
m1 := map[string]string {
  "name1": "tom",
  "name2": "cat",
}

m2 := make(map[string]string)

// 指针
str := "hello, world"
p1 := &str // 取得地址

// 结构体
// 结构体需要先声明结构体
type Person struct {
  name string
}

p1 := &Person {
  name: "Tom",
}

p2 := new(Person)
p2.name = "Tom"

// 接口是一组方法的集合，不能实例化
type Say interface {
  say() string
}

// 函数
// 函数支持多返回值，特别是 go 的异常处理比较特殊，基本上使用后置的错误码
// golang 中 function is first class，函数名可以作为变量使用
func sayHello() (string， error) {
  return "hello, world", nil
}
```

## 函数

由上面的例子可以看出，golang 的入口就是一个函数。这点就比较接近 c 语言，至少与 java 的代码组织方式有明显区别。

函数声明，可以为分为一般场景、匿名函数、方法三种。go 语言的函数是支持闭包功能，可以捕捉函数外部的数据。

### 一般声明

大部分情况下，函数都是先声明后使用的。有一个需要注意，同一个包中，函数声明的位置、所在文件是无区别的

```go
// 声明 sayHello 函数
func sayHello(name string) (string， error) {
  return "hello, " + name, nil
}
```

golang 是带有 gc 的编程语言，在编译代码时，golang 会通过逃逸分析，决定函数内部声明的变量是放置在栈内存中还是堆内存中。所以
golang 是可以直接返回内部变量。

对于结构体，习惯上使用指针传入到函数中，这样会减少内存复制。golang 目前并没有提供 getter、setter 这种属性保持机制，因此在需要修改参数的
字段时多加注意。

### 匿名函数

匿名函数的用法就比较接近 js 中的写法

```go

func main() {
  // 一个函数内部声明另一个函数，并赋值给 sayHelloInner 变量
  sayHelloInner := func(name string) (string, error) {
    return "hello, " + name, nil
  }
}

var (
  // 全局声明了一个匿名函数，并赋值给 sayHelloGlobal
  // sayHelloGlobal 的类型就是 func(name string) (string, error)
  sayHelloGlobal func(name string) (string, error) = func(name string) (string, error) {
    return "hello, " + name, nil
  }
)
```

### 方法

方法是一种习惯叫法，一般是指对象自身带有函数。golang 通过支持方法的函数声明来支持面向对象编程范式。

```go
type Person struct {
  name string
}

func (p *Person) IntroduceMyself() string {
  return "Hi, I'm " + p.name
}
```

方法的声明区别于一般声明。方法中可以包括接收者部分。接收者类似于　java 中的 this。golang 通过接收者，可以访问自身的数据。
如果需要修改对象自身的数据，需要将接收者声明为指针类型。

## 并发

golang 是基于 mpg (machine - processor - goroutine) 实现的并发支持，是一种轻量级线程机制。并发也是 golang 比较重要
的特性之一。

golang 推荐使用 channel 来同步数据。channel 是一种内置的消息队列功能，分为只写、只读、读写三种基本类型，也可以配置
缓存大小。

启动一个 goroutine 只需要在调用函数时增加 `go` 关键字：

```go
go sayHello()
```

golang 的 runtime 会自行决定这个线程由哪个 cpu 上执行。

golang 通过 `select` 可以将各个 channel 组合为多通道的消息队列，让并发的流程更接近多消费者多生产者的通信模型。

## 错误处理

golang 没有采用异常作为错误处理的基础设施。异常会引入一些复杂的处理流程，这就与 golang 的简洁背道而驰。

>私货：不过 golang 的异常处理也被人诟病，因为内置的支持过于简陋。因为 error 往往只知道一个字符串提示，这就让程序无法实现一些
>错误处理。

golang 标准库中自带有一个 `error` 接口，实现 `Error() string` 方法则可以认为是一个错误。 golang 的函数调用如果返回了 error，
总是需要首先检查的。有点类似于 error first 的思想。

```go
func myHalt() (int, error) {
  return 0, errors.New('some error')
}

func main() {
  result, err := myHalt()
  if err != nil {
    log.Println(err)
    os.Exit(-1)
  }

  // no error and do something
}
```

## 标准库

常用的标准库：

- `fmt`
- `strings`
- `log`
- `os`
- `http`
- `sort`
- `bytes`

## 测试

go 自带一套测试框架。可以支持一般的单元测试，也支持性能测试。这里只介绍单元测试。

首先是文件名。go 对源代码文件的命名是一个约定。命名一般采用小写，编译器对于 `_xxxx.go` 这样的后缀会做一些特殊条件，可以达到条件编译的效果。

比如：`example_windows.go` 是针对 windows 操作系统的实现版本，`example_linux.go` 是针对 linux 系统的实现版本。还可以针对处理器实现条件编译。

go 的编译器，对于 `_test.go` 这种后缀的源代码文件，会认为是一个测试代码。执行 `go test` 命令将会执行测试。

单元测试是一个函数，以 `TestXXXXXXX(t *testing.T)` 函数签名。比如：

在 main.go 中，有一个函数： 

```go
// main.go
func hi() string {
  return "hi"
}
```

针对这个函数单元测试需要写在另外的文件中，如：`main_test.go`，具体实现就是：

```go
// main_test.go
func TestHi(t *testing.T) {
  result := hi()
  if result == "" {
    t.Fatal("should not be empty")
  }
}
```

---

- 2021年10月14日：增加库、测试；修改一些内容。
- 2021年10月3日：初稿
