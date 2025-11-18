import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import './Home.css';

const Home = () => {
  const featuredDestinations = [
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
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Discover Your Perfect Journey</h1>
          <p>Explore breathtaking destinations with our carefully curated travel packages. Adventure awaits around every corner.</p>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <div className="destinations-grid">
            {featuredDestinations.map(destination => (
              <DestinationCard 
                key={destination.id} 
                destination={destination} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;