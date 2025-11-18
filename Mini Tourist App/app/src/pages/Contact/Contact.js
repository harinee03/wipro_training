import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <h3>Get in Touch</h3>
          <p>Have questions about our travel packages? We'd love to hear from you!</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>Customer Service</h3>
              <p>987654323</p>
              <p>Available 24/7</p>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <p>support@travelexplorer.com</p>
              <p>Response within 2 hours</p>
            </div>
            
            <div className="contact-item">
              <h3>Office Address</h3>
              <p>123 Travel Street</p>
              <p>Nagercoil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;