import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Login from '../component/Login';
import SignUp from '../component/Signup';
import Home from '../component/Home';
import Home1 from '../component/Home1';
import Home2 from '../component/Home2';
import Home3 from '../component/Home3';
import Home4 from '../component/home4';
import ShoppingCartPage from '../component/ShoppingCartPage';
import Checkout from '../component/Checkout'; 
import { CartProvider } from '../component/CardContext';

export default function Navigator() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home1" element={<Home1 cart={cart} setCart={setCart} />} />
          <Route path="/home2" element={<Home2 cart={cart} setCart={setCart} />} />
          <Route path="/home3" element={<Home3 cart={cart} setCart={setCart} />} />
          <Route path="/home4" element={<Home4 cart={cart} setCart={setCart} />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage cart={cart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
