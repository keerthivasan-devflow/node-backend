const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(7000, "localhost", () => console.log("Server is listening"));
