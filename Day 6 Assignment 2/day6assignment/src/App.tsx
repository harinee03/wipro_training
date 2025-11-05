// src/App.tsx
import React, { useState } from "react";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";
import { NumberItem } from "./types";

const App: React.FC = () => {
  const initialNumbers: NumberItem[] = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
  const [numbers, setNumbers] = useState<NumberItem[]>(initialNumbers);

  return (
    <div style={{ margin: 20 }}>
      <h2>JavaScript Concepts Demo (React + TypeScript)</h2>
      <FilterControls setNumbers={setNumbers} originalNumbers={initialNumbers} />
      <NumberList numbers={numbers} />
      <Logger numbers={numbers} />
      <HoistingDemo />
      <ConstructorDemo />
    </div>
  );
};

export default App;
