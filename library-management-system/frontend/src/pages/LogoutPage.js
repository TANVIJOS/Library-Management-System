// src/pages/LogoutPage.js

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const history = useHistory();

  // Clear user session data (e.g., JWT token and role) from localStorage
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setTimeout(() => {
      history.push('/login'); // Redirect to the login page after a few seconds
    }, 3000);
  }, [history]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-semibold">You have successfully logged out.</h1>
        <p className="mt-2 text-gray-600">Redirecting to the login page...</p>
      </div>
    </div>
  );
};

export default LogoutPage;
