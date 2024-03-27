import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';
import './ShoppingCartPage';
import Checkout from './Checkout';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Alert from '@mui/material/Alert';

import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import img6 from './img6.webp';
import img7 from './img7.webp';
import img8 from './img8.webp';
import img9 from './img9.webp';
import img10 from './img10.webp';
import img11 from './img11.webp';
import img12 from './img12.webp';
import img25 from './img25.webp';
import img26 from './img26.webp';
import img27 from './img27.webp';
import img28 from './img28.webp';
import Cart from "./ShoppingCartPage";
import { Link } from "react-router-dom";
import { useCart } from './CardContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

export default function Home1() {

    const products = [
      { id: 1, name: "Carrot",price: 58, image: img1 },
      { id: 2, name: "Onion",price: 48, image: img2 },
      { id: 3, name: "Tomato",price: 32, image: img3 },
      { id: 4, name: "Potato",price: 37, image: img4 },
      { id: 5, name: "Coconut",price: 28, image: img5 },
      { id: 6, name: "Cauliflower",price: 18, image: img6 },
      { id: 7, name: "Kiwi",price: 158, image: img7 },
      { id: 8, name: "Apple",price: 228, image: img8 },
      { id: 9, name: "Pomegranate",price: 158, image: img9 },
      { id: 10, name: "Orange",price: 68, image: img10 },
      { id: 11, name: "Blueberry",price: 258, image: img11 },
      { id: 12, name: "RawMango",price: 45, image: img12 },
      { id: 13, name: "Banana",price: 50, image: img25 },
      { id: 14, name: "Mashroom",price: 45, image: img26 },
      { id: 15, name: "Gralic",price: 18, image: img27 },
      { id: 16, name: "Chilli(Green)",price: 34, image: img28 },
    ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [counts, setCounts] = useState(Array(products.length).fill(0));
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showAlert, setShowAlert] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const changeCount = (index, increment) => {
    const newCounts = [...counts];
    newCounts[index] += increment;
    setCounts(newCounts);
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  const [cart, setCart] = useState([]);
  const [checkout] = useState([]);
  useEffect(() => {
    console.log('Cart type:', typeof cart);
  }, [cart]);

  const { addToCart } = useCart();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

const handleAddToCart = (product) => {

    addToCart(product);

    
    const existingItem = cart.find((item) => item.id === product.id);
    
    if (existingItem) {
      
      setCart(
        cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      setOpenSnackbar(true);
      
    };
    
    

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
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  

  
  

  

  
  
    // Calculate the total quantity of items in the cart
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    

  return (
    <div className="parent">
      
      <Nav/>
      <div class="cardmeat">
      <div className="card4">
        <img
        src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Fruits And Vegetabels</h2>
        <p className="card-text">
        Immerse in peak freshness with our vibrant fruits and vegetables! 🍇🥦 Handpicked for quality and wholesomeness, our produce is a testament to care. Sourced with precision, each bite brings vitality to your plate. Welcome to a world where every delivery is a celebration of freshness and well-being. 🌽🍓 #FreshProduce #VibrantEating        </p>
         </div>
        </div>
    </div>

      <SearchBar onSearch={handleSearch} />

      <div className="image-container">
        <figure className="image">
          {filteredProducts.map((product, index) => (
            <div className="image1" key={index}>
              <img className="items" src={product.image} alt={`img${index + 1}`} />
              <figcaption>
                <strong>{product.name}</strong>
                <br />
                <strong>₹{product.price}</strong>
                {/* <span>Add to cart: {counts[index]}</span> */}
                <br />
               <button class="probutton" onClick={() =>handleAddToCart(product)}>Add to Cart</button>
               
              </figcaption>
              <Snackbar
          open={openSnackbar}
          autoHideDuration={1000} 
          onClose={handleSnackbarClose}
          >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="success"
            >
            Added successfully!
          </MuiAlert>
        </Snackbar>
            </div>
          ))}
          </figure>
      </div>

      {/* <div className="product-slider">
        <Slider {...settings}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-slide">
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </Slider>
        <div className="selected-product">
          {selectedProduct && (
            <>
              <h3>{selectedProduct.name}</h3>
              <p>Select quantity, add to cart, etc.</p>
            </>
          )}
          </div>
        </div> */}

{/* <div class="cart">
  
  <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
            {item.name} - ₹{item.price} - Quantity: {item.quantity}
              <div class="cartbutton">
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
          </ul>
          <p>Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
        </div> */}
        {/* <div className="cart-icon">
          <span>{totalQuantity}</span>
         </div>
          <Link to="/shopping-cart">
            <ShoppingCartCheckoutIcon class="cartlogo"/>
          </Link> */}
          
          
  {/* <div class="cart">
  
  <h2>Items Added</h2>
  <ul>
    {cart.map((item, index) => (
      <li key={index}>
        {item.name} - ₹{item.price} - Quantity: {item.quantity}
      </li>
    ))}
    </ul>
    <p>Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
</div>  */}


       
      <Footer/>
    </div>
  );
}