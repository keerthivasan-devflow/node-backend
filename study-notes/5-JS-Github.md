
# Modules
A module is a single file `(with a .js extension in javascript)` that contains Javascript code. This can include functions, classes, variables, and runnable code. [becomes reusable components]

Whenever you create a module and import it into an another module using require() that will be wrapped into a function and execute the code. (This function will be IIFE)

# Packages
A package is a collection of related modules organized in a directory.
 **Example:** react package will contain all the code related to it.

# Dependencies
Dependencies refer to external libraries, packages, or modules that your project relies on in order to work. These dependencies are typically managed using package managers. They are usually installed through a package manager, and your code will import and use them.


In Node.js and JavaScript, the terms *module*, *package*, and *dependency* have specific meanings:

- **Module**: A module is a single file or a collection of files that contain code for a specific functionality. In Node.js, each JavaScript file is treated as a separate module. You can export functions, objects, or variables from a module to make them accessible in other parts of your application. Modules are used to organize and reuse code. For example, `fs` is a built-in module in Node.js for working with the file system.

- **Package**: A package is a collection of related modules bundled together. It often includes a `package.json` file, which describes the package, its metadata, dependencies, and scripts. A package can be installed from the npm (Node Package Manager) registry or created locally. For example, `express` is a popular package that provides a framework for building web applications.

- **Dependency**: A dependency is a package or module that your application relies on to function correctly. Dependencies are often specified in a `package.json` file and can be installed using npm. These dependencies could be external libraries, frameworks, or utility modules. For example, if you're building a web app with Node.js, you might add `express` as a dependency for routing and server setup.

In summary:
- **Module**: A single file or set of files with code.
- **Package**: A collection of related modules and metadata.
- **Dependency**: A package or module that your project requires to work.