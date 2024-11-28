// controllers/membershipController.js

const Membership = require('../models/Membership');

// Create a new membership
const createMembership = async (req, res) => {
  const { userId, membershipType, expirationDate } = req.body;

  try {
    // Create a new membership record
    const newMembership = new Membership({
      user: userId,
      membershipType,
      expirationDate,
      status: 'active', // Default to active when created
    });

    // Save to the database
    const savedMembership = await newMembership.save();
    res.status(201).json({ success: true, membership: savedMembership });
  } catch (error) {
    console.error('Error creating membership:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Update membership details
const updateMembership = async (req, res) => {
  const { id } = req.params;
  const { membershipType, expirationDate, status } = req.body;

  try {
    const updatedMembership = await Membership.findByIdAndUpdate(id, {
      membershipType,
      expirationDate,
      status
    }, { new: true });

    if (!updatedMembership) {
      return res.status(404).json({ success: false, message: 'Membership not found' });
    }

    res.status(200).json({ success: true, updatedMembership });
  } catch (error) {
    console.error('Error updating membership:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get all memberships
const getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find().populate('user'); // Populate user info if needed
    res.status(200).json({ success: true, memberships });
  } catch (error) {
    console.error('Error fetching memberships:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get membership by user ID
const getMembershipByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const membership = await Membership.findOne({ user: userId });

    if (!membership) {
      return res.status(404).json({ success: false, message: 'Membership not found for this user' });
    }

    res.status(200).json({ success: true, membership });
  } catch (error) {
    console.error('Error fetching membership by user ID:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  createMembership,
  updateMembership,
  getAllMemberships,
  getMembershipByUserId
};
