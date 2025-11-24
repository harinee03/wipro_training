const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const USERS = [
  { id: 1, name: "Asha", email: "asha@gmail.com" },
  { id: 2, name: "Vikram", email: "vikram@gmail.com" }
];

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = USERS.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.listen(4000, () => console.log("Backend running on 4000"));
