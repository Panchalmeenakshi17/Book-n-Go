import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useDispatch } from "react-redux";
import { loginRider } from "../../actions/riderAction";

const RiderLoginScreen = () => {
  // let navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [isChecked, setIsChecked] = useState(false);
  // const [error, setError] = useState('');

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
      customClass: {
        text: "font-scnd",
        title: "text-2xl font-scnd font-bold text-green-600",
        confirmButton:
          "bg-green-500 font-scnd hover:bg-green-600 text-white font-bold py-2 px-4 rounded",
      },
    });
  };

  const [riderEmail, setRiderEmail] = useState("");
  const [riderPhone, setRiderPhone] = useState("");
  const [riderPassword, setRiderPassword] = useState("");

  const dispatch = useDispatch();

  const registerLoginriderhandler = async (e) => {
    e.preventDefault();

    if (
      riderEmail.trim() === "" ||
      riderPhone.trim() === "" ||
      riderPassword.trim() === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });

      // alert("Password do not match");
    } else if (!isChecked) {
      toast.error("Please accept the Terms & Conditions");
    } else {
      const rider = {
        riderEmail,
        riderPhone,
        riderPassword,
      };
      dispatch(loginRider(rider));

      setRiderEmail("");
      setRiderPhone("");
      setRiderPassword("");

      toast.success("Loggin successfully!", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-[#69b2c6] from-0% via-[#69b2c688] via-50% to-[#69b2c6] to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="Loginrider md:p-5 p-2  ">
          <div className="LoginriderSubcontent mt-10 rounded-3xl border-slate-700 border-2 p-10 bg-[#92a7ae8a]">
            <div className="   md:p-10">
              <h1 className=" bg- md:p- text-center text-black md:text-5xl text-3xl   font-scnd font-bold ">
                {" "}
                Login Rider directly to your account{" "}
              </h1>
              <form className="space-y-4 mt- md:space-y-6">
                <div className=" md:flex md:justify-between md:mt-10 mt-7 gap-[2px] ">
                  <div>
                    <label
                      htmlFor="riderEmail"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="riderEmail"
                      id="riderEmail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                      value={riderEmail}
                      onChange={(e) => setRiderEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="riderPhone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="riderPhone"
                      id="riderPhone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="9310XXXXXX"
                      required=""
                      value={riderPhone}
                      onChange={(e) => setRiderPhone(e.target.value)}
                    />
                  </div>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={riderPassword}
                    onChange={(e) => setRiderPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      aria-describedby="terms"
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
                        className="font-medium hover:text-red-400 text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Terms and Conditions
                      </button>
                    </label>
                  </div>
                </div>
                <button
                  className="w-full bg-green-600 text-white bg-primary-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={registerLoginriderhandler}
                >
                  Login
                </button>
                <p className="text-sm font-light text-black dark:text-gray-400">
                  Dont't have an account?{" "}
                  <NavLink
                    to="/RiderSignup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign In here
                  </NavLink>
                </p>
              </form>
            </div>
            {/* <div className=" md:-mt-11 w-full font-scnd text-center ">
              <h1 className=" font-bold text-white">OR</h1>
              <h1 className=" text-2xl  font-bold">Sign in with :</h1>
              <div className=" flex justify-center ">
                <button onClick={signinwithfacebook}>
                  <FaFacebook
                    size={32}
                    className=" w-14 h-14 rounded-full hover:bg-[#63aae1] bg-[#6562f9] transition ease-in-out google"
                  />
                </button>
                <button
                  onClick={SIGN_IN_WITH_GOOGLE}
                  className=" w-14 h-14 rounded-full hover:bg-[#18e733] bg-black transition ease-in-out google"
                > */}
                  {/* Sign in with Google */}
                  {/* <FcGoogle size={32} className=" text-center icon" />
                </button>
              </div>
            </div> */}
          </div>
          <button className=" bg- font-scnd  ">
            <NavLink
              to="/"
              className="inline-flex translate-x-28  items-center justify-center md:translate-x-[630px] h-10 md:w-[150px] w-full p-2 px-3   mt-20 text-md font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out hover:bg-[#0080003a] bg-transparent border-2 border-green-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-[white] focus:shadow-xs focus:no-underline"
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

export default RiderLoginScreen;
