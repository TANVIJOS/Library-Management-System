import React from 'react';
import { useHistory } from 'react-router-dom';

const MaintenancePage = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/logout');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Maintenance Page</h1>
      <p>Manage maintenance tasks here.</p>

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

export default MaintenancePage;
