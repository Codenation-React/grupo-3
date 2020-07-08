// @format
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { v1 as uuid } from "uuid";

import Card from "../Card";
import Controls from "../Detail-Controls";

import { getProduct } from "../../../state/ducks/product/selectors";
import { fetchProdutcs } from "../../../state/ducks/product/operations";

import "./styles.css";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(({ products }) =>
    getProduct(products, params.code_color)
  );

  useEffect(() => {
    if (product === undefined) {
      dispatch(fetchProdutcs());
    }
  }, [dispatch, product]);

  return (
    <div className="product__detail">
      <Card
        className="products__box"
        key={uuid()}
        {...product}
        showPrices={false}
      />
      <Controls product={product} />
    </div>
  );
};

export default Details;
