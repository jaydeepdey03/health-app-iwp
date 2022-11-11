const jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err)  return res.status(403).json({ msg: 'Token is not valid' });
            req.user = user.userInfo.username;
            req.roles = user.userInfo.roles
            next();
        })
    } else {
        return res.status(401).json({ msg: 'You are not authenticated' });
    }
}

module.exports = verify;