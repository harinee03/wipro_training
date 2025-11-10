import React from 'react'
import PropTypes from 'prop-types'
import './BookList.css'

function BookCard({ title, author, price, onViewAuthor }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <button className="btn btn-primary" onClick={() => onViewAuthor(author)}>
        View Author Details
      </button>
    </div>
  )
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onViewAuthor: PropTypes.func.isRequired,
}

export default BookCard
