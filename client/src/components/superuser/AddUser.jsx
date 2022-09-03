import React from 'react'
import { useState } from 'react'

const AddUser = () => {

    const [userType, setUserType] = useState('');
    const setUser = (userType)=>{
      setUserType(userType);
      console.log("HELLO")
    }

  return (  
    <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container max-w-sm mx-auto flex-1 my-24 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>


            <label for="user" class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Select User Type</label>
            <select id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8" >
                <option className="h-24" value=""> <div onClick={()=>setUser("userType")}>User Type</div> </option>
                <option className="h-8" value="Student" onClick={()=>{setUserType('Student');console.log(userType);}}>Student</option>
                <option className="h-8" value="Faculty" onClick={()=>{setUserType('Faculty');console.log(userType);}}>Faculty</option>
            </select>

            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />
            <button type="submit" onClick={()=>setUser("hello")} className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1 active:border focus:ring-2 focus:ring-blue-400 ">Create Account</button>
           
          </div>
          
{/* Enrollment Number
Batch - JEE NEET fOund
Year 
Admin, Faculty, Studnet */}

        </div>
      </div>
  )
}

export default AddUser