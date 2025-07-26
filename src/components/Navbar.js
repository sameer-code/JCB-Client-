import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium ${
      isActive ? "bg-yellow-400 text-black" : "text-white hover:text-yellow-400"
    }`;

  return (
    <nav className="bg-green-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          Just <span className="text-yellow-400">Cash Back</span>
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/stores" className={linkClasses}>Stores</NavLink>
          <NavLink to="/wallet" className={linkClasses}>Wallet</NavLink>
          <NavLink to="/login" className={linkClasses}>Login</NavLink>
          <NavLink to="/register" className={linkClasses}>Register</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 flex flex-col space-y-2 bg-green-800">
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/stores" className={linkClasses} onClick={toggleMenu}>Stores</NavLink>
          <NavLink to="/wallet" className={linkClasses} onClick={toggleMenu}>Wallet</NavLink>
          <NavLink to="/login" className={linkClasses} onClick={toggleMenu}>Login</NavLink>
          <NavLink to="/register" className={linkClasses} onClick={toggleMenu}>Register</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
