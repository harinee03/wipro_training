const express = require('express');
const router = express.Router();
const validateCourseId = require('../middleware/validateCourseId');
router.get('/', (req, res) => {
  res.json([
    { id: '101', name: 'React Mastery', duration: '6 weeks' },
    { id: '102', name: 'Node Essentials', duration: '4 weeks' }
  ]);
});

// Challenge 2 + 3: dynamic route with validation middleware
router.get('/:id', validateCourseId, (req, res) => {
  const id = req.params.id;

  res.json({ id: id, name: 'React Mastery', duration: '6 weeks' });
});

module.exports = router;
