import React from 'react';
import { Nav } from "./Nav";

export const Register = () => {
  return (
    <div className="min-h-[100vh] pt-4 pb-12 container mx-auto">
      <Nav />
      <div className="my-6 mx-14">
        <form action="" className="">
          <h1 className="text-xl font-semibold underline mb-10">Login</h1>
          <div className="border-2 border-gray-300 w-[50%] mx-auto rounded-2xl py-6 px-20">
            <ul>
              <li className="mb-4 text-left">
                <label htmlFor="" className="text-lg font-medium me-16">
                  Enter Name :
                </label>
                <input
                  type="text"
                  className="py-1 px-4 rounded-lg outline-0"
                  placeholder="Enter Your Name"
                />
              </li>
              <li className="mb-4 text-left">
                <label htmlFor="" className="text-lg font-medium me-10">
                  Enter Your Age :
                </label>
                <input
                  type="text"
                  className="py-1 px-4 rounded-lg outline-0"
                  placeholder="Enter Your Age"
                />
              </li>
              <li className="mb-4 text-left">
                <label htmlFor="" className="text-lg font-medium me-12">
                  Select Gender :
                </label>
                <input type="radio" name="gender" id="" className='me-2'/>Mail
                <input type="radio" name="gender" id="" className='ms-8 me-2'/>Femail
              </li>
              <li className="mb-4 text-left">
                <label htmlFor="" className="text-lg font-medium me-4">
                  Create User Name :
                </label>
                <input
                  type="text"
                  className="py-1 px-4 rounded-lg outline-0"
                  placeholder="Enter User Name"
                />
              </li>
              <li className="mb-4 text-left">
                <label htmlFor="" className="text-lg font-medium me-7">
                  Create Password :
                </label>
                <input
                  type="text"
                  className="py-1 px-4 rounded-lg outline-0"
                  placeholder="Enter Password"
                />
              </li>
              <li className="mb-4 mt-10">
                <button className="bg-blue-500 hover:bg-green-600 transition-all text-lg font-semibold py-1 px-6 rounded-lg text-white">Register</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}
