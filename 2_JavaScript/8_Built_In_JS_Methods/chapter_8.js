// Introduction to built-in JavaScript methods

// let s = "Hello";
// console.log(
//     s.concat(" there!")
//         .toUpperCase()
//         .replace("THERE", "you")
//         .concat(" You're amazing!")
// );

// let x = 7;
// console.log(Number.isNaN(x));

// // You can also write:
// console.log(isNaN(x));


//Decoding and encoding URIs
//Encoding is simply converting from one shape to another.

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);


// Making floats with parseFloat()

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);


// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

//Executing JavaScript with eval() - avoid it for security reasons

//Array methods
//Performing a certain action for every item

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//     console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff); //calling the "forEach" function

//Filtering an array
// If the Boolean has the value false, the element will be left out.

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
// return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));
// console.log(filterArr.every(checkString));

// Replacing part of an array with another part of the array

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// console.log(arr);

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 5);
// console.log(arr);

// function go(e) {
//     eval(e.value); // put the js code directly in the web in the input box
// }


// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 5);

// We can also not specify an end at all; it will take the range to the end of the string:
// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

// Mapping the values of an array

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);


//String Methods
//Combining strings

// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

//Converting a string to an array

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// Converting an array to a string

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let letters = ["a", "b", "c"];
// let x = letters.join('-');
// console.log(x);

//Working with index and positions

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);


// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let pos2 = poem.charAt(1000);
// console.log(pos2);


//replace only one

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

//replace all
// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);


// Uppercase and lowercase - need to sort it our a little

//shorter version
// let caps = "HI HOW ARE YOU?";
//console.log(caps[0] + caps.slice(1).toLowerCase());


// let fixed_caps = caps[0] + caps.slice(1).toLocaleLowerCase();
// console.log(fixed_caps);




//longer version

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_
// caps.slice(1));
// console.log(first_capital);

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_start3 = encouragement.toLowerCase().startsWith("you");
// console.log(bool_start3);

// Checking if something is (not) a number

// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// Checking if something is finite

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

//Checking if something is an integer
//note that it quotes the "Number" class as well ie not a global variable
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//Specifying precision (total number of digits not only decimals)

// let x = 1.23456;
// let newX = x.toPrecision(2);
// console.log(newX);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

// Finding the highest and lowest number

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords); //NaN Not a Number


// Square root and raising to the power of 

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);


//Turning decimals into integers

//round
//let x = 6.78;
//let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

//ceil
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

//let negativeX = -x;
//let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

//floor
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

//trunc - it just cuts off
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));


//Exponent and logarithm

//let x = 2;
//let exp = Math.exp(x);
// console.log("Exp:", exp);
//let log = Math.log(exp);
// console.log("Log:", log);


//Date methods

//Creating dates - complete it

// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

//



