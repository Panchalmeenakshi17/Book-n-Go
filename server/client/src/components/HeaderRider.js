import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { logoutRider } from "../actions/riderAction";
import { CgProfile } from "react-icons/cg";

const HeaderRider = () => {
  const [menu, setMenu] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [signinModal, setsigninModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <motion.div
        className="bg-gradient-to-r from-[#008232e9] from-0% via-[#00823250] via-50% to-emerald-500 to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-[#000000ff] flex justify-between font-scnd items-center md:px-10 px-5 py-4">
          <div>
            <NavLink to="/">
              <img
                className="md:w-1/4 w-1/3"
                src="../images/Black_and_Green_Modern_Automotive_Logo__1_-removebg-preview.png"
                alt="not valid"
              />
            </NavLink>
          </div>

          <div>
            <div className="md:flex hidden justify-center md:gap-10 items-center text-green-400 text-lg font-bold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                    : null
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/riderportal"
                className={({ isActive }) =>
                  isActive
                    ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                    : null
                }
              >
                {" "}
                Book Your Ride
              </NavLink>
              <div className="group relative inline-block">
                <NavLink
                  to=""
                  className="text-green-400 inline-flex hover:bg-[#9be961] transition ease-in-out gap-2 hover:text-[#000000] font-scnd items-center py-2 px-5 rounded-xl"
                >
                  Company <MdKeyboardArrowDown className="text-2xl" />
                </NavLink>
                <div className="font-scnd hidden absolute group-hover:block w-full">
                  <div className="bg-[#153619] group-hover:block flex flex-col text-center space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl  ">
                    <NavLink
                      to="/AboutUs"
                      className={({ isActive }) =>
                        isActive
                          ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                          : null
                      }
                    >
                      <button className="p-2 w-full transition ease-in-out hover:bg-[#348c3364]">
                        About Us
                      </button>
                    </NavLink>

                    <NavLink
                      to="/ContactUs"
                      className={({ isActive }) =>
                        isActive
                          ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                          : null
                      }
                    >
                      <button className="p-2 w-full transition ease-in-out hover:bg-[#348c3364]">
                        Contact
                      </button>
                    </NavLink>

                    <NavLink
                      to="/TermsCondition"
                      className={({ isActive }) =>
                        isActive
                          ? " mt-3  transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                          : null
                      }
                    >
                      <button className="p-2 w-full rounded-bl-xl rounded-br-xl transition ease-in-out hover:bg-[#348c3364]">
                        Privacy Policy
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex gap-10  justify-center items-center text-green-400 text-lg font-semibold">
                <NavLink
                  to="/safety"
                  className={({ isActive }) =>
                    isActive
                      ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                      : null
                  }
                >
                  Safety
                </NavLink>

                <div className=" group relative inline-block">
                  <CgProfile className="  rounded-full transition ease-in-out hover:bg-[#14ba1473] hover:rounded-full  text-5xl" />
                  <div className="font-scnd hidden absolute hover:transition hover:ease-in-out group-hover:block w-full">
                    <div className="bg-[#153619] rounded-bl-xl group-hover:block flex flex-col text-center space-y-2  z-20 absolute rounded-br-2xl md:w-[100px]  -translate-x-6 ">
                      <NavLink
                        to="/RiderProfile"
                        className={({ isActive }) =>
                          isActive
                            ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                            : null
                        }
                      >
                        <button className=" p-2 w-full   transition ease-in-out hover:bg-[#348c3364]">
                          Profile
                        </button>
                      </NavLink>
                      <button
                        onClick={() => {
                          dispatch(logoutRider());
                        }}
                        className=" p-2 w-full rounded-bl-xl  hover:bg-red-700 rounded-br-2xl hover:shadow-inner tranition ease-in-out bg-red-500"
                      >
                        <span className="relative w-full text-left text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative">
              {!menu && (
                <HiMenuAlt4
                  fontSize={28}
                  className="bg-green-400 rounded fill-white md:hidden cursor-pointer"
                  onClick={() => setMenu(true)}
                />
              )}
              {menu && (
                <ul
                  className="z-10 bg-black/70 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
                >
                  <li className="text-xl w-full my-3">
                    <AiOutlineClose
                      className="stroke-2"
                      onClick={() => setMenu(false)}
                    />
                  </li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive ? "text-green-400 font-black" : null
                    }
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      Home
                    </li>
                  </NavLink>
                  <NavLink
                    to="/riderportal"
                    className={({ isActive }) =>
                      isActive ? "text-green-400 font-bold" : null
                    }
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      Book Your Ride
                    </li>
                  </NavLink>

                  <NavLink
                    to="/AboutUs"
                    className={({ isActive }) =>
                      isActive ? "text-light2 font-bold" : null
                    }
                  >
                    <li className="group my-3 relative inline-block cursor-pointer text-lg font-semibold hover:text-light2">
                      <span className="flex flex-row gap-2 justify-center">
                        <button className="inline-flex outline-none pb-2 focus:outline-none">
                          Company
                        </button>
                        <MdKeyboardArrowDown className="text-2xl" />
                      </span>
                      <div className="bg-teal-900 w-36 text-center border-solid border-2 border-white/10 shadow-gray-400/50 shadow-md rounded absolute p-3  hidden group-hover:block">
                        <ul className="text-white">
                          <NavLink
                            to="/AboutUs"
                            // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                          >
                            <li className="cursor-pointer  z-10 text-lg font-semibold hover:text-light2">
                              About Us
                            </li>
                          </NavLink>
                          <NavLink
                            to="/ContactUs"
                            // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                          >
                            <li className="cursor-pointer text-lg mt-1 font-semibold hover:text-light2">
                              Contact
                            </li>
                          </NavLink>
                          <NavLink
                            to="/TermsCondition"
                            // className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                          >
                            <li className="cursor-pointer text-lg mt-1 font-semibold hover:text-light2">
                              Privacy Policy
                            </li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                  </NavLink>

                  <div className=" translate-y-[400px] flex flex-col ">
                    <NavLink
                      to="/safety"
                      className={({ isActive }) =>
                        isActive ? "text-green-400 font-bold" : null
                      }
                    >
                      <li className=" text-center p-2 w-40 rounded-2xl border-2 bg-[#66ed9a8a] border-emerald-400 text-lg mx-4 font-semibold cursor-pointer hover:text-[#eaebea]">
                        Safety
                      </li>
                    </NavLink>
                    <div className=" group relative inline-block">
                      <CgProfile className="text-5xl md:translate-x-0 translate-x-16 md:mt-0 mt-2" />
                      <div className="font-scnd hidden absolute hover:transition hover:ease-in-out group-hover:block w-full">
                        <div className="bg-[#153619] hover:transition md:-translate-x-10 translate-x-2 hover:ease-in-out group-hover:block flex flex-col text-center p-4 space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl ">
                          <NavLink
                            to="/RiderProfile"
                            className={({ isActive }) =>
                              isActive
                                ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl"
                                : null
                            }
                          >
                            <button className="  w-full   transition ease-in-out hover:bg-[#348c3364]">
                              Profile
                            </button>
                          </NavLink>
                          <button
                            onClick={() => {
                              dispatch(logoutRider());
                            }}
                            className=" p-2 hover:bg-red-700 hover:shadow-inner tranition ease-in-out bg-red-500"
                          >
                            <span className="relative w-full text-left text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                              Logout
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </motion.div>{" "}
    </>
  );
};

export default HeaderRider;
