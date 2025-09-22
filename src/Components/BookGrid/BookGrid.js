import React from 'react';
import BookItem from '../BookItem/BookItem';
import './BookGrid.css';

const BookGrid = ({ books }) => {
    return (
        <div className="book-grid">
            {books.map(book => (
                <div key={book.id} className="book-item">
                    {book.cover ? (
                        <img src={book.cover} alt={book.title} />
                    ) : (
                        <div className="book-title">{book.title}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BookGrid;