import React from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import DocumentList from './Components/DocumentList/DocumentList';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <SearchBar />
            <DocumentList />
        </div>
    );
};

export default App;
