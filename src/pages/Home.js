import React from "react"; import { Link } from "react-router-dom";

const featuredStores = [ { name: "Amazon", logo: "/assets/images/amazon.png", cashback: "Up to 10% Cashback", }, { name: "Flipkart", logo: "/assets/images/flipkart.png", cashback: "Flat 5% Cashback", }, { name: "Ajio", logo: "/assets/images/ajio.png", cashback: "Up to 8% Cashback", }, ];

const Home = () => { return ( <div className="bg-white text-gray-900"> {/* Hero Banner */} <section className="bg-green-600 text-white py-16 px-6 text-center"> <h1 className="text-4xl font-bold mb-4">Welcome to Just Cash Back</h1> <p className="text-xl mb-6">Earn cashback on every purchase!</p> <Link
to="/stores"
className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300"
> Browse Stores </Link> </section>

{/* Featured Stores */}
  <section className="py-12 px-6">
    <h2 className="text-2xl font-bold text-center mb-8">Featured Stores</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {featuredStores.map((store) => (
        <div
          key={store.name}
          className="bg-gray-100 rounded-xl shadow p-6 text-center hover:shadow-lg transition"
        >
          <img
            src={store.logo}
            alt={store.name}
            className="h-16 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
          <p className="text-green-700 font-medium">{store.cashback}</p>
        </div>
      ))}
    </div>
  </section>
</div>

); };

export default Home;
