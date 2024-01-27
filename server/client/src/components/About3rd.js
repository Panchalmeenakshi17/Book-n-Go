import React from "react";
import About4th from "./About4th";

const About3rd = () => {
  return (
    <>
      <div className="font-scnd px-4 py-10 md:p-36">
        <h1 className="font-bold text-5xl md:text-start text-center md:text-6xl">Benefits for You</h1>

        <div className="">
          <h1 className="text-green-600 font-bold text-3xl md:text-4xl mt-16 md:mt-20">
            Cost Savings
          </h1>
          <div className=" ">
            <h2 className="md:mt-16 mt-10 text-justify text-xl md:text-2xl">
              We bridge the gap between public transport and private taxis,
              providing you with a comprehensive solution for your daily
              commute.
            </h2>
          </div>
          <h1 className="text-green-600 font-bold text-3xl md:text-4xl mt-16 md:mt-20">
            Time Efficiency:
          </h1>
          <div className=" ">
            <h2 className="md:mt-16 mt-10 text-justify text-xl md:text-2xl">
              Say goodbye to waiting for unreliable transport. Our platform
              ensures timely and efficient travel.
            </h2>
          </div>
          <h1 className="text-green-600 font-bold text-3xl md:text-4xl mt-16 md:mt-20">
            Community Building:
          </h1>
          <div className=" ">
            <h2 className="md:mt-16 mt-10 text-justify text-xl md:text-2xl">
              Connect with fellow commuters, make new friends, and foster a
              sense of community on every ride.
            </h2>
          </div>
        </div>
      </div>
      <About4th />
    </>
  );
};

export default About3rd;
