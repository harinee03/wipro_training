import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { addBook } from "../flux/BookActions";
import store from "../flux/BookStore";

const AddBookForm = () => {
  const navigate = useNavigate();

  const initialValues = { title: "", author: "", price: "" };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      id: Date.now(),
      title: values.title,
      author: values.author,
      price: parseInt(values.price),
      description: "Newly added book by admin.",
    };

    //  1. Add to backend first
    axios
      .post("http://localhost:3001/books", newBook)
      .then(() => {
        //  2. Dispatch to Flux store
        addBook(newBook);
        store.addBook(newBook);

        alert(" Book added successfully!");
        resetForm();

        // 3. Redirect to Home
        navigate("/home");
      })
      .catch((err) => {
        console.error("Error adding book:", err);
        alert(" Failed to add book. Check console for details.");
      });
  };

  return (
    <div className="book-form-container">
      <h3>Add New Book</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label>Title</label>
              <Field name="title" type="text" className="form-control" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Author</label>
              <Field name="author" type="text" className="form-control" />
              <ErrorMessage name="author" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Price (₹)</label>
              <Field name="price" type="number" className="form-control" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>

            <button type="submit" className="btn btn-success mt-3">
              Add Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
