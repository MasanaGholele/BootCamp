module.exports = (req, res) =>{
    let username = ""

    const data = req.flash('data')[0];
    if (typeof data != "undefined") {
        username = data.username
    }

    res.render('login', {
        error: req.flash('error'),
        username
    })
   }