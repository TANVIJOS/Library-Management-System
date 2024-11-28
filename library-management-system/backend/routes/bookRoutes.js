// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Add a new book
router.post('/', bookController.addBook);

// Get all books
router.get('/', bookController.getAllBooks);

// Get a single book by ID
router.get('/:id', bookController.getBookById);

// Update book details
router.put('/:id', bookController.updateBook);

// Delete a book
router.delete('/:id', bookController.deleteBook);

// Search for books by title or author
router.get('/search', bookController.searchBooks);

module.exports = router;
