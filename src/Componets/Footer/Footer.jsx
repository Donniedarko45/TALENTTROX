import React from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import logo from './logo.svg'; // Assuming you have a logo image

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            {/* <h2>Talentrox</h2>
            <p>Talent That Rocks</p> */}
            <img src={logo} alt="Talentrox Logo" />
          </div>
          <p className="footer-description">
            From startups to global enterprises, we connect top talent with the roles they deserve.
          </p>
          <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:contact@talentrox.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        </div>
        
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        <p>&copy; 2025 Talentrox. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
