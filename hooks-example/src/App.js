import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

axios.defaults.baseURL = 
  'https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
