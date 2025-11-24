import React, { useState, useContext } from "react";
import { TravelContext } from "../context/TravelContext";
import { useNavigate } from "react-router-dom";

const PackageList = ({ packages }) => {
  const { setSelectedPackage } = useContext(TravelContext);
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]); // React State

  const handleBook = (pkg) => {
    setSelectedPackage(pkg);
    navigate("/book");
  };

  const toggleWishlist = (pkgId) => {
    //  Add or remove from wishlist
    if (wishlist.includes(pkgId)) {
      setWishlist(wishlist.filter((id) => id !== pkgId));
    } else {
      setWishlist([...wishlist, pkgId]);
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center mt-4">
      {packages.map((pkg) => (
        <div key={pkg.id} className="card m-3 shadow" style={{ width: "20rem" }}>
          <img src={pkg.image} className="card-img-top" alt={pkg.title} />
          <div className="card-body">
            <h5 className="card-title">{pkg.title}</h5>
            <p>{pkg.details}</p>
            <p className="fw-bold text-success">₹{pkg.price}</p>

            {}
            <button className="btn btn-primary me-2" onClick={() => handleBook(pkg)}>
              Book Now
            </button>

            {}
            <button
              className={`btn ${wishlist.includes(pkg.id) ? "btn-danger" : "btn-outline-danger"}`}
              onClick={() => toggleWishlist(pkg.id)}
            >
              {wishlist.includes(pkg.id) ? "Added" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageList;
