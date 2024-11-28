// routes/membershipRoutes.js

const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

// Route to create a new membership
router.post('/', membershipController.createMembership);

// Route to update membership details
router.put('/:id', membershipController.updateMembership);

// Route to get all memberships
router.get('/', membershipController.getAllMemberships);

// Route to get a membership by user ID
router.get('/:userId', membershipController.getMembershipByUserId);

module.exports = router;
