const User = require("../models/user");
const Subscriber = require("../models/subscriber");
const passport = require("passport");
const httpStatus = require("http-status-codes");
const token = process.env.TOKEN || "recipeT0k3n";

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
  verifyToken: (req, res, next) => {
    let token = req.query.apiToken;
    // Check whether a token exists as the query parameter.
    if (token) {
      // Search for a user with the provided API token
      User.findOne({ apiToken: token })
        .then(user => {
          // Call next if a user with the API token exists.
          if (user) next();
          else next(new Error("Invalid API token."));
        })
        // Pass an error to the error handler
        .catch(error => {
          next(new Error(error.message));
        });
    } else {
      next(new Error("Invalid API token."));
    }
  },
  login: (req, res) => {
    res.render("users/login");
  },
  validate: (req, res, next) => {
    req.sanitizeBody("email").normalizeEmail({
      all_lowercase: true
    }).trim();
    req.check("email", "Email is invalid").isEmail();
    req.check("zipCode", "Zip code is invalid").notEmpty().isInt().isLength({
      min: 5,
      max: 5
    }).equals(req.body.zipCode);
    req.check("password", "Password cannot be empty").notEmpty();
    req.getValidationResult().then((error) => {
      if (!error.isEmpty()) {
        let messages = error.array().map(e => e.msg);
        req.skip = true;
        req.flash("error", messages.join(" and "));
        res.locals.redirect = "/users/new";
        next();
      } else {
        next();
      }
    });
  },
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
  create: (req, res, next) => {
    if (req.skip) return next();
    let newUser = new User(getUserParams(req.body));
    User.register(newUser, req.body.password, (error, user) => {
      if (user) {
        req.flash("success", `${user.fullName}'s account created successfully!`);
        res.locals.redirect = "/users";
        res.locals.success = true;
        next();
      } else {
        req.flash("error", `Failed to create user account because: ${error.message}.`);
        res.locals.redirect = "/users/new";
        next(error);
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
    if (req.query.format === "json") {
      res.json(res.locals.user);
    } else {
      res.render("users/show");
    }
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
  },
  respondJSON: (req, res) => {
    res.json({
      status: httpStatus.OK,
      data: res.locals
    });
  },
  errorJSON: (error, req, res, next) => {
    let errorObject;
    if (error) {
      errorObject = {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message
      };
    } else {
      errorObject = {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: "Unknown Error."
      };
    }
    res.json(errorObject);
  },
};

