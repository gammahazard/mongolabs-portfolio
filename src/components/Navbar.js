import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">MongoLabs</div>
            <div className="menu-section">
                <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}


export default Navbar