const express = require("express");
const morgan = require("morgan");
const path = require("path");

const studentRoutes = require("./routes/students");

const app = express();

// USER STORY 3 — Built-in Middleware for Parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// USER STORY 4 — Morgan Logging (Development Mode)

app.use(morgan("dev")); 

// USER STORY 1 — Custom Logging Middleware

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});


// TEMPLATE ENGINE SETUP (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/students", studentRoutes);

// Home Page
app.get("/", (req, res) => {
  res.render("index", { title: "SkillTrack Dashboard" });
});

// USER STORY 5 — Error Handling Middleware

app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err.message);
  res.status(500).json({
    success: false,
    message: "Something went wrong! Please try again later.",
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
