import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import signbg from "../Assets/sign-bg.jpg";
import { GiHandBag } from "react-icons/gi";
import { FaRegEnvelope} from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

export const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onSubmitSignin(e){
    e.preventDefault();
    if(!email || !password){
      alert("Fill all Data!!");
    }else{
      alert("Succesfully Regester User!");
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", password);
    }
  }

  const handleClick = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  return (
    <>
      <div className="my-10 rounded-lg overflow-hidden">
        <img src={signbg} alt="Signin Background" />
        <div className="px-12 bg-gray-200 py-6">
          <div className="flex">
            <span className="h-12 w-24 rounded-lg text-red-600 bg-white text-xl flex justify-center items-center me-6">
              <GiHandBag />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Sign Up</h3>
              <p className="text-sm text-gray-500">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <form action="" onSubmit={onSubmitSignin}>
              <div className="flex bg-white py-3 px-6 text-lg items-center rounded-lg">
                <FaRegEnvelope className="me-4" />
                <input onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email address"
                  className="w-[85%] focus:outline-none"
                ></input>
              </div>
              <div className="flex bg-white py-3 px-6 text-lg items-center rounded-lg mt-2">
                <IoKeyOutline className="me-4" />
                <input onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Password"
                  className="w-[85%] focus:outline-none"
                ></input>
              </div>
              <div className="mt-2 text-sm underline ">
                <a href="#" className="hover:text-red-600">
                  Already Have Account?
                </a>
              </div>
              <div className="flex items-center justify-center mt-4">
                <button onClick={handleClick} className="flex items-center justify-center py-4 rounded-lg bg-amber-50 w-[100%] font-semibold hover:bg-black hover:text-white transition-all">
                  Regester Now <FaArrowRightLong className="ms-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
