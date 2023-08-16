import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import specific icons from FontAwesome library
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" data-testid='footer'> {/* Main footer container */}
      
      <div className="social-icons"> {/* Social media icons container */}
        
        <a href="https://github.com/gammahazard" target="_blank" rel="noopener noreferrer"> {/* Github link and icon */}
          <FaGithub className="icon" />
        </a>
        
        <a href="https://twitter.com/gammahazard" target="_blank" rel="noopener noreferrer"> {/* Twitter link and icon */}
          <FaTwitter className="icon" />
        </a>
        
        <a href="https://www.linkedin.com/in/cm-mongo-044230260/" rel="noopener noreferrer"> {/* LinkedIn link and icon */}
          <FaLinkedin className="icon" />
        </a>
      </div>

      <div className="footertext"> {/* Copyright text */}
        © 2023 MongoLabs. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
