import React, { useState } from "react";
import { PageHeading } from "../PageHeading/PageHeading";
import { HeaderTop } from "../HeaderTop/HeaderTop";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import { incr_Qty } from "../Action/Action";
import { dec_Qty } from "../Action/Action";
import { RemoveItem } from "../Action/Action";

import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

export const AddtoCart = () => {
  const data = useSelector((state) => state.cartreducer.carts);
  // console.log("Data",data);
  const disp = useDispatch();
  const incCount = (item) => {
    disp(incr_Qty(item));
  };
  const decCount = (item) => {
    disp(dec_Qty(item));
  };
  const Remove = (id) => {
    disp(RemoveItem(id));
  };
  return (
    <div>
      <HeaderTop />
      <Header />
      <PageHeading goBacklink="Home" pageTitle="Add To Cart" />
      <div className="table-content px-10">
        <table className="table-auto w-full border my-20">
          <thead>
            <tr className="border">
              <th className="border">Images</th>
              <th className="border">Courses</th>
              <th className="border">Unit Price</th>
              <th className="border">Quantity</th>
              <th className="border">Totle</th>
              <th className="border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currentVal, idx) => {
              let { title, img, rate, id, qty } = currentVal;
              return (
                <tr key={idx} className="border">
                  <td className="border py-6">
                    <a href="#" className="flex justify-center">
                      <img src={img} alt="Product1" className="w-32" />
                    </a>
                  </td>
                  <td className="border text-center">
                    <a
                      href="#"
                      className="font-bold hover:text-rose-600 transition-all"
                    >
                      {title}
                    </a>
                  </td>
                  <td className="border text-center">${rate}</td>
                  <td className="border text-center px-10">
                    <span className="flex border px-4 py-2 rounded-lg">
                      {qty}
                      <div className="ms-auto my-auto hover:bg-gray-400">
                        <button className="block border border-white" onClick={() => incCount(currentVal)}>
                          <MdArrowDropUp />
                        </button>
                        <button className="block border border-white" onClick={() => decCount(currentVal)}>
                          <MdArrowDropDown />
                        </button>
                      </div>
                    </span>
                  </td>
                  <td className="border text-center">${qty * rate}</td>
                  <td className="border text-center"><button onClick={() => Remove(id)}>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
