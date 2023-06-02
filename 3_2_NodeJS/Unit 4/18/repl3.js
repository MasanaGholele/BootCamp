// Page 222 (edge)

const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    Course = require("./models/course");
var testCourse,
    testSubscriber;
mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

// Chaining promises

Subscriber.remove({})
    // Removed all subscribers and courses
    .then((items) => console.log(`Removed ${items.n} records!`))
    .then(() => {
        return Course.remove({});
    })
    .then((items) => console.log(`Removed ${items.n} records!`))
    // Create a new subscriber
    .then(() => {
        return Subscriber.create({
            name: "Jon",
            email: "jon@jonwexler.com",
            zipCode: "12345"
        });
    })
    .then(subscriber => {
        console.log(`Created Subscriber: ${subscriber.getInfo()}`);
    })
    .then(() => {
        return Subscriber.findOne({
            name: "Jon"
        });
    })
    .then(subscriber => {
        testSubscriber = subscriber;
        console.log(`Found one subscriber: ${subscriber.getInfo()}`);
    })
    // Create a new course
    .then(() => {
        return Course.create({
            title: "Tomato Land",
            description: "Locally farmed tomatoes only",
            zipCode: 12345,
            items: ["cherry", "heirloom"]
        });
    })
    .then(course => {
        testCourse = course;
        console.log(`Created course: ${course.title}`);
    })
    // Associate the course with subscriber
    .then(() => {
        testSubscriber.courses.push(testCourse);
        testSubscriber.save();
    })
    // Populate course document in subscriber
    .then(() => {
        return Subscriber.populate(testSubscriber, "courses");
    })
    .then(subscriber => console.log(subscriber))
    // Query subscribers where ObjectID is same as course
    .then(() => {
        return Subscriber.find({
            courses: new mongoose.Types.ObjectId(testCourse._id)
        });
    })
    .then(subscriber => console.log(subscriber));        