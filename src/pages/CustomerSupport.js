import React from 'react';
import '../CustomerSupport.css'; // Assuming your styles are in this file

function CustomerSupport() {
  // Replace the placeholders with actual values
  const phoneNumberCustomerSupport = "Your Customer Support Phone Number Here";
  const phoneNumberPackersMovers = "Your Packers and Movers Phone Number Here";
  const phoneNumberEnterpriseServices = "Your Enterprise Services Phone Number Here";
  const phoneNumberDriveWithUs = "Your Drive With Us Phone Number Here";
  
  return (
    <div className="help-center">
      <div className="header">
        <h1>HELP CENTER</h1>
        <p>Need assistance? We're happy to help, reach us out through the appropriate channels below.</p>
      </div>
      
      <div className="services">
        <div className="service">
          <div className="icon">{/* Add icon component or img tag here */}</div>
          <h2>CUSTOMER SUPPORT</h2>
          <p>Click <a href="#">here</a> to read our FAQs</p>
          <p>For support with your bookings and other queries, email us at <a href="mailto:help@moveeasy.us">help@moveeasy.us</a> or call us on {phoneNumberCustomerSupport}</p>
        </div>
        
        <div className="service">
          <div className="icon">{/* Add icon component or img tag here */}</div>
          <h2>PACKERS AND MOVERS</h2>
          <p>For queries and support regarding your house shifting booking, email us at <a href="mailto:packermover@moveeasy.us">packermover@moveeasy.us</a> or call us on {phoneNumberPackersMovers}</p>
        </div>
        
        <div className="service">
          <div className="icon">{/* Add icon component or img tag here */}</div>
          <h2>ENTERPRISE SERVICES</h2>
          <p>If you are an enterprise client and need trucks in bulk for your business, <a href="#">Click here</a> or mail us at <a href="mailto:enterprise@moveeasy.us">enterprise@moveeasy.us</a></p>
        </div>

        <div className="service">
          <div className="icon">{/* Add icon component or img tag here */}</div>
          <h2>DRIVE WITH MOVEEASY</h2>
          <p>Are you a truck owner? Increase your earnings by partnering with us. <a href="#">Click here</a> or reach us out on {phoneNumberDriveWithUs}</p>
        </div>
        
        {/* Add more services as needed */}
        
      </div>
    </div>
  );
}

export default CustomerSupport;
;
