import React from 'react'
import {FcBusinesswoman} from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-section py-2 my-16 object-contain justify-center items-center flex flex-col mx-auto">
        
        <div className=" w-full max-w-sm bg-white rounded-lg hover:drop-shadow-2xl ring-offset-transparent ring-black shadow-md dark:bg-sky-500 dark:border-gray-700">
          

        <div className="flex flex-col items-center pb-10">
          <FcBusinesswoman className="mb-3 w-24 bg-red-300 relative bottom-10 h-24 rounded-full shadow-lg"/>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">IIT-JEE</h5>
          <span className="text-sm text-white dark:text-white">Courses for JEE Main and Advanced</span>

          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link to="/" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-300 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-white-800">Read More</Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero;