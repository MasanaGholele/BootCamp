
// Math multiplication table
// In this project, we  will create a math multiplication table using loops.


let myTable = [];
let numm = 10;

for (let x = 0; x < numm; x++) {  // rows of the table nested as an array 
    let temp = [];
    for (let y = 0; y < numm; y++) { // columns of the table 
        temp.push(x * y);
    }
    myTable.push(temp); // pushing the multiplied results into the main table
}
console.table(myTable);