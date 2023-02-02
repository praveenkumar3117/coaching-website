import React from 'react'
import { BsPhoneFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const AskUser = () => {
  return (
    <section className="text-gray-400 bg-gray-100 body-font pt-16">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="border-b-2 border-blue-700 w-1/4 py-2 mx-auto text-4xl md:text-6xl font-medium title-font mb-4 text-black">Choose User</h1>
                </div>
                <div className="flex flex-wrap justify-center items-center -m-4 text-center">

                    <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                        <Link to="/login/student">
                            <div className="h-24 hover:scale-100 hover:bg-yellow-300 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                                <AiFillHome className="title-font font-medium text-5xl text-black" />
                                <p className="text-2xl text-black leading-relaxed">Offline Student</p>
                            </div>
                        </Link>
                    </div>

                    <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                        <Link to="/login/user2">
                            <div className="h-24 hover:scale-100 hover:bg-green-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                                <BsPhoneFill className="title-font font-medium text-6xl text-black" />
                                <p className="text-2xl text-black leading-relaxed">Online Student</p>
                            </div>
                        </Link>
                    </div>                  
                </div>
            </div>
        </section>
  )
}

export default AskUser