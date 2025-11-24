import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ title, price, discount }) => {
  const numericPrice = Number(price) || 0;
  const numericDiscount = Number(discount) || 0;
  const finalPrice = numericPrice - numericDiscount;

  return (
    <article className="product-card">
      <h3 className="product-card__title">{title}</h3>

      <div className="product-card__prices">
        <div className="product-card__price">
          <span className="label">Price</span>
          <span className="value">₹{numericPrice.toFixed(2)}</span>
        </div>

        <div className="product-card__discount">
          <span className="label">Discount</span>
          <span className="value">₹{numericDiscount.toFixed(2)}</span>
        </div>
      </div>

      <div className="product-card__final">
        <span className="label">Final Price</span>
        <span className="value">₹{finalPrice.toFixed(2)}</span>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductCard;
