import React from "react";

class Car {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
  getDetails() {
    return `${this.brand} (${this.year})`;
  }
}

const ConstructorDemo: React.FC = () => {
  const demoConstructor = () => {
    const myCar = new Car("Tesla", 2025);
    alert("Car created using constructor: " + myCar.getDetails());
  };

  return (
    <div>
      <h3>Constructor Demo</h3>
      <button onClick={demoConstructor}>Show Constructor Example</button>
    </div>
  );
};

export default ConstructorDemo;
