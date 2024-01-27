import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Afterdetail = () => {
  return (
    <>
      <motion.div
        className="md:my-32 my-10 md:py-0 py-4 bg-[#00000087] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <video
          className="videoTag opacity-40 w-full blur-md"
          autoPlay
          loop
          muted
        >
          <source
            src="/Videos/a.mp4"
            className=" opacity-40 w-full blur-sm"
            type="video/mp4"
          />
        </video>
        <div className="font-scnd w-full px-4 flex flex-col gap-10 md:gap-32 justify-center h-full absolute top-0 left-0">
          <div className="flex flex-col gap-2 md:gap-10">
          <h1 className="text-white font-scnd text-center text-lg md:text-6xl">
            Get to know more about the services and benefits offered by
          </h1>{" "}
          <h2 className="md:text-6xl text-xl text-center text-green-300"> Book-n-Go</h2>
          </div>
          <div className="flex justify-center">
          <div>
            <NavLink
              to="/AboutUs"
              className="w-[300px] transition ease-in-out rounded-md p-4 h-[200px] border-2 border-green-500 hover:bg-[#5fc45f80] hover:text-white "
            >
              <span className="text-green-300 w-[300px] text-xl transition duration-300 font-scnd font-bold ease">
                Click to Know More
              </span>
            </NavLink>
          </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Afterdetail;
