const User = require("../models/user");

module.exports = {
    index: (req, res) => {
        User.find({})
            .then(users => {
                res.render("users/index", {
                    users: users
                })
            })
            .catch(error => {
                console.log(`Error fetching users: ${error.message}`)
                res.redirect("/");
            });
    },
    // BELOW IS THE NEW CODE:
    // Add the new action to render the new.ejs form
    new: (req, res) => {
        res.render("users/new");
    },
    // Add the create action to save the user to the database
    create: (req, res, next) => {
        // Creates users with form parameters
        // Assign userParams variable to the incoming data.
        let userParams = {
            name: {
                first: req.body.first,
                last: req.body.last
            },
            email: req.body.email,
            password: req.body.password,
            zipCode: req.body.zipCode
        };
        // Then call this function, and pass the userParams
        User.create(userParams)
            .then(user => {
                res.locals.redirect = "/users";
                res.locals.user = user;
                next();
            })
            .catch(error => {
                console.log(`Error saving user: ${error.message}`);
                next(error);
            });
    },
    // Render the view in a separate redirectView action
    // If user created successfully, redirect to index page
    // Else redirect to error page in case of failure
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },
    // More new code
    show: (req, res, next) => {
        // Collect the user's ID from the URL paramteters
        // This code only works if you define your route by using :id
        let userId = req.params.id;
        // Pass the user ID to the query
        // Because each ID is unique, you should expect a single user in return
        User.findById(userId)
            // If a user is found then add it as a local variable to the response object, and call the next middleware
            .then(user => {
                res.locals.user = user;
                next();
            })
            // Error handling
            .catch(error => {
                console.log(`Error fetching user by ID: ${error.message}`);
                next(error);
            });
    },
    showView: (req, res) => {
        res.render("users/show");
    }
};                