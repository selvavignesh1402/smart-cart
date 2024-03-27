import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';
import Cart from './ShoppingCartPage';

import img13 from './img13.webp';
import img14 from './img14.webp';
import img15 from './img15.webp';
import img16 from './img16.webp';
import img17 from './img17.webp';
import img18 from './img18.webp';
import img19 from './img19.webp';
import img20 from './img20.webp';
import img21 from './img21.webp';
import img22 from './img22.webp';
import img23 from './img23.webp';
import img24 from './img24.webp';
import { useCart } from './CardContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Home2 = () => {

const products = [
  { id: 1, name: "Milkbikis",price: 58, image: img13 },
  { id: 2, name: "Maggie",price: 80, image: img14 },
  { id: 3, name: "LittleHearts",price: 25, image: img15 },
  { id: 4, name: "GoodDay",price: 158, image: img16 },
  { id: 5, name: "ParleG",price: 10, image: img17 },
  { id: 6, name: "Lays",price: 100, image: img18 },
  { id: 7, name: "Milbikis(Cream)",price: 58, image: img19 },
  { id: 8, name: "Dosa(Batter)",price: 50, image: img20 },
  { id: 9, name: "Kurkure",price: 50, image: img21 },
  { id: 10, name: "Cheetos",price: 50, image: img22 },
  { id: 11, name: "Nutella",price: 200, image: img23 },
  { id: 12, name: "Chocos",price: 50, image: img24 },
];

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
        src="https://img.freepik.com/premium-photo/bag-chips_488220-43045.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Snacks🍿</h2>
        <p className="card-text">
        Snack Time, Elevated! 🍿✨ Dive into a world of irresistible flavors with our curated collection of snacks. Whether you crave the crunch of savory chips, the sweetness of artisanal chocolates, or the wholesome goodness of nut mixes, we have the perfect indulgence for every palate. Elevate your snack game with quality treats that add joy to every bite. Welcome to a snacking experience that goes beyond the ordinary. 🌮🍫 #SnackDelights #TastyTreats         </p>
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
export default Home2;