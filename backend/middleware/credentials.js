const allowedOrigin = require('../config/allowedOrigin');

const credentials = (req, res, next)=> {
    const origin = req.headers.origin;
    if (allowedOrigin.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
}

module.exports = credentials;