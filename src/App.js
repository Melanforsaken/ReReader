import React, { useState } from 'react';
import Epub from 'epubjs';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import BookGrid from './Components/BookGrid/BookGrid';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);

    const handleFileUpload = (event) => {
        const files = event.target.files;
        const newBooks = Array.from(files).map((file, index) => {
            const title = file.name;

            
            const blobUrl = URL.createObjectURL(file);
            const epub = Epub(blobUrl);

            
            return epub.getMetadata().then(metadata => {
                const cover = metadata.cover || ''; 
                return epub.getImage(cover).then(image => {
                    const coverUrl = URL.createObjectURL(image);
                    return { id: books.length + index + 1, title, cover: coverUrl };
                }).catch(error => {
                    console.error("Error retrieving cover image:", error);
                    return { id: books.length + index + 1, title, cover: null }; 
                });
            }).catch(error => {
                console.error("Error retrieving metadata:", error);
                return { id: books.length + index + 1, title, cover: null }; 
            });
        });

        Promise.all(newBooks).then(resolvedBooks => {
            setBooks([...books, ...resolvedBooks]);
        }).catch(error => {
            console.error("Error processing EPUB:", error);
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