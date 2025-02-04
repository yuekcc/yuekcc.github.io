# 线程池

在 Java 工程中设置多个线程池的目的通常是为了更好地控制不同类型的任务和资源。不同类型的任务可能需要不同的线程池参数，例如不同的线程数量和等待队列大小。同时，不同类型的任务可能需要使用不同的资源，例如不同的数据库连接池和 HTTP 连接池

通过设置多个线程池，可以更好地控制这些资源，并确保每个任务得到适当的处理和分配。这可以提高应用程序的性能和可伸缩性，并减少资源争用和竞争的可能性。

通常情况下，为 IO 密集型的任务和 CPU 密集型的任务分别设置不同的线程池。对于 IO 密集型任务，由于大部分时间都是在等待 IO 操作完成，所以可以设置较大的线程池和较小的队列大小，以便处理更多的并发 IO 请求。而对于 CPU 密集型任务，由于大部分时间都是在计算和处理数据，所以可以设置较小的线程池和较大的队列大小，以避免过多的上下文切换和线程创建销毁开销。

## 线程池参数

对于 IO 密集型的计算，一般需要设置较大的线程池和较小的队列大小，以便处理更多的并发 IO 请求。具体地，可以采用以下配置：

- corePoolSize：根据系统资源和并发 IO 请求量来调整，通常设置为 CPU 核心数的两倍左右。
- maximumPoolSize：根据系统资源和并发 IO 请求量来调整，可以根据实际情况动态调整。
- keepAliveTime：可以设置为比较短的时间，例如 1 秒左右，以避免线程空闲时间过长。
- workQueue：可以选择使用 SynchronousQueue 或者 ArrayBlockingQueue 等无界队列，以避免任务被阻塞。
- threadFactory：可以使用 Executors.defaultThreadFactory()，也可以根据需要自定义线程工厂。
- handler：可以选择使用 ThreadPoolExecutor.CallerRunsPolicy 策略，将任务退回给调用者。

对于 CPU 密集型计算，线程池的配置需要考虑 CPU 核心数、任务的执行时间以及系统的负载情况等因素。一般来说，为了充分利用 CPU 的计算资源，可以采用以下配置：

- corePoolSize：根据系统 CPU 核心数和任务的执行时间来调整，通常设置为 CPU 核心数的 1.5 到 2 倍左右。
- maximumPoolSize：可以根据实际情况动态调整，最好不要超过 CPU 核心数的 4 倍左右。
- keepAliveTime：可以设置为比较长的时间，例如 5 分钟以上，以避免线程过早被回收。
- workQueue：可以选择使用有界队列，例如 ArrayBlockingQueue，以避免任务过多导致内存溢出。
- threadFactory：可以使用 Executors.defaultThreadFactory()，也可以根据需要自定义线程工厂。
- handler：可以根据实际情况选择不同的策略，例如 ThreadPoolExecutor.AbortPolicy 或者 ThreadPoolExecutor.DiscardPolicy。

对于 CPU 密集型计算，线程池的线程数一般不宜过多，否则会导致线程竞争和上下文切换的开销，影响系统性能。

## 多线程池场景

现在有一个先校验文件 hash，再解压 zip 的任务，应该放在哪个线程池比较适合？

这个任务既包含 IO 操作（文件校验和解压），又包含 CPU 密集型计算（校验文件 hash），因此可以考虑使用两个线程池来处理。

假如有两个线程池 a 和 b。a 针对 io 型的任务进行了配置，b 针对 cpu 型的任务进行了配置。先将任务提交到线程池 b 中执行 hash 计算，等 hash 计算完成后再将解压任务提交到线程池 a 中执行。具体可以使用 CompletableFuture 来实现。例如，可以使用 CompletableFuture.supplyAsync 方法提交 hash 计算任务，并在计算完成后使用 CompletableFuture.thenAcceptAsync 方法提交解压任务。这样可以确保先完成 hash 计算，再进行文件解压，从而提高整个任务的执行效率。

```java
ExecutorService cpuThreadPool = Executors.newFixedThreadPool(cpuPoolSize);
ExecutorService ioThreadPool = Executors.newFixedThreadPool(ioPoolSize);

// 在 CPU 密集型线程池中执行 hash 计算任务
CompletableFuture<byte[]> hashFuture = CompletableFuture.supplyAsync(() -> {
    // 假设 hash 计算需要消耗一定的 CPU 资源
    byte[] hash = computeHash();
    return hash;
}, cpuThreadPool);

// 在 IO 密集型线程池中执行解压任务
hashFuture.thenAcceptAsync(hash -> {
    // 假设解压任务需要从磁盘中读取文件并解压，需要占用一定的 IO 资源
    unzip(hash);
}, ioThreadPool);

// 关闭线程池
cpuThreadPool.shutdown();
ioThreadPool.shutdown();
```

在上面的代码中，首先创建了两个线程池，一个是 CPU 密集型线程池，一个是 IO 密集型线程池。然后，使用 CompletableFuture.supplyAsync 方法提交 hash 计算任务，将该任务在 CPU 密集型线程池中执行。在 hash 计算完成后，使用 CompletableFuture.thenAcceptAsync 方法提交解压任务，将该任务在 IO 密集型线程池中执行。最后，关闭线程池。

## Project Loom

在 Project Loom 中，协程是轻量级的用户级线程，每个协程只占用少量的内存。它们的执行不需要真正的线程，而是在 Loom 框架中以 fiber 的形式执行。Loom 框架会根据系统资源动态调整协程的执行顺序，以充分利用 CPU 和 IO 资源，从而提高应用程序的性能。

基于 Project Loom 实现上面的 Demo：

```java
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.concurrent.CompletableFuture;

public class FiberDemo {

    public static void main(String[] args) throws Exception {
        // 启动一个 fiber 执行异步任务
        CompletableFuture.runAsync(FiberDemo::verifyAndUnzip).join();
    }

    public static void verifyAndUnzip() {
        // 创建一个 fiber 执行校验任务
        CompletableFuture<String> verifyFuture = CompletableFuture.supplyAsync(() -> {
            try {
                URL url = new URL("http://example.com/demo.zip");
                Path zipFile = Paths.get("demo.zip");
                Path hashFile = Paths.get("demo.zip.sha256");

                // 下载文件
                downloadFile(url, zipFile);

                // 计算 hash 值并保存到文件
                String hash = calculateFileHash(zipFile);
                saveHashToFile(hash, hashFile);

                // 读取文件中的 hash 值
                String expectedHash = readHashFromFile(hashFile);

                // 比较计算出来的 hash 值和文件中的 hash 值
                if (!hash.equals(expectedHash)) {
                    throw new RuntimeException("Hash verification failed");
                }

                // 返回 hash 值
                return hash;
            } catch (Exception e) {
                throw new RuntimeException("Failed to verify hash", e);
            }
        });

        // 创建一个 fiber 执行解压任务
        CompletableFuture<Void> unzipFuture = verifyFuture.thenAcceptAsync((hash) -> {
            try {
                Path zipFile = Paths.get("demo.zip");
                Path destDir = Paths.get("output");

                // 解压文件
                unzip(zipFile, destDir);

                System.out.println("Unzip succeeded with hash: " + hash);
            } catch (Exception e) {
                throw new RuntimeException("Failed to unzip file", e);
            }
        });

        // 等待所有任务完成
        unzipFuture.join();
    }

    private static void downloadFile(URL url, Path targetFile) throws IOException {
        try (InputStream in = url.openStream()) {
            Files.copy(in, targetFile);
        }
    }

    private static String calculateFileHash(Path file) throws IOException, NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        try (InputStream in = Files.newInputStream(file)) {
            byte[] buffer = new byte[1024];
            int len;
            while ((len = in.read(buffer)) > 0) {
                md.update(buffer, 0, len);
            }
        }
        byte[] hashBytes = md.digest();
        return Base64.getEncoder().encodeToString(hashBytes);
    }

    private static void saveHashToFile(String hash, Path file) throws IOException {
        Files.writeString(file, hash);
    }

    private static String readHashFromFile(Path file) throws IOException {
        return Files.readString(file);
    }

    private static void unzip(Path zipFile, Path destDir) throws IOException {
        // 解压代码略
    }
}
```

---

- 2023-02-25 与 chartGPT 联合创作
