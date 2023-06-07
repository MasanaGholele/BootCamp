const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router()
const Subscriber = require("./models/subscriber");
const subscribersController = require("./controllers/subscribersController");
const usersController = require("./controllers/usersController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");


// HTTP form element only supports GET and PUT requests.
// It's important to use the intended HTTP method with your CRUD functions
// A solution is to use the method -override package
// It is a middleware that interprets requests according to a specific query paranetert and HTTP requests
// You can interpret POST requests as PUT requests
const methodOverride = require("method-override");

mongoose.connect(
  "mongodb://127.0.0.1:27017/recipe_db",
  { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(layouts);
app.use(express.static("public"));

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  console.log(req.data);
  res.render("subscribers", {subscribers: req.data})
});

app.use("/", router);

// Method ovveride
router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
 }));

router.get("/users", usersController.index);
router.get("/users/new", usersController.new);

router.get("/users/:id", usersController.show, usersController.showView)
// Add routes to handle editing
router.get("/users/:id/edit", usersController.edit);
// Process data from the edit form and then display the user show page
router.put("/users/:id/update", usersController.update, usersController.redirectView);
// Delete route
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);
////////////////////////////
router.post("/users/create", usersController.create, usersController.redirectView)
router.get("/contact", subscribersController.getSubscriptionPage);
router.post("/subscribe", subscribersController.saveSubscriber);
app.get("/", homeController.respondWithName);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});