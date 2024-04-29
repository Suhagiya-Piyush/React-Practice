import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../Assets/banner-1.jpg";
import banner2 from "../Assets/banner-2.jpg";
import banner3 from "../Assets/banner-3.jpg";
import ban1 from "../Assets/banner-slider-01.jpg";
import ban2 from "../Assets/banner-slider-02.jpg";
import "../Slider/Slider.css";

export const Slider = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 lg:gap-6">
        <div className="relative col-span-2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={banner1} alt="banner-1" className="rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="banner-1" className="rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner3} alt="banner-1" className="rounded-lg" />
            </SwiperSlide>
          </Swiper>
          <div className="absolute top-0 py-24 ps-10 text-left z-10">
            <pre className="text-xl text-red-600 pb-2">Accessories</pre>
            <h2 className="text-5xl font-bold pb-2">
              Up To <span className="text-red-600">40% Off</span> Latest
            </h2>
            <h2 className="text-5xl font-bold pb-2">Creations</h2>
            <button className="bg-white py-3 px-8 mt-4 font-bold rounded-lg text-sm hover:bg-red-600  hover:text-white ban-btn">
              Shop Now <i class="fa-solid fa-arrow-right ms-4 text-xs"></i>
            </button>
          </div>
        </div>
        <div className="col-span-1 mt-2 lg:mt-0">
          <div className="flex lg:block">
            <div className="relative ban overflow-hidden rounded-lg">
              <div className="overflow-hidden">
                <img
                  src={ban1}
                  alt="banner-slider-1"
                  className="rounded-lg h-auto"
                />
              </div>
              <div className="absolute top-6 text-left ps-8">
                <pre className="text-red-600 text-lg font-semibold">
                  Hand Made
                </pre>
                <h3 className=" font-semibold text-xl">New Modern Stylist</h3>
                <h3 className="font-semibold text-xl">Crafts</h3>
              </div>
            </div>
            <div className="ms-4 lg:ms-0 lg:mt-2 rounded-lg overflow-hidden relative ban">
              <div className="overflow-hidden">
                <img
                  src={ban2}
                  alt="banner-slider-2"
                  className="rounded-lg mx-auto h-auto"
                />
              </div>
              <div className="absolute top-6 text-left ps-8 overlay">
                <pre className="text-red-600 text-lg font-semibold">
                  Hand Made
                </pre>
                <h3 className=" font-semibold text-xl">New Modern Stylist</h3>
                <h3 className="font-semibold text-xl">Crafts</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
