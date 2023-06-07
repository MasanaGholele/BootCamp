"use strict";

// In this lesson we implemented a login feature
// We also hashed our passwords and stored the hashed version instead of the plain text version
// To increase the security of our application.
// We added more validations on the input data through an additional middleware function to sanitize data before it's saved.

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");
const subscribersController = require("./controllers/subscribersController");
const usersController = require("./controllers/usersController");
const coursesController = require("./controllers/coursesController");
const router = express.Router();
const methodOverride = require("method-override");
// Import express validator
// Old version required: "express-validator": "^5.3.1",
const expressValidator = require("express-validator");

const expressSession = require("express-session"),
  cookieParser = require("cookie-parser"),
  connectFlash = require("connect-flash");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
// Tells Express.js to use it
// Must come after express.json() and express.urlencoded() middleware is introduced,
// because the request body must be parsed before you can validate it.
router.use(expressValidator())

app.use(layouts);
app.use(express.static("public"));

// NEW CODE
router.use(cookieParser("secret_passcode"));
router.use(expressSession({
  secret: "secret_passcode",
  cookie: {
    maxAge: 4000000
  },
  resave: false,
  saveUninitialized: false
}));
router.use(connectFlash());

router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});


router.get("/", (req, res) => {
  res.render("index");
});

router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

//
router.get("/subscribers", subscribersController.index, subscribersController.indexView);
router.get("/subscribers/new", subscribersController.new);
router.post("/subscribers/create", subscribersController.create, subscribersController.redirectView);
router.get("/subscribers/:id", subscribersController.show, subscribersController.showView);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put("/subscribers/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/subscribers/:id/delete", subscribersController.delete, subscribersController.redirectView);
//
router.get("/users", usersController.index, usersController.indexView);
// Login Routing
router.get("/users/login", usersController.login);
router.post("/users/login", usersController.authenticate, usersController.redirectView);
//
router.get("/users/new", usersController.new);
// Add validate middleware to the route.
router.post("/users/create", usersController.validate, usersController.create, usersController.redirectView);
router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);
//
router.get("/courses", coursesController.index, coursesController.indexView);
router.get("/courses/new", coursesController.new);
router.post("/courses/create", coursesController.create, coursesController.redirectView);
router.get("/courses/:id", coursesController.show, coursesController.showView);
router.get("/courses/:id/edit", coursesController.edit);
router.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
router.delete("/courses/:id/delete", coursesController.delete, coursesController.redirectView);
//
router.get("/contact", subscribersController.getSubscriptionPage);
router.post("/subscribe", subscribersController.saveSubscriber);
//
router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

app.use("/", router)

app.listen(app.get("port"), () => {
  console.log(`Server running at http://127.0.0.1:${app.get("port")}`);
});
