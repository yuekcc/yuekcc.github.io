针对你的需求，我为你设计了一个基于 **Spring Boot + Redis + Apache HttpClient 4 (SSE 流式处理) + ThreadPoolExecutor** 的完整架构方案。

这个方案解决了你担心的资源占用问题，同时通过持久化和线程池化保证了系统的健壮性。

### 1. 整体架构流程图

1. **Web端**：发送 `POST /api/task`。
2. **Java Service**：
* 生成 `taskId`。
* 将任务状态（Pending）和初始参数存入 **Redis**。
* 将任务提交到**自定义线程池**。
* 立即返回 `taskId` 给前端。


3. **后台线程池**：
* 执行任务，更新 Redis 状态（Running）。
* 使用 HttpClient 4 发起 SSE 请求。
* **逐行读取** LLM 返回的流数据，并实时追加到 Redis 中。
* 任务结束，更新状态（Success/Failed）。


4. **Web端轮询**：发送 `GET /api/task/{taskId}`，从 Redis 获取最新状态和部分/全部结果。

---

### 2. 核心代码实现

#### 第一步：配置自定义线程池与 HttpClient

为了防止 20 分钟的长连接导致线程耗尽，我们需要严格控制线程池。

```java
@Configuration
public class AsyncConfig {

    @Bean(name = "llmExecutor")
    public Executor llmExecutor() {
        ThreadPoolExecutor executor = new ThreadPoolExecutor(
                20,                      // 核心线程数：根据 CPU 和内存调整
                50,                      // 最大线程数
                60L, TimeUnit.SECONDS,   // 空闲线程存活时间
                new LinkedBlockingQueue<>(1000), // 等待队列
                new ThreadFactoryBuilder().setNameFormat("llm-task-%d").build(),
                new ThreadPoolExecutor.CallerRunsPolicy() // 拒绝策略：由调用者运行，减缓提交速度
        );
        return executor;
    }

    @Bean
    public CloseableHttpClient httpClient() {
        // 配置连接池
        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();
        cm.setMaxTotal(200);
        cm.setDefaultMaxPerRoute(50);

        return HttpClients.custom()
                .setConnectionManager(cm)
                .setKeepAliveStrategy(DefaultConnectionKeepAliveStrategy.INSTANCE)
                .build();
    }
}

```

#### 第二步：任务持久化与 SSE 流式处理服务

这是最核心的部分。我们使用 HttpClient 的流式响应来处理 SSE。

```java
@Service
public class LlmTaskService {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    @Qualifier("llmExecutor")
    private Executor llmExecutor;

    @Autowired
    private CloseableHttpClient httpClient;

    private static final String TASK_KEY_PREFIX = "llm_task:";

    public String createContextTask(Map<String, Object> params) {
        String taskId = UUID.randomUUID().toString();
        
        // 1. 初始化 Redis 状态
        Map<String, Object> taskInfo = new HashMap<>();
        taskInfo.put("status", "RUNNING");
        taskInfo.put("content", ""); // 用于存放增量结果
        taskInfo.put("startTime", System.currentTimeMillis());
        redisTemplate.opsForHash().putAll(TASK_KEY_PREFIX + taskId, taskInfo);
        // 设置 24 小时过期，防止 Redis 堆积
        redisTemplate.expire(TASK_KEY_PREFIX + taskId, 24, TimeUnit.HOURS);

        // 2. 异步执行
        llmExecutor.execute(() -> executeLlmCall(taskId, params));

        return taskId;
    }

    private void executeLlmCall(String taskId, Map<String, Object> params) {
        String redisKey = TASK_KEY_PREFIX + taskId;
        HttpPost httpPost = new HttpPost("https://llm-service.com/v1/chat/completions");
        
        // 设置超时：注意这里要设为 20 分钟以上
        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectTimeout(5000)
                .setSocketTimeout(25 * 60 * 1000) // 25分钟
                .build();
        httpPost.setConfig(requestConfig);
        
        // 设置 SSE 必要的 Header
        httpPost.addHeader("Accept", "text/event-stream");
        // 设置 Body (略)

        try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                try (BufferedReader reader = new BufferedReader(
                        new InputStreamReader(entity.getContent(), StandardCharsets.UTF_8))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        // SSE 协议解析逻辑
                        if (line.startsWith("data:")) {
                            String data = line.substring(5).trim();
                            if ("[DONE]".equals(data)) break;

                            // 解析 JSON 提取文本内容 (模拟解析)
                            String contentChunk = parseContent(data); 
                            
                            // 实时追加到 Redis，前端轮询能看到动态增长的内容
                            redisTemplate.opsForHash().increment(redisKey, "content", contentChunk);
                        }
                    }
                }
            }
            redisTemplate.opsForHash().put(redisKey, "status", "SUCCESS");
        } catch (Exception e) {
            redisTemplate.opsForHash().put(redisKey, "status", "FAILED");
            redisTemplate.opsForHash().put(redisKey, "error", e.getMessage());
        }
    }

    public Map<Object, Object> getTaskStatus(String taskId) {
        return redisTemplate.opsForHash().entries(TASK_KEY_PREFIX + taskId);
    }
}

```

---

### 3. 高级架构点评与细节优化

基于你的方案和我的调整，现在的架构达到了**工业级可用**，原因如下：

#### 1. 内存压力最小化

* **非 SSE 方案**：如果等待 20 分钟一次性返回，Java 需要在内存里 Hold 住巨大的字符串对象，直到任务结束。
* **本方案 (SSE + 流处理)**：通过 `BufferedReader.readLine()`，Java 服务内存中只保留当前一行的数据。解析后立即存入 Redis，不再占用 JVM 堆空间。

#### 2. 线程安全性与可靠性

* **线程池限流**：通过 `ThreadPoolExecutor` 的 `maxPoolSize` 限制了最大并发请求数。即使有 1 万个用户请求，也只有 50 个在跑，剩下的在队列里。这保护了你的后端不会因为线程过多而导致 OOM。
* **Redis 状态机**：即便你的 Java 服务因为发布而重启，Redis 里的 `taskId` 和已有的 `content` 依然存在。你可以增加一个“补偿机制”：服务启动时扫描 Redis 中 `RUNNING` 的任务，将其置为 `FAILED` 或尝试重试。

#### 3. 解决长连接断连问题

* **HttpClient 4 注意事项**：20 分钟的连接非常脆弱。一定要确保 `SocketTimeout` 足够长。
* **TCP Keep-Alive**：建议在操作系统或 HttpClient 层面开启 Keep-Alive，防止中间层网关（如 F5 或 Nginx）因为长时间没有数据传输而强制切断连接。

#### 4. 前端轮询体验

* **增量查询**：前端轮询时，你可以记录上一次查询到的字符位置，下次只查询 Redis 中新增的部分，实现类似 ChatGPT 的动态打字效果。

### 总结

你原来的方案在“异步化”思路上是正确的，引入 **Redis 持久化**解决了“状态不可控”问题，引入 **线程池**解决了“资源爆炸”问题，引入 **SSE 流式解析**解决了“长耗时任务内存占用”问题。这是一个非常稳妥且高性能的生产环境方案。