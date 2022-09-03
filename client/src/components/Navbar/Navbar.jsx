import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaRupeeSign, FaBookReader } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoMdPhotos } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
// import SideBarNarrow from '../Sidebar/SideBarNarrow';
// import SideBarBroad from '../Sidebar/SideBarBroad';

const Navbar = () => {
  let Links = [
    { name: "Home", l: "/" },
    //{ name: "Courses", l: "/Courses"},
    //{ name: "SEAT/VSAT", l: "contact"},
    //{ name: "Payments", l: "contact"},
    //{ name: "Our Centers", l: "contact"},
    { name: "About Us", l: "/about" },
    //{ name: "Gallery", l: "contact"},
    { name: "Contact Us", l: "contact" },
    { name: "Login", l: "/login" },
  ];

  let [open, setOpen] = useState(false);

  

  useEffect(() => {
    setOpen(false);
  }, []);


  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-gray-500 py-4 md:px-10 px-7">
        <div
          className="font-medium text-4xl md:text-4xl select-none flex items-center 
       text-white  font-inter font-signature"
        >
          <button
            className="border border-black"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
          <Link to="/"> Vulture Institute</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? (
            <FaTimes onBlur={()=>{setOpen(!open); console.log(open)} } className="text-white" />
          ) : (
            <GiHamburgerMenu
              name={open ? "close" : "menu"}
              className="text-white"
            />
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 absolute lg:static bg-gray-500 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-1000px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 text-xl mx-auto lg:my-0 my-7"
            >
              <Link
                to={link.l}
                onClick={() => {
                  setOpen(!open);
                }}
                smooth
                duration={500}
                spy={true}
                className="text-2xl text-center hover:border-b-2 hover:border-yellow-200 text-white hover:text-yellow-200 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {/* -----------------SIDE BAR--------------------- */}
              
      {open?
      <div className={`z-40 fixed mr-4 w-16`}>
        <aside
          class={`${
            open ? "w-64 duration-500" : "w-0 duration-500"
          } relative h-screen`}
          aria-label="Sidebar"
        >
          <div class="overflow-y-auto h-screen py-4 px-3 bg-gray-50 dark:bg-blue-500">
            <ul class="space-y-2">
              <li>
                <Link to="/">
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-black h-10"
                >
                  <MdSpaceDashboard />
                  <span class="flex-1">{open ? "Dashboard" : ""}</span>
                </div>
                </Link>
              </li>
              <li>
                <Link to='/courses'>
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <FaBookReader />
                  <span class="flex-1 whitespace-nowrap">
                    {open ? "Courses" : ""}
                  </span>
                </div>
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <IoMdPhotos />
                  <span class="flex-1 whitespace-nowrap">
                    {open ? "Gallery" : ""}
                  </span>
                </div>
                </Link>
              </li>
              <li>
                <Link to="/admission">
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <BsFillFilePersonFill />
                  <span class="flex-1 whitespace-nowrap">
                    {open ? "Admission" : ""}
                  </span>
                </div>
                </Link>
              </li>
              <li>
                <Link to="/payments">
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <FaRupeeSign />
                  <span class="flex-1 whitespace-nowrap">
                    {open ? "Payments" : ""}
                  </span>
                </div>
                </Link>
              </li>
              <li>
                <Link to='/login'>
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <FiLogIn />
                  <span class="flex-1 whitespace-nowrap">
                    {open ? "Login" : ""}
                  </span>
                </div>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      :""}


    </div>

  );
};

export default Navbar;
