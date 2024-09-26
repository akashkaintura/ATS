// server/src/controllers/applicationController.js
const Application = require('../models/Application');

exports.createApplication = async (req, res) => {
    const { userId, jobTitle, company } = req.body;

    try {
        const application = new Application({ user: userId, jobTitle, company });
        await application.save();

        res.status(201).json({ message: 'Application created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getApplications = async (req, res) => {
    const { userId } = req.params;

    try {
        const applications = await Application.find({ user: userId });
        res.status(200).json(applications);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Other application-related operations (e.g., updateApplication, deleteApplication)
