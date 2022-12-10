import React from 'react'
import {GoBeaker } from 'react-icons/go';
import {BiAtom} from 'react-icons/bi';
import {TbMathSymbols} from 'react-icons/tb'
import { Link } from 'react-router-dom';

const ViewJEE = () => {
  
  const array = [
    {
      'title':'Physics',
      'icon':GoBeaker
    },
    {
      'title':'Chemistry',
      'icon':BiAtom
    }, 
    {
      'title':'Maths',
      'icon':TbMathSymbols
    }]
  

  return (
    <div className='my-32 flex flex-col md:flex-row lg:flex-row px-2 justify-center items-center'>

      {
        array.map((item, index)=>(
          <div key={index} className="mx-auto max-w-sm rounded overflow-hidden shadow-lg lg:border lg:border-red-200 lg:w-96 lg:mx-4 my-4 px-4 hover:bg-gray-200 active:bg-gray-300">
            <Link to= {`/watch/student/JEE/${item.title}`}>
              <item.icon className=" mx-auto w-48 h-48"/>
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 select-none">{item.title}</div>
                
              </div>
            </Link>
          </div>
        ))
      }



    </div>
  )

}

export default ViewJEE