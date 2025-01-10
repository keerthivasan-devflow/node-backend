const https = require("https");
const fs = require("fs");

var employeeNo = 174640;
let employeeName = "Rick Stalker";

console.log("Hello World");

https.get("https://jsonplaceholder.typicode.com/users/1", (data) =>
  console.log("Fetched data from API successfully")
);

fs.readFile("./file.txt", "utf8", (err, data) => console.log(data));

setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);

// Eventhough there is no specified delay, this is an async so it will be called only when the callstack is empty.
// Because the above function will be offloaded to LIBUV - This's why trust issues with setTimeout()
setTimeout(() => console.log("setTimeout called in 0'seconds"));

console.log(`Employee Information: ${employeeNo} - ${employeeName}`);
