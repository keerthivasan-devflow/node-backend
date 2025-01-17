## Node JS Installation Set Up / REPL / app.js / globalThis

### Global object
- They are provided by browsers, not the V8 engine. If you want to access web browser APIs like `setInterval` or `setTimeout`
- To see a list of available global objects in the Node.js terminal, simply run `console.log(global)`.
- In a browser, when you run `console.log(this)`, you get the `window` object. However, you will get an empty object (`{}`) in the Node.js terminal

1. **window, this, self, frames** - returns the same window object in browsers
2. **global, window** - returns window object, but `this` returns `{}` in javascript environment
3. **globalThis** - returns window object everywhere [across all the javascript environment]