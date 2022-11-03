const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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
        disease: [
            {
                nameOfDisease: { type: String, required: true },
                typeOfDisease: { type: String, required: true },
                dateOfDiagnosis: { type: Date, required: true },
            },
        ]
    },
    prescription: {
        patientPrescription: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Prescription',
        }]
    },
    role: {
        type: Number,
        required: true,
        default: 1419,
    },
}, { timestamps: true });

const Patient = mongoose.model('Patient', schema);

module.exports = Patient;
