// @format
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from "uuid";

import Card from "../Card";
import { fetchProdutcs } from "../../../state/ducks/product/operations";

import "./styles.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProdutcs());
    }
  }, [dispatch, products]);

  return (
    <div className="container">
      <section className="products">
        <header className="products__quantity">{products.length} items</header>

        <div className="products__grid">
          {products.map(product => (
            <Card className="products__box" key={uuid()} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Catalog;
