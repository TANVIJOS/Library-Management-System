// models/Book.js

const mongoose = require('mongoose');

// Define the Book schema
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  availableCopies: {
    type: Number,
    required: true,
    default: 0
  },
  totalCopies: {
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Book', BookSchema);
