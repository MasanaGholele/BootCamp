// // Functions

// // Writing functions

// // Let's write a function that asks for your name and then greets you:
// function sayHello() {
// let you = prompt("What's your name? ");
// console.log("Hello " + you + "!");
// }
// sayHello();  // calling the function


// // ------------------------------------------------- Practice exercise 6.1 --------------------------------------------------------- //

// // Create a function that adds two numbers
// function addTwoNumbers(x, y) {
// return(x + y);
// }

// let value1 = 12;
// let value2 = 24;

// console.log(addTwoNumbers(value1, value2));
// console.log(addTwoNumbers(12, 24));

// // another way - without variables (additional, not part of exercise)
// function addTwoNumbers(x = 2, y = 3) {
//     return(x + y);
// }
// console.log(addTwoNumbers());       // no need to pass it anything because x and y already have values declared within the function

// console.log(addTwoNumbers(6, 8));   // the two values will "replace" the 2 and 3 declared earlier

// console.log(addTwoNumbers(18));     // only the x will be replaced

// // console.log(addTwoNumbers(,10)); // will not work

// console.log(addTwoNumbers(1,2,3,4)); // it will concentrate on the first two only and ignore the extras



// // ------------------------------------------- Practice exercise 6.2 -------------------------------------------------------------------//

// // We are going to create a program that will randomly describe an inputted name.

let  descriptions = ["great", "wonderful", "bad", "angry", "careful", "crazy"];
function askForName() {
let question = prompt("What is your name?");
let nameDescrip = Math.floor(Math.random() * descriptions.length);
console.log("Mmmmh, you are so " + descriptions[nameDescrip] + " " + question + "!" );
}
askForName();

// Parameters and arguments

// function tester(para1, para2){
// return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1, arg2));


// // -------------------------------------------------- Practice exercise 6.3 ---------------------------------------------------------- //


// let num1 = 5;
// let num2 = 10;
// let operator = "+";

// function calculate(x, y, op) {
//     if (op ==  "-") {
//         console.log(x - y);
//     } else {
//         console.log(x + y); //let it be last since it's a "default"
//     }
// }

// calculate(num1, num2, operator);

// operator = "-";

// calculate(num1, num2, operator);

// calculate(num1, num2); // if no operator is defined, it'll call the default "+"


// // Special functions and operators

// // using the "common method"
// function doingStuff(x) {
//     console.log(x);
// }
// doingStuff();  // if you don't pass it anything it"ll return as "undefined"
// doingStuff("Common");

// // using the arrow function
// let doingArrowStuff = x => console.log(x);
// doingArrowStuff();
// doingArrowStuff("Arrow");


// let sayHi = () => console.log("hi");
// sayHi();

// // Combining forEach method and the arrow function in an array
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));


// // Spread operator
// let spread = ["so", "so", "much", "fun"];
// let myAddition = ["Did you know? "];
// let message = [...myAddition, "JavaScript", "is", ...spread, "and", "very",
// "powerful"];
// console.log(message);

// // using the spread operator to send multiple arguments to a function
// function addTwoNumbers(x, y) {
//     console.log(x + y);
//     }
//     let arr = [5, 9];

// addTwoNumbers(...arr); // 14
// addTwoNumbers(5, 9);   // 14


// // function addFourNumbers(x, y, z, a) {
// //     console.log(x + y + z + a);
// //     }
// //     let arr = [5, 9];
// //     let arr2 = [6, 7];
// //     addFourNumbers(...arr, ...arr2);
// // addFourNumbers(5, 9, 6, 7);


// Rest parameter
// allows you to send any number of arguments in a function/
// function someFunction(param1, param2) {
//     alert(param1, param2);
//     }
//     someFunction("hi", "there!", "How are you?"); // without the "rest param the third one will be ignored"


// function someFunction(param1, ...param2) {
//     alert(param1, param2);
//     }
//     someFunction("hi", "there!", "How are you?", "My name is Masana");


// Returning function values


// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }

// let result = addTwoNumbers(4, 5);
// console.log(result);
// undefined because nothing is inserted into the function to store the result
//Once the below adjustments to the function are done it'll log 9

// // let's re-write our function with a "return"
// function addTwoNumbers(x, y) {
//     return x + y;
// }

// let resultOfReturn = addTwoNumbers(4, 5);
// console.log("resultOfReturn " + resultOfReturn);

// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);



// // -------------------------------------------------- Practice Exercise 6.4 ---------------------------------------------------------- //

// // the practice exercise 6.3 "calculator function" modified so that it "returns"
// function calculate(x, y, op) {
//     if (op == "-") {
//         return(x - y);
//     } else {
//         return(x + y); //let it be last since it's a "default"
//     }
// }

// let myArray = []; // set up an empty array

// for (let j = 0; j < 10; j++) {
//     let value1 = 5 * j;
//     let value2 = j * j;
//     let results = calculate(value1, value2, "+");
//     myArray.push(results);
// }
// console.log(myArray);


// // Returning with arrow functions
// // If we have a one-line arrow function, we can return without using the keyword return

// let addTwoNumbersArrow = (x, y) => x + y;

// // And we can call it and store the result like this:
// let arrowResult = addTwoNumbersArrow(12, 15);
// console.log(arrowResult);

// // If it's a multiline function, you will have to use the keyword return as

// let addTwoNumbersMultiline = (x, y) => {
//     console.log("Adding multiline...");
//     return x + y;
//     }

// let multilineResult = addTwoNumbersMultiline(10, 5);
// console.log(multilineResult);


// // Variable scope in functions
// // Local variables in functions

// function testAvailability(x) {
//      console.log("Available here:", x); // available once it is called
//     }
//     console.log(testAvailability("hi")); // outside of funtion = undefined
//     console.log("Not available here:", x); // undefined
// // only the "console" inside the function will be logged


// // Let's have a look at a variable defined inside a function:
// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
// }
// testAvailability();
// console.log("Not available here:", y);

// Variables defined inside the function are not available outside the function either.


// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);


// let versus var variables

// function doingStuff() {
//     if (true) {
//         var x = "local";
//     }
//     console.log(x); // it will log local
// }
// doingStuff();

// function doingStuff() {
//     if (true) {
//         let x = "local";
//     }
//     console.log(x); // it will say x is not defined
// }
// doingStuff();


// let must always be inside the main function (inside the main {} "yellow")
// function doingStuff() {
//     let x = "local";
//     if (true) {
//     console.log(x);

//     }
//     }
//     doingStuff();

// it can also work if you create the let outside of the function but you need to declare it before the function
// let x = "local";
//  function doingStuff() {

//     if (true) {
//     console.log(x);

//     }
//     }
//     doingStuff();

// function doingStuff() {
//     if (true) {
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();


// Global variables

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {
//     console.log("Access to global vars inside function.", globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// let x = "global";
// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);


// let x = "global";
// function doingStuff(x) {
// console.log(x);
// }
// doingStuff("param");

// if you "create" a variable without a let or a var, JS will assume you were trying to create a global variable
// and it will run it as such
// functi   on confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
//     }
//     confuseReader();
//     console.log("Outside of function:", x);


// immediately invoked function expression (IIFE)
// (function () {
//     console.log("IIFE!");
//     })();

// the whole function mjust be in () to be invoked immediately
// without the () it will throw an error as it it "nameless"

// immediately invoked function expression (IIFE) another method
// (()=>{
//     console.log("run right away");
//     })();


// // ------------------------------------------------ Practice Exercise 6.5 ------------------------------------------------------------//

// let val = "1000";
// console.log("initial global variable: " + val);

// (function () {
//     let val = "100"; // local scope variable
//     console.log(val);
// })();

// let result = (function () {
//     let val = "Masana";
//     return val;
// })();
// console.log(result);    // returns "Masana" since it is within the function
// console.log(val);       // returns the initial "global" 1000

// (function (val) {
//     console.log(`My name is ${val}`);
// })("Masana"); // if you don't pass it anything it'll return undefined


// // Recursive functions

// // it will keep going to the "maximum stack size is exceeded"

// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {           // it'll stop subtracting once nr is 0
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// // using the console (reverse the recursive)
// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
// }
// logRecursive(3);

// using alert - ensure that you include the "+" instead of ,

// function logRecursive(nr) {

//     if (nr > 0) {alert("Started function:" + nr);
//     logRecursive(nr - 1);
//     } else {
//     alert("done with recursion");
//     }
//     alert("Ended function:" + nr);
//     }
//     logRecursive(3);


// ---------------------------------------------------------- Practice Exercise 6.6 ----------------------------------------------------//

// // Calculating the factorial

// function calcFactorial(nr) {
//     console.log(nr);
//     if (nr === 0) {
//         return 1;
//     }
//     else {
//         return nr * calcFactorial(--nr);
//     }
// }
// console.log(calcFactorial(4)); // Factorial of 4 = 4*3*2*1


// Nested functions

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

// you cannot call inner function using the outer function -0 nothing will happen
// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }


// invoking it immediately
// (function (nr) {
//     (function doInnerFunctionStuff(x) {
//         let z = 10;
//         console.log(z);
//     })(nr);
// })(3);

// ------------------------------------------------------ Practice exercise 6.7 ---------------------------------------------------- //
// let start = 10;
// function loop1(val) {
//     console.log(val);
//     if (val < 1) {
//         return;
//     }
//     return loop1(val - 1);
// }
// loop1(start);

// function loop2(val) {
//     console.log(val);
//     if (val > 0) {
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);



// Anonymous functions

// We can also create functions without
// names if we store them inside variables.

// function doingStuffAnonymously() {
//     console.log("Not so secret though.");
// }

// assign it to a variable then call it by "calling the variable"
// function () {
//     console.log("Not so secret though.");
// };


// vs code does not allow the "let" if you have not created the function yet
// functionVariable = function () {
//     console.log("Not so secret though.");
// };

// functionVariable();


// ------------------------------------------------- Practice Exercise 6.8 -----------------------------------------------------------//

// let test = function(val){
//     console.log(val);
//     }

//     test('hello 1');

//     function test1(val){
//     console.log(val);
//     }
    
//     test1("hello 2");

    
// Function callbacks

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }

// // call this new function with the previously made anonymous function,
// // functionVariable, like this:

// doFlexibleStuff(functionVariable);

// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
//     };
//     setTimeout(youGotThis, 1000);
// // it will run it once

//  setInterval(youGotThis,1000);
// // it will run every 1000ms

// setInterval(youGotThis,10000);
// // it will run every 10000ms

