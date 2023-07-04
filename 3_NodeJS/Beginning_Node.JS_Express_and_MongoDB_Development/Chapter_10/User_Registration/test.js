const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });

// create a new BlogPost document in our database with a function in BlogPost called create
BlogPost.create({
    title: 'The Mythbuster Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.Energy - saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up.You know those bullet - point lists.You start spotting them everything at this time of year.They go like this: '
}, (error, blogpost) => {
    console.log(error, blogpost)
})

// To select all documents in BlogPosts collection: pass an empty document as the query filter parameter to
// the first argument of the find method
BlogPost.find({}, (error, blogspot) => {
    console.log(error, blogspot)
})

// To find all documents in BlogPosts collection with a particular title for 
// e.g. 'The Mythbuster's Guide to Saving Money on Energy Bills', we do:
BlogPost.find({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills"
}, (error, blogspot) => {
    console.log(error, blogspot)
})

//  Or, to find all documents in BlogPosts collection with 'The' in the title, we do:
BlogPost.find({
    title: /The/        // we place the wildcard operator before and after "The"
}, (error, blogspot) => {
    console.log(error, blogspot)
})

// To get single database documents, i.e. to retrieve single documents with unique id _id, we use the findById method:
var id = "647a3674b88e871c801c8125"; // use real id's from your database
BlogPost.findById(id, (error, blogspot) => {
    console.log(error, blogspot)
})

// To update a record, we use findByIdAndUpdate where we provide id as the first argument and the
// fields/values to be updated in the second argument.
var id = "647a3674b88e871c801c8125";
BlogPost.findByIdAndUpdate(id, {
    title: 'Updated title'
}, (error, blogspot) => {
    console.log(error, blogspot)
})

// To delete a single record, we use the findByIdAndDelete where we provide id as the first argument.
var id = "647a3674b88e871c801c8125";
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
    console.log(error, blogspot)
})

