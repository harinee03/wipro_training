const express = require("express");
const router = express.Router();

let students = []; 

// USER STORY 2 — Validation Middleware

function validateStudent(req, res, next) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and Email are required!",
    });
  }
  next();
}

// GET all students 
router.get("/", (req, res) => {
  res.render("students", { students });
});

// Add new student
router.post("/add", validateStudent, (req, res) => {
  const { name, email } = req.body;

  students.push({ name, email });

  res.redirect("/students");
});

// Example route to deliberately throw an error
router.get("/error-test", (req, res) => {
  throw new Error("Test error from student route!");
});

module.exports = router;
