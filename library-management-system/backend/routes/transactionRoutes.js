const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Route to create a new transaction
router.post('/', transactionController.createTransaction);

// Route to get all transactions
router.get('/', transactionController.getAllTransactions);

// Route to get transactions for a specific user
router.get('/:userId', transactionController.getTransactionsByUserId);

// Route to update a transaction
router.put('/:id', transactionController.updateTransaction);

module.exports = router;
