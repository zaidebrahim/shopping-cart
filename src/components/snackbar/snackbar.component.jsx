import React, { useState } from "react";
import "./snackbar.styles.css";

import Modal from "../modal/modal.component";

const Snackbar = (props) => {
  const { show, quantity, price, setCheckedOut } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`snackbar ${!show && "show"}`}>
      <div className="snackbar-container">
        <div className="price-qty">
          <div>Quantity : {quantity}</div>
          <div>Total Price: ₹ {parseFloat(price).toFixed(2)}</div>
        </div>
        <button onClick={() => setShowModal(true)}>Checkout</button>
      </div>
      <Modal
        showModal={showModal}
        price={price}
        setShowModal={setShowModal}
        setCheckedOut={setCheckedOut}
      />
    </div>
  );
};

export default Snackbar;
