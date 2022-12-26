import React, { useEffect, useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FaTimes, FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import {BiUserCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";


const NavbarSuperUser = () => {

  // Get email from Login-Context
  const {userloggedin,setUserloggedin, email, checkNavbarToLoad} = useContext(LoginContext);


  let [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleLogoutBtn = async () =>{
    setOpen(!open);
    if(userloggedin===0){
      localStorage.removeItem("data");
      setUserloggedin(-1);
    }
    checkNavbarToLoad();
  }


  return (
     <div className="shadow-md w-full fixed top-0 left-0 z-20">
       <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10">
         <div
           className="w-full font-medium text-4xl md:text-4xl select-none flex items-center text-white font-inter font-signature"
         >
           <button
             className="border ml-4 border-black"
             onClick={() => {
               setOpen(!open);
             }}
           > 
             {open ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
            <div className="w-full text-center">
            <Link to="/"> Vulture Institute</Link>
            </div>
         </div>
       </div>

       <div className="text-2xl break-all bg-white text-black">
        {userloggedin===0 ? email:""}
       </div>


      {/* -----------------SIDE BAR--------------------- */}
              
       {open?
       <div className={`z-40 fixed mr-4 w-64`}>
         <aside
           class={`relative h-screen ease-in-out duration-1000`}
           aria-label="Sidebar"
         >
          
           <div class={`overflow-y-auto h-screen py-4 px-3 bg-gray-50 dark:bg-blue-500 ${ open ? "translate-x-0" : "-translate-x-96"} ease-in duration-300`}>
             <ul class="space-y-4">

              {/* Home */}
              <li>
                 <Link to='/' onClick={()=>{setOpen(!open)}}>
                 <div
                   class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                 >
                   <FaHome />
                   <span class="flex-1 text-2xl whitespace-nowrap">
                     {open ? "Home" : ""}
                   </span>
                 </div>
                 </Link>
               </li>
              
              {/* Login - Logout */}
              {/* Optimize this by removing one of the links as there are different navbars for different users */}
              <li>
                {/* Check for logged in */}
                {userloggedin===0 ? 
                // if logged in
                <Link to="/" onClick={handleLogoutBtn}>
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <FiLogIn />
                  <span class="flex-1 text-2xl whitespace-nowrap">
                    {open ? "Logout" : ""}
                  </span>
                </div>
                </Link>
                : 
                // if not logged in already
                <Link to = "/login" onClick = {()=>{setOpen(!open)}}>
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <FiLogIn />
                  <span class="flex-1 text-2xl whitespace-nowrap">
                    {open ? "Login" : ""}
                  </span>
                </div>
                </Link>
                }
                
                
              </li>

              {/* Do something with users */}
              <li>
              <Link to="/admin" onClick={()=>{setOpen(!open)}}>
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <BiUserCircle />
                  <span class="flex-1 text-2xl whitespace-nowrap">
                    {open ? "Update Users" : ""}
                  </span>
                </div>
                </Link>
              </li>

              {/* Make a test */}

              <li>
                <Link to="/addtest">
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <MdOutlineCreateNewFolder />
                  <span class="flex-1 text-2xl whitespace-nowrap">
                    {open ? "Make a test" : ""}
                  </span>
                </div>
                </Link>
              </li>

              {/* View Test */}

              <li>
                <Link to="/viewtest/admin">
                <div
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 h-10"
                >
                  <AiOutlineEye />
                  <span class="flex-1 text-2xl whitespace-nowrap">
                    {open ? "View tests" : ""}
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

export default NavbarSuperUser;
