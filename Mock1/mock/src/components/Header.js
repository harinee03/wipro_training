import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Travel Booking
        </Link>
        <div>
          <Link className="btn btn-light me-2" to="/packages">Packages</Link>
          <Link className="btn btn-warning" to="/book">Book Now</Link>
        </div>
        <Link className="btn btn-outline-light ms-2" to="/contact">
            Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
