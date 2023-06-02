const httpStatus = require("http-status-codes");

// It has 1 extra argument
// If an error occurs, it appears as the 1st argument
// You NEED to have 4 arguments or it will not be interpreted as error handling middleware,
// but instead as a normal middleware functino.
exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

// Page not found
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
};

// If server experiences an error
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};