// Import modules
const httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

// Object that stores the routes
// Need the following information to store a route:
// 1. Whether the request is a GET or POST request.
// 2. The URL's path
// 3. The name of the file to return
// 4. An HHTP status code
// 5. The type of file being returned (content type).
const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        // Try to locate the route in the routes array.
        // E.g. if req.method is a GET an req.url is /courses.html
        // It will look for: routes["GET"]["./courses.html"](req, res)
        // It will then actually run that function using the round brackets
        // and pass it the request and response variable objects.
        routes[req.method][req.url](req, res);
        // In case of an error.
    } catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

// Example
// routes["GET"]["/courses.html"] = callbackFunction;
exports.get = (url, action) => {
    routes["GET"][url] = action;
};

// routes["POST"]["/courses.html"] = callbackFunction;
exports.post = (url, action) => {
    routes["POST"][url] = action;
};