// Check if a request body is empty
const isBodyEmpty = (req, res, next) => {
    for (let key in req.body) {
        if (req.body.hasOwnProperty(key))
            return next();
    }
    return res.status(400).json({ error: 'body cannot be empty' });
}

module.exports = {
    isBodyEmpty: isBodyEmpty
}