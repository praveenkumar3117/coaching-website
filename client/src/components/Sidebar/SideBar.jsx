import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRupeeSign, FaBookReader } from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi';
import {IoMdPhotos} from 'react-icons/io'
import {MdSpaceDashboard} from 'react-icons/md'
import {BsFillFilePersonFill} from 'react-icons/bs'

const SideBar = () => {

const [open, setOpen]=useState(true);
  
return (
    <div className={`z-40 absolute mr-4 border border-black w-16`}>
      
      <aside class={`${(open)?"w-64 duration-500":"w-0 duration-500"} relative h-screen`} aria-label="Sidebar">
      <div class="overflow-y-auto h-screen py-4 px-3 bg-gray-50 dark:bg-blue-500">
          
          <ul class="space-y-2">
              <li>
                  <a href="#" onClick={()=>{setOpen(!open)}} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-black h-10">
                  <MdSpaceDashboard/>
                  <span class="flex-1">{open?"Dashboard":""}</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10">
                  <FaBookReader/>
                  <span class="flex-1 whitespace-nowrap">{open?"Dashboard":""}</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10">
                  <IoMdPhotos />
                  <span class="flex-1 whitespace-nowrap">{open?"Dashboard":""}</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10">
                  <BsFillFilePersonFill/>
                  <span class="flex-1 whitespace-nowrap">{open?"Dashboard":""}</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10">
                  <FaRupeeSign/>
                  <span class="flex-1 whitespace-nowrap">{open?"Dashboard":""}</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10">
                  <FiLogIn/>
                  <span class="flex-1 whitespace-nowrap">{open?"Dashboard":""}</span>
                  </a>
              </li>
              
          </ul>
      </div>
      </aside>
    </div>
  )
}

export default SideBar