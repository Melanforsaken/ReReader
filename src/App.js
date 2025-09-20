import React, { useState } from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import BookGrid from './Components/BookGrid/BookGrid';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'Book One', cover: 'link_to_cover_image_1' },
        { id: 2, title: 'Book Two', cover: 'link_to_cover_image_2' },
        // ... (other books)
    ]);

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const files = event.target.files;
        const newBooks = Array.from(files).map((file, index) => {
            const title = file.name; // Set the title as the file name
            const cover = URL.createObjectURL(file); // Create a URL for the uploaded file (you can modify this)
            return { id: books.length + index + 1, title, cover }; // Generate new book object
        });
        setBooks([...books, ...newBooks]); // Add new books to the existing state
    };

    return (
        <div className="app">
            <Header />
            <SearchBar onFileUpload={handleFileUpload} />
            <BookGrid books={books} />
        </div>
    );
};

export default App;