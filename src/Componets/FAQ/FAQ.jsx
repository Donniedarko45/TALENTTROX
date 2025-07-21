import React, { useState } from 'react';
import './FAQ.css';

// Data for the FAQ section
const faqData = [
  {
    question: 'What industries and roles do you specialize in?',
    answer: 'We specialize in a wide range of industries including technology, finance, healthcare, marketing, and creative sectors. Our expertise covers roles from entry-level to executive leadership.'
  },
  {
    question: 'How does the recruitment process work with Talentrox?',
    answer: 'Our process begins with a detailed consultation to understand your needs. We then source, screen, and interview candidates, presenting you with a shortlist of the most qualified individuals. We manage the process end-to-end, from scheduling interviews to offer negotiation.'
  },
  {
    question: 'Do you offer services for both companies and job seekers?',
    answer: 'Yes, absolutely. We partner with companies to fill their open positions and also work closely with job seekers to help them find their dream roles, offering services like resume building and interview coaching.'
  },
  {
    question: 'What is your candidate replacement policy?',
    answer: 'We offer a candidate replacement guarantee. If a candidate placed by us leaves within a specified period (typically 90 days), we will find a replacement at no additional cost.'
  },
  {
    question: 'How long does it take to fill a position?',
    answer: 'The timeline can vary depending on the role\'s complexity and market conditions. On average, we aim to present a shortlist of candidates within 1-2 weeks and fill the position within 4-6 weeks.'
  },
  {
    question: 'What makes Talentrox different from other recruitment agencies?',
    answer: 'Our key differentiators are our deep industry specialization, our personalized approach, and our commitment to building long-term partnerships. We focus on cultural fit as much as on skills and experience.'
  },
  {
    question: 'How do you ensure the quality of candidates — whether freshers or experienced?',
    answer: 'We employ a rigorous multi-stage screening process that includes technical assessments, behavioral interviews, and thorough reference checks to ensure we present only high-caliber candidates.'
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