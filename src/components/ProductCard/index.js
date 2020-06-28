// @format
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductImage from "../ProductImage";
import { productOperations } from "../../state/ducks/product";

import "./styles.css";

const ProductCard = props => {
  const { products, product, showLink = false, fetchList } = props;

  useEffect(() => {
    if (products.length === 0 || products === undefined) {
      fetchList();
    }
  }, [products, fetchList]);

  console.log(props);

  const componentBody = (
    <>
      <ProductImage
        image={product.image}
        onSale={product.on_sale}
        discount={product.discount_percentage}
        altAttr={product.name}
      />
      <h3 className="product__name">{product.name}</h3>
      <div className="product__pricing">
        {product.on_sale && (
          <span className="product__price product__price--from">
            {product.regular_price}
          </span>
        )}
        <span className="product__price product__price--to">
          {product.actual_price}
        </span>
      </div>
    </>
  );

  return (
    <div className="product__card" key={product.style}>
      {showLink ? (
        <Link to={`/produto/${product.style}`}>{componentBody}</Link>
      ) : (
        componentBody
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const products = state.product.list;

  if (ownProps?.match?.params?.style) {
    return {
      products: products,
      product: products.filter(product => {
        return product.style === ownProps.match.params.style;
      })[0],
    };
  } else {
    return {
      products: products,
    };
  }
};

const mapDispatchToProps = {
  fetchList: productOperations.fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
