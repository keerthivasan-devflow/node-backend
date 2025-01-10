# PART - 1
### What is JavaScript?
Synchronous [Blocking I/O] / Single-threaded / Blocking

### Synchronous (Sequential) / Asynchronous (Concurrent)
Simple (Immediately executes) / More complex in nature (Takes time for execution)

# PART - 2
### How synchronous code gets executed?
- Javascript itself is a synchronous, single threaded and blocking I/O
- will be executed as fast as possible(typically in ms)
- will block the main thread - [Major drwaback of sync code]
- Sequential / Topdown code execution
- #### Realtime Usecase
  - Ecommerce Application (Online purchasing)
  - User Login and Authentication - That means user will enter thier credentials, only after validation they will be redirected to Dashboard page or something else

**Note:** An example of synchronous code execution is provided in the `sync.js` file in the code repo.

# PART - 3
### How asynchronous code gets executed?
- Node.js is asynchronous primarily due to libuv, which is a core library provided by Node.js.
- Libuv is a built-in feature of Node.js.

# PART - 4
### LIBUV
Node JS is asynchronous [Non-Blocking I/O] and fast, it's just because of LIBUV
 - Thread pool
 - Event loop

Libuv is a C library that's a key component of Node.js, providing asynchronous I/O operations and powering the event loop: 
Asynchronous I/O operations
Libuv abstracts non-blocking I/O operations, allowing the CPU and other resources to be used simultaneously. 

Event loop
Libuv's event loop is backed by epoll, kqueue, IOCP, and event ports. 

Cross-platform
Libuv is designed to run on Linux, Windows, Mac OS X, and more, with a consistent API across all platforms. 

High performance
Libuv is designed to handle many concurrent connections and facilitate the development of scalable network applications. 

Other functionalities of Libuv include: 
TCP sockets
DNS resolution
UDP sockets
File I/O
Child processes
A pool of worker threads
Synchronization primitives for threads
High-resolution clock

**source:** https://codedamn.com/news/nodejs/libuv-architecture
**source:** https://github.com/libuv/libuv