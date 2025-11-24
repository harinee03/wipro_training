// here we will set up a basic Express server
const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Importing user routes
const app = express();
const PORT = process.env.PORT || 3000;
const joiMiddleware = require('./joi/joiMiddleware'); // Importing Joi validation middleware
const { registerValidationRules } = require('./express-validator/userValidation'); // Importing express-validator rules
const { getValidationResult } = require('./express-validator/validationResult');  //importing validation result handler
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/routes', userRoutes); // Using user routes for /api/users endpoint
app.post('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});
app.post('/signup', registerValidationRules, (req, res) => {
   const errors = getValidationResult(req);
   if (errors) {
       return res.status(400).json({ success: false, errors });
   }
   res.json({success: true, message: "Signup successful"});
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Explanation of the code:
// 1. We import the Express package and the user routes defined in routes/userRoutes.js.
// 2. We create an Express application instance.
// 3. We set up middleware to parse JSON request bodies.
// 4. We use the user routes for the /routes endpoint.
// 5. We start the server and listen on the specified port. ie 3000 or from environment variable.
