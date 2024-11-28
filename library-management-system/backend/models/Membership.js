// models/Membership.js

const mongoose = require('mongoose');

// Define the Membership schema
const MembershipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  membershipType: {
    type: String,
    enum: ['regular', 'premium'],
    default: 'regular'
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  expirationDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'expired'],
    default: 'active'
  },
  renewalStatus: {
    type: Boolean,
    default: true  // Whether the membership is eligible for renewal
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a model based on the schema
module.exports = mongoose.model('Membership', MembershipSchema);
