// db.js

const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    // Database URI (replace with your own MongoDB URI or use environment variables for security)
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/library-management'; 

    // Connect to the database
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,       // Use the new URL parser (to avoid deprecation warning)
      useUnifiedTopology: true,    // Use the new server discovery and monitoring engine
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure code
  }
};

// Export the connectDB function to use it in other parts of the backend (like in `server.js`)
module.exports = connectDB;
