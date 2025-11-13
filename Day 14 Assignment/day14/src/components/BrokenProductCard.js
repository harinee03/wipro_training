import React, { useState } from 'react';

const BrokenProductCard = ({ shouldBreak = false }) => {
  const [breakComponent, setBreakComponent] = useState(shouldBreak);

  // More controlled error simulation
  const simulateError = () => {
    try {
      // Create a more controlled error
      const error = new Error('This is a simulated error in ProductCard!');
      error.name = 'SimulatedProductCardError';
      throw error;
    } catch (err) {
      setBreakComponent(true);
    }
  };

  if (breakComponent) {
    // Simulate a rendering error with proper error object
    const error = new Error('Product Card Rendering Error!');
    error.componentStack = `
    at BrokenProductCard (./components/BrokenProductCard.js:15:9)
    at ErrorBoundary (./components/ErrorBoundary.js:45:5)
    `;
    throw error;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Working Product Card</h5>
        <p className="card-text">This component is working properly.</p>
        <button 
          className="btn btn-danger"
          onClick={simulateError}
        >
          Break This Component
        </button>
      </div>
    </div>
  );
};

export default BrokenProductCard;