const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a blog post title.']
    },
    body: {
        type: String,
        required: [true, 'Please provide a blog post body.']
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: { /* can declare property type with an object like this because we need 'default' */
        type: Date,
        default: new Date()
    },
    image: {
        type: String,
        required: [true, 'Please upload a image']
    }
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;