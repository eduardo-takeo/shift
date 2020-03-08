import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Business from './pages/Business/Business';
import Entertainment from './pages/Entertainment/Entertainment';
import Health from './pages/Health/Health';
import Science from './pages/Science/Science';
import Technology from './pages/Technology/Technology';
import Sports from './pages/Sports/Sports';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/business" component={Business} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/health" component={Health} />
          <Route path="/science" component={Science} />
          <Route path="/technology" component={Technology} />
          <Route path="/sports" component={Sports} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;