"use strict";
const port = 3000,  // 3000 for web servers but not a must, 80 & 443 reserved for HTTP & HTTPS respectively
    http = require("http"), // readily available global method
    httpStatus = require("http-status-codes"),          // Require the http and httpstatus-codes modules.
    app = http.createServer((request, response) => {   // Creating a server with request and response parameters.
        console.log("Received an incoming request!");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });

        let responseMessage = "<h1>Hello, Universe!</h1>";
        response.write(responseMessage);
        response.end();
        console.log(`Sent a response : ${responseMessage}`);
    });

    // Telling the application server to listen on port 3000.
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);