"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

// set the port to the environment variable PORT value or 300 if it's undefined.
app.set("port", process.env.PORT || 3000);
// set is often used to configure variables used by your application (application settings properties)
app.set("view engine", "ejs");

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

// Pass the parameter
app.get("/contact", homeController.respondWithContact);
app.get("/name/:myName", homeController.respondWithName);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
