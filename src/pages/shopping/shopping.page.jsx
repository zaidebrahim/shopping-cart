import React, { useState, useEffect } from "react";
import "./shopping.styles.css";

import Product from "../../components/product/product.component";

import Snackbar from "../../components/snackbar/snackbar.component";

import items from "../../constants/items.json";

const defaultCartData = {
  price: 0,
  quantity: 0,
  cart: [],
};

const Shopping = (props) => {
  const [shopData, setShopData] = useState(items.items);
  const [cartData, setCartData] = useState(defaultCartData);
  const [show, setShow] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  // useEffect(() => {
  //   fetch("https://run.mocky.io/v3/79f1bd01-267e-42c5-8bea-6c5ba2ffe789")
  //     .then((res) => {
  //       console.log(res.data);
  //       res.json();
  //     })
  //     .then(
  //       (result) => {
  //         // setShopData(result.items);
  //         console.log(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         // this.setState({
  //         //   isLoaded: true,
  //         //   error,
  //         // });
  //       }
  //     );
  // }, []);

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
        {shopData.map((item) => {
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
