import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TravelProvider } from "./context/TravelContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TravelProvider>
      <App />
    </TravelProvider>
  </React.StrictMode>
);
