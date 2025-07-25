import React from "react";

const stores = [
  {
    name: "Amazon",
    logo: "/assets/images/amazon.png",
    cashback: "Up to 5%",
  },
  {
    name: "Flipkart",
    logo: "/assets/images/flipkart.png",
    cashback: "Up to 7%",
  },
  {
    name: "Ajio",
    logo: "/assets/images/ajio.png",
    cashback: "Flat 10%",
  },
  {
    name: "Myntra",
    logo: "/assets/images/myntra.png",
    cashback: "6% Cashback",
  },
];

export default function StoreList() {
  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Featured Stores
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-md text-center hover:shadow-lg transition"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="h-16 mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{store.name}</h3>
            <p className="text-sm text-yellow-600 font-medium mt-1">
              {store.cashback}
            </p>
            <button className="mt-3 px-3 py-1 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
