import React, { useState } from 'react';
import Epub from 'epubjs';
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
            const title = file.name;

            // Create a Blob URL for the EPUB file
            const blobUrl = URL.createObjectURL(file);
            const epub = Epub(blobUrl);

            // Create a Promise to read the EPUB and extract the cover image
            return epub.getMetadata().then(metadata => {
                const cover = metadata.cover; // This gets the cover image filename
                return epub.getImage(cover).then(image => {
                    const coverUrl = URL.createObjectURL(image); // Create a URL for the cover image
                    return { id: books.length + index + 1, title, cover: coverUrl }; // Return new book object
                });
            });
        });

        // Wait for all promises to resolve
        Promise.all(newBooks).then(resolvedBooks => {
            setBooks([...books, ...resolvedBooks]); // Add new books to the existing state
        });
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