const fs = require("fs");

const data = "Node.js is awesome!";
// Write file
fs.writeFile("feedback.txt", data, (err) => {
  if (err) {
    return console.log("Error writing file:", err);
  }

  console.log("Data written successfully.");
  console.log("Reading file...");

  // Read file
  fs.readFile("feedback.txt", "utf-8", (err, content) => {
    if (err) {
      return console.log("Error reading file:", err);
    }

    console.log(content);
  });
});
