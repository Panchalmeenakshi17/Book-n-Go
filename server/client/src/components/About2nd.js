import { motion } from "framer-motion";
import React from "react";
import { MdArrowCircleRight } from "react-icons/md";
import About3rd from "./About3rd";

const About2nd = () => {
  return (
    <>
      <motion.div
        className=" bg-gradient-to-r from-[#008232e9] from-0% via-[#00823250] via-50% to-emerald-500 to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="md:p-36 px-4 py-10 font-scnd">
          <h1 className="font-bold text-5xl md:text-6xl">How It Works?</h1>
          <h1 className="flex gap-6 mt-16 font-bold text-3xl md:text-4xl">
            <MdArrowCircleRight />
            Sign Up:
          </h1>
          <h2 className="md:text-2xl text-xl text-justify mt-10">
            Create your account with Book-n-Go to unlock a world of hassle-free
            commuting.
          </h2>

          <h1 className="flex gap-6 mt-10 font-bold text-3xl md:text-4xl">
            <MdArrowCircleRight />
            Plan Your Route:
          </h1>
          <h2 className="md:text-2xl text-xl text-justify mt-10">
            Enter your starting point and destination, and let our intelligent
            system match you with compatible co-travelers and available rides.
          </h2>

          <h1 className="flex gap-6 mt-10 font-bold text-3xl md:text-4xl">
            <MdArrowCircleRight />
            Choose Your Ride:
          </h1>

          <h2 className="md:text-2xl text-xl text-justify mt-10">
            Select from a range of options, including public transport and
            private taxis, to suit your preferences and budget.
          </h2>

          <h1 className="flex gap-6 mt-10 font-bold text-3xl md:text-4xl">
            <MdArrowCircleRight />
            Enjoy the Ride:{" "}
          </h1>
          <h2 className="md:text-2xl text-xl text-justify mt-10">
            Sit back, relax, and enjoy a comfortable journey with like-minded
            individuals. Share stories, make new connections, and contribute to
            a more connected community.
          </h2>
        </div>
      </motion.div>
      <About3rd />
    </>
  );
};

export default About2nd;
