const User = require('../models/User.js')
const path = require('path')
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error){
            return res.redirect('/auth/register')
            }
        // console.log(error) see note below
        res.redirect('/')
    })
}

/* Note: 
Having errors logged in the console obviously is not ideal
We will later display the error notification in the page itself. But for now,
when there is an error, we will redirect back to the user register form.
*/