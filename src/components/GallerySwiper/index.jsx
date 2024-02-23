import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow } from "swiper/modules";


import esc1 from "../../assets/esc1.jpg"
import esc2 from "../../assets/esc2.avif"
import esc3 from "../../assets/esc3.jpg"
import esc4 from "../../assets/esc4.jpg"
import esc5 from "../../assets/esc5.webp"



export function GallerySwiper() {
    return (
        <div className="gallery">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                initialSlide={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={esc1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={esc2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={esc3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={esc4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={esc5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={esc1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={esc2} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}