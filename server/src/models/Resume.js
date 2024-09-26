// server/src/models/Resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: [
        {
            institution: String,
            degree: String,
            startYear: Number,
            endYear: Number,
        },
    ],
    experience: [
        {
            company: String,
            position: String,
            startDate: Date,
            endDate: Date,
            responsibilities: [String],
        },
    ],
    skills: [String],
    grammarErrors: [String],
    toneIssues: [String],
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
