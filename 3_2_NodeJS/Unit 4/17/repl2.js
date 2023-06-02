// Part 1
const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");
const Course = require("./models/course");
const subscriber = require("./models/subscriber");

mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

var testCourse, testSubscriber;

Course.create({
    title: "Tomato Land",
    description: "Locally farmed tomatoes only",
    zipCode: 12345,
    items: ["cherry", "heirloom"]
})
    .then(course => testCourse = course);

// Find any subscriber
Subscriber.findOne({})
    .then(
        subscriber => {
            testSubscriber = subscriber;
        }
    );







// Part 2
// Add the course to the subscriber
testSubscriber.courses.push(testCourse._id);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
    console.log(subscriber)
);