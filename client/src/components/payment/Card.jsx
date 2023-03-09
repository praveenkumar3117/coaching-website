import React from 'react'

const Card = ({ amount,checkoutHandler, courseName}) => {
  console.log(amount)
  return (
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
          <div className='select-none'>
              <img class="p-8 rounded-t-lg" src="../images/user.png" alt="product image" />
          </div>
          <div class="px-5 pb-5">
              <div>
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white select-none">{courseName}</h5>
              </div>
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">₹{amount} </span>
                  <button class="text-white bg-blue-700 hover:bg-blue-800 shadow-lg active:shadow-md focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>checkoutHandler(amount,courseName)}>Buy Now</button>
              </div>
          </div>
      </div>


  )
}

export default Card