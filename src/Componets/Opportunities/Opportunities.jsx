import React from 'react';
import { FaRocket, FaBuilding, FaCrown } from 'react-icons/fa';
import './Opportunities.css';

// Data for the opportunities
const opportunitiesData = [
  {
    icon: <FaRocket />,
    title: 'Startups',
    description: 'Innovative, agile, high-growth companies.',
    color: '#6f42c1'
  },
  {
    icon: <FaBuilding />,
    title: 'Mid-Size Companies',
    description: 'Established brands with great teams and growing influence.',
    color: '#d63384'
  },
  {
    icon: <FaCrown />,
    title: 'MNCS',
    description: 'Top-tier, world-renowned organizations with industry-leading roles.',
    color: '#fd7e14'
  }
];

// Reusable card component defined in the same file
function OpportunityCard({ icon, title, description, color }) {
  const iconStyle = {
    backgroundColor: color,
  };

  return (
    <div className="opportunity-card">
      <div className="icon-container" style={iconStyle}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function Opportunities() {
  return (
    <section className="opportunities-section">
      <div className="opportunities-header">
        <h2>Opportunities for Every Ambition</h2>
        <p>
          Find jobs at every level—from fast-moving startups to established mid-size companies, all
          the way to premium industry leaders and unicorns.
        </p>
      </div>
      <div className="opportunities-grid">
        {opportunitiesData.map((card, index) => (
          <OpportunityCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Opportunities;