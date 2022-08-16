import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
        <h2 className='text-5xl select-none text-black font-lato mb-16 font-bold'>Our Products</h2>
        <div className="max-w-sm w-9/12 rounded-lg overflow-hidden shadow-lg bg-white mx-auto">
            <img className="w-1/2 mx-auto" src="../images/youtube.svg" alt="YouTube" />

            <div className="px-6 py-4">
                <div className="font-bold select-none text-black text-xl mb-2">We have a YouTube channel</div>  
            </div>

            <div className="px-6 pt-4 pb-2 mb-8">
            <Link to="/" className="bg-blue-700 rounded-full px-12 w-1/2 py-4 text-xl mx-auto font-lato text-white mb-4 hover:bg-white hover:text-blue-400 hover:border hover:border-sky-400  active:bg-gray-500 active:border-none active:text-white">Visit</Link>
            </div>

        </div>
    </div>
  )
}

export default Products;