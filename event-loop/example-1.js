const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate() will be executed"));

//Just assume the this takes sometime to complete its operation. So this will be executed in the second cycle
// So JS won't wait for its execution, therefore continue to execute next phase [i.e CHECK PHASE]
// That's why setImmediate() is executed before file operation
fs.readFile(".../../file.txt", "utf8", (err, data) => console.log("File read operation done!", data));

setTimeout(() => console.log("setTimeout expired"));

function GetVariablesValues() {
  console.log(`a = ${a}`);
}

GetVariablesValues();

console.log("Last line of the file!");