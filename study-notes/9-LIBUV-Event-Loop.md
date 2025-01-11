## LIBUV / Event Loop and its phases

## PART - 1
The following are the parts of LIBUV: **Callback Queue, Event Loop and Thread Pool**

- When a task is offloaded to libuv , libuv internally performs several operations. For instance, if you initiate 
a file read operation, once the data is received back from the operating system OS, it is libuv 's responsibility 
to handle the callback function and eventually send it to the call stack for execution. 

- Now, imagine there are millions of lines of JavaScript code running within the JavaScript engine. If an asynchronous task like an API call returns data very quickly from the OS to libuv , that API call must wait in the callback queue within libuv until the V8 engine is free to process it **The callback queue is where callbacks are stored after an asynchronous operation is completed. The event loop processes this queue to execute the callbacks when the call stack is empty**. This ensures that the non-blocking nature of Node.js is maintained, as the V8 engine can continue executing other code without being blocked by these asynchronous operations.

- So, let's say multiple asynchronous tasks, like an API call returning results, a setTimeout , and a file read operation, are completed simultaneously. To manage this, libuv maintains separate callback queues for different types of tasks, such
as timers, API calls, and file reads. **This is where the event loop comes into play. The event loop continuously monitors the call stack, keep checking if it's empty. If the stack is empty, the event loop takes tasks from the callback queues and pushes them onto the call stack for execution.**

- The event loop's main responsibility is to ensure that all pending tasks in the callback queues are executed at the appropriate time and in the correct order of priority. 


<!-- Other functionalities of Libuv include: 
TCP sockets
DNS resolution
UDP sockets
File I/O
Child processes
A pool of worker threads
Synchronization primitives for threads
High-resolution clock -->