const port = 3000,
    // Import express dependency
    express = require("express"),
    // Assign the express application to the app constant.

    // app represents most of your application, the routes, and access to other modules.
    // express could offer a method to analyze or parse some text on which your application doesn't necessarily depend.
    app = express();

// Set up a GET route for the home page.
app.get("/", (req, res) => {
    // Extract IDs and tokens from the URL
    console.log(req.params);
    // Contains most of the data the user sent from a POST request.
    console.log(req.body);
    // The URL accessed.
    console.log(req.url);
    // Let's you also get data but isn't necessarily from a POST request.
    // Often requested in the URL as a query string.    
    console.log(req.query);

    // Send a response from the server to the client with res.send
    res.send("Hello, Universe!");
    // No need to end the request like when working with the http module.
})
    app.listen(port, () => {
        console.log(`The Express.js server has started and is listening on port number: ${port}`);
    });    