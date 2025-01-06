
# PART - 1

1. What is a server?
2. The easiest way to write Node.js code is by using the REPL (Read-Eval-Print Loop).
    - To open REPL mode, run the following command: `node`

3. Global objects
    - They are provided by browsers, not the V8 engine. If you want to access web browser APIs like `setInterval` or `setTimeout`, these are only available in the browser environment.

    - To see a list of available global objects in the Node.js terminal, simply run `console.log(global)`.

    - In a browser, when you run `console.log(this)`, you get the `window` object. However, in Node.js, you will get an empty object (`{}`). 

keywords: `window, this, self, frames` returns the same window object
Broswer Comptability: globalThis