const express = require("express"); // Bring express to this file so we can use it.
const router = express.Router(); // Create a new router object to define routes for user-related operations.

const { registerUser } = require("../controllers/userController"); // Import the registerUser function from the userController.js file to handle user registration.

router.post("/register", registerUser); // Define a POST route for user registration that calls the registerUser function when accessed.
module.exports = router; // Export the router object so it can be used in other files.