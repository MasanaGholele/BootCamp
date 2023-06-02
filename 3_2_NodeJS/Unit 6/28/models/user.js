"use strict";

const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const randToken = require("rand-token");
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
            courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
            subscribedAccount: {
                type: Schema.Types.ObjectId,
                ref: "Subscriber"
            },  
            apiToken: {
                type: String
            }        
        },
        {
            timestamps: true
        }
    );

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

userSchema.pre("save", async function (next) {
    if (!this.apiToken) {
        let unique = false;
        let token;
        
        /// Added functionality. Makes sure the token generated is unique.
        while (!unique) {
            // Generate the 16-bit token
            token = randToken.generate(16);
            
            try {
                // Check if the token is unique
                const existingUser = await this.model("User").findOne({ apiToken: token });
                
                if (!existingUser) {
                    unique = true;
                    this.apiToken = token;
                    console.log('Token created successfully');
                    console.log(token);
                } else {
                    console.log('Token already in use')
                }
            } catch (error) {
                console.log(`Error in generating user token: ${error.message}`);
                next(error);
                return;
            }
        }
    }
    
    next();
});

   

userSchema.methods.passwordComparison = function (inputPassword) {
    let user = this;
    return bcrypt.compare(inputPassword, user.password);
};

module.exports = mongoose.model("User", userSchema);
