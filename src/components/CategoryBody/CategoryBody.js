import React from 'react';
import CategoryNews from '../CategoryNews/CategoryNews';
import style from './CategoryBody.module.css';

function Body({ category }) {
    return (
        <div className={style.newsBlock}>
            <CategoryNews category={category} articleNumber='0' />
            <CategoryNews category={category} articleNumber='1' />
            <CategoryNews category={category} articleNumber='2' />
            <CategoryNews category={category} articleNumber='3' />
            <CategoryNews category={category} articleNumber='4' />
            <CategoryNews category={category} articleNumber='5' />
        </div>
    )
}

export default Body;