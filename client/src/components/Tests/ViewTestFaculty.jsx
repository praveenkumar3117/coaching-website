import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { MdDone, MdUpcoming } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const ViewTestFaculty = () => {

  const [subject, setSubject] = useState(null);
  const navigate=useNavigate();

  useEffect(()=>{
    
    try{
      const data = JSON.parse(localStorage.getItem("data"))
      setSubject(data.result.subject);

    }catch(err){
      navigate('/login');
    }

  }, [subject])




  return (

    <section className="text-gray-400 bg-gray-100 body-font pt-16">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center select-none -m-4 text-center">
                <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <a href="https://vulture.ezexam.in/performance?months=24" target={'_blank'}>
                        <div className="h-24 hover:scale-100 hover:bg-orange-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <MdDone className="title-font font-medium text-4xl text-black" />
                            <p className="text-4xl text-black leading-relaxed">Past Tests</p>
                        </div>
                    </a>
                </div>
                
                <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <Link to={`/upcoming-tests/faculty/${subject}`}>
                        <div className="h-24 hover:scale-100 hover:bg-yellow-300 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <MdUpcoming className="title-font font-medium text-4xl text-black" />
                            <p className="text-4xl text-black leading-relaxed">Upcoming Tests</p>
                        </div>
                    </Link>
                </div>

                <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
                    <Link to={'/faculty/analysis'}>
                        <div className="h-24 hover:scale-100 hover:bg-green-400 duration-300 border-2 border-gray-800 px-4 py-6 rounded-lg flex justify-center align-middle items-center space-x-4">
                            <BsGraphUp className="title-font font-medium text-6xl text-black" />
                            <p className="text-2xl text-black leading-relaxed">Test Analysis</p>
                        </div>
                    </Link>
                </div>
                  
            </div>
        </div>
    </section>




    
    // <div className='pt-32 lg:pt-24 md:pt-24 flex justify-center items-center select-none'>
    //     <a href="https://vulture.ezexam.in/performance?months=24" target={'_blank'}>
    //         <div className='p-4 m-4 bg-[#5F9DF7] text-xl hover:bg-[#1746A2] active:bg-[#5F9DF7] rounded text-white flex flex-row'>
    //         <MdDone/>
    //         Past Tests' Performance
    //         </div>
    //     </a>

    //     <Link to={`/upcoming-tests/faculty/${subject}`} >

    //         <div className='p-4 m-4 bg-[#FF731D] hover:text-black active:text-white text-xl hover:bg-orange-300 active:bg-[#FF731D] rounded text-white flex flex-row'>
    //         <MdUpcoming />
    //         Upcoming Tests
    //         </div>
    //     </Link>

    //     <Link to={'/faculty/analysis'}>
    //         <div>
    //         <BsGraphUp/>
    //         Test Analysis
    //         </div>
        
    //     </Link>

    // </div>
  );
};

export default ViewTestFaculty;
