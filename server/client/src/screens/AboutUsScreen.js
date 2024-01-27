import React from "react";
import About1st from "../components/About1st";
import { motion } from "framer-motion";

const AboutUsScreen = () => {
  return (
    <>
      <motion.div
        className="relative h-full bg-gradient-to-r from-[#008232e9] from-0% via-[#00823250] via-50% to-emerald-500 to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <img
          src="images/a.png"
          className="md:shadow-xl opacity-40 blur-sm bg-blend-overlay "
          alt="not found"
        />
        <div className="absolute px-4 md:px-0 top-0 left-0 text-center h-full w-full gap-[10px] justify-between">
          <div className="text-center">
            <div className=" justify-between text-center bg-gray-5">
              <div className="text-center w-full translate-y-[50px] md:translate-y-[160px]">
                <h1 className="font-scnd text-black font-bold text-5xl md:text-7xl">
                  Welcome to Book-n-Go
                </h1>
              </div>
              <div className="md:translate-y-[210px] translate-y-[110px] text-center">
                <div className=" bg-[#aee6aa9f] shadow-black shadow-2xl p-6 mt-6 shadow-l border-2 border-black  rounded-3xl w-full md:w-[800px] md:translate-x-[340px] ">
                  <h1 className=" md:text-white text-green-500 font-bold font-scnd text-3xl md:text-4xl">
                    Your Seamless Journey Awaits
                  </h1>
                  <h1 className=" text-black p-6 text-justify text-xl md:text-xl ">
                    Are you tired of the hassles of commuting, stuck between the
                    limited options of public transport and the convenience of
                    private taxis? Look no further! Book-n-Go is here to
                    revolutionize your travel experience.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
      <About1st />
    </>
  );
};

export default AboutUsScreen;