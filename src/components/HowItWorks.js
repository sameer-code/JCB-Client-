import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-8">How It Works</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
          <p>Create your free account and get access to cashback deals.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">2. Shop</h3>
          <p>Select your favorite store, click through Just Cash Back, and shop as usual.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">3. Earn</h3>
          <p>Your purchase is tracked and cashback is credited to your wallet.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
