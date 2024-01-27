import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRiderById } from "../actions/riderAction";

export const RiderProfile = () => {
  const [riderName, setRiderName] = useState("");
  const [riderEmail, setRiderEmail] = useState("");
  const [riderPhone, setRiderPhone] = useState("");
  const [riderGender, setGender] = useState("");
  const [riderImage, setRiderImage] = useState("");

  const dispatch = useDispatch();

  const riderState = useSelector((state) => state.loginRiderReducer);
  const { currentRider } = riderState;

  const getRiderByState = useSelector((state) => state.getRiderByIdReducer);
  const { rider } = getRiderByState;

  useEffect(() => {
    if (rider) {
      if (rider._id === currentRider._id) {
        setRiderName(rider.riderName);
        setRiderEmail(rider.riderEmail);
        setRiderPhone(rider.riderPhone);
        setGender(rider.riderGender);
        setRiderImage(rider.riderImage);
        if(rider.riderImage == ""){
          setRiderImage("../images/user_icon.jpg");
        }
      } else {
        dispatch(getRiderById(currentRider._id));
      }
    } else {
      dispatch(getRiderById(currentRider._id));
    }
  }, [rider, dispatch, currentRider._id]);

  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-[#000000] from-0% via-[#00000088] via-50% to-[#000000] to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <video className="videoTag    md:w-full" autoPlay loop muted>
          <source
            src="/Videos/d.mp4"
            className=" md:w-1/2   "
            type="video/mp4"
          />
        </video>
        <div className="font-scnd  w-full  bg-yellow-0  justify-center   absolute top-44 left-0">
          <div className="md:flex bg-blue-00 md:flex-row p-5 md:p-0 flex-col md:space-y-0  md:justify-center">
            <div className="bg-[#00000077] md:mt-0 mt-5 shadow-[#78b774] bg-pink-00 shadow-md border-2 border-green-300 text-white flex flex-col md:gap-10 md:py-10 md:p-10  rounded-3xl  md:text-left md:text-2xl md:w-[900px] w-full items-center">
              <h1 className="md:text-5xl text-4xl md:p-0 p-5 font-bold  text-green-400  ">
                Your Profile
              </h1>
              <div>
                <img className="rounded-full w-36 h-36 border-4 border-green-400" src={riderImage} alt="not valid" />
              </div>
              <div className="w-full md:p-0 p-14 md:px-10 md:pl-4">
                <h1>Name: &nbsp;:&nbsp; {riderName}</h1>
                <h1>Passenger ID &nbsp;:&nbsp; {currentRider._id}</h1>

                <h1>Email &nbsp;:&nbsp; {riderEmail}</h1>
                <h1>Phone &nbsp;:&nbsp; {riderPhone}</h1>
                <h1>Gender &nbsp;:&nbsp; {riderGender}</h1>
                <div className=" flex justify-center p-8 ">
                  <NavLink to="/EditRider">
                    <button className="bg-blue-600 p-3 rounded-full text-lg text-white">
                      Edit Rider Details
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
