// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const stores = [
  { name: "Amazon", image: "/images/amazon.png", cashback: "Up to 8%" },
  { name: "Flipkart", image: "/images/flipkart.png", cashback: "Up to 10%" },
  { name: "Myntra", image: "/images/myntra.png", cashback: "5%" },
];

const deals = [
  { title: "Flat 20% Off on Electronics", link: "#", store: "Amazon" },
  { title: "Extra 15% Cashback on Fashion", link: "#", store: "Flipkart" },
  { title: "Buy 1 Get 1 Free", link: "#", store: "Myntra" },
];

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="bg-green-600 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Just Cash Back</h1>
        <p className="text-xl mb-6">Earn cashback every time you shop!</p>
        <Link to="/stores">
          <button className="bg-yellow-400 text-gray-900 px-6 py-2 font-semibold rounded hover:bg-yellow-300">
            Browse Stores
          </button>
        </Link>
      </div>

      {/* Featured Stores */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Top Stores</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stores.map((store, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 text-center shadow hover:shadow-md transition"
            >
              <img
                src={store.image}
                alt={store.name}
                className="w-20 h-20 mx-auto mb-3 object-contain"
              />
              <h3 className="text-lg font-semibold">{store.name}</h3>
              <p className="text-green-600 font-medium">{store.cashback} Cashback</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Deals */}
      <section className="bg-gray-100 py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Hot Deals</h2>
        <div className="space-y-4">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-yellow-600">{deal.title}</h3>
              <p className="text-sm text-gray-600">From: {deal.store}</p>
              <a
                href={deal.link}
                className="text-blue-600 hover:underline text-sm"
              >
                Grab Deal →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
