const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Creating a simple web server in node js application");
});

server.listen(8000, "localhost", () => {
  console.log("A server has been started!");
});
