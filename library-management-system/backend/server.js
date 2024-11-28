// server.js

// Import required dependencies
const express = require('express');
const dotenv = require('dotenv');  // For loading environment variables
const cors = require('cors');      // For enabling Cross-Origin Resource Sharing (CORS)
const connectDB = require('./config/db'); // Import the database connection function

// Import route handlers (controllers for API routes)
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from the .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to enable CORS (cross-origin requests)
app.use(cors());

// Connect to MongoDB database
connectDB(); // This calls the connectDB function from db.js to establish a MongoDB connection

// Define API routes
app.use('/api/auth', authRoutes);        // Authentication routes (login, register)
app.use('/api/books', bookRoutes);       // Routes related to books (CRUD operations on books)
app.use('/api/maintenance', maintenanceRoutes);  // Maintenance-related routes (system maintenance, etc.)
app.use('/api/membership' , membershipRoutes);
app.use('/api/transactions', transactionRoutes);  // Transaction routes (book issue, return, fine payment)
app.use('/api/users', userRoutes);       // User-related routes (manage users, view profiles, etc.)

// Define the port the server will listen on
const PORT = process.env.PORT || 5000; // Use environment variable for port, or default to 5000

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
