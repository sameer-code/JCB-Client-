import React from "react";
import { Link } from "react-router-dom";

const stores = [
  {
    name: "Amazon",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
    cashback: "Up to 5%",
    slug: "amazon",
  },
  {
    name: "Flipkart",
    logo: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
    cashback: "Up to 6%",
    slug: "flipkart",
  },
  {
    name: "Myntra",
    logo: "https://seeklogo.com/images/M/myntra-logo-B3C7C5645C-seeklogo.com.png",
    cashback: "Up to 8%",
    slug: "myntra",
  },
  {
    name: "Ajio",
    logo: "https://seeklogo.com/images/A/ajio-logo-3C38A5C9BB-seeklogo.com.png",
    cashback: "Up to 10%",
    slug: "ajio",
  },
  {
    name: "Tata Cliq",
    logo: "https://companieslogo.com/img/orig/TATACONSUM.NS_BIG-6c70b27d.png",
    cashback: "Up to 4%",
    slug: "tatacliq",
  },
];

export default function FeaturedStores() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {stores.map((store) => (
        <Link
          key={store.name}
          to={`/store/${store.slug}`}
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
        >
          <img
            src={store.logo}
            alt={store.name}
            className="h-16 object-contain mb-3"
          />
          <h3 className="text-md font-semibold">{store.name}</h3>
          <p className="text-green-600 text-sm">{store.cashback} Cashback</p>
        </Link>
      ))}
    </div>
  );
}
