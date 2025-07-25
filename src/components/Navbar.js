import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional for styling

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Just Cash Back</div>
      <ul style={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stores">Stores</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
};

export default Navbar;
