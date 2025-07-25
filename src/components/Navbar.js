// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Just Cash Back</div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </button>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/stores" className="hover:text-yellow-300">Stores</Link>
        <Link to="/register" className="hover:text-yellow-300">Register</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link to="/wallet" className="hover:text-yellow-300">Wallet</Link>
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-green-700 p-4 rounded-md flex flex-col space-y-2 z-50 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/stores" onClick={() => setMenuOpen(false)}>Stores</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/wallet" onClick={() => setMenuOpen(false)}>Wallet</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
