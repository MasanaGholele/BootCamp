
// 16.2

const mongoose = require("mongoose"),

    //  Creates a subscriber model
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number
    });

// 16.3 export the model
module.exports = mongoose.model("Subscriber", subscriberSchema);

// 16.4 once they post the subscribers controller will respond to the POST route