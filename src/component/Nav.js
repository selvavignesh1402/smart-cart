import React, { useState } from 'react';
import Logo1 from './Logo1.png';
import { Link } from "react-router-dom";
import { useCart } from './CardContext';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prevMenuToggle) => !prevMenuToggle);
  };

  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  
  const [showNewPage, setShowNewPage] = useState(false);

  const openNewPage = () => {
    setShowNewPage(true);
  };
  return (
    <div>
      <nav id="navbar" className={menuToggle ? "menu-open" : ""}>
        <div className="nav-wrapper">
          <div className="logo">
            <img className="img2" src={Logo1} alt="Logo1" />
            <h1 className="head">SmartCart</h1>
          </div>
          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            {/* <li>
              <a href="#services">Services</a>
            </li> */}
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#singout">SignIn/SignOut</a>
            </li>
            <li>
            <div className="navcart-icon"> <span>{totalQuantity}</span></div>
            <Link to="/shopping-cart"><ShoppingCartCheckoutIcon class="navcartlogo" /></Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon" onClick={handleMenuToggle}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${menuToggle ? "open" : ""}`}>
        <ul id="menu">
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
