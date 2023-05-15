
//1. Create your dreamCar object in the JavaScript pane.

var dreamCar = {
    make: "Audi",
    model: "R8",
    color: "Galier White Metallic",
    year: 2023,
    bodyStyle: "Luxury Car",
    price: R2M
};



//Write a statement to update the price of the car when the program runs:

document.getElementById("pricetag").innerHTML = dreamCar.price;


//3. Write a statement to update the model year on the price tag:

document.getElementById("modelyear").innerHTML = dreamCar.year;

//4. Write a statement to update the color of the car:

document.getElementById("body").style.backgroundColor = dreamCar.color;
//5. Write a statement to write out the make and model of the car on the side of the car:

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

var dreamCar = {    
    make: "Oldsmobile",    
    model: "98",    
    color: "brown",    
    year: 1983,    
    bodyStyle: "Luxury Car",    
    price: 4500 
  };
  
  document.getElementById("pricetag").innerHTML = dreamCar.price;
  document.getElementById("modelyear").innerHTML = dreamCar.year;
  document.getElementById("body").style.backgroundColor = dreamCar.color;
  document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;