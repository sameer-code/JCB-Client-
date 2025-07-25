import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Just Cash Back</div>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/stores" style={styles.link}>Stores</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/wallet" style={styles.link}>Wallet</Link></li>
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
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
