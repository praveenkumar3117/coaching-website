import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

  const role = "Student";

  const [batch, setBatch] = useState('JEE');
  const [name, setUserName] = useState('');
  const [fatherName, setUserFatherName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [confirmeduserpassword, setConfirmedUserPassword] = useState('');
  const [enRoll, setEnrollNum] = useState('');
  const [phone, setPhoneNumber] = useState(0);
  const [year, setYear] = useState(0);
  
  // const options = ["Student", "Faculty"];
  const batches = ['JEE', 'NEET', 'Foundation'];

  
  // Navigation
  const navigate = useNavigate();

  const AddStudent = async(event)=>{
    // Prevent Reloading of the page
    event.preventDefault();

    // first we need token of the admin
      const user = JSON.parse(localStorage.getItem("data"));
      const Token = user.result.token;
      console.log(Token); // token fetch successful

    // check if the password and confirmed password are same of not
    if(password===confirmeduserpassword && password.length >= 5){

        // Now check if the token is of admin or not
        let result = await fetch("http://localhost:5000/api/User/register/user",
        {
          method:'post',
          headers:{
            'Content-Type':'application/json',
            'authorization':'Bearer '+Token
          },
          body:JSON.stringify({name, email, password, phone, enRoll, batch, year, role, fatherName})

        });

        result = await result.json();
        console.log(result);
        console.log(result.message);
        console.log(result.success);
        if(result.success){
          navigate('/');
        }
        // else{
        //     return (
        //       <>
        //         <h1>Something Went Wrong</h1>
        //       </>
        //     )
        // }
    }
  }


  return (
    <form onSubmit={AddStudent}>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
          <div className="container max-w-sm mx-auto flex-1 my-24 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>

              {/* for selecting batch  */}
              <label for="user" class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Batch</label>

              <select id="user" onChange={(event)=>{setBatch(event.target.value)}}
              class="block border border-grey-light w-full p-3 rounded mb-4" >

                  {/* <option className="h-24" value="User"> {opti} </option> */}
                  {batches.map((sBatch, index)=>{
                    return <option className='h-80' value = {sBatch} key={index}>{sBatch}</option>
                  })}

              </select>

              {/* for Username  */}
              <input required type="text" onChange={(event)=>{setUserName(event.target.value)}} className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />

              {/* for Father's Name  */}
              <input required type="text" onChange={(event)=>{setUserFatherName(event.target.value)}} className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Father's Name" />

              {/* for Email  */}
              <input required onChange={(event)=>{setUserEmail(event.target.value)}} type="email" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />

              {/* for Enrollment Number  */}
              <input required onChange={(event)=>{setEnrollNum(event.target.value)}} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="enRoll" placeholder="Enrollment Number" />

              {/* for Year of Joining  */}
              <input required onChange={(event)=>{setYear(event.target.value)}} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="text" placeholder="Year of Joining" />

              {/* For DOB */}
              {/* <label htmlFor="dob" className='text-left mr-64 font-bold text-gray-500'>DOB</label> */}
              {/* <input required onChange={(event)=>{setUserEmail(event.target.value)}} type="date" className="block border border-grey-light w-full p-3 rounded mb-4" name="date" placeholder="Date of Birth" onFocus={(e)=>{e.target.type='date'}} onBlur={(e)=>{e.target.type='text'}} /> */}

              {/* for Phone Number  */}
              <input required onChange={(event)=>{setPhoneNumber(event.target.value)}} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="phone" placeholder="Phone" />

              {/* Password */}
              <input required onChange={(event)=>{setUserPassword(event.target.value)}} type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                
              {/* Confirm Password */}
              <input required onChange={(event)=>{setConfirmedUserPassword(event.target.value)}} type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />

              {/* Matching Password and Confirm Password */}
              {
                password===confirmeduserpassword ?
                "" :
                <label className='text-red-400 font-bold pb-6' htmlFor="check-same-password">!Password and Confirm Password are different <br /></label>

              }

              {/* Checking Password Length */}
              {
                password.length >= 5 ?
                "" :
                <label className='text-red-400 font-bold pb-6' htmlFor="check-same-password">!Password should be atleast 5 characters long</label>

              }

              <input type="submit" className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1 active:border focus:ring-2 focus:ring-blue-400 " value= "Create Account"/>

            </div>


        </div>
      </div>
    </form>


    


  )
}

export default AddStudent;
{/* Enrollment Number
  Batch - JEE NEET fOund
  Year 
  Admin, Faculty, Studnet */}