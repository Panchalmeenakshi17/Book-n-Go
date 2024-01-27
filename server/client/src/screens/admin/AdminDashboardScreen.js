import { motion } from 'framer-motion';
import React from 'react';
import {useSelector} from 'react-redux';
// import Loader from '../components/Loader';
// import Success from '../components/Success';
// import Error from '../components/Error';



const AdminDashboardScreen = () => {

  const adminState = useSelector(state => state.loginAdminReducer);
  const {currentAdmin} = adminState;
  return (<>
  <motion.div
        className="bg-gradient-to-r from-[#69b2c6] from-0% via-[#69b2c688] via-50% to-[#69b2c6] to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
              <div className="Adminportal font-bold md:p-5 p-2  ">
    {/* {loading && <Loader />}
    {success && <Success success="Doctor Connected Metamask Account Successfully" />}
    {error && <Error error="Something Went Wrong"/>} */}
    <div className='  md:my-20 font-scnd my-10'>
      <div className='md:flex md:flex-row flex-col md:space-y-0 space-y-10 md:justify-center'>
          <div className='md:w-1/2 w-full md:px-0 px-4 flex justify-center'>
            <div className='bg-[#1a7c7c72] border-4 border-teal-700 text-white flex flex-col gap-10 py-10 p-10 rounded-3xl  text-center text-2xl md:w-[900px] w-full items-center'>
              <h1 className='md:text-5xl text-4xl text-black'>Admin Portal</h1>
               <img src='../images/adminperson.jpg' alt='Admin Icon' 
              className='w-1/4 ' />  
              <div className='w-full md:px-10 pl-4'>
              <h1>Official Name &nbsp;:&nbsp; {currentAdmin.officialname}</h1>
              <h1>Admin ID &nbsp;:&nbsp; {currentAdmin._id}</h1>
              
              
              <h1>Official Email &nbsp;:&nbsp; {currentAdmin.officialemail}</h1>
              
              
            </div>
          </div>
        </div>
      
      </div>
    </div></div>
    </motion.div>
    </>
  )
}

export default AdminDashboardScreen

