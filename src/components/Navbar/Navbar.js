import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/shop-logo.svg';
import { ReactComponent as BagSvg } from '../../assets/img/shop-bag.svg';
import { ReactComponent as SearchSvg } from '../../assets/img/search.svg';

import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar" data-testid="navbar">
          <Link to="/" className="navbar__logo">
            <LogoSvg />
          </Link>

          <div className="navbar__group">
            <button type="button" className="nav__group__item">
              <SearchSvg />
            </button>

            <button type="button" className="nav__group__item">
              <BagSvg />
              <span className="badge">
                <sup className="badge__counter">0</sup>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
