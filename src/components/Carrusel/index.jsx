import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { db } from '../../firebase';
import { collection, doc, getDoc, getDocs, query,  } from 'firebase/firestore';
import "./style.css"


const Carrusel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia esto para ajustar la velocidad del carrusel (en milisegundos)

  };


  const [banners, setBanners] = useState([])

  const getBanners = async () => {
    getDocs(query(collection(db, "banners")))
      .then((doc) =>
        setBanners(doc.docs.map((d) => d.data())))
  }

  useEffect(() => {
    getBanners()
  }, [])

  return (
    <div className="carrusel-container">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.href} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
