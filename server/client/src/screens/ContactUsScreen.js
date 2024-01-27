import React, { useState } from "react";
import { motion } from "framer-motion";
import { QueryAction } from "../actions/QueryAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const ContactUsScreen = () => {
  const [queryfirstName, setqueryfirstName] = useState("");
  const [querysecondName, setquerySecondName] = useState("");
  const [queryemail, setqueryemail] = useState("");
  const [querymessage, setquerymessage] = useState("");

  const dispatch = useDispatch();

  const submitQuery = async (e) => {
    e.preventDefault();

    const query = {
      queryfirstName,
      querysecondName,
      queryemail,
      querymessage,
    };
    console.log(query);
    dispatch(QueryAction(query));
    setqueryfirstName("");
    setquerySecondName("");
    setqueryemail("");
    setquerymessage("");
    toast.success("Thank you for your response! We'll contact you soon", {
      position: "top-center",
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:customerservicebookngo@gmail.com';
  };


  const handlePhoneClick = () => {
    window.location.href = 'tel:+64 210 636 067';
  };
  return (
    <>
      <motion.div
        className="bg-[#a4e0a48a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <section className="font-bold font-scnd dark:bg-gray-900">
          <div className="container px-4 md:px-10 md:py-12 mx-auto">
            <div className="text-center">
              <div  className="font-bold  text-gray-800 md:text-3xl dark:text-white ">
                <h1 className="pt-10 text-4xl md:text-5xl">We'd love to hear from you</h1>
              </div>
            </div>

            <img
              className="object-cover shadow-black shadow-2xl hover:opacity-75  hover:backdrop-blur-xl transition ease-in-out w-full h-72 mt-10 md:mt-14 rounded-lg lg:h-96"
              src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
              alt=""
            />
          </div>
        </section>

        <section className=" font-bold font-scnd dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">
            <div className="text-center mt-8 md:mt-24 shadow-black shadow-2xl bg-gradient-to-r rounded-full from-emerald-500 from-0% via-[#00823250] via-50% to-emerald-500 to-90%  ">
              <p className="font-bold p-8 text-3xl md:text-5xl text-white dark:text-blue-400">
                {" "}
                Send your Queries to us{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-20 md:mt-44 mb- lg:grid-cols-3">
              <div className="">
                <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                  <form>
                    <div className="-mx-2 md:items-center md:flex">
                      <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John "
                          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          value={queryfirstName}
                          onChange={(e) => setqueryfirstName(e.target.value)}
                        />
                      </div>

                      <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Doe"
                          value={querysecondName}
                          onChange={(e) => setquerySecondName(e.target.value)}
                          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={queryemail}
                        onChange={(e) => setqueryemail(e.target.value)}
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="w-full mt-4">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        type="text"
                        value={querymessage}
                        onChange={(e) => setquerymessage(e.target.value)}
                        id="mybox"
                        rows="15"
                        className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Message"
                      />
                    </div>

                    <button
                      onClick={submitQuery}
                      className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border-4 border-black lg:col-span-2 h-96 lg:h-auto">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                   
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center md:px-0 px-4 font-scnd">
          <div className="font-bold text-gray-800 md:text-3xl dark:text-white ">
            <h1 className="md:mt-20 mt-4 text-4xl md:text-5xl">Also Reach do us through</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 font-scnd font-bold gap-10 md:gap-12 px-5 py-10 md:p-16 lg:grid-cols-3 sm:grid-cols-2 ">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Chat to our team
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Speak to our friendly team.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              <button onClick={handleEmailClick}
                className=" transition ease-in-out hover:text-red-500"
                href="mailto:customerservicebookngo@gmail.com"
              >
                {" "}
                customerservicebookngo@gmail.com
              </button>
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Visit us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Visit our office HQ..
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              Greenlane, Auckland
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Call us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Monday-Sunday 24/7 available for you
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              <button onClick={handlePhoneClick}
                className=" transition ease-in-out hover:text-red-500"
                href="tel:+64 210 636 067"
              >
                +64 210 636 067
              </button>
            </p>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default ContactUsScreen;
