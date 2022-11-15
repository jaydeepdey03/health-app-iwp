const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req?.role) return res.status(401).json({ msg: 'You are not authenticated' });
        if(!allowedRoles.includes(req.role)) return res.status(403).json({ msg: 'You are not authorized' });
        const rolesArray = [...allowedRoles]
        console.log(rolesArray)
        console.log(req.role)
        next();
    }
}

module.exports = verifyRoles;