const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejs = require('ejs')
const fileUpload = require('express-fileupload')

const app = new express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(fileUpload())

// NEW code - install the body parsing middleware to enable the POST function
app.use(express.json())
// app.use(express.urlencoded())
app.use(
    express.urlencoded({
        extended: false
    })
);

// const customMiddleWare = (req, res, next) => {
//     console.log('Custom middle ware called')
//     next()
// }
// app.use(customMiddleWare)

const validateMiddleWare = (req, res, next) => {
    console.log("req files");
    if (req.files == null || req.body.title == null) {
        return res.redirect('/posts/new')
    }
    next()
}

app.use('/posts/store', validateMiddleWare)

const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });


// Routing
//NEW code for the home page after enabling the post 
// And whenever the key name and value name are the same (e.g. blogposts: blogposts), we can shorten it to simply:
app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    console.log(blogposts)
    res.render('index', {
        blogposts
    });
})

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
})

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
})


// NEW code - create post route
app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
})

// NEW code - function to handle the POST request 
// to enable this,
// we first need to install the body parsing middleware by adding (app.use exp.json&.urlencoded)
// model creates a new doc with browser data
// console.log(req.body) // it will now "post" to the database instead


app.post('/posts/store', (req, res) => {
    console.log("creating new post");
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name),
        async (error) => {
            console.log("creating", image.name)
            await BlogPost.create({
                ...req.body,
                image: '/img/' + image.name
            })
            res.redirect('/')
        })
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
})