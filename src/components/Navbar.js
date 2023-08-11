import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MongoLabs</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        // Add other links as necessary
      </div>
    </nav>
  );
}

export default Navbar;