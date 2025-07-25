import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Just Cash Back
        </Link>

        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/stores" className="hover:text-yellow-400">Stores</Link>
          <Link to="/register" className="hover:text-yellow-400">Register</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <Link to="/wallet" className="hover:text-yellow-400">Wallet</Link>
        </div>
      </div>

      {/* Mobile Menu (Zingoy-style slide dropdown) */}
      <div
        className={`md:hidden bg-gray-800 text-white px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <Link to="/" className="block hover:text-yellow-400" onClick={toggleMenu}>Home</Link>
        <Link to="/stores" className="block hover:text-yellow-400" onClick={toggleMenu}>Stores</Link>
        <Link to="/register" className="block hover:text-yellow-400" onClick={toggleMenu}>Register</Link>
        <Link to="/login" className="block hover:text-yellow-400" onClick={toggleMenu}>Login</Link>
        <Link to="/wallet" className="block hover:text-yellow-400" onClick={toggleMenu}>Wallet</Link>
      </div>
    </nav>
  );
};

export default Navbar;
