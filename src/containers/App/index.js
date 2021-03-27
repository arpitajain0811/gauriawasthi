import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../About';
import Awards from '../Awards';
import Publications from '../Publications';
import Contact from '../Contact';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/awards">
        <Awards />
      </Route>
      <Route exact path="/publications">
        <Publications />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
