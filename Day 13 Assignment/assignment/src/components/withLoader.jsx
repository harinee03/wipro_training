import React from "react";

const withLoader = (WrappedComponent) => {
  return function WithLoader({ loading, ...props }) {
    if (loading) {
      return (
        <div className="spinner-border text-primary mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
