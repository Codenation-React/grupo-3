// @format
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { v1 as uuid } from "uuid";
import { productOperations } from "../../../state/ducks/product";

import Card from "../Card";

import "./styles.css";

const Catalog = (props) => {
  const { products, fetchList } = props;

  useEffect(() => {
    if (products.length === 0) {
      fetchList();
    }
  });

  return (
    <div className="container">
      <section className="products">
        <header className="products__quantity">{products.length} items</header>

        <div className="products__grid">
          {products.map((product) => (
            <Card className="products__box" key={uuid()} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.list,
});

const mapDispatchToProps = {
  fetchList: productOperations.fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
