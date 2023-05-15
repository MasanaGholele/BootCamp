// do not comment this one out
const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber"),
    User = require("./models/user");
mongoose.connect(
    "mongodb://127.0.0.1:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

// Subscriber.create({
//     name: "Jon Wexler",
//     email: "jon@jonwexler.com",
//     zipCode: 10002
// })
//     .then((result) => {
//         console.log("result");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("err");
//         console.log(err);
//     })

// const mongoose = require("mongoose"),
//     Subscriber = require("./models/subscriber");
// mongoose.connect(
//     "mongodb://127.0.0.1:27017/recipe_db",
//     { useNewUrlParser: true }
// );


// Subscriber.create({
//     name: "Jon2",
//     email: "jo02n@jonwexler.com",
//     zipCode: "12345"
// })
//     .then(subscriber => console.log(subscriber))
//     .catch(error => console.log(error.message));
// var subscriber;


// Subscriber.findOne({
//     name: "Jon2"
// }).then(result => {
//     subscriber = result;
//     console.log(subscriber.getInfo());
// });
// mongoose.Promise = global.Promise;





// Subscriber.findOne({
//     name: "Jon"
// })
//     .then(subscr => {
//         console.log(subscr.getInfo());
//     });




// Subscriber.create({
//     name: "Jon3 Wexler",
//     email: "jon3@jonwexler.com",
//     zipCode: 12300
// })

// Subscriber.create({
//     name: "Jon4 Wexler",
//     email: "jon4@jonwexler.com",
//     zipCode: 12300
// })



// Subscriber.findOne({
//     name: "Jon"
// })
//     .then(subscr => {
//         console.log("printing local subscribers");
//         console.log(subscr.findLocalSubscribers());
//     })
// .catch (error => {
//     console.log("error occurred");
//     console.log(error);
// })

// Subscriber.findOne({
//     name: "Jon2"
// })
//     .then((result) => {
//         result.findLocalSubscribers()
//             .then((result) => {
//                 console.log("result of local sub");
//                 console.log(result);
//             })
//     })
//     .catch((error) => {
//         console.log("error");
//         console.log(error);
//     })


// Subscriber.find({ courses: mongoose.Types.ObjectId("5986b8aad7f31c479a983b42") })
// const Course = require("./models/course");
// let testCourse, testSubscriber;
// Course.create({
//     title: "Tomato Land",
//     description: "Locally farmed tomatoes only",
//     zipCode: 12345,
//     items: ["cherry", "heirloom"]
//     })
//     .then(course => testCourse = course);

// Subscriber.findOne({}).then(
//     subscriber => testSubscriber = subscriber
// );
// testSubscriber.courses.push(testCourse._id);
// testSubscriber.save();
// Subscriber.populate(testSubscriber, "courses").then(subscriber =>
//     console.log(subscriber)
// );

// make sure you use one of your 
console.log(Subscriber.find({ courses: new mongoose.Types.ObjectId("64547397d39850f3fc7f7f6d") }));

const User = require("./models/user");

var testUser;
User.create({
    name: {
        first: "Jon",
        last: "Wexler"
    },
    email: "jon@jonwexler.com",
    password: "pass123"
})
    .then(user => testUser = user)
    .catch(error => console.log(error.message));





User.findOne({ email: "jon@jonwexler.com" }).then(u => testUser = u)
    .catch(e => console.log(e.message));




var testUser;
User.create({
    name: {
        first: "Jon",
        last: "Wexler "
    },
    email: "jon@jonwexler.com",
    password: "pass123"
})
    .then(user => {
        testUser = user;
        return Subscriber.findOne({
            email: user.email
        });
    })
    .then(subscriber => {
        testUser.subscribedAccount = subscriber;
        testUser.save().then(user => console.log("user updated"));
    })
    .catch(error => console.log(error.message));