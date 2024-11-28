import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AdminHome = () => {
  const history = useHistory();

  // Handle logout
  const handleLogout = () => {
    history.push('/logout');
  };

  return (
    <div className="admin-home p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Navigation Links */}
      <ul className="space-y-4">
        <li>
          <Link
            to="/transactions"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/reports"
            className="text-green-500 hover:text-green-700 font-semibold"
          >
            Reports
          </Link>
        </li>
        <li>
          <Link
            to="/maintenance"
            className="text-yellow-500 hover:text-yellow-700 font-semibold"
          >
            Maintenance
          </Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminHome;

