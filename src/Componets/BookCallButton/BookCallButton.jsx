import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './BookCallButton.css';

const BookCallButton = ({ onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLeaving(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLeaving(true);
    // Reset leaving state after animation completes
    setTimeout(() => setIsLeaving(false), 600); // 500ms gradient + 100ms buffer
  };

  return (
    <button
      className={`book-call-btn ${isLeaving ? 'leaving' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Normal gradient overlay for slide-in (left to right) */}
      {!isLeaving && (
        <div
          className={`gradient-overlay ${isHovered ? 'slide-in' : ''}`}
        />
      )}
      
      {/* Dark overlay for slide-out (right to left over purple background) */}
      {isLeaving && (
        <div className="dark-overlay" />
      )}
      
      {/* Content container */}
      <div className="btn-content">
        <span>Book a Call</span>
        <FaArrowRight className="arrow-icon" />
      </div>
    </button>
  );
};

export default BookCallButton;
