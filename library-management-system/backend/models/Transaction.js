const mongoose = require('mongoose');

// Define the Transaction schema
const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  transactionType: {
    type: String,
    enum: ['issue', 'return', 'finePayment'],
    required: true,
  },
  issueDate: {
    type: Date,
    default: null,
  },
  returnDate: {
    type: Date,
    default: null,
  },
  fineAmount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a model based on the schema
module.exports = mongoose.model('Transaction', TransactionSchema);
