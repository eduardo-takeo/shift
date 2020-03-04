import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';

function App() {
  return (
    <Fragment>
      <Header />

      <div className="news-block">
        <div className="big">
          <News articleNumber="0" />
        </div>
        <div className="small">
          <News articleNumber="2" />
        </div>
        <div className="full">
          <News articleNumber="3" />
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
