import React from "react";
import { NumberItem } from "../types";

interface FilterControlsProps {
  setNumbers: React.Dispatch<React.SetStateAction<NumberItem[]>>;
  originalNumbers: NumberItem[];
}

const FilterControls: React.FC<FilterControlsProps> = ({ setNumbers, originalNumbers }) => {
  const filterEven = () => setNumbers(originalNumbers.filter(i => i.value % 2 === 0));
  const doubleNumbers = () => setNumbers(originalNumbers.map(i => ({ value: i.value * 2 })));
  const reset = () => setNumbers(originalNumbers);

  return (
    <div>
      <h3>Filter & Map Controls</h3>
      <button onClick={filterEven}>Show Even Numbers</button>
      <button onClick={doubleNumbers}>Double Numbers</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FilterControls;
