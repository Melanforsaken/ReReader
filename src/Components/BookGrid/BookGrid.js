import React from 'react';
import BookItem from '../BookItem/BookItem';
import './BookGrid.css';

const BookGrid = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookItem key={book.id} title={book.title} cover={book.cover} />
      ))}
    </div>
  );
};

export default BookGrid;