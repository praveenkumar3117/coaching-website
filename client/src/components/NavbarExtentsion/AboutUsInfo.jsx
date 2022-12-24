import React from 'react';
import { FaPrayingHands } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io5';
import {AiOutlineTeam} from 'react-icons/ai';
import { BsFillPenFill } from 'react-icons/bs';
// import { useEffect } from 'react';
// import { useState } from 'react';

const AboutUsInfo = () => {

    // const [change, detectChange]=useState(0);
    // useEffect(()=>{
    //     window.onblur = (e)=>{
    //         console.log(e);
            
    //     }
    // }, [])

    return (
        <section className="text-gray-400 bg-gray-100 body-font pt-16">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="border-b-2 border-blue-700 w-1/4 py-2 mx-auto text-4xl md:text-6xl font-medium title-font mb-4 text-black">About Us</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">

                    <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                        <div className="h-24 hover:scale-100 hover:bg-blue-500 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <BsFillPenFill className="title-font font-medium text-4xl text-black" />
                            <p className="text-4xl text-black leading-relaxed">Blogs</p>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                        <div className="h-24 hover:scale-100 hover:bg-yellow-300 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <FaPrayingHands className="title-font font-medium text-5xl text-black" />
                            <p className="text-4xl text-black leading-relaxed">Welcome</p>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                        <div className="h-24 hover:scale-100 hover:bg-green-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <IoPersonAddSharp className="title-font font-medium text-6xl text-black" />
                            <p className="text-2xl text-black leading-relaxed">From Director's Desk</p>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                        <div className="h-24 hover:scale-100 hover:bg-cyan-300 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <AiOutlineTeam className="title-font font-medium text-5xl text-black" />
                            <p className="text-3xl text-black leading-relaxed">Team Vulutre</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
    )
}

export default AboutUsInfo