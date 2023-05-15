const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
// app.on("request", (req, res) => {
//     const getJSONString = obj => {
//         return JSON.stringify(obj, null, 2);
//     };
//     console.log
//         (`Method: ${getJSONString(req.method)}`);
//     console.log
//         (`Url: ${getJSONString(req.url)}`);
//     console.log
//         (`Headers: ${getJSONString(req.headers)}`);
//         console.log("**headers " + req.headers);

app.on("request", (req, res) => {           // Listen for requests then prepare a response
    const getJSONString = obj => {
        return JSON.stringify(obj, null, 2);  // Convert JavaScript object to string.
    };  

    var body = [];  // Create an array to hold chunk contents.
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });
    req.on("end", () => { // Run code when data transmission ends
        body = Buffer.concat(body).toString();              
        console.log(`Request Body Contents: ${body}`);
    });
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>This will show on the screen.</h1>";
    res.end(responseMessage);
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
