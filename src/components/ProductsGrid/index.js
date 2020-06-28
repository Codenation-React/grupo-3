// @format
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productOperations } from "../../state/ducks/product";
import { v1 as uuid } from "uuid";

import ProductCard from "../ProductCard";

import "./styles.css";

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
            <ProductCard
              className="products__box"
              key={uuid()}
              showLink={true}
              product={product}
            />
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
