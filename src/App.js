import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Stores from "./pages/StoreList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <Navbar />

        {/* Main Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
