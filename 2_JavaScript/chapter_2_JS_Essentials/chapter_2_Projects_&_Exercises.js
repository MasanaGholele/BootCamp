// ..........................Practice exercise 2.1.......................................

// What are the types of these variables listed below? Verify this with typeof and
// output the result to the console:

let str10 = 'Laurence'; //string
let str20 = "Svekis";   //string    
let val1 = undefined;   //undefined 
let val2 = null;        //object - bug remember
let myNum = 1000;       // Number

// answers
console.log(str10, typeof str10); 
console.log(str20, typeof str20); 
console.log(val1, typeof val1);   
console.log(val2, typeof val2);   
console.log(myNum, typeof myNum); 

//..................Practice exercise 2.2.....................
// Log to the console the following sentence, where name, age and true/false are variables:
// Hello, my name is Maaike, I am 29 years old and I can code JavaScript: true.

let mySelf = "Masana";
let myCurrentAge = 18;
let ableToCodeJS = "yep";

console.log("Hello, my name is", mySelf, ", I am ", myCurrentAge, 
"\nyears old and I can code JavaScript:", Boolean(ableToCodeJS));

// their solution
// const myName = "Maaike";
// const myAge = 29;
// const coder = true;
// const message2 = "Hello, my name is " + myName + ", I am " + myAge+"years old and I can code JavaScript: " + coder + ".";
// console.log(message2);

//..................Modulus.........AKA Remainder.............................
let nr1modulus = 10;
let nr2modulus = 3;
let result1 = nr1modulus % nr2modulus;
console.log(`${nr1modulus} % ${nr2modulus} = ${result1}`);



//........................Practice exercise 2.3...............................
//For example, x += 5 means x = x + 5, and x **= 3 means x = x ** 3 (x to the power of 3)
//a2 + b2 = c2. Pythagorus

let x = (prompt("Give a one side of a right angled triangle"));       //try it with 3
let y = (prompt("Give me another side of a right angled triangle"));  //try it with 4
let z2 = ((x **2) + (y **2)) 
let z = Math.sqrt(z2); 
console.log(z2); // (3 **2  + 4 **2) = (9 + 16) = (25)
console.log(z); // square root of 25 is 5

// ............their solution.............
// let a = window.prompt("Value 1?");
// let b = window.prompt("Value 2?");
// a = Number(a);
// b = Number(b);
// let hypotenuseVal = ((a * a) + (b * b))**0.5;
// console.log(hypotenuseVal);



//...............Practice exercise 2.4.........

let m = 10;
let n = 20;
let o = 30;
m = m + n;
m = m / o;
o = o % n;
console.log(m, n, o);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// -------------------------------------CHAPTER PROJECTS-----------------------------------------------------------//

// Convert miles to kilometers.
// 1 mile equals 1.60934 kilometers.

let myDistanceMiles = 130;
let myDistanceKM = myDistanceMiles * 1.60934; 
let myPerfectDistanceKM = Math.floor(myDistanceMiles * 1.60934); 
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myPerfectDistanceKM + " kilometers");

//BMI calculator
// 1 inch = 2.54 centimetres.
// 2.2046 pounds in a kilo
let weightInPounds = prompt("Please enter your weight in pounds");
let heightInInches = prompt("Please enter your height in inches");
let heightInCm = Math.floor(heightInInches * 2.54);
let weightInKilos =  Math.floor(weightInPounds / 2.2046);
console.log(weightInKilos + "kg" +" "+ heightInCm + "cm");
let BMI = Math.floor(weightInKilos / (heightInCm/100)**2);
console.log("Your BMI is " +  BMI + "kg/m2");

let inches2 = 72;
let pounds2= 180;
let weight2 = pounds2 / 2.2046; // in kilos
let height2 = inches2 * 2.54; // height in centimetres
console.log(weight2, height2);
let bmi2 = weight2/(height2/100*height2/100);
console.log(bmi2);