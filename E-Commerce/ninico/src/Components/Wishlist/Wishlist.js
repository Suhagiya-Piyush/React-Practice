import React, { useState } from "react";
import { PageHeading } from "../PageHeading/PageHeading";
import Img from "../Assets/product1.jpg";

export const Wishlist = () => {
  // const [count, setCount] = useState(1);
  // let price = 20;
  // const updatePrice = () => {
  //   setCount(count * price);
  // }
  return (
    <div>
      <PageHeading goBacklink="Home" pageTitle="Wishlist" />
      <div className="table-content px-10">
        <table className="table-auto w-full border my-20">
          <thead>
            <tr className="border">
              <th className="border">Images</th>
              <th className="border">Courses</th>
              <th className="border">Unit Price</th>
              <th className="border">Quantity</th>
              <th className="border">Totle</th>
              <th className="border">Add To Cart</th>
              <th className="border">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border py-6">
                <a href="#" className="flex justify-center">
                  <img src={Img} alt="Product1" className="w-32" />
                </a>
              </td>
              <td className="border text-center">
                <a
                  href="#"
                  className="font-bold hover:text-rose-600 transition-all"
                >
                  Bradley Burgess 2
                </a>
              </td>
              <td className="border text-center">$20</td>
              <td className="border text-center">
                <input
                  type="number"
                  id="counter"
                  min={1}
                  defaultValue={1}
                  // onChange={updatePrice()}
                  name="qty"
                  className="focus:outline-none border py-4 px-3 rounded-lg"
                />
              </td>
              <td className="border text-center">$20</td>
              <td className="border text-center">
                <button className="py-3 px-8 bg-rose-600 text-white font-semibold rounded-lg">
                  Add to Cart
                </button>
              </td>
              <td className="border text-center">Remove</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
