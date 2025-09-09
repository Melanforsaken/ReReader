import React from 'react';
import './DocumentList.css';

const DocumentList = () => {
    const dummyData = [
        { id: 1, title: 'Document 1' },
        { id: 2, title: 'Document 2' },
        { id: 3, title: 'Document 3' },
       
    ];

    return (
        <div className="document-list">
            {dummyData.map(doc => (
                <div key={doc.id} className="document-item">
                    {doc.title}
                </div>
            ))}
        </div>
    );
};

export default DocumentList;