const http = require("http");
const fs = require("fs")

const server = http.createServer((request, response) => {
  let path = request.url;

  if (path == "/" || path.toLocaleLowerCase() == "/home") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("You're in home page");
  } 
  
  else if (path.toLocaleLowerCase() == "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("you're in about page");
  } 
  
  else if (path.toLocaleLowerCase() == "/contact") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("you're in contact page");
  } 

  else if (path.toLocaleLowerCase() == "/products"){
    fs.readFile("./data/products.json", "utf-8", (err, data)=>{
      if (err) {
        console.log(err)
      } else {
         response.writeHead(200, { "Content-Type": "application/json" });
         response.end(data);
      }
    })
  }
  
  else {
    response.writeHead(404);
    response.end("Error 404: Page Not Found!");
  }

});

server.listen(8000, "localhost", () => {
  console.log("A server has been started!");
});
