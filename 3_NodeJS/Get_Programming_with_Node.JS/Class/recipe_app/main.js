

"use strict";
const express = require("express"),
    app = express(),
    router = express.Router(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    usersController = require("./controllers/usersController"),
    layouts = require("express-ejs-layouts"),
    subscribersController = require("./controllers/subscribersController"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");
    
// 14.1  Set up the connection to your database
mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);

// from source code
// 14.1
const db = mongoose.connection;  // Assign the database to the db variable.

// 14.2
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// var myQuery = Subscriber.findOne({
//     name: "Jon Wexler"
// }).where("email", /wexler/);

// myQuery.exec((error, data) => {
//     if (data) console.log(data.name);
// });

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use("/", router);
app.use(express.json());
router.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

// app.get("/contact", subscribersController.getSubscriptionPage);
// app.post("/subscribe", subscribersController.saveSubscriber);
// app.get("/name", homeController.respondWithName);
// app.get("/items/:vegetable", homeController.sendReqParam);
router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create, usersController.redirectView);

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    //res.send(req.data); //we are not sending anymore we are rendering from the ejs not js
    res.render("subscribers", { subscribers: req.data });
});
router.get
    ("/users/:id", usersController.show, usersController.showView)
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://127.0.0.1:27017${app.get("port")}`);
});

// our own practice
// const db = mongoose.connection;
// db.once("open", () => {
//     console.log("Successfully connected to MongoDB using Mongoose!");
// });


// create using a "promise", the book's method do not work anymore
// Subscriber.create(
//     {
//         name: "3rdJon Wexler",
//         email: "3rdjon@jonwexler.com"
//     })
//     .then((result) => {
//         console.log("printing result");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("printing error");
//         console.log(err);
//     })

// let query = Subscriber.findOne({ name: "3rdJon Wexler" })
//     .where("email", /wexler/);
// query.exec()
//     .then((result) => {
//         console.log("result1");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("error1");
//         console.log(error);
//     })

// Subscriber.findOne({ name: "2ndJon Wexler" })
//     .where("email", /wexler/)
//     .then((result) => {
//         console.log("result2");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("error2");
//         console.log(error);
//     })

// Subscriber.findOne({ name: "Jon Wexler" })
//     .where("email", /wexler/)
//     .then((result) => {
//         console.log("result3");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("error3");
//         console.log(error);
//     })