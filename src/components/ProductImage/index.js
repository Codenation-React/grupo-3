import React from 'react';

const ProductImage = ({ children, ...rest }) => {
  const { image, altAttr, discount } = { ...rest };
  console.log(discount);

  return (
    <figure className="product__image">
      {discount && (
        <span
          style={{
            color: 'red',
          }}
        >
          {discount}
        </span>
      )}
      {image ? (
        <img src={image} alt={`Produto ${altAttr}`} title={altAttr} />
      ) : (
        <img
          src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
          alt={`Produto ${altAttr}`}
          title={altAttr}
          className="product__placeholder"
        />
      )}
    </figure>
  );
};

export default ProductImage;
