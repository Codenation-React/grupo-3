// @format
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v1 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { productOperations } from "../../state/ducks/product";

import Product from "../ProductCard";

import styles from "./styles.css";

const ProductsGrid = props => {
  const { products, fetchList } = props;

  useEffect(() => {
    if (products.length === 0) {
      fetchList();
    }
  });

  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title">{products.length} items</div>

        <div className="products__grid">
          {products.map(product => (
            <Product className="products__box" key={uuid()} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.product.list,
});

const mapDispatchToProps = {
  fetchList: productOperations.fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);
