import React from "react";
import catData from "./CategoryData";
import "./TopCategory.css";

export const TopCategory = () => {
  return (
    <div className="px-10 my-16" style={{ backgroundColor: "#FEFEFE" }}>
      <h1 className="font-semibold text-3xl text-left">
        Top <span className="font-thin text-red-600">Categories</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pt-10 mx-auto cate">
        {catData.map((cValue, idx, arr) => {
          return (
            <div className="flex-row border-r my-3">
              <div className="max-w-36 min-h-36 bg-gray-50 mx-auto relative flex rounded-full cursor-pointer cate-lst">
                <img src={cValue.img} alt="First - Category" className="mx-auto" />
                <span className="absolute h-10 w-10 bg-white rounded-full font-bold top-0 right-0 flex items-center justify-center shadow-xl">
                  {cValue.num}
                </span>
              </div>
              <div className="mt-4 cate-h1">
                <h1 className="cursor-pointer text-lg">
                  {cValue.text1}<br/>{cValue.text2}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
