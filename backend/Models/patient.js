const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    //schema for patient
    patientId: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientGender: {
        type: String,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientPhone: {
        type: Number,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
    patientPassword: {
        type: String,
        required: true
    },
    patientBloodGroup: {
        type: String,
        required: true
    },
    patientHeight: {
        type: Number,
        required: true
    },
    patientWeight: {
        type: Number,
        required: true
    },
    patientAllergies: {
        type: String,
        required: true
    },
    patientMedicalHistory: {
        type: [{type: String}],
        required: true
    },
}, {timestamps: true});

const Patient = mongoose.model('Patient', schema);

module.exports = Patient;
