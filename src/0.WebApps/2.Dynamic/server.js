const http = require("http");
const fs = require("fs");
const PORT = 4242;
const render = require("./index");

const server = http.createServer(function (req, res) {
  console.log("Request received:", req.url);

  // Handle request param
  const hideBody = req.url.includes("body=false");

  // Collect parts
  const header = fs.readFileSync("parts.header.html", "utf-8");
  const body = fs.readFileSync("parts.body.html", "utf-8");
  const footer = fs.readFileSync("parts.footer.html", "utf-8");

  // Prepare content
  const content = render(header, hideBody ? "" : body, footer);

  // Handle response
  res.writeHead(200, { "Content-type": "text/html" });
  res.write(content);
  res.end();
});

server.listen(PORT); //3 - listen for any incoming requests

console.log(`Node.js web server at port ${PORT} is running..`);
