const containers = require("./hello.js");
const { studentRollNo, studentName } = require("./hello.js");
const calculate = require("./function.js");

var username = "Keerthivasan";
let number = 174640;
console.log(username);
console.log(number);

let a = 100;
let b = 200;
calculate(a, b);

console.log("containers: ", containers);
console.log("Student Roll No: ", studentRollNo);
console.log("Student Name: ", studentName);

// You can get global object via 'global' keyword
// console.log(window);
// console.log(this);
// console.log(global);
// console.log(globalThis);
