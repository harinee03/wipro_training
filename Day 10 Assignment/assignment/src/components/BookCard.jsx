import React from 'react'

function BookCard({ title, author, price }) {
  const cardStyle = {
    border: '1px solid #000',
    padding: '10px',
    borderRadius: '8px',
  }

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>by {author}</p>
      <p>Price: ₹{price}</p>
    </div>
  )
}

export default BookCard
