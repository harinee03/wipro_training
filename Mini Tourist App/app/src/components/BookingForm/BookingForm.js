import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travelers: 1,
      specialRequests: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Full name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
        .required('Phone number is required'),
      destination: Yup.string()
        .required('Please select a destination'),
      travelDate: Yup.date()
        .min(new Date(), 'Travel date must be in the future')
        .required('Travel date is required'),
      travelers: Yup.number()
        .min(1, 'At least 1 traveler is required')
        .max(10, 'Maximum 10 travelers allowed')
        .required('Number of travelers is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitMessage('');
      
      try {
        // Create booking data with timestamp
        const bookingData = {
          ...values,
          id: Date.now(), // Simple ID generation
          bookingDate: new Date().toISOString(),
          status: 'confirmed'
        };

        // Send POST request to JSON server
        const response = await axios.post('http://localhost:3001/bookings', bookingData);
        
        setSubmitMessage('Booking submitted successfully! We will contact you soon.');
        resetForm();
        
        // Log the booking data (you can check the JSON server response)
        console.log('Booking saved:', response.data);
        
      } catch (error) {
        console.error('Error saving booking:', error);
        setSubmitMessage('Failed to submit booking. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <div className="booking-form-page">
      <div className="container">
        <h2 className="section-title">Book Your Journey</h2>
        <div className="booking-form-container">
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('Failed') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}
          
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="form-error">{formik.errors.fullName}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="form-error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="form-error">{formik.errors.phone}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label">Destination</label>
              <select
                name="destination"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.destination}
              >
                <option value="">Select a destination</option>
                <option value="Bali Paradise">Bali Paradise</option>
                <option value="Swiss Alps">Swiss Alps</option>
                <option value="Tokyo Experience">Tokyo Experience</option>
                <option value="Santorini Sunset">Santorini Sunset</option>
              </select>
              {formik.touched.destination && formik.errors.destination ? (
                <div className="form-error">{formik.errors.destination}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label">Travel Date</label>
              <input
                type="date"
                name="travelDate"
                className="form-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.travelDate}
              />
              {formik.touched.travelDate && formik.errors.travelDate ? (
                <div className="form-error">{formik.errors.travelDate}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                className="form-input"
                min="1"
                max="10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.travelers}
              />
              {formik.touched.travelers && formik.errors.travelers ? (
                <div className="form-error">{formik.errors.travelers}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label">Special Requests</label>
              <textarea
                name="specialRequests"
                className="form-input"
                rows="4"
                placeholder="Any special requirements or requests..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.specialRequests}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={!formik.isValid || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;