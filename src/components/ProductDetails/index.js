// @format
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../ProductCard";
import { productOperations } from "../../state/ducks/product";
import { withRouter } from "react-router";

const ProductDetails = props => {
  const { match, fetchList, product, products } = props;

  useEffect(() => {
    if (products.length === 0 || products === undefined) {
      fetchList();
    }
  }, [products, fetchList]);

  return (
    <div className="product__details--container">
      <ProductCard product={product} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  products: state.product.list,
  product: state.product.list.filter(product => {
    return product.style === ownProps.match.params.style;
  })[0],
});

const mapDispatchToProps = {
  fetchList: productOperations.fetchList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProductDetails));
