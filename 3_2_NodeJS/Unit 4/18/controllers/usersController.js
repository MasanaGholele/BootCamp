const User = require("../models/user");

// In the subscribers controller, the index action replaces your getAllSubscribers action. 
// Remember to modify the action’s corresponding route in main.js to point to index and to change the subscribers.ejs file to index.ejs. 
// This view should now live in a subscribers folder within views

module.exports = {
    index: (req, res) => {
        User.find({})
            .then(users => {
                // Render the index page with an array of users.
                res.render("users/index", {
                    users: users
                })
            })
            .catch(error => {
                console.log(`Error fetching users: ${error.message}`)
                res.redirect("/");
            });
    }
};                