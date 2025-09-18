import React from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import BookGrid from './Components/BookGrid/BookGrid'; 
import './App.css';

const App = () => {
    const books = [
        { id: 1, title: 'Book One', cover: 'link_to_cover_image_1' },
        { id: 2, title: 'Book Two', cover: 'link_to_cover_image_2' },
        { id: 3, title: 'Book Three', cover: 'link_to_cover_image_3' },
    ];

    return (
        <div className="app">
            <Header />
            <SearchBar />
            <BookGrid books={books} /> {}
        </div>
    );
};

export default App;
