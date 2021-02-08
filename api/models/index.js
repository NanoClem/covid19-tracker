const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// User schema
const UserSchema = new Schema({
    username: String,
    password: String,
    email: {
        type: String,
        default: 'default@mail.com'
    }
}, { timestamps: true });


module.exports = {
    User: mongoose.model('User', UserSchema)
}