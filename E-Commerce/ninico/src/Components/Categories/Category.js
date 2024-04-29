import React from "react";

const Category = () => {
    const showList = () => {
        const list = document.getElementById("Category-lst");
        list.classList.toggle("hidden");
    } 
  return (
    <div className="relative">
      <div className="px-8 py-2 flex items-center Categories font-semibold text-white text-sm cursor-pointer rounded-t-lg" onClick={showList}>
        <i className="fa-solid fa-bars me-4 text-lg"></i>Categories
      </div>
      <div className="absolute z-20 bg-white w-full rounded-b-lg overflow-hidden shadow-xl" id="Category-lst">
        <ul className="text-xs text-start font-medium categories-lst w-full">
          <li className="py-3 ps-8">
            <span className="">
              <i className="fa-regular fa-user text-red-600 me-5"></i>Candles
            </span>
          </li>
          <li className="py-3 ps-8 flex justify-between items-center">
            <span className="">
              <i class="fa-solid fa-snowflake text-red-600 me-5"></i>
              Handmade
            </span>
            <i className="fa-solid fa-arrow-right me-4 text-slate-300"></i>
          </li>
          <li className="py-3 ps-8">
            <span className="">
              <i className="fa-solid fa-shoe-prints text-red-600 me-5"></i>
              Gift Sets
            </span>
          </li>
          <li className="py-3 ps-8">
            <span className="">
              <i className="fa-regular fa-face-smile text-red-600 me-5"></i>
              Plastic Gifts
            </span>
          </li>
          <li className="py-3 ps-8">
            <span className="">
              <i className="fa-regular fa-futbol text-red-600 me-5"></i>Handy Cream
            </span>
          </li>
          <li className="py-3 ps-8">
            <span className="">
              <i className="fa-brands fa-web-awesome text-red-600 me-5"></i>
              Cosmetics
            </span>
          </li>
          <li className="py-3 ps-8">
            <span className="">
              <i className="fa-solid fa-gift text-red-600 me-5"></i> Silk
              Accessories
            </span>
          </li>
        </ul>
        <div className="text-start text-xs ps-8 font-semibold offer py-4">
          <pre className="py-1">Value of the Day</pre>
          <pre className="py-1">Top 100 Offers</pre>
          <pre className="py-1">New Arrivals</pre>
        </div>
      </div>
    </div>
  );
};

export default Category;