const express = require('express')
const path = require('path')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });

const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')

// NEW code - install the body parsing middleware to enable the POST function
app.use(express.static('public'))
app.use(express.json())
// app.use(express.urlencoded())
app.use(
    express.urlencoded({
        extended: false
    })
);

const fileUpload = require('express-fileupload')
app.use(fileUpload())


const BlogPost = require('./models/BlogPost.js')

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

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

/* longer version
app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    res.render('index', {
        blogposts: blogposts
    });
})*/

// app.get('/', (req, res) => {
//res.sendFile(path.resolve(__dirname, 'pages/index.html'))
// res.render('index');
// })

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
})

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
})

app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
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


app.post('/posts/store', async (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name),
        async (error) => {
            await BlogPost.create({
                ...req.body,
                image: '/img/' + image.name
            })
            res.redirect('/')
        })
})

// use a promise instead
// app.post('/posts/store', (req, res) => {
//     BlogPost.create(req.body)
//         .then(blogpost => res.redirect('/'))
//         .catch(error => console.log(error))
// })

