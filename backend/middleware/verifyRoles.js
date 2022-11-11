const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req?.role) return res.status(401).json({ msg: 'You are not authenticated' });
        if(!allowedRoles.includes(req.roles)) return res.status(403).json({ msg: 'You are not authorized' });
        next();
    }
}

module.exports = verifyRoles;