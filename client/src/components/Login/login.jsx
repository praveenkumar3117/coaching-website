import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async() => {
    let result = await fetch("http://localhost:5000/api/SuperUser/login/admin", {
      method:'post',
      body: JSON.stringify({email, password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    console.log(JSON.stringify({email, password}))
    result = await result.json();
    navigate('/admin');
    localStorage.setItem("token",result.token);
    console.log(result);
  }


  const id = window.location.href
  console.log(id.slice(28))

  return (
    <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                {/* Email input */}
                <div className="mb-6">
                  <input type="email" onChange={(event)=>{setEmail(event.target.value)}} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Email address" />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input type="password" onChange={(event)=>{setPassword(event.target.value)}} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password" />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                  </div>
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>
                <div className="text-center lg:text-left">
                  <button onClick={handleLogin} type="button" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a href="#!" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login;