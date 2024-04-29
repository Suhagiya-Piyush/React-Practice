import React from "react";
import Img from "../Assets/floded01.png";

export const Abstract = () => {
  return (
    <div className="px-10">
      <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end p-6">
          <img src={Img} alt="Image" />
        </div>
        <div className="ps-10 py-16">
          <div className="text-left pe-10">
            <h3 className="text-2xl font-bold text-red-600 mb-2">
              $49.00<span className="line-through text-gray-500">$59.00</span>
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Pro2 Abstract Folded Pots
            </h2>
            <p className="text-gray-500 font-semibold">
              Elegant pink origami design three-dimensional view and decoration
              co-exist. Great for adding a decorative touch to any room’s decor.
              Wonderful accent piece for coffee tables or side tables.
            </p>
          </div>
          <div className="h-[6px] bg-white my-8 rounded-s-xl overflow-hidden">
            <div className="h-[6px] bg-red-600 w-[80%] rounded-xl"></div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <div className="bg-white rounded-lg py-4">
              <h2 className="text-3xl font-bold mb-1">-130</h2>
              <p className="text-gray-500">Days</p>
            </div>
            <div className="bg-white rounded-lg py-4">
              <h2 className="text-3xl font-bold mb-1">-16</h2>
              <p className="text-gray-500">Hour</p>
            </div>
            <div className="bg-white rounded-lg py-4">
              <h2 className="text-3xl font-bold mb-1">-59</h2>
              <p className="text-gray-500">Minute</p>
            </div>
            <div className="bg-white rounded-lg py-4">
              <h2 className="text-3xl font-bold mb-1">-42</h2>
              <p className="text-gray-500">Second</p>
            </div>
            <div className="col-span-2 ps-4 flex">
              <div className="my-auto text-left text-gray-500 font-medium">
                <p>Remains until the</p>
                <p>end of the offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
