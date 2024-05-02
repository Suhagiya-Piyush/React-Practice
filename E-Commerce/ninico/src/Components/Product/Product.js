import React from "react";
import productData from "./ProductData";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export const Product = () => {
  return (
    <div className="px-10 my-10">
      <div className="flex-wrap md:flex justify-between">
        <h1 className="text-2xl font-semibold">
          Popular <span className="font-normal text-red-600">Product</span>
        </h1>
        <ul className="flex-wrap md:flex font-semibold">
          <li className="mx-8">
            <a href="#" className="text-red-600 underline">
              All
            </a>
          </li>
          <li className="mx-8">
            <a href="#">Popular</a>
          </li>
          <li className="mx-8">
            <a href="#">On Sale</a>
          </li>
          <li className="mx-8">
            <a href="#">Best Rated</a>
          </li>
        </ul>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
        {productData.map((value, ind, array) => {
          return (
            <div className="sm:h-[20rem] md:h-[24rem] lg:h-[23rem] mr-2 main-data relative overflow-y-hidden z-10">
              <div className="img-data p-4 absolute z-10 bg-white rounded-lg">
                <div className="hover:rounded-lg ">
                  <img src={value.img} alt="Image1" className="rounded-lg " />
                  <div className="sec-img  p-4">
                    <img
                      src={value.img2}
                      alt="Image1"
                      className="rounded-lg "
                    />
                  </div>
                  <div className="text-left mt-4">
                    <h1 className="text-gray-500">{value.title}</h1>
                    <p className="font-semibold">{value.rate}</p>
                  </div>
                  <div className="mt-4 opacity-0 dots flex justify-between">
                    <div className="flex items-center">
                      <a href="" className="blue"></a>
                      <a href="" className="red"></a>
                      <a href="" className="orange"></a>
                      <a href="" className="purple"></a>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer">
                      <FaStar className="text-red-600 text-xs"/>
                      <FaStar className="text-red-600 text-xs"/>
                      <FaStar className="text-red-600 text-xs"/>
                      <FaStar className="text-red-600 text-xs"/>
                      <CiStar className="text-red-600 text-sm"/>
                      <span className="text-xs">(81)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
