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
    ]);

 
   const handleFileUpload = (event) => {
    const files = event.target.files;
    const newBooks = Array.from(files).map((file, index) => {
        const title = file.name;
        const blobUrl = URL.createObjectURL(file);
        const epub = Epub(blobUrl);

        return epub.open().then(() => {
            return epub.getMetadata().then(metadata => {
                const cover = metadata.cover || metadata['cover-image']; 
                return epub.getImage(cover).then(image => {
                    const coverUrl = URL.createObjectURL(image);
                    return { id: books.length + index + 1, title, cover: coverUrl };
                });
            });
        });
    });

    Promise.all(newBooks).then(resolvedBooks => {
        setBooks([...books, ...resolvedBooks]);
    }).catch(error => {
        console.error("Error processing EPUB files:", error);
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