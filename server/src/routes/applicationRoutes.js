// server/src/routes/applicationRoutes.js
const express = require('express');
const applicationController = require('../controllers/applicationController');

const router = express.Router();

router.post('/', applicationController.createApplication);
router.get('/:userId', applicationController.getApplications);

module.exports = router;
