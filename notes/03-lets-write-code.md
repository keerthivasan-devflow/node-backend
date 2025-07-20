## Node JS Installation Set Up / REPL / app.js / 'globalThis' keyword

- When Node.js is installed, npm is automatically included. You can verify the installation by running the command `npm -v`.

## Global (exist in node.js) / Window Object [part of browser not v8 engine / javascript]
- **window, this, self, frames** - returns the window object in browsers but global returns Reference Error
- **global** - returns window object and **this** returns `{}` in javascript environment but window returns Reference Error
- **globalThis** - returns window object everywhere

## Questions
- Node Version Manager vs Node Package Manager
- How to write code in REPL mode?
- How to execute a javascript code in Node.js? - `node filename/filepath`