import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileForm({ initialProfileData }) {
  const [formData, setFormData] = useState({
    name: 'Abhishek Sharma',
    phoneNumber: '(732) 558-9979',
    email: 'abhishekleo1234@gmail.com',
    address: '8537 251ST ST Bellerose, New York -11426',
    cardNumber: '************1234', // Random Visa card number with last 4 digits visible
  });

  useEffect(() => {
    if (initialProfileData) {
      setFormData({
        name: initialProfileData.name || 'Abhishek Sharma',
        phoneNumber: initialProfileData.phoneNumber || '(732) 558-9979',
        email: initialProfileData.email || 'abhishekleo1234@gmail.com',
        address: initialProfileData.address || '8537 251ST ST Bellerose, New York -11426',
        cardNumber: initialProfileData.cardNumber || '************1234', // Random Visa card number with last 4 digits visible
      });
    }
  }, [initialProfileData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <h2>Personal Information</h2>
        <div className="mb-3">
          <strong>Name:</strong> {formData.name}
        </div>
        <div className="mb-3">
          <strong>Email:</strong> {formData.email}
        </div>
        <div className="mb-3">
          <strong>Phone Number:</strong> {formData.phoneNumber}
        </div>
        <div className="mb-3">
          <strong>Address:</strong> {formData.address}
        </div>
        <div className="mb-3">
          <strong>Card Number:</strong> {formData.cardNumber}
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
