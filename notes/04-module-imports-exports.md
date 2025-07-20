## Module Import / Export Using CJS and ES6

## How do you make multiple files to work together?
When you only use the `require()` function, you cannot access variables, functions, or classes directly because modules will protect their variables, functions etc from leaking. However, if there are any `console.log()` statements in the required file, they will still be executed.

If you require() a file that doesn't explicitly export anything (using module.exports), Node.js will still run the file.

## PART 1
## Common JS Module
- By default, common JS module will be enabled in Node.js
- In Node.js, CJS is the prefered way to import/export the modules
- Add the following in the package.json file: `{"type" : "commonjs" }`
- Oldest way of import/export modules
- Synchronous (require() function runs your code in synchronous mode)
- Runs on non-strict mode
- Export using module.exports whereas import using require()
- .js | .cjs | .cjsx | .ts | .cts | .ctsx

    While CommonJS is synchronous and works well for server-side code, it is not as ideal for client-side (browser) code where asynchronous loading and tree-shaking (removal of unused code) are important features, which is why ES Modules are preferred for modern web development.

## Can I use the require() function in the browser?
No, `.cjs` files (CommonJS modules) are not directly supported by browsers. Browsers typically use ES Modules (with `.mjs` extensions or `type="module"` in HTML) However, you can use tools like **Webpack**, **Parcel**, or **Babel** to bundle your `.cjs` files into a format that browsers can understand (usually ES Modules or other browser-compatible formats).

In a Node.js application, there is typically a single entry point, which is specified like this:
`node app.js` where `app.js` is an entry point file.

## PART 2
## ES6 import/export
- Add the following in the package.json file: `{"type" : "module" }` or `type="module"` in the script tag to enable ES6 Module
- Newest way of import/export modules
- Asynchronous
- Runs on strict mode
- use explicit keywords to import/export itself
- .js | .mjs | .mts | .mjsx | .mtsx

**Note:** If you try to `console.log(module.exports)` will return an empty object and also better way to always export and import module is using `module.exports = {}`.