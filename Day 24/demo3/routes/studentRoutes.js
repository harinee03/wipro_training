//in routes folder/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
// Define route to get all students
router.get('/students', studentController.getAllStudents);
// Define route to get a student by ID
router.get('/students/:id', studentController.getStudentById);
// Define route to create a new student
router.post('/students', studentController.createStudent);
// Define route to update a student by ID
router.put('/students/:id', studentController.updateStudent);
// Define route to delete a student by ID
router.delete('/students/:id', studentController.deleteStudent);
module.exports = router;