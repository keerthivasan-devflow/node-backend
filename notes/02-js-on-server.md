## V8 Engine

- Node.js is written in C++.
- What is a server? Generally, it is a computer that operates remotely and is located in a specific place.
- What is a blocking server? Example: Apache HTTP Server
- What is a non-blocking server? Example: Node.js HTTP Server
- What is a JavaScript engine, and why is it necessary? - Just executes a C++ program

- What is the V8 engine? - To execute a javascript code
    V8 Engine also written in C++ and open-source, high performance javascript and web assembly engine [incredibly fast/powerful engine in nature]. It compiles JavaScript code directly into machine code instead of interpreting it, which speeds up execution. V8 also uses advanced techniques like Just-In-Time (JIT) compilation, where it optimizes code as it runs, making performance even better over time. Its efficient memory management and optimization for both server-side (Node.js) and client-side (in Chrome) applications contribute to its effectiveness. All these factors together make V8 one of the most high-performance JavaScript engines available. Eventually Node.js is a C++ application with V8 Engine embedded into it.

- Since Node.js and V8 Engines are written in C++, why are both required to run JavaScript code?
- If V8 can execute javascript code, then what is the use of Node.js?
- What is ECMAScript? 
- Are there any differences between Javascript and ECMAScript?
- Do all browsers have different JavaScript engines? 
    - All the JS Engines must follow ECMAScript standards but their implementation may vary.
- What makes V8 so powerful?