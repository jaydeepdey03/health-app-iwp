const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/user');
const authController = require('../controllers/authController');
require('dotenv').config()

const api = (app) => {

    app.post('/api/register', authController.register);
    
    app.post('/api/login', authController.login);

}
// login patient


module.exports = api;