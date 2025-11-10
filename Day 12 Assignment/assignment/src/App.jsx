import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import RenderPropsMessage from "./components/RenderPropsMessage";

function App() {
  console.log("App rendered ");

  return (
    <div className="container mt-4 text-center">
      <h1 className="app-title"> Welcome to BookVerse</h1>

      <nav className="mb-4">
        <Link to="/home" className="btn btn-primary me-2">Home</Link>
        <Link to="/message" className="btn btn-outline-secondary">Greeting</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/home" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
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
