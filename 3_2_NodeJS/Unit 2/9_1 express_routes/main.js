const port = 3000,
    express = require("express"),
    app = express();

// Middleware: Adds a layer between a request being received and the request being processed.    
// This allows you to run custom code, before its URL path matches any other routes.
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    // Calling next is necessary to alert Express.js that your code has completed.
    // Not doing so leaves your request hanging.
    next();
});

// HTTP incoming data is represented as a Buffer stream and not human-readable.
// This adds an extra step to making that data accessible for processing.
// Express.js makes retrieving the request body easy with the body attribute.
app.use(
    express.urlencoded({
        // Parse URL-encoded
        extended: false
    })
);
// Parse JSON format
app.use(express.json());

// Create a new route for the posted data.
app.post("/", (req, res) => {
    // The 2 above middleware allows us to easily read and process the req.body
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
})

app.get("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);

    res.send("Hello, Universe!");
})

// POST request
app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
});

// Express.js lets you write routes with parameters in the path.
// These parameters are a way of sending data through the request.
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});