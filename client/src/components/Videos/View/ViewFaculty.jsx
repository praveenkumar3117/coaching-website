import React from 'react'
import {FcEngineering} from 'react-icons/fc'
import {MdLocalHospital} from 'react-icons/md'
import {GiFlyingFlag} from 'react-icons/gi'
import ViewNEET from './ViewNEET'
import ViewJEE from './ViewJEE'
import ViewFoundation from './ViewFoundation'
import { Link } from 'react-router-dom'

const ViewFaculty = () => {
  
  const array = [
    {
      'title':'JEE',
      'icon':FcEngineering
    },
    {
      'title':'NEET',
      'icon':MdLocalHospital
    }, 
    {
      'title':'Foundation',
      'icon':GiFlyingFlag
    }]
  

  return (
    <div className='my-32 flex flex-col md:flex-row lg:flex-row px-2 justify-center items-center'>

      {
        array.map((item)=>(
          <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg lg:border lg:border-red-200 lg:w-96 lg:mx-4 my-4 px-4 hover:bg-gray-200 active:bg-gray-300">
            <Link to= {`/watch/${item.title}`}>
              <item.icon className=" mx-auto w-48 h-48"/>
              {/* <img className="w-full" src="./images/user.png" alt="Sunset in the mountains" /> */}
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 select-none">{item.title}</div>
                {/* <p className="text-gray-700 text-base">
                  Lecture1
                </p>   */}
              </div>
            </Link>
          </div>
        ))
      }



    </div>
  )
}

export default ViewFaculty