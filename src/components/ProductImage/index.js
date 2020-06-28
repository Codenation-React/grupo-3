import React from "react";
import "./styles.css"

const ProductImage = ({ children, ...rest }) => {
  const { image, altAttr } = { ...rest };

  return (
    <div className="product__image--container">
    <figure className="product__image">
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
  </div>
  );
};

export default ProductImage;
