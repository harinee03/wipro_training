import React from "react";
import useFetchPackages from "./useFetchPackage";
import PackageList from "./components/PackageList";

const Packages = () => {
  const { data: packages, loading } = useFetchPackages("http://localhost:5000/packages");

  return (
    <div className="container text-center mt-4">
      <h2>Available Packages</h2>
      {loading ? <p>Loading packages...</p> : <PackageList packages={packages} />}
    </div>
  );
};

export default Packages;
