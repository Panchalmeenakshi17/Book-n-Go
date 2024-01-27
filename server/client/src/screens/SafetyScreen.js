import React from "react";
import { Safety } from "../components/Safety";
import { motion } from "framer-motion";

const SafetyScreen = () => {
  return (
    <>
      <motion.div
        className="bg-[#a4e0a48a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="md:p-32 px-4 py-10 font-scnd">
          <div>
            <h1 className="bg-[#29914f] text-white rounded-3xl text-4xl md:text-6xl p-6 text-center font-bold md:w-[600px]">
              "Travel Securely"
            </h1>
          </div>
          <div className="grid md:grid-cols-2 h-min grid-rows-1 md:gap-20 md:py-12">
            <h1 className="py-12 text-justify text-xl">
              Experience the freedom to move seamlessly, optimizing your time
              while staying connected to the people and places that hold
              significance for you. Our commitment to safety is paramount,
              demonstrated through the establishment of new standards and the
              development of cutting-edge technology aimed at minimizing
              incidents. At Book-n-Go, we are dedicated to revolutionizing
              safety standards, especially in a post-COVID world. Your
              well-being is our priority, and we strive to provide you with a
              secure and reliable travel experience.
            </h1>
            <img
              src="images/s.jpg"
              alt="not found"
              className=" shadow-black shadow-2xl mt-9 border-2 border-black "
            />
          </div>
        </div>

        <div className="bg-green-400 mt-10 md:mt-0">
          <h1 className="font-bold font-scnd px-4 md:p-20 text-center md:px-36 text-white text-4xl md:text-5xl">
            Safety measures for Driver and Passenger.
          </h1>
        </div>
        <div className="md:p-36 px-4 py-10">
          <div className="grid md:grid-cols-2 grid-rows-1 gap-20">
            <div className="font-scnd">
              <img
                src="images/istockphoto-619264998-612x612.jpg"
                className="shadow-black shadow-2xl border-4 border-black"
                alt="not found"
              />
              <h1 className="font-bold md:text-left text-center text-3xl py-10">
                Passenger Safety Guidlines :
              </h1>
              <h1 className="md:w-[600px] w-full text-justify py-1">
                Ensuring your safety is our top priority when you ride with
                Book-n-drive. Follow these guidelines to enhance your security
                throughout the journey. First and foremost, always verify your
                ride by matching the license plate number, confirming the car
                make and model, and checking the driver's photo. Make use of the
                safety features embedded in the app, including the in-app
                emergency button, the Safety Toolkit, and real-time trip sharing
                with Trusted Contacts. Stay informed by reviewing the driver's
                information, participating in 2-way ratings for feedback, and
                benefiting from GPS tracking. Trust in leading insurance
                providers for coverage, and appreciate the phone number
                anonymization feature for added privacy. Uphold community
                guidelines to ensure an inclusive and respectful environment,
                reporting any concerns promptly. Remember, your safety is
                paramount, and by adhering to these guidelines, you contribute
                to creating a secure and enjoyable travel experience.
              </h1>
            </div>
            <div className="font-scnd">
              <img
                src="images/truck-driver-giving-thumbs-up-during-coronavirus-pandemic-1-1-scaled.jpg"
                className=" shadow-black shadow-2xl border-4 border-black"
                alt="not found"
              />
              <h1 className="font-bold md:text-left text-center text-3xl py-10">
                Driver Safety Guidlines :
              </h1>

              <h1 className="text-justify py-1">
                As an Book-n-drive driver, prioritize safety by respecting
                passengers' mask preferences, even though not mandatory.
                Encourage sensible seating arrangements, favoring the front seat
                when necessary for group size. Maintain health precautions with
                open windows, regular sanitization, and covering coughs. Embrace
                Book-n-drive's Door-to-Door Safety Standard, verify your face
                cover before going online, and utilize provided health supplies.
                Your commitment to 24/7 incident support, feedback, and
                anonymized communication fosters a secure and positive
                environment for both drivers and riders.
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
      <Safety />
    </>
  );
};

export default SafetyScreen;
