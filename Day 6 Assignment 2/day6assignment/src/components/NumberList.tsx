import React from "react";
import { NumberItem } from "../types";

interface NumberListProps {
  numbers: NumberItem[];
}

const NumberList: React.FC<NumberListProps> = ({ numbers }) => (
  <div>
    <h3>Number List</h3>
    <ul>
      {numbers.map((item, index) => (
        <li key={index}>{item.value}</li>
      ))}
    </ul>
  </div>
);

export default NumberList;
