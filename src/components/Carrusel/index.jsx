import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { db } from '../../firebase';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';


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
    const docRef = doc(db, "images", "banners")
    const docSnap = await getDoc(docRef)
    // Convertir el objeto a un array de valores
    const bannersArray = Object.values(docSnap.data());
    // Establecer el nuevo estado de banners
    setBanners(bannersArray);
  }


  useEffect(() => {
    getBanners()
  }, [])

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
