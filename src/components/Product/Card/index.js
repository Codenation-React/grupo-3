import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../Image';

import './styles.css';

const ProductCard = ({ ...rest }) => {
  const {
    className,
    image,
    name,
    on_sale,
    discount_percentage,
    regular_price,
    actual_price,
    style,
    showPrices = true,
  } = { ...rest };

  return (
    <article className={className} key={style}>
      <Link to={`/produto/${style}`}>
        <ProductImage
          image={image}
          onSale={on_sale}
          discount={discount_percentage}
          altAttr={name}
        />

        {showPrices && (
          <>
            <h3 className="product__name">{name}</h3>
            <div className="product__pricing">
              {on_sale && (
                <span className="product__price product__price--from">
                  {regular_price}
                </span>
              )}
              <span className="product__price product__price--to">
                {actual_price}
              </span>
            </div>
          </>
        )}
      </Link>
    </article>
  );
};

export default ProductCard;
