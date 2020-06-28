// @format
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../ProductImage";

import "./styles.css";

const ProductCard = props => {
  const { product, showLink = false } = props;

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
        <Link to={`/produtos/${product.style}`}>{componentBody}</Link>
      ) : (
        componentBody
      )}
    </div>
  );
};

export default ProductCard;
