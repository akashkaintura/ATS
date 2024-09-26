// server/src/controllers/resumeController.js
const Resume = require('../models/Resume');
const resumeParser = require('../utils/resumeParser');
const grammarChecker = require('../utils/grammarChecker');
const toneAnalyzer = require('../utils/toneAnalyzer');

exports.uploadResume = async (req, res) => {
    try {
        const { file } = req.files;
        const { name, email, phone } = req.body;

        // Parse resume
        const parsedData = await resumeParser(file.data);

        // Check grammar and tone
        const grammarErrors = await grammarChecker(parsedData.text);
        const toneIssues = await toneAnalyzer(parsedData.text);

        // Create a new resume document
        const resume = new Resume({
            name,
            email,
            phone,
            education: parsedData.education,
            experience: parsedData.experience,
            skills: parsedData.skills,
            grammarErrors,
            toneIssues,
        });

        // Save the resume to the database
        await resume.save();

        res.status(201).json({ message: 'Resume uploaded successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Other resume-related operations (e.g., getResumes, updateResume, deleteResume)
