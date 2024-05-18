import React from "react";
import productData from "./ProductData";
import "./Product.css";
import { ProductTable } from "./ProductTable";

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
            <ProductTable key={ind} qty={value.qty} id={value.id} img={value.img} img2={value.img2} title={value.title} rate={value.rate} />
          );
        })}
      </div>
    </div>
  );
};
