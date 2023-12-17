# 上手 Mistral 8x7B MOE 模型

Mistral 8x7B 是一种混合专家模型，可以简单理解为一个模型集成了 8 个专业的 70 亿参数模型。据了解 Mistral 8x7B 每次回答会启用其中的 2 个专家模型来服务，回答时的整体参数水平大概处于 120 亿参数。

> 启用两个专家模型不是 140 亿参数，是因为有一些公共参数。

## llama.cpp

通过 llama.cpp 可以在没有 GPU 上机器执行 LLM 推理。我使用的是 llama.cpp b1644，后续版本也应该支持 Mistral 8x7B，之前的版本未知。考虑到机器的硬件水平，我使用的是量化后的模型 [mixtral-8x7b-instruct-v0.1.Q5_K_M.gguf]（[镜像][mixtral-8x7b-instruct-v0.1.Q5_K_M.gguf_mirror]）

[mixtral-8x7b-instruct-v0.1.Q5_K_M.gguf]: https://huggingface.co/TheBloke/Mixtral-8x7B-Instruct-v0.1-GGUF
[mixtral-8x7b-instruct-v0.1.Q5_K_M.gguf_mirror]: https://hf-mirror.com/TheBloke/Mixtral-8x7B-Instruct-v0.1-GGUF

需要注意的是使用 llama.cpp 提供的 main.exe 大概率会遇到命令行的编码问题，推荐使用 server.exe 访问 LLM。

### 启动

```
server -m D:\llm_store\mistral\mixtral-8x7b-instruct-v0.1.Q5_K_M.gguf -c 32768 -t 8 --log-disable
```

系统 prompt：

```
You are a helpful, respectful and honest INTP-T AI Assistant. You are talking to a human User. Always answer as helpfully and logically as possible, while being safe. Your answers should not include any harmful, political, religious, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information. You can speak fluently in many languages, for example: English, Chinese.You cannot access the internet, but you have vast knowledge, cutoff: 2021-09. You are based on LLaMA and Falcon transformers model, not related to GPT or OpenAI.
```

## 验证

这是的我提问题。

`please help me with a number puzzle. if 1+1=3,2+2=4,3+3=5, ..., 6+6=8, 7+7=9, then what is 9+9 in same pattern?`

题目中已经明显指出这个题目是一种数字谜语，主要考量的就是模型的推理能力。很不幸是的像通义千问、百川、讯飞星火都没有给出很好的答案。

三者都是通过官方的 Web UI 进行访问，理论上应该是这些模型的最强版本。

通义千问：

```
Based on the pattern given, for each consecutive pair of numbers, the sum is obtained by adding 1 to the first number and subtracting 1 from the second number. Therefore, following this pattern, 9+9 would be equal to 10-1, which is 9.

So, the answer to the puzzle is 9+9=10.
```

百川：

```
Based on the given pattern, each addition result seems to be one less than the sum of the numbers being added. So, if we follow this pattern:

1 + 1 = 3 (1 + 1 - 2 = 3 - 2)
2 + 2 = 4 (2 + 2 - 2 = 4 - 2)
3 + 3 = 5 (3 + 3 - 2 = 5 - 2)
...
6 + 6 = 8 (6 + 6 - 2 = 8 - 2)
7 + 7 = 9 (7 + 7 - 2 = 9 - 2)

We can apply the same logic for 9 + 9:

9 + 9 = 18
18 - 2 = 16

So, according to the given pattern, 9 + 9 would equal 16.
```

讯飞星火：

```
9+9=18

This is because for all numbers between 1 and 6, the sum of the two numbers in the pattern increases by 1. So for example, 1+1=3 (1+2) and 2+2=4 (2+3). Similarly, for 7+7=9 (7+8), we get 8+8=16. The pattern then continues with 9+9=18.
```

同样的问题，我也问了 GPT 3.5 Turbo，通过 API 方式访问的 GPT 3.5 Turbo 模型。GPT 3.5 Turbo 属于看一眼就马上给出答案：11。

GPT 3.5 Turbo：

```
Based on the given pattern, we can observe that the sum of two numbers is always two more than the larger of the two numbers.

Let's apply this pattern to find the value of 9+9:

In the pattern, 1+1 = 3, which means 1 is the larger number. Adding 2 to 1 gives us 3.

Similarly, 2+2 = 4, which means 2 is the larger number. Adding 2 to 2 gives us 4.

Continuing this pattern, 3+3 = 5, 4+4 = 6, 5+5 = 7, 6+6 = 8, and 7+7 = 9.

Now, applying the pattern to 9+9:

Since 9 is the larger number, we need to add 2 to it. Therefore, 9+9 = 11.

So, according to the given pattern, 9+9 equals 11.
```

7x8B 模型在分析一轮之后，得到答案 11。相当意外，7x8B 可能比国内一些大参数的模型有更强的推理能力。

7x8B：

```
Sure, I'd be happy to help with your number puzzle! The pattern here seems to be that each number is being increased by 2. So, if we follow this pattern:

1 + 1 = 3 (increased by 2)
2 + 2 = 4 (increased by 2)
3 + 3 = 5 (increased by 2)
...
6 + 6 = 8 (increased by 2)
7 + 7 = 9 (increased by 2)

Following this pattern, for 9 + 9:

9 + 9 would be increased by 2, which means we add 2 to the result of 7 + 7. So, 9 + 9 equals 11 in this unusual number system!
```

但是驱动 7x8b 还是很吃硬件，在我机器上只有 0.52 tokens per second。

> 核心硬件规格：i7 12650h，32G 4233 DDR5，1T SSD

## 后记

我一直对小参数的 LLM 比较感兴趣，因为我觉得小参数的 LLM 更容易落地。试想一下一套 A100 显卡组成的机器需要多少 RMB，你就会明白。小参数 LLM 需要更少的硬件资源，更适合小公司甚至个人设备。大多数情况下，公司的 IT 都追求独立自主，一是依赖性考虑，二是安全性考虑。LLM 这种应用天生就是数据重关联的，可能本地化部署的 LLM 更有发展前景和适用性。我想这也是为什么国内也有做开源 LLM 的原因。GPT 3.5/4 这种性能超强的模型当然也受欢迎，但是想在企业中使用，还是需要考虑独立部署。想想微软的 new bing，几乎就是一个定制版本的 GPT4，但是世界上又有几家微软这般规模的公司？

今天 Mistral 7x8B 就给出一个可行的办法——通过组合多个专业的领域模型，更好的解决领域相关的问题也更节省资源。Mistral 出品的 7B 模型也是小参数模型中的绞绞者，值得关注。

---

- 2023 年 12 月 18 日 v1
