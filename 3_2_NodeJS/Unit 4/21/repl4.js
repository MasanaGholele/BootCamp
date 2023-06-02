// Pg 228 (edge), 196 textbook

// PART 1
const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    Course = require("./models/course"),
    User = require('./models/user');

mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

// Create a new user
var testUser;
User.create({
    name: {
        first: "Jon",
        last: "Wexler "
    },
    email: "jon@jonwexler.com",
    password: "pass123"
}) // After the user's been created
    .then(user => {
        // Store the user inside the global testUser variable.
        testUser = user;
        // Search for the user email in the subscriber database
        return Subscriber.findOne({
            email: user.email
        });
    })
    .then(subscriber => {
        // Link the user to their corresponding subscribed account        
        testUser.subscribedAccount = subscriber;
        // Save the new user to the database.
        testUser.save().then(user => console.log("user updated"));
    })
    .catch(error => console.log(error.message));