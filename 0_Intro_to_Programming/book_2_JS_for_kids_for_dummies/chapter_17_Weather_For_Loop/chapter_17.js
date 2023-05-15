/*Listing 17-4 Finding a Random Friend
var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
var randomFriend = Math.floor(Math.random() * myFriends.length);
alert(myFriends[randomFriend]);*/


var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var maxTemp = 100;
var minTemp = 0;



function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML +=
         "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] +
          ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

generateWeather();

