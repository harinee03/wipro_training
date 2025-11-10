import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BookList.css";

function BookCard({ id, title, author, price, onAuthorClick }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>

      <div className="d-flex justify-content-around">
        <Link to={`/book/${id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onAuthorClick(author)}
        >
          View Author Info
        </button>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAuthorClick: PropTypes.func.isRequired,
};

export default BookCard;
