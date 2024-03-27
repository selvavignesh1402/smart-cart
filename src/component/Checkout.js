import React, { useState, useEffect } from 'react';
import MapComponent from './MapNew';
import { useCart } from './CardContext';
import './Checkout.css';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import ExploreIcon from '@mui/icons-material/Explore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DebitCardIcon from '@mui/icons-material/Dashboard';
import CashOnDeliveryIcon from '@mui/icons-material/Money';
import UpiIcon from '@mui/icons-material/MobileFriendly';
import PaymentIcon from '@mui/icons-material/Payment';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
const generateOrderId = () => {
  // You can implement your own logic to generate a unique order ID
  return Math.floor(Math.random() * 1000000);
};

const processCreditCardPayment = () => {
  // Implement credit card payment logic here
  console.log('Processing credit card payment...');
};

const processDebitCardPayment = () => {
  // Implement debit card payment logic here
  console.log('Processing debit card payment...');
};

const processCashOnDelivery = () => {
  // Implement cash on delivery payment logic here
  console.log('Processing cash on delivery payment...');
};

const processUpiPayment = () => {
  // Implement UPI payment logic here
  console.log('Processing UPI payment...');
};

const Checkout = () => {
  const { cart, calculateTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
    landmark:'',
  });

  const [orderId, setOrderId] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a unique order ID
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    // Process the order based on the selected payment method
    switch (formData.paymentMethod) {
      case 'credit-card':
        processCreditCardPayment();
        break;
      case 'debit-card':
        processDebitCardPayment();
        break;
      case 'cash-on-delivery':
        processCashOnDelivery();
        break;
      case 'upi':
        processUpiPayment();
        break;
      default:
        console.error('Invalid payment method');
    }
    setOpenSnackbar(true);
  };

  return (
    <div class="checkparent">

    <div className="checkout">
      <h2 class="checktext">Checkout</h2>
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img className="cartimage" src={item.image} alt={item.name} />
              {item.name} - ₹{item.price} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
      </div>

      <form onSubmit={handleSubmit}>
     <div className="form-field">
       <label htmlFor="name">Name <PersonIcon/></label>
       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
     </div>
     <div className="form-field">
       <label htmlFor="email" >Email <EmailIcon/></label>
       <input type="email" id="name" name="email" value={formData.email} onChange={handleChange} required />
     </div>
     <div className="form-field">
       <label htmlFor="address">Address <ExploreIcon/></label>  
      <MapComponent/>
       <select id="paymentMethod"
            name="paymentMethod"
            required >
             
        <option disabled value="" >Select Address </option>
        <option value="current">Current Address</option>
        <option value="select">selectedAddress</option>
       </select>
     </div>
       <label htmlFor="landmark">Landmark <AddLocationAltIcon/></label>
       <input type="text" id="lmark" name="lmark" required/>
       <br/>
       <br/>
        <div className="form-field">
          <label htmlFor="paymentMethod">Payment Method <PaymentIcon/></label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a payment method</option>
            <option value="credit-card">Credit Card </option>
            <option value="debit-card">Debit Card</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button class="cobutton"type="submit">Place Order</button>
   </form>
      <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <MuiAlert
            elevation={10}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="success"
          >
            Order placed successfully! Order ID: {orderId}
          </MuiAlert>
        </Snackbar>
        <br/>
        {orderId && (
        <div>
          <h3>Order ID: {orderId}</h3>
          
        </div>
      )}
    </div>
    </div>
  );
};

export default Checkout;
