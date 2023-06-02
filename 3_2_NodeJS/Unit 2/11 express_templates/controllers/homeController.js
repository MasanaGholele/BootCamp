"use strict";

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    console.log("Rendering the index")
    res.render("index", { name: paramsName });
}

exports.respondWithContact = (req, res) => {
    console.log("Rendering the contact page")
    res.render("contact");
}

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};