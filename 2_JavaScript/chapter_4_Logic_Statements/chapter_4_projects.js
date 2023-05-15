//   Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.
let dynamicNumber = Math.floor(Math.random() * 20); //the book has a definite value of 100
console.log(dynamicNumber);
let userInput = prompt("Guess the dynamic number between 0 and 20 (excluding)");
userInput = Number(userInput);
let message = "Nothing";

if (userInput < dynamicNumber) {
    message = userInput + " is less than the dynamic number " + dynamicNumber;
} else if (userInput === dynamicNumber) {
    message = userInput + " is equal to the dynamic number " + dynamicNumber;
} else if (userInput > dynamicNumber) {
    message = userInput + " is greater than the dynamic number " + dynamicNumber;
}

console.log(message);


// Friend checker game - Switch
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

let probableFriend = prompt("Please enter a name");
let response = "";

switch (probableFriend) {
    case "Joyce":
    case "Vee":
    case "Ashleigh":
    case "Nosipho":
    case "Senny":
        message = probableFriend + " is my beloved friend.";
        break;
    default:
        message = probableFriend + " is unfortunately not my friend."
}

console.log(message);

//Rock paper scissors game 
let myArray = ["Rock", "Paper", "Scissors"];

let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);

let responseMessage = "player " + myArray[player] + " vs computer " + myArray[computer] + " ";

// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// Exceptions: Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper.
if (player === computer) {
    responseMessage += "it's a tie";
} else if (player > computer) {
    if (computer == 0 && player == 2) {  // computer rock beats player scissors "exception"
        responseMessage += "Computer Wins";
    } else {
        responseMessage += "Player Wins"; // otherwise then player paper beats computer rock
    }
} else {
    if (computer == 2 && player == 0) { // player rock beats computer scissors "exception"
        responseMessage += "Player Wins";
    } else {
        responseMessage += "Computer Wins"; // otherwise then computer paper beats player rock
    }
}
console.log(responseMessage);



