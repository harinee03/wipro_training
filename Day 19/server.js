// server.js
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

let students = [];

// ---------------------------
// Middleware
// ---------------------------

// Validate POST body
function validateCreateStudent(req, res, next) {
  const { name, skills, course } = req.body;

  if (!name || !Array.isArray(skills) || !course) {
    return res.status(400).json({
      message: "Validation error: name, skills(array), and course are required"
    });
  }
  next();
}

// Check student exists
function validateStudentId(req, res, next) {
  const student = students.find((s) => s.id === req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  req.student = student;
  next();
}

// ---------------------------
// Routes
// ---------------------------

// Home route (optional)
app.get("/", (req, res) => {
  res.send("SkillTrack API is running...");
});

// US-01: Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// US-02: Get student by ID
app.get("/students/:id", validateStudentId, (req, res) => {
  res.json(req.student);
});

// US-03: Create new student
app.post("/students", validateCreateStudent, (req, res) => {
  const { name, skills, course } = req.body;

  const newStudent = {
    id: uuidv4(),
    name,
    skills,
    course,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// US-04: Update student
app.put("/students/:id", validateStudentId, (req, res) => {
  const { name, skills, course } = req.body;

  if (name) req.student.name = name;
  if (Array.isArray(skills)) req.student.skills = skills;
  if (course) req.student.course = course;

  res.json(req.student);
});

// US-05: Delete student
app.delete("/students/:id", validateStudentId, (req, res) => {
  students = students.filter((s) => s.id !== req.student.id);
  res.json({ message: "Student deleted successfully" });
});

// ---------------------------
// Start server
// ---------------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
