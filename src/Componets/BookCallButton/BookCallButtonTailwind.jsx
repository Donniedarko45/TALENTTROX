import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BookCallButtonTailwind = ({ onClick, className = "" }) => {
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
      className={`
        relative overflow-hidden
        px-8 py-4
        ${isLeaving ? 'bg-gradient-end' : 'bg-dark-blue'}
        text-white font-semibold
        rounded-full
        flex items-center justify-center gap-2
        transition-all duration-300 ease-out
        hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Gradient overlay for hover in (left to right) */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-r from-gradient-start to-gradient-end
          transform ${isHovered && !isLeaving ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-500 ease-out
          z-10
        `}
      />
      
      {/* Dark blue overlay for slide out (right to left over purple background) */}
      {isLeaving && (
        <div
          className={`
            absolute inset-0
            bg-dark-blue
            transform translate-x-full animate-slide-out
            z-10
          `}
          style={{
            animation: 'slide-out 0.4s ease-out 0.1s forwards'
          }}
        />
      )}
      
      {/* Content container - always on top */}
      <div className="relative z-20 flex items-center gap-2">
        <span>Book a Call</span>
        <FaArrowRight className="text-sm" />
      </div>
    </button>
  );
};

export default BookCallButtonTailwind;
