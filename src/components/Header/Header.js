import React from 'react';
import './Header.css';

function Header() {
    return(
        <header>
            <div className="date">{getDate()}</div>
            <div className="logo">*insert dope logo here*</div>
            <div className="categories">
                <ul>
                    <a href="#" className="categories-item">General</a>
                    <a href="#" className="categories-item">Business</a>
                    <a href="#" className="categories-item">Entertainment</a>
                    <a href="#" className="categories-item">Health</a>
                    <a href="#" className="categories-item">Science</a>
                    <a href="#" className="categories-item">Technology</a>
                    <a href="#" className="categories-item">Sports</a>
                </ul>
            </div>
        </header>
    )
}

function getDate() {
    const dateObj = new Date();  
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };  

    return (dateObj.toLocaleDateString("en-US", options)); 
}

export default Header;