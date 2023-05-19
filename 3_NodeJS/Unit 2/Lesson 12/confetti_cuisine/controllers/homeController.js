"use strict";

// 12.9 Set up content on server and pass into rendered view
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

// 12.5 Adding callback functions for specific routes.
exports.showCourses = (req, res) => {
  res.render("courses", {               // Pass the courses array to the view
    offeredCourses: courses
  });
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};
