import { motion } from 'framer-motion';
import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDriverById } from '../actions/driverAction';
 

const Driverprofile = () => {

  const [DriverName, setDriverName] = useState("");
  const [DriverEmail, setDriverEmail] = useState("");
  const [DriverPhone, setDriverPhone] = useState("");
  const [DriverLicenceNumber, setDriverLicenceNumber] = useState("");
  const [DriverGender, setDriverGender] = useState("");

  const dispatch = useDispatch();

  const driverState = useSelector(state => state.loginDriverReducer);
  const {currentDriver} = driverState;

  const getDriverByState = useSelector(state => state.getDriverByIdReducer);
  const {driver} = getDriverByState;

  useEffect(() => {
    if(driver){
      if(driver._id === currentDriver._id){
        setDriverName(driver.DriverName);
        setDriverEmail(driver.DriverEmail);
        setDriverPhone(driver.DriverPhone);
        setDriverLicenceNumber(driver.DriverLicenceNumber);
        setDriverGender(driver.DriverGender);
    }else{
      dispatch(getDriverById(currentDriver._id));
    } 
    }else{
      dispatch(getDriverById(currentDriver._id));
    }
    
  },[driver,dispatch,currentDriver._id]);

  return (
    <>
    
   
    <motion.div
     className="bg-gradient-to-r from-[#000000] from-0% via-[#00000088] via-50% to-[#000000] to-90%"
     initial={{ opacity: 0 }}
     animate={{ opacity: 5 }}
     exit={{ opacity: 0 }}
   > 
    <video
       className="videoTag  w-full"
       autoPlay
       loop
       muted
     >
       <source
         src="/Videos/d.mp4"
         className="  w-full "
         type="video/mp4"
       />
     </video>
     <div className="font-scnd  w-full   justify-center   absolute top-44 left-0">
        
           
     
   <div className='md:flex  md:flex-row flex-col md:space-y-0 space-y-10 md:justify-center'>
       <div className='md:w-1/2 w-full md:px-0 px-4  flex justify-center'>
         <div className='bg-[#00000077] shadow-[#78b774] shadow-md border-2 border-green-300 text-white flex flex-col gap-10 py-10 p-10 rounded-3xl  text-left text-2xl md:w-[900px] w-full items-center'>
           <h1 className='md:text-5xl text-4xl text-green-400  '>Your Driving Profile</h1>
            <img src='../images/passenger.jpg' alt='Passenger Icon' 
           className='w-1/4 rounded-full  ' />  
           <div className='w-full md:px-10 pl-4'>
           <h1>Name: &nbsp;:&nbsp; {DriverName}</h1>
           <h1>Passenger ID &nbsp;:&nbsp; {currentDriver._id}</h1>  
             
           <h1>Email &nbsp;:&nbsp; {DriverEmail}</h1>  
           <h1>Phone &nbsp;:&nbsp; {DriverPhone}</h1>
           <h1>Driving Licence Number &nbsp;:&nbsp; {DriverLicenceNumber}</h1>
           <h1>Gender &nbsp;:&nbsp; {DriverGender}</h1>
           {/* <h1>Password &nbsp;:&nbsp; {currentDriver.riderPassword}</h1>   */}
           <div className=' flex justify-center p-8 '>

           <NavLink to='/editdriver'>
           <button className='bg-blue-600 p-3 rounded-full text-lg text-white'>Edit Driver Details</button>
           </NavLink>
           </div>
          </div>
       </div>
     </div></div>
 </div>
 
       
       
     
 
 </motion.div> 
</>
  )
}

export default Driverprofile