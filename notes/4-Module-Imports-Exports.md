# 1. Common JS Modules [CJS]
 - By default, common JS module will be enabled and used in node js
 - In node js, CJS is the prefered way to import/export the modules
 - Oldest way of import/export
 - Synchronous (require() function runs your code in synchronous mode)
 - Runs on non-strict mode

In a Node.js application, there is typically a single entry point, which is specified like this:
`node app.js` where `app.js` is an entry point file.

### 2. How do you make multiple files to work together?
When you only use the `require()` function, you cannot access variables, functions, or classes directly because modules will protect their variables, functions etc from leaking. However, if there are any `console.log()` statements in the required file, they will still be executed.

If you require() a file that doesn't explicitly export anything (using module.exports), Node.js will still run the file.

### 3. To export a single parameter: module.exports = existing_nariable_name
### Example:

    var username = "kvasan1604";
    module.exports = username;

### 4. To export mutiple parameters: module.exports = { variable1, variable2...variableN }
### Example:

    var employeeId = 83729;
    let employeeSalary = $75000;
    let Greeting = () => console.log("Hello Keerthivasan, How are you?");
    module.exports = { employeeId, employeeSalary, Greeting };

    Therefore, While importing you can write like below:
    const username = require("./login.js")
    const { employeeId, employeeSalary, Greeting } = require("./greeting.js") (OR)
    const greetingObj = require("./app.js") - This will give you the object of exported variables/functions etc.

### Advantages:
- Avoid naming conflicts
- Protects your variables/functions

### 5. ES6 Imports/Exports 
- Newest way of import/export
- To enable ES6 imports/exports, add the following in the package.json file: `{"type" : "module" }`
-  Asynchronous
- Runs on strict mode

**Note:** If you try to `console.log(module.exports)` will return an empty object and also better way to always export and import module is using `module.exports = {}`.