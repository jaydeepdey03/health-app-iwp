const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = (req, res) => {
    const { name, email, password, role } = req.body;
    let errors = [];

    // check required fields
    if (!name || !email || !password) {
        res.status(400).json({ msg: 'Please fill in all fields' });
    }
    // validation passed
    User.findOne({ email })
        .then(async (user) => {
            if (user) {
                // user exists
                errors.push({ msg: 'Email is already registered' });
                res.status(400).json({ errors });
            } else {
                const user = new User({
                    name,
                    email,
                    password,
                    role
                });
                await user.save()

                res.status(200).json({ msg: 'User registered' });
            }
        })
}

const login = (req, res, next) => {
    // check if cookie is set which means some user is already logged in 
    if (req.cookies.refreshToken) res.status(400).json({ msg: 'You are already logged in' });
    const { email, password } = req.body;
    let errors = [];
    if (!email || !password) {
        errors.push({ msg: 'Please fill in all fields' });
        res.status(400).json({ errors });
    }
    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.push({ msg: 'Email is not registered' });
                res.status(400).json({ errors });
            } else {
                bcrypt.compare(password, user.password, async (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        const accessToken = jwt.sign(
                            {
                                userInfo: {
                                    name: user.name,
                                    role: user.role
                                },
                            }
                            , process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
                        const refreshToken = jwt.sign({ name: user.name, role: user.role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' });

                        // adding a refreshToken in mongodb
                        await User.findOneAndUpdate({ _id: user._id }, { refreshToken: refreshToken })
                        res.cookie('refreshToken', refreshToken, { maxAge: 1000 * 60 * 60 * 24, sameSite: 'none', httpOnly: true, secure: true });
                        res.status(200).json({ role: user.role, accessToken: accessToken });
                    } else {
                        errors.push({ msg: 'Password is incorrect' });
                        res.status(400).json({ errors });
                    }
                })
            }
        })
}

const logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.refreshToken) res.status(204).json({ msg: 'No cookies' });
    const refreshToken = cookies.refreshToken;
    User.findOneAndUpdate({ refreshToken }, { refreshToken: '' }, (err, doc) => {
        if (err) {
            res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'none', secure: true });
            res.status(500).json({ msg: 'Something went wrong' })
        }
        // maxAge need not be set during clearCookie
        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'none', secure: true });
        res.status(200).json({ msg: 'Logged out' });
    })

}

module.exports = {
    register,
    login,
    logout
}