# llama.cpp 驱动 baichuan2-7b-chat

需要 python3.10、llama.cpp 源码包，llama.cpp 二进制版本。

下面使用的是 [llama.cpp b1414](https://github.com/ggerganov/llama.cpp/releases/tag/b1414)

工作目录在 `D:\llm_store`。

## 下载模型

Baichuan2-7B-Chat 可以在 [HF](https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat) 下载。如果有网络故障，可以上网找找镜像之类的备用下载方式。

## 转换到 baichuan1 模型

llama.cpp 官方已经支持 baichuan 模型。但当前版本 b1414 只支持 baichuan1 模型。baichuan2 模型需要转换为 baichuan1 的模型格式。

用 baichuan 提供的脚本进行处理：

```sh
import torch
import os
ori_model_dir = 'D:\\llm_store\\baichuan2\\Baichuan2-7B-Chat'
# To avoid overwriting the original model, it's best to save the converted model to another directory before replacing it
new_model_dir = 'D:\\llm_store\\baichuan2\\Baichuan2-7B-Chat-bc1'
model = torch.load(os.path.join(ori_model_dir, 'pytorch_model.bin'))
lm_head_w = model['lm_head.weight']
lm_head_w = torch.nn.functional.normalize(lm_head_w)
model['lm_head.weight'] = lm_head_w
torch.save(model, os.path.join(new_model_dir, 'pytorch_model.bin'))
```

需要先安装 torch 2.0.1：

```sh
pip install torch===2.0.1
```

## 转换为 gguf 格式

llama.cpp 官方已经集成转换脚本，可以在 llama.cpp 中找到：

```sh
python convert-baichuan-hf-to-gguf.py ../Baichuan2-7B-Chat-bc1/
```

## 量化

```sh
./quantize ../Baichuan2-7B-Chat-bc1/ggml-model-f16.gguf ../Baichuan2-7B-Chat-bc1/ggml-model-q6_k.gguf Q6_K
```

参考 [Chinese Llama 2][chinese_llama_wiki] 的建议，可以使用 Q4_K 或 Q6_K 的量化模式。

baichuan2 7b chat 模型在 Q6_K 的模式下进行量化后，生成的文件大约 5GB。在我的机器上，纯 CPU 推理下可以实现大约 5 token 每秒。硬件配置：i7 12650h（AVX2 指令） + 16g RAM + 1T SSD，Windows 11 系统。5 tps 对于人类阅读刚好够用，对于其他场景属于比较慢。

[chinese_llama_wiki]: https://github.com/ymcui/Chinese-LLaMA-Alpaca-2/wiki/llamacpp_zh


## 启动

```sh
./main.exe \
    -c 4096 \
    -m models/baichuan2-7b-chat-ggml-model-q4_0.gguf \
    --file system_prompt_baichuan2.txt \
    --logdir logs \
    -i \
    --color \
    --reverse-prompt "用户："
```

system_prompt_baichuan2.txt 来自 llama.cpp 的 prompts/chat-with-baichuan.txt：

```txt
以下内容为人类用户与与一位智能助手的对话。

用户：你好！
助手：
```

## 启动 API 服务

llama.cpp 提供了一个简洁的 server 实现，可以提供 web 体验：

```sh
./server.exe -m models/baichuan2-7b-chat-ggml-model-q4_0.gguf -c 4096
```

访问 https://127.0.0.1:8080，可以看到一个简单的 web 界面。

----

- 2023-10-24
- 2023-10-24，补充量化、server 的说明
