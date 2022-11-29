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
    // array of role
    role: {
        type: Array,
        default: [2000]
    },
}, { timestamps: true });


module.exports = mongoose.model('User', user);
