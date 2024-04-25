import React from "react";
import banner from "../Assets/banner-1.jpg";
import ban1 from "../Assets/banner-slider-01.jpg";
import ban2 from "../Assets/banner-slider-02.jpg";
import "../Slider/Slider.css";

export const Slider = () => {
  return (
    <div>
      <div className="flex container mx-auto justify-between">
        <div className="relative w-[69%]">
          <img src={banner} alt="banner-1" className="rounded-lg" />
          <div className="absolute top-0 py-24 ps-10 text-left">
            <pre className="text-xl text-red-600 pb-2">Accessories</pre>
            <h2 className="text-4xl font-bold pb-2">
              Up To <span className="text-red-600">40% Off</span>
            </h2>
            <h2 className="text-4xl font-bold pb-2">Latest Creations</h2>
            <button className="bg-white py-2 px-5 mt-4 font-bold rounded-lg text-sm hover:bg-red-600  hover:text-white ban-btn">
              Shop Now <i class="fa-solid fa-arrow-right ms-4 text-xs"></i>
            </button>
          </div>
        </div>
        <div className="max-w-[29%]">
          <div className="rounded-lg overflow-hidden relative ban">
            <img src={ban1} alt="banner-slider-1" className="" />
            <div className="absolute top-6 text-left ps-5">
              <pre className="text-red-600 text-lg font-semibold">
                Hand Made
              </pre>
              <h3 className=" font-semibold text-xl">New Modern Stylist</h3>
              <h3 className="font-semibold text-xl">Crafts</h3>
            </div>
          </div>
          <div className="mt-5 rounded-lg overflow-hidden relative ban">
            <img src={ban2} alt="banner-slider-2" className="" />
            <div className="absolute top-6 text-left ps-5 overlay">
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
  );
};
