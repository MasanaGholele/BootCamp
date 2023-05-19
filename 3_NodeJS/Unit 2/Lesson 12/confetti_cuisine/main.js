"use strict";

// 12.1 Installing dependecies -ejs, express, ejs layouts, status codes

// 12.2 File structure

// 12.3 Requiring modules and initiating the express app
const express = require("express"),
    app = express(),

    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts");

// 12.7 set the app to use ejs and assign the port
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

// 12.4
app.use(
    express.urlencoded({  // tell the Express.js app to use body-parser for processing URLencoded and JSON parameters
        extended: false
    })
);

app.use(express.json());                // application is now ready to analyse data within incoming requests
app.use(layouts);                       // Set the application to use the layout module.
app.use(express.static("public"));      // allows individual assets in the application to be served directly

app.get("/", (req, res) => {
    res.render("index");
});

// 12.5 Adding routes in homeController

// 12.6 Adding routes for the courses page, contact page, and contact form submission.
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// 12.12 Add error handlers as middleware functions.
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});


