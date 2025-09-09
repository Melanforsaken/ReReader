import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search files..." />
            <div className="icon-container">
                <span>🔍</span>
                <span>📁</span>
                <span>⭐</span>
            </div>
        </div>
    );
};

export default SearchBar;