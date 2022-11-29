const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.role) return res.status(401).json({ msg: 'You are not authenticated' });
        const rolesArray = [...allowedRoles]
        // console.log(req.role)
        const result = req.role.map(role => rolesArray.includes(role)).find(val => val === true);
        // console.log(result)
        if (!result) return res.status(401).json({ msg: 'You are not authorized to access this route' });
        next();
    }
}

module.exports = verifyRoles;