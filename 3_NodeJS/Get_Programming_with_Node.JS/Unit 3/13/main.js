// Import mongodb
const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "recipe_db";

// Connect to it    
MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;

    var db = client.db(dbName);

    // Insert a contact into the db
    db.collection("contacts")
        .insert({
            name: "Freddie Mercury",
            email: "fred@queen.com"
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        });
    // Display contacts
    db.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) throw error;
            console.log(data);
        });
});