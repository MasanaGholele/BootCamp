// create days of week array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// define types of weather
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// set min and max temps
var maxTemp = 110;
var minTemp = 32;

// cost (to you) of a cup of lemonade
var lemonadeCost = 0.5;

// array for storing daily temps
var dailyTemp = [];

// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// make the week's weather
generateWeather();

/**
generates weather for the week
**/
function generateWeather() {
    var weatherToday;
    var tempToday;
    for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

/**
calculates glasses of lemonade sold
**/
function openTheStand() {
    var glassesSold = 0; // daily
    var totalGlasses = 0; // weekly
    var glassesLeft = 0; // left to sell

    // clear out previous results
    resetForm();

    // get input
    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);


    for (var i = 0; i < days.length; i++) {

        // glasses sold depends on temp and price
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);

        // how many glasses do we have now?
        glassesLeft = numGlasses - totalGlasses;

        // we can't sell more than we have
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }

        // increase the weekly total
        totalGlasses = glassesSold + totalGlasses;

        // display daily total
        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";

    }

    displayResults(numGlasses, glassPrice, totalGlasses);

}

/**
calculates results and displays a report
**/
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    // calculate results
    var revenue = weeklySales * glassPrice;
    var expense = weeklyInventory * lemonadeCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;

    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: R" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you R" + lemonadeCost + ". Your profit was R" + profit + ".";
}

/**
resets the game so that a new order can be placed
**/
function resetForm() {
    document.getElementById("result").innerHTML = "";

}