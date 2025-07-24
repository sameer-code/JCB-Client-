import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get('/api/stores').then(res => setStores(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Stores with Cashback</h2>
      <div className="grid grid-cols-2 gap-4">
        {stores.map(store => (
          <div key={store._id} className="border p-4 rounded shadow">
            <img src={store.logo} alt={store.name} className="h-12 mb-2" />
            <h3>{store.name}</h3>
            <p>{store.cashbackPercent}% Cashback</p>
            <a href={store.affiliateLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-600 text-white px-4 py-1 mt-2">Shop Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
