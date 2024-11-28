const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getOverdueBooks } = require('../controllers/maintenanceController');

router.get('/overdue-books', authMiddleware, getOverdueBooks);

module.exports = router;
