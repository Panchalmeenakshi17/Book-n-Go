import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
// import { SigninRider } from "../../actions/riderAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import {Button } from 'react-bootstrap';
import { addDriver } from "../actions/driverAction";



const AddDriver = () => {
 
  const [DriverName, setDriverName] = useState("");
  const [DriverEmail, setDriverEmail] = useState("");
  const [DriverPhone, setDriverPhone] = useState("");
  const [DriverLicenceNumber, setDriverLicenceNumber] = useState("");
  const [DriverGender, setDriverGender] = useState("");
  const [DriverPassword, setDriverPassword] = useState("");
  const [DriverConfirmPassword, setDriverConfirmPassword] = useState("");

  const addDriverState = useSelector(state => state.addDriverReducer);
  const {loading,error,success} = addDriverState;

  const dispatch = useDispatch();

  const submitForm = async (e) => {
    // window.scrollTo({top:0,behavior:"smooth"});
    e.preventDefault();

    if (
      DriverName.trim() === "" ||
      DriverEmail.trim() === "" ||
      DriverPhone.trim() === "" ||
      DriverLicenceNumber.trim() === "" ||
      DriverPassword.trim() === "" ||
     
      
      DriverGender === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });

      // alert("Password do not match");
    } else if (!DriverEmail.includes("@")) {
      toast.error("Invalid email address.", {
        position: "top-center",
      });
    } else if (DriverPhone.length !== 10) {
      toast.error("Mobile number should be 10 digits.", {
        position: "top-center",
      });
    }  else if (DriverPassword.length < 5) {
      toast.error("Password should have at least 5 characters.", {
        position: "top-center",
      });}
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(DriverPassword)) {
        toast.error("Password should contain at least one special character.", {
          position: "top-center",
        });
      } else {
      const driver = {
        DriverName,
        DriverEmail,
        DriverPhone,
        DriverLicenceNumber,
        DriverPassword,
        
        DriverGender,
      };
      dispatch(addDriver(driver));
      setDriverName("");
      setDriverEmail("");
      setDriverPhone("");
      setDriverLicenceNumber("");
      setDriverPassword("");
       
      setDriverGender("");
     
      if (!success){
        console.log(`${error}`);
    }else{
        toast.success("New Driver has been added!", {
            position: "top-center",
          });
    }
    }

};



  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-[#327d4fe9] from-0% via-[#00823250] via-50% to-emerald-500 to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="driversignup  p-3 ">
          <div className=" md:py-[10px] mt-3 text-3xl md:mt-[0px] ">
            <h1 className="  text-center text-black md:text-5xl  font-scnd font-bold ">
              {" "}
              Add a new Driver{" "}
            </h1>
          </div>

          <div className="   md:p-20  ">
            
              <div className="border-2 border-white rounded-3xl p-3 bg-[#ffffff70]  md:mt-[10px] mt-9 font-scnd font-bold ">
               
                <form onSubmit={submitForm}  className="space-y-4 mt-6 md:space-y-6 md:p-8">
                  <div className=" md:flex md:justify-between gap-[2px] ">
                    <div>
                      <label
                        htmlFor="DriverName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Driver Name
                      </label>
                      <input
                        type="text"
                        name="DriverName"
                        id="DriverName"
                        value={DriverName}
                        onChange={(e) => setDriverName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Daniel"
                        required=""
                      />
                    </div>
             
                  </div>
                  <div className=" md:flex md:justify-between gap-[2px] ">
                    <div>
                      <label
                        htmlFor="Driveremail"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={DriverEmail}
                        onChange={(e) => setDriverEmail(e.target.value)}
                        name="Driveremail"
                        id="Driveremail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="DriverPhone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        value={DriverPhone}
                        onChange={(e) => setDriverPhone(e.target.value)}
                        name="DriverPhone"
                        id="DriverPhone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="9310XXXXXX"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="DriverLicenceNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Driving Licence Number
                    </label>
                    <input
                      type="text"
                      value={DriverLicenceNumber}
                      onChange={(e) => setDriverLicenceNumber(e.target.value)}
                      name="DriverLicenceNumber"
                      id="DriverLicenceNumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="AB123456"
                      required=""
                    />
                  </div>
                  {/* <input type="file" id="pdfFile" name="pdfFile" accept="application/pdf"></input> */}
                  <div className=" md:flex md:justify-between gap-[2px] ">
                    <div>
                      <label
                        htmlFor="DriverPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        value={DriverPassword}
                        onChange={(e) => setDriverPassword(e.target.value)}
                        name="DriverPassword"
                        id="DriverPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="P@ssword123"
                        required=""
                      />
                    </div>
                    
                  </div>
                  <div className=" ">
                    <label>
                      Driver's Gender:
                      <select
                        className=" translate-x-2 px-2"
                        name="riderGender"
                        value={DriverGender}
                        onChange={(e) => setDriverGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>

                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>
                 
                  <Button className=" bg-black p-3 text-white transition ease-in-out hover:bg-[#07b6b9] hover:text-black hover:shadow-black hover:shadow-2xl rounded-xl w-full " type='submit'>
        Add New
      </Button>
                </form>
           
              </div>
            </div>
            <button className=" bg- font-scnd  ">
              <NavLink
                to="/"
                className="inline-flex items-center justify-center mt-10 md:mt-3 translate-x-24 md:translate-x-[650px]  h-10 md:w-[150px] w-[150px]    text-md font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out hover:bg-[#a3ff4d62] bg-transparent border-2 border-green-800 border-solid rounded-full cursor-pointer select-none hover:text-gray-900hover:border-[white] focus:shadow-xs focus:no-underline"
              >
                Go to Home
              </NavLink>
            </button>
          </div>
         
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default AddDriver;
