import React, { useState } from 'react';
import Epub from 'epubjs';

const BookReader = ({ book }) => {
  const [epub, setEpub] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [content, setContent] = useState('');

  // Load the EPUB when the book changes
  React.useEffect(() => {
    if (book) {
      const blobUrl = URL.createObjectURL(book.file);
      const newEpub = Epub(blobUrl);
      setEpub(newEpub);
      
      newEpub.open().then(() => {
        newEpub.getDocuments().then((docs) => {
          setTotalPages(docs.length);
          loadPage(0); // Load the first page
        });
      });
    }
  }, [book]);

  const loadPage = (index) => {
    if (epub) {
      epub.goto(index).then((c) => {
        setContent(c);
        setCurrentPage(index);
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