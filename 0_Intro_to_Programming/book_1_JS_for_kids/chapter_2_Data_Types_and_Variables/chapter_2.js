// Topic: Data Types

// Number: 5;

// String: "Hi, I'm a string";

//Boolean: true; false;

// ---------- Numbers and Operators ----------

// Addition
alert('Addition');
alert(12345 + 56789);

// Subtraction
alert('\nSubtraction');
alert(1000 - 17);

// Multiplication
alert('\nMultiplication');
alert(123 * 456);

// Division
alert('\nDivision');
alert(12345 / 250);

// BODMAS -- Order of operations
alert('\nOrder of operations');
alert(1234 + 57 * 3 - 31 / 4);

// ---------- Variables ----------
alert('\nVariables');
var age = 12;
alert(age);
alert('\nAge variable changes from 12 to 13');
age = 13;
alert(age);

// JavaScript is case-sensitive!
// numberofcandles is NOT the same as numberOfCandles

// Creating new variables using math
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
alert('\n Seconds in an hour: ' + secondsInAnHour);

var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
alert('\n Seconds in a day: ' + secondsInADay);

var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
alert('\n Seconds in a year: ' + secondsInAYear);

var age = 29;
age * secondsInAYear;
alert('\n Age: ' + age + ' in seconds' + age * secondsInAYear);

// Incrementing & Decrementing
var highFives = 0;
alert('\nIncrement Before:');
++highFives;
alert('You have: ' + highFives);
++highFives;
alert('You have: ' + highFives);
++highFives;
alert('You have: ' + highFives);

alert('\nIncrement After:')
highFives++;
alert('You have: ' + highFives);
highFives++;
alert('You have: ' + highFives);
highFives++;
alert('You have: ' + highFives);

// Plus-equals and Minus-equals
var x = 10;
x = x + 5;
x;
// Shorter way
x += 5;

//Minus-equals
x -= 20;

// ------------------------- Strings ------------------------
var myAwesomeString = "Something REALLY awesome!!!";
alert('\nStrings:\n' + myAwesomeString);

// You can re-assign variables e.g.
 //A integer gets re-assigned to become a string
var myThing = 5;
myThing = "this is a string";

// A number is a string if it's inside quotes
var numberNine = 9;
var stringNine = "9";

// Add a number and a number
alert('\n Add a number and a number' + (numberNine + numberNine) );
// Add a string and a string
alert('\n Add a string and a string' + (stringNine + stringNine) );

// Add strings
var greeting = "Hello ";
var myName = "Nick";
alert('\nAdd strings: ' + greeting + myName);

// --- Find the length of strings ---
alert("Length of strings: " + "Supercalifragilisticexpialidocious".length);

// --- Getting a single character from a string ---
var myName = "Nick";
alert('\nGetting a single character from a string')
alert(myName[0]);
alert(myName[1]);
alert(myName[2]);

// Secret code
var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
alert('\n Secret code word' + codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

// Cutting up strings
var longString = "My long string is long";
// The string gets sliced starting from position 3 to position 13, excluding position 14
alert('\nSliced string' + longString.slice(3, 14));

alert('\n2nd Sliced string' + longString.slice(3));

// ------- Changing all characters to capital or lower case --------
alert('\nAll capital letters: ' + "Hello there, how are you doing?".toUpperCase());
alert('All lower case: ' + "hELlo THERE, hOW ARE yOu doINg?".toLowerCase());


// Challenge
var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
alert('\nChallenge: ' + firstCharacterUpper + restOfString);

alert('Do it in one line ' + sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());

// ------------------------------------------- Booleans -------------------------------------------------------
var hadShower = true;
var hasBackpack = false;
alert('\nAND Operator: ' + (hadShower && hasBackpack));

hadShower = true;
hasBackpack = true;
alert('AND Operator: ' + (hadShower && hasBackpack));

var hasApple = true;
var hasOrange = false;
alert('OR Operator: ' + (hasApple || hasOrange));

var isWeekend = true;
var needToShowerToday = !isWeekend;
alert('NOT Operator: ' + needToShowerToday);

isWeekend = false;
hadShower = true;
hasApple = false;
hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
alert('Multiple Operators: ' + shouldGoToSchool);

// ------ Comparing numbers with boolean ------
// Greater than
var height = 65;
var heightRestriction = 60;
alert('\nGreater than: ' + (height > heightRestriction));

alert('Greater than: ' + (height > heightRestriction));

alert('Greater than or equal to: ' + (height >= heightRestriction));

// Less than
height = 60;
heightRestriction = 48;
alert('\nLess than: ' + (height < heightRestriction));

// Less than or equal to
height = 48;
heightRestriction = 48;
height <= heightRestriction;
alert('Less than or equal to: ' + (height <= heightRestriction));

// Equal to (===)
var mySecretNumber = 5;
var chicoGuess = 3;
alert('\nEqual to: ' + (mySecretNumber === chicoGuess));

var harpoGuess = 7;
alert('Equal to: ' + (mySecretNumber === harpoGuess));

var grouchoGuess = 5;
alert('Equal to: ' + (mySecretNumber === grouchoGuess));

// Equal-ish (==)
var stringNumber = "5";
var actualNumber = 5;
alert('\nExactly equal to: ' + (stringNumber === actualNumber));
alert('\nEqual-ish: ' + (stringNumber == actualNumber));

alert('Equal-ish: ' + (0 == false));
alert('Equal-ish: ' + (false == "false"));

//Try it out
var age = 12;
var accompanied = true;
alert('\nAllowed to watch PG-13 movie: ' + ((age >= 13) || (accompanied)));

// --------- Undefined and Null ------------
var myVariable;
alert('\nUndefined: ' + myVariable);

var myNullVariable = null;
alert('Null: ' + myNullVariable);