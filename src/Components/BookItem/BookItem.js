import React from 'react';
import './BookItem.css';

const BookItem = ({ title, cover, onSelect }) => {
  return (
    <div className="book-item" onClick={onSelect} style={{ cursor: 'pointer' }}>
      {cover && <img src={cover} alt={title} style={{ width: '100%', height: 'auto' }} />}
      <h3 className="book-title">{title}</h3>
    </div>
  );
};

export default BookItem;