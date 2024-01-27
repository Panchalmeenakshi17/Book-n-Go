import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Afterdetail from "./Afterdetail";

const Detail = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div exit={{ x: "-100vh", opacity: 0 }}>
          <div className="bg-[#52d24995] px-4 md:py-20 py-10">
            <h1 className="md:text-6xl text-4xl text-center font-scnd font-bold">
              Most Trusted Cab service in all World
            </h1>
            <div className="md:pt-20">
              <div className="text-center translate-x-[00px] flex md:flex-row flex-col justify-center gap-10 md:gap-[200px] mt-10  ">
                <div className="md:w-1/3 w-full hover:bg-[#eeeeed93] bg-[#ffffffb3] transition ease-in-out  rounded-2xl border-2 border-black shadow-2xl ">
                  <h1 className="font-scnd p-2 font-bold text-2xl">
                    Safety First:
                  </h1>
                  <h1 className="p-4 text-justify">
                    Your safety is our top priority. All drivers undergo
                    thorough background checks, and our platform includes
                    features such as emergency assistance and in-app
                    communication to ensure a secure travel experience.
                  </h1>
                </div>
                <div className="md:w-1/3 w-full hover:bg-[#eeeeed93] bg-[#ffffffb3] transition ease-in-out rounded-2xl border-2 border-black shadow-2xl">
                  <h1 className="font-scnd p-2 font-bold text-2xl">
                    Flexible Payment Options:
                  </h1>

                  <h1 className="text-justify p-4">
                    Pay for your rides seamlessly with multiple payment options.
                    Whether you prefer credit cards, digital wallets, or other
                    payment methods, we've got you covered.
                  </h1>
                </div>
              </div>
              <div className="text-center translate-x-[00px] flex md:flex-row flex-col justify-center gap-10 md:gap-[200px] mt-10 ">
                <div className="md:w-1/3 w-full hover:bg-[#eeeeed93] bg-[#ffffffb3] transition ease-in-out rounded-2xl border-2 border-black shadow-2xl">
                  <h1 className="font-scnd p-2 font-bold text-2xl">
                    User-Friendly Interface:
                  </h1>

                  <h1 className="text-justify p-4">
                    Our intuitive app and website make booking a ride a breeze.
                    Customize your travel preferences, find the perfect match
                    for your journey, and enjoy a user-friendly interface
                    designed with your convenience in mind.
                  </h1>
                </div>
                <div className="md:w-1/3 w-full hover:bg-[#eeeeed93] bg-[#ffffffb3] transition ease-in-out rounded-2xl border-2 border-black shadow-2xl">
                  <h1 className="font-scnd p-2 font-bold text-2xl">
                    Real-Time Tracking:
                  </h1>

                  <h1 className="text-justify p-4">
                    Stay in control of your journey with real-time tracking.
                    Know exactly where your ride is and when it will arrive,
                    giving you peace of mind and eliminating the stress of
                    waiting.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Afterdetail />
    </>
  );
};

export default Detail;
