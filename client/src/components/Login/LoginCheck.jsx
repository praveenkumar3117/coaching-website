import React from 'react'
import { Link } from 'react-router-dom'
import student from './images/student.jpg'
import admin from './images/admin.jpg'
import teacher from './images/teacher.jpg'
//object-cover -- img tag

const LoginCheck = () => {
  return (
    <section class="text-black md:pt-12 lg:pt-12 bg-gray-100 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-center" src={student} alt="blog"/>
          <div class="p-6 space-y-10">
            <h2 class="tracking-widest text-4xl title-font font-medium text-black mb-1">Are you a Student ?</h2>
            <div class="flex items-center flex-wrap justify-center">
              <Link to='/login/student' class="hover:cursor-pointer hover:text-white hover:bg-blue-900 duration-300 rounded-md p-2 text-blue-900 inline-flex items-center md:mb-2 lg:mb-0 text-2xl">Login
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full  object-center" src={teacher} alt="blog"/>
          <div class="p-6 space-y-10">
            <h2 class="tracking-widest text-4xl title-font font-medium text-black mb-1">Are you a Teacher ?</h2>
            <div class="flex items-center flex-wrap justify-center">
              <Link to='/login/teacher'  class="hover:cursor-pointer hover:text-white hover:bg-blue-900 duration-300 rounded-md p-2 text-blue-900 inline-flex items-center md:mb-2 lg:mb-0 text-2xl">Login
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-center" src={admin} alt="blog"/>
          <div class="p-6 space-y-10">
            <h2 class="tracking-widest text-4xl title-font font-medium text-black mb-1">Are you a Administrator ?</h2>
            <div class="flex items-center flex-wrap justify-center">
              <Link to='/login/admin' class="hover:cursor-pointer hover:text-white hover:bg-blue-900 duration-300 rounded-md p-2 text-blue-900 inline-flex items-center md:mb-2 lg:mb-0 text-2xl">Login
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default LoginCheck