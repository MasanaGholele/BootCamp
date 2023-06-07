// Notice the use of object destructuring for the Mongoose Schema object. {Schema}
// assigns the Schema object in mongoose to a constant by the same name. Later, you’ll apply
// this new format to other models.
// Txtbook page: bottom of 194 (226 edge)

const mongoose = require("mongoose");
const { Schema } = mongoose,

    userSchema = new Schema({
        name: { // First and last name inside name property
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
        // Add a courses property to connect users to courses
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
        // Add a subscribedAccount to connect users to subscribers.
        subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" }
    }, {
        // Add a timestamps property to record createdAt and updatedAt dates.
        timestamps: true
    });

// Virtual attribute (also known as a computed attribute) is similar to a regular property but isn't stored in the database
// Instead it is generated on the fly.
userSchema.virtual("fullName")
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    });

module.exports = mongoose.model("User", userSchema);