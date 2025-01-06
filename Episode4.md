# PART - 1

# 1. Common JS Modules [CJS]
    - By default, common JS module will be enabled and used in node js
    - In node js, CJS is the prefered way to import/export the modules

In a Node.js application, there is typically a single entry point, which is specified like this:
`node app.js` where `app.js` is an entry point file.

# 2. How do you make multiple files to work together?
    When you only use the `require()` function, you cannot access variables, functions, or classes directly because modules will protect their variables, functions etc from leaking. However, if there are any `console.log()` statements in the required file, they will still be executed.

    If you require() a file that doesn't explicitly export anything (using module.exports), Node.js will still run the file.

# To export a single parameter: 
# Syntax: module.exports = existing_nariable_name
# Example:

    var username = "kvasan1604";
    module.exports = username;

# To export mutiple parameters: 
# Syntax: module.exports = { variable1, variable2...variableN }
# Example:

    var employeeId = 83729;
    let employeeSalary = $75000;
    let Greeting = () => console.log("Hello Keerthivasan, How are you?");
    module.exports = { employeeId, employeeSalary, Greeting };

    Therefore, While importing you can write like below:
        const username = require("./login.js")
        const { employeeId, employeeSalary, Greeting } = require("./greeting.js") (OR)
        const greetingObj = require("./app.js") - This will give you the object of exported variables/functions etc.

# Advantages:
    - Avoid naming conflicts
    - Protects your variables/functions

# 3. ES6 Imports/Exports
To enable ES6 imports/exports, add the following in the package.json file:
{
"type": "module"
}

Now you can do default/named export/import
