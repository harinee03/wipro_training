import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import RenderPropsMessage from "./components/RenderPropsMessage";
import AddBookFormPage from "./components/AddBookFormPage";

function App() {
  return (
    <div className="container mt-4 text-center fade">
      <h1 className="app-title"> Welcome to BookVerse</h1>

      {/*  Navigation Bar */}
      <nav className="mb-4">
        <Link to="/home" className="btn btn-primary me-2">Home</Link>
        <Link to="/addbook" className="btn btn-success me-2"> Add Book</Link>
        <Link to="/message" className="btn btn-outline-secondary">Greeting</Link>
      </nav>

      {/*  Routing Setup */}
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/home" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/addbook" element={<AddBookFormPage />} /> 
        <Route
          path="/message"
          element={
            <RenderPropsMessage
              render={(name) => (
                <h3>Hello {name}, welcome back to BookVerse! </h3>
              )}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
