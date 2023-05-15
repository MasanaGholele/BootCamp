var nam = "Nicholas";
alert("Hello " + nam);

// If statements
if (nam.length > 7) {
    alert("Wow, you have a REALLY long name!");
} else {
    alert("Your name isn't very long.");
}


var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
    alert("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
    alert("I'm having the beef.");
} else if (sweetAndSourPork) {
    alert("OK, I'll have the pork.");
} else {
    alert("Well, I guess I'll have rice then.");
}


// While loops
var sheepCounted = 0;
while (sheepCounted < 10) {
    alert("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
}
alert("Zzzzzzzzzzz");


for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    alert("I have counted " + sheepCounted + " sheep!");
}
alert("Zzzzzzzzzzz");


var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    alert("Hello!");
}


var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (var i = 0; i < animals.length; i++) {
    alert("This zoo contains a " + animals[i] + ".");
}


var nam = "Nick";
for (var i = 0; i < nam.length; i++) {
    alert("My name contains the letter " + nam[i] + ".");
}

/*
for (var x = 2; x < 10000; x = x * 2) {
    alert(x);
}*/


// Try it out
var exponent = 0;
var result = 0;
while (result < 10000) {
    result = Math.pow(3, exponent)
    alert(result);    
    exponent++;
}


// ----------------- Programming Challenges --------------
// --------------- Awesome Animals ------------------
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (var i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i];
}
alert(animals);

// ----------------- Random string generator -----------
var i = 0;
var result = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
while (i < 6) {
    result += alphabet[ Math.floor(Math.random() * alphabet.length) ];
    i++;
}

alert(result);