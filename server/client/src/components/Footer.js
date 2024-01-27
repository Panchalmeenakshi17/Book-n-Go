import React from "react";
import { NavLink } from 'react-router-dom';import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const Footer = () => {
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
  return (
    <>
     

<footer className="bg-[#000000] font-scnd font-bold  text-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Company</h2>
            <ul className="text-gray-300 dark:text-gray-300 font-medium">
                <li className="mb-4">
                <NavLink to = "/AboutUs"  className=" hover:underline" >About</NavLink>
                </li>
               
                <li className="mb-4">
                    <NavLink to = "/ContactUs"  className="hover:underline">Brand Center</NavLink>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-300 dark:text-gray-300 font-medium">
               
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">Twitter</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">Facebook</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to = "/ContactUs"  className="hover:underline">Contact Us</NavLink>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-300 dark:text-gray-300 font-medium">
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">Privacy Policy</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">Licensing</NavLink>
                </li>
                <li className="md:mb-4 md:mr-0 mr-20">
                <button onClick={showAlert}>
                          
                          Terms and Conditions
                        </button>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Download</h2>
            <ul className="text-gray-300 dark:text-gray-300 font-medium">
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">iOS</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">Android</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">Windows</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to = ""  className="hover:underline">MacOS</NavLink>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 dark:text-gray-300 sm:text-center">© 2023 <NavLink to="/">Book-n-Go™</NavLink>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <NavLink to = ""  className="text-gray-300 hover:text-white dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </NavLink>
             
              <NavLink to = ""  className="text-gray-300 hover:text-white dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </NavLink>
            
             
        </div>
      </div>
    </div>
</footer>

    </>
  );
};

export default Footer;
