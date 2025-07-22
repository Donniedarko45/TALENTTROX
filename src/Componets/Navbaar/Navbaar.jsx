import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbaar.css';

import Main from './Main.png'; // Assuming you have a Main.svg file

function Navbaar() {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contact');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className='navbaar' >
      <nav className="navbar-container">
      <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={Main} alt="Logo" className="logo" />
      </div>
      <button onClick={handleGetInTouchClick} className="navbar-cta-button">
        Get in Touch <FaArrowRight />
      </button>
    </nav>
    </div>
  );
}

export default Navbaar;