exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

const httpStatus = require("http-status-codes");
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    console.log(`ERROR occurred 404: ${error.stack}`)
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
        });
};
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred 500: ${error.stack}`)
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: "./"
        });
};