import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React,{useState} from 'react';
 
 
import { loginAdmin } from "../actions/adminAction";
// import { FaFacebook } from "react-icons/fa";

const LoginAdminScreen = () => {
  const [officialname, setOfficialName] = useState("");
  const [password, setPassword] = useState("");
  // const [organization, setOrganization] = useState("");
  // const [organizationnumber, setOrganizationNumber] = useState("");
  const [officialemail, setOfficialEmail] = useState("");
  // const [city, setCity] = useState("");
  // const [domain, setDomain] = useState("");

  const dispatch = useDispatch();

  // const loginAdminState = useSelector(state => state.loginAdminReducer);
  // const {error,success,loading} = loginAdminState;


  // useEffect(() => {
  //     if(localStorage.getItem('currentAdmin')){
  //       window.location.href = '/';
  //     }
  //   },[])

  const loginAdminHandler = async (e) => {
    // window.scrollTo({top:0,behavior:"smooth"});
    e.preventDefault();

    if (
      officialname.trim() === "" ||
      password.trim() === "" ||
      // organization.trim() === "" ||
      // organizationnumber.trim() === "" ||
      officialemail.trim() === ""  
      // domain.trim() === "" ||
      // city.trim() === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });

      // alert("Password do not match");
    }   else {
      const admin = {
        officialname,
        password,
        // organization,
        // organizationnumber,
        officialemail,
        // city,
        // domain,
      };
      // console.log(driversign);
      dispatch(loginAdmin(admin));
      setOfficialName("");
      setPassword("");
      // setOrganization("");
      // setOrganizationNumber("");
      setOfficialEmail("");
      // setCity("");
      // setDomain("");
      toast.success("Logging you In..", {
        position: "top-center",
      });
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
        <div className="Admin  p-3 ">
          

          <div className="   md:p-20  ">
            <div className="border-2 border-white rounded-3xl p-3 bg-[#85858570]  md:mt-[10px] mt-9 font-scnd font-bold ">
              <h1 className="text-3xl p-4  text-center font-scnd font-bold leading-tight tracking-tight text-green-700 md:text-4xl dark:text-white">
              Admin
              </h1>
              <form className="space-y-4 font-bold mt-6 md:space-y-6 md:p-8">
                <div className=" md:flex md:justify-between gap-[2px] ">
                  <div>
                    <label
                      htmlFor="Official Name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Official Name
                    </label>
                    <input
                      type="text"
                      name="Official Name"
                      id="Official Name"
                      value={officialname}
                      onChange={(e) => setOfficialName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Daniel"
                      required=""
                    />
                  </div>
                  <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="password"
                        required=""
                      />
                    </div> 
                </div>
                {/* <div className=" md:flex md:justify-between gap-[2px] ">
                  <div>
                    <label
                      htmlFor="Organization Under Which You Work"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Organization Under Which You Work
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      name="Organization Under Which You Work"
                      id="Organization Under Which You Work"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Organization Under Which You Work"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organizationnumber"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      value={organizationnumber}
                      onChange={(e) => setOrganizationNumber(e.target.value)}
                      name="organizationnumber"
                      id="organizationnumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="9310XXXXXX"
                      required=""
                    />
                  </div>
                </div> */}
                <div className="">
                  <label
                    htmlFor="officialemail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={officialemail}
                    onChange={(e) => setOfficialEmail(e.target.value)}
                    name="officialemail"
                    id="officialemail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="officialemail"
                    required=""
                  />
                </div>
                {/* <input type="file" id="pdfFile" name="pdfFile" accept="application/pdf"></input> */}
                {/* <div className=" md:flex md:justify-between gap-[2px] ">
                  <div>
                    <label
                      htmlFor="City"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      name="City"
                      id="City"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="City"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Domain"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Domain
                    </label>
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      name="Domain"
                      id="Domain"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Domain"
                      required=""
                    />
                  </div>
                </div> */}
                
                 
                <div className='mt-5 flex justify-start items-center w-full'>
                 {/* <input type='checkbox' 
                        className='border-solid border-x-2 rounded-3xl border-y-2 border-teal-900'
                  /> */}
                  
                 </div>
                    
                 <div className='md:mt-14 mt-8'>
                    <button className='w-full bg-white rounded-3xl shadow-sm shadow-gray-400 transition ease-in-out font-black hover:bg-teal-900 hover:text-white py-3 text-center text-teal-900'
                       onClick={(event) => loginAdminHandler(event)}   >Login account</button>
                 </div>
                
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

export default LoginAdminScreen;
