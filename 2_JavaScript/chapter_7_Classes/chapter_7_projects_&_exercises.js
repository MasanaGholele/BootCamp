// // -------------------------------- Practice exercise 7.1 ------------------------------------- //

// // Take the following steps to create a person class, and print instances of friends' names:

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("Masana", "Gholele");
// let person2 = new Person("Rivoningo", "Ntsumi");
// console.log("hello " + person1.firstname);
// console.log("hello " + person2.firstname);


// // --------------------------------- Practice Execise 7.2 ----------------------------------- //
// Get your friend's full name:

// class Friend {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let friend1 = new Friend("Rivoningo", "Ntsumi");
// let friend2 = new Friend("Ndzuniso", "Vangama");
// console.log(friend1.fullname());
// console.log(friend2.fullname());


// // --------------------------------- Practice Execise 7.3 ----------------------------------- //

class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.eat = function () {
    return this.species + " is eating";
}
let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "bark");
cat.speak();
console.log(dog.eat());
console.log(dog);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Projects  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// Employee tracking app

class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Masana", "Gholele", 10);
const person2 = new Employee("Joyce", "Rikhotso", 5);
const workers = [person1, person2];
Employee.prototype.details = function () {
    return this.first + " " + this.last + " has worked here " +
        this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});


// Menu items price calculator

class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total() {
        return this.calTotal();
    }
}

const val1 = new Menu(2, 0);
const val2 = new Menu(1, 3);
const val3 = new Menu(3, 2);

console.log(val1.total);
console.log(val2.total);
console.log(val3.total);