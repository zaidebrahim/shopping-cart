import React, { useState, useEffect } from "react";
import "./shopping.styles.css";

import Product from "../../components/product/product.component";

import Snackbar from "../../components/snackbar/snackbar.component";

const defaultCartData = {
  price: 0,
  quantity: 0,
  cart: [],
};

const Shopping = (props) => {
  const [shopData, setShopData] = useState([]);
  const [cartData, setCartData] = useState(defaultCartData);
  const [show, setShow] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    try {
      fetch("items.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (data) => {
            setShopData(data.items);
            console.log("Printing json Data: ", data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log("CheckedOut: ", checkedOut);
    if (checkedOut) {
      setCartData(defaultCartData);
      setCheckedOut(false);
    }
  }, [checkedOut]);

  useEffect(() => {
    if (cartData.cart.length !== 0) {
      setShow(true);
      calculatePriceQty();
    } else {
      setShow(false);
    }
  }, [cartData.cart, cartData.cart.length]);

  const calculatePriceQty = () => {
    var sumPrice = 0,
      sumQty = 0;
    cartData.cart.map((item) => {
      sumPrice += item.quantity * item.price;
      sumQty += item.quantity;
    });
    setCartData({ ...cartData, price: sumPrice, quantity: sumQty });
  };

  const deleteItem = (itemId) => {
    var updateArray = [...cartData.cart];
    for (var i = 0; i < updateArray.length; i++) {
      if (updateArray[i].item_id == itemId) {
        updateArray.splice(i, 1);
      }
    }
    setCartData({ ...cartData, cart: updateArray });
  };

  const onAddCart = (itemId, quantity, price) => {
    if (
      cartData.cart &&
      cartData.cart.find((item) => item.item_id === itemId)
    ) {
      if (quantity === 0) {
        deleteItem(itemId);
      } else {
        const updatedItems = cartData.cart.map((item) => {
          if (item.item_id === itemId) {
            item.quantity = quantity;
          }
          return item;
        });
        setCartData({ ...cartData, cart: updatedItems });
      }
    } else {
      const data = {
        item_id: itemId,
        quantity: quantity,
        price: price,
      };
      setCartData({ ...cartData, cart: [...cartData.cart, data] });
    }
  };

  return (
    <div className="shopping-page">
      <div className="shopping-container">
        {shopData.length !== 0 &&
          shopData.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                brandName={item.brand_name}
                productName={item.product_name}
                quantity={item.quantity}
                mrp={item.mrp}
                price={item.price}
                imageUrl={item.image_url}
                offerText={item.offer_text}
                onAddCart={onAddCart}
                checkedOut={checkedOut}
              />
            );
          })}
      </div>
      <Snackbar
        show={show}
        quantity={cartData.quantity}
        price={cartData.price}
        setCheckedOut={setCheckedOut}
      />
    </div>
  );
};

export default Shopping;
