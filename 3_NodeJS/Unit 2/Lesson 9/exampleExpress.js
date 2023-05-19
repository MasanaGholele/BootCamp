// ROUTING IN EXPRESS.JS

const port = 3000,
express = require("express"),
app = express();
app.get("/items/:vegetable", homeController.sendReqParam); //Replacing a callback with a controller function 
// moved to the home controller
// app.get("/items/:vegetable", (req, res) => {    // Add a route to get URL parameters.
// let veg = req.params.vegetable;
// res.send(`This is the page for ${veg}`);
// });
app.listen(port, () => {
console.log(`Server running on port: ${port}`);
});

// introduction to middleware
app.use((req, res, next) => {       // Define a middleware function.
    console.log(`request made to: ${req.url}`);
    next();     // Call the next function so that your request is not lef hanging
    });