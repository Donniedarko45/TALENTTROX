import React from 'react';
import './EveryField.css';

// Import your images (ensure paths are correct)
import Image1 from './1.svg';
import Image2 from './2.svg';
import Image3 from './3.svg';
import Image4 from './4.svg';
import Image5 from './5.svg';
import Image6 from './6.svg';
import Image7 from './7.svg';
import Image8 from './8.svg';

// Complete list of Logo URLs
// const deloitteLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DeloitteNewLogo.svg/2560px-DeloitteNewLogo.svg.png';
// const pwcLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/PwC_logo.svg/2560px-PwC_logo.svg.png';
// const iciciLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png';
// const nykaaLogo = 'https://cdn.iconscout.com/icon/free/png-256/free-nykaa-3384872-2822953.png';
// const flipkartLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flipkart_logo.svg/2560px-Flipkart_logo.svg.png';
// const razorpayLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png';
// const microsoftLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png';
// const amazonLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png';
// const infosysLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png';
// const googleLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png';
// const myntraLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Myntra_logo.svg/2560px-Myntra_logo.svg.png';
// const delhiveryLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Delhivery_Logo.svg/1200px-Delhivery_Logo.svg.png';
// const eyLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png';
// const zendeskLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Zendesk_logo.svg/2560px-Zendesk_logo.svg.png';
// const intercomLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Intercom_logo.svg/2560px-Intercom_logo.svg.png';

const kpmgLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png';

import deloitteLogo from '../../Assets/Deloitte.png'
import flipkartLogo from '../../Assets/Flipkart.png'
import iciciLogo from '../../Assets/Icici_Bank.png'
import razorpayLogo from '../../Assets/Razorpay.png'
import googleLogo from '../../Assets/Google.png'
import nykaaLogo from '../../Assets/Nykaa.png'
import pwcLogo from '../../Assets/Pwc.png'
import amazonLogo from '../../Assets/Amazon.png'
import infosysLogo from '../../Assets/Infosys.png'
import microsoftLogo from '../../Assets/Microsoft.png'
import airtelLogo from '../../Assets/Airtel.png'
import urbanLogo from '../../Assets//Urban.png'
import relianceLogo from '../../Assets/Reliance.png'
import byjusLogo from '../../Assets/Byjus.png'
import swiggyLogo from '../../Assets/Swiggy.png'

const fields = [
  {
    id: 1,
    image: Image1,
    alt: 'Human Resources',
    title: 'Human Resources',
    description: 'Manages recruitment, employee relations, training, and benefits to build a strong and engaged workforce.',
    companies: [ { name: 'Deloitte', logo: deloitteLogo }, { name: 'KPMG', logo: kpmgLogo } ]
  },
  {
    id: 2,
    image: Image2,
    alt: 'Finance and Accounting',
    title: 'Finance & Accounting',
    description: 'Handles budgeting, financial reporting, auditing, and compliance to ensure the company\'s fiscal health.',
    companies: [ { name: 'PwC', logo: pwcLogo }, { name: 'ICICI Bank', logo: iciciLogo } ]
  },
  {
    id: 3,
    image: Image3,
    alt: 'Marketing',
    title: 'Marketing',
    description: 'Creates and executes strategies to build brand awareness, attract customers, and drive business growth.',
    companies: [ { name: 'Nykaa', logo: nykaaLogo }, { name: 'Swiggy', logo: swiggyLogo } ]
  },
  {
    id: 4,
    image: Image4,
    alt: 'Business Development',
    title: 'Business Development',
    description: 'Focuses on generating leads, creating deals, and expanding the company\'s market reach and revenue.',
    companies: [ { name: 'Byjus', logo: byjusLogo }, { name: 'Amazon', logo: amazonLogo } ]
  },
  {
    id: 5,
    image: Image5,
    alt: 'Operations',
    title: 'Operations',
    description: 'Oversees day-to-day processes, logistics, and supply chains to ensure efficiency and quality in service.',
    companies: [ { name: 'Reliance', logo: relianceLogo }, { name: 'Flipkart', logo: flipkartLogo } ]
  },
  {
    id: 6,
    image: Image6,
    alt: 'Information Technology',
    title: 'Information Technology',
    description: 'Manages the company\'s technology infrastructure, ensuring smooth digital operations, security, and support.',
    companies: [ { name: 'Infosys', logo: infosysLogo }, { name: 'Google', logo: googleLogo } ]
  },
  {
    id: 7,
    image: Image7,
    alt: 'Product Management',
    title: 'Product Management',
    description: 'Drives the development and lifecycle of products by aligning business goals with customer needs and market trends.',
    companies: [ { name: 'Razorpay', logo: razorpayLogo }, { name: 'Microsoft', logo: microsoftLogo } ]
  },
  {
    id: 8,
    image: Image8,
    alt: 'Customer Service',
    title: 'Customer Service',
    description: 'Provides assistance to customers by resolving issues, offering guidance, and ensuring a positive experience.',
    companies: [ { name: 'airtel', logo: airtelLogo }, { name: 'Urban Company', logo: urbanLogo } ]
  },
];


function EveryField() {
  const column1 = fields.slice(0, 3);
  const column2 = fields.slice(3, 5);
  const column3 = fields.slice(5, 8);

  const renderFieldCard = (field) => (
    <div key={field.id} className="field-card">
      <div className="card-image-area">
        <img
          src={field.image}
          alt={field.alt}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e9eaf2/7d7f82?text=Icon'; }}
        />
      </div>
      <div className="card-details-area">
        <h3>{field.title}</h3>
        <p className="description-filed">{field.description}</p>
        <div className="company-info">
          <span>Company:</span>
          <div className="company-logos">
            {field.companies.map(company => (
              <img key={company.name} src={company.logo} alt={`${company.name} logo`} />
            ))}
            <span className="more-text">+ more</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="every-field-section">
      <h2>Explore Opportunities in every field</h2>
      <div className="fields-grid">
        <div className="fields-column">
          {column1.map(renderFieldCard)}
        </div>
        <div className="fields-column">
          {column2.map(renderFieldCard)}
        </div>
        <div className="fields-column">
          {column3.map(renderFieldCard)}
        </div>
      </div>
    </section>
  );
}

export default EveryField;