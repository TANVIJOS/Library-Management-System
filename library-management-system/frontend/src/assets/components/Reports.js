import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Reports = () => {
  const history = useHistory();

  // States to store report data
  const [activeIssues, setActiveIssues] = useState([]);
  const [overdueReturns, setOverdueReturns] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  // Simulate fetching data from the backend (replace with API calls)
  useEffect(() => {
    // Fetch Active Issues
    setActiveIssues([
      { id: 1, book: 'Book A', user: 'User 1', issueDate: '2024-11-01' },
      { id: 2, book: 'Book B', user: 'User 2', issueDate: '2024-11-10' },
    ]);

    // Fetch Overdue Returns
    setOverdueReturns([
      { id: 3, book: 'Book C', user: 'User 3', dueDate: '2024-11-15' },
    ]);

    // Fetch Pending Issue Requests
    setPendingRequests([
      { id: 4, book: 'Book D', user: 'User 4', requestDate: '2024-11-20' },
    ]);
  }, []);

  // Handle logout
  const handleLogout = () => {
    history.push('/logout');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Reports Page</h1>

      {/* Active Issues Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Active Issues</h2>
        {activeIssues.length > 0 ? (
          <ul className="list-disc ml-8">
            {activeIssues.map((issue) => (
              <li key={issue.id}>
                <strong>Book:</strong> {issue.book}, <strong>User:</strong> {issue.user},{' '}
                <strong>Issue Date:</strong> {issue.issueDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>No active issues found.</p>
        )}
      </div>

      {/* Overdue Returns Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Overdue Returns</h2>
        {overdueReturns.length > 0 ? (
          <ul className="list-disc ml-8">
            {overdueReturns.map((overdue) => (
              <li key={overdue.id}>
                <strong>Book:</strong> {overdue.book}, <strong>User:</strong> {overdue.user},{' '}
                <strong>Due Date:</strong> {overdue.dueDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>No overdue returns found.</p>
        )}
      </div>

      {/* Pending Issue Requests Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Pending Issue Requests</h2>
        {pendingRequests.length > 0 ? (
          <ul className="list-disc ml-8">
            {pendingRequests.map((request) => (
              <li key={request.id}>
                <strong>Book:</strong> {request.book}, <strong>User:</strong> {request.user},{' '}
                <strong>Request Date:</strong> {request.requestDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending issue requests found.</p>
        )}
      </div>

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

export default Reports;
