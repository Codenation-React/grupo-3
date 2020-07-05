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
    setIsSearchDrawerVisible((prevState) => !prevState);
  };

  const handleCloseSearchDrawer = () => {
    setIsSearchDrawerVisible(false);
  };

  const handleCartDrawerClick = () => {
    setIsCartDrawerVisible((prevState) => !prevState);
  };

  const handleCloseCartDrawer = () => {
    setIsCartDrawerVisible(false);
  };

  return (
    <Router>
      <div
        className={`app ${isSearchDrawerVisible ? 'drawer-is-visible' : ''}`}
      >
        <Navbar
          searchDrawerClick={handleSearchDrawerClick}
          cartDrawerClick={handleCartDrawerClick}
        />
        <Routes />
        {isSearchDrawerVisible && (
          <Search closeDrawer={handleCloseSearchDrawer} />
        )}
        {isCartDrawerVisible && <Cart closeDrawer={handleCloseCartDrawer} />}
      </div>
    </Router>
  );
};

export default App;
