
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BrokenProductCard from './BrokenProductCard';

const ProductShowcase = () => {
  return (
    <div className="container mt-4">
      <h2>Product Showcase</h2>
      <div className="row">
        <div className="col-md-6">
          <ErrorBoundary>
            <BrokenProductCard shouldBreak={false} />
          </ErrorBoundary>
        </div>
        <div className="col-md-6">
          <ErrorBoundary>
            <BrokenProductCard shouldBreak={true} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;