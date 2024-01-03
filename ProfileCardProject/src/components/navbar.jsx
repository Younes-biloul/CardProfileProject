import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#gallery">Gallery</a>
                <a href="#search">Search</a>
            </div>
        </div>
    );
};

export default NavBar;