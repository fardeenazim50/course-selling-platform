const express = require("express"); // Bring the express framework into this file so we can use it to create a server

const app = express(); // create a new express application and store it in app variable


// Middleware
app.use(express.json()); // Tell express to automatically understand JSON data sent by the client
const userRoutes = require("./routes/userRoutes"); // Import the userRoutes module to handle user-related routes
// Home Route
app.get("/", (req, res) => {   //when someone visits the home page run this code
    res.send("Welcome to Course Selling Platform Backend 🚀");   // send message back to the user's browser
});
app.use("/api/users", userRoutes); 

module.exports = app; // Share the app object, so other files can use it.