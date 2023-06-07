const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");
mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

// Create a subscriber n0 1
Subscriber.create({
    name: "Jon",
    email: "jon@jonwexler.com",
    zipCode: "12345"
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));
var subscriber;

// Find the subscriber
Subscriber.findOne({
    name: "Jon"
}).then(result => {
    subscriber = result;
})

// Create a subscriber n0 2
Subscriber.create({
    name: "Chef Eggplant",
    email: "eggplant@recipeapp.com",
    zipCode: 20331
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));
var subscriber;

// Find the subscriber
Subscriber.findOne({
    name: "Chef"
}).then(result => {
    subscriber = result;
})

// Create a subscriber n0 3
Subscriber.create({
    name: "Professor Souffle",
    email: "souffle@recipeapp.com",
    zipCode: 19103
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));
var subscriber;

// Find the subscriber
Subscriber.findOne({
    name: "Professor"
}).then(result => {
    subscriber = result;
})