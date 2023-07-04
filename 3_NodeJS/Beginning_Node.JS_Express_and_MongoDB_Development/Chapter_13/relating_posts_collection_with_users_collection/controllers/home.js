const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    // populate automatically references the specified document with the userid in the collection
    const blogposts = await BlogPost.find({}).populate('userid')
    console.log(req.session)
    console.log('*************************************')
    console.log(blogposts)
    res.render('index', {
        blogposts
    });
}