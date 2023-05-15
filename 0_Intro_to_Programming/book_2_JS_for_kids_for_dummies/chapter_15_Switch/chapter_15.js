var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
var d = new Date();
// call the displayDate() function
displayDate();
function displayDate() {
    todayDate.innerHTML = d.toDateString();
}
function displayActivity() {
    // find out the day of the week
    var dayOfWeek = d.getDay();
    /* set a variable, called youShould, with a different
    string based on what day of the week it is */
    var youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Watch an excting series";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }
    // output the value of youShould into the thingToDo div
    document.getElementById("thingToDo").innerHTML =
        youShould;
}