"use strict";
// 11.2, 11.3
const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => { //Handle all requests not previously handled.
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

exports.internalServerError = (error, req, res, next) => {  // Handle any internal server errors.
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};

/* 11.5
exports.respondNoResourceFound = (req, res) => {      // Respond with a custom
error page.
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.sendFile(`./public/${errorCode}.html`, {
  root: "./"
  });
  };
  */