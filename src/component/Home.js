import React,{useState} from 'react'

import Logo1 from './Logo1.png';
import car1 from './car1.webp';
import car2 from './car2.jpg';
import car5 from './car5.webp';
import Homebgnew from './Homebgnew.jpeg';
import homebgg from './homebgg.png';
import homebg from './homebg.jpg';
import homebgedit1 from './homebgedit1.png';
import home1 from './home1.webp';
import home2 from './home2.webp';
import home3 from './home3.jpg';
import home4 from './home4.jpeg';
import home5 from './home5.jpg';
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardGallery from './Card';



export default function Home()
 {

  const [isCartVisible, setCartVisibility] = useState(false);

  const showCart = () => {
    setCartVisibility(true);
  };

  const hideCart = () => {
    setCartVisibility(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
   return(
       <div class="homeparent">
        <Nav/>
       <Carousel data-bs-theme="dark" interval={4000}>
       <Carousel.Item>
      <img class="car" src={car2} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="car" src={car1} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
      <img class="car3" src={car5} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>  
      <Carousel.Item>
      <img class="car" src={Homebgnew} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel> 

    <p class="heading">EXPLORE ITEMS</p>
    <br></br>
    <br></br>
 <Slider {...settings}>
    {/* <div class="homebg1">
    <img class="homebg" src={homebgedit1} alt="img2"/>
    </div> */}
    <div class="home">
    <Link to={'/home1'} className="explore-link">
      <div class="box1">
    <img class="home1" src={home1} alt="img2"/>
    <div class="text">
        Explore Fresh Vegetabels
    </div>
      </div>
      </Link>
      <Link to={'/home2'} className="explore-link">
      <div class="box2">
    <img class="home1" src={home2} alt="img2"/>
    <div class="text">
        Explore Snaks 
    </div>
      </div>
      </Link>
      <Link to={'/home4'} className="explore-link">
      <div class="box3">
    <img class="home4" src={home4} alt="img2"/>
    <div class="text">
        Explore Meat 
    </div>
      </div>
      </Link>
      <Link to={'/home3'} className="explore-link">
      <div class="box4">
    <img class="home3" src={home3} alt="img2"/><div class="text"> Explore Grains </div>
      </div>
      </Link>
      <div class="box5">
    <img class="home1" src={home5} alt="img2"/>
    <div class="text">
        Explore Detergents 
    </div>
      </div>
    </div>
    </Slider>
    
   <div class="cards">

        <div className="card">
        <img
        src="https://img.freepik.com/free-photo/high-angle-customer-paying-with-smartphone_23-2149663658.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card-image"/>
        <div className="card-content">
        <h2 className="card-title">OnlineShopping</h2>
        <p className="card-text">
        Explore convenience in our Online Shopping Haven! Click into endless choices with seamless browsing, curated collections, and doorstep delivery. Embrace the joy of retail’s future—a virtual storefront bringing style, comfort, and joy to your doorstep. Happy shopping! 🛒✨        </p>
        </div>
        </div>
        <div className="card">
        <img
        src="https://images.pexels.com/photos/696205/pexels-photo-696205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Card Image"
        className="card-image"/>
        <div className="card-content">
        <h2 className="card-title">Nearby Store</h2>
        <p className="card-text">
        Embrace convenience with nearby stores! 🛍️🏡 Explore quality offerings at your fingertips, from essentials to unique finds. Experience seamless shopping and community charm right at your doorstep. 🌟 #LocalShopping #NearbyStores
        </p>
        </div>
        </div>
        <div className="card">
        <img
        src="https://img.freepik.com/free-phhttps://img.freepik.com/premium-photo/shopping-basket-app-delivery-food-service-background-concept-3d-illustration_629781-10.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=aisoto/full-shot-woman-online-shopping_23-2150567519.jpg?w=740&t=st=1703774227~exp=1703774827~hmac=61d2267aa3c77f2db74107d2da6aaad8ece40d98f98add07e97f2de19df225cb"
        alt="Card Image"
        className="card-image"/>
        <div className="card-content">
        <h2 className="card-title">Grocery Through Phone</h2>
        <p className="card-text">
        Transform grocery shopping with a simple call! 📞🍎 Dial in convenience for stress-free, personalized service. Share your list, let us handle the rest—quick deliveries, quality products, all at your fingertips. Embrace hassle-free shopping with the power of your voice. Dial, order, relax! 🛒📱 #PhoneShopping #GroceryConvenience        </p>
        </div>
        </div>
        <div className="card">
        <img
        src="https://img.freepik.com/free-photo/man-taking-care-home-delivering-groceries_52683-102842.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card-image"/>
        <div className="card-content">
        <h2 className="card-title">Dedicated Service Men</h2>
        <p className="card-text">
        Meet our dedicated service men – your order's superheroes! 🚚✨ From 'Order' click to your door's knock, they ensure safe, swift deliveries with a commitment to excellence. Their smiles and dedication guarantee a seamless, reliable delivery experience every time. With us, every delivery is a story of service, care, and customer delight. 🌟 #DeliveryHeroes #CustomerFirs
                </p>
        </div>
        </div>
        <div className="card">
        <img
        src="https://img.freepik.com/premium-photo/delivery-concept_173387-4864.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card-image"/>
        <div className="card-content">
        <h2 className="card-title"> Lightning-Fast and Effortless Delivery</h2>
        <p className="card-text">
        Swift and seamless delivery from click to doorstep! ⚡🚚 Enjoy rapid service without compromising quality. Your satisfaction is our priority—orders reach you with speed, precision, and excellence. Welcome to a world of delightful, fast, and easy delivery! 🌐📦 #FastDelivery #EffortlessShopping
        </p>
        </div>
        </div>
        </div>
      
      <Footer/>
     </div>
  )
 }