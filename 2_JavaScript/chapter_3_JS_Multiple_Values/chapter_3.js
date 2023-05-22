//........................................Creating arrays........................................................

//a little demo to show that an array can hold multiple data types
let arr = ["hi there", 5, true]; // you can also create it without the "let/var/const" just arr= [];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

//............accessing elements within the array........................
console.log(arr[-1]);               //non- existent array will simply log "undefined"
console.log(arr[0]);                //to access index zero "hi there"
console.log(arr[arr.length - 1]);   //this will log "true" which is the last element



//.....................................Overwriting elements....................................................

arr[1] = "I'm Masana";
console.log(arr[1]);   //it'll overwrite the "5"

const arr2 = ["hello world"];
arr2[0] = "new value";  //changing a "const index value" in the array  is possible
console.log(arr2[0]);
//arr2 = ["nope, now you are overwriting the array"]; 
//changing the array itself (instead of index value) is not possible



//------------------------------------------Practice exercise 3.1------------------------------------------//

// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList);

// 2. Check your list length in the console.
console.log(shoppingList.length);

// 3. Update "Bread" to "Bananas."
shoppingList[1] = "Bananas"

// 4. Output your entire list to the console.
console.log(shoppingList);


//.......................................Array methods...........................................................

favoriteFruit = ["grapefruit", "orange", "lemon"]; // create a new array
console.log(favoriteFruit);

favoriteFruit.push("tangerine"); // to add it to the end of the array .push
console.log(favoriteFruit);

favoriteFruit.splice(2, 0, "lime", "watermelon"); // .splice
console.log(favoriteFruit); //new ['grapefruit', 'orange', 'lime', 'watermelon', 'lemon', 'tangerine']
// 2 will add lime and watermenlon "from" index point no.2 
// 0 means that we want 0 values to be removed after adding those two 

favoriteFruit.splice(2, 2, "banana", "apple");
console.log(favoriteFruit); //new ['grapefruit', 'orange', 'banana', 'apple', 'lemon', 'tangerine']
//it added two and removed the two that were there before

moreFruit = ["guava", "naartjie", "grapes"];
allFavFruit = favoriteFruit.concat(moreFruit); //jioned together
console.log(allFavFruit);



//...............................,,,,,,,,,,,,,,,,,,,,,,..Deleting elements.........................................

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

numbers.pop();          // removing the last element is done with pop()
console.log(numbers);

numbers.shift();        // deleting the first element can be done with shift().
console.log(numbers);

numbers.splice(1, 3);
console.log(numbers);
// This is a very special method because we can also use it to delete values.
// We specify the index from where we want to start deleting, and then the number of elements we want to delete.

delete numbers[0];
console.log(numbers); // [empty, 6, 7, 8] your array length will not be affected



//..........................................Finding elements..............................................

// finding values
numbers = [2, 6, 7, 8];

let findValue = numbers.find(function (e) { return e === 6 }); // using normal function

let findValue2 = numbers.find(e => e === 10); // using arrow function

console.log(findValue, findValue2); // 6 exists hence it will return a "6" but 10 does not exist "undefined"

//finding the index of a value
numbers = [2, 6, 7, 8];
let findIndex = numbers.indexOf(6);     // [1]
let findIndex2 = numbers.indexOf(10);   // [-1] "does not exist"
console.log(findIndex, findIndex2);

let findIndex3 = numbers.indexOf(6, 2);    //find it from index [2], it'll return undefined since 6 is in index [1]
console.log(findIndex3);

// The value of lastDog will be 4 because that is the last occurrence of dog in the array.
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog"); // [4]
console.log(lastDog);

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort(); // sorting alphabetically A-Z or ascending numerical order
console.log(names);

names.reverse(); // sorting alphabetically Z-A or descending numerical order
console.log(names);



//----------------------------------------------Practice exercise 3.2----------------------------------------------//

// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
shoppingList2 = ["Milk", "Bread", "Apples"];
console.log(shoppingList2);

// 3. Update "Bread" with Bananas and Eggs.
shoppingList2.splice(1, 1, "Bananas", "Eggs");
console.log("shop2 " , shoppingList2);

// 4. Remove the last item from the array and output it into the console.
shoppingList2.pop();
console.log(shoppingList2);

// 5. Sort the list alphabetically.
shoppingList2.sort();
console.log(shoppingList2);

// 6. Find and output the index value of Milk.
indexOfMilk = shoppingList2.indexOf("Milk");
console.log(indexOfMilk);

// 7. After Bananas, add Carrots and Lettuce.
shoppingList2.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppingList2);

// 8. Create a new list containing Juice and Pop.
shoppingList3 = ["Juice", "Pop"];
console.log(shoppingList3);

// 9. Combine both lists, adding the new list twice to the end of the first list.
finalShoppingList = shoppingList2.concat(shoppingList3).concat(shoppingList3);
console.log(finalShoppingList);

// 10. Get the last index value of Pop and output it to the console.
lastPop = finalShoppingList.lastIndexOf("Pop");
console.log(lastPop);

// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]


//.........................................Multidimensional arrays...........................................

//----------------------------------------Practice exercise 3.3----------------------------------------//

// 1. Create an array containing three values: 1, 2, and 3.
exerciseArray = [1, 2, 3];

// 2. Nest the original array into a new array three times.
exerciseArray2 = [exerciseArray, exerciseArray, exerciseArray];
console.log(exerciseArray2); 

// 3. Output the value 2 from one of the arrays into the console.
console.log(exerciseArray2[1][1]); //from 2nd array

//...........................Objects in JavaScript.......................................

let dog =
{
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};

//accessing the property values using keys     
let dogColor1 = dog["color"];

//another way to do this.
let dogColor2 = dog.color;

// updating objects
dog["color"] = "blue";

//another way to do this.
dog.weight = 2.3;

console.log(dog);


//----------------------------------------------Practice exercise 3.4----------------------------------------------//
//1. Create a new myCar object for a car. Add some properties, including, but not limited to, 
//   make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
let myCar = {
    make: "Audi",
    model: "R8",
    coupe: true,
    priceInMillonRands: 4.2
};

//2. Create a variable that can hold the string value color. This variable containing a string value color can now 
//   be used to reference the property name within myCar. 
//   Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.

let colorProperty = "color"
myCar[colorProperty] = "Glacier White Metallic";

//3. Use that same variable and assign a new property string value to it, such as forSale. 
//   Use the bracket notation once again to assign a new value to the forSale property to 
//   indicate whether the car is available for purchase.
colorProperty = "forSale"
myCar[colorProperty] = true;

//4. Output make and model into the console.
console.log(myCar.make, myCar.model);

//5. Output the value of forSale into the console.
console.log(myCar.forSale);



//------------------------------------------Practice exercise 3.5------------------------------------------//
// 1. Create an object named people that contains an empty array that is called friends.

let people = { friends: [] };

// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.

let friend1 = {
    firstName: "Vee",
    lastName: "Shai",
    ID: 456
};

let friend2 = {
    firstName: "Jullie",
    lastName: "Golele",
    ID: 123
};

let friend3 = {
    firstName: "Joyce",
    lastName: "Rikhotso",
    ID: 789
};

// 3. Add the three friends to the friend array.

people.friends.splice(0,0, friend1, friend2, friend3);      // my answer
people.friends.push(friend1,friend2,friend3);               // their answer

// 4. Output it to the console.
console.log(people);








// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// // Self-check quiz
// // 1. Can you use const and update values within an array?
// //Yes

// // 2. Which property in an array gives the number of items contained in the array?
// Array.length

// // 3. What is the output in the console?

// // const myArr1 = [1,3,5,6,8,9,15];
// // console.log(myArr1.indexOf(0)); ans = -1
// // console.log(myArr1.indexOf(3)); ans = 1


// // 4. How do you replace the second element in an array myArr = [1,3,5,6,8,9,15] with the value 4?
// myArr = [1,3,5,6,8,9,15];
// myArr[1] = 4; 
// myArr.splice(1,1, 4);  // 1st 1 for index, 2nd 1 for deleting

// // 5. What is the output in the console?
// const myArr2 = [];
// myArr2[10] = 'test'
// console.log(myArr2);     // ans = [empty x 10, "test"]
// console.log(myArr2[2]);  // ans = undefined


// // 6. What is the output in the console?
// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// console.log(myArr3);         
// myArr3.length = 0;  
// console.log(myArr3[0]); // undefined (empty)

