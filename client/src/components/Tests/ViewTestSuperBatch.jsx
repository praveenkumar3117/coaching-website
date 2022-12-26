import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { FcBusinesswoman } from 'react-icons/fc';
import { GiCaduceus, GiBrain } from 'react-icons/gi';

const ViewTestSuperBatch = () => {


  const params = useParams();
  const {batchYear} = params;
  console.log(batchYear);

  return (
    
    <div className='flex flex-row justify-center items-center pt-32'>

        <div className="pt-24 my-4 w-9/12 md:w-1/4 justify-center items-center flex flex-col mx-auto">
                
            <div className="px-4 w-full bg-white rounded-lg hover:drop-shadow-2xl ring-offset-transparent ring-black shadow-md dark:bg-sky-500 dark:border-gray-700">
                
                <div className="flex flex-col items-center pb-10">
                
                <FcBusinesswoman className={`mb-3 w-20 h-20 relative bottom-10 rounded-full shadow-lg bg-red-300`}/>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link to={`/viewtest/admin/${batchYear}/JEE`} className="inline-flex items-center py-2 px-4 text-2xl font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-300 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-white-800 font-lato">JEE</Link>
                </div>
                </div>
            </div>
        </div>
        
        <div className="pt-24 my-4 w-9/12 md:w-1/4 justify-center items-center flex flex-col mx-auto">
            
            <div className="px-4 w-full bg-white rounded-lg hover:drop-shadow-2xl ring-offset-transparent ring-black shadow-md dark:bg-sky-500 dark:border-gray-700">
            
            <div className="flex flex-col items-center pb-10">
            
            <GiCaduceus className={`mb-3 w-20 h-20 relative bottom-10 rounded-full shadow-lg bg-white`}/>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <Link to={`/viewtest/admin/${batchYear}/NEET`} className="inline-flex items-center py-2 px-4 text-2xl font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-300 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-white-800 font-lato">NEET</Link>
            </div>
            </div>
        </div>
        </div>

        <div className="pt-24 my-4 w-9/12 md:w-1/4 justify-center items-center flex flex-col mx-auto">
            
            <div className="px-4 w-full bg-white rounded-lg hover:drop-shadow-2xl ring-offset-transparent ring-black shadow-md dark:bg-sky-500 dark:border-gray-700">
            
            <div className="flex flex-col items-center pb-10">
            
            <GiBrain className={`mb-3 w-20 h-20 relative bottom-10 rounded-full shadow-lg bg-white`}/>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <Link to={`/viewtest/admin/${batchYear}/Foundation`} className="inline-flex items-center py-2 px-4 text-2xl font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-300 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-white-800 font-lato">Foundation</Link>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ViewTestSuperBatch