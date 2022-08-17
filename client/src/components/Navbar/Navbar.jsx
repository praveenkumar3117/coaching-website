import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {

  let Links = [
    { name: "Home", l: "home" },
    { name: "Courses", l: "projects" },
    { name: "SEAT/VSAT", l: "contact" },
    { name: "Users", l: "contact" },
    { name: "Payments", l: "contact" },
    { name: "Our Centers", l: "contact" },
    { name: "About Us", l: "contact" },
    { name: "Gallery", l: "contact" },
    { name: "Contact Us", l: "contact" }

  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl md:text-2xl cursor-pointer flex items-center 
       text-blue-700 font-signature '>
          Vulture Institute
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          {open ? <FaTimes className='text-blue-700' /> : <GiHamburgerMenu name={open ? 'close' : 'menu'} className='text-blue-700' />}
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-gray-100 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
                <Link to={link.l} smooth duration={500} spy={true} className='text-2xl hover:border-b-2 hover:border-blue-700 text-black hover:text-blue-700 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar