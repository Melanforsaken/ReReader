import React, { useState } from 'react';
import Epub from 'epubjs';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import BookGrid from './Components/BookGrid/BookGrid';
import BookReader from './Components/BookReader/BookReader';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

const handleFileUpload = async (event) => {
    const files = event.target.files;

    const newBooksPromises = Array.from(files).map(async (file, index) => {
        if (file.type !== "application/epub+zip") {
            console.error("Selected file is not a valid EPUB file.");
            return {
                id: books.length + index + 1,
                title: file.name,
                cover: "",
                file: null 
            };
        }
        
        try {
            const blobUrl = URL.createObjectURL(file);
            const epub = new Epub(blobUrl);
            await epub.open();
            
            let metadata;
            try {
                metadata = await epub.getMetadata();
            } catch (err) {
                console.error("Error retrieving metadata:", err);
                return null; 
            }

            let coverUrl = "";
            if (metadata.cover || metadata["cover-image"]) {
                const cover = metadata.cover || metadata["cover-image"];
                const image = await epub.getImage(cover);
                coverUrl = URL.createObjectURL(image);
            }

            URL.revokeObjectURL(blobUrl);

            return {
                id: books.length + index + 1,
                title: metadata.title || file.name,
                cover: coverUrl,
                file: file 
            };
        } catch (err) {
            console.error("Error processing EPUB:", err);
            return {
                id: books.length + index + 1,
                title: file.name,
                cover: "",
                file: null 
            };
        }
    });

    const newBooks = await Promise.all(newBooksPromises);
    setBooks((prevBooks) => [...prevBooks, ...newBooks]);
};

    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className="app">
            <Header />
            <SearchBar onFileUpload={handleFileUpload} books={books} />
            {selectedBook ? (
                <BookReader book={selectedBook} />
            ) : (
                <BookGrid books={books} onBookSelect={handleBookSelect} />
            )}
        </div>
    );
};

export default App;