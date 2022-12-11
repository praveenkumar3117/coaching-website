import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lectures = (props) => {
//   List all lectures here
    const {subject, batch, title, pic, link} = props;
    return (


    <div className='flex mx-4 justify-center my-4 lg:mx-4 md:mx-4'>
      <a href={link} target="_blank">
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-200 active:bg-gray-300">
          <img className="w-full" src={pic} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {title}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lecture 1</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Lectures