// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import FeaturedStores from "../components/FeaturedStores";
import FeaturedDeals from "../components/FeaturedDeals";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-yellow-400 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Just Cash Back
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Earn real cashback on every purchase from your favorite stores!
        </p>
        <Link
          to="/register"
          className="bg-white text-green-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-green-100 transition"
        >
          Join Now
        </Link>
      </section>

      {/* Categories */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <Categories />
      </section>

      {/* Featured Stores */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Stores</h2>
          <FeaturedStores />
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Cashback Deals</h2>
        <FeaturedDeals />
      </section>

      {/* How it Works */}
      <section className="bg-white py-10 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold mb-2">1. Join for Free</h3>
            <p>Sign up and get instant access to hundreds of cashback offers.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold mb-2">2. Click & Shop</h3>
            <p>Click on any store and complete your shopping as usual.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold mb-2">3. Earn Cashback</h3>
            <p>Cashback is tracked and added to your wallet after purchase.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
