module.exports = (req, res) => {
    let title = "";
    let body = "";
    const data = req.flash('data')[0];

    if (typeof data != "undefined") {
        title = data.title
        body = data.body
    }

    res.render("create", {
        errors: req.flash('validationErrors'),
        title,
        body,
    })
}