import React from "react";
import DestinationCard from "./components/DestinationCard";

const Home = () => {
  const destinations = [
    { name: "Goa", description: "Beaches & fun" },
    { name: "Ooty", description: "Hill station bliss" },
    { name: "Jaipur", description: "Royal palaces"},
  ];

  return (
    <div className="container text-center mt-4">
      <h2 className="mb-4">Popular Destinations</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} destination={dest} />
        ))}
      </div>
    </div>
  );
};

export default Home;
