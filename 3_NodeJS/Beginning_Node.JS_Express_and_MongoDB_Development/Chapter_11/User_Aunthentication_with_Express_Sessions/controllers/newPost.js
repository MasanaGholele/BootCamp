module.exports = (req, res) => {
    if (req.session.userId) {
        res.render('create')
    }
    res.redirect('/auth/login')
}

// We check if the session contains a user id. If it does, then show the create post page. 
// If it doesn't, redirect back to the login page.