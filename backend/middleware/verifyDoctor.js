// verify doctor
const jwt = require('jsonwebtoken');

async function verifyDoctor(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ msg: 'Token is not valid' });
            } else {
                req.doctor = decoded.doctor;
                next();
            }
        })

        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

module.exports = verifyDoctor;