import React from "react";
import { NavLink } from "react-router-dom";

const About4th = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#008232e9] from-0% via-[#00823250] via-50% to-emerald-500 to-90%">
        <div className="md:p-36 px-4 py-10 font-scnd">
          <h1 className="text-white font-bold md:text-start text-center text-5xl md:text-6xl">Join Us Today!</h1>
          <h2 className="text-gray-100 text-justify text-xl md:text-2xl mt-10">
            Ready to transform your daily commute? Sign up with Book-n-Go today
            and experience a new era of travel convenience. Say goodbye to the
            commuting woes and hello to a smarter, more connected way of getting
            from point A to point B.
          </h2>

          <h1 className="gap-20 flex justify-between text-xl md:text-2xl mt-10">
            <NavLink to="/Safety">
              <h2 className="no-underline hover:underline transition ease-in-out font-bold text-green-900  hover:text-black">
                Learn More
              </h2>
            </NavLink>
            <NavLink to="/Contact">
              <h2 className="no-underline hover:underline transition ease-in-out font-bold text-green-900  hover:text-black">
                Contact Us
              </h2>
            </NavLink>
          </h1>
        </div>
      </div>
    </>
  );
};

export default About4th;
