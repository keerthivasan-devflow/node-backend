const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () =>
  console.log("key is generated")
);

https.get("https://jsonplaceholder.typicode.com/users/1", (data) =>
  console.log("Fetched data from API successfully")
);

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

setTimeout(() => console.log("setTimeout called after 3 seconds"), 3000);
setTimeout(() => console.log("setTimeout called without delay"));
