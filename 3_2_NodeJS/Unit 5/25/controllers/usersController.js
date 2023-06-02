const User = require("../models/user");
const Subscriber = require("../models/subscriber");
const bcrypt = require("bcrypt");
const passport = require("passport");

getUserParams = body => {
  return {
    name: {
      first: body.first,
      last: body.last
    },
    email: body.email,
    password: body.password,
    zipCode: body.zipCode
  };
};

function isSubscriber() {
  Subscriber.findById
}

module.exports = {
  // Load login page
  login: (req, res) => {
    res.render("users/login");
  },
  validate: (req, res, next) => {
    // Convert to lower-case and trim whitespace.
    req.sanitizeBody("email").normalizeEmail({
      all_lowercase: true
    }).trim();
    // Validates email
    req.check("email", "Email is invalid").isEmail();
    // Validates zipCode: ensures value isn't empty, is integer & length = 5 digits.
    req.check("zipCode", "Zip code is invalid").notEmpty().isInt().isLength({
      min: 5,
      max: 5
    }).equals(req.body.zipCode);
    // Checks password isn't empty.
    req.check("password", "Password cannot be empty").notEmpty();
    // Checks if an error occured  
    req.getValidationResult().then((error) => {
      if (!error.isEmpty()) {
        // Add the error messages to an array
        let messages = error.array().map(e => e.msg);
        // If an error occurs, set the skip property to true
        // This tells your next middleware function, the create function, not to process your user data
        // because of validation errors and instead skip to your redirectView action.
        // For this code to work, you need to add if (req.skip) next() as the first line in the create action.
        // This way, when req.skip is true, you continue to the next middleware immedately.
        req.skip = true;
        // Converts the error messages from an array to a string, joined by the word: and.
        req.flash("error", messages.join(" and "));
        // Redirects users to the sign up page.
        // If their sign-up details are incorrect.
        res.locals.redirect = "/users/new";
        next();
      } else {
        next();
      }
    });
  },
  // Re-designed the authenticate function in favour of using hashed passwords.
  // // Authenticate (login) function
  // authenticate: (req, res, next) => {
  //   User.findOne({
  //     // Try to find the email the user entered
  //     email: req.body.email
  //   })
  //     .then(user => {
  //       // Check if the password the user entered is the same as the password stored in the database
  //       if (user && user.password === req.body.password) {
  //         res.locals.redirect = `/users/${user._id}`;
  //         req.flash("success", `${user.fullName}'s logged in successfully!`);
  //         res.locals.user = user;
  //         next();
  //       } else {
  //         req.flash("error", "Your account or password is incorrect. Please try again or contact your system administrator!");
  //         // Set the redirect path
  //         // That the re-direct view action will handle.
  //         res.locals.redirect = "/users/login";
  //         // Calls the next middleware function. which is the redirectView function
  //         next();
  //       }
  //     })
  //     // Logs any errors
  //     .catch(error => {
  //       console.log(`Error logging in user: ${error.message}`);
  //       next(error);
  //     });
  // },

  /// Replacing this in favor of passport
  authenticateOld: (req, res, next) => {
    // Query for one user by email.
    User.findOne({ email: req.body.email })
      .then(user => {
        // Check whether a user is found.
        if (user) {
          // Call the password comparison method on the User model.
          user.passwordComparison(req.body.password)
            // Check whether the passwords match
            .then(passwordsMatch => {
              if (passwordsMatch) {
                res.locals.redirect = `/users/${user._id}`;
                req.flash("success", `${user.fullName}'s logged in successfully!`);
                res.locals.user = user;
              } else {
                req.flash("error", "Failed to log in user account: Incorrect Password.");
                res.locals.redirect = "/users/login";
              }
              // Call the next middleware function with the re-direct path and flash message set.
              next();
            });
        } else {
          req.flash("error", "Failed to log in user account: User account not found.");
          res.locals.redirect = "/users/login";
          next();
        }
      })
      // Log errors to the console and pass to the next middleware error handler.
      .catch(error => {
        console.log(`Error logging in user: ${error.message}`);
        next(error);
      });
  },
  //Passport login:
  authenticate: passport.authenticate("local", {
    failureRedirect: "/users/login",
    failureFlash: "Failed to login.",
    successRedirect: "/",
    successFlash: "Logged in!"
  }),
  index: (req, res, next) => {
    User.find()
      .then(users => {
        res.locals.users = users;
        next();
      })
      .catch(error => {
        console.log(`Error fetching users: ${error.message}`);
        next(error);
      });
  },
  // Logout functionality:
  logout: (req, res, next) => {
    req.logout();
    req.flash("success", "You have been logged out!");
    res.locals.redirect = "/";
    next();
  },
  indexView: (req, res) => {
    res.render("users/index");
  },
  new: (req, res) => {
    res.render("users/new");
  },
  // create: (req, res, next) => {
  //   // Added this code
  //   // If the validate function fails, we don't want to even attempt creation
  //   // We just want to skip to the next middleware function.
  //   if (req.skip) {
  //     console.log('Error occured skipping create request.')
  //     next();
  //     return;
  //   }

  //   let userParams = getUserParams(req.body);
  //   User.create(userParams)
  //     .then(user => {
  //       req.flash("success", `${user.fullName}'s account created successfully!`);
  //       res.locals.redirect = "/users";
  //       res.locals.user = user;
  //       next();
  //     })
  //     .catch(error => {
  //       console.log(`Error saving user: ${error.message}`);
  //       res.locals.redirect = "/users/new";
  //       req.flash("error", `Failed to create user account because: ${error.message}.`);
  //       next();
  //     });
  // },
  create: (req, res, next) => {
    if (req.skip) return next();
    let newUser = new User(getUserParams(req.body));
    // Register new users
    User.register(newUser, req.body.password, (error, user) => {
      if (user) {
        req.flash("success", `${user.fullName}'s account created successfully!`);
        // Set redirect for successful user creation.
        res.locals.redirect = "/users";
        next();
      } else {
        req.flash("error", `Failed to create user account because: ${error.message}.`);
        res.locals.redirect = "/users/new";
        next();
      }
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
        req.flash("error", `Failed to fetch user account because: ${error.message}.`);
        next(error);
      });
  },
  showView: (req, res) => {
    res.render("users/show");
  },
  edit: (req, res, next) => {
    let userId = req.params.id;
    User.findById(userId)
      .then(user => {
        res.render("users/edit", {
          user: user
        });
      })
      .catch(error => {
        console.log(`Error fetching user by ID: ${error.message}`);
        req.flash("error", `Failed to fetch user account because: ${error.message}.`);
        next(error);
      });
  },
  update: (req, res, next) => {
    let userId = req.params.id,
      userParams = {
        name: {
          first: req.body.first,
          last: req.body.last
        },
        email: req.body.email,
        password: req.body.password,
        zipCode: req.body.zipCode
      };
    User.findByIdAndUpdate(userId, {
      $set: userParams
    })
      .then(user => {
        res.locals.redirect = `/users/${userId}`;
        res.locals.user = user;
        req.flash("success", `${user.fullName}'s account successfully updated!`);
        next();
      })
      .catch(error => {
        console.log(`Error updating user by ID: ${error.message}`);
        req.flash("error", `Failed to edit user account because: ${error.message}.`);
        next(error);
      });
  },
  delete: (req, res, next) => {
    let userId = req.params.id;
    User.findByIdAndRemove(userId)
      .then(deletedUser => {
        res.locals.redirect = "/users";
        req.flash("success", `${deletedUser.fullName}'s account successfully deleted.`);
        next();
      })
      .catch(error => {
        console.log(`Error deleting user by ID: ${error.message}`);
        req.flash("error", `Failed to delete user account because: ${error.message}.`);
        next();
      });
  }
};

