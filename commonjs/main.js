// Modules protectes their variables and functions from leaking
const { greet } = require("./temp");

console.log("main.js file executed!");
greet();
