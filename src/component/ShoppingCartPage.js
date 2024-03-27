import React, { useEffect, useState } from 'react';
import { useCart } from './CardContext';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';
import './CartNew.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ShoppingCartPage = () => {
  const { cart, setCart } = useCart();
  const [openAlert, setOpenAlert] = useState(false);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);

    return totalPrice;
  };

  useEffect(() => {
    console.log('Cart:', cart);
    console.log('Total Price:', calculateTotalPrice());

    // Show the alert if the cart is empty
    if (cart.length === 0) {
      setOpenAlert(true);
    }
  }, [cart]);

  
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const handleCheckout = () => {
    if (cart.length === 0) {
      setOpenAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div>
      <Nav />

      <div className="cart">
        <h2>
          Cart <ShoppingCartIcon />
        </h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img className="cartimage" src={item.image} alt={item.name} />
              {item.name} - ₹{item.price} - Quantity: {item.quantity}
              <div className="cartnew1">
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
          <p>Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
        </ul>
        <div className="cartnew2">
          TotalQuantity-{' '}
          <div className="cart-icon">
            {' '}
            <span>{totalQuantity}</span>{' '}
          </div>
          <Link to='/checkout'>
            <button className="cartnew" onClick={handleCheckout} disabled={cart.length === 0}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <Snackbar open={openAlert} autoHideDuration={10000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="warning">
          Your cart is empty. Please add items to your cart.
        </Alert>
      </Snackbar>


      {/* Snackbar for empty cart alert */}
      <Footer />
    </div>
  );
};

export default ShoppingCartPage;
