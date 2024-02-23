import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/banner1.png'
import image2 from '../../assets/banner2.png'
import image3 from '../../assets/banner3.png'
import image4 from '../../assets/banner4.png'


const Carrusel = () => {
  const banners = [
   image,
   image2,
   image3,
   image4
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia esto para ajustar la velocidad del carrusel (en milisegundos)
    
  };

  return (
    <div className="carrusel-container">
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index}>
          <img src={banner} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Carrusel;
