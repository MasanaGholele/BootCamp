"use strict";

const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");

// New code
const router = require("./routes/index")
//
const methodOverride = require("method-override");

const expressValidator = require("express-validator");
const expressSession = require("express-session"),
  cookieParser = require("cookie-parser"),
  connectFlash = require("connect-flash");
const passport = require("passport");  

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.set("token", process.env.TOKEN || "recipeT0k3n")

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());
app.use(expressValidator())

app.use(layouts);
app.use(express.static("public"));

app.use(cookieParser("secret_passcode"));
app.use(expressSession({
  secret: "secret_passcode",
  cookie: {
    maxAge: 4000000
  },
  resave: false,
  saveUninitialized: false
}));

app.use(connectFlash());

app.use(passport.initialize())
app.use(passport.session());
const User = require("./models/user");
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});

app.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

// Telling Express.js to use it as middleware.
app.use("/", router)

app.listen(app.get("port"), () => {
  console.log(`Server running at http://127.0.0.1:${app.get("port")}`);
});
