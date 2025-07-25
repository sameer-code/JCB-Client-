// src/components/Navbar.js
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#0f172a] text-white flex justify-between items-center px-4 py-3 shadow-md fixed w-full z-50">
        <h1 className="text-lg font-bold">Just Cash Back</h1>
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <ul className="flex flex-col px-6 space-y-4 text-lg text-gray-800">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/stores" onClick={() => setIsOpen(false)}>Stores</Link></li>
          <li><Link to="/register" onClick={() => setIsOpen(false)}>Register</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link to="/wallet" onClick={() => setIsOpen(false)}>Wallet</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Spacer */}
      <div className="h-14" />
    </>
  );
};

export default Navbar;
