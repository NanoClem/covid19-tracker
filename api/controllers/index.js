const bcrypt = require('bcrypt');
const Models = require('../models');
require('dotenv').config();


// Check if a user exists
const userExists = (filter, cback) => {
    Models.User.findOne(filter)
        .exec((err, user) => {
            if (err) throw err;
            if (user != null)       // user has been found
                cback(err, user);
            else
                cback('user not found', null);
        });
}



// Default
const welcome = (req, res) => {
    res.send({ message: 'Welcome !' });
}

// Login
const login = (req, res) => {
    userExists({ username: req.body.username }, (err, user) => {
        if (user == null) 
            return res.status(404).json({ error: err });
        // hash password
        bcrypt.compare(req.body.password, user.password)
            .then((match) => {
                if (match)
                    res.status(200).json({ message: 'successfully logged in' });
                else
                    res.status(401).json({ message: 'login failed' });
            });
    });
}

// Signup
const signup = (req, res) => {
    userExists({ email: req.body.email, username: req.body.username }, (err, user) => {
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

// Logout
const logout = (req, res) => {

}


module.exports = {
    welcome: welcome,
    login: login,
    signup: signup,
    logout: logout
}