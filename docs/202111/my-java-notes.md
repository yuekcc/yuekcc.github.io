# 我的 java 笔记

是的，我又双开始学习 java。这次应该要认真点。

[TOC]

## 我印象中的 java

要说我印象中的 java，必须是这些关键字：

- 体积超大的 jdk
- 巨长的语句
- 一板一眼，语句总是一句一句的
- 看着好像没有什么用的 java 标准库
- 有地球上最强大的 vm
- 生命力强、受欢迎
- 没有 ide 写不出代码
- 吃内存

希望通过最近的学习，可以改变我的固有印象。

## 上手

### 安装 jdk

jdk 可以在 https://www.injdk.cn/ 下载。学习阶段推荐使用最新的 LTS 版本。Windows 下就一路回车大法，然后
就可以直接使用了。其他操作系统找文档看吧。

### 用 class 组织代码

java 总是用 class 来组织代码，一个 class 可以包含多个方法和多个静态方法。Java 程序的入口一般是一个静态的 `main` 方法，方法
签名：`public static void main(String[] args)`。这个方法需要放置到一个 `public` 的 `class` 中。

```java
package space.lambdadriver.demo;

public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world");
    }
}
```

将上面的代码保存为 `Hello.java`，打开 shell，执行下面的命令就可以看到运行效果：

```sh
$ java Hello.java
Hello, world

```

我用的是 jdk17，可以直接执行 java 源码文件。一般情况下 java 工程是先用 `javac` 命令进行编译，然后由 `java` 命令执行。
实际项目中，java 都是使用 maven 或 gradle 进行管理。

### javac 命令

javac 可以将 java 源代码（.java 文件）编译为 class 字节文件（.class），供 jvm 执行。常见命令参数：

- `javac -d <目录> HelloWorld.java` 编译 java 源代码文件，并将生成的字节码放到 `<目录>` 里。如果代码里包含 `package` 语句
会按 `.` 分割后，放到多级目录中。
- `javac -g` 生成调试信息
- `javac -version` 打印版本信息

比如上面的例子，可能通过下面的命令生成字节，并保存到 `lib` 目录下：

```sh
$ javac -d lib Hello.java
$ ls lib/space/lambdadriver/demo/
Hello.class
```

### java 命令

java 命令用于执行字节码。常见参数：

- `java -version` 打印版本号
- `java [-options] class [args...]` 执行类
- `java [-options] -jar jarFile [args]` 执行 jar 包
- `java -classpath <目录> <包名>.<类名>` 执行特定的类

如上面的例子，字节码已经编译到 `lib/space/lambdadriver/demo` 目录下。用 java 命令执行这个字节码，可以输入下面的命令：

```sh
$ java -classpath lib space.lambdadriver.demo.Hello
Hello, world
```

### 多文件工程

首先是创建两个源代码文件：

`Words.java`：

```java
package space.lambdadriver.demo;

public class Words {
    public String hello() {
        return "Hello world for Words Class";
    }
}
```

`Hello.java`:

```java
package space.lambdadriver.demo;

public class Hello {
    public static void main(String[] args) {
        var words = new Words(); // 创建 Words 对象
        System.out.println(words.hello()); // 调用 hello 方法
    }
}
```

由上面的代码可以看出在 `main` 方法中创建了一个 `Words` 对象，并调用了其中的 `hello` 方法。

编译并执行这个 java 程序，可以执行这些命令：

```sh
$ javac -d lib Hello.java Words.java
$ java -classpath lib space.lambdadriver.demo.Hello
Hello world for Words Class

```

估计是习惯原因吧。javac 与 c/c++ 中的 cc 对应，需要用户指定相关的源代码文件，javac 才能找到相应的符号。如果需要编译大量源码和依赖第三方包
的话，相当麻烦。

>与 js 的构建工具不同，javac 并不会按 import 语句自动去引入相应的文件。go 则使用一个约定来解决这个问题，一个包对应一个目录，编译时可以自动查找文件。

在源码组织上。java 工程更习惯将同一个 package 源文件放到同级目录吧。比如，上面的示例，包名为 `space.lambdadriver.demo`，在保存源码文件时，
一般会放置到 `space/lambdadriver/demo/` 这个目录下。

多文件，多二方三方依赖时，应该使用构建工具。java 生态中最为流行为有：gradle、maven。我这里只记录 maven 的一些基本使用。gradle 在我家的网络下
实在用不起来。

### maven

maven 是由 apache 开发的一个 java 项目管理工具，支持依赖管理、工程构建等功能。官网：http://maven.apache.org/

maven 的依赖管理是基于中心式的仓库实现（和 npm 类似的设计）。网络环境不怎么好的情况下，最好配置一个镜像。

入门可以看官方的 [5 分钟介绍][maven-in-five-minutes]。

[maven-in-five-minutes]: http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html

在 maven 中，一个 java 项目使用 `pom.xml` 来描述。`pom.xml` 是包含了项目的包名、版本号、依赖项目、构建配置。

#### 1. 创建项目

执行下面的命令，会生成一个基本 maven 工程。maven 会创建一个 `my-app` 的目录，然后在里面生成一些基本的文件。

```sh
$ mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

maven 生成的工程是一个 standard directory layout。这个目录结构的介绍可以看这个文档：

http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html

#### 2. 构建

```sh
$ mvn package
# .....
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  2.953 s
[INFO] Finished at: 2019-11-24T13:05:10+01:00
[INFO] ------------------------------------------------------------------------
```

如果看到上面的日志，表示构建成功。

#### 3. 执行

执行依然使用的是 java 命令。不过，使用 maven 构建的项目，一般会打包为 jar 文件。一个 jar 文件实质上是一个 zip 压缩包。
编译的 .class 一般会统一压缩到 jar 文件中，方便分发。通过不同的插件，maven 也支持将依赖的三方包（一般也是 jar）压缩到
同一个 jar 文件中。

```sh
$ java -cp target/my-app-1.0-SNAPSHOT.jar com.mycompany.app.App # -cp 就是 -classpath
```

#### 更多 maven 命令

maven 围绕 build lifecycle 进行设计。对于普通用户，只需要记住几个命令就可以完成项目的构建和发布。

一个 build lifecycle 由多个阶段组成。目前 maven 中内置了三个 build lifecycle：`default`，`clean`，`site`。

`clean` 用于清理构建输出的文件，`site` 用于生成文档。重点是 `default` build lifecycle。

在 `default` 配置中，由上到下分别是：

- `validate` 检查项目信息
- `compile` 构建源代码
- `test` 运行测试
- `package` 打包（比如打包为 jar）
- `verify` 验证
- `install` 安装包到本地仓库，供其他工程使用
- `deploy` 构建结束，执行分发（比较分发到远程仓库）

maven 支持执行上面各种阶段中的其中一个，但是如果这个阶段是有上一级阶段的，会依次执行。比如执行 `mvn verify`，则
会按顺序执行：`validate` -> `compile` -> `test` -> `package` -> `verify`。

maven 的 build lifecycle 中的各个阶段分别对应不同的 `plugin:goal`。对当于每个阶段都会有不同的钩子
方便插件实现不同的功能。具体应该看官方文档：

http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html

TBA

----

2021.11.13 

