"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// Enables serving of static files from public folder
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get("/contact", homeController.respondWithContact);
app.get("/name/:myName", homeController.respondWithName);

// Error handling middleware MUST COME LAST (after routing)
// As it acts like a net, catching any routes that can't be found.
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
