import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


import esc1 from "../../assets/esc1.jpg"
import esc2 from "../../assets/esc2.avif"
import esc3 from "../../assets/esc3.jpg"
import esc4 from "../../assets/esc4.jpg"
import esc5 from "../../assets/esc5.webp"



export function ThumbsGallery() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="gallery">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {/* ... tus SwiperSlides */}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {/* ... tus SwiperSlides */}
        </Swiper>
      </div>
    )
}