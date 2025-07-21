import React, { useState } from 'react';
import './ExploreButton.css';

const ExploreButton = ({ onClick, className = "" }) => {
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
      className={`explore-btn-pure ${isLeaving ? 'leaving' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Gradient overlay for hover in (left to right) */}
      <div
        className={`gradient-overlay-explore ${isHovered && !isLeaving ? 'slide-in' : ''}`}
      />
      
      {/* White overlay for slide out (right to left to reveal default button) */}
      {isLeaving && (
        <div className="white-overlay-explore" />
      )}
      
      {/* Content container - always on top */}
      <div className="btn-content-explore">
        <span>Explore</span>
      </div>
    </button>
  );
};

export default ExploreButton;
