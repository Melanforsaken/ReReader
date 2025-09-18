import React from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import BookGrid from './Components/BookGrid/BookGrid'; // Fixed the import path
import './App.css';

const App = () => {
    // Sample book data
    const books = [
        { id: 1, title: 'Book One', cover: 'link_to_cover_image_1' },
        { id: 2, title: 'Book Two', cover: 'link_to_cover_image_2' },
        { id: 3, title: 'Book Three', cover: 'link_to_cover_image_3' },
        // Add more books as needed
    ];

    return (
        <div className="app">
            <Header />
            <SearchBar />
            <BookGrid books={books} /> {/* Replaced DocumentList with BookGrid */}
        </div>
    );
};

export default App;
