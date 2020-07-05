// @format
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MiniProduct from "../MiniProduct";
import { v1 as uuid } from "uuid";
import { getProductByName } from "../../../state/ducks/product/selectors";
import useDebounce from "../../../hooks/useDebounce";

import "./styles.css";

export default function SideBar({ closeDrawer }) {
  const products = useSelector((state) => state.products);
  const [searchText, setSearchText] = useState("");
  const [listedProducts, setListedProducts] = useState([]);

  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    function handleProductByName() {
      const filteredProducts = getProductByName(products, searchText);
      setListedProducts(filteredProducts);
    }

    if (debouncedSearchTerm) {
      handleProductByName();
    }
  }, [debouncedSearchTerm, searchText, products]);

  return (
    <div className={`sidebar drawer-visible`}>
      <header className="sidebar__header">
        <div className="sidebar__header__content">
          <span className="sidebar__exit" onClick={closeDrawer}>
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="sidebar__header__title">Buscar produtos</span>
        </div>
      </header>

      <div className="sidebar__search">
        <input
          className="sidebar__search__input"
          type="text"
          name="text-search"
          placeholder="Buscar por produto..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="sidebar__product-list">
        {listedProducts.length > 0 ? (
          listedProducts.map((product) => (
            <Link key={uuid()} to={`/produto/${product.style}`}>
              <MiniProduct product={product} />
            </Link>
          ))
        ) : (
          <span className="sidebar__empty">Nenhum item encontrado :\</span>
        )}
      </div>
    </div>
  );
}
