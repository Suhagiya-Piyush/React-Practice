import React from "react";
import { ContactMap } from "./ContactMap";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";


export const ContactForm = () => {
  return (
    <div className="">
      <div className="px-10 my-16">
        <div className="grid grid-cols-3 gap-10">
          <div className="">
            <div className="border rounded-lg px-9 py-10 mb-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <div className="flex text-gray-500 mb-2">
                <IoLocationOutline className="me-4 mt-1 text-xl" />
                <p>24/26 Strait Bargate, Boston, PE21, United Kingdom</p>
              </div>
              <div className="flex text-gray-500 mb-2">
                <AiOutlinePhone className="me-4 mt-1" />
                <p>
                  <span>+098 (905) 786 897 8</span><br/>
                  <span>6 - 146 - 389 - 5748</span>
                </p>
              </div>
              <div className="flex text-gray-500 mb-2">
                <FaRegClock className="me-4 mt-1 text-sm" />
                <p>
                  <span>Store Hours:</span>
                  <br />
                  <span>10 am - 10 pm EST, 7 days a week</span>
                </p>
              </div>
            </div>
            <div className="border rounded-lg flex justify-center py-4 mb-6">
              <div className="flex items-center">
                <h2 className="text-xl font-semibold">Get Support On Call</h2>
                <CiHeadphones className="ms-4 text-red-600 text-2xl"/>
              </div>
            </div>
            <div className="border rounded-lg flex justify-center py-4">
              <div className="flex items-center">
                <h2 className="text-xl font-semibold">Get Direction </h2>
                <IoLocationOutline className="ms-4 text-red-600 text-2xl"/>
              </div>
            </div>
          </div>
          <div className="col-span-2 p-2">
            <h2 className="text-2xl font-bold mb-2">Make Custom Request</h2>
            <p className="text-sm text-gray-500">Must-have pieces selected every month want style Ideas and Treats?</p>
            <form action="https://formspree.io/f/mzbnoloa" method="POST" className="mt-8">
              <div className="grid grid-cols-2 gap-6 mb-4">
                <input type="text" name="fullname" placeholder="Full name" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
                <input type="text" name="email" placeholder="Email address" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <input type="text" name="phonenumber" placeholder="Phone number" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
                <input type="text" name="subject" placeholder="Subject" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
              </div>
              <div className="grid grid-cols-1 mb-6">
                <textarea name="message" id="" cols="30" rows="9" placeholder="Enter message" className="border rounded-lg px-4 py-3  focus:border-red-600 focus:outline-none"></textarea>
              </div>
              <div className="">
                <button className="flex text-sm bg-rose-600 text-white font-semibold items-center py-4 px-6 rounded-lg">Get A Quote <FaArrowRightLong className="ms-4"/></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  );
};
