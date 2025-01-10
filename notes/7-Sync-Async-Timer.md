# How Synchronous / Asynchronous / Timer Function code gets executed?

### Example for asynchronous code execution 
**Note:** Look into `async.js` file too.
    # code block
    const https = require("https");
    const fs = require("fs");

    var employeeNo = 174640;
    let employeeName = "Rick Stalker";

    console.log("Hello World");

    fs.readFileSync("./file.txt", "utf8");

    for (let i = 0; i < 10000; i++) {
    console.log("Main thread blocked");
    }

    console.log("Main thread blocked - will be executed once readFileSync gets executed!")

    https.get("https://jsonplaceholder.typicode.com/users/1", (data) =>
    console.log("Fetched data from API successfully")
    );

    fs.readFile("./file.txt", "utf8", (err, data) => console.log(data));

    setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);

    console.log(`Employee Information: ${employeeNo}: ${employeeName}`);

### Code Explanation:
- The given code snippet includes three asynchronous operations: File Operation, Fetching data from an API, and Timer Function.
- These operations can be executed in a certain order, but it may vary depending on the file data. If the file data is too large, the order may change.
- File Operation is usually completed quickly compared to Fetching data from external resources and Timer Functions.
- Timer values are specified in seconds, while JavaScript executes code in milliseconds. As a result, the Timer Function will always execute last.
- Finally, if `setTimeout` is given a delay of 0 or no delay is specified, what will be the order of execution?

**Note:** 
- Since readFileSync() is a synchronous function, it will not be offloaded to LIBUV. Although synchronous code is typically executed by the V8 engine, file operations like readFileSync() cannot be executed by V8 itself because the engine does not have access to the File System (OR) Operating System. Therefore, this code is handed over to libuv for execution. During this time, the V8 engine will block the main thread. Once the file operation is completed successfully, the next line of code will execute.

- Although synchronous functions are available in Node.js, it’s important to avoid using them as much as possible for better developer practices.