import React, { useState } from 'react'
import BookCard from './BookCard'

function BookList() {
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')

  const books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 299 },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 399 },
    { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert', price: 350 },
    { id: 4, title: 'The Castle', author: 'Franz Kafka', price: 250 },
  ]

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Simplified layout style
  const listStyle = {
    display: viewMode === 'grid' ? 'grid' : 'flex',
    gridTemplateColumns: viewMode === 'grid' ? 'repeat(2, 1fr)' : undefined,
    flexDirection: viewMode === 'list' ? 'column' : undefined,
    gap: '10px',
    marginTop: '15px',
  }

  return (
    <div>
      <h2>Featured Books</h2>

      <div>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setViewMode('grid')}>Grid View</button>
        <button onClick={() => setViewMode('list')}>List View</button>
      </div>

      <h4>Current View Mode: {viewMode}</h4>

      <div style={listStyle}>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BookList
