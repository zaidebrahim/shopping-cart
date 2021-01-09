import React, { useState, useEffect } from "react";
import "./product.styles.css";

const Product = (props) => {
  const {
    id,
    brandName,
    productName,
    quantity,
    mrp,
    price,
    imageUrl,
    offerText,
    onAddCart,
    checkedOut,
  } = props;

  useEffect(() => {
    if (checkedOut) {
      setQty(0);
    }
  }, [checkedOut]);

  const [qty, setQty] = useState(0);

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
          <button
            onClick={() => {
              if (qty === 0) {
                onAddCart(id, qty + 1, price);
                setQty(qty + 1);
              } else {
                onAddCart(id, 0, price);
                setQty(0);
              }
            }}
          >
            {qty !== 0 ? "Remove" : "Add Cart"}
          </button>
          <div className="add-qty-container">
            <button
              onClick={() => {
                if (qty !== 0) {
                  onAddCart(id, qty - 1, price);
                  setQty(qty - 1);
                }
              }}
            >
              -
            </button>
            <div className="qty">{qty}</div>
            <button
              onClick={() => {
                if (qty !== quantity) {
                  onAddCart(id, qty + 1, price);
                  setQty(qty + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
