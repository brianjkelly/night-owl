const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    //Check for tokens being sent in three different ways
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        //If in Authorization header, remove Bearer from header string
        token = token.replace('Bearer ', '');
        //check if token is valid and not expired
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                next(err);
            } else {
                // its a valid token, so add user to req
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();
    }
};