import React from "react";
import { HeaderTop } from "../Components/HeaderTop/HeaderTop";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import ErrImg from "../Components/Assets/breadcrumb-01.jpg";
import Err from "../Components/Assets/error.png";

const Error = () => {
  return (
    <div className="">
      <HeaderTop />
      <Header />
      <div className="text-left relative">
        <img src={ErrImg} alt="Error Image" className="h-[32vh]" />
        <div className="absolute top-0 md:top-[20%] px-10">
          <div className="flex items-center gap-2">
            <span className="my-4 hover:text-red-600 cursor-pointer">Home</span>
            <div className="border-b-2 border-gray-400 rounded-lg h-0 w-8"></div>
            <span className="text-gray-600">Error</span>
          </div>
          <h2 className="text-3xl font-bold">Error</h2>
        </div>
      </div>
      <div className="py-12">
        <div className="flex justify-center pb-10">
          <img src={Err} alt="Error Image 1" />
        </div>
        <div className="md:px-80">
          <h2 className="text-5xl font-bold">404. Page not found</h2>
          <p className=" mx-6 text-lg text-gray-500 my-6">
            Sorry, we couldn’t find the page you where looking for. We suggest
            that you return to homepage.
          </p>
          <button className=" bg-red-700 font-semibold py-3 px-6 rounded-lg text-white hover:text-black transition-all">
            <i class="fa-solid fa-arrow-left me-6"></i>Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Error;
