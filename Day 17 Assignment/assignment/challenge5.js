const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.writeHead(200);
    res.end("Hello from Node.js Server");
  } 
  else if (req.url === "/about") {
    res.writeHead(200);
    res.end("About Page");
  } 
  else {
    res.writeHead(404);
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
