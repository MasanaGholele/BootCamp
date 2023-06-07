"use strict";

const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"),
    { Schema } = mongoose,
    Subscriber = require("./subscriber"),
    userSchema = new Schema(
        {
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
            // password: {
            //     type: String,
            //     required: true
            // },
            courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
            subscribedAccount: {
                type: Schema.Types.ObjectId,
                ref: "Subscriber"
            }
        },
        {
            timestamps: true
        }
    );

// you’re telling your userSchema to use passportLocalMongoose for password hashing and storage.
// Telling userSchema to use passportLocalMongoose to use email field as usr's login
// When this line is in place, Passport.js automatically takes care of password storage, so you can remove the password property from userSchema
// ads hash & salt fields
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});


userSchema.virtual("fullName").get(function () {
    return `${this.name.first} ${this.name.last}`;
});

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
                console.log(`Error in connecting subscriber:${error.message}`);
                next(error);
            });
    } else {
        next();
    }
});

// Later on we comment this out because we want to use passport to handle passwords
// userSchema.pre("save", function (next) {
//     let user = this;
//     bcrypt.hash(user.password, 10).then(hash => {
//         user.password = hash;
//         next();
//     })
//         .catch(error => {
//             console.log(`Error in hashing password: ${error.message}`);
//             next(error);
//         });
// });

userSchema.methods.passwordComparison = function (inputPassword) {
    let user = this;
    return bcrypt.compare(inputPassword, user.password);
};

module.exports = mongoose.model("User", userSchema);
