const express = require("express");
const app = express();

app.use(express.json());


//challenge 1
app.get("/api/courses", (req, res) => {
  res.json(["Course 1", "Course 2", "Course 3"]);
});

//challenge 2
app.get("/api/users", (req, res) => {
  res.json(["User 1", "User 2", "User 3"]);
});

//challenge 3
app.get("/status", (req, res) => {
  res.send("App is live");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;
