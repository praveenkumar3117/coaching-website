import React from 'react'

const Card = ({ amount,checkoutHandler, courseName }) => {
  return (
    <div className='flex flex-col justify-center items-center m-4 mx-8 shadow-lg bg-blue-500 rounded  hover:bg-blue-400 active:bg-blue-500'>
        <img className='p-8' src="../images/user.png"></img>
        <div className='text-white text-bold text-2xl '>
          Only Rs {amount}
        </div>
        <div>
          {courseName}
        </div>
        <button className='bg-white rounded p-2 px-4 m-2 hover:bg-slate-200 active:bg-white' onClick={()=>checkoutHandler(amount)}>Buy Now</button>
    </div>
  )
}

export default Card