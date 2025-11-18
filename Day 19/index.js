//here we create  express js based web servre for Demostrating web server
const express = require('express');
const app = express();
const port = 3000;
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first Express.js server.');
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}
);
