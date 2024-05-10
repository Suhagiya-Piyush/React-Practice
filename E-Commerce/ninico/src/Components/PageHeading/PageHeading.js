import React from "react";
import Img from "../Assets/breadcrumb-01.jpg";

export const PageHeading = (props) => {
  return (
    <>
      <div className="text-left relative">
        <img src={Img} alt="Error Image" className="h-[32vh]" />
        <div className="absolute top-0 md:top-[20%] px-10">
          <div className="flex items-center gap-2">
            <span className="my-4 hover:text-red-600 cursor-pointer">{props.goBacklink}</span>
            <div className="border-b-2 border-gray-400 rounded-lg h-0 w-8"></div>
            <span className="text-gray-600">{props.pageTitle}</span>
          </div>
          <h2 className="text-3xl font-bold">{props.pageTitle}</h2>
        </div>
      </div>
    </>
  );
};
