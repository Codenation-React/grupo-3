import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCartQuantity } from '../../state/ducks/cart/selectors';

import { ReactComponent as LogoSvg } from '../../assets/img/shop-logo.svg';
import { ReactComponent as BagSvg } from '../../assets/img/shop-bag.svg';
import { ReactComponent as SearchSvg } from '../../assets/img/search.svg';
import './Navbar.css';

const Navbar = ({ searchDrawerClick, cartDrawerClick }) => {
  const cartQuantity = useSelector(getCartQuantity);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar" data-testid="navbar">
          <Link to="/" className="navbar__logo">
            <LogoSvg />
          </Link>

          <div className="navbar__group">
            <button
              type="button"
              className="nav__group__item"
              onClick={searchDrawerClick}
            >
              <SearchSvg />
            </button>

            <button onClick={cartDrawerClick}type="button" className="nav__group__item">
              <BagSvg />
              <span className="badge">
                <sup className="badge__counter">{cartQuantity}</sup>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
