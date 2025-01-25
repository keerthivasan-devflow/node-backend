const https = require("https");
const fs = require("fs");

var employeeNo = 174640;
let employeeName = "Rick Stalker";

console.log("Hello World");

https.get("https://jsonplaceholder.typicode.com/users/1", () =>
  console.log("Fetched data from API successfully")
);

fs.readFile("./file.txt", "utf8", (err, data) => console.log(data));

setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);

setTimeout(() => console.log("setTimeout called in 0'seconds"));

console.log(`Employee Information: ${employeeNo} - ${employeeName}`);

// Commented out the below code to make sure that how does it work
// fs.readFileSync("./file.txt", "utf8");