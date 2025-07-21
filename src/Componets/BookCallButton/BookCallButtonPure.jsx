import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './BookCallButtonPure.css';

const BookCallButtonPure = ({ onClick, className = "" }) => {
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
    setTimeout(() => setIsLeaving(false), 450);
  };

  return (
    <button
      className={`book-call-btn-pure ${isLeaving ? 'leaving' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Gradient overlay for hover in (left to right) */}
      <div
        className={`gradient-overlay-pure ${isHovered && !isLeaving ? 'slide-in' : ''}`}
      />
      
      {/* Dark overlay for slide out (right to left to reveal default button) */}
      {isLeaving && (
        <div className="dark-overlay-pure" />
      )}
      
      {/* Content container - always on top */}
      <div className="btn-content-pure">
        <span>Book a Call</span>
        <FaArrowRight />
      </div>
    </button>
  );
};

export default BookCallButtonPure;
