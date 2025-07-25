import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold">Just Cash Back</div>
      
      <button onClick={toggleMenu} className="md:hidden">
        <Menu size={24} />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/stores" className="hover:text-yellow-400">Stores</Link>
        <Link to="/register" className="hover:text-yellow-400">Register</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        <Link to="/wallet" className="hover:text-yellow-400">Wallet</Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-gray-900 text-white rounded-md shadow-lg flex flex-col space-y-3 px-6 py-4 z-50 md:hidden">
          <Link to="/" className="hover:text-yellow-400" onClick={toggleMenu}>Home</Link>
          <Link to="/stores" className="hover:text-yellow-400" onClick={toggleMenu}>Stores</Link>
          <Link to="/register" className="hover:text-yellow-400" onClick={toggleMenu}>Register</Link>
          <Link to="/login" className="hover:text-yellow-400" onClick={toggleMenu}>Login</Link>
          <Link to="/wallet" className="hover:text-yellow-400" onClick={toggleMenu}>Wallet</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
