const BlogPost = require('../models/BlogPost.js')
const path = require('path')

module.exports = async (req, res) => {
    let image
    if (req.files) {
        image = req.files.image
    }

    let imgPath;
    let imageResult;

    try {
        imgResult = await image.mv(path.resolve(__dirname, '..', 'public/img', image.name));
        imgPath = '/img/' + image.name;
    } catch (error) {
        imgPath = null;
    }

    try {
        await BlogPost.create({
            ...req.body,
            image: imgPath,
            userid: req.session.userId
        })
    } catch (error) {
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)

        req.flash('validationErrors', validationErrors)
        req.flash('data', req.body)

        return res.redirect('/posts/new');
    }

    res.redirect('/')
}