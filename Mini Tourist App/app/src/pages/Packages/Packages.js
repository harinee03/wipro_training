import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import './Packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Make sure to use the correct port (3001 or 3002)
        const response = await axios.get('http://localhost:3001/packages');
        console.log('API Response:', response.data); // Debug log
        setPackages(response.data);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to load packages. Please make sure JSON server is running on port 3001.');
        setLoading(false);
        
        // Fallback to local data if API fails
        const fallbackData = [
          {
            id: 1,
            name: "Bali Paradise",
            location: "Indonesia",
            price: 12999,
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500",
            description: "Experience the perfect blend of beautiful beaches, vibrant culture, and luxurious resorts."
          },
          {
            id: 2,
            name: "Swiss Alps", 
            location: "Switzerland",
            price: 90999,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
            description: "Majestic mountains, crystal clear lakes, and charming villages await your adventure."
          },
          {
            id: 3,
            name: "Kyoto Cultural Tour",
            location: "Japan",
            price: 45999,
            image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500",
            description: "Discover ancient temples, traditional tea houses, and beautiful gardens in historic Kyoto."
          },
          {
            id: 4,
            name: "Santorini Sunset",
            location: "Greece", 
            price: 15999,
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500",
            description: "Whitewashed buildings, blue domes, and stunning sunsets in this Greek paradise."
          }
        ];
        setPackages(fallbackData);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div className="loading">Loading amazing destinations...</div>;
  }

  return (
    <div className="packages">
      <div className="container">
        <h2 className="section-title">All Travel Packages</h2>
        {error && <div className="error">{error}</div>}
        <div className="packages-container">
          <div className="destinations-grid">
            {packages.map(pkg => (
              <DestinationCard key={pkg.id} destination={pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;