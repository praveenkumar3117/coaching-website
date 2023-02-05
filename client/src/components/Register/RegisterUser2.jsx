import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterUser2 = () => {

  const role = "Student";

//   const [batch, setBatch] = useState('JEE');
  const [name, setUserName] = useState('');
//   const [fatherName, setUserFatherName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [confirmeduserpassword, setConfirmedUserPassword] = useState('');
//   const [enRoll, setEnrollNum] = useState('');
  const [phone, setPhoneNumber] = useState(0);
  const [category, setCategory] = useState(0);
//   const [year, setYear] = useState(0);
  const [DOB, setDOB] = useState(new Date());
  const [warning, setWarning]=useState("");
  
  const batches = ['JEE', 'NEET', 'Foundation'];

  const handleDOB = (event)=>{
    console.log(event.target.value);
    setDOB(new Date(`${event.target.value}Z`));
  }
  
  // Navigation
  const navigate = useNavigate();

  const AddStudent = async(event)=>{
    // Prevent Reloading of the page
    event.preventDefault();

    // first we need token of the admin
    //   const user = JSON.parse(localStorage.getItem("data"));
    //   const Token = user.result.token;
    //   console.log(Token); // token fetch successful
    //   console.log(category)

    // check if the password and confirmed password are same of not
    if(password===confirmeduserpassword && password.length >= 5){

        // Now check if the token is of admin or not
        let result = await fetch("http://localhost:5000/api/User2/register/user2",
        {
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name, email, password, phone, DOB})

        });

        result = await result.json();
        if(result.success){
          localStorage.setItem("data", JSON.stringify({result, ...{userloggedin: 3, loggedin:true}})); // save data in localstorage
          navigate('/');
        }else{
          setWarning(result.message);
        }
    }
  }


  return (
    <form onSubmit={AddStudent}>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
          <div className="container w-full lg:w-1/3 mx-auto flex-1 my-24 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>

              {/* for selecting batch  */}
              {/* <label for="user" class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Batch</label>

              <select id="user" onChange={(event)=>{setBatch(event.target.value)}}
              class="block border border-grey-light w-full p-3 rounded mb-4" >

                  {batches.map((sBatch, index)=>{
                    return <option className='h-80' value = {sBatch} key={index}>{sBatch}</option>
                  })}

              </select> */}

              {/* for Category */}
              {/* <div className='w-full my-4 flex justify-center flex-col md:flex-row lg:flex-row'>
                  <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                      > Select Category </label>
                      <div className='mx-2 px-2'>  
                      <label className='mx-2' htmlFor="1">1</label>
                      <input type="radio" onChange={(e)=>{setCategory(1)}} name="category" id="1" value={'1'} />
                      </div>

                      <div className='mx-2 px-2'>
                      <label htmlFor="NEET" className='mx-2'>2</label>
                      <input type="radio" onChange={(e)=>{setCategory(2)}} name="category" id="2" value={'2'}/>
                      </div>

                      <div className='mx-2 px-2'>
                      <label htmlFor="NEET" className='mx-2'>2</label>
                      <input type="radio" onChange={(e)=>{setCategory(3)}} name="category" id="3" value={'3'}/>
                      </div>

                      <div className='mx-2 px-2'>
                      <label htmlFor="NEET" className='mx-2'>4</label>
                      <input type="radio" onChange={(e)=>{setCategory(4)}} name="category" id="4" value={'4'}/>
                      </div>

                      <div className='mx-2 px-2'>
                      <label htmlFor="NEET" className='mx-2'>5</label>
                      <input type="radio" onChange={(e)=>{setCategory(5)}} name="category" id="5" value={'5'}/>
                      </div>
              </div> */}



              {/* for Username  */}
              <input required type="text" onChange={(event)=>{setUserName(event.target.value)}} className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />

              {/* for Father's Name  */}
              {/* <input required type="text" onChange={(event)=>{setUserFatherName(event.target.value)}} className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Father's Name" /> */}

              {/* for Email  */}
              <input required onChange={(event)=>{setUserEmail(event.target.value)}} type="email" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />

              {/* for Enrollment Number  */}
              {/* <input required onChange={(event)=>{setEnrollNum(event.target.value)}} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="enRoll" placeholder="Enrollment Number" /> */}

              {/* for Year of Joining  */}
              {/* <input required onChange={(event)=>{setYear(event.target.value)}} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="text" placeholder="Year of Joining" /> */}

              {/* For DOB */}
              <label htmlFor="dob" className='text-left mr-64 font-bold text-gray-500'>DOB</label>
              <input required onChange={handleDOB} type="date" className="block border border-grey-light w-full p-3 rounded mb-4" name="date" placeholder="Date of Birth" />

              {/* for Phone Number  */}
              <input required onChange={(event)=>{setPhoneNumber(event.target.value)}} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="phone" placeholder="Phone" />

              {/* Password */}
              <input required onChange={(event)=>{setUserPassword(event.target.value)}} type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                
              {/* Confirm Password */}
              <input required onChange={(event)=>{setConfirmedUserPassword(event.target.value)}} type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />

              {/* Warning if user already exists */}
              <label className='text-red-400 font-bold pb-6' htmlFor="warning">{warning}</label>

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

export default RegisterUser2;