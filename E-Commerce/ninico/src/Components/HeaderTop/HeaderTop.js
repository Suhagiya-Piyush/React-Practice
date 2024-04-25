import React from "react";
import "../HeaderTop/HeaderTop.css";

export const HeaderTop = () => {
  return (
    <div style={{ backgroundColor: "#F3EEE7" }}>
      <div className="container mx-auto mb-2 py-2">
        <h1 className="text-left ms-1 font-bold">
          Welcome to our international shop! Enjoy free shipping on orders $100
          up. <span className="text-red-600 text-lg border-b-2 border-red-600 cursor-pointer shop">Shop Now <i class="fa-solid fa-arrow-right ms-2 arrow"></i></span>
        </h1>
      </div>
    </div>
  );
};
