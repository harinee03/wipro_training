import React from "react";

const HoistingDemo: React.FC = () => {
  const demonstrateHoisting = () => {
    console.log("Variable hoisting example:");
    console.log(a); // undefined
    var a = 10;

    console.log("Function hoisting example:");
    greet(); // works

    function greet() {
      console.log("Hello from hoisted function!");
    }
  };

  return (
    <div>
      <h3>Hoisting Demo</h3>
      <button onClick={demonstrateHoisting}>Run Hoisting Demo</button>
    </div>
  );
};

export default HoistingDemo;
