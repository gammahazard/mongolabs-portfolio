import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    // State to manage the open/close status of the burger menu
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" data-testid="navbar">
            {/* Navbar Logo */}
            <div className="navbar-logo">MongoLabs</div>
            
            <div className="menu-section">
                {/* Burger menu icon. Toggle menu on click */}
                <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                
                {/* Navbar links. They show/hide based on the state of the burger menu */}
                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
