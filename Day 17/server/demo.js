const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.writeHead(200);
    res.end("Welcome to Node.js Server!");
  } 
  
  else if (req.url === "/about") {
    res.writeHead(200);
    res.end("This is a minimal Node.js prototype server built for testing.");
  } 
  
  else if (req.url === "/contact") {
    res.writeHead(200);
    res.end("Contact us at: contact@example.com");
  } 
  
  else {
    res.writeHead(404);
    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
