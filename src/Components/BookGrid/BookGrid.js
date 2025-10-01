import React from 'react';
import './BookItem.css';

const BookItem = ({ title, cover }) => {
  return (
    <div className="book-item">
      {cover ? (
        <img src={cover} alt={`Cover of ${title}`} className="book-cover" />
      ) : (
        <div className="no-cover">No Cover Available</div>
      )}
      <h3 className="book-title">{title}</h3>
    </div>
  );
};

export default BookItem;
