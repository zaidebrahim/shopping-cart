import React from "react";
import "./product.styles.css";

const Product = (props) => {
  const {
    brandName,
    productName,
    quantity,
    mrp,
    price,
    imageUrl,
    offerText,
  } = props;
  return (
    <div className="product-container">
      <div className="left-container">
        <div className="image-container">
          <img className="product-image" src={imageUrl} alt={brandName} />
        </div>
        <div className="offer-text">{offerText}</div>
      </div>
      <div className="right-container">
        <div className="brand-name">{brandName}</div>
        <div>{productName}</div>
        <div>{quantity}</div>
        <div>MRP {mrp}</div>
        <div className="price">₹ {price}</div>
        <div className="bottom-container">
          <button>Add Cart</button>
          <div className="add-qty-container">
            <button>+</button>
            <div className="qty">0</div>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
