import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Career.css';

function Career() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  return (
    <div className="career-container">
      <div className="career-content">
        <h1>Ready to Level Up Your Career?</h1>
        <p className="subtitle">
        
        </p>
        <button className="cta-button" onClick={handleStartJourney}>Start Your Journey</button>
        <p className="subtext">Free to join • No hidden fees • Instant access</p>
      </div>
      
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
    </div>
  );
}

export default Career;