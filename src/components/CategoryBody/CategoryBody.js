import React from 'react';
import CategoryNews from '../CategoryNews/CategoryNews';
import './CategoryBody.css';

function Body({ category }) {
    return(
        <div className="news-block">
            <CategoryNews category={category} articleNumber='0' />
        </div>
    )
}

export default Body;