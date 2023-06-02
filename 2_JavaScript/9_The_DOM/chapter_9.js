// // The BOM (Browser Object Model aka window browser object)

// // explore the BOM and see the objects of it with the command
// console.dir(window);

// // we can get the length of the history
// window.history.length;
// window.history.go(-1); // shows multiple pages visited in that tab

// // returns one element
// const ele1 = document.querySelector("h1");
// console.dir(ele1);

// // returns all as a list
// const eles = document.querySelectorAll(".output");
// console.log(eles);


// // Window navigator object
// console.dir(window.navigator); // or simply console.dir(navigator);

// // contains information about the browser we are using, 
// //  such as what browser it is and what version we are using,
// //  and what operating system the browser is running on.


// // Window location object
// // contains the URL of the current web page
// console.dir(window.location) // or console.dir(location)


// ***** Practice exercise 9.1 *****
console.dir(window);
// navigate to the document object
// find the window inner and outer height and width in pixels


// ***** Practice exercise 9.2 *****

console.log(window.location.protocol);
console.log(window.location.href);

// output the values of the protocol and
// href properties of the current file


// ***** Practice exercise 9.2 *****
const output = document.querySelector('.output');
output.textContent = "Hello World";
output.classList.add("red");
output.id = "tester";
output.style.backgroundColor = "red";
console.log(document.URL);
output.textContent = document.URL;