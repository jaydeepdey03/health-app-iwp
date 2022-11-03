const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: true,
        unique: true
    },
    doctorName: {
        type: String,
        required: true
    },
    doctorAge: {
        type: Number,
    },
    doctorGender: {
    type: String,
    },
    doctorEmail: {
        type: String,
        required: true
    },
    doctorSpecialization: {
        type: String,
        required: true
    },
    doctorExperience: {
        type: String,
        required: true
    },
    doctorDegree: {
        type: String,
        required: true
    },
    doctorFees: {
        type: Number,
        required: true
    },
    doctorWorkingDays: {
        type: String,
        required: true
    },
    doctorWorkingHours: {
        type: String,
        required: true
    },
    doctorAppointmentCount: {
        type: Number,
        required: true
    },
    doctorRating: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    role: {
        type: Number,
        required: true,
        default: 1419,
    },
    appointment: {
        doctorAppointment: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
        }]
    },
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', schema);
module.exports = Doctor;
