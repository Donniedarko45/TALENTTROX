import React, { useState } from 'react'; // 👈 1. Import useState
import { FaStar } from 'react-icons/fa';
import './TrustCard.css';

// Data for the testimonials with unique IDs
const testimonialsData = [
  { id: 1, name: 'Abhishek Chaudhary', title: 'Marketing Manager', quote: '"Talentrox didn\'t just help me find a job — they found me the right job. The team actually listened to what I was looking for and matched me with a role that fits perfectly."', image: 'https://placehold.co/100x100/EFEFEF/333?text=AC', rating: 5 },
  { id: 2, name: 'Mahima Singh', title: 'Product Designer', quote: '"The process was smooth, fast, and super professional. I was placed within two weeks and the support from the Talentrox team was incredible."', image: 'https://placehold.co/100x100/EFEFEF/333?text=MS', rating: 5 },
  { id: 3, name: 'Aashima Khanna', title: 'Marketing Executive', quote: '"What stood out to me was how personal everything felt. I wasn\'t just another resume — Talentrox really cared about where I was headed."', image: 'https://placehold.co/100x100/EFEFEF/333?text=AK', rating: 5 },
  { id: 4, name: 'Siddharth Jain', title: 'Data Analyst', quote: '"Applying for months with no luck. Came through with interviews in top firms within days. Highly recommend them if you are serious about growth."', image: 'https://placehold.co/100x100/EFEFEF/333?text=SJ', rating: 5 },
  { id: 5, name: 'Priya Sharma', title: 'Software Engineer', quote: '"The best part was the transparency. I always knew where I stood in the application process. Found a fantastic role with a great company culture."', image: 'https://placehold.co/100x100/EFEFEF/333?text=PS', rating: 5 },
  { id: 6, name: 'Rohan Mehta', title: 'UX Researcher', quote: '"I was looking for a very specific type of role, and Talentrox delivered. Their network of companies is impressive, and they found the perfect match for my skills."', image: 'https://placehold.co/100x100/EFEFEF/333?text=RM', rating: 5 },
];

// 5. TestimonialCard now accepts an `onClick` prop
function TestimonialCard({ name, title, quote, image, rating, onClick }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
      );
    }
    return stars;
  };

  return (
    // And applies it to the main div
    <div className="testimonial-card" onClick={onClick}>
      <div className="card-header">
        <img src={image} alt={`Portrait of ${name}`} className="profile-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/EFEFEF/333?text=User'; }} />
        <div className="profile-info">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
      </div>
      <p className="quote">{quote}</p>
      <div className="stars-container">
        {renderStars()}
      </div>
    </div>
  );
}

// Main TrustCard component
function TrustCard() {
  // 2. State to track if the animation is paused
  const [isPaused, setIsPaused] = useState(false);

  // 3. Handler to toggle the paused state
  const handleTogglePause = () => {
    setIsPaused(prevState => !prevState);
  };

  const rowData = testimonialsData.slice(0, 6);

  // Style object to control the animation play state
  const scrollerStyle = {
    animationPlayState: isPaused ? 'paused' : 'running',
  };

  return (
    <div className="trust-section">
      <h2 className="trust-title">Built on Trust</h2>
      <div className="testimonials-container">
        {/* 4. Apply the style to the scrollers */}
        <div className="testimonials-scroller" style={scrollerStyle}>
          {[...rowData, ...rowData, ...rowData, ...rowData, ...rowData].map((testimonial, index) => (
            <TestimonialCard
              key={`first-${testimonial.id}-${index}`}
              onClick={handleTogglePause} // 5. Pass the handler to the card
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
        <div className="testimonials-scroller" style={scrollerStyle}>
          {[...rowData, ...rowData, ...rowData, ...rowData, ...rowData].map((testimonial, index) => (
            <TestimonialCard
              key={`second-${testimonial.id}-${index}`}
              onClick={handleTogglePause} // 5. Pass the handler to the card
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustCard;