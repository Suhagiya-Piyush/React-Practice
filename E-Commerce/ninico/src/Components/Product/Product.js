import React from "react";
import productData from "./ProductData";

export const Product = () => {
  return (
    <div className="px-10 my-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">
          Popular <span className="font-normal text-red-600">Product</span>
        </h1>
        <ul className="flex font-semibold">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productData.map((value, ind, array) => {
          return (
            <div className="mt-4 p-4">
              <div className="">
                <img src={value.img} alt="Image1" className="rounded-lg" />
              </div>
              <div className="text-left mt-4">
                <h1 className="text-gray-500">{value.title}</h1>
                <p className="font-semibold">{value.rate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
