import React from "react";
import { Nav } from "./Nav";

export const Contact = () => {
  return (
    <div className="min-h-[100vh] pt-4 pb-12 container mx-auto">
      <Nav />
      <div className="my-6 mx-14">
        <h1 className="text-start font-semibold text-2xl">
          Connecting Details :
        </h1>
        <div className="max-w-[80%] mx-auto text-left border-2 border-gray-500 p-2 rounded-lg mt-4">
          <p className="text-lg font-medium text-gray-600 flex">
            <pre className="text-gray-400">Company Name      :  </pre>S P Group
          </p>
          <p className="text-lg font-medium text-gray-600 flex uppercase">
            <pre className="text-gray-400 capitalize">Owner Name        :  </pre>Piyush Suhagiya
          </p>
          <p className="text-lg font-medium text-gray-600 flex uppercase">
            <pre className="text-gray-400 capitalize">Manager Name      :  </pre>Sahil Dudhat
          </p>
          <p className="text-lg font-medium text-gray-600 flex">
            <pre className="text-gray-400">Contact No.       :  </pre>+91 (95865-12031)
          </p>
          <p className="text-lg font-medium text-gray-600 flex uppercase">
            <pre className="text-gray-400 capitalize">E-Mail Address    :  </pre>sahil.dudhat@gmail.com
          </p>
          <p className="text-lg font-medium text-gray-600 flex">
            <pre className="text-gray-400">Company Address   :  </pre><i class="fa-solid fa-location-dot my-auto"></i><pre> Shpo No : 135, Royal Arcade Sarthana JakatNaka, Surat.
            </pre>
          </p>
          <p className="text-lg font-medium text-gray-600 flex">
            <pre className="text-gray-400">Pin Code          :  </pre> 395006.
          </p>

        </div>
      </div>
    </div>
  );
};
