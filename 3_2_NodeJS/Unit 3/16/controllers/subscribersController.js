const Subscriber = require("../models/subscriber");

// Function to return all subscribers from the database
exports.getAllSubscribers = (req, res) => {
    // Find all subscribers
    Subscriber.find({})
        .exec() // execute query
        .then((subscribers) => {
            // Display the subscribers.ejs and pass it the subscribers object from the database
            res.render("subscribers", {
                subscribers: subscribers
            });
        })
        .catch((error) => { //error handling function
            console.log(error.message);
            return [];
        })
        .then(() => { // runs either way
            console.log("promise complete");
        });
};

// Function to display the contact page
exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
};

// Function that saves the subscriber into the database
exports.saveSubscriber = (req, res) => {
    // creates a new subscriber object
    // and fills it with the information the user typed
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    
    // saves the new subscriber into the database
    newSubscriber.save()
        .then(() => {
            res.render("thanks");
        })
        .catch(error => {
            res.send(error);
        });
};