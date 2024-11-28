// src/pages/HomePage.js

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const history = useHistory();

  // Get user role from Redux store or localStorage
  const { user } = useSelector(state => state.user); // Assuming user state holds user info (like role)
  const [role, setRole] = useState('');

  useEffect(() => {
    // If no user data exists, redirect to login page
    if (!user) {
      history.push('/login');
    } else {
      // Fetch role from the user data
      setRole(user.role); // 'admin' or 'user'
    }
  }, [user, history]);

  // Render based on role
  if (role === 'admin') {
    // Redirect to Admin Home Page
    history.push('/admin-home');
  } else if (role === 'user') {
    // Redirect to User Home Page
    history.push('/user-home');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Loading...</h2>
        <p className="text-center">Redirecting to your home page...</p>
      </div>
    </div>
  );
};

export default HomePage;
