import React, { useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import BookCallButtonPure from "../BookCallButton/BookCallButtonPure.jsx";
import ExploreButton from "../ExploreButton/ExploreButton.jsx";
import "./Enough.css";

const professionals = [
  {
    name: "Sarah Chen",
    role: "Software Developer at TechCorp",
    initials: "SC",
    color: "#6366F1",
  },
  {
    name: "Marcus Rivera",
    role: "UX Designer at InnovateLab",
    initials: "MR",
    color: "#EC4899",
  },
  {
    name: "Aisha Patel",
    role: "Data Scientist at DataFlow",
    initials: "AP",
    color: "#10B981",
  },
  {
    name: "James Kim",
    role: "Product Manager at StartupX",
    initials: "JK",
    color: "#A855F7",
  },
];

function Enough() {
  const handleExploreClick = () => {
    const whoWeAreSection = document.getElementById('who-we-are');
    if (whoWeAreSection) {
      whoWeAreSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="enough-section">
      <div className="enough-content">
        <h1>Enough Searching. Let's Get You Hired</h1>
        <p>
          From startups to global enterprises, we connect top talent with the
          roles they deserve.
        </p>
        <div className="button-group">
          <BookCallButtonPure
            onClick={() => console.log("Book a call clicked!")}
          />
          <ExploreButton onClick={handleExploreClick} />
        </div>
      </div>
      <div className="enough-visuals">
        <div className="phone-mockup">
          {professionals.map((prof, index) => (
            <div key={index} className="professional-item">
              <div
                className="initials-circle"
                style={{ backgroundColor: prof.color }}
              >
                {prof.initials}
              </div>
              <div className="professional-info">
                <p className="name">{prof.name}</p>
                <p className="role">{prof.role}</p>
              </div>
            </div>
          ))}
          <div className="phone-footer">
            <p>10,000+</p>
            <span>Tech professionals matched</span>
          </div>
        </div>

        <div className="stat-card card-careers">
          <FaBriefcase className="stat-icon" />
          <div className="stat-text">
            <strong>15,000+</strong>
            <span>
              Careers <br /> Launched
            </span>
          </div>
        </div>
        <div className="stat-card card-satisfaction ">
          <FaStar className="stat-icon" />
          <div className="stat-text">
            <strong>4.9/5</strong> Candidate <br /> Satisfaction
          </div>
        </div>
        <div className="stat-card card-verified">
          <FaCheckCircle className="stat-icon" />
          <div className="stat-text">
            Verified <br /> Professionals
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enough;
