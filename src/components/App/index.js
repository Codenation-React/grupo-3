// @format
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../../routes";
import Navbar from "../../components/Navbar";
import Search from "../../components/Drawers/Search";
import Cart from "../../components/Drawers/Cart";

import "./App.css";

const App = () => {
  const [isSearchDrawerVisible, setIsSearchDrawerVisible] = useState(false);
  const [isCartDrawerVisible, setIsCartDrawerVisible] = useState(false);

  const handleSearchDrawerClick = () => {
    setIsSearchDrawerVisible(prevState => !prevState);
  };

  const handleCartDrawerClick = () => {
    setIsCartDrawerVisible(prevState => !prevState);
  };

  return (
    <Router>
      <div
        className={`app ${isSearchDrawerVisible ? "drawer-is-visible" : ""}`}
      >
        <Navbar
          searchDrawerClick={handleSearchDrawerClick}
          cartDrawerClick={handleCartDrawerClick}
        />
        <Routes />
        {isSearchDrawerVisible && (
          <Search closeDrawer={handleSearchDrawerClick} />
        )}
        {isCartDrawerVisible && <Cart closeDrawer={handleCartDrawerClick} />}
      </div>
    </Router>
  );
};

export default App;
