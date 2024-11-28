// src/components/UserHome.js

import React from 'react';
import { Link } from 'react-router-dom';

const UserHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">User Home</h1>
      {/* Other content for UserHome */}

      {/* Logout button in the bottom-right corner */}
      <Link to="/logout" className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg">
        Logout
      </Link>
    </div>
  );
};

export default UserHome;
