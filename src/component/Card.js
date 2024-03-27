// CardGallery.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css';

const CardGallery = () => {
  const cardData = [
    {
      image:
        'https://img.freepik.com/free-photo/full-shot-woman-online-shopping_23-2150567519.jpg?w=740&t=st=1703774227~exp=1703774827~hmac=61d2267aa3c77f2db74107d2da6aaad8ece40d98f98add07e97f2de19df225cb',
      title: 'Beautiful Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image:
        'https://img.freepik.com/free-photo/full-shot-woman-online-shopping_23-2150567519.jpg?w=740&t=st=1703774227~exp=1703774827~hmac=61d2267aa3c77f2db74107d2da6aaad8ece40d98f98add07e97f2de19df225cb',
      title: 'Beautiful Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image:
        'https://img.freepik.com/free-photo/full-shot-woman-online-shopping_23-2150567519.jpg?w=740&t=st=1703774227~exp=1703774827~hmac=61d2267aa3c77f2db74107d2da6aaad8ece40d98f98add07e97f2de19df225cb',
      title: 'Beautiful Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image:
        'https://img.freepik.com/free-photo/full-shot-woman-online-shopping_23-2150567519.jpg?w=740&t=st=1703774227~exp=1703774827~hmac=61d2267aa3c77f2db74107d2da6aaad8ece40d98f98add07e97f2de19df225cb',
      title: 'Beautiful Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image:
        'https://img.freepik.com/free-photo/full-shot-woman-online-shopping_23-2150567519.jpg?w=740&t=st=1703774227~exp=1703774827~hmac=61d2267aa3c77f2db74107d2da6aaad8ece40d98f98add07e97f2de19df225cb',
      title: 'Beautiful Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cards">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={`Card Image ${index + 1}`} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardGallery;
