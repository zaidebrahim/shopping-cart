import React, { useState } from "react";
import "./shopping.styles.css";

import Product from "../components/product/product.component";

const json = [
  {
    id: 1,
    brand_name: "Nutella",
    product_name: "Chocolate Cream Nutella",
    quantity: 12,
    price: 333,
    mrp: 370,
    image_url:
      "https://5.imimg.com/data5/XL/EO/MY-4352514/nutella-hazelnut-500x500.jpg",
    offer_text: "10% OFF",
  },
  {
    id: 2,
    brand_name: "Dairy Milk",
    product_name: "3 in 1 combo",
    quantity: 12,
    price: 450,
    mrp: 500,
    image_url:
      "https://jkflorist.com/wp-content/uploads/2017/05/cadbury-dairy-milk-silk.jpg",
    offer_text: "10% OFF",
  },
  {
    id: 3,
    brand_name: "Lays",
    product_name: "Cream and Onion flavour",
    quantity: 10,
    price: 18.6,
    mrp: 20,
    image_url:
      "https://www.shopnow.org.in/wp-content/uploads/2020/05/Lays-Potato-Chips-2.jpg",
    offer_text: "7% OFF",
  },
  {
    id: 4,
    brand_name: "Lays",
    product_name: "Spanish Tomato Tango",
    quantity: 10,
    price: 18.6,
    mrp: 20,
    image_url:
      "https://5.imimg.com/data5/UK/LQ/WR/SELLER-82456434/potato-chips-500x500.jpg",
    offer_text: "7% OFF",
  },
  {
    id: 5,
    brand_name: "Lays",
    product_name: "Classic Salted",
    quantity: 10,
    price: 18.6,
    mrp: 20,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/71NxgZEEIcL._SX569_.jpg",
    offer_text: "7% OFF",
  },
  {
    id: 6,
    brand_name: "Bingo Mad Angles",
    product_name: "Achaari Masti",
    quantity: 30,
    price: 9,
    mrp: 10,
    image_url:
      "https://3.imimg.com/data3/YX/AD/MY-8642076/trangle-chips-bingo-500x500.gif",
    offer_text: "10% OFF",
  },
  {
    id: 7,
    brand_name: "Sprite",
    product_name: "Sprite (400ml)",
    quantity: 20,
    price: 35.2,
    mrp: 40,
    image_url:
      "https://5.imimg.com/data5/UV/AN/BW/SELLER-59097240/2l-sprite-cold-drink-500x500.jpg",
    offer_text: "12% OFF",
  },
  {
    id: 8,
    brand_name: "Mirinda",
    product_name: "Mirinda (400ml)",
    quantity: 20,
    price: 35.2,
    mrp: 40,
    image_url:
      "https://5.imimg.com/data5/BF/AZ/DG/SELLER-49520187/mirinda-cold-drink-500x500.jpeg",
    offer_text: "12% OFF",
  },
  {
    id: 9,
    brand_name: "Mountain Dew",
    product_name: "Mountain Dew (400ml)",
    quantity: 20,
    price: 35.2,
    mrp: 40,
    image_url:
      "https://5.imimg.com/data5/DO/JA/XO/SELLER-49520187/600-ml-mountain-dew-cold-drink-500x500.jpg",
    offer_text: "12% OFF",
  },
  {
    id: 10,
    brand_name: "Toblerone",
    product_name: "Milk Chocolate",
    quantity: 10,
    price: 108,
    mrp: 120,
    image_url:
      "https://5.imimg.com/data5/VI/RA/CJ/SELLER-82981234/tobblerone-chocolate-500x500.jpg",
    offer_text: "10% OFF",
  },
];

const Shopping = (props) => {
  const [shopData, setShopData] = useState(json);
  const [show, setShow] = useState(false);
  return (
    <div className="shopping-page">
      <div className="shopping-container" onClick={() => setShow(!show)}>
        {shopData.map((item) => {
          return (
            <Product
              brandName={item.brand_name}
              productName={item.product_name}
              quantity={item.quantity}
              mrp={item.mrp}
              price={item.price}
              imageUrl={item.image_url}
              offerText={item.offer_text}
            />
          );
        })}
      </div>
      <div className={`sticky-bottom ${show && "show"}`}>
        <div className="sticky-bottom-container">
          <div className="price-qty">
            <div>Qty 0</div>
            <div>Total 0</div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
