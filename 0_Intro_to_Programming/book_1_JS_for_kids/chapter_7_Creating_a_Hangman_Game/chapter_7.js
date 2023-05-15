var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
alert(word);
var noGuesses = word.length * 2;

// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// The game loop
while (remainingLetters > 0 && noGuesses > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess.toLowerCase()) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess.toLowerCase();
                    remainingLetters--;
                } else {
                    alert("That letter has already been guessed.")
                    break;
                }
            }
        }
        noGuesses--;
    }
    // The end of the game loop
}

if (remainingLetters == 0) {
    // Show the answer and congratulate the player
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
} else {
    alert(answerArray.join(" "));
    alert("Better luck next time! The answer was " + word);
}

