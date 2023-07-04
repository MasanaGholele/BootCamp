module.exports = (req, res) => {
    // destroy all session data incl. session user id, redirect to home page
    req.session.destroy(() => {
        res.redirect('/')
    })
}