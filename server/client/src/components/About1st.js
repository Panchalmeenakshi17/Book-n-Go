import React from "react";
import About2nd from "./About2nd";

const About1st = () => {
  return (
    <>

      <div className="font-scnd md:mt-0 mt-96 pt-32 pb-20 px-4 md:p-36">
        <h1 className=" font-bold text-4xl md:text-start text-center md:text-6xl ">What Sets Us Apart?</h1>
    
        {/* 1st */}
        <div>
          <h1 className=" text-green-600 font-bold md:text-start text-center text-4xl mt-10 md:mt-20 ">Seamless Integration:</h1>
          <div className="flex md:flex-row flex-col justify-center gap-10 md:gap-[200px]">
            <div>
              <h2 className="md:mt-16 mt-10 text-justify text-xl md:text-2xl">
                We bridge the gap between public transport and private taxis,
                providing you with a comprehensive solution for your daily
                commute.
              </h2>
            </div>
            <div className="border-4 border-black shadow-black shadow-2xl">
              <img
                src="images/637ba5d7ef558_10.step.taxi.app.development.guide.png"
                className="w-[900px] shadow-black p-4 shadow-2xl bg-green-00 "
                alt="not valid"
              />
            </div>
          </div>
        </div>

        {/* 2nd  */}
        <div className="md:mt-36 mt-20">
          <h1 className="text-green-600 font-bold md:text-start text-center text-4xl">Affordable:</h1>
          <div className="flex md:flex-row flex-col mt-10 justify-center gap-10 md:gap-[200px]">
          <div className="bg-[#00800056] border-4 border-black shadow-black shadow-2xl ">
              <img
                src="images/0133532063fa84cbef2dccf1f5b93817-1.png"
                className="w-[1000px] shadow-black p-4 shadow-2xl"
                alt="not valid"
              />
            </div>
            <div>
              <h2 className="md:mt-16 mt-10 text-justify text-xl md:text-2xl">
              Save big on your daily commute costs. Enjoy the convenience of private travel without breaking the bank
              </h2>
            </div>
            
          </div>
        </div>
    
        {/* 3rd  */}
        <div className="md:mt-36">
        <h1 className="text-green-600 font-bold md:text-start text-center text-4xl mt-16 md:mt-20">Environmentally Friendly:</h1>
          <div className="flex md:flex-row flex-col justify-center gap-16 md:gap-[200px]">
            <div>
              <h2 className="md:mt-16 mt-10 text-justify text-xl md:text-2xl">
              Reduce your carbon footprint by sharing rides with fellow travelers. Join us in making a positive impact on the environment.
              </h2>
            </div>
            <div className="border-4 border-black shadow-black shadow-2xl">
              <img
                src="images/0133532063fa84cbef2dccf1f5b93817-1.png"
                className="w-[900px] shadow-black p-4 shadow-2xl"
                alt="not valid"
              />
            </div>
          </div>
        </div>
      </div>
      <About2nd/>
    </>
  );
};

export default About1st;
