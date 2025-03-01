const express = require('express');
const { processPayroll } = require('../controllers/payrollController');

const router = express.Router();
router.post('/process', processPayroll);

module.exports = router;
