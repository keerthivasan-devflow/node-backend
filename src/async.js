const https = require("https");
const fs = require("fs");

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

setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);
