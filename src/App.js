import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DocumentList from './components/DocumentList';
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
