const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true},
    crm: { type: String, required: true }, 
    phone: { type: String },
    email: { type: String, required: true},
    status: { type: Boolean },
    hiringDate: { type: Date},
    consultationTimes: {
        initial: { type: String },
        final: { type: String }
    },
    daysOfWeek: [{ type: String }],
});

module.exports = mongoose.model('Professional', professionalSchema);