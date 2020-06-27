import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes';
import Navbar from '../../components/Navbar';

import './App.css';

const App = () => {
  return (
    <Router>
      <div data-testid="app">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
