// Require the subscriber module
const Subscriber = require("../models/subscriber");

// Export getAllSubscribers to pass data from the database to the next middleware function
exports.getAllSubscribers = (req, res, next) => {
    // retrieve all sbscribers
    Subscriber.find({})
        .exec()
        .then((subscribers) => {
            // req.data = subscribers; // Add the data from the database to the request object
            // next();

            // Replaced the above code to directly render it
            res.render("subscribers", {
                subscribers: subscribers
            });
        })
        .catch(error => next(error)) // Pass an error to the next middleware function
        .then(() => {
            console.log("promise complete");
        });
};

// Renders the contact page
exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
};

// Saves the subscriber
exports.saveSubscriber = (req, res) => {
    // Creates a new subscriber
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });

    // newSubscriber.save((error, result) => {
    //     if (error) res.send(error);
    //     res.render("thanks");
    // });

    // Re-wrote callback function into a promise.
    newSubscriber.save()
        .then(res.render("thanks"))
        .catch(error => res.send(error))
};