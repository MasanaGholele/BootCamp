"use strict";

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];


exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};

exports.respondWithName = (req, res) => {
  res.render("index");
};

module.exports = {
  showCourses: (req, res) => {
    console.log("showing courses")
    res.render("courses", {
      offeredCourses: courses
    });
  }
}