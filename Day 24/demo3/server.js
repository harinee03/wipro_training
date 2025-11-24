// Creating RESTful APIs with Express.js ( Must in capstone project)
// Step 1: Initialize an express project 
// Step 2: Create route
// Step 3: Connect to DB( Mongo DB )
// Step 4: Return a JSON response ( that can be consumed in the front ends ie react ) 
// Step 5: test it with Postman or curl

const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const app = express();
app.use(bodyParser.json());
app.use('/api', studentRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})