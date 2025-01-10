const fs = require("fs");
setImmediate(() => console.log("setImmediate - 1"));

setTimeout(() => console.log("Timer expired - 1"));

Promise.resolve().then(() => console.log("Promise resolved"));

// Actually File Operation will be done on Phase 2.
// So, to execute the available call back from fs, event loop starts execution from POLL PHASE instead of timer phase.
fs.readFile("file.txt", "utf8", () => {
  setTimeout(() => console.log("Timer expired - 2"));

  setImmediate(() => console.log("setImmediate - 2"));

  process.nextTick(() => console.log("process.nextTick - 2"));

  console.log("File reading...");
});

process.nextTick(() => console.log("process.nextTick - 1"));

console.log("Last line of the file");
