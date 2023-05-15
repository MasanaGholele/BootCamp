// declare globals
var money = 20;
var lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    resetForm();
    var day = 0;
    while (money > 0) {
        day++;
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        var totalPrice = priceToday * numberOfSandwiches;


        if (money >= totalPrice) {
            money = money - totalPrice;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: R" + priceToday + ". You have R" + money.toFixed(2) + " left.</p>";

        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: R" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        }

    }
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";

}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}