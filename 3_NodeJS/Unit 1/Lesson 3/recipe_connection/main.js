"use strict";
// Testing the package by requiring the cities file
const cities = require("cities");
var myCity = cities.zip_lookup("10016"); // looking for a specific city 
console.log(myCity);
const adding = require("./add");    // requiring the add.js file no need to have the .js extension
console.log(adding.addNum(50,60));  // = 110
