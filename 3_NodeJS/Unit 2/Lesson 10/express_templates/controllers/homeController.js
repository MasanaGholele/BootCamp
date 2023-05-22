// 10.2, 10.3
exports.respondWithName = (req, res) => {
    //let paramsName = req.params.myName;
    res.render("index", { name: paramsName });  // Respond with a custom EJS view.
};

// Pass a local variable to a rendered view.

// you don’t need the .ejs extension for the index.ejs view, and you don’t
// need to specify the folder that this view lives in. Express.js takes care of all that for you. As
// long as you continue to add your views to the views folder and use EJS, your application will
// know what to do.

// the templating engine’s job is to convert this information to an HTML file that your browser can use.