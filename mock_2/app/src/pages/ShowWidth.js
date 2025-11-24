import React from "react";

const ShowWidth = ({ windowWidth }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Window Width</h2>
      <p>Current width: {windowWidth}px</p>
    </div>
  );
};

export default ShowWidth;
