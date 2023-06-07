const Subscriber = require("../models/subscriber"),
    mongoose = require("mongoose");
exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({})
        .then((result) => {
            req.data = result;
            next();
        })
        .catch((error) => {
            next(error);

        })
}

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
        .then((result) => {
            res.render("thanks");
        })
        .catch((error) => {
            res.send(error);
        })
};

