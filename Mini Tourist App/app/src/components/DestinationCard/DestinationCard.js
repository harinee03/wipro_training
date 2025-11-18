import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="destination-card fade-in">
      <img 
        src={destination.image} 
        alt={destination.name}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{destination.name}</h3>
        <div className="card-location">
          <span className="location-icon">Location : </span>
          {destination.location}
        </div>
        <div className="card-price">Rupees: {destination.price}</div>
        <p className="card-description">{destination.description}</p>
        <div className="card-actions">
          <button 
            className={`wishlist-btn ${isWishlisted ? 'added' : ''}`}
            onClick={handleWishlist}
          >
            {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
          </button>
          <Link to="/booking" className="book-now-btn">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;