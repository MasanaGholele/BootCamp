const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": '<h1>Say hello by emailing us <a href="/contact">here</a>.</h1>',
    "/error": "<h1>Sorry, the page you are looking for is not found.</h1>"
};

const port = 3000;
// Import built-in http module
const http = require("http");
// Import downloaded http-status-codes module
const httpStatus = require("http-status-codes");

// Create a server and call it app.
// Give it a callback function, with the request and response variable.
// Request variable contains information about the request.
// Response variable allows the server to respond to the user.
const app = http.createServer((req, res) => {
    console.log("Received an incoming request!");
    console.log(req.url)
    // This returns a http header.
    // This returns a 200 - OK response.
    // The Content-type tells the client to expect a html response.
    // res.writeHead(httpStatus.OK, {
    //     "Content-Type": "text/html"
    // });

    // Route the user to one of the mapped URLs

    // First detect if it's an error
    if  (req.url === '/error') {
        respond(httpStatus.NOT_FOUND, routeResponseMap[req.url], res);

        // Delay response by 2 seconds.
        // setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
    } else if (routeResponseMap[req.url]) {
        // Respond to the mapped route, but with the OK 200 response.
        respond(httpStatus.OK, routeResponseMap[req.url], res);
    } else {
        // If route doesn't exist, then show a default welcome.
        respond(httpStatus.OK, "<h1>Default welcome page!</h1>", res);
    }
});

// Custom function to prevent code duplication
function respond(status, msg, res) {
    res.writeHead(status, {
        "Content-Type": "text/html"
    });
    res.end(msg);
}


app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);