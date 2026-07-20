const mongoose = require("mongoose"); //Bring mongoose to this this file so we can crerate a schema and model.

const userSchema = new mongoose.Schema( // creatre a new bluprint called userSchema that defines how a user document should look.
    {
        name: {
            type: String,
            required: true,
            trim: true,
        }, // Every user must have a name, and it must be text.

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        }, // Every user must have an email, and it must be unique, lowercase, and trimmed.

        password: {
            type: String,
            required: true,
            minLength: 8,
        }, // Every user must have a password, and it must be at least 8 characters.   

        role: {
            type: String,
            enum: ["student", "instructor", "admin"],
            default: "student",
        }, // Every user must have a role, and it must be one of the following: "student", "instructor", or "admin". The default role is "student".
    },
    {
        timestamp: true,
    } // Automatically creates two fields acreatedAt, updatedAt
);

const User = mongoose.model("User", userSchema); // create a User model using the userSchema blueprint.
module.exports = User; // Allow others files to use the User model.