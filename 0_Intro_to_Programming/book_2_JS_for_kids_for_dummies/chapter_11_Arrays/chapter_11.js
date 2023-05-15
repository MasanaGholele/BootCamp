var people = ["Kareem", "Fatma", "Sumaya", "Mr. Hobson", "Ms. Young", "Mrs. O' Doherty"];
alert(people);

var otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];
alert(otherPeople);

 //toString and valueOf do the same thing
people = people.toString();
alert(people);

people = people.valueOf();
alert(people);


 //Join together arrays
people = people.concat(otherPeople);
alert(people);

// Sort the elements of an array alphabetically
var people = ["Cellar", 
"Flavor",
"Cougar",
"Chapter",
"Mayor",
"Anger",
"Senator",
"Passenger",
"Major",
"Popular",
"Tractor",
"Thunder",
"Pillar",
"Border",
"Calendar",
"Quarter",
"Lunar",
"Proper",
"Elevator",
"Bitter"];

people = people.sort();
/* 
//Only remove the last element of the arra.
var popped = people.pop();
alert(popped);

 //Add an element to the end of the array
 people = people.push("Teddy");
alert(people);

 //Reverse the elements of an array
people = people.reverse();
alert(people);

 //Remove the first element of the array
 people = people.shift();
alert(people);

// Add an element to the beginning of the array
people = people.unshift("Mary");
alert(people);

 //Pick certain elements from your array to create a new array
people = people.slice(0,3);
alert(people);

// Sort the elements of an array alphabetically
people = people.sort();
alert(people);

 //Add or remove elements at certain positions
 //0 means to insert an element not remove
 people = people.splice(1,0,"Kareem");
alert(people);

//Find position of 'Eddie' in the array
people = people.indexOf("Eddie");
alert(people);

//Find position of 'Sumaya' in the array
people = people.indexOf("Sumaya");
alert(people);

//Find the last position of 'Bobby' in the array
people = people.lastIndexOf("Bobby");
alert(people);

//Convert the array into a string and separate the elements by specified delimeter
people = people.join(",");
alert(people);
*/