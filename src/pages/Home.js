import React from 'react';
import '../Home.css'; // Make sure to create this CSS file

function Home() {
  // Your images should be in the public folder or hosted online
  const heroImage = '/path-to-hero-image.jpg';
  const servicesImages = {
    twoWheelers: '../assets/bike.png.webp',
    trucks: '/path-to-trucks-image.jpg',
    packersMovers: '/path-to-packers-movers-image.jpg',
    allIndiaParcel: '/path-to-all-india-parcel-image.jpg',
  };
  const customerTestimonials = '/path-to-customer-testimonials-image.jpg';
  const faqImage = '/path-to-faq-image.jpg';

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Delivery hai? #HoJayega!</h1>
        <p>Select your city and find the best delivery options for you.</p>
        {/* Dropdown for city selection */}
      </div>
      
      {/* Service Offerings */}
      <div className="services-section">
        <div className="service" style={{ backgroundImage: `url(${servicesImages.twoWheelers})` }}>
          Two Wheelers
        </div>
        <div className="service" style={{ backgroundImage: `url(${servicesImages.trucks})` }}>
          Trucks
        </div>
        <div className="service" style={{ backgroundImage: `url(${servicesImages.packersMovers})` }}>
          Packers & Movers
        </div>
        <div className="service" style={{ backgroundImage: `url(${servicesImages.allIndiaParcel})` }}>
          All India Parcel
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="testimonials-section" style={{ backgroundImage: `url(${customerTestimonials})` }}>
        <h2>What our customers say</h2>
        {/* Testimonials */}
      </div>
      
      {/* FAQ Section */}
      <div className="faq-section" style={{ backgroundImage: `url(${faqImage})` }}>
        <h2>Frequently Asked Questions</h2>
        {/* FAQs */}
      </div>
    </div>
  );
}

export default Home;
