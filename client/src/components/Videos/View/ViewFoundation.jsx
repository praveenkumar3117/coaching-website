import React from 'react'
import { Link } from 'react-router-dom'
import { GoBeaker } from 'react-icons/go'
import { BiAtom } from 'react-icons/bi'
import { TbMathSymbols } from 'react-icons/tb'
import { GiCaduceus } from 'react-icons/gi'
import { HiGlobe } from 'react-icons/hi'

const ViewFoundation = () => {
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
    },
    {
      'title':'Biology',
      'icon':GiCaduceus
    },
    {
      'title':'Social Studies',
      'icon':HiGlobe 
    }]
  

  return (
    <div className='my-32 flex flex-col md:flex-row lg:flex-row px-2 justify-center items-center'>

      {
        array.map((item)=>(
          <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg lg:border lg:border-red-200 lg:w-96 lg:mx-4 my-4 px-4 hover:bg-gray-200 active:bg-gray-300">
            <Link to= {`/watch/student/Foundation/${item.title}`}>
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

export default ViewFoundation