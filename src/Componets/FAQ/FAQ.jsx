import React, { useState } from 'react';
import './FAQ.css';

// Data for the FAQ section, updated from the image
const faqData = [
  {
    question: 'What industries and roles do you specialize in?',
    answer: 'We specialize in hiring across diverse sectors including IT, Marketing, Finance, Operations, HR, and more — from entry-level to executive roles, for both startups and large enterprises.'
  },
  {
    question: 'How does the recruitment process work with Talentrox?',
    answer: 'Our process is simple and effective: we understand your requirements, screen and shortlist suitable candidates, coordinate interviews, and support with offer rollout and onboarding — ensuring the right fit, fast.'
  },
  {
    question: 'Do you offer services for both companies and job seekers?',
    answer: "Yes. We offer services for both companies and job seekers — whether they're looking for full-time roles, internships, freelancing, or career transitions."
  },
  {
    question: 'What is your candidate replacement policy?',
    answer: "We offer a free candidate replacement within 30-90 days (depending on the agreement) if the hired candidate doesn't meet expectations or exits early."
  },
  {
    question: 'How long does it take to fill a position?',
    answer: 'On average, we share quality candidate profiles within 3-7 working days. Most roles are closed within 2-3 weeks, depending on complexity and urgency.'
  },
  {
    question: 'What makes Talentrox different from other recruitment agencies?',
    answer: 'We combine speed with accuracy. Our 5,000+ pre-vetted candidate pool, university collaborations, real-time assessments, and dedicated recruiters ensure fast, reliable, and tailored hiring solutions.'
  },
  {
    question: 'How do you ensure the quality of candidates — whether freshers or experienced?',
    answer: 'For freshers, we assess academic background, communication, aptitude, and project work. For experienced professionals, we verify experience, run technical or functional evaluations, and assess leadership potential. For campus recruitment, we work directly with top institutions to pre-screen high-potential students.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggles the clicked FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
