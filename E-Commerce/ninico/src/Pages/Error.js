import React from "react";
import { HeaderTop } from "../Components/HeaderTop/HeaderTop";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import Err from "../Components/Assets/error.png";
import { PageHeading } from "../Components/PageHeading/PageHeading";

const Error = () => {
  return (
    <div className="">
      <HeaderTop />
      <Header />
      <PageHeading goBacklink="Home" pageTitle="Error"/>
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
