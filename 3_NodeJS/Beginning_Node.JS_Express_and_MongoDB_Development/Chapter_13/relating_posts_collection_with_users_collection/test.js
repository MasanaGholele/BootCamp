const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://127.0.0.1/my_database', {
    useNewUrlParser: true
})

// BlogPost.create({
//     title: 'The Mythbuster Guide to Saving Money on Energy Bills',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.Energy - saving is one of my favourite money topics, because once you get past the boring bullet- point lists, a whole new world of thrifty nerdery opens up.You know those bullet - point lists.You start spotting them everything at this time of year.They go like this: '
// })
//     .then(blogpost => console.log(blogpost))
//     .catch(error => console.log(error));

// Select all documents
BlogPost.find({})
    .then(post => {
        console.log(post)
    })
    .catch(error => {
        console.log(error)
    })

BlogPost.find({
    title: 'The Mythbuster\'s Guide to Saving Money on Energy Bills'
})
.then(blogpost => {
    console.log(blogpost)
})
.catch(error => {
    console.log(error)
})


BlogPost.find({
    // wildcard search
    title: /The/
})
.then(blogpost => {
    console.log(blogpost)
})
.catch(error => {
    console.log(error)
})

const id = '646f87207dd6e43d5599feb2';
const id2 = '646f890211bcfbfa14e1b46d';
const id3 = '646f89c1b84592cd04b4c3fd'

BlogPost.findById(id)
.then(blogpost => console.log(blogpost))
.catch(error => console.log(error))

BlogPost.findByIdAndUpdate(id2, {
    title: 'Updated title'
}, 
{ new: true }) 
.then(blogpost => console.log(blogpost))
.catch(error => console.log(error));

// BlogPost.findByIdAndDelete(id)
// .then(blogpost => console.log(blogpost))
// .catch(error => console.log(error));