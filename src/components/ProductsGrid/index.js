import React, { useEffect } from "react";
import { v1 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import Product from "../ProductCard";

import styles from "./styles.css"

const ProductsGrid = () => {
  const data = {
    products: [
      {
        image: 'https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912',
        name: 'teste name',
        on_sale: 'a',
        discount_percentage: 0.2,
        regular_price: 1100,
        actual_price: 3222,
        style: '',
        code_color: 's',
      },
    ],
  };

  return (
    <section className="products">
      {data.loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="app__container">
          <div className="header__title">{data.products.length} items</div>

          <div className="products__grid">
            {data.products.map(product => (
              <Product className="products__box" key={uuid()} {...product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsGrid;
