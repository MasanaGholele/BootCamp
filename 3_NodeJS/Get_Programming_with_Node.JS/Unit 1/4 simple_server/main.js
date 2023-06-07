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
    // This returns a http header.
    // This returns a 200 - OK response.
    // The Content-type tells the client to expect a html response.
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    // Create a html message
    let responseMessage = "<h1>Hello, World!</h1>";
    // Return the html message
    res.writeHead(responseMessage);
    // You must end the response with end to tell the server you're no longer writing content.    
    res.end();
    console.log(`Sent a response: ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);