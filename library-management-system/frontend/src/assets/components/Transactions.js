import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]); // Example state for transactions
  const history = useHistory();

  const handleLogout = () => {
    history.push('/logout');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Transactions Page</h1>
      <p>Manage transactions here (issue books, return books, pay fines).</p>
      
      {/* Example transaction list */}
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.description}</li>
        ))}
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

export default Transactions;

