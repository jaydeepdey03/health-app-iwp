const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    //schema for prescription
    patientId: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    medicines: {
        type: [{type: String}],
        required: true
    },
    tests: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
}, {timestamps: true});