import React from "react";

const categories = [
  {
    name: "Fashion",
    icon: "👗",
  },
  {
    name: "Electronics",
    icon: "📱",
  },
  {
    name: "Beauty",
    icon: "💄",
  },
  {
    name: "Groceries",
    icon: "🛒",
  },
  {
    name: "Travel",
    icon: "✈️",
  },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-md transition p-4"
        >
          <div className="text-3xl mb-2">{cat.icon}</div>
          <h4 className="text-sm font-medium">{cat.name}</h4>
        </div>
      ))}
    </div>
  );
}
