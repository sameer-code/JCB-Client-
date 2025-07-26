
import React from "react";

const steps = [
  {
    icon: "📝",
    title: "Join for Free",
    desc: "Sign up in seconds using your email or social login.",
  },
  {
    icon: "🛍️",
    title: "Shop via Just Cash Back",
    desc: "Click on any store link & shop like normal.",
  },
  {
    icon: "💸",
    title: "Earn Cashback",
    desc: "We track your purchase & add cashback to your wallet.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-600">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
