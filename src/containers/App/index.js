import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

import './App.css';

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDrawerClick = () => {
    setIsDrawerVisible((prevState) => !prevState);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <Router>
      <div className={`app ${isDrawerVisible ? 'drawer-is-visible' : ''}`}>
        <Navbar drawerClick={handleDrawerClick} />
        <Routes />
        {isDrawerVisible && <Search closeDrawer={handleCloseDrawer} />}
      </div>
    </Router>
  );
};

export default App;
