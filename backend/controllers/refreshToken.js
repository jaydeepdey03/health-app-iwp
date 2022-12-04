const User = require('../Models/user')
const jwt = require('jsonwebtoken')


const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    // ensure cookie is set
    if (!cookies?.refreshToken) res.status(401).json({ msg: 'No cookies' });
    const refreshToken = cookies.refreshToken;

    // cross verify refreshToken with the stored refreshToken in DB
    const person = await User.findOne({ refreshToken })
    if (!person) res.status(401).json({ msg: 'No person' });

    // evalutate jwt
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        const role = Object.values(user.role)
        if (err) res.status(403).json({ msg: 'Invalid token' });
        // accessToken is issued on successful verification
        const accessToken = jwt.sign({
            userInfo: {
                name: user.name,
                role: user.role
            },
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.status(200).json({ accessToken: accessToken, role: role });
    })

}

module.exports = {
    handleRefreshToken
}