// //  Remember we said that classes are just some special function beneath the surface.
// //  We could create the object with a special function like this:

// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }

// let dog1 = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog1);

// let dog2 = new Dog("Ketan", 5, "black", "pekingese")
// console.log(dog2);

// // The dog example could have been made using a class syntax as well. It would have
// // looked like this:

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog1 = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// let dog2 = new Dog("Python", 20, "white", "german sherperd");
// let dog3 = new Dog("JavaScript", 41, "reddish_brown", "chihuahua");

// console.log(dog1);
// console.log(dog2);
// console.log(dog3);

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Maaike", "van Putten");
// let p1 = new Person("Maaike", "van Putten");

// console.log(p);
// console.log(p1);

// console.log("Hi", p.firstname);
// console.log("Hi", p.lastname);

// console.log("Hi", p.lastname, p.firstname);

// console.log(p === p1);

// // they are not equal, their addresses are not the same even though they have the same "info"

// // try creating a new person without a lastname

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Maaike");
// console.log("Hi", p.firstname, p.lastname);
// // it will return Hi Maaike 'undefined' because he has no surname


// // you can set a default surname

// class Person {
//     constructor(firstname, lastname = "Doe") {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Maaike");
// console.log("Hi", p.firstname, p.lastname);

// let p2 = new Person ("Mel", "Lee")
// console.log("Hi", p2.firstname, p2.lastname);

// Refer to the excercises file for Practice exercise 7.1

// Methods
// When defining these methods, we don't use the function
// keyword. We start directly with the name: in this case the function name is "greet"

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

// let person1 = new Person("Maaike", "van Putten");
// let person2 = new Person("Laurence", "Svekis");
// console.log("hello " + person1.firstname);
// console.log("hello " + person2.firstname);

// function greet is already printing to the console

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name + ".";
//     }
// }
// let p = new Person("Sarah", "van Putten");
// p.greet();
// p.compliment("Sarah", "hairstyle");
// console.log(p.compliment("Sarah", "hairstyle"));

// Refer to the excercises file for Practice exercise 7.2


// //Properties (making them private)
// this one works because it has a # next to the greet firstname

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!", this.#firstname);
//     }
// }


// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// p.greet();


// Properties (making them private ) this one will not allow you to see the name because firstname has
// no # in front of it

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;}
//         greet() {
//             console.log("Hi there!" , this.#firstname);
//         }
//     }


// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// p.greet();



// Getters and setters

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }

// // Here is how to use it outside the class instance:
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// Inheritance
// parent class
// class Vehicle {
//     color;
//     currentSpeed;
//     maxSpeed;
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// Child Class (keyword =  extends so that child class can inherit)
// class Motorcycle extends Vehicle {
//     fuel; //this one belongs exclusively to the motorcyle
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// console.log(motor.currentSpeed);
// console.log(motor.accelerate(50));
// console.log(motor.move());


// PROTOTYPES

// class Person {
//     firstname;
//     lastname;
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }

// // you can add an additional fucntion to the parent class "Person" using a prototype

// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };

// // You can also do this for properties:
// Person.prototype.favoriteColor = "green";

// // And then you can call them from instances of Person:
// let p = new Person("Masana", "Gholele");
// console.log(p.favoriteColor);
// p.introduce();
// p.greet();


// if you don't want to use the prototype then you can add the "favorite color" in this way
// class Person {
//     firstname;
//     lastname;
//     favoriteColor;//here
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.favoriteColor = favoriteColor; //and here
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }

// Refer to the excercises file for Practice exercise 7.3 and chapter projects
