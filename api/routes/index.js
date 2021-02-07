const router = require('express').Router();
const controller = require('../controllers');

// Default route
router.get('/', (req, res) => {
    controller.welcome(req, res);
});

// Login route
router.post('/login', (req, res) => {
    controller.login(req, res);
});

// Signup route
router.post('/signup', (req, res ) => {
    controller.signup(req, res);
});

// Logout route
router.get('/logout', (req, res) => {
    controller.logout(req, res);
});

module.exports = router;