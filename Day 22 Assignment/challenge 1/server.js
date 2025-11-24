const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/register" method="POST">
      <input type="text" name="firstname" placeholder="First Name" />
      <input type="text" name="lastname" placeholder="Last Name" />
      <button type="submit">Register</button>
    </form>
  `);
});

app.post("/register", (req, res) => {
  const { firstname, lastname } = req.body;
  res.send(`Registration successful for ${firstname} ${lastname}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
