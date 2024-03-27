// CartPage.js
import React from 'react';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <img src={item.product.image} alt={item.product.name} />
          <p>{item.product.name}</p>
          <p>Quantity: {item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
