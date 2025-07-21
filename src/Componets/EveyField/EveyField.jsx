import React from 'react';
import './EveryField.css';

import Image1 from './1.svg';
import Image2 from './2.svg';
import Image3 from './3.svg';
import Image4 from './4.svg';
import Image5 from './5.svg';
import Image6 from './6.svg';
import Image7 from './7.svg';
import Image8 from './8.svg';
const fields = [
  { id: 1, alt: 'Human Resources and Finance', image: Image1 },
  { id: 2, alt: 'Financial Growth Chart', image: Image3 },
  { id: 3, alt: 'Product Development Lifecycle', image: Image6 },
  { id: 4, alt: 'Digital Marketing', image: Image2 },
  { id: 5, alt: 'Process Optimization', image: Image7 },
  { id: 6, alt: 'Accounting and Billing', image: Image4 },
  { id: 7, alt: 'Global Networking', image: Image5 },
  { id: 8, alt: 'Customer Support', image: Image8 },
];

function EveryField() {
  const column1 = fields.slice(0, 3);
  const column2 = fields.slice(3, 5);
  const column3 = fields.slice(5, 8);

  return (
    <section className="every-field-section">
      <h2>Explore Opportunities in every field</h2>
      <div className="fields-grid">
        <div className="fields-column">
          {column1.map(field => (
            <div key={field.id} className="field-card">
              <img
                src={field.image}
                alt={field.alt}
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/340x208/e9eaf2/7d7f82?text=Image+Not+Found'; }}
              />
            </div>
          ))}
        </div>
        <div className="fields-column">
          {column2.map(field => (
            <div key={field.id} className="field-card">
              <img
                src={field.image}
                alt={field.alt}
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/340x208/e9eaf2/7d7f82?text=Image+Not+Found'; }}
              />
            </div>
          ))}
        </div>
        <div className="fields-column">
          {column3.map(field => (
            <div key={field.id} className="field-card">
              <img
                src={field.image}
                alt={field.alt}
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/340x208/e9eaf2/7d7f82?text=Image+Not+Found'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EveryField;