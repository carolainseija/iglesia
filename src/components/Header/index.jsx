import { NavBar } from "../NavBar";

import { db } from "../../firebase"; import { useEffect, useState } from "react";
import {  collection, doc, getDoc, getDocs, query, where  } from "firebase/firestore";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Header() {
  const [texts, setTexts] = useState([])

  const getTexts = async () => {
    getDocs(query(collection(db, "texts")))
      .then((doc) =>
        setTexts(doc.docs.map((d) => d.data())))
  }

  useEffect(() => {
    getTexts()
  }, [])


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia esto para ajustar la velocidad del carrusel (en milisegundos)

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
    <div>
              <NavBar classColor='navbar' />

      <div className="carrusel-containerHome">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.href} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    
    </div>

  )
}