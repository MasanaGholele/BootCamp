
// Take the following array:

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);

// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]


// You can take the following steps, or adopt your own approach:

// • Remove the first item and the last item.
theList.shift();
theList.pop();
console.log(theList);

// • Add FIRST to the start of the array.
theList.unshift("FIRST");
console.log(theList);

// • Assign hello World to the fourth item value.
theList[3] = "hello World" 
console.log(theList);

// • Assign MIDDLE to the third index value.dcx
theList[2] = "MIDDLE";
console.log(theList);

// • Add LAST to the last position in the array.
theList.push("LAST");
console.log(theList);



// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
// Company product catalog
// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.

// 1. Create an array to hold an inventory of store items.

let inventories = [];

// 2. Create three items, each having the properties of name, model, cost, and quantity.

let invItem1 = {
    name: "Toyota Double Cab",
    model: "Hilux",
    cost: 500000,
    quantity: 20
};

let invItem2 = {
    name: "Ford Single Cab",
    model: "Ranger",
    cost: 600000,
    quantity: 30
};

let invItem3 = {
    name: "VolksWagen Double Cab",
    model: "Amarok",
    cost: 700000,
    quantity: 40
};

// 3. Add all three objects to the main array using an array method, and then log the inventory array to the console.

inventories.push(invItem1, invItem2, invItem3);
console.log(inventories);

// 4. Access the quantity element of your third item, and log it to the console.
console.log(inventories[2].quantity);






