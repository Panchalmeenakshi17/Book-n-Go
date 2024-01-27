import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
// import { SigninRider } from "../../actions/riderAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { addRider } from "../actions/riderAction";
import {Button} from 'react-bootstrap';
 

const AddRider = () => {

  const [riderName, setRiderName] = useState("");
  const [riderEmail, setRiderEmail] = useState("");
  const [riderPhone, setRiderPhone] = useState("");
  const [riderPassword, setRiderPassword] = useState("");
  const [riderConfirmPassword, setRiderConfirmPassword] = useState("");
  const [riderGender, setGender] = useState("");

  const addRiderState = useSelector(state => state.addRiderReducer);
  const {loading,error,success} = addRiderState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    if (
      riderName.trim() === "" ||
      riderEmail.trim() === "" ||
      riderPhone.trim() === "" ||
      riderGender === ""||
      riderPassword.trim() === "" ||
      riderConfirmPassword.trim() === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });

      // alert("Password do not match");
    } else if (riderPassword !== riderConfirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
      });
    } else if (riderPhone.length < 10) {
      toast.error("Phone number should have at least 10 digits.", {
        position: "top-center",
      });
    } else if (!riderEmail.includes("@")) {
      toast.error("Invalid email address.", {
        position: "top-center",
      });
    } else if (riderPassword.length < 5) {
      toast.error("Password should have at least 5 characters.", {
        position: "top-center",
      });}
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(riderPassword)) {
        toast.error("Password should contain at least one special character.", {
          position: "top-center",
        });
      } else {
    const rider = {
        riderName,
        riderEmail,
        riderPhone,
        riderGender,
        riderPassword,
        riderConfirmPassword,
       
    }
    dispatch(addRider(rider));
    setRiderName("");
    setRiderEmail("");
    setRiderPhone("");
    setGender("");
    setRiderPassword("");
    setRiderConfirmPassword("");
    toast.success("Signned In successfully! Please login to continue.", {
      position: "top-center",
    });
  }
        
    if (!success){
        console.log(`${error}`);
    }else{
        toast.success("New Passenger has been added!", {
            position: "top-center",
          });
    }
};
 

  return (
    <>


    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="body py-20">
          <div className="font-scnd font-bold">
            <div>
              <h1 className="px-4 text-center text-gray-300 text-4xl md:text-5xl font-scnd font-bold">
                {" "}
                Add a new Passenger{" "}
              </h1>
            </div>

            <div className="bg-[#ffffff7e] md:mx-40 mx-4 mt-20 rounded-xl md:px-10 px-4 py-10">
              <div>
               
                <div className="input">
                  <form onSubmit={submitForm}  className="space-y-4 p-4 mt-6 md:space-y-6">
                    <div>
                      <label
                        htmlFor="ridername"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="ridername"
                        id="ridername"
                        placeholder="John Doe"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={riderName}
                        onChange={(e) => setRiderName(e.target.value)}
                      />
                    </div>
                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-[2px]">
                      <div>
                        <label
                          htmlFor="rideremail"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="rideremail"
                          id="rideremail"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required=""
                          value={riderEmail}
                          onChange={(e) => setRiderEmail(e.target.value)}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="riderphone"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="riderphone"
                          id="riderphone"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="9310XXXXXX"
                          required=""
                          value={riderPhone}
                          onChange={(e) => setRiderPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label>
                        Passenger's Gender:
                        <select
                          className="py-4 rounded-xl mt-3 md:mt-0 translate-x-2 px-2"
                          name="riderGender"
                          value={riderGender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select Gender</option>
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="other">Other</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={riderPassword}
                        onChange={(e) => setRiderPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={riderConfirmPassword}
                        onChange={(e) =>
                          setRiderConfirmPassword(e.target.value)
                        }
                      />
                    </div>
                    
                    <Button className=" bg-black p-3 text-white transition ease-in-out hover:bg-[#07b6b9] hover:text-black hover:shadow-black hover:shadow-2xl rounded-xl w-full " type='submit'>
        Add New
      </Button>
                    
                  </form>
                </div>
                 
                <div className="md:px-36 flex md:justify-start justify-center p-6">
                  
                  <button className="font-scnd">
                    <NavLink
                      to="/"
                      className="inline-flex px-4 items-center justify-center md:translate-x-[350px] h-10 md:w-[150px] md:translate-y-[20px] text-md font-semibold text-center text-black no-underline align-middle transition-all duration-300 ease-in-out hover:bg-[#001a804c] bg-transparent border-2 border-blue-600 border-solid rounded-full cursor-pointer select-none hover:text-gray-900 hover:border-[white] focus:shadow-xs focus:no-underline"
                    >
                      Go to Home
                    </NavLink>
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default AddRider;
