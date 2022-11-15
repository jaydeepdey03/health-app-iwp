const jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader?.startsWith('Bearer ')) return res.status(401).json({ msg: 'Unauthorized' });
    console.log(authHeader)
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=> {
        if(err) return res.status(403).json({ msg: 'Invalid token' });
        req.role = decoded.userInfo.role
        next()
    })
}

module.exports = verify;