import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing FontAwesome icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/gammahazard" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://twitter.com/gammahazard" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="#" rel="noopener noreferrer"> {/* Placeholder for LinkedIn */}
          <FaLinkedin className="icon" />
        </a>
      </div>
      © 2023 MongoLabs. All rights reserved.
    </footer>
  );
}

export default Footer;
