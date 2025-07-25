// src/pages/Stores.js
import React from "react";

const stores = [
  { name: "Amazon", logo: "/assets/images/amazon.png", cashback: "5%" },
  { name: "Flipkart", logo: "/assets/images/flipkart.png", cashback: "4%" },
  { name: "Ajio", logo: "/assets/images/ajio.png", cashback: "6%" },
];

const Stores = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Featured Stores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stores.map((store, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 text-center">
            <img src={store.logo} alt={store.name} className="h-16 mx-auto mb-2" />
            <h3 className="font-semibold text-lg">{store.name}</h3>
            <p className="text-green-600">Up to {store.cashback} Cashback</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
