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

import img29 from './img29.webp';
import img30 from './img30.webp';
import img31 from './img31.webp';
import img32 from './img32.webp';
import img33 from './img33.webp';
import img34 from './img34.webp';
import img35 from './img35.webp';
import img36 from './img36.webp';
import img37 from './img37.webp';
import img38 from './img38.webp';
import img39 from './img39.webp';
import img40 from './img40.webp';
import { useCart } from './CardContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const products = [
  { id: 1, name: "TataSalt",price: 20, image: img29 },
  { id: 2, name: "Sugar",price: 58, image: img30 },
  { id: 3, name: "BlackPepper",price: 98, image: img31 },
  { id: 4, name: "Dal",price: 190, image: img32 },
  { id: 5, name: "GreenMong",price: 80, image: img33 },
  { id: 6, name: "BasmathiRice",price: 158, image: img34 },
  { id: 7, name: "JeeraRice",price: 100, image: img35},
  { id: 8, name: "Chinnamon",price: 158, image: img36 },
  { id: 9, name: "Pumkinseeds",price:150, image: img37 },
  { id: 10, name: "Turmeric",price: 108, image: img38 },
  { id: 11, name: "ChilliPowder",price: 68, image: img39 },
  { id: 12, name: "GoldWinner",price: 118, image: img40 },
];

export default function Home3() {
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
        src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Grains And Pulses🌾</h2>
        <p className="card-text">
        Embark on a nutrient-rich journey with our curated grains and pulses! 🌾✨ Packed with essential nutrients, these culinary gems form the foundation of a balanced diet. From hearty whole grains to protein-rich pulses, our collection ensures wholesome goodness on every plate. Elevate your meals with the purity and vitality of nature's bounty. Welcome to a culinary adventure where health and flavor converge seamlessly. 🍚🌱 #NutrientRich #WholesomeChoices        
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