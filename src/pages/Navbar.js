import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between">
    <Link to="/" className="font-bold">Just Cash Back</Link>
    <div>
      <Link to="/wallet" className="mr-4">Wallet</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;
