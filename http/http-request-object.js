// Important Methods of the request Object:
// ---------------------------------------
// req.on(event, callback):
// req.setTimeout(ms, callback):
// req.pipe(destination):
// req.aborted:
// req.read():
// req.get(header):
// req.destroy():
// req.socket:

// req.params
// req.query
// req.body
// req.httpVersion
// req.is()

const http = require("http");

const server = http.createServer((request, response) => {
  // console.log("Request Object: ", request)
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers);
  response.end("Node is a run time javascript envirnoment");
  console.log("Creating a simple local web server");
});

server.listen(8088, "localhost", () => {
  console.log("HTTP local web server has been started!");
});
