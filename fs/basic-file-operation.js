const fs = require("fs");

fs.writeFile(
  "greetings.txt",
  "Hey man, How are you da?",
  (err) => {
    console.log(err);
  }
);

// process.on("uncaughtException", (err) => {
//   console.error("Uncaught Error: ", err);
//   process.exit(1);
// });
