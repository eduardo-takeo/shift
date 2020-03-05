import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <div className="date">{getDate()}</div>
            <div className="logo">Shift.</div>
            <div className="categories">
                <ul>
                    <Link to="/business">
                        <li className="categories-item">Business</li>
                    </Link>
                    <Link to="/entertainment">
                        <li className="categories-item">Entertainment</li>
                    </Link> 
                    <Link to="/health">
                        <li className="categories-item">Health</li>
                    </Link> 
                    <Link to="/science">
                        <li className="categories-item">Science</li>
                    </Link> 
                    <Link to="/technology">
                        <li className="categories-item">Technology</li>
                    </Link> 
                    <Link to="/sports">
                        <li className="categories-item">Sports</li>
                    </Link>                 
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