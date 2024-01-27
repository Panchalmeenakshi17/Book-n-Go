import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteDriver, getDriverById, updateDriver } from '../actions/driverAction';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const EditDriver = () => {

    const [DriverName, setDriverName] = useState("");
    const [DriverEmail, setDriverEmail] = useState("");
    const [DriverPhone, setDriverPhone] = useState("");
    const [DriverLicenceNumber, setDriverLicenceNumber] = useState("");
    const [DriverGender, setDriverGender] = useState("");
    const [DriverPassword, setDriverPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();

    const driverState = useSelector((state) => state.loginDriverReducer);
    const { currentDriver } = driverState;

    const getDriverByState = useSelector(state => state.getDriverByIdReducer);
    const {driver} = getDriverByState;
    // const updateDriverState = useSelector(state => state.updateDriverByIdReducer);
    // const {updateloading,updateerror,updatesuccess} = updateDriverState;

    useEffect(() => {
        if(driver){
          if(driver._id === currentDriver._id){
            setDriverName(driver.DriverName);
            setDriverEmail(driver.DriverEmail);
            setDriverPhone(driver.DriverPhone);
            setDriverLicenceNumber(driver.DriverLicenceNumber);
            setDriverGender(driver.DriverGender);
            setDriverPassword(driver.DriverPassword);
        }else{
          dispatch(getDriverById(currentDriver._id));
        } 
        }else{
          dispatch(getDriverById(currentDriver._id));
        }
        
      },[driver,dispatch,currentDriver._id]);


      const submitForm = (e) => {
        e.preventDefault();
        const updateddriver = {
          _id : currentDriver._id,
          DriverName,
          DriverEmail,
          DriverPhone,
          DriverLicenceNumber,
          DriverGender,
          DriverPassword
        }
        dispatch(updateDriver(updateddriver));
      };

      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        // Clear the error when the checkbox is checked
      };
    
      const showAlert = () => {
        Swal.fire({
          title: "Terms and Conditions",
          text: "Book-N-Go, available through its website and its mobile app, seamlessly connects drivers and passengers sharing the same destination. The platform extends its services to booking car trips, including taxis and carpooling services, operated by authorized drivers. Users must create an 'Account' with accurate information, committing to keeping it current during their association with Book-N-Go. Members with accounts can post Carpooling and Car Adverts. The Booking system allows online payments for Cost Contribution (Carpooling) or Price (Car Trips), confirming details for both Driver and Passenger. Responsibilities and conditions apply to Drivers and Passengers, with specific criteria for Adverts and legal compliance for Drivers. Passengers booking for others must provide accurate details, with adherence to cancellation policies based on timing and circumstances. Fees, covering Cost Contribution (Driver-determined), are collected for platform usage. Non-commercial use is emphasized, with Drivers barred from requesting contributions exceeding costs. Book-N-Go can suspend non-compliant accounts. Intellectual property rights for the Platform and its content are held by Book-N-Go, prohibiting unauthorized use. Privacy and data processing follow the Privacy Policy, with user acknowledgment and acceptance. Users can terminate relations at any time. The platform may modify Terms and Conditions, notifying users. Book-N-Go isn't a party to user agreements, disclaiming liability. Modifications are published on the Platform, with user notifications. By using Book-N-Go, users affirm acknowledgment and agreement to these terms and conditions.",
          confirmButtonText: "Accept",
          width: 800,
          customclassName: {
            text: "font-scnd",
            title: "text-2xl font-scnd font-bold text-green-600",
            confirmButton:
              "bg-green-500 font-scnd hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
          },
        });
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
          

          <div className="   md:p-20  ">
            
              <div className="border-2 border-white rounded-3xl p-3 bg-[#ffffff70]  md:mt-[10px] mt-9 font-scnd font-bold ">
                <h1 className="text-3xl p-4  text-center font-scnd font-bold leading-tight tracking-tight text-green-500 md:text-4xl dark:text-white">
                  Update your driving details
                </h1>
                <form onSubmit={submitForm} className="space-y-4 mt-6 md:space-y-6 md:p-8">
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
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-black dark:text-gray-300"
                      >
                        I accept the{" "}
                        <button
                          onClick={showAlert}
                          className="font-medium hover:text-red-400 text-primary-600 hover:underline  transition ease-in-out"
                        >
                          Terms and Conditions
                        </button>
                      </label>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className="w-full bg-green-600 text-white bg-primary-600 hover:bg-green-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Update an account
                  </button>
                  <button
                    onClick={() => {dispatch(deleteDriver(currentDriver._id))}}
                    className="w-full bg-red-500 text-white bg-primary-600 hover:bg-red-700  transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Delete an account
                  </button>
                 
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

export default EditDriver;

