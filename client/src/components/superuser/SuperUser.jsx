import React from "react";
// import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { FiUserPlus, FiUserX } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SuperUser = () => {

    const navigate = useNavigate();
    
  return (
    <section
      className="
      my-24
    flex
    flex-row
    justify-center
    items-center"
    >
      {/* sidebar */}
      
        <div className="
        shadow-lg
        rounded-lg
        my-8
        mx-2
        p-16
        w-full
        md:w-1/3
        sm:w-1/3
        bg-white
        flex
        flex-col
        justify-center
        items-center">
            <div className="pb-8 flex flex-row justify-center items-center font-inter text-2xl">
                <MdSpaceDashboard/>
                Dashboard
            </div>
            
            <div className="
            flex
            flex-row
            items-center
            justify-center
            m-2
            rounded-lg
            mx-auto
            bg-white
            w-4/5
            h-12
            p-8
            text-sm
            font-bold
            border
            border-black
            hover:bg-blue-500
            hover:text-white
            duration-300
            select-none" onClick={()=>{navigate('/admin/adduser')}}>
                <FiUserPlus className="
                mx-2
                text-xl"/>
                Add User
            </div>

            <div className="
            flex
            flex-row
            items-center
            justify-center
            m-2
            rounded-lg
            mx-auto
            bg-white
            w-4/5
            h-12
            p-8
            text-sm
            font-bold
            border
            border-black
            hover:bg-blue-500
            hover:text-white
            duration-300
            select-none" onClick={()=>{navigate('/admin/deleteuser')}}>
                <FiUserX className="
                mx-2
                text-xl"/>
                Delete User
            </div>
        </div>


      
    </section>
  );
};

export default SuperUser;
