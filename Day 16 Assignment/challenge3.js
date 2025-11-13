const name = process.argv[2]; // get name from command line

if (!name) {
  console.log("Please provide a name!");
  process.exit();
}

const now = new Date(); // get current date & time

console.log(`Hello, ${name}! Today is ${now.toString()}`);
