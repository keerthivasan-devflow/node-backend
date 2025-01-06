const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Creating a server...");
  if (req.url === "/" || req.url.toLocaleLowerCase() === "/home") {
    res.write("<h1>Hello, How are you?</h1>");
    res.end();
  }
  else{
    res.end("This is default statement!")
  }
});

server.listen(4000, "localhost", () => {
  console.log("Server is started running...");
});
