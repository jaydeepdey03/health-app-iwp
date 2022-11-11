const ensureAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({ msg: 'Not Authorized' });
    }
}

const ensureNotAuth = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return next()
    } else {
        res.status(401).json({ msg: 'Already logged in' });
    }
}

module.exports = {ensureAuth, ensureNotAuth};