const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate() will be executed"));

Promise.resolve().then(() => console.log("Promise executed"));

fs.readFile(".../../file.txt", "utf8", (err, data) =>
  console.log("File read operation done!", data)
);

setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);

process.nextTick(() => console.log("process.nextTick() executed"));

function GetVariablesValues() {
  console.log(`a = ${a}`);
}

GetVariablesValues();

console.log("Last line of the file!");
