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
    new: (req, res) => {
        res.render("users/new");
    },
    create: (req, res, next) => {
        let userParams = {
            name: {
                first: req.body.first,
                last: req.body.last
            },
            email: req.body.email,
            password: req.body.password,
            zipCode: req.body.zipCode
        };
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
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },
    show: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.locals.user = user;
                next();
            })
            .catch(error => {
                console.log(`Error fetching user by ID: ${error.message}`);
                next(error);
            });
    },
    showView: (req, res) => {
        res.render("users/show");
    },
    //Gets a user from the DB by user's ID and loads a view to edit the user
    edit: (req, res, next) => {
        let userId = req.params.id;
        // Locates a user by their ID in the DB
        User.findById(userId)
            .then(user => {
                // Render the user edit page for a specific user in the database
                res.render("users/edit", {
                    user: user
                });
            })
            .catch(error => {
                console.log(`Error fetching user by ID: ${error.message}`);
                next(error);
            });
    },
    // Called when the edit form is submitted
    //It identifies the user's ID and userParams and passes those values into Mongoose
    update: (req, res, next) => {
        let userId = req.params.id,
            // Collects the user parameters from the request
            userParams = {
                name: {
                    first: req.body.first,
                    last: req.body.last
                },
                email: req.body.email,
                password: req.body.password,
                zipCode: req.body.zipCode
            };
            //Use findByIdAndUpdate to locate a user by ID and update the document record in one command
        User.findByIdAndUpdate(userId, {
            $set: userParams
        })
            .then(user => {
                // Add user to response as a local variable, and call the next middleware function.
                // Why would we want to do that though?
                res.locals.redirect = `/users/${userId}`;
                res.locals.user = user;
                next();
            })
            .catch(error => {
                console.log(`Error updating user by ID: ${error.message}`);
                next(error);
            });
    },
    // Delete function
    // Locates the record using Mongoose's findByIdAndRemove
    // If successful it logs the deleted user to the console and redirects the nxt middleware function to the users index page
    // Otherwise log error
    delete: (req, res, next) => {
        let userId = req.params.id;
        User.findByIdAndRemove(userId) 
       .then(() => {
       res.locals.redirect = "/users";
       next();
       })
       .catch(error => {
       console.log(`Error deleting user by ID: ${error.message}`);
       next();
       });
       }
};                