const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
const flash = require('connect-flash')

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const storeUserController = require('./controllers/storeUser')
const newUserController = require('./controllers/newUser')
const getPostController = require('./controllers/getPost')
const validateMiddleware = require("./middleware/validateMiddleware")
const authMiddleware = require('./middleware/authMiddleware')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
const expressSession = require('express-session')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const BlogPost = require('./models/BlogPost.js')

const app = new express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(fileUpload())

app.use(express.json())
app.use(
    express.urlencoded({
        extended: false
    })
);
// app.use(express.urlencoded())

app.use(expressSession({
    secret: 'keyboard cat'
}))


app.use('/posts/store', validateMiddleware)

// hide the new user and login links if a user is already logged in.
global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });


// to prevent a logged in user from visiting a login/new user page and 
app.get('/posts/new', authMiddleware, newPostController)
app.get('/', homeController)
app.get('/post/:id', getPostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/posts/store', authMiddleware, storePostController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)

app.get('/auth/logout', logoutController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.use((req, res) => res.render('notfound'));

app.listen(4000, () => {
    console.log('App listening on port 4000')
})