import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { deleteRider, getRiderById, updateRider } from "../actions/riderAction";

const EditRider = () => {

    const dispatch = useDispatch();
  
    const [riderName, setRiderName] = useState("");
    const [riderEmail, setRiderEmail] = useState("");
    const [riderPhone, setRiderPhone] = useState("");
    const [riderPassword, setRiderPassword] = useState("");
    const [riderGender, setGender] = useState("");
    const [riderImage, setRiderImage] = useState("");

    const riderState = useSelector((state) => state.loginRiderReducer);
    const { currentRider } = riderState;

    const getRiderByState = useSelector(state => state.getRiderByIdReducer);
    const {rider} = getRiderByState;
    // const updateriderState = useSelector(state => state.updateriderByIdReducer);
    // const {updateloading,updateerror,updatesuccess} = updateriderState;

    useEffect(() => {
        if(rider){
          if(rider._id === currentRider._id){
            setRiderName(rider.riderName);
            setRiderEmail(rider.riderEmail);
            setRiderPhone(rider.riderPhone);
            setRiderPassword(rider.riderPassword);
            setGender(rider.riderGender);
            setRiderImage(rider.riderImage);
        }else{
          dispatch(getRiderById(currentRider._id));
        } 
        }else{
          dispatch(getRiderById(currentRider._id));
        }
        
      },[rider,dispatch,currentRider._id]);


      const submitForm = (e) => {
        e.preventDefault();
        const updatedRider = {
          _id : currentRider._id,
          riderName,
          riderEmail,
          riderPhone,
          riderPassword,
          riderGender,
          riderImage,
        }
        dispatch(updateRider(updatedRider));
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
                Book-n-go Welcomes you!{" "}
              </h1>
            </div>

            <div className="bg-[#ffffff7e] md:mx-40 mx-4 mt-20 rounded-xl md:px-10 px-4 py-10">
              <div>
                <h1 className="text-3xl text-center font-scnd font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign to book your first ride
                </h1>
                <div className="input">
                  <form onSubmit={submitForm} className="space-y-4 p-4 mt-6 md:space-y-6">
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
                        type="text"
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
                        htmlFor="riderImage"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image URL
                      </label>
                      <input
                        type="text"
                        name="riderImage"
                        id="riderImage"
                        placeholder="rider-image-url"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={riderImage}
                        onChange={(e) => setRiderImage(e.target.value)}
                      />
                    </div>
                    
                    <button
                    type='submit'
                    className="w-full bg-green-600 text-white bg-primary-600 hover:bg-green-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Update an account
                  </button>
                  <button
                    onClick={() => {dispatch(deleteRider(currentRider._id))}}
                    className="w-full bg-red-500 text-white bg-primary-600 hover:bg-red-700  transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Delete an account
                  </button>
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
  )
}

export default EditRider