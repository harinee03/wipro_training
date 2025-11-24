const express = require("express");
const app = express();
//challenge 2
const { body, validationResult } = require("express-validator");
//challenge 3
const rateLimit = require("express-rate-limit");

app.use(express.json());

//challenge 3
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Too many requests" }
});

app.use(limiter);

let courses = [
  { id: 1, name: "Node Basics", duration: "4 weeks" },
  { id: 2, name: "React Basics", duration: "6 weeks" }
];

// GET all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// POST create a course
app.post(
  "/api/courses",
  [
    body("name").notEmpty().withMessage("Course name is required"),
    body("duration").notEmpty().withMessage("Course duration is required")
  ],
  (req, res) => {
    //challenge 2
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
  
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const newCourse = {
      id: courses.length + 1,
      name: req.body.name,
      duration: req.body.duration
    };

    courses.push(newCourse);
    res.json(newCourse);
  }
);


// PUT update a course
app.put("/api/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  course.name = req.body.name;
  course.duration = req.body.duration;

  res.json(course);
});

// DELETE a course
app.delete("/api/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  courses = courses.filter(c => c.id !== id);

  res.json({ message: "Course deleted" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
