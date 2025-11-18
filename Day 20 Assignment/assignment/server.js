const express = require('express');
const app = express();
const coursesRouter = require('./routes/courses');

app.use(express.json());
// Challenge 1
app.get('/', (req, res) => {
  res.send('Welcome to SkillSphere LMS API');
});

app.use('/courses', coursesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
