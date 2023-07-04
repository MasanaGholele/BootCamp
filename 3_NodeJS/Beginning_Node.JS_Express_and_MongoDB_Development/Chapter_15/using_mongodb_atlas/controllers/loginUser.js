const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) { // if passwords match
                    // store user session, will talk about it later
                    req.session.userId = user._id
                res.redirect('/')
                }
                else {
                    req.flash('error', 'Password incorrect.')
                    req.flash('data', req.body)
                    res.redirect('/auth/login')
                }
            })
        }
        else {
            req.flash('error', 'Username does not exist.')
            res.redirect('/auth/login')
        }
    })
}