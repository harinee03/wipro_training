const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

  // CHALLENGE 1 — Logging Middleware

app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${req.method}] ${req.url} at ${time}`);
  next();
});

// CHALLENGE 2 — Built-in Middleware

app.use(express.json());            
app.use(express.urlencoded({ extended: true })); 

app.post("/users", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body,
  });
});
//CHALLENGE 3 — Template Engine (EJS)

app.set("view engine", "ejs");
app.set("views", "./views");

// Route to render course list
app.get("/courses", (req, res) => {
  const courseList = [
    "Node.js",
    "Express.js",
    "JavaScript",
    "Database Basics",
    "REST APIs",
  ];

  res.render("courses", { courses: courseList });
});

//START SERVER

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
