import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookings.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/bookings');
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="loading">Loading bookings...</div>;
  }

  return (
    <div className="bookings-page">
      <div className="container">
        <h2 className="section-title">All Bookings</h2>
        <div className="bookings-container">
          {bookings.length === 0 ? (
            <div className="no-bookings">
              <h3>No bookings yet</h3>
              <p>Book a trip to see your reservations here!</p>
            </div>
          ) : (
            <div className="bookings-list">
              {bookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-header">
                    <h3>{booking.destination}</h3>
                    <span className={`booking-status ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="booking-details">
                    <p><strong>Guest:</strong> {booking.fullName}</p>
                    <p><strong>Email:</strong> {booking.email}</p>
                    <p><strong>Phone:</strong> {booking.phone}</p>
                    <p><strong>Travel Date:</strong> {new Date(booking.travelDate).toLocaleDateString()}</p>
                    <p><strong>Travelers:</strong> {booking.travelers} person(s)</p>
                    <p><strong>Booked on:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                    {booking.specialRequests && (
                      <p><strong>Special Requests:</strong> {booking.specialRequests}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;