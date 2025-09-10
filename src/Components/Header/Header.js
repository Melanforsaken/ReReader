import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">ReReader</div>
            <div className="functions">
                <button>Toggle Off</button>
                <button>Minimize</button>
                <button>Close</button>
            </div>
        </div>
    );
};

export default Header;