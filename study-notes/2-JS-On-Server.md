## REPL / GLOBAL OBJECT IN NODE JS

1. The easiest way to write Node.js code is by using the REPL (Read-Eval-Print Loop).
    To open REPL mode, run the following command: `node`

2. Global objects
- They are provided by browsers, not the V8 engine. If you want to access web browser APIs like `setInterval` or `setTimeout`
- To see a list of available global objects in the Node.js terminal, simply run `console.log(global)`.
- In a browser, when you run `console.log(this)`, you get the `window` object. However, you will get an empty object (`{}`) in the Node.js terminal

1. Keywords: `window, this, self, frames` returns the same window object
2. Broswer Comptability: `globalThis`