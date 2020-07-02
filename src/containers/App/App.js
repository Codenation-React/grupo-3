import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../../routes";
import Navbar from "../../components/Navbar";
import SearchSidebar from "../../components/SearchSidebar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div data-testid="app">
        <div className="app__content">
          <Navbar />
          <Routes />
        </div>
        <SearchSidebar />
      </div>
    </Router>
  );
};

export default App;
