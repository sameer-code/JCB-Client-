import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h2 className="text-lg font-bold mb-2 text-yellow-400">Just Cash Back</h2>
          <p className="text-sm text-gray-300">
            Get real cashback on all your shopping. Browse top deals, shop via our links, and earn cashback in your wallet!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/stores" className="hover:text-yellow-300">Stores</Link></li>
            <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-yellow-300">Register</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Follow Us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-300">Twitter</a></li>
            <li><a href="#" className="hover:text-yellow-300">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Just Cash Back. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
