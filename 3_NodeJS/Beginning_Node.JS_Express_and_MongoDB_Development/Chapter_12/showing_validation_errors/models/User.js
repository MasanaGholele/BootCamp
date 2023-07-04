const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
// const UserSchema = new Schema({
//     username: String,
//     password: String
// });
// to ensure that username and password are required and unique
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
UserSchema.plugin(uniqueValidator);
UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})
// export model
const User = mongoose.model('User', UserSchema);
module.exports = User
