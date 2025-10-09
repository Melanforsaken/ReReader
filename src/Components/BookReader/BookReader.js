import React, { useEffect, useState } from 'react';
import Epub from 'epubjs';
import './BookReader.css';

const BookReader = ({ book }) => {
    const [epub, setEpub] = useState(null);
    const [content, setContent] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (book && book.file) { 
            const blobUrl = URL.createObjectURL(book.file); 
            const newEpub = Epub(blobUrl);
            setEpub(newEpub);
            
            newEpub.open().then(() => {
                newEpub.getDocuments().then((docs) => {
                    setTotalPages(docs.length);
                    loadPage(0); // Load the first page
                });
            }).catch(err => {
                console.error("Failed to open EPUB:", err);
            });

            // Clean up the blob URL to avoid memory leaks
            return () => {
                URL.revokeObjectURL(blobUrl);
            };
        }
    }, [book]);

    const loadPage = (index) => {
        if (epub) {
            epub.goto(index).then((c) => {
                setContent(c);
                setCurrentPage(index);
            }).catch(err => {
                console.error("Failed to load page:", err);
            });
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            loadPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            loadPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="reader-content" dangerouslySetInnerHTML={{ __html: content }} />
            <div className="navigation">
                <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
                <button onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
            </div>
        </div>
    );
};

export default BookReader;