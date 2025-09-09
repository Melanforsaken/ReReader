import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import DocumentList from './components/DocumentList/DocumentList';
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
