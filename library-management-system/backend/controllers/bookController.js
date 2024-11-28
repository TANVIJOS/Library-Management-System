// controllers/bookController.js

const Book = require('../models/Book');

// Add a new book to the library
const addBook = async (req, res) => {
  const { title, author, genre, availableCopies, totalCopies } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      genre,
      availableCopies,
      totalCopies
    });

    const book = await newBook.save(); // Save the book to the database
    res.status(201).json({ success: true, book });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Retrieve all books from the database
    res.status(200).json({ success: true, books });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get a single book by its ID
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id); // Find book by ID
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({ success: true, book });
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Update book details
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, availableCopies, totalCopies } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, availableCopies, totalCopies },
      { new: true } // Returns the updated book document
    );

    if (!updatedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({ success: true, updatedBook });
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    res.status(200).json({ success: true, message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Search for books by title or author
const searchBooks = async (req, res) => {
  const { searchQuery } = req.query; // Get search query from the request

  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive search
        { author: { $regex: searchQuery, $options: 'i' } }
      ]
    });

    if (books.length === 0) {
      return res.status(404).json({ success: false, message: 'No books found' });
    }

    res.status(200).json({ success: true, books });
  } catch (error) {
    console.error('Error searching books:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks
};
