// ROUTING IN EXPRESS.JS

const port = 3000,
    express = require("express"),
    app = express();
app.get("/items/:vegetable", homeController.sendReqParam); //Replacing a callback with a controller function 
// moved to the home controller
// 9.2
// app.get("/items/:vegetable", (req, res) => {    // Add a route to get URL parameters.
// let veg = req.params.vegetable;
// res.send(`This is the page for ${veg}`);
// });
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

// 9.4 introduction to middleware
app.use((req, res, next) => {       // Define a middleware function.
    console.log(`request made to: ${req.url}`);
    next();     // Call the next function so that your request is not left hanging
});

// 9.5
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});
