import React from "react";
import { useState } from "react";
// import { Link } from 'react-router-dom'
//import { AiFillHome } from "react-icons/ai";
import { FiUserPlus, FiUserX } from "react-icons/fi";
// import { MdSpaceDashboard } from "rea
import { useNavigate } from "react-router-dom";

const SuperUser = () => {
  

  const navigate = useNavigate();

  return (
    <section className="text-gray-400 bg-gray-100 body-font pt-16">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="border-b-2 border-blue-700 w-1/4 py-2 mx-auto text-4xl md:text-6xl font-medium title-font mb-4 text-black">Dashboard</h1>
            </div>
            <div onClick={()=>{navigate('/admin/addstudent')}} className="flex flex-wrap -m-4 text-center">

                <div  className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <div className="h-24 hover:scale-100 hover:bg-orange-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                        <FiUserPlus className="title-font font-medium text-6xl text-black" />
                        <p className="text-2xl select-none text-black leading-relaxed">Add Student</p>
                    </div>
                </div>

                <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <div className="h-24 hover:scale-100 hover:bg-green-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                        <FiUserX className="title-font font-medium text-6xl text-black" />
                        <p className="text-2xl select-none text-black leading-relaxed">Remove Student</p>
                    </div>
                </div>

                <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <div className="h-24 hover:scale-100 hover:bg-blue-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                        <FiUserPlus className="title-font font-medium text-6xl text-black" />
                        <p className="text-2xl select-none text-black leading-relaxed">Add Faculty</p>
                    </div>
                </div>

                <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <div className="h-24 hover:scale-100 hover:bg-yellow-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                        <FiUserX className="title-font font-medium text-6xl text-black" />
                        <p className="text-2xl select-none text-black leading-relaxed">Remove Faculty</p>
                    </div>
                </div>                  
            </div>
        </div>
    </section>
  );
};

export default SuperUser;
