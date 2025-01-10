const fs = require("fs");
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"));

Promise.resolve().then(() => console.log("Promise resolved"));

fs.readFile("file.txt", "utf8", () => {
  console.log("File reading...");
});

process.nextTick(() => {
  // nextTick() will be executed all of its body, then only it will go to next phase i.e. Promise
  process.nextTick(() => console.log("inner process.nextTick()"));
  console.log("console log from inner process.nextTicky()");
});

console.log("Last line of the file");
