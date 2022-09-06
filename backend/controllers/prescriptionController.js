const Patient = require('../models/patient');

const issuePrescription = async (patientId, prescription) => {
    const patient = await Patient.findOne({ patientId: patientId });
    const prescriptionArray = [...patient.prescription.patientPrescription, prescription];

    try {
        await Patient.findOneAndUpdate({ patientId: patientId }, { prescription: { patientPrescription: prescriptionArray } });
    }
    catch (err) {
        console.error(err);
    }
}

const deletePrescription = async (patientId, prescriptionId) => {
    const patient = await Patient.findOne({ patientId: patientId });
    const prescriptionArray = patient.prescription.patientPrescription.filter(prescription => prescription.prescriptionId !== prescriptionId);

    try {
        await Patient.findOneAndUpdate({ patientId: patientId }, { prescription: { patientPrescription: prescriptionArray } });
    }
    catch (err) {
        console.error(err);
    }

}

module.exports = {issuePrescription, deletePrescription}