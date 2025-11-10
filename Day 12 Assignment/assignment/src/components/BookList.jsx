import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import "./BookList.css";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef();

  console.log("BookList rendered");

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => {
        console.log("Fetched books:", res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error("Axios error:", err));
  }, []);

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFocus = () => searchRef.current.focus();
  const handleAuthorClick = (a) =>
    setSelectedAuthor((p) => (p === a ? null : a));

  return (
    <div
      className="book-list-container"
      style={{ background: "white", color: "black", textAlign: "center" }}
    >
      <h2>Featured Books</h2>

      <div className="search-bar">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-secondary ms-2" onClick={handleFocus}>
          Focus Search
        </button>
      </div>

      <div className="view-buttons mb-3">
        <button
          className={`btn me-2 ${
            viewMode === "grid" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </button>
        <button
          className={`btn ${
            viewMode === "card" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setViewMode("card")}
        >
          Card View
        </button>
      </div>

      <div className={viewMode === "grid" ? "book-grid" : "book-list"}>
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            onAuthorClick={handleAuthorClick}
          />
        ))}
      </div>

      {selectedAuthor && <AuthorInfo author={selectedAuthor} />}
    </div>
  );
}
