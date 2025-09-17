import React from 'react';
import './BookItem.css';

const BookItem = ({ title, cover }) => {
  return (
    <div className="book-item">
      <img src={cover} alt={title} style={{ width: '100%', height: 'auto' }} />
      <h3>{title}</h3>
    </div>
  );
};

export default BookItem;