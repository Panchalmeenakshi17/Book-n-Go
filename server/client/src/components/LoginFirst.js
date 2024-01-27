import { motion } from 'framer-motion'
import React from 'react'

const LoginFirst = () => {
  return (
    <>
    <motion.div
        className="bg-gradient-to-r from-[#87e5abe9] from-0% via-[#6bda9550] via-50% to-emerald-200 to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >

    <div className=' p-40 text-7xl font-scnd font-bold text-center '>
        <h1>Please login first</h1>
    </div>
         

      </motion.div>
    </>
  )
}

export default LoginFirst