const http = require("http");
const PORT = 8080;

function serverOnHandler() {
  console.log(`Server is listening on port: ${PORT}`);
}

http.createServer(requestHandler).listen(PORT, serverOnHandler);

function requestHandler(req, res) {
  function asyncHandler() {
    res.write(" World");
    res.end();
  }

  res.writeHead(200);
  res.write("Hello");
  setTimeout(asyncHandler, 1000);
}
