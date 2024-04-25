import React from "react";
import logo from "../Assets/logo.png";
import "../Footer/Footer.css";
import google from "../Assets/f-google.jpg";
import apple from "../Assets/f-app.jpg";
import icon from "../Assets/f-brand-icon-01.png";

export const Footer = () => {
  return (
    <div className="bg-slate-200">
      <footer className="container pt-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 py-6 border-b border-gray-400 mx-2">
          <div className="lg:col-span-2 px-6 text-left sm:pb-10">
            <img src={logo} alt="logo" className="h-6 mb-10" />
            <p className="text-xs text-gray-500">
              Elegant pink origami design three dimensional view and decoration
              co-exist. Great for adding a decorative touch to any room’s decor.
            </p>
          </div>

          <div className="text-start text-sm">
            <h4 className="mb-4 font-semibold underline text-sm">
              Information
            </h4>
            <ul className="foot-ul">
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Custom Service</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>FAQs</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Ordering Tracking</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Contacts</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Events</span>
              </li>
            </ul>
          </div>

          <div className="text-start text-sm">
            <h4 className="mb-4 font-semibold underline text-sm">My Account</h4>
            <ul className="foot-ul">
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Delivery Information</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Privacy Policy</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Discount</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Custom Service</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <span>Terms Condition</span>
              </li>
            </ul>
          </div>

          <div className="text-start text-sm">
            <h4 className="mb-4 font-semibold underline text-sm">
              Social Network
            </h4>
            <ul className="foot-ul">
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <i className="fa-brands fa-facebook-f me-3 text-black"></i>
                <span>Facebook</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <i className="fa-brands fa-dribbble me-2 text-black"></i>
                <span>Dribbble</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <i className="fa-brands fa-twitter me-2 text-black"></i>
                <span>Twitter</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <i className="fa-brands fa-behance me-2 text-black"></i>
                <span>Behance</span>
              </li>
              <li className="py-1 font-semibold text-gray-500 cursor-pointer">
                <i className="fa-brands fa-youtube me-2 text-black"></i>
                <span>Youtube</span>
              </li>
            </ul>
          </div>

          <div className="text-start text-sm lg:col-span-2">
            <h4 className="mb-4 font-semibold underline text-sm">
              Get Newsletter
            </h4>
            <p className="text-gray-500 font-semibold">
              Get on the list and get 10% off your first order!
            </p>
            <div className="mt-4">
              <input
                type="text"
                className="py-2 px-4 focus:outline-none rounded-lg w-[75%]"
                placeholder="Enter email address"
              />
              <button className="text-white text-xs py-3 px-4 mt-2 rounded-lg button">
                Subscribe Now
                <i className="fa-solid fa-arrow-right ms-2 text-xs"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="grid grid-cols-2 px-6 py-4">
            <div className="columns-1 flex">
              <span className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-2xl">
                <i className="fa-solid fa-phone-flip"></i>
              </span>
              <div className="ms-4 py-2">
                <h4 className="text-sm font-bold mb-1 hover:text-red-600 cursor-pointer transition-all">980. 029. 666. 99</h4>
                <p className="text-xs text-gray-500">Working 8:00 - 22:00</p>
              </div>
            </div>
            <div className="columns-1 flex justify-end items-center">
              <div className="ms-4 py-2 text-left">
                <h4 className="text-sm font-bold mb-1">
                  Download App on Mobile
                </h4>
                <p className="text-xs text-gray-500">
                  15% discount on your first purchase
                </p>
              </div>
              <div className="flex gap-2 ms-4">
                <img src={google} alt="google" className="h-12" />
                <img src={apple} alt="apple" className="h-12" />
              </div>
            </div>
          </div>
        </div>
          <div className="grid grid-cols-2 px-6 footer-bg py-2">
            <div className="columns-1 text-left">
              <p className="text-sm text-gray-500">
                Copyright 2024 <span className="text-black font-semibold hover:text-red-600 cursor-pointer transition-all">©Ninico</span>. All rights reserved.
                Developed by <span className="text-black font-semibold hover:text-red-600 cursor-pointer transition-all"> AliThemes</span>
              </p>
            </div>
            <div className="columns-1 flex justify-end">
              <img src={icon} alt="bran-icon" className="h-6"/>
            </div>
          </div>
      </footer>
    </div>
  );
};
