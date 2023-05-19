const port = 3000,
express = require("express"),       // Add the express module to your application.
app = express();                    // Assign the express application to the app constant.
app.get("/", (req, res) => {        // Set up a GET route for the home pager
res.send("Hello, Universe!");
})
.listen(port, () => {               // Set up the application to     listen at port 3000.
console.log(`The Express.js server has started and is listening on port number: ${port}`);
});

// Listing 8.1 Simple Express.js web application in main.js

// 8.1 Installed the Express.js package
// A framework is intended to help you overcome some common development
// challenges in building a web application from scratch. Express.js is the most used
// framework in the Node.js community, ensuring that you find the support you need
// compared with the support offered by other, newer frameworks