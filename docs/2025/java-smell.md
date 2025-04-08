# 什么是 Java 味，是一种对 javaer 的歧视吗？

原文地址：[https://v2ex.com/t/1123118#reply94](https://v2ex.com/t/1123118#reply94)

## lelelelelele

_2025-04-03 14:26:50 +08:00_

在 V2 等平台常看到“写代码一股 Java 味”的调侃，甚至带有歧视意味，说实话，一直很不理解这种调侃？

## vincentWdp

_2025-04-03 14:29:22 +08:00_

有种三天斋戒, 沐浴焚香, 登泰山之巅, 祭祀天地, 就为了把一枚硬币翻个面的感觉.

## ifsclimbing

_2025-04-03 14:29:36 +08:00_

喜欢过度设计

## wxw752

_2025-04-03 14:31:05 +08:00_

作为一个老 jvaver ，我倒是挺能理解的

## codepark

_2025-04-03 14:31:18 +08:00_

针对的不是语言么，为啥会到人这一层。

## hwdq0012

_2025-04-03 14:31:41 +08:00_

我的.net 项目被 java 接手后，他来问我

a?.b?.?c 是什么意思，我只好向他解释

if(a!=null)

if(b!=null)

     if(c!=null)

        return c;

     else return null;

esle return null;

else return null;

## Bazingal

_2025-04-03 14:32:12 +08:00_

大概是过度面向对象吧

## wyntalgeer

_2025-04-03 14:32:15 +08:00_

过度封装过度设计

## adoal

_2025-04-03 14:33:29 +08:00_

@hwdq0012 呃，应该是 a.b != null 、a.b.c != null 和 return a.b.c 吧

## X0V0X

_2025-04-03 14:34:31 +08:00_

我的直观感受就是一个函数能解决的事，非要弄个对象出来，甚至再继承一下

## hwdq0012

_2025-04-03 14:35:03 +08:00_

@adoal 是的，我想说的就是这个，我已经两年没写 c#了（逃

## tpeng9240

_2025-04-03 14:38:42 +08:00_

来公司写了几天 python 了，确实比 java 爽，小服务，脚本语言足够了

## niboy

_2025-04-03 14:42:10 +08:00_

我记得搞 spring 的时候，非得搞很多层.....

## hidemyself

_2025-04-03 14:42:45 +08:00_

一定要依赖倒置

## Bazingal

_2025-04-03 14:44:43 +08:00_

@hwdq0012 #5 这个例子跟 java 味没什么关系吧，非要举例，应该是明明 C#有 Properties 了，还非要自己写 get/set

## lelelelelele

_2025-04-03 14:49:19 +08:00_

@hwdq0012 这个应该是别人不懂 c#的语法吧？

## hwdq0012

_2025-04-03 14:49:55 +08:00_

@Bazingal 在 c#的角度来看 java 味是没什么语法糖，啰嗦，什么都是类。但其他语言不是只有 class ，java 尝试其他语言的时候会把只有 class 的这种设计套到其他语言上，写出 java 味的代码

## adoal

_2025-04-03 14:51:13 +08:00_

@Bazingal nullable type 的语法糖

## foolishcrab

_2025-04-03 14:51:46 +08:00_

很多人喷不到点上，比如说啥文件夹嵌套之类的，这根本都不是事。

但是过度封装过度抽象确实是广泛存在的问题

## jackwaycn

_2025-04-03 14:51:53 +08:00_

调侃归调侃，歧视的人指定有问题的，哪有完美的语言呢

## hwdq0012

_2025-04-03 14:52:35 +08:00_

@lelelelelele 在 c#的角度来看 java 味是没什么语法糖，啰嗦，什么都是类。但其他语言不是只有 class ，java 尝试其他语言的时候会把只有 class 的这种设计套到其他语言上，写出 java 味的代码

## gxm44

_2025-04-03 14:52:55 +08:00_

主要是吐槽过度设计吧

## lyxxxh2

_2025-04-03 14:53:29 +08:00_

```Python
class User:
    def update_freeze_at(self, user_id, freeze_at):
        user = self.get_user_by_id(user_id)
        user["freeze_at"] = freeze_at

    def update_output_time(self, user_id, output_time):
        user = self.get_user_by_id(user_id)
        user["output_time"] = output_time

    def by_person_id_get_index(self, person_id):
        for index, user in enumerate(self.local_users):
            if user["id"] == person_id:
                return index
        return None

    def add_single_number(self, user_id, single_number):
        user = self.get_user_by_id(user_id)
        user["single_numbers"].append(single_number)

    def add_single_good_num(self, user_id, single_good_num):
        user = self.get_user_by_id(user_id)
        user["single_good_num"] += int(single_good_num)

    # 更新用户属性
    def update_attributes(self, user_id, attributes):
        user = self.get_user_by_id(user_id)
        user["attributes"] = attributes

    # 更新用户reids特征
    def update_reids(self, user_id, reids):
        user = self.get_user_by_id(user_id)
        user["reids"] = reids
```

```python
cameras = config.get("cameras")
camera = find(cameras, lambda v: v["ip"] == video["camera_ip"])

if camera["type"] == "good_num":
    method = self.good_num_draw
    if self.is_show:
        method = self.good_num_draw_show
elif camera["type"] == "cash":
    method = self.cash_draw
    if self.is_show:
        method = self.cash_draw_show

id = 0

while True:
    ret, frame = cap.nextFrame()
```

有 java 味吗?

不过我可没写过 java 。

## yooomu

_2025-04-03 14:56:23 +08:00_

其实就是歧视，但这也不是无中生有，我有个同事就喜欢随便写个 service 都要整个接口实现下。我说这样冗余太多，看代码费劲，需要抽象时再用接口重构也不费事，他说我大家都这么写，说我是“众人皆醉我独醒”。那我也只能顺从

## wetalk

_2025-04-03 15:03:24 +08:00_

本质上就是 doNet 、Python 等之流，对他们熟悉的语言，在国内不能占据生态位，从而迁怒于人而已。

至于为什么没能占据 Java 的生态位呢，当然是 Javaer 的问题啦

## crackidz

_2025-04-03 15:05:27 +08:00_

先别管有没有必要，先把模式设计板出来，也别管代码是不是简洁高效易理解。最后要么重新推翻，要么变成屎山～

## errorMsg0xff

_2025-04-03 15:09:18 +08:00_

@yooomu 确实，很多情况其实都不要接口

## lelelelelele

_2025-04-03 15:13:14 +08:00_

弱弱问一句，大家对设计模式有什么看法，平时也会用，而且在某些场景下觉得还是挺好用的。

## AlexHsu

_2025-04-03 15:24:48 +08:00_

我觉得吧 你可以从 Initializer Processor Manager Holder Component Factory Handler Interceptor Filter Listener Adapter Resolver Builder Validator Strategy Context 。。。。这些地方吐槽 java 还有意义

要是从语法糖角度你可以吐槽任何一门语言 包括 c c++ pascal 这些老东西

## yooomu

_2025-04-03 15:25:48 +08:00_

@lelelelelele #27 是好东西，但其实也是为了弥补 java 语法抽象能力不足的问题。但写业务代码，那么多设计模式，常用、实用的也就策略模式、责任连模式，不然看到那种一个方法几百行的 if else 真的头大。有些人滥用设计模式才是大问题，十几行的核心代码能整出好几个类

## aboutier

_2025-04-03 15:31:48 +08:00_

人红是否多，windows 也经常被吐槽， 奈何别人占有率高得可怕。所以才有那么多人嘲笑印度阿三。

## lyer5

_2025-04-03 16:43:46 +08:00_

@hwdq0012 难道不是后者更易读清晰？

## hwdq0012

_2025-04-03 17:03:08 +08:00_

@lyer5 class Adder { int add(int a, int b) { return a + b; } }

这样看起来只有 javaer 觉得更清晰吧

## proxytoworld

_2025-04-03 17:12:04 +08:00_

java 味=xxx/com/aaa/bbb/src/main/

创建这样一大串的目录，很抽象

## Ghrhrrv146

_2025-04-03 17:50:32 +08:00_

@yooomu #29 设计模式本质就是狗皮膏药，用得越多说明语言/架构问题越大

## collery

_2025-04-03 17:55:36 +08:00_

一群写脚本语言的把

## lyer5

_2025-04-03 17:57:13 +08:00_

@hwdq0012 我说 a?.b?.?c 不易读，你给我发 Adder ，这不就是无脑黑吗

## wolfie

_2025-04-03 18:02:03 +08:00_

@Ghrhrrv146

设计模式是，特定场景最优解之一，并且提供统一了命名。

看不懂设计模式，说明代码理解差。

## hwdq0012

_2025-04-03 18:06:52 +08:00_

@lyer5 我哪知道你在回复哪一楼 ，我以为你回复的是#16 楼

a?.b?.c? options chain 不是 c#独有的功能，用过的人一眼懂，而且表达式比那几行 if 不简洁很多，养成习惯更是告别了空指针错误

## laikick

_2025-04-03 18:10:45 +08:00_

是阿里味 国内互联网公司被阿里这家毒瘤老中公司害惨了

## wu00

_2025-04-03 18:14:09 +08:00_

面向对象的语言都差不多，java/c# 封装继承多态，你单人项目不做任何设计一把梭也是可以的

多人开发的项目中没有那些”过度设计“中间堆屎可能都堆不动

## seansong

_2025-04-03 18:24:07 +08:00_

总觉得 java 程序员有种说不出来的根深蒂固的思想，而且总以自己语言的思想去思考或者要求别人，另外就是过度设计、框架化太严重，大概就这些吧

## wysnxzm

_2025-04-03 18:31:02 +08:00_

Erich Gamma 在其博士论文中进一步探索设计模式，随后与 Richard Helm 、Ralph Johnson 、John Vlissides （合称“四人帮”，GoF ）合作，系统整理了 23 种面向对象设计模式。1994 年，GoF 的经典著作《设计模式：可复用面向对象软件的基础》出版，标志着设计模式在软件工程中的体系化与标准化

Java 语言正式发布于 1995 年 5 月 23 日

## jqtmviyu

_2025-04-03 18:34:41 +08:00_

@hwdq0012 #37 对, js 也有, 可选运算符.

## hwdq0012

_2025-04-03 18:36:13 +08:00_

@jqtmviyu js, ,ts, kotlin ，ios swfit 都支持

## tommyzhang

_2025-04-03 18:56:32 +08:00_

是一种无知但又无耻的愚蠢

## xiao17

_2025-04-03 18:57:12 +08:00_

@lyxxxh2 类型都没有，无味

## Maboroshii

_2025-04-03 19:04:08 +08:00_

只会被引用一次函数也要搞几个设计模式封装一下，函数名还特别长，看 java 转 go 同事写的代码，深深的被震撼到。

## realpg

_2025-04-03 19:22:58 +08:00_

@hwdq0012 #20

恨不得一个 hello world 都给你整出个 handler provider 就是 java 人了

## chenqh

_2025-04-03 19:31:02 +08:00_

@lyxxxh2 你是一个文件一个类吗?

## zizon

_2025-04-03 19:53:33 +08:00_

可能因为即使不懂 Java 对于所谓的 Java 味代码都能一眼看出是干什么的从而指点一下吧,不像 rust 之类的学个三五年才敢写基本的双向链表.

## liprais

_2025-04-03 19:54:57 +08:00_

没做过复杂项目呗

## iyaozhen

_2025-04-03 21:11:26 +08:00_

@codepark 恰恰针对的就是人

## azraeljack

_2025-04-03 21:32:20 +08:00_

@yooomu #23 我自己感觉写接口的话比较好写单测吧，尤其是 services 之间有依赖关系的时候。当然要是不写单测是无所谓了（逃

## Bingchunmoli

_2025-04-03 22:17:59 +08:00_

@yooomu 主要是还有一个问题不是人上来就会用的，只能从简单的需求过度封装去理解设计模式然后才可以灵活使用到该使用的位置，但是人太多参差不齐有的只是为了用而用（比如简历好看）。那就没办法

## james122333

_2025-04-03 22:20:00 +08:00_

你凭良心讲这不是很贴切吗 一堆设计模式不过是因应产生 也只有爱写的会觉得设计模式好 事实上 java 也可以不那么写 计算机的世界没有什么是不可以加一层转译的 等遇到了再转译不迟 也不会增加多少複杂度

## james122333

_2025-04-03 22:27:14 +08:00_

这有个词叫无招胜有招 见机行事以符合上层脑热想到的 整成 java 那样无法应对千变万化的需求的 光封装可视就搞死人了 这也是框架坏处

## levelworm

_2025-04-03 22:43:50 +08:00_

getter setter?

## Leon777

_2025-04-03 22:57:03 +08:00_

没见过复杂的业务逻辑又只会套培训班的模板确实会觉得 java 啰嗦的毫无必要，只有重业务逻辑的项目加经验丰富代码风格优秀的开发人员才能发挥 java 的优势

## agagega

_2025-04-03 23:00:13 +08:00_

Javaer 就偷着乐吧，Java 味起码还是个言之有物的批评。C++这边，任何 C++新闻都能遇到和内容完全无关的评论，如 C++98 哥、不如 Rust 哥、大道至简哥、花里胡哨哥、纯 C 哥，相比之下 Java 黑太有水平了 🤣

## YYYeung

_2025-04-04 00:47:41 +08:00_

不面向对象，是无法管理多人合作的项目的

面向对象的精髓就是：「对象」就是打工人，随时可以被替换

## YYYeung

_2025-04-04 00:51:14 +08:00_

@YYYeung 之前我也觉得 Java 很啰嗦，后来写着写着发现还得是 Java 那套；兜了一个圈，发现归宿还是「 Java 味」

## herozzm

_2025-04-04 02:31:22 +08:00_

因为 javaer 的复杂或者循规蹈矩的绕来绕去的写法为大家所不齿，明明一句能搞定的事情在 java 下面干几十行代码，这不是歧视，而是出于人类趋向简洁明了的工作尊重

## james122333

_2025-04-04 05:12:12 +08:00_

@YYYeung

并不是 达不到你要的效果 有很多特性会缩限被替换的可能性 尤其是用框架类的更是如此 就算有解法也是非常弯曲 也要多写很多东西

## aptupdate

_2025-04-04 06:27:00 +08:00_

@hidemyself

## sketcherly

_2025-04-04 11:10:26 +08:00_

作为一个 javaer ，我有时候也 js 的时候也感觉有 java 的习惯，这大概就是 Java 味吧

## jeesk

_2025-04-04 13:40:29 +08:00_

@levelworm 黑 getter/setter 最没有水平。 甚至连门都没入。

## jeesk

_2025-04-04 13:50:26 +08:00_

没啥意思， 99%的人都没什么拿得出手的项目，还天天吐槽， 我基本上当傻子看， 反而我喜欢看尤大吐槽，因为大佬是亲自参与设计的， 亲自参与设计才知道有什么坑。

## laikick

_2025-04-04 14:07:35 +08:00_

@jeesk 可是 vue 的工程化也不如 react 的啊

## nananqujava

_2025-04-04 15:02:55 +08:00_

@yooomu #23 是的 ,我遇到很多选手都这样, 很死板, 感觉是学会一个套路用熟悉了, 这样写就能跑起来, 但没深究为什么这么写,

## jeesk

_2025-04-04 16:47:10 +08:00_

@laikick

按照你这么说那 react 还不如直接写 html 呢， 直接写 html 没依赖呢。 无论怎么说都能赢。 只要你的角度好。

## xiaohupro

_2025-04-04 17:09:52 +08:00_

我以前写 Java 也觉得非要搞这么多类和接口干啥，传参几个参数能解决的事情非要封装为一个类，但是当我工作多年后，我理解了，当一个项目比较大时，或者后期拓展的可能性大时这种前期所谓的“Java 味”到时候会让你拓展和维护更加舒服一些，当然了这只是我工作多年后的一些感受，如果项目本身就不大，而且开发完后期大概率不会去拓展什么的哪个顺手用哪个，像我自己的项目有一些就是用 Python 写的，写小程序是用 Node.js 或者云函数写，我觉得还是看项目规模和具体的后期拓展性

## levelworm

_2025-04-04 20:18:29 +08:00_

@jeesk #66

我错了我错了。。。

## auh

_2025-04-04 21:23:13 +08:00_

八股文就是 java 味儿

## kakki

_2025-04-06 09:21:04 +08:00_

给每一个类都要设计一个接口，给每一个人找一个爹

## Kaiv2

_2025-04-06 11:56:53 +08:00_

后面出现的语言多了一些语法糖，Java 那几年更新又比较慢。学习了新语言的开发者受不了 Java 的“繁琐”然后就吐槽了起来

## jackOff

_2025-04-06 19:19:22 +08:00_

java 的基础包难用的一笔

语法又臭又长

占用内存高

似乎做什么开发都是天地大同 spring 起手

安卓原生开发这玩意 gradle 地狱世界闻名

框架太重，配置太多太繁琐

数据库 orm 设计花样太多，应该让这种东西尽可能归于底层，减少程序员乱七八糟的个性发挥

滥用注解，debug 地狱

救了太多垃圾程序员导致屎山代码层出不穷，要感谢培训班和八股文，java 的培训资料是全网最泛滥的

## LitterGopher

_2025-04-06 20:04:36 +08:00_

调侃一下不停正常的么?

比如说到 Python 调侃一下培训班很多,

说到 Rust 调侃一下重写一切,

说到 Golang 调侃一下丑陋的 if err.

## dragondove

_2025-04-06 20:42:56 +08:00_

@lelelelelele 设计模式是好东西，好到一些语言专门把特定的模式简化到了语法设计上。但是要避免做啥都上设计模式的思维。java 8 引入 lambda 之后可以考虑部分设计模式使用 lambda 编写来简化代码（比如策略模式可以是 Map<TypeEnum, Function<Input, Output>> strategies;）

设计模式其实在其他语言上也非常普遍，我不知道为什么很多人说的好像设计模式是垃圾一样。

我举几个例子：

1. python 语法上直接支持装饰器模式（函数装饰器），js 也有对应提案

2. 迭代器模式不用多说，增强 for ，现在各种语言支持的函数式 map 、enumerator 之类的东西

3. 观察者模式，响应式库都是这套，流式数据处理也一般需要观察者模式

4. 单例模式，kotlin/scala 直接引入 object 来支持（当然也是为了万物皆对象，摒弃 java 的 static ）

5. 代理模式，kotlin 直接支持 by 委托

6. 建造者和工厂，现在有些语言没有构造器，习惯上手写 builder 的很多

## lyxxxh2

_2025-04-07 09:14:10 +08:00_

@chenqh

是啊,差不多每个文件都是一个类

## chenqh

_2025-04-07 09:44:49 +08:00_

@lyxxxh2 你有没有觉得,这样 import 很多,很累吗?

## InkStone

_2025-04-07 09:52:09 +08:00_

@dragondove 设计模式和基于类继承的那一套设计模式实现是两回事，很多人其实混淆了两者——大多数时候被喷的都是后者。

## qocja

_2025-04-07 09:59:22 +08:00_

人多，尤其低水平的人多。另外就是糟糕的抽象对读代码的人来说很痛苦，工作中遇到的这种代码很多都是 javaer 写的，所以形成刻板印象了。

## lyxxxh2

_2025-04-07 10:10:16 +08:00_

@chenqh

没觉得啊,我也就 20 行 import 罢了。

import json

from service.trakcers.cash_tracker import CashTracker

import time

from service.helper import set_max_person_id

import os

import redis

from .base_handle import BaseHandle

import numpy as np

from service.websocket import (

    websocket_connection,

...

## pvnk1u

_2025-04-07 11:25:39 +08:00_

只写过 java 的人应该是感觉不到的，我学了 kt 之后才发现 java 到底有多么脱裤子放屁又语法孱弱

## chenqh

_2025-04-07 11:28:51 +08:00_

@lyxxxh2 20 行已经够多了,你多少个文件??

## chenqh

_2025-04-07 11:29:48 +08:00_

@lyxxxh2 我快 600 个 PY 文件

## lyxxxh2

_2025-04-07 12:01:59 +08:00_

@chenqh

tree -a src -P "\*.py" | grep -c "\.py$"

39

## chenqh

_2025-04-07 12:56:29 +08:00_

@lyxxxh2 你一个项目怎么才这么点 py 文件?

## lyxxxh2

_2025-04-07 13:11:03 +08:00_

@chenqh

不少了,全是手写的。

改来改去,改了几个月了。

## chenqh

_2025-04-07 13:21:28 +08:00_

@lyxxxh2 我也是手写的啊.

## niubiman

_2025-04-08 14:10:11 +08:00_

@wetalk java 实际上说 javaer 写什么都是一股 java 味的主流并不是 dotneter, 因为 c#是 java 的近亲, 是一个味也不奇怪, 但是这个味串到 python 或者 go 这种语言上去了, 那就很难闻了

## niubiman

_2025-04-08 14:17:49 +08:00_

@pvnk1u 确实, java 的语法极其呆板, 像个冥顽不灵的老古董

## sankooc

_2025-04-08 16:54:24 +08:00_

Java 最大的问题是用的人太多

## gloeaerris

_2025-04-08 17:44:59 +08:00_

看网上的教程就能感觉到，比如讲解某一个技术，上来就丢代码，也不说使用 Java 实现如下，搞得好像大家都用 Java 开发一样，最常见的就是例如 CSDN 上一个讲队列实现的教程，上来直接抛生产者和消费者的 Java 代码，非 Java 的看到这种只能浪费时间关掉网页再去找别的文章，因为没有原理讲解，就是直接丢代码（搜索引擎为什么没有屏蔽某个网站结果的功能，比如彻底屏蔽 CSDN ，浏览器插件还是太麻烦，而且会造成 js 冲突），其他像写 C 和 C++的教程一般都会说一句，使用 C 语言实现如下之类的，Java 的开发们才不屑于说这种提示，所以 Java 开发写的教程我都懒得看，又臭又长的破代码，我只是想学这个技术，不是想要一堆臭代码，对小白就更不友好了，还得花时间识别是什么语言实现，虽然可能就几秒钟，但那也是时间啊

---

- 2025 年 4 月 8 日，转载
