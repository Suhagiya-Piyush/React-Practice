import React from "react";
import { Nav } from "./Nav";

export const About = () => {
  return (
    <div className="min-h-[100vh] pt-4 pb-12 container mx-auto">
      <Nav />
      <h1 className="font-semibold text-2xl text-gray-400 border-b-2 border-black w-[40%] mx-auto mb-8 mt-4 cursor-pointer hover:text-green-600 transition-all hover:border-sky-200">
        This is About Page!
      </h1>
      <div className="max-w-[70%] mx-auto">
        <h4 className="text-left text-lg text-red-400 font-semibold underline hover:text-red-700 cursor-pointer">
          Legal Information :-
        </h4>
        <p className="my-4 border-b border-black text-left">
          <span className="cursor-pointer me-5">👍</span> Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Accusantium dolore nobis, tempore
          eum vitae non ea perspiciatis ratione iste iusto, quaerat
          exercitationem velit quam facilis ex incidunt repudiandae, animi
          magni?
        </p>
        <h4 className="text-left text-lg text-red-400 font-semibold underline hover:text-red-700 cursor-pointer">
          Technical Information :-
        </h4>
        <p className="my-4 border-b border-black text-left">
          <span className="cursor-pointer me-5">👍</span> Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Fugiat, blanditiis? Nisi animi
          molestiae expedita quam maiores assumenda molestias ex quibusdam amet
          vitae esse labore eligendi, incidunt iste nulla qui cum?
        </p>
        <h4 className="text-left text-lg text-red-400 font-semibold underline hover:text-red-700 cursor-pointer">
          Other Information :-{" "}
        </h4>
        <p className="my-4 mt-6 border-b border-black text-left">
          <span className="cursor-pointer me-5">👍</span> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ullam expedita explicabo obcaecati
          quas laboriosam nemo assumenda, odio, quam minima ea totam qui fugit.
          Labore sequi impedit, numquam nesciunt odio quia!
        </p>
      </div>
    </div>
  );
};
