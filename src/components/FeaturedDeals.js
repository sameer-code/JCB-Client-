import React from "react";

const deals = [
  {
    title: "20% Off on Electronics",
    description: "Grab the best deals on gadgets now!",
    image:
      "https://img.freepik.com/free-photo/electronic-devices-gadgets-black-background_155003-28793.jpg",
  },
  {
    title: "Up to 60% Off on Fashion",
    description: "Trendy clothes at discounted prices.",
    image:
      "https://img.freepik.com/free-photo/flat-lay-female-accessories-collection_23-2148577025.jpg",
  },
  {
    title: "50% Off on Beauty Products",
    description: "Beauty deals that save money.",
    image:
      "https://img.freepik.com/free-photo/makeup-accessories-pink-background_23-2147879655.jpg",
  },
];

export default function FeaturedDeals() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {deals.map((deal, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{deal.title}</h3>
            <p className="text-sm text-gray-600">{deal.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
