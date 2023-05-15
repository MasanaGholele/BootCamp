// // ------------------------------- Practice exercise 8.1 -------------------------------- //

// const secretMes1 = "How's%20it%20going%3F"; //space = %20
// const secretMes2 = "How's it going?";
// const decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);
// const encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);
// const uri = "http://www.basescripts.com?=Hello World";
// const encoded = encodeURI(uri);
// console.log(encoded);
// // If the URL variable were to contain a special
// // character, like = and &, this would change the meaning and break the URI if these
// // characters don't get encoded.

// // ------------------------------- Practice exercise 8.2 -------------------------------- //

// // Remove duplicates from the array using filter() and indexOf().
// const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];
// const arr2 = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);


// // ------------------------------- Practice exercise 8.3 -------------------------------- //
// // Using the array map() method, update an array's contents
// const myArr = [1, 4, 5, 6];
// const myArr1 = myArr.map(function (x) {
//     return x * 2;
// });
// console.log(myArr1);
// const myArr2 = myArr.map((x) => x * 2);
// console.log(myArr2);


// // ------------------------------- Practice exercise 8.4 -------------------------------- //
// // transform the sentence thIs will be capiTalized for each word into 
// // This Will Be Capitalized For Each Word:

const val2 = "thIs will be capiTalized for each word";
function wordsCaps(str) {
    str = str.toLowerCase();
    const tempArr = [];
    let words = str.split(" "); // so that each word can be "independent"
    words.forEach(word => {
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
        tempArr.push(temp);
    });
    return tempArr.join(" ");
}
console.log(wordsCaps(val2));



// // ------------------------------- Practice exercise 8.5 -------------------------------- //
// Using the replace() string method
// 2 l3v1 j0v0scr2pt
let val = "I love JavaScript";
val = val.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((letter, index) => {
    console.log(letter);
    val = val.replaceAll(letter, index);
});
console.log(val);


// // ------------------------------- Practice exercise 8.6 -------------------------------- //

console.log("value of PI is " +  Math.PI);
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 11)); // 0-10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10; +1 so that 0 is excluded
console.log(Math.floor(Math.random() * 100) + 1); // 1-100;
function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 10; x++) {
    console.log(ranNum(1, 10));  // min and max values
}


// // ------------------------------- Practice exercise 8.7 -------------------------------- //

// let future = new Date(2025, 5, 15); // Date Class
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month - 1]} ${day} ${year}`; // -1 because index starts from 0
// console.log(myDate);


// // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   Projects  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //

//  Word scrambler

// let str = "AdvancedJS";
// function scramble(val) {
//      let max = val.length; 
//     let temp = "";
//     for (let i = 0; i < max; i++) {
//         console.log(val.length);
//         // to randomly select a letter by its index number
//         let index = Math.floor(Math.random() * val.length);        
//         temp += val[index]; // add the index value and assign it to the temp
//         console.log(temp);
//         val = val.substr(0, index) + val.substr(index + 1);
//         console.log(val);
//     }
//     return temp;
// }
// console.log(scramble(str));


// // // Countdown timer
// const endDate = "June 13 2023";
// function countdown() {
//     const total = Date.parse(endDate) - new Date();
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const mins = Math.floor((total / 1000 / 60) % 60);
//     const secs = Math.floor((total / 1000) % 60);
//     return {
//         days,
//         hrs,
//         mins,
//         secs
//     };
// }
// function update() {
//     const temp = countdown();
//     let output = "";
//     for (const property in temp) {
//         output += (`${property}: ${temp[property]} `);
//     }
//     console.log(output);
//     setTimeout(update, 1000);
// }
// update();