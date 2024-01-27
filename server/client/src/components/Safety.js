import React from "react";
import { NavLink } from "react-router-dom";

export const Safety = () => {
  return (
    <>
      <div className="bg-green-400 flex flex-col gap-10 px-4 md:px-24 py-10">
        <h1 className="font-bold font-scnd text-justify text-xl">
          On a daily basis, our technology facilitates countless connections
          between people in vehicles across cities globally. Ensuring their
          safety is a profound responsibility, and it's a commitment we uphold
          with the utmost gravity.
          
        </h1>
        <h2 className="text-2xl text-center md:text-left"> - Book-n-Go </h2>
      </div>
      
      <div className="md:p-36 px-4 py-10 font-scnd">
        <div>
          <h1 className="bg-[#f1ff2b00] text-4xl md:text-6xl p-6 text-center font-bold md:w-[600px]">
            "Engage with Us"
          </h1>
        </div>

        <div className="py-12">
          <h1 className="text-xl text-justify">
            We invite you to actively participate by sharing your thoughts,
            feedback, or suggestions that can contribute to ensuring the safety
            of every ride in our country and aid in our efforts against COVID.
            If your idea is selected, we'll make sure to acknowledge your
            valuable input. Your participation matters as we work together to
            create a safer and healthier travel experience for all. Feel free to
            connect with us, and let's collectively make a positive difference
            in the way we travel.
          </h1>
        </div>
        <div className="flex justify-center md:justify-start">
        <NavLink
          to="/ContactUs"
          className="rounded-md hover:bg-black group-hover:text-green-500 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 border-green-500 transition ease-in-out bg-[#33d1334b] font-medium border-green-00 text-green-600"
        >
          <span className="text-green-600 font-scnd font-bold">
            Share your Thoughts
          </span>
        </NavLink>
        </div>
      </div>
    </>
  );
};
