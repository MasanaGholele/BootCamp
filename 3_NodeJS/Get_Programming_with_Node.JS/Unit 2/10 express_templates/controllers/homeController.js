"use strict";

// Render a view
exports.respondWithName = (req, res) => {
    // Respond with a custom EJS view.
    // Don't need to specift the .ejs extension
    // Don't need to specify the folder the view lives in.
    // Express.js takes care of all that for you.
    
    // Assign a local variable to the request parameter.
    let paramsName = req.params.myName;
    // Render the index.ejs file, and pass it a object.
    // With the name as the key and paramsName as the value.
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