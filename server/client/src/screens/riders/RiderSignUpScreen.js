import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SigninRider } from "../../actions/riderAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const RiderSignUpScreen = () => {

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
          "bg-green-500 font-scnd hover:bg-green-600 text-gray-900font-bold py-2 px-4 rounded",
      },
    });
  };

  const [riderName, setRiderName] = useState("");
  const [riderEmail, setRiderEmail] = useState("");
  const [riderPhone, setRiderPhone] = useState("");
  const [riderPassword, setRiderPassword] = useState("");
  const [riderConfirmPassword, setRiderConfirmPassword] = useState("");
  const [riderGender, setGender] = useState("");

  const dispatch = useDispatch();

  const submitRiderSignup = async (e) => {
    // window.scrollTo({top:0,behavior:"smooth"});
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
    } else if (!isChecked) {
      toast.error("Please accept the Terms & Conditions", {
        position: "top-center",
      });
    }else if (riderPhone.length < 10) {
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
      };
      dispatch(SigninRider(rider));
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
                  <form className="space-y-4 p-4 mt-6 md:space-y-6">
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
                      type="button  "
                      className="w-full font-scnd font-bold bg-green-600 text-gray-900 bg-primary-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={submitRiderSignup}
                    >
                      Sign In
                    </button>
                    <p className="text-sm font-light text-black dark:text-gray-400">
                      Already have an account?{" "}
                      <NavLink
                        to="/LoginRider"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </NavLink>
                    </p>
                  </form>
                </div>
                {/* <div className=" w-full font-scnd text-center ">
                  <h1 className=" text-blue-500">OR</h1>
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
                      className=" w-14 h-14 rounded-full hover:bg-[#494a4a] bg-black transition ease-in-out google"
                    > */}
                      {/* Sign in with Google */}
                      {/* <FcGoogle size={32} className=" text-center icon" />
                    </button>
                  </div>
                </div> */}
                {/*     user name and picture  */}
                {/* 
       {
          user && <div className='profile' >
            <h1>{user.displayName}</h1>
            <img src={user.photoURL} alt="user" />
          </div>
       } */}
                <div className="md:px-36 flex md:justify-start justify-center p-6">
                  {/* <div className="  w-[900px] bg-[#ffffff7c] translate-x-[200px] p-10 border-2  ">
              
            </div> */}
                  <button className="font-scnd">
                    <NavLink
                      to="/"
                      className="inline-flex px-4 items-center justify-center md:translate-x-[350px] h-10 md:w-[150px] md:translate-y-[20px] text-md font-semibold text-center text-black no-underline align-middle transition-all duration-300 ease-in-out hover:bg-[#001a804c] bg-transparent border-2 border-blue-600 border-solid rounded-full cursor-pointer select-none hover:text-gray-900 hover:border-[white] focus:shadow-xs focus:no-underline"
                    >
                      Go to Home
                    </NavLink>
                  </button>
                </div>
                {/* 
      <button>Sign in</button>
      <p>or</p> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default RiderSignUpScreen;
