# go 快速入门

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

go 是一种强类型，具有自动内存管理、高并发支持的编程语言。go 语言实现的软件
可以编译为独立的执行文件。目前 go 语言大量应用于云服务、微服务、中间件的场景下。

>私货评价：
> 
>go 语言的语法算是比较简洁，容易上手。特别是有 c/c++ 学习经验，会感觉
>特别熟悉。go 语言初始团队就有 c 语言的创始人。性能虽然比不上 java，但总体
>没有落后太多。而且在真实项目中，高性能的代码往往会使用 c++ 实现一遍又一遍。
>
>目前来看，go 和 java 大部分应用场景是重合的。java 最大优势是几乎覆盖了所有应用场景，而且有成熟的解决方案。而 go
>因为是编译到二进制文件直接执行，在内存使用、启动、软件体积方面就比 java 有优势。在容器化逐渐盛行的今天就变得更有吸引力。
>
>go 1.18 将会启用泛型支持，部分场景下性能也会有所提升。相信这对于 go 语言进入云以外的场景有帮助。
>
>go 语言另一个对手是 rust。rust 自诞生就面向更低级别的系统层应用开发，比如操作系统、编程语言、浏览器等。go 侧重于低层之上
>的应用开发。

## 语言元素

```go
// package 关键字声明这一个 main 包
// go 语言项目中，应该只有一个 main 包
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

原始类型：

- 空值 nil
- 整形数值：int（取决于操作系统）、int8、int16、int32、int6、uint8、uint16、uint32、...
- 浮点数值：float32、float64
- 字节：byte (等价于 uint8)
- 字符串：string
- 布尔值：boolean

引用类型：

- 数组 array
- 切片 slice
- 字典 map
- 结构体 struct
- 函数
- 指针
- 接口（interface）
- 通道 (channel)

引用类型是指，如果一个将一个引用类型赋值给一个变量，这个变量实际拿到的一个内存地址，数据本身并在变量上。

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

>题外：**变量尽快初始化**本身也是一种比较好的实践

go 语言，如果不在声明变量设置初始值，将会自动使用“零”值进行初始化：

- 整形数值：`0`
- 浮点数值：`0.0`
- 字节：`0`
- 字符串：`""`
- 布尔值：`false`

go 语言中声明引用的类型就有几种不同的写法：

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
// go 语言中 function is first class，函数名可以作为变量使用
func sayHello() (string， error) {
  return "hello, world", nil
}
```

TBD

----
2021 年 10 月 1日
