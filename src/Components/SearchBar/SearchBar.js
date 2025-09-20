import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onFileUpload }) => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search files..." />
            <div className="icon-container">
                <button className="icon-button" title="Filter">
                    <span>🔄</span>
                </button>
                <button className="icon-button" title="Settings">
                    <span>⚙️</span>
                </button>
                <label htmlFor="file-upload" className="icon-button" title="Add">
                    <span>➕</span>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".epub, .pdf"
                        onChange={onFileUpload}
                        style={{ display: 'none' }} 
                    />
                </label>
            </div>
        </div>
    );
};

export default SearchBar;