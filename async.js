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
setTimeout(() => console.log("setTimeout called without specified delay"));

console.log(`Employee Information: ${employeeNo}: ${employeeName}`);
