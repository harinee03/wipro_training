
import React, { memo } from 'react';

const StatsCard = memo(({ title, value, lastUpdated, onUpdate }) => {
  console.log(` Rendering: ${title}`);
  
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <h2 className="card-text text-primary">{value}</h2>
          <p className="text-muted small">
            Last updated: {lastUpdated}
          </p>
          {onUpdate && (
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={onUpdate}
            >
              Simulate Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default StatsCard;