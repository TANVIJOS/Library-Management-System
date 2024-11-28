// src/components/UserLogin.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserLogin = () => {
  // Local state to hold user input for ID and password
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // React Router's history for navigation after login
  const history = useHistory();

  // Handle input change for user ID
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle the login process (this can be connected to the backend for authentication)
  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation to check if the fields are not empty
    if (!userId || !password) {
      setError('Please enter both user ID and password.');
      return;
    }

    // Here you can call your backend API for authentication
    // For now, we'll simulate a successful login with a basic condition
    if (userId === 'user' && password === 'password') {
      // Redirect to the user's home page (could be a dashboard)
      history.push('/user-home');  // Adjust the path to match your route
    } else {
      setError('Invalid credentials.');
    }
  };

  // Handle the cancel button (clears the form)
  const handleCancel = () => {
    setUserId('');
    setPassword('');
    setError('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">User Login</h2>

        {/* Display error if validation fails */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="userId">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={handleUserIdChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your User ID"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your Password"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
