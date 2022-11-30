const User = require('../Models/user')
const jwt = require('jsonwebtoken')


const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.refreshToken) res.status(401).json({ msg: 'No cookies' });
    // console.log(cookies.refreshToken)
    const refreshToken = cookies.refreshToken;

    const person = await User.findOne({ refreshToken })
    if (!person) res.status(401).json({ msg: 'No person' });
    // evalutate jwt
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) res.status(403).json({ msg: 'Invalid token' });
        const accessToken = jwt.sign({
            userInfo: {
                name: user.name,
                role: user.role
            },
        },process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
        res.status(200).json({ accessToken: accessToken });
    })

}

module.exports = {
    handleRefreshToken
}