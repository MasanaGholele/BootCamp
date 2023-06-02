const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // New property
  },
  email: {
    type: String,
    required: true, // New property
    lowercase: true, // New property
    unique: true // New property
  },
  zipCode: {
    type: Number, // New property
    min: [10000, "Zip code too short"], // New property
    max: 99999 // New property
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function () {
  return this.model("Subscriber")
    .find({ zipCode: this.zipCode })
    .exec();
};




module.exports = mongoose.model("Subscriber", subscriberSchema);