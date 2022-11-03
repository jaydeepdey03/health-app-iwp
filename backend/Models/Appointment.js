const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    appointmentId: {
        type: String,
        required: true,
        unique: true
    },
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
    time: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', schema);

module.exports = Appointment;
