## Deep Dive into Thread Pool

### What is thread pool?

In Node.js, the thread pool is part of the libuv library, which is responsible for handling asynchronous I/O operations, such as file system operations, DNS lookups, and high CPU intensive tasks. Since Node.js is single-threaded for JavaScript execution (meaning it runs on a single main event loop thread), it relies on libuv's thread pool to offload certain blocking or time-consuming operations to a pool of background threads. This helps prevent the main event loop from being blocked, ensuring that the application can remain responsive.

### How thread pool works?

In Node.js, when asynchronous code enters the call stack, it offloads those tasks to a thread in the thread pool. For example, when a file read/write operation is encountered, it is assigned to a thread(worker) in the thread pool. This thread will remain occupied with the file operation completely (literally, which means it cannot execute any other tasks) and blocked until the operation is complete. Once finished, the thread becomes available to handle other asynchronous tasks.

### How to change the default size of the thread pool?

- The default size of the thread pool is 4, but it can be modified using the UV_THREADPOOL_SIZE environment variable and also this variable must be set before running the Node application. You can increase the size if you have many blocking operations, or decrease it if you're concerned about resource usage.
- This libuv package allows us to raise the number of threads from 4 to 1024.

    export process.env.UV_THREADPOOL_SIZE = 6

### Limitations of thread pool

The thread pool size is limited, so if too many blocking tasks are sent to the pool and all threads are busy, other tasks have to wait [Event Queue] for a thread to become available. This can lead to delays in processing tasks that rely on the thread pool. Node.js prioritizes non-blocking operations on the event loop. As such, while the thread pool helps with blocking tasks, Node.js is still highly optimized for handling a large number of non-blocking I/O tasks efficiently.

### Why it's useful

- The thread pool allows Node.js to handle CPU-intensive tasks efficiently
- It ensures that the main thread remains responsive to other requests and events
- It prevents the application from halting if the main thread is made to handle all operations

### Don't block the Main Thread
- Sync Methods
- Regular Expression
- Heavy / Complex calculation using control loop statements
- Heavy JSON objects

### Expected Interview Questions

1. What is thread pool? Why do we need it?
2. When it's useful?
3. What is the default size of thread pool? Is this customizable?
4. Is node a single thread / multi-thread? depends on synchronous / asynchronous code

### Scenario Based Questions

If 1000 incoming requests are coming concurrently towards to your webserver, Instead of creating thousands of threads to handle as many incoming requests on your webserver, which is not highly recommended, the operating system can efficiently manage this scenario using mechanisms like epoll (epoll used Red-Black Tree) (on Linux) or kqueue (on macOS) - [These mechanism available inside OS]

**Note:** epoll - Scalable I/O Event Notification Mechanism

### Thread Per Connection
In Node.js, the "thread per connection" model refers to the idea of creating a new thread for each incoming client connection. However, this model is not typically how Node.js operates. [not a good approach]

Node.js uses a single-threaded event loop to handle multiple concurrent connections. This means that, rather than creating a new thread for each connection (as you might see in traditional multithreaded server models), Node.js handles many requests asynchronously in a non-blocking manner using event-driven architecture

### LEARN MORE

- Sockets / Socket Connection

From -32.00 to continue...

