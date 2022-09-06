const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    prescriptionId: {
        type: String,
        required: true,
        unique: true,
    },
    patientId: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: truex
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
        // required: true
    },
    medicines: {
        medicineDetails:[{
            dosage: {
                type: String,
                required: true,
            },
            medicineName: {
                type: String,
                required: true,
            },
        }],
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
}, { timestamps: true });

const Prescription = mongoose.model('Prescription', schema);

module.exports = Prescription;