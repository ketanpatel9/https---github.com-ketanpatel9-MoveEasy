import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function HistoryForm({ initialHistoryData }) {
  const [formData, setFormData] = useState({
    name: 'Abhishek Sharma',
    date: '2024-02-19',
    description: ''
  });

  useEffect(() => {
    if (initialHistoryData) {
      setFormData({
        name: initialHistoryData.name || 'Abhishek Sharma',
        date: initialHistoryData.date || '2024-02-19',
        description: initialHistoryData.description || ''
      });
    }
  }, [initialHistoryData]);

  // Generate random transaction history
  const randomTransactionHistory = [
    { date: '2024-02-18', description: 'Transaction 1', bookingDate: '2024-02-17', pickLocation: 'New York', dropLocation: 'Los Angeles', amount: '$100', vehicle: 'Toyota Camry', driver: 'John Doe' },
    { date: '2024-02-17', description: 'Transaction 2', bookingDate: '2024-02-16', pickLocation: 'Los Angeles', dropLocation: 'San Francisco', amount: '$150', vehicle: 'Honda Accord', driver: 'Jane Doe' },
    { date: '2024-02-16', description: 'Transaction 3', bookingDate: '2024-02-15', pickLocation: 'San Francisco', dropLocation: 'Seattle', amount: '$200', vehicle: 'Ford Explorer', driver: 'Alex Smith' }
  ];

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <span className="ms-2">{formData.name}</span>
      </div>
      <div className="mb-3">
        <label className="form-label">Date:</label>
        <span className="ms-2">{formData.date}</span>
      </div>
      <h2 className="mt-4 mb-3">Transaction History:</h2>
      <ul className="list-group">
        {randomTransactionHistory.map((transaction, index) => (
          <li key={index} className="list-group-item">
            <strong>Date:</strong> {transaction.date}, 
            <strong>Description:</strong> {transaction.description}, 
            <strong>Booking Date:</strong> {transaction.bookingDate}, 
            <strong>Pick Location:</strong> {transaction.pickLocation}, 
            <strong>Drop Location:</strong> {transaction.dropLocation}, 
            <strong>Amount:</strong> {transaction.amount}, 
            <strong>Vehicle:</strong> {transaction.vehicle}, 
            <strong>Driver:</strong> {transaction.driver}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryForm;
