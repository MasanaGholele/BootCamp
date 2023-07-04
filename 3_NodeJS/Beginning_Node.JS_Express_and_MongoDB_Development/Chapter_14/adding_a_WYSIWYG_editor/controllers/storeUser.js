const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            // Object returns the property names of the errors object
            // create a new array that contains each error message
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            // req.session.validationErrors = validationErrors;
            req.flash('validationErrors', validationErrors)
            /// we store req.body in the 'data' key of the flash
            req.flash('data', req.body)

            return res.redirect('/auth/register');
        }
        res.redirect('/')
    })
}