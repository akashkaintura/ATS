// server/src/models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    status: { type: String, enum: ['applied', 'interviewed', 'offered', 'rejected'], default: 'applied' },
    notes: [{ type: String }],
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
