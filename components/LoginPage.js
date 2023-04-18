"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import Image from 'next/image';



const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 z-0">
        <ImageSlider />
      </div>
      <motion.div 
        className="relative z-20  bg-white rounded-md p-10 md:w-1/3   shadow-lg shadow-black"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 ,transition: { duration: 1 }}}
        >
        <h1 className="text-3xl text-black  font-semibold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4 ">
            <label htmlFor="userID" className="block text-gray-700 font-medium mb-2">
              User ID
            </label>
            <input
              type="text"
              id="userID"
              className="w-full px-4  py-2 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your User ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4  py-2 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 text-center w-full mr-2 mb-2"
          >
            Login
          </button>
        </form>
        <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </div>
        {/* Login form goes here */}
      </motion.div>
    </div>
  );
};

export default LoginPage;
