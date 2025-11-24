import React, { createContext, useState } from "react";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <TravelContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </TravelContext.Provider>
  );
};
