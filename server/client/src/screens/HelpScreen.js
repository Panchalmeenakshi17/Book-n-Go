import React from 'react';
import { FaCar } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";

const HelpScreen = () => {
  return (
    <>
      <div className='my-20 flex flex-col gap-28'>
         <div className='flex flex-col gap-10'>
           <h1 className='text-6xl text-center font-semibold'>Welcome to Your-drive Support</h1>
           <h1 className='text-3xl text-center'>How can we help?</h1>
         </div>
         <div className='flex flex-row gap-40 justify-center'>
          <button className='bg-[#eeeeee] hover:bg-black hover:text-white shadow-md border-2 border-black rounded-2xl p-10 flex flex-col items-center justify-center'>
            <FaCar className='text-6xl' />
            <h1 className='text-6xl font-semibold'>Riders</h1>
          </button>
          <button className='bg-[#eeeeee] hover:bg-black hover:text-white shadow-md border-2 border-black rounded-2xl p-10 flex flex-col items-center justify-center'>
            <TbSteeringWheel className='text-6xl' />
            <h1 className='text-6xl font-semibold'>Drivers</h1>
          </button>
         </div>
      </div>
    </>
  )
}

export default HelpScreen;
