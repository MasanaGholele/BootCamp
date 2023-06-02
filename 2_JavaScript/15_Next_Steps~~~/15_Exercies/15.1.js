// 15.1
// Create a JSON file and using fetch, return the results as a usable object into your
// JavaScript code:

// 1. Create a JSON object and save it in a file called list.json.
// Note: comments are not permitted in JSON

// 2. Using JavaScript, assign the filename and path to a variable named url.
const url = "list.json";

// 3. Using fetch, make the request to the file URL. Return the results as JSON.
fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
        // Once the response object is ready, iterate through the data and output the
        // results into the console of each item in the JSON file.
        data.forEach((el) => {
            console.log(`${el.name} = ${el.status}`);
        });
    });