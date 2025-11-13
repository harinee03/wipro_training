const figlet = require("figlet");
const chalk = require("chalk");

figlet("Welcome to Node.js", function (err, data) {
  if (err) {
    console.log("Error creating banner");
    return;
  }
  console.log(chalk.green(data));
});
