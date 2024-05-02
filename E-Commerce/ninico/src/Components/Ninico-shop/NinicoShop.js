import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Slid1 from "../Assets/instagram01.jpg";
import Slid2 from "../Assets/instagram02.jpg";
import Slid3 from "../Assets/instagram03.jpg";
import Slid4 from "../Assets/instagram04.jpg";
import Slid5 from "../Assets/instagram05.jpg";
import Slid6 from "../Assets/instagram06.jpg";

export const NinicoShop = () => {
  return (
    <div className="py-20 mx-10">
      <h5 className="text-red-600 text-lg">Follow On</h5>
      <h2 className="text-4xl font-bold">
        <i class="fa-brands fa-instagram"></i> ninico-shop
      </h2>
      <div className="mt-8">
        <Swiper
        slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            425 : {
                slidesPerView : 2,
                spaceBetween : 30
            },
            768 : {
                slidesPerView : 3,
                spaceBetween : 30
            },
            992 : {
                slidesPerView : 4,
                spaceBetween : 20
            },
            1200 : {
                slidesPerView : 5,
                spaceBetween : 10
            }
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="p-2"><img src={Slid1} alt="Slider Image" className="rounded-lg"/></SwiperSlide>
          <SwiperSlide className="p-2"><img src={Slid2} alt="Slider Image" className="rounded-lg"/></SwiperSlide>
          <SwiperSlide className="p-2"><img src={Slid3} alt="Slider Image" className="rounded-lg"/></SwiperSlide>
          <SwiperSlide className="p-2"><img src={Slid4} alt="Slider Image" className="rounded-lg"/></SwiperSlide>
          <SwiperSlide className="p-2"><img src={Slid5} alt="Slider Image" className="rounded-lg"/></SwiperSlide>
          <SwiperSlide className="p-2"><img src={Slid6} alt="Slider Image" className="rounded-lg"/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
