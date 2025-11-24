const fs = require("fs");
const path = require("path");
const http = require("http");

const logsDir = path.join(__dirname, "logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logFile = path.join(logsDir, "app.log");
fs.writeFileSync(logFile, "App started", { flag: "w" });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "running" }));
});

// Start server
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

