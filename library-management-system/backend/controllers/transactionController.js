const Transaction = require('../models/Transaction');
const Membership = require('../models/Membership');

// Create a new transaction (issue, return, or fine payment)
const createTransaction = async (req, res) => {
  const { userId, bookId, transactionType, fineAmount } = req.body;

  try {
    // Validate membership for the user
    const membership = await Membership.findOne({ user: userId, status: 'active' });
    if (!membership) {
      return res.status(400).json({ success: false, message: 'User does not have an active membership' });
    }

    // Create a new transaction record
    const newTransaction = new Transaction({
      user: userId,
      book: bookId,
      transactionType,
      issueDate: transactionType === 'issue' ? Date.now() : null,
      returnDate: transactionType === 'return' ? Date.now() : null,
      fineAmount: fineAmount || 0,
      status: 'completed', // Default to completed for new transactions
    });

    // Save to the database
    const savedTransaction = await newTransaction.save();
    res.status(201).json({ success: true, transaction: savedTransaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('user', 'name') // Populate user info with just the name
      .populate('book', 'title'); // Populate book info with just the title

    res.status(200).json({ success: true, transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get transactions for a specific user
const getTransactionsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const transactions = await Transaction.find({ user: userId })
      .populate('book', 'title') // Populate book info with just the title
      .sort({ createdAt: -1 }); // Sort by most recent first

    res.status(200).json({ success: true, transactions });
  } catch (error) {
    console.error('Error fetching user transactions:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Update a transaction (e.g., mark return or fine payment as completed)
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { transactionType, fineAmount, status } = req.body;

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      {
        transactionType,
        fineAmount,
        status,
        returnDate: transactionType === 'return' ? Date.now() : null,
      },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }

    res.status(200).json({ success: true, transaction: updatedTransaction });
  } catch (error) {
    console.error('Error updating transaction:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionsByUserId,
  updateTransaction,
};
