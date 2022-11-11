const authController = require('../controllers/authController');
require('dotenv').config()
const verify = require('../middleware/verify');
const roleList = require('../config/role')
const verifyRoles = require('../middleware/verifyRoles')



const api = (app) => {

app.post('/api/register',  authController.register);


    app.post('/api/login', authController.login)

    app.get('/api/refresh', require('../controllers/refreshToken').handleRefreshToken)

    app.get('/api/getUser', verify, verifyRoles(roleList.User), (req, res) => {
        res.status(200).json({ msg: 'Allowed to access the route' })
    })

    app.get('/api/logout', authController.logout) 
}

module.exports = api;