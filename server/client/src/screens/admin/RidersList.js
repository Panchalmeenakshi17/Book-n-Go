import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import {AiFillDelete} from 'react-icons/ai';
import { AiFillInfoCircle } from "react-icons/ai";
import {  admindeleteRider, getAllRiders } from "../../actions/riderAction";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";




const RidersList = () => {
  const riderState = useSelector((state) => state.getAllRidersReducer);
  const { riders } = riderState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRiders());
  }, [dispatch]);

  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-[#69b2c6af] from-0% via-[#69b2c653] via-50% to-[#69b2c6af] to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        {/* {loading && (<Loader />)} */}
        {/* {error && (<Error error='Error While Fetching Patients'/>)} */}
        <div className="flex font-scnd font-bold flex-col md:p-20 md:gap-20 gap-10 py-10">
          <h1 className="text-5xl text-teal-900 font-black text-center hover:text-light2">
            Passenger's List
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xl text-teal-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Riders Id
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Riders Name
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Riders Email
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Riders Phone
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Riders Gender
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Riders Password
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                {riders &&
                  riders.map((rider) => (
                    <tr
                      key={rider._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {rider._id}
                      </th>
                      <td className="px-6 py-4">{rider.riderName}</td>
                      <td className="px-6 py-4">{rider.riderEmail}</td>
                      <td className="px-6 py-4">{rider.riderPhone}</td>
                      <td className="px-6 py-4">{rider.riderGender}</td>
                      <td className="px-6 py-4">{rider.riderPassword}</td>

                      <td>
                        <AiFillDelete
                          className=" fill-red-600 cursor-pointer text-2xl "
                          onClick={() => {
                            dispatch(admindeleteRider(rider._id));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RidersList;
