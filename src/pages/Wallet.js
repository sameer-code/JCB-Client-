// src/pages/Wallet.js
import React from "react";

const Wallet = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Wallet</h2>
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-gray-700">💰 Available Balance: <span className="text-green-600 font-bold">₹150.00</span></p>
        <p className="mt-2 text-sm text-gray-500">Withdraw available after ₹250 minimum</p>
      </div>
    </div>
  );
};

export default Wallet;
