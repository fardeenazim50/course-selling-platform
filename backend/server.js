const app = require("./app");  // Bring express app from app.js into this file
require("dotenv").config(); // Load environment variables from a .env file into process.env

const connectDB = require("./config/db"); // Import the connectDB function from the db.js file to establish a connection to the MongoDB database

const PORT = 5000; // Store the port number where the server will run

connectDB(); // Call the connectDB function to establish a connection to the MongoDB database

app.listen(PORT, () => {   // start the server and listens for incoming requests on the specified port
    console.log(`🚀 Server is running on http://localhost:${PORT}`); // Display a message in the terminal showing that the server has started successfully.
});



