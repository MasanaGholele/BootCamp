// Import cities module that I installed
const cities = require("cities");
// Import local add module that I created
const add = require("./add");

// Lookup the 10016 zip code and store information about in the variable
var myCity = cities.zip_lookup("10016");
var sum = add.addNum(5, 4);

console.log(myCity);
console.log(`Sum: ${sum}`);