const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/day22")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String
});

const User = mongoose.model("User", userSchema);

// Form
app.get("/", (req, res) => {
  res.send(`
    <h2>Registration with MongoDB</h2>
    <form action="/register" method="POST">
      <input type="text" name="firstname" placeholder="First Name" required />
      <input type="text" name="lastname" placeholder="Last Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Register</button>
    </form>
  `);
});

// Save to MongoDB
app.post("/register", async (req, res) => {
  const { firstname, lastname, email } = req.body;

  const newUser = new User({ firstname, lastname, email });
  await newUser.save();

  console.log("User saved:", newUser);
  res.send("Data successfully saved to MongoDB!");
});

// Start server
app.listen(3000, () => console.log("Challenge 2 running on port 3000"));
