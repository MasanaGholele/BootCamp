const subscriber = require("../models/subscriber");
const Subscriber = require("../models/subscriber");

// For the subscribers controller the new and create actions
// Replace the getSubscriptionPage and saveSubscriber

exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({})
        .exec()
        .then((subscribers) => {
            res.render("subscribers", {
                subscribers: subscribers
            });
        })
        .catch(error => next(error)) 
        .then(() => {
            console.log("promise complete");
        });
};

exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
};

exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });

    newSubscriber.save()
        .then(res.render("thanks"))
        .catch(error => res.send(error))
};