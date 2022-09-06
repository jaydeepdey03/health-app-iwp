const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://jaydeepdey03:test123@cluster0.y7179.mongodb.net/iwp';


module.exports = async function connectToDB(){
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}