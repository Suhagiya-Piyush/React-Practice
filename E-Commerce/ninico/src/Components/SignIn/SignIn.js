import React from "react";
import ErrImg from "../Assets/breadcrumb-01.jpg";
import signbg from "../Assets/sign-bg.jpg";
import loginbg from "../Assets/login-bg.jpg";
import { GiHandBag } from "react-icons/gi";

export const SignIn = () => {
  return (
    <div>
      <div className="text-left relative">
        <img src={ErrImg} alt="Error Image" className="h-[32vh]" />
        <div className="absolute top-0 md:top-[20%] px-10">
          <div className="flex items-center gap-2">
            <span className="my-4 hover:text-red-600 cursor-pointer">Home</span>
            <div className="border-b-2 border-gray-400 rounded-lg h-0 w-8"></div>
            <span className="text-gray-600">Sign In</span>
          </div>
          <h2 className="text-3xl font-bold">Sign IN</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-10">
        <div className="">
          <img src={signbg} alt="Signin Background" />
          <div className="px-10">
            <div className="flex">
              <span><GiHandBag /></span>
              <div>
                <h3>Sign Up</h3>
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
