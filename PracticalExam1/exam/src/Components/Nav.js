import React from "react";
import Logo from "../Components/Asset/Logo.jpeg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="grid sm:grid-cols-1 lg:grid-cols-2 border-b border-t border-gray-600">
        <div className="flex justify-center lg:block lg:mb-0 w-[100%] sm:mb-4 border-b border-gray-600 lg:me-auto lg:border-b-0">
          <img src={Logo} alt="Project Logo" className="h-16" />
        </div>
        <div className="flex items-center">
          <ul className="flex ms-auto border-l-2 border-gray-400 border-r-2">
            <li className="font-semibold text-lg text-amber-600 mx-6 border-b-2 border-sky-200 hover:border-green-700 hover:text-green-700 transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-lg text-amber-600 mx-6 border-b-2 border-sky-200 hover:border-green-700 hover:text-green-700 transition-all">
              <Link to="/about">About</Link>
            </li>
            <li className="font-semibold text-lg text-amber-600 mx-6 border-b-2 border-sky-200 hover:border-green-700 hover:text-green-700 transition-all">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="flex ms-auto">
            <li className="mx-2 bg-blue-400 hover:bg-blue-500 px-4 py-1 text-lg text-white rounded-lg transition-all">
              <Link to="/login">Login</Link>
            </li>
            <li className="mx-2 bg-red-400 hover:bg-red-500 px-4 py-1 text-lg text-white rounded-lg transition-all">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
