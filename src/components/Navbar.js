import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="text-white hover:text-yellow-400">Just Cash Back</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        <ul className={`md:flex flex-col md:flex-row md:items-center gap-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/stores" className="text-white hover:text-yellow-400">Stores</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-yellow-400">Register</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-yellow-400">Login</Link>
          </li>
          <li>
            <Link to="/wallet" className="text-white hover:text-yellow-400">Wallet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
