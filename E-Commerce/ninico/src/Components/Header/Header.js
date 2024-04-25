import React from "react";
import logo from "../Assets/logo.png";
import flag from "../Assets/lang-flag.png";
import "../Header/Header.css";
import Category from "../Categories/Category";

export const Header = () => {
  return (
    <div className="">
      <header className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="col-span-2 flex px-4 justify-between">
            <img src={logo} alt="Logo/ninico" className="me-10 h-6" />
            <div className="border py-1 px-4 rounded-md min-w-[75%] bg-slate-100">
              <i className="fa-solid fa-magnifying-glass me-4"></i>
              <input
                type="text"
                className="min-w-[90%] focus:outline-none bg-slate-100"
                placeholder="Search products..."
              />
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="show-lst">
                <div className="flex border py-1 px-4 items-center font-semibold rounded-md bg-white">
                  <img src={flag} alt="flag" className="me-2 h-7" />
                  English
                  <span className="text-slate-400 ms-1 text-sm arrow">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <ul className="list text-start ps-2 border w-full rounded-md bg-white z-10 transition-all">
                  <li className="py-2">
                    <a href="#">Arabic</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Spanish</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Mandarin</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <select
                  name=""
                  id=""
                  className="border rounded-md p-1 text-xl ms-2"
                >
                  <option value="USD">USD</option>
                  <option value="YEAN">YEAN</option>
                  <option value="EURO">EURO</option>
                </select>
              </div>
              <div className="min-w-[30%] flex justify-around ms-auto">
                <button className="relative">
                  <i className="fa-solid fa-cart-shopping text-xl"></i>
                  <span className="absolute bg-red-600 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center bottom-4 left-3">
                    0
                  </span>
                </button>
                <button>
                  <i className="fa-regular fa-user text-xl"></i>
                </button>
                <button className="relative">
                  <i className="fa-regular fa-heart text-xl"></i>
                  <span className="absolute bg-red-600 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center bottom-4 left-3">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 items-center mt-2 ">
          <div className="col-1 rounded-lg">
            <Category />
          </div>
          <div className="col-span-6 px-4">
            <div className="flex justify-between">
              <nav>
                <div className="sm:ml-3">
                  <div className="flex space-x-4 cursor-pointer">
                    <div id="home" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 inline-block text-xs font-medium home header-link"
                      >
                        Home
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Wooden Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Fashion Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Furniture Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Cosmetics Home</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Food Grocery</a>
                        </li>
                      </ul>
                    </div>

                    <div id="shop" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 inline-block text-xs font-medium shop header-link"
                      >
                        Shop
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop 2</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop Details</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop Details 2</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Shop Location</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Cart</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Sign In</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Checkout</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Wishlist</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Product Track</a>
                        </li>
                      </ul>
                    </div>

                    <div id="page" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 inline-block text-xs font-medium pages header-link"
                      >
                        Pages
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="flex text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[900%] z-10  border-red-700 border-t-2 py-3">
                        <ul className="px-3 w-[150%]">
                          <h2 className="pt-2 pb-3 ms-3 hover:text-red-600 font-semibold">
                            PAGE LAYOUT
                          </h2>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop filters v1</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop filters v2</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop sidebar</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop Right sidebar</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Shop List view</a>
                          </li>
                        </ul>
                        <ul className="px-3 w-[150%]">
                          <h2 className="pt-2 pb-3 ms-3 hover:text-red-600 font-semibold">
                            PAGE LAYOUT
                          </h2>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">About</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Cart</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Checkout</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Sign In</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Log In</a>
                          </li>
                        </ul>
                        <ul className="px-3 w-[150%]">
                          <h2 className="pt-2 pb-3 ms-3 hover:text-red-600 font-semibold">
                            PAGE TYPE
                          </h2>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Product Track</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Wishlist</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">404 / Error</a>
                          </li>
                          <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all">
                            <a href="#">Coming Soon</a>
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div id="blog" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 inline-block text-xs font-medium blog header-link"
                      >
                        Blog
                        <i className="fa-solid fa-angle-down ms-1 text-slate-500"></i>
                      </a>
                      <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Blog</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Blog Details</a>
                        </li>
                      </ul>
                    </div>

                    <div id="contact" className="nav-link relative">
                      <a
                        href="#"
                        className="rounded-md px-3 my-3 inline-block text-xs font-medium contact header-link"
                      >
                        Contact
                      </a>
                      {/* <ul className="text-start ps-2 rounded-b-lg bg-white text-sm link-lst absolute w-[250%] z-10  border-red-700 border-t-2 py-3">
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Blog</a>
                        </li>
                        <li className="py-2 ms-3 hover:text-red-600 hover:ms-4 transition-all font-semibold">
                          <a href="#">Blog Details</a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </nav>
              <div className="pe-4 text-xs font-semibold flex justify-end items-center">
                <span className="call me-8">
                  <i className="fa-solid fa-phone-flip me-2"></i>908. 408. 501.
                  89
                </span>
                <span className="location">
                  <i className="fa-solid fa-location-dot me-2"></i>Find Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};