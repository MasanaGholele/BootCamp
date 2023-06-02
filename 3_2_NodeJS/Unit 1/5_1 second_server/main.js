const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

// Convert the object to a string    
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}

// Listen for requests
app.on("request", (req, res) => {
    // Create an array to hold chunk contents
    var body = [];
    // Run this code as each piece of data is received.
    req.on("data", (bodyData) => {
        // This adds the received data to the body array.
        body.push(bodyData);
    });

    // Run this code when the data transmission ends.
    req.on("end", () => {
        // Convert the array to text
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });

    // Log the request to your console.
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    // Tells the client the request was a success and for it to expect html to be sent.
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    // HTML message
    let responseMessage = "<h1>This will show on the screen.</h1>";
    // End the transmission. Otherwise it will hang.
    res.end(responseMessage);
});

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);