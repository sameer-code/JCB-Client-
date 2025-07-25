import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wallet = () => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/users/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setWallet(res.data.wallet))
      .catch(err => alert('Failed to fetch wallet'));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My Wallet</h2>
      {wallet ? (
        <ul>
          <li>Pending: ₹{wallet.pending}</li>
          <li>Approved: ₹{wallet.approved}</li>
          <li>Paid: ₹{wallet.paid}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Wallet;
