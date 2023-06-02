const http = require('http')                          // require the built-in http package and assign it to a variable called http

// Responding with HTML p18

// import a file system module ‘fs’ which helps us interact with files on our server.
const fs = require('fs') 
            
// readFileSync method from fs reads the content of each file and returns it.
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

// a single function - request handler (works for small sites)
const server = http.createServer((req, res) => {
    if(req.url === '/about')
        res.end(aboutPage)
    else if(req.url === '/contact')
        res.end(contactPage)
    else if(req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)   
    }
})
server.listen(3000)


 // Creating our First Server p13
    // console.log(req.url)                                       
    // res.end('Hello Node.js') 

// More on Request and Response p15
// Responding with static text
// if (req.url === '/about')
// res.end('The about page')
// else if (req.url === '/contact')
// res.end('The contact page')
// else if (req.url === '/')
// res.end('The home page')
// else {
// res.writeHead(404)
// res.end('page not found')