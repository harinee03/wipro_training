import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import store from "../flux/BookStore";
import "./BookList.css";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef();

  //  Fetch backend data and initialize store once
  useEffect(() => {
    axios.get("http://localhost:3001/books").then((res) => {
      const fetchedBooks = res.data;

      // Add backend books to store only once
      if (store.getBooks().length === 0) {
        fetchedBooks.forEach((b) => store.addBook(b));
      }
      setBooks([...store.getBooks()]);
    });

    //  Listen for store changes (updates after Add Book)
    const updateBooks = () => {
      setBooks([...store.getBooks()]);
    };

    store.on("change", updateBooks);

    return () => {
      store.removeListener("change", updateBooks);
    };
  }, []);

  //  Filter books by title
  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Search focus
  const handleFocus = () => searchRef.current.focus();

  // Author info toggle
  const handleAuthorClick = (author) =>
    setSelectedAuthor((prev) => (prev === author ? null : author));

  return (
    <div
      className="book-list-container"
      style={{ background: "white", color: "black", textAlign: "center" }}
    >
      <h2>Featured Books</h2>

      {/*  Search Bar */}
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

      {/*  View Buttons */}
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

      {/* Book Display */}
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

      {/*  Author Info */}
      {selectedAuthor && <AuthorInfo author={selectedAuthor} />}
    </div>
  );
}
