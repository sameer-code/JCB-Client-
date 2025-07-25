import React from "react";
import { Link } from "react-router-dom";

const featuredStores = [
  { name: "Amazon", logo: "/assets/images/amazon.png", cashback: "5%" },
  { name: "Flipkart", logo: "/assets/images/flipkart.png", cashback: "4.5%" },
  { name: "Myntra", logo: "/assets/images/myntra.png", cashback: "6%" },
  { name: "Ajio", logo: "/assets/images/ajio.png", cashback: "7%" },
];

const categories = [
  { name: "Fashion", image: "👗" },
  { name: "Recharge", image: "📱" },
  { name: "Food", image: "🍔" },
  { name: "Travel", image: "✈️" },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-500 to-yellow-400 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Just Cash Back</h1>
        <p className="mt-4 text-white text-lg">
          India's #1 Cashback & Coupons Site. Save More Every Time You Shop!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-100"
          >
            Join Now
          </Link>
          <Link
            to="/stores"
            className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700"
          >
            Browse Stores
          </Link>
        </div>
      </div>

      {/* Featured Stores */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Stores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredStores.map((store, index) => (
            <div key={index} className="border rounded-lg p-4 text-center shadow hover:shadow-lg">
              <img
                src={store.logo}
                alt={store.name}
                className="h-16 mx-auto mb-2 object-contain"
              />
              <h3 className="font-semibold">{store.name}</h3>
              <p className="text-green-600">{store.cashback} Cashback</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white border p-4 rounded-lg text-center hover:shadow-md"
              >
                <div className="text-4xl mb-2">{cat.image}</div>
                <h3 className="font-medium">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">1. Join for Free</h3>
            <p>Sign up & become a member to access exclusive cashback offers.</p>
          </div>
          <div className="bg-white border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">2. Click & Shop</h3>
            <p>Visit your favorite store from our site and complete the purchase.</p>
          </div>
          <div className="bg-white border p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">3. Get Cashback</h3>
            <p>We track your order and add real cashback to your wallet.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-10">
        <p className="text-sm">© 2025 Just Cash Back. All rights reserved.</p>
      </footer>
    </div>
  );
}
