
// Variables are values in your code that can represent different values each time the code runs.
let firstname = "Maria";    //first time you declare it
firstname = "Jacky";        //second time you are calling it and assigning it a new value
console.log(firstname);     //these variables are "hardcoded" - not coming froman external source


//...............................let, var, and const........................................................//

// A variable contains a keyword (let, var, const), a name and a value

let nr1 = 12;           //  block scope, meaning it can only be used in a {specific block}
var nr2 = 8;            //  global scope, meaning it can be used anywhere in the entire script
const PI = 3.14159;     //  only get a value assigned once - if you try to re-assign you'll get an error

// namingVariable - descriptive, camelCase, noSpaces but you can use _, be consistent


//...............Primitive data types..........................

// JavaScript has seven primitives: 
// String, Number, BigInt, Boolean, Symbol, undefined, null

let language = "JavaScript";
let message = `Let's learn ${language}`;  //using backticks
console.log(message);                     //no need to "log" language

// Escape characters - can be used to tell JavaScript, "do not take the next character as you normally would."

let str1 = "Hello, what's your name? Is it \"Mike\"?";
console.log(str1);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

// backslash will ensure that JS does not interpret the second "\' as the end of the string


// can also use it to create a line break with \n, 
// or to include a backslash character in the text with \\:

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);


// ...............................................Symbols.......................................................
let str5 = "JavaScript is fun!";
let str6 = "JavaScript is fun!";
console.log("These two strings are the same:", str5 === str6); // true

let sym1 = Symbol("JavaScript is fun!"); //note that you need to declare them "symbols" after the = 
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2); // false , their addresses are not the same


// ..............................................Undefined........................................................
// a variable that has not been assigned a value

let unassigned;             // not = to any value
console.log(unassigned);    // JS will regard it as "undefined"

let demo = undefined;
console.log(demo);          // looks exactly like the "unassigned one"

let terribleThingToDo = undefined;   // not reccommended
let lastName;
let betterOption = null;

console.log("Same undefined:", lastName === terribleThingToDo);
console.log("Same null:", lastName === betterOption);


//..............Two ways of typeOf...............................
testVariable = 1;

variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof (testVariable);

console.log(variableTypeTest1);
console.log(variableTypeTest2);

//.................more examples of typeOf........................
let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;    //null is actually for an empty primitive type

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);     // but due to a JS bug it will return type as "object"



//..............automatically changing data types.....................

let nr3 = 2;
let nr4 = "2";
console.log(nr3 * nr4); // = 4

let nr5 = 2;
let nr6 = "2";
console.log(nr5 + nr6); // !!! = 22 not realiable

// rather change(cast) the string to a Number first then calculate
let nr3Correct = 2;
let nr2Correct = "2";
console.log(nr3Correct + Number(nr2Correct)); //cast string to a number


// use these built- in methods instead
let nrToStr = 6;
nrToStr = String(nrToStr);              // change number to a string
console.log(nrToStr, typeof nrToStr);   // checking if it did

let strToNr = "12";
strToNr = Number(strToNr);              // change string to a number
console.log(strToNr, typeof strToNr);   // checking if it did

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

//.......................carefull.............................
let nullToNr = null;
nullToNr = Number(nullToNr);                       // change "null" to a number 
console.log("null", nullToNr, typeof nullToNr);    // returns as the "number 0"

let strToNr2 = "";
strToNr2 = Number(strToNr2);                              //change an empty string to a number
console.log("empty string", strToNr2, typeof strToNr2);   // aslo returns a the "number 0"

let strToNr3 = "hello";
strToNr3 = Number(strToNr3);
console.log(strToNr3, typeof strToNr3);     //Not a Number "NaN" 


//......................changing to Boolean.............................
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool3 = "";
strToBool3 = Boolean(strToBool3);
console.log(strToBool3, typeof strToBool3);

// Note: Only an empty string, null, and undefined will lead to a Boolean value of false.

//................Logical operators..................

let p = 1;
let q = 2;
let r = 3;

console.log(p < q && q < r);
//This will log true, you can read it like this: if p is smaller than q and q is smaller
//than r, it will log true. That is the case, so it will log true.

console.log(p > q && q < r);
//Since p is not greater than q, one part of the expression is not true, and therefore
//it will result in false.

//If you want to get true if either one of the expressions is true, you use or. 
//The operator for this is ||.

console.log(x > y || y < z);



// Self-check quiz
// 1. String
// 2. Number
// 3. Line 2
// 4. world
// 5. Hello world!
// 6. Whatever the user enters in
// 7. 71
// 8. 4

//9. What is the value of total and total2?
// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total); //16
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2); //536


//10. What is logged to the console here?
// const aa = 5;
// const bb = 10;
// console.log(aa > 0 && bb > 0);      //true
// console.log(aa == 5 && bb == 4);    //false
// console.log(true ||false);          //true
// console.log(aa == 3 || bb == 10);   //true
// console.log(aa == 3 || bb == 7);    //false
