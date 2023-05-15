
// // while loops
// // a while loop printing the numbers 0 to 9
// let i = 0;
// while (i < 10) {
// console.log("while " + i);
// i++;
// }

// for (let j = 0; j < 10; j++) {   // the variable declaration is done "in the for loop itself" 
//     console.log("for " + j);
// }  // for loops in detail from line 94

// // We can have a while loop that looks for a value in an array, like this:
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//     }
// }


// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray);


// // ----------------------------------------- Practice exercise 5.1 --------------------------------------------//

// // In this exercise we will create a number guessing game that takes user input and
// // replies based on how accurate the user's guess was.


// let maxValue = 10;

// let randomNumber = Math.floor(Math.random() * maxValue) + 1;
// console.log(randomNumber);

// let correctAnswer = false;

// while (!correctAnswer) {
//     let guess = prompt("Guess a number from 1 to " + maxValue);
//     guess = Number(guess);
//     if (guess === randomNumber) {
//         correctAnswer = true;
//         console.log("Well done it is " + randomNumber + "!");
//      } else if (guess > randomNumber) {
//             console.log("Sorry, that is too high.");
//          } else if (guess < randomNumber) {
//             console.log("Sorry, that is too low.");
//            }
//     }

// //    do while loops

/*                                    Note
    The difference between while and do while loop is that in the while loop the condition is checked prior to
    executing any statements whereas in the case of do while loop, statements are run at least once,
    and then the condition is verified
*/

// let number;
// do {
// number = prompt("Please enter a number between 0 and 100: "); // keep prompting till 0 < number < 100
// } while (!(number >= 0 && number < 100));


// //----------------------------------------- Practice exercise 5.2 ---------------------------------------------//

// // create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.

// let theCounter = 0;
// let step = 10; // it will increase the counter by 10
// do {
// console.log(theCounter);
// theCounter += step;
// }
// while (theCounter <= 100);


// // for loops

// for (let k = 10; k < 20; k++) {   // the variable declaration is done "in the for loop itself"
//     console.log(k);
//     }

// // We can also use a for loop to create a sequence and add values to an array, like this:
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr.push(i);
//     console.log(i);
//     console.log(arr);
// }


// // Or we could create an array containing only even values:
// let arr = [];
// for (let i = 0; i < 20; i = i + 2) {
//     arr.push(i);
//     console.log(arr);
// }

// // ----------------------------------------- Practice exercise 5.3 ----------------------------------------------//
// // In this exercise we will use a for loop to create an array that holds objects. Starting
// // with creating a blank array, the block of code within the loop will create an object
// // that gets inserted into the array.

// let myWork = [];
// for (let x = 1; x < 10; x++) {

//     let status = x % 2 ? true : false;
//     // Why are we checking the modulo?
//     // Is this the only way?

//     let temp = {
//         name: `Lesson ${x}`, currentStatus: status
//     };

//     myWork.push(temp);
// }
// console.log(myWork);


// Nested loops

// ---------------------------------------- Practice exercise 5.4 ----------------------------------------------//

// // In this exercise we will be generating a table of values

// let myTable = [];
// let rows = 4;  
// let columns = 7;
// let tableCounter = 0;

// for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x < columns; x++) {
//         tableCounter++;
//         tempTable.push(tableCounter);
//     }
//     myTable.push(tempTable);
// }

// console.table(myTable);  // not console."log"
// //console.log(myTable);

// Loops and arrays

// a simple example that is going to log every value of the array:
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// changing the values of the array in a loop, for example, like this:
let names2 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names2.length; i++) {
    names2[i] = "Hello " + names2[i] + "!";
    console.log(names2[i]);
}


//--------------------------------------- Practice exercise 5.5 -----------------------------------------------//

let grid = [];
let cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (counter % 8 == 0) {
        if (row != undefined) {
            grid.push(row);
        }
        row = [];
    }
    counter++;
    let temp = counter;
    row.push(temp);
}
console.table(grid);

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             alert("Found a group with two names starting with an M:");
//             alert(groups[i]);
//             break;
//         }
//     }
// }

// for (let group of groups) {
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             alert("found one starting with M:", member);
//             break;
//         }
//     }
// }

// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             alert("found one starting with M:", member);
//             break inner;
//         }
//     }
// }


