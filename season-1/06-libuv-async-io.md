## Synchronous Code Execution / Asyncrhronous Code Execution  - (Theory)

## PART - 1
### What is JavaScript?
- Synchronous [Blocking I/O] / Single-threaded / Blocking
- Garbage Collector - which is available in V8 Engine therefore no need to take care of cleaning up memory

### Synchronous (Sequential) / Asynchronous (Concurrent)
Simple (Immediately executes) / More complex in nature (Takes time for execution)

## PART - 2
### How synchronous code gets executed?
- Javascript itself is a synchronous, single threaded and blocking I/O
- will be executed as fast as possible(typically in ms)
- will block the main thread - [Major drwaback of sync code]
- Sequential / Topdown code execution
- Realtime usecases:
  - Ecommerce Application - `Adding an item to the cart -> Payment process -> Showing order summary`
  - User Login and Authentication - This means the user will enter their credentials, and only after validation will they be redirected to another page

**Note:** An example of synchronous code execution is provided in the `sync.js` file in the code repo.

## PART - 3
### How asynchronous code gets executed?
- Node.js is asynchronous primarily and fast execution due to libuv, which is a core library provided by Node.js.
- Libuv is a built-in feature of Node.js.
- Cross platform library, typically written in C
- Middlelayer exist between V8 Engine and Operating System
- Refer `7-Sync-Async-Timer.md`

### Example for asynchronous code execution
**Note:** Look into `async.js` file too.

### Code Explanation:
- The given code snippet includes three asynchronous operations: File Operation, Fetching data from an API, and Timer Function.
- These operations can be executed in a certain order, but it may vary depending on the file data. If the file data is too large, the order may change.
- File Operation is usually completed quickly compared to Fetching data from external resources and Timer Functions.
- Timer values are specified in seconds, whereas JavaScript executes code in milliseconds. As a result, the Timer Function will always execute last.
- **Finally, if `setTimeout` is given a delay of 0 or no delay is specified, what will be the order of execution?**

**Note:** 
- Since readFileSync() is a synchronous function, it will not be offloaded to LIBUV. Although synchronous code is typically executed by the V8 engine, file operations like readFileSync() cannot be executed by V8 itself because the engine does not have access to the File System (OR) Operating System. Therefore, this code is handed over to libuv for execution. During this time, the V8 engine will block the main thread. Once the file operation is completed successfully, the next line of code will execute.

- Although synchronous functions are available in Node.js, it’s important to avoid using them as much as possible for better developer practices.

1. **source:** https://codedamn.com/news/nodejs/libuv-architecture
2. **source:** https://github.com/libuv/libuv