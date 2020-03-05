import React from 'react';
import News from '../News/News';
import './Body.css';

function Body() {
    return(
        <div className="news-block">
            <div className="big">
                <News articleNumber="0" />
            </div>
            <div className="small">
                <News articleNumber="2" />
                <News articleNumber="3" />
            </div>
            <div className="small">
                <News articleNumber="4" />
                <News articleNumber="5" />
            </div>
            <div className="full">
                <News articleNumber="7" />
            </div>
            <div className="medium">
                <News articleNumber="8" />
            </div>
            <div className="medium">
                <News articleNumber="9" />
            </div>
            <div className="small">
                <News articleNumber="11" />
            </div>        
        </div>
    )
}

export default Body;