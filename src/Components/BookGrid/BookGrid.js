import React from 'react';
import BookItem from '../BookItem/BookItem';
import './BookGrid.css';

const BookGrid = ({ books, onBookSelect }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookItem 
          key={book.id} 
          title={book.title} 
          cover={book.cover} 
          onSelect={() => onBookSelect(book)} // Pass the book to the onSelect handler
        />
      ))}
    </div>
  );
};

export default BookGrid;