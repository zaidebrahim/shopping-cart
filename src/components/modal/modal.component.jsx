import React from "react";
import "./modal.styles.css";

const Modal = (props) => {
  const { showModal, price, setShowModal, setCheckedOut } = props;
  return (
    <div className={`modal ${!showModal && "hide"}`}>
      <div className="modal-container">
        <div className="price">
          Total price: ₹{parseFloat(price).toFixed(2)}
        </div>
        <div className="success">Transaction Successful.. :)</div>
        <button
          onClick={() => {
            setShowModal(false);
            setCheckedOut(true);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
