// Build a complete web application to serve static web pages.


// Port number
const port = 3000,
    // Import installed packages
    http = require("http"),
    httpStatus = require("http-status-codes"),
    // Local modules
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

// Routing:
// Default root
// Callback function with: request & response variables
// .get means to deal with the HTTP get request.
router.get("/", (req, res) => {
    // Write a 200 OK header and tell the client, it will be a html page
    res.writeHead(httpStatus.OK, contentTypes.html);
    // Send back the html file.
    utils.getFile("views/index.html", res);
});
router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});
router.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
});
router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});
router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});
router.get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});
router.get("/confetti_cuisine.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/confetti_cuisine.js", res);
});

// POST request
router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

// Create the server
http.createServer(router.handle).listen(port);
console.log(`The server is listening on ➥ port number: ${port}`);    