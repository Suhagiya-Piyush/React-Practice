import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart, AddList } from "../Action/Action";

//Icons
import { CiStar } from "react-icons/ci";
import { LuShoppingBasket } from "react-icons/lu";
import { FaStar, FaRegEye, FaRegHeart } from "react-icons/fa";

export const ProductTable = (product_Data) => {
  const navigate = useNavigate();
  const { img, img2, title, rate, qty, id } = product_Data;
  const dispatch = useDispatch();
  const Send = (e) => {
    dispatch(AddCart(e));
  };
  const Send_W = (e) => {
    dispatch(AddList(e));
  };
  return (
    <>
      <div className="sm:h-[20rem] md:h-[24rem] lg:h-[23rem] mr-2 main-data relative overflow-y-hidden z-10">
        <div className="img-data p-4 absolute z-10 bg-white rounded-lg">
          <div className="hover:rounded-lg ">
            <img src={img} alt="Image1" className="rounded-lg " />
            <div className="sec-img relative p-4">
              <Link to={`/product/${id}`}>
                <img src={img2} alt="Image1" className="rounded-lg " />
              </Link>
              <div
                className="flex text-xl text-gray-400 py-3 px-6 rounded-lg bg-white absolute 
                      top-[30%] left-[16%]"
              >
                <button className="mx-4 hover:text-black transition-all">
                  <LuShoppingBasket onClick={() => Send(product_Data)} />
                </button>
                <button className="mx-2 hover:text-black transition-all">
                  <Link to={`/product/${id}`}>
                    <FaRegEye />
                  </Link>
                </button>
                <button className="mx-4 hover:text-black transition-all">
                  <FaRegHeart onClick={() => Send_W(product_Data)} />
                </button>
              </div>
            </div>
            <div className="text-left mt-4">
              <h1 className="text-gray-500">{title}</h1>
              <p className="font-semibold">${rate}</p>
            </div>
            <div className="mt-4 opacity-0 dots flex justify-between">
              <div className="flex items-center">
                <a href="" className="blue"></a>
                <a href="" className="red"></a>
                <a href="" className="orange"></a>
                <a href="" className="purple"></a>
              </div>
              <div className="flex justify-center items-center cursor-pointer">
                <FaStar className="text-red-600 text-xs" />
                <FaStar className="text-red-600 text-xs" />
                <FaStar className="text-red-600 text-xs" />
                <FaStar className="text-red-600 text-xs" />
                <CiStar className="text-red-600 text-sm" />
                <span className="text-xs">(81)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
