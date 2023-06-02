const mongoose = require("mongoose");
const Subscriber = require("./subscriber");
const { Schema } = mongoose,

    userSchema = new Schema({
        name: {
            first: {
                type: String,
                trim: true
            },
            last: {
                type: String,
                trim: true
            }
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        zipCode: {
            type: Number,
            min: [1000, "Zip code too short"],
            max: 99999
        },
        password: {
            type: String,
            required: true
        },
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
        subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" }
    }, {
        timestamps: true
    });

userSchema.virtual("fullName")
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    });

// Ideally, whenever a new user is created, you'd like to check for an existing subscriber with the same email address and associate the two.
// You do so with a Mongoose pre("save") hook
// Mongoose offers some methods, called hooks, that allow you to perform an operation before a database change, such as save, is run.
// This hooks run right before a user is created or save
// It takes the next middleware function as a parameter so that when this step is complete, it can call the next middleware function.

// You perform this function only if the user doesn't already ahve an associated subscriber, which saves time
// Search for one subscriber account, using the user's email address.
// If a subscruber is found with a matching email adress, asign that subscriber to the user's subscribedAccount attribute
// Unless an error occurs, continue saving the user in the next middleware function

userSchema.pre("save", function (next) {
    let user = this;
    if (user.subscribedAccount === undefined) {
        Subscriber.findOne({
            email: user.email
        })
            .then(subscriber => {
                user.subscribedAccount = subscriber;
                next();
            })
            .catch(error => {
                console.log(`Error in connecting subscriber: ${error.message}`);
                next(error);
            });
    } else {
        next();
    }
});

// Create a new Subscriber using the repl.js
// Then create a new user using the website.
// The user should have a subscribedAccount attribute

module.exports = mongoose.model("User", userSchema);