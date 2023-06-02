
//------------------------------------------if and if else statements--------------------------------------------//

let rain = true;
if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

rain = false;
if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

let age = prompt("How old are you?"); // had to add it
if (age < 18) {
    console.log("We're very sorry, but you can't get in under 18");
} else {
    console.log("Welcome!");
}


let hobby = "dancing";
if (hobby = "coding") {              // use == because any string will be converted to a true boolean automatically
    console.log("** I love coding too! **");
} else {
    console.log("** Can you teach me that? **");
}

//----------------------------------------------Practice exercise 4.1----------------------------------------------//
// 1. Create a variable with a Boolean value.
let learningToCode = true;

// 2. Output the value of the variable to the console.
console.log(learningToCode);

// 3. Check whether the variable is true and if so, output a message to the console,
//    using the following syntax:
// if(myVariable){
// action
// }

if (learningToCode) {
    console.log("You've made the best choice!");
}


// 4. Add another if statement with an ! in front of the variable to check whether
//    the condition is not true, and create a message that will be printed to the
//    console in that instance. You should have two if statements, one with an
//    ! and the other without. You could also use an if and an else statement instead—experiment!


if (learningToCode) {
    console.log("You've made the best choice!");
}
if (!learningToCode) {
    console.log("Mmmmmmh you need to reconsider!");
}



// 5. Change the variable to the opposite to see how the result changes.
learningToCode = false;

if (learningToCode) {
    console.log("You've made the best choice!");
}
if (!learningToCode) {
    console.log("Mmmmmmh you need to reconsider!");
}


//--------------------------------------------Practice exercise 4.2---------------------------------------------//

// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
let age2 = Number(prompt("How old are you?"));

// 3. Declare a message variable that you will use to hold the console message for the user
let message;

// 4. If the input age is equal to or greater than 21, set the message variable to
//    confirm entry to a venue and the ability to purchase alcohol
if (age2 >= 21) {
    message = "Access granted you can drink till you drop!";
}

// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
else if (age2 >= 19) {
    message = "Access granted but no buying of booze for you";
}

// 6. Provide a default else statement to set the message variable to deny entry if none are true
else {
    message = "Uh uh go back home, you are too young to drink alcohol!";
}

// 7. Output the response message variable to the console

console.log(message);



// Conditional ternary operators

let age3 = Number(prompt("Hi there, how old are you?"));
let access = age3 < 18 ? console.log("denied") : console.log("allowed");

//------------------------------Practice exercise 4.3--------------------------------------------------------//

// 1. Create a Boolean value for an ID variable
let ID = true;

// 2. Using a ternary operator, create a message variable that will check whether
//    their ID is valid and either allow a person into a venue or not
let entry = ID ? ("You may enter") : ("You may not enter");


//3. Output the response to the console

console.log(entry);


// switch statements

let activity = "Dinner";
activity = "Sleep"

switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:  // if the activity does not match any of the above this is what it will log
        console.log("I cannot determine the current time.");
        break;
}


//  -----------------------------------------Practice exercise 4.4------------------------------------------------//


// In this exercise, we'll create a Magic 8-Ball random answer generator:

// 1. Start by setting a variable that gets a random value assigned to it. The value
//    is assigned by generating a random number 0-5, for 6 possible results. 
//    You can increase this number as you add more results.
let randomValue = Math.floor(Math.random() * 6);

// 2. Create a prompt that can get a string value input from a user that you can
//    repeat back in the final output.
let thePrompt = prompt("what time is it?");
let response = "you can relax, you've done enough for the day."

// 3. Create 6 responses using the switch statement, each assigned to a different
//    value from the random number generator.

switch (randomValue) {
    case 0:
        response = "get up";
        break;
    case 1:
        response = "go to work";
        break;
    case 2:
        response = "go to the gym";
        break;
    case 3:
        response = "cook dinner";
        break;
    case 4:
        response = "watch a series";
        break;
    case 5:
        response = "read a book";
        break;
    default:
        response = "take a chill pill";
        break;
}


// 4. Create a variable to hold the end response, which should be a sentence
//    printed for the user. You can assign different string values for each case,
//    assigning new values depending on the results from the random value.
let theOutput = "Well, you know " + thePrompt + " o'clock is time to " + response + "."

// 5. Output the user's original question, plus the randomly selected case
//    response, to the console after the user enters their question.
console.log(theOutput);



// Combining cases
let grade = prompt("Please enter your results symbol")
switch (grade) {
    case "F":
    case "D":
        console.log("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've passed!");
        break;
    case "A":
        console.log("Nice!");
        break;
    default:
        console.log("I don't know this grade.");
}


// --------------------------------------------------------Practice exercise 4.5--------------------------------------------------------//

// 1. Create a variable called prize and use a prompt to ask the user to set the
//    value by selecting a number between 0 and 10
let prize = prompt("Select a number between 0 and 10");

// 2. Convert the prompt response to a number data type
prize = Number(prize);

// 3. Create a variable to use for the output message containing the value "My Selection: "
let outputMessage = "My selection: ";

// 4. Using the switch statement (and creativity), provide a response back
//    regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes

switch (prize) {

    case 1:
       outputMessage += "nothing, sorry";
        break;

    case 2:
         outputMessage += "an iPhone";
        break;

    case 3:
         outputMessage += "a car";
        break;

    case 4:
    case 5:
         outputMessage += "a house";
        break;

    case 6:
    case 7:
    case 8:
         outputMessage 
         += "a scholarship";
        break;

    case 9:
         outputMessage += "a Mobicel lol!";
        break;
    default:
         outputMessage += "Better luck next time";
        break;

}


// 6. Output the message back to the user by concatenating your prize variable
//    strings and the output message string

console.log(outputMessage);

// Self-check quiz (go to page 83 for the questions )
// 1. one
// 2. this is the one // why?
// 3. login //empty string is always a "true" Boolean
// 4. Welcome, that is a user: John 
// 5. Wake up, it's morning
// 6. Result:
// • true
// • false
// • true
// • true
// 7. Result: //interpret?
// 100 was LESS or Equal to 100
// 100 is Even