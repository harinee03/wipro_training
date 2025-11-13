import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TravelContext } from "../context/TravelContext";

const BookingForm = () => {
  const { selectedPackage } = useContext(TravelContext);

  const formik = useFormik({
    initialValues: { name: "", email: "", travelers: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      travelers: Yup.number().min(1, "At least 1 traveler").required("Required"),
    }),
    onSubmit: (values) => {
      alert(`Booking confirmed for ${values.name}!`);
    },
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Booking Form</h2>
      {selectedPackage && (
        <div className="alert alert-info">
          Selected Package: <strong>{selectedPackage.title}</strong>
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" {...formik.getFieldProps("name")} className="form-control" />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger small">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" {...formik.getFieldProps("email")} className="form-control" />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger small">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Number of Travelers</label>
          <input type="number" {...formik.getFieldProps("travelers")} className="form-control" />
          {formik.touched.travelers && formik.errors.travelers && (
            <div className="text-danger small">{formik.errors.travelers}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success w-100">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
