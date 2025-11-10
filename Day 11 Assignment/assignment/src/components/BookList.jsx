import React, { useState, useRef } from 'react'
import BookCard from './BookCard'
import AuthorInfo from './AuthorInfo'
import './BookList.css'

function BookList() {
  const [selectedAuthor, setSelectedAuthor] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid')   // NEW
  const searchRef = useRef()

  const books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 299 },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 399 },
    { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 350 },
    { id: 4, title: 'The Castle', author: 'Franz Kafka', price: 250 },
  ]

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleFocus = () => searchRef.current.focus()

  // Toggle author details (click same author hides)
  const handleViewAuthor = (author) => {
    setSelectedAuthor(prev => (prev === author ? null : author))
  }

  return (
    <div className="book-list-container">
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

      {/*  View Mode Buttons */}
      <div className="view-buttons mb-3">
        <button
          className={`btn me-2 ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setViewMode('grid')}
        >
          Grid View
        </button>
        <button
          className={`btn ${viewMode === 'card' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setViewMode('card')}
        >
          Card View
        </button>
      </div>

      {/*  Grid or Card layout */}
      <div className={viewMode === 'grid' ? 'book-grid' : 'book-list'}>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            onViewAuthor={handleViewAuthor}
          />
        ))}
      </div>

      {/*  Author details appear below */}
      {selectedAuthor && <AuthorInfo author={selectedAuthor} />}
    </div>
  )
}

export default BookList
