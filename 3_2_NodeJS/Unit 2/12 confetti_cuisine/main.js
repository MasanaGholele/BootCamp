// Initialisation
const express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts");

const homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController");

//Enable express to serve static files
app.use(express.static("public"));

// Enable EJS layout rendering
app.set("view engine", "ejs");
// The layout file is rendered on Every page.
app.use(layouts);

// Middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

// Application settings
app.set("port", process.env.PORT || 3000);

// Routing
app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// The order of routes matter
// These routes must go below any preexisting routes, as they act as a catch-all and override any routes below them.
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// Start server
app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get("port")}`
    );
});