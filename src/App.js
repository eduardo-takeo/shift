import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Business from './pages/Business/Business';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path ="/" component={Home} />
          <Route path ="/" component={Business} />          
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;