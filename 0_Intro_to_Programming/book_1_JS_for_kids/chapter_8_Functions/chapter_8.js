// Simple function
var ourFirstFunction = function () {
    alert("Hello world!");
};



// Calling a function
ourFirstFunction();

// Passing arguments into functions
var sayHelloTo = function (name) {
    alert("Hello " + name + "!");
};


sayHelloTo("Nick");

// Printing cat faces
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        alert(i + " =^.^=");
    }
};


drawCats(5);


// Passing multiple arguments to a function
var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        alert(i + " " + whatToDraw);
    }
};


printMultipleTimes(5, "=^.^=");

// Returning values from functions
var double = function (number) {
    return number * 2;
};


alert(double(3));

// Using function calls as values
alert(double(double(3)));

// Using functions to simplify code
// A function to pick a random word
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

alert(pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));

// A random insult generator into function
generateRandomInsult = function () {
    var randomBodyParts = ["Face", "Nose", "Hair"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid"];
    var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
    // Join all the random strings into a sentence:
    var randomString = "Your " + pickRandomWord(randomBodyParts) +
        " is like a " + pickRandomWord(randomAdjectives) +
        " " + pickRandomWord(randomWords) + "!!!";
    return randomString;
};

alert(generateRandomInsult());

// Leaving a function early with return
var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
};

fifthLetter("Nicholas");


// --------------- Programming challenges -----------------
// #1 Doing arithmetic with functions
function add(num1, num2) {
    return num1 + num2;
}

alert(add(5, 3));

function multiply(num1, num2) {
    return num1 * num2;
}

alert(multiply(5, 3));

// #2 Are these arrays the same?
function areArraysSame(arr1, arr2) {
    /*
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    */

    // Another way to do it
    if (arr1.join() === arr2.join()) {
        return true;
    } else {
        return false;
    }
}

alert(areArraysSame([1, 2, 3], [1, 2, 3]));
alert(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
alert(areArraysSame([1, 5, 3], [1, 2, 3]));


