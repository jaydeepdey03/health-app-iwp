const authController = require('../controllers/authController');
require('dotenv').config()
const verify = require('../middleware/verify');
const roleList = require('../config/role')
const verifyRoles = require('../middleware/verifyRoles')
const router = require('express').Router();

const user = [
    {
        id: 1,
        username: 'John',
        password: '1234',
        role: 'Admin'
    },
    {
        id: 2,
        username: 'Jane',
        password: '4321',
        role: 'Editor'
    }
]

const api = (app) => {


    app.post('/api/register', authController.register);


    app.post('/api/login', authController.login)

    app.get('/api/refresh', require('../controllers/refreshToken').handleRefreshToken)

    app.get('/api/getUser', verify, verifyRoles(roleList.Editor, roleList.Admin), (req, res) => {
        res.status(200).json(user)
    })

    app.get('/api/logout', authController.logout)
}
module.exports = api;