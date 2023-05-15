

console.log("Hello world!");

// Practice exercise 1.1

console.log(4 + 10);

console.log("Masana");

//Practice exercise 1.2
//See the html file


//Linking an external file to our web page
//Option 1: absolute path - using the C:/ directory (Can be lost if directory changes)
//Option 2: relative path - same folder, fileName.js

alert("Saying hi from a different file!");


//Practice exercise 1.3
//creating and linking the files


//WRITING AND FORMATTING JS CODE 

/*
Without new lines:
let status = "new"; let scared = true; if (status === "new") { console.
log("Welcome to JavaScript!"); if (scared) { console.log("Don't worry
you will be fine!"); } else { console.log("You're brave! You are going
to do great!"); } } else { console.log("Welcome back, I knew you'd like
it!"); }
*/


//With new lines and indentation:
let status = "new";
let scared = true;
if (status === "new") {
    console.log("Welcome to JavaScript!");
    if (scared) {
        console.log("Don't worry you will be fine!");
    } else {
        console.log("You're brave! You are going to do great!");
    }
} else {
    console.log("Welcome back, I knew you'd like it!");
}

//Semicolons, single line and multiple line comments


// Practice exercise 1.4
let a = 10;
console.log(a);

//PROMPT
//It works very much like an alert, but instead, it takes input from the user.

prompt("Hi! How are you?");


console.log(Math.random());
// This number will be a decimal between 0 and 1.


// If we want a number between 0 and 100, we can multiply it by 100, like this:
console.log(Math.random() * 100);


//If you don't want decimals, you can round it down to an integer using Math.floor
console.log(Math.floor(Math.random() * 100));

// Chapter project

//console.log("Masana");

/* 
    1. In the JavaScript file, output your name into the console and add a multipleline comment to your code.
    2. Try commenting out the console message in your JavaScript file so that nothing shows in the console.  
*/

// .................Self-check quiz..................

// 1. What is the HTML syntax to add an external JavaScript file?
      //<script src="fileName.js"></script>

// 2. Can you run JavaScript in a file with a JS extension in your browser?
      //No

// 3. How do you write a multiple-line comment in JavaScript?

    /*  ...........
    ...............*/

// 4. What is the best way to remove a line of code from running that you might want to keep as you debug?
      //Comment it out