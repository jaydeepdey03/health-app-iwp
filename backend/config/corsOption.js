const allowedOrigin = require('../config/allowedOrigin');

const corsOption = {
    origin: (origin, cb)=> {
        if(allowedOrigin.indexOf(origin) !== -1 || !origin){
            cb(null, true)
        }
        else{
            cb(new Error("Not allowed by CORS"))
        }
    },
    optionsSuccessStatus: 200,
}

module.exports = corsOption;