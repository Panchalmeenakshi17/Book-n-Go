import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Newsletter from "./Newsletter";
import Detail from "./Detail";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="flex md:flex-row px-4 flex-col-reverse justify-center gap-10 md:gap-40 pb-10 md:py-20">
        <div className="flex text-center flex-col justify-center items-start gap-10">
          <h1 className="md:text-7xl text-6xl font-scnd font-bold">Ride with Book-n-go</h1>
          <h1 className="text-4xl font-scnd text-green-600 font-semibold">
            Earn while you Drive
          </h1>
          <div className="flex flex-col gap-5 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter location"
                className="border-solid w-full p-3 border-2 shadow-sm shadow-gray-400 bg-[#eeeeee]"
              />
              <FaLocationArrow className="absolute top-3 right-3 text-xl" />
            </div>
            <div className="relative">
            <input
              type="text"
              placeholder="Enter destination"
              className="border-solid w-full p-3 border-2 shadow-sm shadow-gray-400 bg-[#eeeeee]"
            />
            <FaLocationArrow className="absolute top-3 right-3 text-xl" />
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
          <NavLink
            to="/riderportal"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 border-green-500 bg-[#33d1334b] font-medium border-green-00  text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-green-600 transition duration-300 font-scnd font-bold group-hover:text-white ease">
              Click to view your TAXI
            </span>
          </NavLink>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <img
            src="../images/Firefly_real_taxi_in_green_color_45825-removebg-preview.png"
            className="w-full"
            alt="not valid"
          />
        </div>
      </div>
      <Detail />
      <Newsletter />
    </>
  );
};

export default HeroSection;
