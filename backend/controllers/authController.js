const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const { name, email, password, role } = req.body;
    let errors = [];

    // check required fields
    if (!name || !email || !password || !role) {
        res.status(400).json({ msg: 'Please fill in all fields' });
    }
    // validation passed
    User.findOne({ email })
        .then(user => {
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

                // hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(user.password, salt, (err, hash) => {
                        if (err) throw err;
                        // set password to hashed
                        user.password = hash;
                        // save user
                        user.save()
                            .then(user => {
                                jwt.sign(
                                    { id: user.id },
                                    process.env.JWT_SECRET,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({
                                            token,
                                            user: {
                                                id: user.id,
                                                name: user.name,
                                                email: user.email,
                                                role: user.role
                                            }
                                        });
                                    }
                                )
                            })

                    }))
            }
        })
}

const login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        let passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        // explain the line below
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user._id,
            name: user.name,
            email: user.email,
            accessToken: token,
            role: user.role
        });
    });
}

module.exports = {
    register,
    login
}