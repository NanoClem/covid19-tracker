const bcrypt = require('bcrypt');
const Models = require('../models');
require('dotenv').config();


// Check if a user exists
const findUser = (filter, cback) => {
    Models.User.findOne(filter)
        .exec((err, user) => {
            if (err) throw err;
            if (user != null)       // user has been found
                cback(err, user);
            else {
                cback('user not found', null);
            }

        });
}


/**
 * Default
 * @param {*} req 
 * @param {*} res 
 */
const welcome = (req, res) => {
    res.send({ message: 'Welcome !' });
}


/**
 * User Login
 * @param {*} req 
 * @param {*} res 
 */
const login = (req, res) => {
    findUser({ username: req.body.username }, (err, user) => {
        if (user == null || err)
            return res.status(401).json({ message: 'login failed' });
        // hash password
        bcrypt.compare(req.body.password, user.password)
            .then((match) => {
                if (match)
                    res.status(200).json({ token: 'testToken' });
                else
                    res.status(401).json({ message: 'login failed' });
            });
    });
}


/**
 * User Signup
 * @param {*} req 
 * @param {*} res 
 */
const signup = (req, res) => {
    findUser({ email: req.body.email, username: req.body.username }, (err, user) => {
        if (user != null)
            return res.status(409).json({ message: 'user already exists' });

        // Hash password
        bcrypt.hash(req.body.password, 10)
            .then((pswdHash) => {
                // Create new user
                const newUser = Models.User({
                    email: req.body.email,
                    username: req.body.username,
                    password: pswdHash
                });
                // Insert it in db
                newUser.save((err2, savedUser) => {
                    if (err2)
                        return res.status(500).json({ message: err2 });
                    res.status(201).json({
                        message: 'user successfully created',
                        inserted_id: savedUser._id
                    });
                });
            });
    });
}


/**
 * User Logout
 * @param {*} req 
 * @param {*} res 
 */
const logout = (req, res) => {

}


module.exports = {
    welcome: welcome,
    login: login,
    signup: signup,
    logout: logout
}