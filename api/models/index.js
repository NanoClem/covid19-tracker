const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// User schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
}, { timestamps: true });


module.exports = {
    User: mongoose.model('User', UserSchema, 'users')
}