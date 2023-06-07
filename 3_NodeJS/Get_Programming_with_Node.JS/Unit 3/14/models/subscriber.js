const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number
    });
    
module.exports = mongoose.model("Subscriber", subscriberSchema);

// A database schema defines how data is organized within a relational database

// You need to require mongoose in this module because both the schema and model
// use Mongoose methods to work