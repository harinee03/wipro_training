import React from "react";
import { NumberItem } from "../types";

interface LoggerProps {
  numbers: NumberItem[];
}

const Logger: React.FC<LoggerProps> = ({ numbers }) => {
  const logNumbers = () => numbers.forEach(item => console.log("Number:", item.value));
  return (
    <div>
      <h3>Logger</h3>
      <button onClick={logNumbers}>Log Numbers to Console</button>
    </div>
  );
};

export default Logger;
