const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const user = new mongoose.Schema({
    // role: {
    //     type: Number,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    }
}, { timestamps: true });

user.pre('save', async function (next) {
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(this.password, salt)
            this.password = passwordHash
        }
        next()
    } catch (error) {
        next(error)
    }
})

user.methods = {
    matchPassword: async function (password) {
        try {
            return await bcrypt.compare(password, this.password);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = mongoose.model('User', user);
