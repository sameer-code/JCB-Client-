import React from 'react';

const stores = [
  {
    id: 1,
    name: "Amazon",
    logo: "/assets/images/amazon.png",
    cashback: "Up to 5% cashback"
  },
  {
    id: 2,
    name: "Flipkart",
    logo: "/assets/images/flipkart.png",
    cashback: "Up to 7% cashback"
  },
  {
    id: 3,
    name: "Myntra",
    logo: "/assets/images/myntra.png",
    cashback: "Flat 10% cashback"
  }
];

const StoreList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stores.map(store => (
          <div key={store.id} className="border rounded-lg p-4 text-center shadow hover:shadow-lg">
            <img src={store.logo} alt={store.name} className="w-24 h-24 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">{store.name}</h3>
            <p className="text-green-600">{store.cashback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
