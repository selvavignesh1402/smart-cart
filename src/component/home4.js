import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';


import img42 from './img42.webp';
import img43 from './img43.webp';
import img44 from './img44.webp';
import img45 from './img45.webp';
import img46 from './img46.webp';
import img47 from './img47.webp';
import img48 from './img48.webp';
import img49 from './img49.webp';
import img50 from './img50.webp';

import { useCart } from './CardContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const products = [
  { id: 1, name: "Egg(5P)",price: 100, image: img42 },
  { id: 2, name: "Chicken(smallpieces)",price: 250, image: img43 },
  { id: 3, name: "Chicken(Boneless)",price: 158, image: img44 },
  { id: 4, name: "Fish(Katla)",price: 550, image: img45 },
  { id: 5, name: "ChickenSauage",price: 320, image: img46 },
  { id: 6, name: "ChickenNuggets",price: 300, image: img47 },
  { id: 7, name: "Prawns",price: 258, image: img48 },
  { id: 8, name: "DryFish",price: 130, image: img49 },
  { id: 9, name: "Egg(12P)",price: 120, image: img50 },
];

export default function Home4() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [counts, setCounts] = useState(Array(products.length).fill(0));
  const [filteredProducts, setFilteredProducts] = useState(products);
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

  
  const [showNewPage, setShowNewPage] = useState(false);

  const openNewPage = () => {
    setShowNewPage(true);
  };

  
  
    // Calculate the total quantity of items in the cart
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="parent">
      <Nav/>



    <div class="cardmeat">
      <div className="card4">
        <img
        src="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Meats🥩</h2>
        <p className="card-text">
        Indulge in Unparalleled Freshness with Our Premium Meats! 🥩✨ Elevate your culinary experience with the finest cuts, handpicked for quality and flavor. From succulent steaks to tender roasts, our fresh meats promise a gastronomic delight. Sourced with care and delivered with precision, savor the excellence of every bite. Welcome to a world where freshness is not just a promise but a delicious reality. 🌿🍖 #PremiumMeats #CulinaryExcellence        
        </p>
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