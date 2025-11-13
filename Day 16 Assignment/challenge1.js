// Print Node.js version
console.log("Node.js Version:", process.version);

// Print current file name
console.log("Current File:", __filename);

// Print current directory
console.log("Current Directory:", __dirname);

// Print message every 3 seconds
const interval = setInterval(() => {
  console.log("Welcome to Node.js!");
}, 3000);

// Bonus: Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log("Timer stopped after 10 seconds.");
}, 10000);
