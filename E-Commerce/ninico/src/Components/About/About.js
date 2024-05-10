import React from "react";
import { PageHeading } from "../PageHeading/PageHeading";
import team1 from "../Assets/about-img-1.jpg";
import team2 from "../Assets/about-img-2.jpg";
import banner1 from "../Assets/about-banner-1.jpg"
import banner2 from "../Assets/about-banner-2.jpg"
import { VscCheck } from "react-icons/vsc";
import "./About.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Slid1 from "../Assets/team-1.jpg";
import Slid2 from "../Assets/team-2.jpg";
import Slid3 from "../Assets/team-3.jpg";
import Slid4 from "../Assets/team-4.jpg";

export const About = () => {
  return (
    <>
      <PageHeading goBacklink="Home" pageTitle="About Us" />
      <div className="py-20">
        <div className="relative px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={team1} alt="about-image_1" />
            </div>
            <div>
              <img src={team2} alt="about-image_2" />
            </div>
          </div>
          <div
            className="absolute text-[11rem] text-white font-bold top-[54%] left-[25.5%]"
            style={{ letterSpacing: 19 + "px" }}
          >
            ninico
          </div>
        </div>

        <div className="p-10">
          <p className="">About Us</p>
          <p className="text-3xl font-bold">About Our Story</p>
          <div className="grid grid-cols-1 md:grid-cols-8 mt-8 gap-8">
            <div className="md:col-span-3 text-gray-500 text-lg pe-4">
              Publish your eCommerce site quickly with our easy-to-use store
              builder— no coding required. Migrate your items from your point of
              sale system or turn your Instagram feed into a shopping site and
              start selling fast. Square Online works for all kinds of
              businesses—retail, restaurants, services without costly
              customization or add ons. Get orders to your customers in lots of
              ways by offering shipping, pickup, delivery, and even QR code
              ordering.
            </div>

            <div className="md:col-span-3 text-gray-500 text-lg">
              Expand your reach and sell more using seamless integrations with
              Google, Instagram, Facebook, and more. Built- in SEO tools make it
              easy for shoppers to find your business on search engines. Get
              access to the entire suite of integrated Square solutions to help
              you run your business. Integration between Square Online and all
              Square point of sale systems makes inventory management easy.
              Subscribe to Square Marketing and easily send email promotions to
              your customers using the contact information
            </div>

            <div className="md:col-span-2 text-sm">
              <p className="mb-4 flex cursor-pointer link">
                <VscCheck className="text-2xl me-4" />
                Orders go right to your restaurant point of sale, KDS, and
                kitchen
              </p>
              <p className="mb-4 flex cursor-pointer">
                <VscCheck className="text-2xl me-4" />
                Provide in-person pickup, delivery by professional couriers
              </p>
              <p className="mb-4 flex cursor-pointer">
                <VscCheck className="text-2xl me-4" />
                Offer in-person diners self-serve, contactless ordering via QR
                codes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 p-10">
          <p className="text-center">Team</p>
          <p className="text-center text-3xl font-bold mb-4">Meet With Team</p>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                425: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="p-2 relative">
                <img src={Slid1} alt="Slider Image" className="rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent max-w-max"></div>
                <div className="absolute bottom-12 left-14 text-left">
                  <h1 className="font-semibold text-white">Founder</h1>
                  <p className="mt-2 text-2xl text-white font-semibold">
                  Rosalina D. Willson
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-2 relative">
                <img src={Slid2} alt="Slider Image" className="rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent max-w-max"></div>
                <div className="absolute bottom-12 left-14 text-left">
                  <h1 className="font-semibold text-white">CEO</h1>
                  <p className="mt-2 text-2xl text-white font-semibold">
                  Ukolilix X. Xilanorix
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-2 relative">
                <img src={Slid3} alt="Slider Image" className="rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent max-w-max"></div>
                <div className="absolute bottom-12 left-14 text-left">
                  <h1 className="font-semibold text-white">Designer</h1>
                  <p className="mt-2 text-2xl text-white font-semibold">
                  Alonso M. Miklonax
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-2 relative">
                <img src={Slid4} alt="Slider Image" className="rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent max-w-max"></div>
                <div className="absolute bottom-12 left-14 text-left">
                  <h1 className="font-semibold text-white">Developer</h1>
                  <p className="mt-2 text-2xl text-white font-semibold">
                  Miranda H. Halim
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-2 relative">
                <img src={Slid1} alt="Slider Image" className="rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent max-w-max"></div>
                <div className="absolute bottom-12 left-14 text-left">
                  <h1 className="font-semibold text-white">Founder</h1>
                  <p className="mt-2 text-2xl text-white font-semibold">
                  Rosalina D. Willson
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-2 relative">
                <img src={Slid2} alt="Slider Image" className="rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent max-w-max"></div>
                <div className="absolute bottom-12 left-14 text-left">
                  <h1 className="font-semibold text-white">CEO</h1>
                  <p className="mt-2 text-2xl text-white font-semibold">
                  Ukolilix X. Xilanorix
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <img src={banner1} alt="about banner 1" />
            </div>
            <div className="pe-20">
              <p className="mt-2 text-gray-500">Features #01</p>
              <h5 className="mt-2 text-[1.8rem] font-semibold">Solutions that work together</h5>
              <p className="mt-6 text-lg text-gray-500">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
              <button className="py-3 px-8 border rounded-lg mt-4 font-bold hover:bg-rose-500 transition-all hover:text-white">Get In Touch</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
            <div className="pe-20">
              <p className="mt-2 text-gray-500">Features #02</p>
              <h5 className="mt-2 text-[1.8rem] font-semibold">All kinds of payments securely</h5>
              <p className="mt-6 text-lg text-gray-500">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
              <button className="py-3 px-8 border rounded-lg mt-4 font-bold hover:bg-rose-500 transition-all hover:text-white">Contact With Us</button>
            </div>
            <div>
              <img src={banner2} alt="about banner 2" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
