import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;
