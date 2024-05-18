import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { AddCart } from "../Action/Action";

import productData from "../Product/ProductData"
import { PageHeading } from "../PageHeading/PageHeading";
import { IoCartOutline } from "react-icons/io5";


export const Pro_Details = () => {
  let Id  = useParams();
  let product = productData.find((item) => item.id === parseInt(Id.id));
  const dispatch = useDispatch();
  const Send = (e) => {
    dispatch(AddCart(e));
  };
  console.log(product);
  return (
    <>
      <PageHeading goBacklink="Home" pageTitle="Shop Details" />
      <div className="grid grid-cols-1 md:grid-cols-3 px-10">
        <div className="py-6">
          <img src={product.img} alt="Image1" className="w-[80%] h-[90%] mb-2 rounded-lg" />
        </div>
        <div className="p-6 col-span-2">
          <h3 className="text-3xl font-semibold">
            {product.title} <span className="text-sm py-1 px-2 border text-rose-600">In Stock</span>
          </h3>
          <h4 className="text-3xl text-rose-600 font-bold mt-3">
            <span className="text-xl text-gray-400 line-through">$9.35</span> $ {Math.trunc(product.rate)}
          </h4>
          <p className="mt-8 text-gray-500 font-semibold ">
            {product.dis_1}<br/> {product.dis_2}<br/> {product.dis_3}
          </p>
          <button className="flex items-center border py-4 px-8 mt-4 rounded-lg font-semibold text-white bg-rose-600" onClick={() => Send(product)} ><IoCartOutline className="me-2 text-lg"/>Add To Cart</button>
        </div>
      </div>
    </>
  );
};
