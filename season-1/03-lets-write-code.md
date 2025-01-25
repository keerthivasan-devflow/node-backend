## Node JS Installation Set Up / REPL / app.js / 'globalThis' keyword

**Note:** To open REPL mode - type `node` and press `Enter` key

### Global object
- They are provided by browsers, not the V8 engine. If you want to access web browser APIs like `setInterval` or `setTimeout`

1. **window, this, self, frames** - returns the same window object in browsers
2. **global, window** - returns window object, but **this** returns `{}` in javascript environment
3. **globalThis** - returns window object everywhere [across all the javascript environment]