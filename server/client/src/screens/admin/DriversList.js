import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {AiFillInfoCircle} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { admindeleteDriver, getAllDrivers } from '../../actions/driverAction';
// import { getAllRiders } from '../../actions/riderAction';
import { AiFillDelete } from "react-icons/ai";
const DriversList = () => {

  const driverState = useSelector(state => state.getAllDriversReducer);
  const {drivers} = driverState;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllRiders());
  // },[dispatch]);
    useEffect(() => {
      dispatch(getAllDrivers());
    },[dispatch]);

  return (<>
   <motion.div
     className="bg-gradient-to-r from-[#69b2c6af] from-0% via-[#69b2c653] via-50% to-[#69b2c6af] to-90%"
     initial={{ opacity: 0 }}
     animate={{ opacity: 5 }}
     exit={{ opacity: 0 }}
   >
    {/* {loading && (<Loader />)} */}
    {/* {error && (<Error error='Error While Fetching Patients'/>)} */}
    <div className='flex font-scnd font-bold flex-col md:p-20 md:gap-20 gap-10 py-10'>
      <h1 className='text-5xl text-teal-900 font-black text-center hover:text-light2'>Driver's List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Id
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Email
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Phone
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Licence Number
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Password
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                Drivers Gender
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                    Delete
                  </th>
            </tr>
        </thead>

        <tbody>
        {drivers && drivers.map(driver => (
          <tr key={driver._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{driver._id}</th>
             <td className="px-6 py-4">{driver.DriverName}</td>
             <td className="px-6 py-4">{driver.DriverEmail}</td>
             <td className="px-6 py-4">{driver.DriverPhone}</td>
             <td className="px-6 py-4">{driver.DriverLicenceNumber}</td>
             <td className="px-6 py-4">{driver.DriverPassword}</td>
             <td className="px-6 py-4">{driver.DriverGender}</td>
         
             <td>
                        <AiFillDelete
                          className=" fill-red-600 cursor-pointer text-2xl "
                          onClick={() => {
                            dispatch(admindeleteDriver(driver._id));
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
  )
}

export default DriversList;
