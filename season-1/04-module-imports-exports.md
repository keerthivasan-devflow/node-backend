## Module Imports / Exports Using CJS & ES6

**Guide:**
1. Check the handwritten notes to understand the difference between named imports/exports and default imports/exports in both CommonJS and ES6 modules.

2. Below is the difference between Common JS Module and ES6 Module

## PART - 1
### 1. Common JS Modules [CJS]
source: https://codedamn.com/news/javascript/require-function-in-javascript

 - By default, common JS module will be enabled and used in node js
 - In node js, CJS is the prefered way to import/export the modules
 - Oldest way of import/export
 - Synchronous (require() function runs your code in synchronous mode)
 - Runs on non-strict mode
 - Isolation of Modules
    - Each module has its own scope, meaning variables and functions defined in one module are not accessible to others unless explicitly exported.

**Note: If CJS is there then why do we need ESM?** While CommonJS is synchronous and works well for server-side code, it is not as ideal for client-side (browser) code where asynchronous loading and tree-shaking (removal of unused code) are important features, which is why ES Modules are preferred for modern web development

In a Node.js application, there is typically a single entry point, which is specified like this:
`node app.js` where `app.js` is an entry point file.

### 2. How do you make multiple files to work together?
When you only use the `require()` function, you cannot access variables, functions, or classes directly because modules will protect their variables, functions etc from leaking. However, if there are any `console.log()` statements in the required file, they will still be executed.

If you require() a file that doesn't explicitly export anything (using module.exports), Node.js will still run the file.

### Advantages:
- Avoid naming conflicts
- Protects your variables/functions

## PART - 2
### 3. ES6 Imports/Exports 
- Newest way of import/export
- To use ES6 Module - Add the following in the package.json file: `{"type" : "module" }` or `type="module"` in the script tag
- Asynchronous
- Runs on strict mode

**Note:** If you try to `console.log(module.exports)` will return an empty object and also better way to always export and import module is using `module.exports = {}`.