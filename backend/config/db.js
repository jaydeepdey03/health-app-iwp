const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

module.exports = async function connectToDB(){
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}