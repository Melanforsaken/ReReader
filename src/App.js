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
        { id: 4, title: 'Book Four', cover: 'link_to_cover_image_4' },
        { id: 5, title: 'Book Five', cover: 'link_to_cover_image_5' },
        { id: 6, title: 'Book Six', cover: 'link_to_cover_image_6' },
        { id: 7, title: 'Book Seven', cover: 'link_to_cover_image_7' },
        { id: 8, title: 'Book Eight', cover: 'link_to_cover_image_8' },
        { id: 9, title: 'Book Nine', cover: 'link_to_cover_image_9' },
        { id: 10, title: 'Book Ten', cover: 'link_to_cover_image_10' },
        { id: 11, title: 'Book Eleven', cover: 'link_to_cover_image_11' },
        { id: 12, title: 'Book Twelve', cover: 'link_to_cover_image_12' },
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
