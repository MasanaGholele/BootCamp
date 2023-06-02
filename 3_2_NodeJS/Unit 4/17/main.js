const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Subscriber = require("./models/subscriber");
const subscribersController = require("./controllers/subscribersController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");

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

var subscriber1 = new Subscriber({
  name: "Jon4 Wexler",
  email: "jon4@jonwexler.com"
});

subscriber1.save()
  .then(data => console.log(data)) // Log saved data document
  .catch(error => console.log(error));

Subscriber.create(
  {
    name: "Jon5 Wexler",
    email: "jon5@jonwexler.com"
  }
)
  .catch(err => console.log(err))

var myQuery = Subscriber.findOne({
  name: "Jon Wexler"
})
  .where("email", /wexler/);

myQuery.exec()
  .then(data => console.log(data))
  .catch(err => console.log(err));


// GET: /subscribers Routing
// Call the getAllSubscribers in the subscribersController file
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  // This logs & sends the data that was added in the subscribersController
  console.log(req.data);
  // res.send(req.data);

  // This will load the subscriber.ejs file and pass it the subscribers data
  res.render("subscribers", {subscribers: req.data})
});
app.get("/", homeController.respondWithName);


app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});