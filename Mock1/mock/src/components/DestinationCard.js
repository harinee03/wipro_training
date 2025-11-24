import React from "react";

const DestinationCard = ({ destination }) => (
  <div className="card shadow-lg rounded-3 m-2" style={{ width: "18rem" }}>
   
    <div className="card-body">
      <h5 className="card-title">{destination.name}</h5>
      <p className="card-text">{destination.description}</p>
    </div>
  </div>
);

export default DestinationCard;
