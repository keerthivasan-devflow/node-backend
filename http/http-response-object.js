const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./template/index.html");

const server = http.createServer((request, response) => {
  //  fs.readFile("./template/fruits.html", "utf8", (err, html) => {
  //    if (err) {
  //      console.log("Error : ", err);
  //    } else {
  //      response.setHeader("Content-Type", "text/html");
  //      response.write( "It's a simple text appended at the top for testing purpose...");
  //      response.write("<p>Note: Content will be populated through html document</p>");
  //      response.write(html);
  //      response.end();
  //    }
  //  });

  response.end(html);
});

server.listen(8000, "localhost", () => {
  console.log("A server has been started!");
});
