import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signinModal, setsigninModal] = useState(false);

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
                      isActive ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl" : null
                    }>Home
               
              </NavLink>
              <NavLink to="/LoginFirst"
              className={({ isActive }) =>
                      isActive ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl" : null
                    }> Book Your Ride
                 
              </NavLink>
              <div className="group relative inline-block">
                <NavLink
                  to=""
                  className="text-green-400 inline-flex hover:bg-[#9be961] transition ease-in-out gap-2 hover:text-[#000000] font-scnd items-center py-2 px-5 rounded-xl"
                >
                  Company <MdKeyboardArrowDown className="text-2xl" />
                </NavLink>
                <div className="font-scnd hidden absolute group-hover:block w-full">
                  <div className="bg-[#153619] group-hover:block flex flex-col text-center p-4 space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl ">
                    <NavLink to="/AboutUs"
                    className={({ isActive }) =>
                      isActive ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl" : null
                    }>About Us
                       
                    </NavLink>
                    <br/>
                    <NavLink to="/ContactUs"
                    className={({ isActive }) =>
                      isActive ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl" : null
                    }>
                    <button className="mt-3">
                    Contact
                    </button>
                        
                    </NavLink><br/>
                    <NavLink to="/TermsCondition"
                    className={({ isActive }) =>
                      isActive ? " mt-3  transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl" : null
                    }><button className="mt-3">
Privacy Policy
                    </button>
                        
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 justify-center items-center text-green-400 text-lg font-semibold">
                <NavLink to="/safety"
                className={({ isActive }) =>
                      isActive ? "   transition ease-in-out font-bold font-scnd  text-[#ffffff]   rounded-xl" : null
                    }>
                   
                    Safety
                   
                </NavLink>
                <button
            onClick={() => setsigninModal(true)}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
              Sign in
            </span>
          </button>
               
          <button
            onClick={() => setShowModal(true)}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
              Log in
            </span>
          </button>
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

                  <button
                  onClick={() => setsigninModal(true)}
                  className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                    Sign in
                  </span>
                </button>

                <button
                  onClick={() => setShowModal(true)}
                  className="relative my-4 inline-flex items-center   justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-scnd ease-in-out group-hover:text-white">
                    Log in
                  </span>
                </button>
</div>
                </ul>
              )}
            </div>
          </div>
        </div>

         {/* Signin Modal */}
      {signinModal ? (
        <>
          <div className="justify-center items-center font-scnd flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto border-2 border-black max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-[#ffffff] outline-none focus:outline-none">
  {/*header*/}
  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
    <h3 className="text-3xl text-center text-black font-semibold">
      Book-n-Go
    </h3>
    <button
      className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
      onClick={() => setsigninModal(false)}
    >
      <AiOutlineClose className="fill-[#05c6c3]" />
    </button>
  </div>
  <div className="relative flex flex-col text-xl md:p-10 p-6 gap-10">
    <NavLink className="transition ease-in-out" to="/RiderSignup">
      <div className="border-2 bg-[#05c6c357] transition ease-in-out flex gap-4 justify-center border-black items-center hover:text-white hover:bg-black shadow-2xl hover:shadow-black hover:border-[white] rounded-2xl cursor-pointer shadow-gray-300 p-4">
        <h1>Sign in to ride</h1> <FaArrowRight />
      </div>
    </NavLink>
    <NavLink to="/DriverSignup">
      <div className="border-2 bg-[#05c6c361] transition ease-in-out shadow-2xl hover:shadow-black flex gap-4 justify-center items-center border-black hover:text-white hover:bg-black hover:border-[white] rounded-2xl cursor-pointer shadow-gray-300 p-4">
        <h1>Sign in to drive</h1> <FaArrowRight />
      </div>
    </NavLink>
  </div>

  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
    <button
      className="text-[#05c6c38e] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setsigninModal(false)}
    >
      Close
    </button>
  </div>
</div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Login Modal */}
      {showModal ? (
        <>
          <div className="justify-center font-scnd items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-[#ffffff] outline-none focus:outline-none">
  {/*header*/}
  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
    <h3 className="text-3xl text-center text-black font-semibold">
      Book-n-Go
    </h3>
    <button
      className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
      onClick={() => setShowModal(false)}
    >
      <AiOutlineClose className="fill-green-500" />
    </button>
  </div>
  <div className="relative flex flex-col text-xl md:p-10 p-6 gap-10">
    <NavLink className="transition ease-in-out" to="/LoginRider">
      <div className="border-2 bg-[#83c870c8] transition ease-in-out flex gap-4 justify-center border-black items-center hover:text-white hover:bg-black shadow-2xl hover:shadow-black hover:border-[white] rounded-2xl cursor-pointer shadow-gray-300 p-4">
        <h1>Log in to ride</h1> <FaArrowRight />
      </div>
    </NavLink>
    <NavLink to="/LoginDriver">
      <div className="border-2 bg-[#83c870c8] transition ease-in-out shadow-2xl hover:shadow-black flex gap-4 justify-center items-center border-black hover:text-white hover:bg-black hover:border-[white] rounded-2xl cursor-pointer shadow-gray-300 p-4">
        <h1>Log in to drive</h1> <FaArrowRight />
      </div>
    </NavLink>
    <NavLink to="/LoginAdminScreen">
      <div className="border-2 bg-[#83c870c8] transition ease-in-out shadow-2xl hover:shadow-black flex gap-4 justify-center items-center border-black hover:text-white hover:bg-black hover:border-[white] rounded-2xl cursor-pointer shadow-gray-300 p-4">
        <h1>Login as Admin</h1> <FaArrowRight />
      </div>
    </NavLink>
    
  </div>

  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
    <button
      className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(false)}
    >
      Close
    </button>
  </div>
</div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      </motion.div>{" "}
    </>
  );
};

export default Header;